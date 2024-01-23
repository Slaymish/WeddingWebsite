<template>
    <div class="wrapper">
        <h2 class="title">Gallery</h2>

        <div class="gallery" v-if="isAdmin">
            <p>This page is only visable when logged in as an admin</p>
            <div class="gallery-item" v-for="image in images" :key="image.id">
                <div class="gallery-item-info">
                    <div>
                        <h3>{{ image.caption }}</h3>
                        <p>{{ image.isPublic ? 'Public' : 'Private' }}</p>
                    </div>
                </div>
                <div class="gallery-image" v-for="mediaFile in image.mediaFiles" :key="mediaFile">
                    <img :src="mediaFile" alt="Gallery Image" />
                </div>
            </div>
            <div class="backbtn">
                <v-btn color="secondary" href="/admin">Back to Admin</v-btn>
            </div>
        </div>
        <div class="gallery-tbd" v-else>
            <div class="tbd">
                <p>The bride and groom will upload photos of their special day here once the images have been processed</p>
            </div>
            <div class="backbtn">
                <v-btn color="secondary" href="/">Back to Home</v-btn>
            </div>
        </div>  
        
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { isAdminEmail } from '@/admins'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

interface Media {
    caption: string
    isPublic: boolean
    mediaFiles: string[]
}

export default defineComponent({
    name: 'GalleryView',
    setup() {
        const isAdmin = ref(false)
        const images = ref<Media[]>([])

        const getImages = async () => {
            try {
                const imagesCollection = collection(db, 'media')
                const querySnapshot = await getDocs(imagesCollection)
                images.value = []
                querySnapshot.forEach((doc: any) => {
                    console.log(doc.id, ' => ', doc.data())
                    if (doc.data() !== undefined) {
                        let image = doc.data()
                        images.value.push(image)
                    }
                })
            } catch (error) {
                console.error('Error getting images:', error)
            }
        }

        const checkAuth = () => {
            onAuthStateChanged(auth, (user) => {
                if (user && isAdminEmail(user.email)) {
                    // User is signed in, show the attending table
                    isAdmin.value = true

                    // set admin in local storage
                    localStorage.setItem('admin', 'true')
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

        

        onMounted(() => {
            getImages()
            checkAuth()
        })

        return {
            images,
            isAdmin,
        }
    }
})

</script>

<style scoped>
.gallery-tbd {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.tbd {
    font-family: var(--font-title);
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 0.5rem;
    max-width: 600px;
    margin: 0 auto;
}

.title {
    font-family: var(--font-title);
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.backbtn {
    margin-top: 2rem;
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
    width: 100%;
}

.gallery {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
}

.gallery-item {
    width: 300px;
    height: 300px;
    display: flex;
    overflow-y: scroll;
    flex-direction: column;
}

.gallery-image {
    width: 200px;
    height: 200px;
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

.gallery-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

</style>