<script lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import CoupleDetails from '@/components/CoupleDetails.vue'
import FriendsAndFamily from '@/components/FriendsAndFamily.vue'

export default {
  components: {
    HeroSection,
    CoupleDetails,
    FriendsAndFamily
  }
}
</script>

<template>
  <main>
    <HeroSection :mainTitle="'Lani & Finlay'" :date="'24 of May, 2024'" />

    <CoupleDetails />
    <FriendsAndFamily />
  </main>
</template>

<style scoped>
main {
  text-align: center;
}
</style>
