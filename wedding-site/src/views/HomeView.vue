<script lang="ts">
import PeopleInformation from '@/components/PeopleInformation.vue';
import HeroSection from '@/components/HeroSection.vue'

export default {
  components: {
    PeopleInformation,
    HeroSection
  },
  data(){
    return {
      peopleList: [
        {
          id: 1,
          name: 'Person One',
          blurb: 'This a biooo',
          pictureURL: './src/'
        },
        {
          id: 2,
          name: 'Person One',
          blurb: 'This a biooo',
          pictureURL: '/url'
        },
        {
          id: 3,
          name: 'Personhh One',
          blurb: 'This a biooo',
          pictureURL: '/url'
        }
      ]
    }
  }
}
</script>

<template>
  <main>
    <HeroSection
      :mainTitle= "'Lani & Finlay'"
      :date="'24 of May, 2024'"
      />

    <PeopleInformation 
      :people="peopleList"
    />
  </main>
</template>

<style scoped>
main {
  text-align: center;
  max-width: 100vw;
  max-height: 100vh;
  background-color: rgb(135, 135, 135);
}

</style>
