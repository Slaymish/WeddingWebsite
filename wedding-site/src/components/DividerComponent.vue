<template>
  <v-row justify="center">
    <v-col cols="5">
      <hr class="divider-line" />
    </v-col>
  </v-row>
</template>

<style scoped>
.divider-line {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--color-text),
    rgba(0, 0, 0, 0)
  );
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DividerComponent'
})
</script>
