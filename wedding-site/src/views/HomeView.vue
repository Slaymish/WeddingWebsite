<script lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import CoupleDetails from '@/components/CoupleDetails.vue'
import FriendsAndFamily from '@/components/FriendsAndFamily.vue'
import WhenAndWhereVue from '@/components/WhenAndWhere.vue'
import WeddingSchedule from '@/components/WeddingSchedule.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    HeroSection,
    CoupleDetails,
    FriendsAndFamily,
    WhenAndWhereVue,
    WeddingSchedule,
    FooterComponent
  }
}
</script>

<template>
  <div class="main">
    <HeroSection 
    :mainTitle="'Lani & Finlay'" 
    :date="'25th of May, 2024'"
    />
    <CoupleDetails />
    <WeddingSchedule />
    <FriendsAndFamily />
    <WhenAndWhereVue />
  </div>
  <FooterComponent :topButton="true" />
</template>

<style scoped>
.main {
  font-family: var(--font-text);
  background-color: var(--color-background);
  color: var(--color-text);
  background-image: url('/src/assets/images/flower_header.webp'); /* Ensure this is the correct path */
  background-repeat: repeat-x;
  background-size: auto 200px; /* Maintain the aspect ratio and fill the height */
  background-position: top;
  width: 100%;
  padding-top: 90px; /* Adjust this to the new size of your image */
}
</style>
