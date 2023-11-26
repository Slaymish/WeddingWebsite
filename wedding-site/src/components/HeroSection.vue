<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const inititalFontSize = 8
const minFontSize = 5
const shrinkSpeed = 300

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
    const baseFontSize = ref(`${inititalFontSize}rem`)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const newFontSize = Math.max(inititalFontSize - scrollPosition / shrinkSpeed, minFontSize)

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
      <p class="hero-subtitle">Together with their families</p>
      <h1>{{ mainTitle }}</h1>

      <p class="hero-subtitle">Invite you to join them</p>
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
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}

.text-box {
  text-align: left;
  transition: font-size 0.3s;
  color: var(--color-text);
  font-family: var(--font-title);
  margin-left: 10%;
}

.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
}

h1 {
  font-size: calc(var(--base-font-size));
  font-family: var(--font-title);
}

h2 {
  font-size: calc(var(--base-font-size) * 0.5);
}

.hero-subtitle {
  font-size: calc(var(--base-font-size) * 0.15);
}

.rsvp-button {
  font-family: var(--font-text);
  font-size: 1rem; /* This will be responsive to the base font size */
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
  margin-top: 3rem;
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

@media (max-width: 768px) {
  .hero-section {
    margin: 0; /* Remove margins for mobile view */
  }

  .text-box {
    padding: 50px 20px; /* Adjust padding for mobile */
    margin-left: 5%; /* Adjust margin for mobile */
  }

  h1 {
    font-size: 6rem; /* Smaller font size for h1 on mobile */
  }

  h2 {
    font-size: 2rem; /* Smaller font size for h2 on mobile */
  }

  .rsvp-button a {
    padding: 0.5rem 2rem; /* Apply padding to the link for spacing */
  }

  .rsvp-button {
    font-size: 1rem; /* This will be responsive to the base font size */
    padding: 0.5rem 2rem; /* Adjust padding to match the reference image */
    width: 50%; /* Adjust width to match the reference image */
  }
}
</style>
