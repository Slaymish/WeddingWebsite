<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    FooterComponent
  }
}
</script>

<style scoped>
</style>