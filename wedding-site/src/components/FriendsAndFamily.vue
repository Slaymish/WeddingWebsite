<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import PersonCard from './PersonCard.vue'
import PartyModal from './PartyModal.vue'

// Watch for close modal event (will be emitted from PartyModal.vue)

export default defineComponent({
  name: 'FriendsAndFamily',
  components: { PersonCard, PartyModal },
  data() {
    return {
      honoredGuests: [
        [
          { name: 'Jaime', title: 'Maid of Honor', pictureURL: 'people/jamie.webp' },
          { name: 'Hamish', title: 'Best Man / Brother', pictureURL: 'people/Hamish (1).webp' }
        ]
      ],
      familyPairs: [
        [
          { name: 'Wendy', title: "Groom's Mum", pictureURL: 'people/wendy.webp' },
          { name: 'Bryon', title: "Groom's Dad", pictureURL: 'people/bryon.webp' }
        ],
        [
          { name: 'Sarah', title: "Bride's Mum", pictureURL: 'people/sarah_cropped.webp' },
          { name: 'Steve', title: "Bride's Step-Dad", pictureURL: 'people/steve.webp' }
        ],
        [
          { name: 'Dave', title: "Bride's Dad", pictureURL: 'people/father2.webp' },
          { name: 'Kath', title: "Bride's Step-Mum", pictureURL: 'people/Kath.webp' }
        ],

        [{ name: 'Case', title: "Bride's Brother", pictureURL: 'people/Kase_nobg.webp' }]
      ]
    }
  },
  setup() {
    const observedElements = ref([])
    const modalOpen = ref(false)

    // New method to set the observed element
    const setObservedElement = (el) => {
      if (el) observedElements.value.push(el)
    }

    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = observedElements.value.indexOf(entry.target)
              if (index !== -1) {
                observedElements.value.splice(index, 1) // Remove element from the array once observed
                entry.target.classList.add('visible') // Add 'visible' class to the observed element
              }
              observer.unobserve(entry.target) // Stop observing the current target
            }
          })
        },
        { threshold: 0.6 }
      )

      observedElements.value.forEach((el) => observer.observe(el))
    })

    const openModal = (person) => {
      console.log(person)
      modalOpen.value = true
    }

    return { observedElements, setObservedElement, openModal, modalOpen }
  },
  methods: {
    closeModal() {
      this.modalOpen = false
    }
  }
})
</script>

<template>
  <v-container class="friends-family">
    <!-- Wedding Party Section -->
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="section-title">Wedding Party</h2>
        <!-- Use a new row for each pair to ensure they are on the same line -->
        <v-row v-for="(pair, index) in honoredGuests" :key="index" justify="center">
          <!-- Set cols="6" on medium and larger screens, full width on smaller screens -->
          <v-col cols="6" md="3" v-for="honoredGuest in pair" :key="honoredGuest.name">
            <div :ref="setObservedElement" class="person-card-container">
              <a @click="openModal(honoredGuest)">
                <PersonCard
                  :class="{ visible: honoredGuest.visible }"
                  :name="honoredGuest.name"
                  :title="honoredGuest.title"
                  :pictureURL="honoredGuest.pictureURL"
                />
              </a>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- <PartyModal :honoredGuests="honoredGuests" :familyPairs="familyPairs" :modalOpen="modalOpen" /> -->

    <!-- Family Section -->
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="section-title">Family</h2>
        <!-- Use a new row for each pair to ensure they are on the same line -->
        <v-row v-for="(pair, index) in familyPairs" :key="index" justify="center">
          <!-- Set cols="6" on medium and larger screens, full width on smaller screens -->
          <v-col cols="6" md="3" v-for="familyMember in pair" :key="familyMember.name">
            <div :ref="setObservedElement" class="person-card-container">
              <a @click="openModal(familyMember)">
                <PersonCard
                  :class="{ visible: familyMember.visible }"
                  :name="familyMember.name"
                  :title="familyMember.title"
                  :pictureURL="familyMember.pictureURL"
                />
              </a>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  width: 500px;
  height: 500px;
  background-color: rgb(255, 0, 0);
}

.friends-family {
  margin-top: 2rem;
  max-width: 900px;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
}

.person-card-container {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s,
    transform 0.8s;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: var(--color-text);
  font-family: var(--font-title);
}

.person-card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .person-card-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .person-card-container {
    margin-bottom: 1rem;
  }
}
</style>
