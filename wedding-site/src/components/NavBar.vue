<template>
  <div class="wrapper">
    <header>
      <nav :class="{ 'is-open': menuOpen }">
        <RouterLink to="/">Wedding</RouterLink>
        <RouterLink to="/when-and-where">When & Where</RouterLink>
        <RouterLink to="/rsvp">RSVP</RouterLink>
        <RouterLink to="/details">Details</RouterLink>
      </nav>
      <button @click="toggleMenu" class="hamburger">&#9776;</button>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

watch(route, () => {
  menuOpen.value = false
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menuOpen.value = false
  }
})
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #a36868;
  color: #ffffff;
  z-index: 100;
}

nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    transform: translateY(0);
}

nav.is-open {
  transform: translateY(0);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  position: absolute;
  top: 10px;
  left: 10px;
}

@media (max-width: 768px) {
  nav {
    position: fixed;
    top: 60px;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    background: #333;
    height: calc(100vh - 60px);
    padding-top: 1rem;
    box-sizing: border-box;
  }

  .hamburger {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
  }

  nav.is-open {
    transform: translateX(0);
  }
}

nav a {
    color: white;
    text-decoration: none;
    padding: 15px;
    margin: 0 5px;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: #6c2020;
}

nav a.router-link-exact-active {
    font-weight: bold;
}
</style>
