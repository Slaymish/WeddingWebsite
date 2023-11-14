<template>
  <div class="person-card">
    <div class="profile-picture">
      <img :src="imageSrc" :alt="name" />
    </div>
    <h2>{{ title }}</h2>
    <h1>{{ name }}</h1>
    <p>{{ blurb }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PoopImage from '@/assets/images/Poop.webp'

export default defineComponent({
  name: 'PersonInfo',
  props: {
    name: {
      type: String,
      required: true
    },
    blurb: {
      type: String,
      required: true
    },
    pictureURL: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    imageSrc() {
      return PoopImage
    }
  }
})
</script>

<style scoped>
.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  padding: 15px;
  margin: 10px;
  width: calc(100% - 20px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 200px;
  box-sizing: border-box;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.person-card h1 {
  margin-bottom: 5px;
  font-size: 1em;
  color: #333;
}

.person-card h2 {
  font-size: 0.85em;
  color: #555;
  margin: 5px;
}

.person-card p {
  font-size: 0.8em;
  color: #666;
  margin: 5px;
}

.profile-picture img {
  max-width: 100px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>
