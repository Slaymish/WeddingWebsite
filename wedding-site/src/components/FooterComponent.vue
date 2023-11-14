<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  setup() {
    return {}
  }
})
</script>

<template>
  <footer>
    <p>Created by <a href="https://hamishburke.dev" target="_blank">Hamish Burke</a></p>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 2.5rem;
  background-color: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
}

footer p {
  color: var(--color-text);
  font-size: 1rem;
  margin-right: 1rem;
}

@media screen and (max-width: 300px) {
  footer p {
    font-size: 0.75rem;
  }
}
</style>
