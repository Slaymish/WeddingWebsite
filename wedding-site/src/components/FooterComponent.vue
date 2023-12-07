<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  components: {
  },
  props: {
    topButton: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <footer>
    <div v-if="topButton" class="to-top">
      <a href="#">Back to top</a>
    </div>
    <p>Created by <a href="https://hamishburke.dev" target="_blank">Hamish Burke</a></p>
  </footer>
</template>

<style scoped>
.to-top a {
  text-decoration: none;
  color: var(--color-text);
  font-family: var(--font-text);
  font-size: 1rem;
}

footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-accent);
  padding: 0.25rem;
}

footer p {
  font-family: var(--font-text);
  font-size: 1rem;
  color: var(--color-text);
}

footer a {
  color: var(--color-text);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

footer a::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--color-text);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

footer a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media screen and (max-width: 300px) {
  footer {
    font-size: 0.5rem;
  }
}
</style>
