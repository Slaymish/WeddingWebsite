<template>
  <v-container class="hero-section">
    <v-row class="fill-height" align="center" justify="start">
      <v-col cols="10" sm="6" md="6" class="text-box">
        <div class="hero-subtitle">Together with their families</div>
        <h1 class="display-1">Lani<br />&<br />Finlay</h1>
        <div class="hero-subtitle">Invite you to join them</div>
        <div class="display-2">{{ date }}</div>
        <v-btn text :to="{ name: 'rsvp' }" class="rsvp-button" large :color="'secondary'"
          >RSVP</v-btn
        >
      </v-col>
    </v-row>
    <div v-if="admin" class="admin">
      <v-btn text :to="{ name: 'admin' }" class="admin-button" large :color="'secondary'"
        >Admin</v-btn
      >
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

export default defineComponent({
  name: 'HeroSection',
  props: {
    date: {
      type: String,
      required: true
    }
  },
  setup() {
    const admin = ref(false)
    const checkAuth = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, show the attending table
          admin.value = true
        } else {
          // No user is signed in, hide the attending table
          admin.value = false
        }
      })
    }

    checkAuth()

    return {
      admin
    }
  }
})
</script>

<style scoped>
.hero-section {
  min-height: 600px;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  max-width: 900px;
  margin-top: 2rem;
}

.text-box {
  color: var(--color-text);
  font-family: var(--font-title);
  text-align: left; /* Ensure text within the text box is left-aligned */
  margin: 0 auto;
}

.display-1 {
  font-size: 9.5rem;
  margin-bottom: 5.5rem;
  margin-top: 1rem;
  line-height: 1;
}

.display-2 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
}

@media (max-width: 900px) {
  .display-1 {
    font-size: 7rem;
  }

  .display-2 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-section {
    min-height: 500px;
    margin-top: 8rem;
  }

  .text-box {
    padding: 0 1rem;
  }
}
</style>
