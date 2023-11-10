<script lang="ts">
import { useCounterStore } from '@/stores/counter'
import { defineComponent, type Ref } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  setup() {
    const counter = useCounterStore()
    const flash = ref(false)

    const increment = (val: number) => {
      counter.increment(val * (counter.totalMultiplier.value || 1))
      flash.value = true
      setTimeout(() => {
        flash.value = false
      }, 50)
    }

    return { flash, increment }
  }
})
</script>

<template>
  <div class="cookiewrap">
    <a @click="increment(1)" class="clickableItem">
      <div v-if="flash" class="particle">
        <img width="160" height="160" />
      </div>
      <img v-else width="150" height="150" />
    </a>
  </div>
</template>

<style scoped>
.clickableItem {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  position: relative;
  top: 0;
  transition: top 0.2s ease-in-out;
  z-index: 2;
}

.clickableItem:hover {
  top: -5px;
}

.clickableItem img {
  display: block;
  margin: 0 auto;
  background-color: aquamarine;
  border-radius: 3%;
}

.cookiewrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
</style>
