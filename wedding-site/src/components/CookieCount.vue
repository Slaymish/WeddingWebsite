<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default defineComponent({
  name: 'CookieCount',
  setup() {
    const counter = useCounterStore()
    const route = useRoute()

    return {
      cookieAmount: counter.clickedCount,
      totalMultiplier: counter.totalMultiplier,
      autoClickerCount: counter.autoClickerCount,
      isHomeRoute: computed(() => route.path === '/'),
      isShopRoute: computed(() => route.path === '/shop')
    }
  }
})
</script>

<template>
  <div class="home-count" v-if="isHomeRoute">
    <h3>{{ Math.round(cookieAmount) }}</h3>
  </div>
  <div class="about-count" v-if="isShopRoute">
    <h3>{{ Math.round(cookieAmount) }}</h3>
  </div>
  <div class="stats">
    <p>Multiplier: {{ Math.round(totalMultiplier * 100) / 100 }}</p>
    <p>Auto Clickers: {{ autoClickerCount }}</p>
  </div>
</template>

<style scoped>
.about-count {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 2rem;
}

.home-count {
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 0rem;
}
.stats {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 10%;
  right: 10%;
  left: 10%;
  padding: 1rem;
}

.stats p {
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
}

@media screen and (max-width: 1024px) {
  .stats {
    bottom: 5%;
    right: 5%;
    left: 5%;
  }

  .stats p {
    font-size: 1rem;
  }

  .home-count {
    font-size: 4rem;
    margin-top: 5rem;
  }
}
</style>
