<template>
  <div class="back">
    <v-app class="main">
      <!--<h1 class="wip">This site is a work in progress on mobile. Please view on a desktop.</h1>-->
      <router-view />
    </v-app>
  </div>
</template>

<script lang="ts">
export default {
  components: {}
}
</script>

<style scoped>
.wip {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: var(--color-primary);
  color: var(--color-text);
  text-align: center;
  z-index: 1000;
}

.main {
  font-family: var(--font-text);
  background-color: var(--white-mute);
  color: var(--color-text);
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 90px; /* Adjust this to the new size of your image */
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);

  /* Background image */
  background-image: url('/src/assets/images/flower_header_tiled.webp'), url('/src/assets/images/flower_footer_tiled.webp');
  background-repeat: repeat-x, repeat-x;
  background-position: top, bottom;
  background-size: auto 150px, auto 150px;
}

.back {
  background-color: var(--color-background);
  background-image: url('/src/assets/images/flower_header_tiled.webp'), url('/src/assets/images/flower_footer_tiled.webp');
  background-repeat: repeat-x, repeat-x;
  background-position: top, bottom;
  background-size: auto 150px, auto 150px;
  background-attachment: fixed, fixed;
}

@media (max-width: 900px) {
  .main {
    padding-top: 0px;
    background-color: var(--color-background);
    width: 100vw;
    overflow: hidden;
  }

  .back {
    background-color: var(--color-background);
    width: 100vw;
    overflow: hidden;
  }
  
  .main-container {
    padding: 0;
  }
}

</style>
