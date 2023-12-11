<template>
  <div class="schedule-container">
    <h1 class="title">Wedding Schedule</h1>
    <v-card class="pa-5 text-center schedule-card" outlined>
      <div class="custom-timeline">
        <div class="timeline-item" v-for="event in events" :key="event.id">
          <div class="event-description">{{ event.description }}</div>
          <div class="event-time">{{ event.time }}</div>
          <v-icon v-if="event.icon" class="event-icon">{{ event.icon }}</v-icon>
        </div>
      </div>
      <div class="caption mt-5">thank you for joining us!</div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Event {
  id: number
  time: string
  description: string
  icon: string
}

export default defineComponent({
  name: 'WeddingSchedule',
  data() {
    return {
      events: [
        {
          id: 1,
          time: '3:00 PM',
          description: 'Ceremony',
          icon: 'mdi-church'
        },
        {
          id: 2,
          time: '3:30 PM',
          description: 'Group Photos',
          icon: 'mdi-camera'
        },
        {
          id: 3,
          time: '4:00 PM',
          description: 'Snacks and Drinks',
          icon: 'mdi-food'
        },
        {
          id: 4,
          time: '5:30 PM',
          description: 'Reception and Dinner',
          icon: 'mdi-silverware-fork-knife'
        },
        {
          id: 5,
          time: '7:00 PM',
          description: 'First Dance',
          icon: 'mdi-heart'
        },
        {
          id: 6,
          time: '10:30 PM',
          description: 'Send-Off',
          icon: 'mdi-car'
        }
      ] as Event[]
    }
  },
  methods: {}
})
</script>

<style scoped>
.v-card {
  background-color: var(--color-background);
  max-width: 500px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-family: var(--font-title);
}

.schedule-container {
  max-width: 350px;
  margin: auto;
  padding: 2rem 0;
  font-family: var(--font-title);
}

.schedule-card {
  border: none;
  box-shadow: none;
}

.custom-timeline {
  position: relative;
  padding: 20px 0;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.event-description,
.event-time {
  flex: 1;
  font-size: 1.25rem;
  color: var(--color-text);
}

.event-time {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.custom-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: var(--color-text);
}

.event-icon {
  font-size: 1.5rem;
  margin-left: 8px;
}

.caption {
  font-style: italic;
  margin-top: 4rem;
  font-size: 1rem;
  color: var(--color-text);
}
</style>
