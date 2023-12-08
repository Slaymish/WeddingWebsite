<template>
  <v-container fill-height fluid class="d-flex flex-column justify-space-between">
    <v-row justify="center" align="center" class="rsvp-container flex-grow-1">
      <v-col cols="12" md="5" class="text-center mb-10">
        <h1 class="display-2 mb-3">RSVP</h1>
        <p class="body-1">
          Please RSVP by the XXX, 2024. If you have any questions, please contact us at
          <a href="mailto:email@gmail.com" class="email-link">email@gmail.com</a>.
        </p>
        <v-btn color="secondary" :to="{ name: 'home' }" large class="mt-5">Go back</v-btn>
      </v-col>
      <v-col cols="12" md="5">
        <RSVPForm />
      </v-col>
    </v-row>
    <v-spacer></v-spacer> <!-- This will push the footer to the bottom -->
    <FooterComponent :topButton="false" />
  </v-container>
</template>

<script lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import RSVPForm from '@/components/RSVPForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    RSVPForm,
    FooterComponent
  }
})
</script>

<style scoped>
.rsvp-container {
  background-color: #fce4ec; /* Adjust color to match your theme */
  min-height: 100vh;
}

.email-link {
  color: #6200ea; /* Use a color that stands out, yet fits the color scheme */
}

@media only screen and (max-width: 960px) {
  .rsvp-container {
    flex-direction: column-reverse;
  }
  .text-center {
    order: 2;
  }
}
</style>
