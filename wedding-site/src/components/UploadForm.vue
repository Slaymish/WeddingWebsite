<template>
  <div v-if="!rsvpSubmitted">
    <form @submit.prevent="submitRSVP">
      <v-file-input
        v-model="mediaFiles"
        accept="image/*,video/*"
        multiple
        label="Choose files or drag them here"
        :rules="mediaRules"
        @change="previewMedia"
        prepend-icon="mdi-camera"
        outlined
        chips
        small-chips
      ></v-file-input>
      <div v-if="mediaPreviews.length">
        <div class="media-previews">
          <div v-for="(file, index) in mediaPreviews" :key="index" class="media-preview">
            <img v-if="isImage(file)" :src="file" alt="Image preview" />
            <video v-else controls>
              <source :src="file" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <v-text-field v-model="caption" label="Caption *" :rules="captionRules"
      hint="If selecting multiple images, this caption will apply to all. E.g., 'First Dance', 'Ceremony'"
  persistent-hint
      ></v-text-field>
        <div class="spacer"></div>
      <v-radio-group v-model="visibility" label="Visibility *" hint="Public photos will be visible to everyone on the site."
            persistent-hint>
        <v-radio value="public" label="Public"></v-radio>
        <v-radio value="private" label="Private"></v-radio>
      </v-radio-group>
      <div class="action-buttons">
        <v-btn type="submit">Submit</v-btn>
        <v-btn @click="resetForm">Clear</v-btn>
      </div>
    </form>
  </div>
  <div v-else>
    <div class="submitted-label">Media Uploaded</div>
    <p><a href="/admin/upload">Upload more</a></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { db } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default defineComponent({
  name: 'UploadForm',
  data() {
    return {
      rsvpSubmitted: false,
      caption: '',
      mediaFiles: [],
      mediaPreviews: [],
      visibility: 'private',
      captionRules: [
        (v: string) => !!v || 'Caption is required',
        (v: string) => (v && v.length >= 2) || 'Caption must be at least 2 characters',
        (v: string) => (v && v.length <= 25) || 'Caption must be less than 25 characters'
      ],
      mediaRules: [
        (v: string) => !!v || 'Media is required',
        (v: string) => (v && v.length >= 1) || 'Media must be at least 1 file',
        (v: string) => (v && v.length <= 10) || 'Media must be less than 10 files'
      ]
    }
  },
  methods: {
    async submitRSVP() {
        this.rsvpSubmitted = true; // Update the rsvpSubmitted property
        alert('Media upload not yet implemented. Please check back later.');
        if (this.rsvpSubmitted) {
          return;
        }

        const visible = this.visibility === 'public';

        // Helper function to upload a single file
        const uploadFile = async (file) => {
            const storageRef = firebase.storage().ref('media/' + file.name);
            const uploadTask = await storageRef.put(file);
            return await uploadTask.ref.getDownloadURL();
        };

        try {
            // Upload all media files and get their download URLs
            const mediaUrls = await Promise.all(this.mediaFiles.map(file => uploadFile(file)));

            // Send the form data with media URLs to Firestore
            await addDoc(collection(db, 'media'), {
            caption: this.caption,
            isPublic: visible,
            mediaFiles: mediaUrls // Store the URLs, not the files
            });

            this.resetForm();
        } catch (error) {
            console.error('Error writing document: ', error);
            this.resetForm();
        }
    },
    resetForm() {
      this.caption = ''
      this.mediaFiles = []
      this.mediaPreviews = []
      this.visibility = 'public'
      this.rsvpSubmitted = false
    },
    previewMedia() {
      this.mediaPreviews = []
      for (let file of this.mediaFiles) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.mediaPreviews.push(e.target.result)
        }
        if (file.type.startsWith('image/')) {
          reader.readAsDataURL(file)
        } else if (file.type.startsWith('video/')) {
          this.mediaPreviews.push(URL.createObjectURL(file))
        }
      }
    },
    isImage(file) {
      return file.startsWith('data:image/')
    }
  }
})
</script>

<style scoped>
.spacer {
  height: 1rem;
}
.media-previews {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    align-items: flex-start;
}
.media-preview img, .media-preview video {
  width: 100%;
    max-width: 200px;
    height: auto;
}

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

.v-file-input {
  width: 100%;
}

.v-radio-group {
  width: 100%;
}

.v-btn {
  margin-top: 1rem;
}

.v-btn:first-child {
  margin-right: 1rem;
}

@media (max-width: 768px) {
  form {
    min-width: 0;
    width: 350px;
  }
}
</style>
