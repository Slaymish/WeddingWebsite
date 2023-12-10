<template>
  <v-container>
    <h1>RSVP to Our Event</h1>
    <!-- Duplicate of above but using html -->
    <div class="wrapper">
      <div class="body">
        <p>
          Please RSVP by the XXX, 2024. If you have any questions, please contact us at
          <a href="mailto:sarah@jumptechnics.com" class="email-link">sarah@jumptechnics.com</a>
        </p>
        <v-btn color="secondary" href="/" class="back">Back to Home</v-btn>
      </div>
      <div class="form">
        <RSVPForm />
      </div>
    </div>
  </v-container>
  <FooterComponent :topButton="false" />
</template>

<script lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import RSVPForm from '@/components/RSVPForm.vue'
import DividerComponent from '@/components/DividerComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    RSVPForm,
    FooterComponent,
    DividerComponent
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  background-color: var(--light-red);
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  background-color: var(--light-red);
}

.form {
  width: 100%;
  height: 50%;
  background-color: var(--light-red);
  margin: 0;
}

.back {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.email-link {
  color: #1976d2;
}

.email-link:hover {
  color: #115293;
}
</style>
