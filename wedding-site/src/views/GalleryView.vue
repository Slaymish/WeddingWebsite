<template>
    <div class="wrapper">
        <h2 class="title">Gallery</h2>

        <div class="gallery">
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
        </div>

        <div class="backbtn">
            <v-btn color="secondary" href="/admin">Back to Admin</v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { db } from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'

interface Media {
    caption: string
    isPublic: boolean
    mediaFiles: string[]
}

export default defineComponent({
    name: 'GalleryView',
    setup() {
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

        onMounted(() => {
            getImages()
        })

        return {
            images
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