<template>
    <div class="main">
      <v-container class="info">
        <v-row justify="space-between">
          <v-col cols="12" md="4" order-md="1">
            <h1 class="text-h2">RSVP</h1>
            <p>
              Please RSVP by the XXX, 2024. If you have any questions, please contact us at
              <em>email@gmail.com</em>.
            </p>
            <v-btn
              class="back-button"
              color="transparent"
              href="/"
              text
            >Go back</v-btn>
          </v-col>
          <v-col cols="12" md="4" order-md="2">
            <RSVPForm />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <FooterComponent
      :topButton="false"
    />
  </template>
  
  <script lang="ts">
  import FooterComponent from '@/components/FooterComponent.vue';
  import RSVPForm from '@/components/RSVPForm.vue'
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: {
      RSVPForm,
      FooterComponent
    }
  });
  </script>
  
  <style scoped>
  .main {
    font-family: var(--font-text);
    background-color: var(--color-background);
    color: var(--color-text);
  }
  
  .back-button {
    font-size: 1rem;
    color: var(--color-text);
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 2rem;
  }
  
  .info {
    text-align: center;
    max-width: 500px;
  }
  
  .info h1 {
    font-size: 4rem;
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
    .info h1 {
      font-size: 3rem;
    }
  
    .info p {
      font-size: 0.9rem;
    }
  
    .back-button {
      width: auto;
    }
  
    .form {
      margin-bottom: 2rem;
    }
  }
  </style>
  