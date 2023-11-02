<script lang="ts">
import { useCounterStore } from '@/stores/counter'
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'CookieButton',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
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
      <img v-if="flash" width="170" height="170" />
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
}
</style>
