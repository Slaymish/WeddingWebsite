<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection',
  props: {
    mainTitle: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div class="hero-section">
    <div class="text-box">
      <h1>{{ mainTitle }}</h1>
      <h2>{{ date }}</h2>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  width: 100%;
  height: 90vh;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(2, 39, 39);
  justify-content: center;
}

.text-box {
  background-color: rgb(1, 80, 80);
  position: relative;
  margin: 0;
  left: 30svw;
  right: 25%;
  top: 50%;
  bottom: 50%;
  width: 50rem;
  border: 1cap solid black;
  place-items: center;
}
</style>
