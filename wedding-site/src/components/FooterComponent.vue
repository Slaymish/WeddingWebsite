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
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer p {
  color: var(--color-text);
  font-size: 0.75rem;
  margin-right: 1rem;
}

footer a {
  text-decoration: none;
  cursor: pointer;
}

@media screen and (max-width: 300px) {
  footer p {
    font-size: 0.5rem;
  }
}
</style>
