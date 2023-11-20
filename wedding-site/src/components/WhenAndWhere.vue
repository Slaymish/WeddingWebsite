<script lang="ts">
import DetailDropDown from '@/components/DetailsDropDown.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WhenAndWhere',
  components: {
    DetailDropDown
  },
  data() {
    return {
      details: [
        {
          id: 1,
          name: 'Whens the wedding?',
          answer: '23th May 2024, Reception starting at 10am.'
        },
        {
          id: 2,
          name: 'Where?',
          answer:
            'We\'re having it at Black Walnut Venues.<a href="https://maps.app.goo.gl/ayxLsqttZRihbQ348" target="_blank">87 Old Highway, Whakamārama 3176</a>'
        },
        {
          id: 3,
          name: 'Accomodation Options',
          answer:
            'Hotel down the road, <a href="https://trivago.com" target="_blank">here a good one</a>'
        },
        {
          id: 4,
          name: 'Transport',
          answer:
            'Its preferred if you drive yourself. Though we are arranging a van to come freom taruanga central if needed. Contact us directly to get more info.'
        },
        {
          id: 5,
          name: 'Gifts',
          answer: 'Cash only pleaser'
        },
        {
          id: 6,
          name: 'Plus ones',
          answer: 'No thanks'
        }
      ]
    }
  }
})
</script>

<template>
  <main>
    <div class="container">
      <div class="left-section">
        <div class="details">
          <h1>Happening on May 25th, 2024</h1>
          <div class="location">
            <h2>Black Walnut, Pahoia, Tauranga</h2>
            <div class="venue-picture">
              <img src="@/assets/images/reference/flowers.jpg" alt="venue" />
            </div>
          </div>
          <p><a href="/#details">More details below</a></p>
        </div>
      </div>
      <div class="right-section">
        <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.42253734963!2d176.00129479999998!3d-37.662778100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dc79b126bc32d%3A0x7c7a39720a7ab19!2sBlack%20Walnut%20Venue!5e0!3m2!1sen!2snz!4v1700468903073!5m2!1sen!2snz" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div class="more-details" id="details">
      <h1>More Details</h1>
      <DetailDropDown :details="details" />
    </div>
  </main>
</template>

<style scoped>
.venue-picture img {
  max-width: 250px;
}

.container {
  display: flex;
  height: 50vh;
  justify-content: space-between;
  flex-direction: row;
}

.more-details {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.more-details h1 {
  margin-top: 7rem;
  font-family: var(--font-title);
  font-size: 3rem;
}

.left-section,
.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.details {
  max-width: 90%;
  text-align: center;
  border-radius: 20px;
  background-color: var(--color-background);
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  max-height: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* subtle shadow for depth */
}

.details h1 {
  font-family: var(--font-title);
  font-size: 4rem;
}

.details .location {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
}

.details .location img {
  border-radius: 50%;
  aspect-ratio: 1/1;
  width: 200px; /* Adjust based on your design */
  border: 5px solid white; /* Soft border */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  transition: transform 0.3s ease; /* Smooth transition for hover effect */
}

.details .location img:hover {
  transform: scale(1.05); /* Slightly enlarge image on hover */
}

.details p a {
  font-size: 1rem;
  text-decoration: none;
  color: var(--color-primary); /* primary color for links */
}

.details p a:hover {
  text-decoration: underline; /* hover effect for link */
}

.map-container {
  width: 100%;
  height: 100%;
  max-width: 90%;
  max-height: 80%;
  padding: 10px;
  margin: auto;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: var(--color-accent);
  overflow: hidden;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .map-container {
    aspect-ratio: 1/1;
  }
}
</style>
