<template>
    <div class="wrapper">
        <div v-if="!isAdmin">
            <h1 class="title">For view from the Bride and Groom only</h1>
            <div class="signin">
                <SigninWithGoogle />
                <p class="description">Please log in to view the admin page.</p>
            </div>
            <div class="body">
                <v-btn color="secondary" href="/">Back to Home</v-btn>
            </div>
        </div>
        <div v-else>
            <h1 class="title">Admin</h1>

            <div class="links">
                <div class="link">
                    <v-btn color="secondary" href="/admin/attending">Attending</v-btn>
                    <p class="description">View the list of people attending</p>
                </div>
                <div class="link">
                    <v-btn color="secondary" href="/admin/upload">Upload</v-btn>
                    <p class="description">Upload photos to the gallery</p>
                </div>
                <div class="link">
                    <v-btn color="secondary" href="/gallery">Gallery</v-btn>
                    <p class="description">View the gallery</p>
                </div>
            </div>
            <!-- Stats -->
            <v-btn color="secondary" @click="signOut">Sign Out</v-btn>
        </div>  
    </div>
    <FooterComponent :topButton="false" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import SigninWithGoogle from '@/components/SigninWithGoogle.vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import FooterComponent from '@/components/FooterComponent.vue'
import { isAdminEmail } from '@/admins'

export default defineComponent({
    name: 'AdminView',
    components: {
        SigninWithGoogle,
        FooterComponent
    },
    setup() {
        const isAdmin = ref(false)
        const checkAuth = () => {
            onAuthStateChanged(auth, (user) => {
                if (user && isAdminEmail(user.email)) {
                    // User is signed in, show the attending table
                    isAdmin.value = true
                } else {
                    // No user is signed in, hide the attending table
                    isAdmin.value = false
                    // Implement your logic here for unauthenticated users

                    console.log('Google user:', user)
                    console.log('isAdminEmail:', isAdminEmail(user?.email))
                    console.log('If you see this, you are not an admin.')
                }
            })
        }

        const signOut = async () => {
            try {
                await auth.signOut()
            } catch (error) {
                console.error(error)
            }
        }

        onMounted(() => {
            checkAuth()
        })

        

        return {
            isAdmin,
            checkAuth,
            signOut
        }
    },
})
</script>

<style scoped>
.signin {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    text-align: center;
    max-width: 300px;
    max-height: 300px;
    margin-bottom: 2rem;
    background-color: var(--white-soft);
    border-radius: 20px;
    width: 100%;
    height: 100%;

}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    text-align: center;
    max-width: 600px;
    margin-bottom: 2rem;
    background-color: var(--white-mute);
    border-radius: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100vh;
}

.link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    text-align: center;
    max-width: 500px;
    max-height: 300px;
    margin-bottom: 2rem;
    background-color: var(--white-soft);
    border-radius: 20px;
    width: 100vw;
    height: 100vh;

}

.links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    text-align: center;
    max-width: 500px;
    max-height: 300px;
    margin-bottom: 2rem;
    background-color: var(--white-mute);
    border-radius: 20px;
    width: 100vw;
    height: 100vh;
}

.title {
    font-family: var(--font-title);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
}
</style>