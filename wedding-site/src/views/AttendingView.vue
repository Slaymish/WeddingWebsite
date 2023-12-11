<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { auth, db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

interface Attendee {
  name: string
  email: string
  message: string
  dietaryRestrictions: string
  attending: string
}

export default defineComponent({
  name: 'AttendingView',
  components: {},
  setup() {
    const showTable = ref(false)
    const attendees = ref<Attendee[]>([])

    const email = ref('')
    const password = ref('')

    const getAttendees = async () => {

      try {
        const attendeesCollection = collection(db, 'rsvps')
        const querySnapshot = await getDocs(attendeesCollection)
        attendees.value = []
        querySnapshot.forEach((doc: any) => {
          console.log(doc.id, ' => ', doc.data())
          if (doc.data() !== undefined) {
            let attendee = doc.data()
            attendees.value.push(attendee)
          }
        })
      } catch (error) {
        console.error('Error getting attendees:', error)
      }
    }

    const checkAuth = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, show the attending table
          showTable.value = true
          getAttendees()
        } else {
          // No user is signed in, hide the attending table
          showTable.value = false
          // Implement your logic here for unauthenticated users
        }
      })
    }

    onMounted(() => {
      checkAuth()
    })

    const signIn = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        getAttendees()
      } catch (error) {
        console.error('Error during sign in:', error)
        // Handle errors here, such as displaying a notification
      }
    }

    const signOut = async () => {
      try {
        await auth.signOut()
      } catch (error) {
        console.error('Error during sign out:', error)
        // Handle errors here, such as displaying a notification
      }
    }

    const downloadCSV = () => {
      const csv = attendees.value.map((row) => {
        return `${row.name},${row.email},${row.message},${row.dietaryRestrictions},${row.attending}`
      })
      csv.unshift('Name,Email,Message,Dietary Restrictions,Attending')
        const csvArray = csv.join('\r\n')
        const a = document.createElement('a')
        const blob = new Blob([csvArray], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const date = new Date()
        const dateString = date.toISOString().split('T')[0]

        url.replace('#', '%23')
        a.href = url
        a.download = 'attendees-' + dateString + '.csv'
        a.click()
        window.URL.revokeObjectURL(url)
        a.remove()

    }


    return {
      showTable,
      attendees,
      signIn,
      signOut,
      email,
      password,
      downloadCSV
    }
  }
})
</script>

<template>
  <div class="wrapper">
    <div v-if="!showTable">
      <h1>For view from the Bride and Groom only</h1>
      <p>Please log in to view the attendees.</p>
      <br />

      <!-- Login Form -->
      <form class="form" @submit.prevent="signIn">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <v-btn type="submit" class="button" color="secondary">Log in</v-btn>
      </form>
    </div>
    <div v-else>
      <h1>Attendees</h1>

      <!-- Stats -->
      <p>Number of responses: {{ attendees.length }}</p>
      <p>
        Number of responses attending:
        {{ attendees.filter((attendee) => attendee.attending === 'yes').length }}
      </p>

      <br />
      <!-- Attending Table -->
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Dietary</th>
            <th>Attending</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="attendee in attendees"
            :key="attendee.name"
            :class="{ 'attending-row': attendee.attending === 'yes' }"
          >
            <td>{{ attendee.name }}</td>
            <td>
              <a :href="'mailto:' + attendee.email">{{ attendee.email }}</a>
            </td>
            <td>{{ attendee.message }}</td>
            <td>{{ attendee.dietaryRestrictions }}</td>
            <!-- If attending -->
            <td v-if="attendee.attending === 'yes'">Yes</td>
            <!-- If not attending -->
            <td v-else>No</td>
          </tr>
        </tbody>
      </table>

      <div class="options">
      <a href="https://console.firebase.google.com/project/wedding-4a05a/firestore/data/~2Frsvps~2F2kMysMLx9nflibSnUqAu" target="_blank">
        View in Firestore
        </a>

        <a
        @click="downloadCSV"
        href="#"
        >Download CSV</a>

      <a @click="signOut" href="#">Sign out</a>
      </div>
    </div>

    <div class="nav-buttons">
      <v-btn to="/" class="button" color="secondary" size="small">Home</v-btn>
      <v-btn to="/rsvp" class="button" color="secondary" size="small">RSVP</v-btn>
    </div>
  </div>
</template>

<style scoped>
.options {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
}

.options a {
    margin: 0.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white-mute);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 200px;
  margin: 0 auto;
}

.attending-row {
  background-color: rgb(189, 255, 173);
}

.button {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.nav-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  max-width: 300px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 900px;
  margin-bottom: 2rem;
  background-color: var(--white-soft);
  padding: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid black;
}

th,
td {
  padding: 0.5rem;
}

h1 {
  font-family: var(--font-title);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

input {
  width: 100%;
  max-width: 300px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-text);
  margin-bottom: 1rem;
}
</style>
