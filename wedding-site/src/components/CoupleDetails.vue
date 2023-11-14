<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoupleDetails',
  setup() {}
})
</script>

<template>
  <div class="couple-details">
    <div class="left-section">
      <h1>Finlay</h1>
      <div class="profile-picture">
        <img src="@/assets/images/Poop.webp" alt="groom" />
      </div>
      <p class="details">
        BioologyBioologyBioolfffffogyBioologyBioologyBioologyBioologyBBioologyBioologyBioolfffffogyBioologyBioologyBioologyBioologyB
      </p>
    </div>
    <div class="right-section">
      <h1>Lani</h1>
      <div class="profile-picture">
        <img src="@/assets/images/Poop.webp" alt="bride" />
      </div>
      <p class="details">
        BioologyBioologyBioolfffffogyBioologyBioologyBioologyBioologyBBioologyBioologyBioolfffffogyBioologyBioologyBioologyBioologyB
      </p>
    </div>
  </div>
</template>

<style scoped>
.profile-picture img {
  max-width: 300px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}

.couple-details {
  display: flex;
  height: 50vh;
}

.left-section,
.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.left-section .details,
.right-section .details {
  word-wrap: break-word;
  max-width: 70%;
  overflow-wrap: break-word;
  padding: 0 10px;
  margin: auto;
  text-align: center;
}
</style>
