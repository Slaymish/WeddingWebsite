<script lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import CoupleDetails from '@/components/CoupleDetails.vue'
import FriendsAndFamily from '@/components/FriendsAndFamily.vue'
import WhenAndWhereVue from '@/components/WhenAndWhere.vue'
import WeddingSchedule from '@/components/WeddingSchedule.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    HeroSection,
    CoupleDetails,
    FriendsAndFamily,
    WhenAndWhereVue,
    WeddingSchedule,
    FooterComponent,
    NavBar
}
}
</script>

<template>
  <div>
    <HeroSection :mainTitle="'Lani & Finlay'" :date="'25th of May, 2024'" />
    <CoupleDetails />
    <FriendsAndFamily />
    <WeddingSchedule />
    <WhenAndWhereVue />
  </div>
  <FooterComponent :topButton="true" />
</template>

<style scoped>
</style>
