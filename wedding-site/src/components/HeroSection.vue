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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    padding: 0 15px;
    background-color: #0a2742;
    color: #ffffff;
}

.text-box {
    max-width: 600px;
    margin: 0 auto;
}

h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #D4aF37;
}

h2{
    font-size: 2rem;
    font-weight: 300;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .text-box {
        padding: 0;
    }
    
}


</style>
