<script lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import CoupleDetails from '@/components/CoupleDetails.vue'
import FriendsAndFamily from '@/components/FriendsAndFamily.vue'
import WhenAndWhereVue from '@/components/WhenAndWhere.vue'

export default {
  components: {
    HeroSection,
    CoupleDetails,
    FriendsAndFamily,
    WhenAndWhereVue
  }
}
</script>

<template>
  <main>
    <HeroSection :mainTitle="'Lani & Finlay'" :date="'24 of May, 2024'" />
    <CoupleDetails />
    <WhenAndWhereVue />
    <FriendsAndFamily />
  </main>
</template>

<style scoped>
main {
  text-align: center;
}
</style>
