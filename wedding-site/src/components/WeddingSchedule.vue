<template>
  <v-container class="schedule-container">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-5">
          <v-card-title class="text-h5">Wedding Schedule</v-card-title>
          <v-timeline>
            <v-timeline-item v-for="event in events" :key="event.id" :color="event.color">
              <template v-slot:opposite>
                {{ event.time }}
              </template>
              {{ event.description }}
              <v-card v-if="event.furtherDetails" class="mt-4">
                <v-card-text>{{ event.furtherDetails }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Event {
  id: number
  time: string
  description: string
  furtherDetails?: string
  color?: string
}

export default defineComponent({
  name: 'WeddingSchedule',
  data() {
    return {
      events: [
        {
          id: 1,
          time: '10:00 AM',
          description: 'Wedding Ceremony',
          furtherDetails: '',
          color: 'green'
        },
        {
          id: 2,
          time: '11:00 AM',
          description: 'Cocktail Hour',
          furtherDetails: '',
          color: 'blue'
        },
        {
          id: 3,
          time: '12:00 PM',
          description: 'Reception',
          furtherDetails: '',
          color: 'red'
        },
        {
          id: 4,
          time: '1:00 PM',
          description: 'Drinks',
          furtherDetails: '',
          color: 'purple'
        }
      ] as Event[]
    }
  },
  methods: {
    showDetails(event: Event) {
      event.showDetails = true
    },
    hideDetails(event: Event) {
      event.showDetails = false
    }
  }
})
</script>

<style scoped>
.schedule-container {
  margin-top: 5rem;
}
</style>
