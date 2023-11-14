<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="container">
      <div class="left-section">
        <div class="details">
          <h1>xx of May 2024</h1>
          <div class="venue-picture">
            <img src="@/assets/images/Poop.webp" alt="venue" />
          </div>
          <h2>Walnut Weddings</h2>
          <p><RouterLink to="/details">More Details</RouterLink></p>
        </div>
      </div>
      <div class="right-section">
        <div class="map-container">
          <img src="../assets/logo.svg" alt="map" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.venue-picture img {
  max-width: 250px;
}

.container {
  display: flex;
  height: 100vh;
  justify-content: space-between;
}

.left-section,
.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.details {
  max-width: 90%;
  text-align: center;
}

.map-container {
  width: 100%;
  max-width: 90%;
  aspect-ratio: 16 / 9;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: whitesmoke;
  overflow: hidden;
}

.map-container img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
}
</style>
