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
    <div class="left">
      <h2 class="section-title">Wedding Party</h2>
      <div class="honored-guests">
        <PersonCard
          class="honored"
          :name="'Jamie'"
          :title="'Maid of Honor'"
          :pictureURL="'reference/flowers.jpg'"
        />
        <PersonCard
          class="honored"
          :name="'Hamish'"
          :title="'Best Man / Brother'"
          :pictureURL="'reference/flowers.jpg'"
        />
      </div>
    </div>
    <div class="right">
      <h2 class="section-title">Family</h2>
      <div class="family">
        <PersonCard
          class="parent"
          :name="'Sarah'"
          :title="'Brides Mother'"
          :pictureURL="'reference/flowers.jpg'"
        />
        <PersonCard
          class="parent"
          :name="'Steve'"
          :title="'Brides Step-dad'"
          :pictureURL="'reference/flowers.jpg'"
        />
        <PersonCard
          class="parent"
          :name="'Dave'"
          :title="'Brides dad'"
          :pictureURL="'reference/flowers.jpg'"
        />
        <PersonCard
          class="parent"
          :name="'Kath'"
          :title="'Brides Father'"
          :pictureURL="'reference/flowers.jpg'"
        />
        <PersonCard
          class="parent"
          :name="'Case'"
          :title="'Brides Brother'"
          :pictureURL="'reference/flowers.jpg'"
        />
        <PersonCard
          class="parent"
          :name="'Wendy'"
          :title="'Grooms Mother'"
          :pictureURL="'people/wendy.JPG'"
        />
        <PersonCard
          class="parent"
          :name="'Bryon'"
          :title="'Grooms Father'"
          :pictureURL="'people/bryon.JPG'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.friends-family {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
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
  }

  .honored-guests,
  .family {
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
