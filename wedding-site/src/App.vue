<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Wedding</RouterLink>
        <RouterLink to="/when-and-where">When & Where</RouterLink>
        <RouterLink :class="{ active: $route.name == 'HomeView' }" to="/rsvp">RSVP</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <FooterComponent />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 2rem;
  text-decoration: none;
  color: var(--color-text);
  padding: 1rem;
}

.router-link-active {
  border-bottom: 1px solid var(--color-text);
  border-right: none;
}

@media screen and (max-width: 1024px) {
  nav {
    flex-direction: row;
    position: relative;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    z-index: 1;
  }

  nav a {
    font-size: 1.5rem;
  }

  nav a:first-child {
    border-right: 1px solid var(--color-text);
    border-bottom: none;
  }
}
</style>
