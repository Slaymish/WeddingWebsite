<template>
  <v-card class="person-card" flat>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-avatar size="128" color="transparent">
          <v-img :src="imageSrc" class="elevation-6" />
        </v-avatar>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <div class="text-h5">{{ name }}</div>
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

.v-avatar {
  margin-top: -64px; /* Make avatar slightly overlap the card */
}

.v-img {
  border-radius: 50%;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.15);
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
</style>
