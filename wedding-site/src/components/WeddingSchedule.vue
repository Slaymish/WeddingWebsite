<template>
  <div class="schedule-container">
    <h1>Wedding Schedule</h1>
    <div
      class="event-item"
      v-for="event in events"
      :key="event.id"
      @mouseover="showDetails(event)"
      @mouseleave="hideDetails(event)"
    >
      <h3>{{ event.time }}</h3>
      <h4>{{ event.description }}</h4>
      <div class="extra-info" v-if="event.showDetails">
        <h4 v-for="blurb in event.blurbs" :key="blurb.id">{{ blurb.title }}</h4>
        <p>{{ blurb.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Event {
  id: number
  time: string
  description: string
  showDetails: boolean
  blurbs: Array<{ id: number; title: string; description: string }>
}

export default defineComponent({
  name: 'WeddingSchedule',
  components: {},
  data() {
    return {
      events: [
        {
          id: 1,
          time: '10:00 AM',
          description: 'Wedding Ceremony',
          showDetails: false,
          blurbs: [
            {
              id: 1,
              title: 'Wedding Ceremony',
              description:
                "The wedding ceremony will be held at the beautiful St. Paul's Cathedral in Pittsburgh, PA. The ceremony will begin at 10:00 AM. Please arrive early to ensure you have time to find parking and get seated before the ceremony begins."
            }
          ]
        },
        {
          id: 2,
          time: '11:00 AM',
          description: 'Cocktail Hour',
          showDetails: false,
          blurbs: [
            {
              id: 1,
              title: 'Cocktail Hour',
              description:
                'Immediately following the ceremony, we will be hosting a cocktail hour at the Cathedral of Learning. Please join us for drinks and appetizers as we celebrate our marriage!'
            }
          ]
        },
        {
          id: 3,
          time: '12:00 PM',
          description: 'Reception',
          showDetails: false,
          blurbs: [
            {
              id: 1,
              title: 'Reception',
              description:
                'The reception will be held at the Cathedral of Learning. Please join us for dinner, drinks, and dancing as we celebrate our marriage!'
            }
          ]
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
  width: 480px;
  margin: 0 auto;
  text-align: center;
  font-family: var(--font-text);
  font-size: 1rem;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--white-mute);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.schedule-container h1 {
  font-family: var(--font-title);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.event-item {
  margin-bottom: 2rem;
}

.extra-info {
  margin-top: 1rem;
}

.extra-info h4 {
  margin-bottom: 0.5rem;
}

.extra-info p {
  margin-bottom: 0.5rem;
}

.extra-info p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .schedule-container {
    width: 100%;
    padding: 1rem;
    margin-bottom: 5rem;
    margin-top: 3rem;
    border-radius: 0;
  }

  .schedule-container h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .event-item {
    margin-bottom: 1rem;
  }

  .extra-info {
    margin-top: 0.5rem;
  }

  .extra-info h4 {
    margin-bottom: 0.25rem;
  }
}
</style>
