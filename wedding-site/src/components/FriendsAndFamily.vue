<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import PersonCard from './PersonCard.vue'
import DividerComponent from './DividerComponent.vue'

export default defineComponent({
  name: 'FriendsAndFamily',
  components: { PersonCard, DividerComponent },
  data() {
    return {
      honoredGuests: [
        [
          { name: 'Jaime', title: 'Maid of Honor', pictureURL: 'people/blank_profile.jpg'},
          { name: 'Hamish', title: 'Best Man / Brother', pictureURL: 'people/blank_profile.jpg' }
        ]
      ],
      familyPairs: [
        [
          { name: 'Wendy', title: "Groom's Mum", pictureURL: 'people/wendy.JPG' },
          { name: 'Bryon', title: "Groom's Dad", pictureURL: 'people/bryon.JPG' }
        ],
        [
          { name: 'Steve', title: "Bride's Step-Dad", pictureURL: 'people/blank_profile.jpg' },
          { name: 'Sarah', title: "Bride's Mum", pictureURL: 'people/blank_profile.jpg' }
        ],
        [
          { name: 'Dave', title: "Bride's Dad", pictureURL: 'people/blank_profile.jpg' },
          { name: 'Kath', title: "Bride's Step-Mum", pictureURL: 'people/blank_profile.jpg' }
        ],

        [{ name: 'Case', title: "Bride's Brother", pictureURL: 'people/blank_profile.jpg' }]
      ]
    }
  },
  setup() {
    const observedElements = ref([]);

    // New method to set the observed element
    const setObservedElement = (el) => {
      if (el) observedElements.value.push(el);
    };

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = observedElements.value.indexOf(entry.target);
            if (index !== -1) {
              observedElements.value.splice(index, 1); // Remove element from the array once observed
              entry.target.classList.add('visible'); // Add 'visible' class to the observed element
            }
            observer.unobserve(entry.target); // Stop observing the current target
          }
        });
      }, { threshold: 0.1 });

      observedElements.value.forEach(el => observer.observe(el));
    });

    return { observedElements, setObservedElement };
  },
})
</script>

<template>
  <v-container class="friends-family">
    <!-- Wedding Party Section -->
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="section-title">Wedding Party</h2>
        <!-- Use a new row for each pair to ensure they are on the same line -->
        <v-row v-for="(pair, index) in honoredGuests" :key="index" justify="space-around">
          <!-- Set cols="6" on medium and larger screens, full width on smaller screens -->
          <v-col cols="12" md="6" v-for="honoredGuest in pair" :key="honoredGuest.name">
            <div :ref="setObservedElement" class="person-card-container">
              <PersonCard
              :name="honoredGuest.name"
              :title="honoredGuest.title"
              :pictureURL="honoredGuest.pictureURL"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Family Section -->
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="section-title">Family</h2>
        <!-- Use a new row for each pair to ensure they are on the same line -->
        <v-row v-for="(pair, index) in familyPairs" :key="index" justify="space-around">
          <!-- Set cols="6" on medium and larger screens, full width on smaller screens -->
          <v-col cols="12" md="6" v-for="familyMember in pair" :key="familyMember.name">
            <div :ref="setObservedElement" class="person-card-container">
              <PersonCard
                :class="{ 'visible': familyMember.visible }"
                :name="familyMember.name"
                :title="familyMember.title"
                :pictureURL="familyMember.pictureURL"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <DividerComponent />
</template>

<style scoped>
.person-card-container {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s, transform 0.8s;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

.friends-family {
  margin-top: 3rem;
  max-width: 900px;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: var(--color-text);
  font-family: var(--font-title);
}

.honored,
.family {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (max-width: 768px) {
  .friends-family {
    max-width: 100%;
  }

  .honored,
  .family {
    gap: 10px;
  }

  .person-card {
    flex-grow: 1;
    max-width: calc(50% - 10px);
  }
}
</style>
