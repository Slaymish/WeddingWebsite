<script lang="ts">
import { defineComponent } from 'vue'
import PersonCard from './PersonCard.vue'
import DividerComponent from './DividerComponent.vue'

export default defineComponent({
  name: 'FriendsAndFamily',
  components: { PersonCard, DividerComponent },
  data() {
    return {
      honoredGuests: [
        { name: 'Jaime', title: 'Maid of Honor', pictureURL: 'people/bryon.JPG' },
        { name: 'Hamish', title: 'Best Man / Brother', pictureURL: 'people/bryon.JPG' }
        // ... add more guests as needed
      ],
      familyMembers: [
        { name: 'Sarah', title: "Bride's Mother", pictureURL: 'people/bryon.JPG' },
        { name: 'Dave', title: "Bride's dad", pictureURL: 'people/bryon.JPG' },
        { name: 'Steve', title: "Bride's Step-dad", pictureURL: 'people/bryon.JPG' },
        { name: 'Kath', title: "Bride's Step-mum", pictureURL: 'people/bryon.JPG' },
        { name: 'Case', title: "Bride's Brother", pictureURL: 'people/bryon.JPG' },
        { name: 'Wendy', title: "Groom's Mother", pictureURL: 'people/wendy.JPG' },
        { name: 'Bryon', title: "Groom's Father", pictureURL: 'people/bryon.JPG' }
      ]
    }
  }
})
</script>

<template>
  <v-container class="friends-family">
    <v-row justify="center">
      <v-col cols="12">
        <h2 class="section-title">Wedding Party</h2>
        <v-row justify="center">
          <v-col
            cols="12"
            md="6"
            lg="4"
            v-for="honoredGuest in honoredGuests"
            :key="honoredGuest.name"
          >
            <PersonCard
              class="honored"
              :name="honoredGuest.name"
              :title="honoredGuest.title"
              :pictureURL="honoredGuest.pictureURL"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <h2 class="section-title">Family</h2>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="familyMember in familyMembers"
            :key="familyMember.name"
          >
            <PersonCard
              class="parent"
              :name="familyMember.name"
              :title="familyMember.title"
              :pictureURL="familyMember.pictureURL"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <DividerComponent />
</template>

<style scoped>
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

.honored-guests,
.family {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .friends-family {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }

  .honored-guests,
  .family {
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
