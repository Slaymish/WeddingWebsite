<template>
    <div class="wrapper">
        <h2 class="title">Gallery</h2>
        <div v-if="isAdmin">
            <div class="gallery">
                <p>This page is only visable when logged in as an admin</p>
                <div class="gallery-item" v-for="image in images" :key="image.id">
                    <div class="gallery-item-info">
                        <div>
                            <span>{{ image.caption }}</span>
                            <span> \\\ {{ image.isPublic ? 'Public' : 'Private' }}</span>
                        </div>
                    </div>
                    <div class="images">
                        <div class="gallery-image" v-for="mediaFile in image.mediaFiles" :key="mediaFile">
                            <img :src="mediaFile" alt="Gallery Image" />
                        </div>
                    </div>
                </div>
                <div class="backbtn">
                    <v-btn color="secondary" href="/admin">Back to Admin</v-btn>
                </div>
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
    margin-top: 2rem;
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
    max-width: 900px;
    margin-bottom: 4rem;
    margin-top: 2rem;
    width: 100%;
    padding: 0 1rem;
}

.gallery {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.gallery-item {
    display: flex;
    flex-direction: column;
}

.images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.gallery-item-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: var(--white-soft);
    border-radius: 20px;
    margin-bottom: 1rem;
    font-family: var(--font-title);
    font-size: 1.2rem;
}

.gallery-image {
    width: 300px;
    height: auto;
    margin: 0.5rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    
}

.gallery-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


</style>