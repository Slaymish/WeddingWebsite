<template>
  <form @submit.prevent="submitRSVP">
    <v-text-field v-model="name" :rules="nameRules" label="Name"></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>

    <v-textarea v-model="dietaryRestrictions" label="Dietary Restrictions"></v-textarea>

    <v-textarea v-model="message" label="Message"></v-textarea>

    <v-checkbox
      v-model="attending"
      label="I will be attending"
      style="margin-top: 1rem"
    ></v-checkbox>
    <v-btn class="me-4" type="submit">Submit</v-btn>
    <v-btn @click="resetForm">Clear</v-btn>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RSVPForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      attending: false,
      dietaryRestrictions: '',
      nameRules: [
        (v) => (v && v.length >= 2) || 'Name must be at least 2 characters',
        (v) => (v && v.length >= 2) || 'Name must be at least 2 characters'
        // ... other name rules ...
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    submitRSVP() {
      alert('RSVP submitted')
      this.resetForm()
    },
    resetForm() {
      this.name = ''
      this.email = ''
      this.message = ''
      this.attending = false
      this.dietaryRestrictions = ''
    }
  }
})
</script>

<style scoped>
form {
  background-color: var(--white-mute);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  min-width: 300px;
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
