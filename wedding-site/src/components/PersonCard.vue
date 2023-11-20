<template>
  <div class="person-card">
    <div class="profile-picture">
      <img :src="imageSrc" :alt="name" />
    </div>
    <div class="text-content">
      <h2>{{ title }}</h2>
      <h1>{{ name }}</h1>
      <p>{{ blurb }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'PersonInfo',
  props: {
    name: String,
    title: String,
    blurb: String,
    pictureURL: String
  },
  setup(props) {
    const imageSrc = computed(() => {
      return new URL(`../assets/images/${props.pictureURL}`, import.meta.url).href
    })
    return { imageSrc }
  }
})
</script>

<style scoped>
.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  width: 100%;
  max-width: 200px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-family: var(--font-text);
}

.profile-picture img {
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.text-content {
  padding: 1rem;
}

.person-card h1 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  color: #555;
  font-family: var(--font-title);
}

.person-card h2 {
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  color: #555;
}

.person-card p {
  font-size: 0.9rem;
  color: #666;
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .person-card {
    margin: 0rem;
    max-width: 150px;
  }

  .person-card h2 {
    font-size: 0.85rem;
  }

  .person-card h1 {
    font-size: 1rem;
  }
}
</style>
