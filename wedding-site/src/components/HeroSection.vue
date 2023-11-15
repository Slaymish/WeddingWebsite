<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'HeroSection',
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
    const baseFontSize = ref('4rem');
    const showInfo = ref(false);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newFontSize = Math.max(4- scrollPosition/100, 2.5);
      const modalFontSize = Math.min(4- scrollPosition/100, 2.5);

      if (newFontSize <= 3.5) {
        showInfo.value = true;
      } else {
        showInfo.value = false;
      }
      baseFontSize.value = `${newFontSize}rem`;
    };

    onMounted(()=> {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(()=> {
      window.removeEventListener('scroll',handleScroll);
    });

    return { baseFontSize, handleScroll, showInfo}
  }
})
</script>

<template>
  <div class="hero-section" @scroll="handleScroll">
    <div class="text-box" :class="{ 'modal-open': showInfo }" :style="{ '--base-font-size': baseFontSize }">
        <h1>{{ mainTitle }}</h1>
        <h2>{{ date }}</h2>
    </div>
    <div class="modal" :class="{ 'is-open': showInfo }">
      <p>
        Join us for a day of fun at the <a href="/when-and-where">Walnut Wedding</a>
      </p>
    </div>
  </div>
</template>

<style scoped>

.modal {
  display: none;
  position: relative;
  font-size: calc(var(--base-font-size)*2);
}

 .is-open {
 display: block;
 background-color: rgba(10, 39, 66, 0.3);
 padding: 100px;
}

.modal-open {
  display: none;
  display: none;
}

.hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    padding: 0 15px;
    background-color: #0a2742;
    color: #ffffff;
    position: relative;
}

.text-box {
    max-width: 600px;
    margin: 0 auto;
    transition: font-size 0.3s;
    --base-font-size: 4rem;
}

h1 {
    font-size: calc(var(--base-font-size) * 1);
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #D4aF37;
}

h2{
  font-size: calc(var(--base-font-size) * 0.5);
    font-weight: 300;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .text-box {
        padding: 0;
    }
    
}


</style>
