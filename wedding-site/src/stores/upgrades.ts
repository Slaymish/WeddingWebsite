import { defineStore } from 'pinia'

type UpgradeTypes =
  | 'Cursor'
  | 'Grandma'
  | 'Farm'
  | 'Factory'
  | 'Mine'
  | 'Shipment'
  | 'Alchemy Lab'
  | 'Portal'
  | 'Time Machine'
  | 'Antimatter Condenser'
  | 'Prism'
  | 'Chancemaker'
  | 'Fractal Engine'
  | 'Javascript Console'

export const useUpgradeStore = defineStore({
  id: 'upgradeStore',
  state: () => ({
    upgrades: {
      Cursor: 0,
      Grandma: 0,
      Farm: 0,
      Factory: 0,
      Mine: 0,
      Shipment: 0,
      'Alchemy Lab': 0,
      Portal: 0,
      'Time Machine': 0,
      'Antimatter Condenser': 0,
      Prism: 0,
      Chancemaker: 0,
      'Fractal Engine': 0,
      'Javascript Console': 0
      // Add more upgrades here...
    } as Record<UpgradeTypes, number>
  }),
  actions: {
    incrementUpgrade(upgradeName: UpgradeTypes) {
      this.upgrades[upgradeName]++
    },
    resetUpgrades() {
      for (const upgrade in this.upgrades) {
        this.upgrades[upgrade as UpgradeTypes] = 0
      }
    }
  }
})
