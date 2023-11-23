<template>
  <form @submit.prevent="submitRSVP">
    <input v-model="rsvp.name" type="text" placeholder="Name" required />
    <input v-model="rsvp.email" type="email" placeholder="Email" required />
    <select v-model="rsvp.attendance" required>
      <option value="" disabled>Will you attend?</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <textarea
      v-model="rsvp.specialRequests"
      placeholder="Special Requests / Dietary Requirements"
    ></textarea>
    <button type="submit">Submit wip</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RSVPForm',
  data() {
    return {
      rsvp: {
        name: '',
        email: '',
        attendance: '',
        guests: '',
        specialRequests: ''
      }
    }
  },
  methods: {
    async submitRSVP() {
      try {
        console.log('RSVP saved successfully')
        // TODO: Handle post-submission logic (e.g., show a thank you message)
      } catch (error) {
        console.error('Error saving RSVP:', error)
        // TODO: Handle errors (e.g., show an error message)
      }
    }
  }
})
</script>

<style scoped>
form {
  padding: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white-mute);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
  border: 2px solid var(--color-border);
}

form input,
form select,
form textarea,
form button {
  width: 100%;
  border: 1px solid var(--color-border);
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 16px;
  color: var(--color-text);
  background-color: transparent; /* Transparent background */
}

form textarea {
  height: 150px;
  font-size: smaller;
}

form button {
  background-color: var(--color-primary);
  color: var(--white-mute);
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: var(--color-primary-dark);
}

form textarea {
  resize: vertical;
}

@media (max-width: 768px) {
  form {
    padding: 20px;
    margin-bottom: 50px;
  }

  form input,
  form select,
  form textarea,
  form button {
    font-size: 14px;
  }

  form textarea {
    height: 100px;
  }

  form button {
    padding: 10px;
  }
}
</style>
