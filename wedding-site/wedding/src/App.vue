<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
axios.get('http://localhost:8080/api/hello')
            .then(response => { console.log(response.data) });
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact us</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
}
nav a {
  text-decoration: none;
  color: #333;
}

nav a:hover {
  color: #000;
}

header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}
</style>
