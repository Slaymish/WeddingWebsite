<script setup lang="ts">
import CookieShop from '@/components/CookieShop.vue'
</script>

<template>
  <main>
    <h1>Upgrade Shop</h1>
    <CookieShop />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 4rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0;
}

@media screen and (max-width: 1024px) {
  h1 {
    font-size: 2rem;
  }

  main {
    padding: 1rem;
    
  }
}
</style>
