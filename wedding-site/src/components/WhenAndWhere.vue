<template>
  <main class="main-container">
    <section class="details-section">
      <h1 class="date-heading">Happening on May 25th, 2024</h1>
      <h2 class="venue-heading">At the Black Walnut</h2>
      <DetailDropDown :details="details" class="details-dropdown" />
    </section>

    <section class="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.42253734963!2d176.00129479999998!3d-37.662778100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dc79b126bc32d%3A0x7c7a39720a7ab19!2sBlack%20Walnut%20Venue!5e0!3m2!1sen!2snz!4v1700468903073!5m2!1sen!2snz"
        class="map-iframe"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </section>
  </main>
  <div class="rsvp-button">
    <RouterLink :to="'/rsvp'">RSVP</RouterLink>
  </div>
</template>

<script lang="ts">
import DetailDropDown from '@/components/DetailsDropDown.vue'

export default {
  components: {
    DetailDropDown
  },
  data() {
    return {
      details: [
        {
          id: 1,
          name: 'Time and Date',
          answer:
            'Saturday, May 25th, 2024. Ceremony starts at XXXpm, see the schedule above for more details.'
        },
        {
          id: 2,
          name: 'Location',
          answer:
            '<a href="https://maps.app.goo.gl/ayxLsqttZRihbQ348" target="_blank">87 Old Highway, Whakamārama 3176</a> <br> The venue is a 20 minute drive from Tauranga.'
        },

        {
          id: 3,
          name: 'Transport',
          answer:
            'A bus will be provided to transport guests from Tauranga to the venue. The bus will leave from Bethlehem shopping centre at 2:30pm and returning at 10:30pm. <br> If you are driving, theres plenty of parking at the venue.'
        },
        {
          id: 4,
          name: 'Gifts',
          answer:
            'Your presence at our wedding is enough. But for those who feel they would like to contribute, we would be grateful for donations towards our honeymoon so we can make it a once in a lifetime trip. <br> A card box will be available at the venue.'
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
}
</script>

<style scoped>
.rsvp-button {
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
  max-width: 200px;
  margin: 0 auto;
  margin-top: -50px;
  margin-bottom: 50px;
}

.rsvp-button:hover {
  background-color: var(--color-primary);
  color: var(--color-accent);
  transform: translateY(-0.1rem) scale(1.05); /* Slight scale for interaction */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.rsvp-button a {
  display: block; /* Make the link a block to fill the .rsvp-button */
  padding: 0.5rem 2rem; /* Apply padding to the link for spacing */
  text-decoration: none;
  color: inherit; /* Inherit text color from parent */
  height: 100%; /* Set height to fill the container */
  width: 100%; /* Set width to fill the container */
  line-height: normal; /* Adjust line height to center the text vertically */
}

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full height of the viewport */
  background: var(--color-background); /* Background color */
  color: var(--color-text); /* Text color */
  font-family: var(--font-title); /* Font family */
  padding: 50px; /* Add some padding around the content */
}

.details-section {
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: space-around; /* Center vertically */
  max-width: 750px;
  background-color: var(--white-mute);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  border-radius: 5px;
}

.date-heading {
  font-size: 2rem;
  font-weight: 500;
}

.date-heading,
.venue-heading {
  padding-bottom: 15px; /* Add some space below headings */
}

.map-section {
  padding: 20px;
  width: 750px;
  height: 450px;
  text-align: center;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center vertically */
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px; /* Rounded corners for the map iframe */
  overflow: hidden; /* Hide overflow */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column; /* Stack children vertically */
    padding: 20px; /* Adjust padding to match the reference image */
    width: 100%;
  }

  .details-section {
    margin-bottom: 20px; /* Add some space below the details section */
    width: 100%;
  }

  .map-section {
    width: 100%; /* Make the map section full width */
    height: 300px; /* Adjust height to match the reference image */
    margin-bottom: 3rem;
  }

  .map-iframe {
    border-radius: 0; /* Remove border radius */
  }

  .rsvp-button {
    margin-top: 2rem; /* Remove top margin */
  }
}
</style>
