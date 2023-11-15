<script lang="ts">
import { defineComponent } from 'vue'
import PersonCard from './PersonCard.vue'
export default defineComponent({
  name: 'FriendsAndFamily',
  components: { PersonCard }
})
</script>

<template>
  <div class="friends-family">
    <h2 class="section-title">Honored Guests</h2>
      <div class="honored-guests">
        <PersonCard
        class="honored"
          :name="'Jamie'"
          :title="'Maid of Honor'"
          :blurb="'Their love is immaculate. WOWZAsWOWZAsWOWZAsWOWZAs'"
          :pictureURL="'Poop.webp'"
        />
        <PersonCard
            class="honored"
          :name="'Hamish'"
          :title="'Best Man / Brother'"
          :blurb="'I would cry if i was ever in love like thatthatthatthat. WOWZAs'"
          :pictureURL="'Poop.webp'"
        />
      </div>
      <h2 class="section-title">Family</h2>
      <div class="family">
        <PersonCard
          class="parent"
            :name="'Sarah'"
            :title="'Brides Mother'"
            :blurb="'Hi i\'m Bryon'"
            :pictureURL="'Poop.webp'"
          />
          <PersonCard
          class="parent"
            :name="'Steve'"
            :title="'Brides Father'"
            :blurb="'Hi i\'m Bryon'"
            :pictureURL="'Poop.webp'"
          />
          <PersonCard
          class="parent"
            :name="'Dave'"
            :title="'Brides Father'"
            :blurb="'Hi i\'m Bryon'"
            :pictureURL="'Poop.webp'"
          />
          <PersonCard
          class="parent"
            :name="'Kath'"
            :title="'Brides Father'"
            :blurb="'Hi i\'m Bryon'"
            :pictureURL="'Poop.webp'"
          />
          <PersonCard
          class="parent"
            :name="'Case'"
            :title="'Brides Brother'"
            :blurb="'Hi i\'m Bryon'"
            :pictureURL="'Poop.webp'"
          />
          <PersonCard
            class="parent"
            :name="'Wendy'"
            :title="'Grooms Mother'"
            :blurb="'Hi i\'m Wendy'"
            :pictureURL="'Poop.webp'"
          />
          <PersonCard
          class="parent"
            :name="'Bryon'"
            :title="'Grooms Father'"
            :blurb="'Hi i\'m Bryon'"
            :pictureURL="'Poop.webp'"
          />
    </div>
  </div>
</template>

<style scoped>
.friends-family {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #d6d6d6;
}

.honored-guests, .family {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 768px) {
    .friends-family {
        grid-template-columns: 1fr;
    }

    .honored-guests, .family {
      gap: 10px;
      grid-template-columns: repeat(2, 1fr)
    }


    
}
</style>
