<template>
  <header>
    <nav :class="{ 'is-open': menuOpen }">
      <RouterLink to="/">Wedding</RouterLink>
      <RouterLink to="/when-and-where">When & Where</RouterLink>
      <RouterLink to="/rsvp">RSVP</RouterLink>
    </nav>
    <button @click="toggleMenu" class="hamburger">&#9776;</button>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
  transition: transform 0.3s ease;
  transform: translateY(0);
  z-index: 100;
  backdrop-filter: blur(20px);
}

nav.is-open {
  transform: translateY(0);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 24px;
  position: absolute;
  top: 10px;
  left: 10px;
}

@media (max-width: 768px) {
  nav {
    top: 0px;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    background-color: var(--color-accent); /* Semi-transparent background */
    height: 100vh;
    padding-top: 2rem;
    box-sizing: border-box;
  }

  .hamburger {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
  }

  nav.is-open {
    transform: translateX(0);
  }
}

nav a {
  color: var(--color-text);
  text-decoration: none;
  padding: 10px;
  margin: 0 5px;
  transition: transform 0.4s ease;
  transform: scale(1);
}

nav a:hover {
  transform: scale(1.1);
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
