<script lang="ts">
import { defineComponent } from 'vue'
import ResetButton from '@/components/ResetButton.vue'

export default defineComponent({
  name: 'FooterComponent',
  components: {
    ResetButton
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <footer>
    <p>Created by <a href="https://hamishburke.dev" target="_blank">Hamish Burke</a></p>
    <ResetButton />
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 2.5rem;
  background-color: #363636;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer p {
  color: #fff;
  font-size: 1rem;
  margin-right: 1rem;
}

@media screen and (max-width: 300px) {
  footer p {
    font-size: 0.75rem;
  }
}
</style>
