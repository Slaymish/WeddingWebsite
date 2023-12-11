<template>
  <v-container class="main-container">
    <!-- Details Section -->
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card v-for="detail in details" :key="detail.id" class="mb-4" outlined>
          <v-card-title>{{ detail.name }}</v-card-title>
          <v-card-text v-html="detail.answer"></v-card-text>
          <DividerComponent />
        </v-card>
      </v-col>
    </v-row>

    <!-- Map Section -->
    <v-row justify="center" class="map-section">
      <v-col cols="12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.42253734963!2d176.00129479999998!3d-37.662778100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dc79b126bc32d%3A0x7c7a39720a7ab19!2sBlack%20Walnut%20Venue!5e0!3m2!1sen!2snz!4v1700468903073!5m2!1sen!2snz"
          class="map-iframe"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps of the Black Walnut Venue"
        ></iframe>
      </v-col>
    </v-row>

    <!-- RSVP Button -->
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-btn class="rsvp-button" :to="{ name: 'rsvp' }" large outlined color="secondary"> RSVP </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DividerComponent from './DividerComponent.vue'

export default defineComponent({
  name: 'WhenAndWhere',
  components: {
    DividerComponent
  },
  data() {
    return {
      details: [
        {
          id: 2,
          name: 'Location',
          answer:
            'Black Walnut Venue<br><br><a href="https://maps.app.goo.gl/ayxLsqttZRihbQ348" target="_blank">87 Old Highway, Whakamārama 3176</a> <br> The venue is a 20 minute drive from Tauranga.'
        },

        {
          id: 3,
          name: 'Transport',
          answer:
            'A bus will be provided to transport guests from Tauranga to the venue. The bus will leave from Bethlehem Shopping Centre at 2:30pm and returning at 10:30pm. <br><br> If you are driving, there is parking available at the venue.'
        },
        {
          id: 4,
          name: 'Gifts',
          answer:
            'Your presence at our wedding is enough. But for those who feel they would like to contribute, we would be grateful for donations towards our honeymoon so we can make it a once in a lifetime trip. <br><br> A card box will be available at the venue.'
        },
        {
          id: 5,
          name: 'Children and Plus-Ones',
          answer:
            'We hope you will understand our decision to make our wedding children-free, and not open to plus ones. Thank you.'
        },
        {
          id: 6,
          name: 'Dress Code',
          answer: 'Semi-Formal Attire.'
        }
      ]
    }
  }
})
</script>

<style scoped>
.main-container {
  padding: 20px;
}

.map-section {
  margin-top: 20px; /* Add space above the map section */
  margin: 0 auto;
  max-width: 900px;
}

.v-card {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-title);
  box-shadow: none;
  text-align: center;
}

.v-card-title {
  font-size: 2.5rem;
  font-family: var(--font-title);
  color: var(--color-text);
  margin-bottom: 1rem;
}

.v-card-text {
  font-size: 1rem;
  font-family: var(--font-text);
  color: var(--color-text);
  margin-bottom: 1rem;
}

.rsvp-button {
  font-size: 1rem;
  color: var(--color-text);
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 2rem;
  width: 100%;
}

.map-iframe {
  width: 100%;
  height: 450px; /* Adjust the height as needed */
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
}

@media (max-width: 768px) {
  .map-iframe {
    height: 300px;
  }
}
</style>
