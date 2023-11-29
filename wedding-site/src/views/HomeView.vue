<script lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import CoupleDetails from '@/components/CoupleDetails.vue'
import FriendsAndFamily from '@/components/FriendsAndFamily.vue'
import WhenAndWhereVue from '@/components/WhenAndWhere.vue'
import WeddingSchedule from '@/components/WeddingSchedule.vue'

export default {
  components: {
    HeroSection,
    CoupleDetails,
    FriendsAndFamily,
    WhenAndWhereVue,
    WeddingSchedule
  }
}
</script>

<template>
  <main>
    <HeroSection :mainTitle="'Lani & Finlay'" :date="'25th of May, 2024'" />
    <CoupleDetails />
    <WeddingSchedule />
    <FriendsAndFamily />
    <WhenAndWhereVue />
  </main>
</template>

<style scoped>
main {
  text-align: center;
}

.to-top {
  font-family: var(--font-text);
  font-size: 1rem;
  color: var(--color-text);
  margin-top: 2rem;
}
</style>
