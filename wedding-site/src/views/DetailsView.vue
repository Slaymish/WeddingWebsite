a
<script lang="ts">
import DetailDropDown from '@/components/DetailsDropDown.vue'

export default {
  components: {
    DetailDropDown
  },
  data() {
    return {
      details: [
        {
          id: 1,
          name: 'Whens the wedding?',
          answer: '23th May 2024, Reception starting at 10am.'
        },
        {
          id: 2,
          name: 'Where?',
          answer:
            'Its at the Walnut wedding place. For more details check<a href="/when-and-where">when and where</a>'
        },
        {
          id: 3,
          name: 'Accomodation Options',
          answer:
            'Hotel down the road, <a href="https://trivago.com" target="_blank">here a good one</a>'
        },
        {
          id: 4,
          name: 'Transport',
          answer:
            'Its preferred if you drive yourself. Though we are arranging a van to come freom taruanga central if needed. Contact us directly to get more info.'
        },
        {
          id: 5,
          name: 'Gifts',
          answer: 'Cash only pleaser'
        },
        {
          id: 6,
          name: 'Plus ones',
          answer: 'No thanks'
        }
      ]
    }
  }
}
</script>

<template>
  <main>
    <DetailDropDown :details="details" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
}
</style>
