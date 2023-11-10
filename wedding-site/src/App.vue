<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CookieCount from './components/CookieCount.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Cookie</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
      </nav>
      <CookieCount />
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
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
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

nav a:first-child {
  border-bottom: 1px solid var(--color-text);
  border-right: none;
}

@media screen and (max-width: 1024px) {
  nav {
    flex-direction: row;
    position: relative;
    bottom: auto;
    top: auto;
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
