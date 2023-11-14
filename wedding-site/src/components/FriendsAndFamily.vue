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
      <div class="honored-guests">
        <PersonCard
            class="honored"
          :name="'Hamish'"
          :title="'Best Man / Brother'"
          :blurb="'Hi i\'m hamish'"
          :pictureURL="'Poop.webp'"
        />
        <PersonCard
        class="honored"
          :name="'Jamie'"
          :title="'Maid of Honor'"
          :blurb="'Hi i\'m JAmie'"
          :pictureURL="'Poop.webp'"
        />
      </div>
      <div class="parents">
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: #f9f9f9;
}

.honored-guests {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.parents {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

@media (max-width: 768px) {
    .friends-family, .honored-guests, .parents {
        grid-template-columns: 1fr;
    }
    
}
</style>
