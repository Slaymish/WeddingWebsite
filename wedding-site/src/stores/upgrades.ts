import { defineStore } from 'pinia'

type UpgradeTypes = 'Cursor' | 'Grandma' | 'Farm' | 'Factory' | 'Mine' | 'Shipment' | 'Alchemy Lab' | 'Portal' | 'Time Machine' | 'Antimatter Condenser' | 'Prism' | 'Chancemaker' | 'Fractal Engine' | 'Javascript Console'

export const useUpgradeStore = defineStore({
  id: 'upgradeStore',
  state: () => ({
    upgrades: JSON.parse(localStorage.getItem('upgrades') || '{}') as Record<UpgradeTypes, number>,
  }),
  actions: {
    incrementUpgrade(upgradeName: UpgradeTypes) {
      this.$state.upgrades[upgradeName]++
      this.persist()
    },
    resetUpgrades() {
      for (const upgrade in this.$state.upgrades) {
        this.$state.upgrades[upgrade as UpgradeTypes] = 0
      }
      this.persist()
    },
    persist() {
      localStorage.setItem('upgrades', JSON.stringify(this.$state.upgrades))
    }
  },
  getters: {
    getUpgrade(upgradeName: UpgradeTypes) {
      return this.$state.upgrades[upgradeName]
    }
  }
})