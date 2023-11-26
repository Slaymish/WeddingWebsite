<script lang="ts">
import RSVPForm from '@/components/RSVPForm.vue'
import MultiStepRSVPForm from '@/components/MultiStepRSVPForm.vue'
import { RouterLink } from 'vue-router'

export default {
  components: {
    MultiStepRSVPForm,
    RouterLink
  }
}
</script>

<template>
  <main>
    <div class="info">
      <h1>RSVP</h1>
      <p>
        Please RSVP by the XXX, 2024. If you have any questions, please contact us at
        <em>email@gmail.com</em>.
      </p>
      <p class="back-button"><RouterLink to="/">Go back</RouterLink></p>
    </div>

    <div class="form">
      <MultiStepRSVPForm />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  font-family: var(--font-text);
  background-color: var(--color-background);
  color: var(--color-text);
}

.back-button {
  font-family: var(--font-text);
  font-size: 1rem; /* This will be responsive to the base font size */
  background-color: transparent;
  border: 2px solid var(--color-border);
  color: var(--color-text);
  padding: 0.5rem 2rem; /* Adjust padding to match the reference image */
  border-radius: 0; /* Assuming a square button as per the image */
  cursor: pointer;
  text-transform: uppercase; /* If the button text is in uppercase */
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  padding: 0; /* Remove padding from the button */
  display: block; /* Make the div a block to fill the parent .text-box */
  text-align: center; /* Center the text inside the div */
}

.back-button:hover {
  background-color: var(--color-primary);
  color: var(--color-accent);
  transform: translateY(-0.1rem) scale(1.05); /* Slight scale for interaction */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.back-button a {
  display: block; /* Make the link a block to fill the .rsvp-button */
  padding: 0.5rem 2rem; /* Apply padding to the link for spacing */
  text-decoration: none;
  color: inherit; /* Inherit text color from parent */
  height: 100%; /* Set height to fill the container */
  width: 100%; /* Set width to fill the container */
  line-height: normal; /* Adjust line height to center the text vertically */
}

.info {
  text-align: center;
  max-width: 500px;
}

.info h1 {
  font-size: 4rem;
  font-family: var(--font-title);
  margin-bottom: 0.5rem;
}

.info p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.info em {
  font-style: italic;
}

@media screen and (max-width: 768px) {
  main {
    flex-direction: column;
    justify-content: space-evenly;
  }

  .info {
    padding: 10px;
  }

  .info h1 {
    font-size: 3rem;
  }

  .info p {
    font-size: 0.9rem;
  }

  .back-button {
    margin-top: 2rem;
    width: 50%;
    margin: auto;
  }

  .back-button a {
    padding: 0.5rem 1rem;
  }

  .form {
    margin-bottom: 2rem;
  }
}
</style>
