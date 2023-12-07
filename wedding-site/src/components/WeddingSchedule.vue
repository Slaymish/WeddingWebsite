<template>
  <v-container class="schedule-container">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-5">
          <v-card-title class="text-h5">Wedding Schedule</v-card-title>
          <v-timeline>
            <v-timeline-item v-for="event in events" :key="event.id" :color="event.color">
              <template v-slot:opposite>
                <div class="event-details">
                  <div class="event-time">{{ event.time }}</div>
                  <div class="event-description">{{ event.description }}</div>
                  <v-card v-if="event.furtherDetails" class="mt-4">
                    <v-card-text>{{ event.furtherDetails }}</v-card-text>
                  </v-card>
                </div>
              </template>
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
  methods: {}
})
</script>

<style scoped>
.schedule-container {
  margin-top: 5rem;
}

.event-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3rem;
}

.event-time {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.event-description {
  margin-bottom: 1rem;
}


.v-card {
  background-color: var(--white-mute);
  border-radius: 0.5rem;
  font-family: var(--font-text);
}

.v-card-title,
.v-card-text {
  color: var(--color-text);
}


.v-card-title {
  font-family: var(--font-title);
  margin-bottom: 2rem;
  color: var(--color-text);
}

@media (max-width: 768px){
  .event-details {
    align-items: center;
    margin-bottom: 1rem;
  }
  
}
</style>