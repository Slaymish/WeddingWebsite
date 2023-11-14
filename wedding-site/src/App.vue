<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
