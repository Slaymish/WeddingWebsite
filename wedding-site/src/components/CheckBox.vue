<template>
  <v-checkbox v-model="checkbox" label="Check me"></v-checkbox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CheckBox',
  setup() {
    const checkbox = ref(false)
    return { checkbox }
  }
})
</script>
