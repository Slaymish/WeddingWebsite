<template>
  <form @submit.prevent="submitRSVP">
    <input v-model="rsvp.name" type="text" placeholder="Name" required />
    <input v-model="rsvp.email" type="email" placeholder="Email" required />
    <select v-model="rsvp.attendance" required>
      <option value="" disabled>Will you attend?</option>
      <option>Yes</option>
      <option>No</option>
    </select>
    <input v-model="rsvp.guests" type="text" placeholder="Number of Guests" pattern="\d*" />
    <textarea v-model="rsvp.specialRequests" placeholder="Special Requests"></textarea>
    <button type="submit">Submit</button>
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
  background-color: #ffffff; /* White background for the form */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
  border: 2px solid #daa49a; /* Salmon border color */
}

form input,
form select,
form textarea,
form button {
  width: 100%;
  border: 2px solid #daa49a; /* Salmon border color */
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 16px;
  color: #daa49a; /* Salmon text color */
  background-color: transparent; /* Transparent background */
}

form button {
  background-color: #daa49a; /* Salmon background for button */
  color: #fae5d3; /* Light peach text color */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #eab7a0; /* Slightly lighter salmon for hover effect */
  color: #ffffff; /* White text color on hover */
}

form textarea {
  resize: vertical;
}

@media (max-width: 600px) {
  form {
    padding: 30px;
  }
}
</style>
