<template>
  <v-card class="person-card" flat>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-avatar size="164" color="white">
          <v-img :src="imageSrc" :alt="name" :title="name" class="elevation-12"></v-img>
        </v-avatar>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div class="name">{{ name }}</div>
        <div class="subtitle-1">{{ title }}</div>
        <div class="body-1">{{ blurb }}</div>
      </v-col>
    </v-row>
  </v-card>
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
  max-width: 350px;
  margin: auto;
  background-color: transparent;
  color: #444;
  overflow: visible;
}

.person-card .v-avatar {
  margin: auto;
  border: 4px solid #fff;
}

.name {
  font-size: 1.5rem; /* larger name */
  margin-top: 8px; /* reduce space between name and title */
  font-family: var(--font-title);
}

.v-img {
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.15);

  border-radius: 50%;
  border: 4px solid #fff;

  /* Make the image fill its container */
  min-width: 210px;
  min-height: 210px;
  width: 100%;
}

.subtitle-1 {
  color: #888;
  font-size: 0.875rem; /* smaller subtitle */
  margin-top: -4px; /* reduce space between name and title */
}

.body-1 {
  color: #666;
  font-size: 0.875rem; /* smaller body text */
  margin-top: 4px; /* more space between title and blurb */
}

@media (max-width: 768px) {
  .person-card {
    width: 90%; /* adjust this value as needed */
  }
}
</style>
