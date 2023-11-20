<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'HeroSection',
  components: {
    RouterLink
  },
  props: {
    mainTitle: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  setup() {
    const baseFontSize = ref('8rem')

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const newFontSize = Math.max(8 - scrollPosition / 100, 7)

      baseFontSize.value = `${newFontSize}rem`
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return { baseFontSize, handleScroll }
  }
})
</script>

<template>
  <div class="hero-section" @scroll="handleScroll">
    <div class="text-box" :style="{ '--base-font-size': baseFontSize }">
      <h1>{{ mainTitle }}</h1>
      <h2>{{ date }}</h2>

      <div class="rsvp-button">
        <RouterLink :to="'/rsvp'">RSVP</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  max-width: 100%;
  background-color: #fae5d3; /* Light peach background */
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-box {
  text-align: center;
  transition: font-size 0.3s;
}

h1 {
  font-family: 'Elegant Script', serif; /* Replace with the actual script font used in the image */
  font-size: calc(var(--base-font-size) * 1);
  font-weight: normal; /* Assuming the reference image uses a normal font weight */
  color: #daa49a; /* Salmon color for the text */
  line-height: 1; /* Adjust line-height to control the spacing between lines */
  margin-bottom: 1rem;
}

h2 {
  font-family: 'Simple Display', sans-serif; /* Replace with the actual display font used in the image */
  font-size: calc(
    var(--base-font-size) * 0.25
  ); /* Adjust the ratio according to the reference image */
  font-weight: normal; /* Adjust the font weight if necessary */
  color: #daa49a; /* Maintaining the color consistency with h1 */
  margin-bottom: 2rem;
}

.rsvp-button {
  font-family: 'Simple Display', sans-serif; /* Consistent with h2 */
  font-size: 1rem; /* This will be responsive to the base font size */
  background-color: transparent;
  border: 2px solid #daa49a; /* Salmon color border */
  color: #daa49a; /* Salmon color text */
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

.rsvp-button:hover {
  background-color: #daa49a; /* Salmon color for the hover state */
  color: #fae5d3; /* Light peach color for the text on hover */
  transform: translateY(-0.1rem) scale(1.05); /* Slight scale for interaction */
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

@media (max-width: 768px) {
  .hero-section {
    margin: 0; /* Remove margins for mobile view */
  }

  .text-box {
    padding: 50px 20px; /* Adjust padding for mobile */
  }

  h1 {
    font-size: 4rem; /* Smaller font size for h1 on mobile */
  }

  h2 {
    font-size: 2rem; /* Smaller font size for h2 on mobile */
  }
}
</style>
