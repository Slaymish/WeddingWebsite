<script lang="ts">
import RSVPForm from '@/components/RSVPForm.vue'
import { RouterLink } from 'vue-router'

export default {
  components: {
    RSVPForm,
    RouterLink
  }
}
</script>

<template>
  <main>
    <div class="info">
      <h1>Can you come? Let us know!</h1>
      <p>
        For numbers and to ensure we have addequite seating, please fill out the form below if you
        can make it! Please fill in the form <em>once per invite</em>
      </p>
    </div>

    <div>
      <RSVPForm />
      <p><RouterLink to="/">Go back</RouterLink></p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Playfair Display', serif;
  background-color: #fae5d3; /* Light peach background */
  color: #daa49a; /* Salmon text color */
}

.info {
  text-align: center;
  max-width: 500px;
}

.info h1 {
  font-size: 4rem;
  font-family: 'Elegant Script', serif; /* Replace with your script font */
  margin-bottom: 0.5rem;
}

.info p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.info em {
  font-style: italic;
}

@media screen and (max-width: 1024px) {
  .info h1 {
    font-size: 2rem;
  }
}

@media screen and (max-width: 768px) {
  main {
    padding: 1rem;
  }
}
</style>
