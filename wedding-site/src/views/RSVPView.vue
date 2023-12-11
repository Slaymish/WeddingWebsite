<template>
  <v-container align="center" class="main">
    <h1 class="title">RSVP to Our Event</h1>
    <!-- Duplicate of above but using html -->
    <div class="wrapper">
      <div class="form">
        <RSVPForm />
      </div>
      <div class="body">
        <p>
          Please RSVP by the XXX, 2024. 
          <br>
          If you have any questions, please contact us at
          <a href="mailto:sarah@jumptechnics.com" class="email-link">sarah@jumptechnics.com</a>
        </p>
        <v-btn color="secondary" href="/" class="back">Back to Home</v-btn>
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
.title {
  font-family: var(--font-title);
  font-size: 2.5rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 400px;
  margin-bottom: 2rem;
  background-color: var(--white-mute);
  border-radius: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);  
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  background-color: var(--white-mute);
  padding: 1rem;

  /* border radius for bottom */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.form {
  background-color: var(--white-soft);
  margin: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border radius for top */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
