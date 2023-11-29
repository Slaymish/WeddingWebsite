<template>
  <v-container fluid class="hero-section">
    <v-row class="fill-height" align="center" justify="start">
      <v-col cols="12" sm="10" md="8" lg="6" class="text-box" :style="textStyle">
        <div class="hero-subtitle">Together with their families</div>
        <h1 class="display-1">{{ mainTitle }}</h1>
        <div class="hero-subtitle">Invite you to join them</div>
        <div class="display-2">{{ date }}</div>
        <v-btn text :to="{ name: 'rsvp' }" class="rsvp-button" large>RSVP</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const initialFontSize = 5;
const minFontSize = 4;
const shrinkSpeed = 300;

export default defineComponent({
  name: 'HeroSection',
  components: {
    RouterLink,
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
    const baseFontSize = ref(initialFontSize);

    const textStyle = computed(() => ({
      fontSize: `${baseFontSize.value}rem`
    }));

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newFontSize = Math.max(initialFontSize - scrollPosition / shrinkSpeed, minFontSize);
      baseFontSize.value = newFontSize;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { baseFontSize, textStyle, handleScroll };
  }
});
</script>

<style scoped>
.hero-section {
  background-color: var(--color-background);
  padding-left: 10%; /* Or any other percentage or fixed padding you prefer */
  height: 100vh;
  min-height: 600px;
  margin-bottom: 5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.display-1 {
  margin-bottom: 0.5rem;
}

.display-2 {
  margin-top: 0.5rem;
}

.text-box {
  margin-top: 10%;
  transition: font-size 0.2s;
  color: var(--color-text);
  font-family: var(--font-title);
  text-align: left; /* Ensure text within the text box is left-aligned */
}

.rsvp-button {
  margin-top: 2rem;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

/* Add other styles here */
</style>
