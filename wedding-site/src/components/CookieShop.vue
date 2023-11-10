<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCounterStore } from '@/stores/counter'
import CookieUpgrade from '@/components/CookieUpgrade.vue'
import { useUpgradeStore } from '@/stores/upgrades'

export default defineComponent({
  name: 'CookieShop',
  components: {
    CookieUpgrade
  },
  setup() {
    const counter = useCounterStore()
    const upgradeStore = useUpgradeStore()

    const upgrades = [
      {
        name: 'Cursor',
        cost: 10,
        multiplier: 0.5,
        automatedCookies: 0
      },
      {
        name: 'Grandma',
        cost: 100,
        multiplier: 1,
        automatedCookies: 2
      },
      {
        name: 'Farm',
        cost: 500,
        multiplier: 5,
        automatedCookies: 5
      },
      {
        name: 'Factory',
        cost: 1000,
        multiplier: 10,
        automatedCookies: 10
      },
      {
        name: 'Mine',
        cost: 5000,
        multiplier: 50,
        automatedCookies: 50
      },
      {
        name: 'Shipment',
        cost: 10000,
        multiplier: 100,
        automatedCookies: 100
      },
      {
        name: 'Alchemy Lab',
        cost: 50000,
        multiplier: 500,
        automatedCookies: 500
      },
      {
        name: 'Portal',
        cost: 100000,
        multiplier: 1000,
        automatedCookies: 1000
      },
      {
        name: 'Time Machine',
        cost: 500000,
        multiplier: 5000,
        automatedCookies: 5000
      },
      {
        name: 'Antimatter Condenser',
        cost: 1000000,
        multiplier: 10000,
        automatedCookies: 10000
      },
      {
        name: 'Prism',
        cost: 5000000,
        multiplier: 50000,
        automatedCookies: 50000
      },
      {
        name: 'Chancemaker',
        cost: 10000000,
        multiplier: 100000,
        automatedCookies: 100000
      },
      {
        name: 'Fractal Engine',
        cost: 50000000,
        multiplier: 500000,
        automatedCookies: 500000
      },
      {
        name: 'Javascript Console',
        cost: 100000000,
        multiplier: 1000000,
        automatedCookies: 1000000
      }
    ]

    const computedUpgrades = computed(() => {
      return upgrades.map(upgrade => {
        const upgradeCount = upgradeStore.upgrades[upgrade.name] || 0
        return {
          ...upgrade,
          cost: upgrade.cost * ((upgradeCount * 0.2)+ 1) 
        }
      })
    })

    return { counter, upgrades, upgradeStore, computedUpgrades }
  }
})
</script>

<template>
  <div class="upgrades">
    <CookieUpgrade
      v-for="(upgrade, index) in computedUpgrades"
      :key="index"
      :upgradeName="upgrade.name"
      :upgradeCost="upgrade.cost"
      :multiplier="upgrade.multiplier"
      :automatedCookies="upgrade.automatedCookies"
      :upgradeCount="upgradeStore.upgrades[upgrade.name]"
    />
  </div>
</template>

<style scoped>
.upgrades {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

@media screen and (max-width: 1400px) {
  .upgrades {
    flex-direction: column;
    margin: auto;
  }
}
</style>
