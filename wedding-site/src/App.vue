<script lang="ts">
import FooterComponent from './components/FooterComponent.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    FooterComponent,
    NavBar
  }
}
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
  <FooterComponent />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
