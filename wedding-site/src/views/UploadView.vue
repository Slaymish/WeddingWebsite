<template>
  <div v-if="!isAdmin">
    <p>Please log in to upload photos.</p>
    <br />
    <v-btn color="secondary" to="/admin">Back to Admin</v-btn>
  </div>
  <div v-else>
  <v-container align="center" class="main">
    <h1 class="title">Upload Photos</h1>
    <!-- Duplicate of above but using html -->
    <div class="wrapper">
      <div class="form">
        <UploadForm />
      </div>
      <div class="body">
        <p>
          Any questions, please contact me at
          <a href="mailto:hamishapps@gmail.com" class="email-link">hamishapps@gmail.com</a>
          <br />
          Feel free send me anything through my email as well.
        </p>
        <v-btn color="secondary" href="/admin" class="back">Back to Admin</v-btn>
      </div>
    </div>
  </v-container>
  </div>
  <FooterComponent :topButton="false" />
</template>

<script lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import UploadForm from '@/components/UploadForm.vue'
import { defineComponent, ref, onMounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

export default defineComponent({
  components: {
    UploadForm,
    FooterComponent
  },
  setup() {
    const isAdmin = ref(false)
    const checkAuth = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, show the attending table
          isAdmin.value = true
        } else {
          // No user is signed in, hide the attending table
          isAdmin.value = false
          
          // change page to /admin
          location.href = '/admin'

        }
      })
    }

    onMounted(() => {
      checkAuth()
    })

    return {
      isAdmin,
      checkAuth
    }
  }
})
</script>

<style scoped>
.title {
  font-family: var(--font-title);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  background-color: var(--white-mute);
  border-radius: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  background-color: var(--white-mute);
  padding: 1rem;

  /* border radius for bottom */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.form {
  background-color: var(--white-soft);
  margin: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border radius for top */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.back {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.email-link {
  color: #1976d2;
}

.email-link:hover {
  color: #115293;
}

@media (max-width: 768px) {
  .main {
    margin-top: 6rem;
  }
}
</style>
