<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useUpgradeStore } from '@/stores/upgrades'

export default defineComponent({
  name: 'ResetButton',
  setup() {
    const counter = useCounterStore()
    const upgrades = useUpgradeStore()

    function resetGame() {
      if (window.confirm('Are you sure you want to reset the game?')) {
        counter.reset()
        upgrades.resetUpgrades()
      }
    }

    return { resetGame }
  }
})
</script>

<template>
  <button @click="resetGame">Reset Game</button>
</template>
