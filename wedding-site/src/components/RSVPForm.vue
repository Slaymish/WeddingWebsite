<template>
  <div v-if="!rsvpSubmitted">
    <form @submit.prevent="submitRSVP">
      <v-text-field v-model="name" :rules="nameRules" label="Name *"></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail *"></v-text-field>
      <v-textarea v-model="dietaryRestrictions" label="Dietary Restrictions"></v-textarea>
      <v-textarea v-model="message" label="Message"></v-textarea>
      <v-radio-group v-model="takingBus" label="Will you be taking the bus?">
        <v-radio value="yes" label="Yes"></v-radio>
        <v-radio value="no" label="No"></v-radio>
      </v-radio-group>
      <v-radio-group v-model="attending" label="Will you require bus transport?">
        <v-radio value="yes" label="Yes"></v-radio>
        <v-radio value="no" label="No"></v-radio>
      </v-radio-group>
      <v-btn-group class="action-buttons">
        <v-btn type="submit">Submit</v-btn>
        <v-btn @click="resetForm">Clear</v-btn>
      </v-btn-group>
    </form>
  </div>
  <div v-else>
    <div class="submitted-label">Thank you for your RSVP!</div>
    <p>Check your email for a confirmation.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default defineComponent({
  name: 'RSVPForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      attending: false,
      dietaryRestrictions: '',
      takingBus: false,
      rsvpSubmitted: false, // Declare the rsvpSubmitted property
      nameRules: [
        (v: string) => !!v || 'Name is required',
        (v: string) => (v && v.length >= 2) || 'Name must be at least 2 characters',
        (v: string) => (v && v.length <= 25) || 'Name must be less than 25 characters'
      ],
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async submitRSVP() {
      this.rsvpSubmitted = true // Update the rsvpSubmitted property

      // Send the form data to Firestore
      try {
        await addDoc(collection(db, 'rsvps'), {
          name: this.name,
          email: this.email,
          message: this.message,
          dietaryRestrictions: this.dietaryRestrictions,
          attending: this.attending,
          takingBus: this.takingBus
        })
        this.resetForm()
      } catch (error: any) {
        console.error('Error writing document: ', error)
        alert('Something went wrong!')
      }
    },
    resetForm() {
      this.name = ''
      this.email = ''
      this.message = ''
      this.dietaryRestrictions = ''
      this.attending = false
      this.takingBus = false
    }
  }
})
</script>

<style scoped>
.action-buttons {
  margin-top: 1rem;
}

.submitted-label {
  margin-top: 1rem;
  font-weight: bold;
  color: rgb(0, 164, 0);
}

form {
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.v-text-field {
  width: 100%;
}

.v-textarea {
  width: 100%;
}

.v-checkbox {
  width: 100%;
}

.v-btn {
  margin-top: 1rem;
}

.v-btn:first-child {
  margin-right: 1rem;
}

@media (min-width: 768px) {
  form {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  form {
    width: 40%;
  }
}

@media (min-width: 1440px) {
  form {
    width: 30%;
  }
}

@media (min-width: 1920px) {
  form {
    width: 25%;
  }
}

@media (min-width: 2560px) {
  form {
    width: 20%;
  }
}

@media (min-width: 3840px) {
  form {
    width: 15%;
  }
}

@media (min-width: 5120px) {
  form {
    width: 10%;
  }
}
</style>
