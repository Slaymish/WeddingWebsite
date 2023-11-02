import { ref, watch } from 'vue'

const clickedCount = ref(Number(localStorage.getItem('clickedCount')) || 0)
const totalMultiplier = ref(Number(localStorage.getItem('totalMultiplier')) || 1)
const autoClickerCount = ref(Number(localStorage.getItem('autoClickerCount')) || 0)

let intervalId: number | null | undefined = null

const handleAutoClicker = (newCount: number) => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
  if (newCount > 0) {
    intervalId = setInterval(() => {
      clickedCount.value += newCount
    }, 1000)
  }
}

watch(() => autoClickerCount.value, handleAutoClicker)

const saveToLocalStorage = (key: string, value: number) => {
  localStorage.setItem(key, value.toString())
}

watch(
  () => clickedCount.value,
  (newCount) => saveToLocalStorage('clickedCount', newCount)
)
watch(
  () => totalMultiplier.value,
  (newMultiplier) => saveToLocalStorage('totalMultiplier', newMultiplier)
)

const increment = (val: number) => {
  clickedCount.value += val
}

const decrement = (val: number) => {
  clickedCount.value -= val
}

const reset = () => {
  decrement(clickedCount.value)
  clickedCount.value = 0
  totalMultiplier.value = 1
  autoClickerCount.value = 0

  saveToLocalStorage('clickedCount', clickedCount.value)
  saveToLocalStorage('totalMultiplier', totalMultiplier.value)
  saveToLocalStorage('autoClickerCount', autoClickerCount.value)
}

const incrementMultiplier = (val: number) => {
  totalMultiplier.value += val
}

const incrementAutoClicker = (val: number) => {
  autoClickerCount.value += val
}

export function useCounterStore() {
  return {
    clickedCount,
    totalMultiplier,
    autoClickerCount,
    increment,
    decrement,
    reset,
    incrementMultiplier,
    incrementAutoClicker
  }
}
