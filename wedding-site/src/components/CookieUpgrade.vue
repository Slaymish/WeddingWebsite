<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useUpgradeStore } from '@/stores/upgrades'

export default defineComponent({
  name: 'CookieUpgrade',
  props: {
    upgradeName: {
      type: String,
      required: true
    },
    upgradeCost: {
      type: Number,
      required: true
    },
    multiplier: {
      type: Number,
      required: true
    },
    automatedCookies: {
      type: Number,
      required: true
    },
    upgradeCount: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const counter = useCounterStore()
    const upgrades = useUpgradeStore()

    function buyUpgrade() {
      if (counter.clickedCount.value >= props.upgradeCost) {
        counter.decrement(props.upgradeCost)
        counter.incrementMultiplier(props.multiplier)
        counter.incrementAutoClicker(props.automatedCookies)
        upgrades.incrementUpgrade(props.upgradeName)
      } else {
        alert("You don't have enough cookies!")
      }
    }

    return { counter, buyUpgrade }
  }
})
</script>

<template>
  <div class="upgrade">
    <div class="title">
      <h2>{{ upgradeName }}</h2>
      <p>{{ upgradeCount }}x</p>
    </div>
    <button @click="buyUpgrade">Buy</button>
    <div class="details">
      <p>Cost: {{ upgradeCost }}</p>
      <p>Multiplier: {{ multiplier }}</p>
      <p>Automated Cookies: {{ automatedCookies }}</p>
    </div>
  </div>
</template>

<style scoped>
.upgrade {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 3%;
  padding: 1rem;
  margin: 1rem;
  width: 30rem;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.title h2 {
  font-size: 2rem;
  margin: 0;
  font-weight: bold;
}

.title p {
  font-size: 1rem;
  margin: 0;
}

button {
  font-size: 1rem;
  padding: 1rem;
  border-radius: 3%;
  border: 1px solid black;
  background-color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #363636;
  color: #fff;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.details p {
  font-size: 1rem;
  margin: 0;
}

@media screen and (max-width: 1024px) {
  .upgrade {
    flex-direction: column;
    width: 100%;
  }

  .title {
    flex-direction: row;
  }

  .title h2 {
    font-size: 1rem;
  }

  .title p {
    font-size: 0.75rem;
  }

  button {
    font-size: 0.75rem;
  }

  .details {
    flex-direction: row;
  }

  .details p {
    font-size: 0.65rem;
  }
}
</style>
