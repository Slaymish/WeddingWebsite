<template>
  <v-app class="main">
    <router-view />
  </v-app>
</template>

<script lang="ts">
export default {
  components: {}
}
</script>

<style scoped>
.main {
  font-family: var(--font-text);
  background-color: var(--color-background);
  color: var(--color-text);
  background-image: url('/src/assets/images/flower_header_tiled.png'); /* Ensure this is the correct path */
  background-repeat: repeat-x;
  background-size: auto 200px; /* Maintain the aspect ratio and fill the height */
  background-position: center top;  
  min-height: 100vh;
  width: 100%;
  padding-top: 90px; /* Adjust this to the new size of your image */
}
</style>
