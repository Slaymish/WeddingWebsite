<script lang="ts">
import { defineComponent, ref } from 'vue'

import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import type { DocumentData } from 'firebase/firestore';



export default defineComponent({
    name: 'AttendingView',
    components: {},
    setup() {
        const showTable = ref(false)
        const password = ref('')
        const correctPassword = ref('1234')
        const attendees = ref([])

        const getAttendees = async () => {
            try {
                const attendeesCollection = collection(db, 'rsvp')
                const querySnapshot = await getDocs(attendeesCollection)
                querySnapshot.forEach((doc: any) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data())
                    if (doc.data() !== undefined) {
                        let attendee = doc.data()
                        attendees.value.push(attendee)
                    }
                })
                console.log(attendees.value)

            } catch (error) {
                console.error('Error getting attendees:', error)
            }

        }

        

        const checkPassword = () => {
            if (password.value === correctPassword.value) {
                // Password is correct, show the attending table
                showTable.value = true
                getAttendees()
            } else {
                // Password is incorrect, show an error message
                // Implement your logic here

            }
        }

        return {
            password,
            checkPassword,
            showTable,
            attendees
        }
            // Implement your logic here
    }

});
</script>

<template>
    <div class="wrapper">
        <h1>For view from the Bride and Groom only</h1>
        <div v-if="!showTable">
            <input type="password" v-model="password" placeholder="Enter password">
            <button @click="checkPassword">Submit</button>
        </div>
        <div v-else>
            <h1>
                Attendees
            </h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Attending</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="attendee in attendees" :key="attendee.name">
                        <td>{{ attendee.name }}</td>
                        <td>{{ attendee.attending }}</td>
                        <td>{{ attendee.message }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    max-width: 600px;
    margin-bottom: 2rem;
    background-color: var(--white-soft);
    padding: 2rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}

th, td {
    padding: 0.5rem;
}



h1 {
    font-family: var(--font-title);
    font-size: 2rem;
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