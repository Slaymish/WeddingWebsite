<template>
  <v-container class="schedule-container">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-5">
          <v-card-title class="title">Wedding Schedule</v-card-title>
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
          furtherDetails: 'Meet at the gazebo',
          color: 'green'
        },
        {
          id: 2,
          time: '11:00 AM',
          description: 'Cocktail Hour',
          furtherDetails: 'Blah blah blahBlah blah blahBlah blah blah',
          color: 'blue'
        },
        {
          id: 3,
          time: '12:00 PM',
          description: 'Reception',
          furtherDetails: 'Reception details',
          color: 'red'
        },
        {
          id: 4,
          time: '1:00 PM',
          description: 'Drinks',
          furtherDetails: 'Time to dirnk',
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
  margin-bottom: 5rem;
}

.v-timeline-item {
  margin-bottom: 2rem;
}

.event-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  background-color: var(--color-primary);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 200px;
  color: var(--white-mute);
}

.title {
  font-family: var(--font-title);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.event-time {
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-family: var(--font-title);
}

.event-description {
  margin-bottom: 1rem;
}

.v-card {
  border-radius: 0.5rem;
  font-family: var(--font-text);
}

.v-card-title,
.v-card-text {
  color: var(--color-text);
  text-align: center;
}

.v-card-title {
  font-family: var(--font-title);
  margin-bottom: 2rem;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .event-details {
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }

  .event-time {
    font-size: 0.9rem;
  }
}
</style>
