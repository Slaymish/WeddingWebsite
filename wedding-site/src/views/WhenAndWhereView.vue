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
          <iframe src="https://snazzymaps.com/embed/545474" width="100%" height="100%" style="border:none;"></iframe>
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
  flex-direction: row;
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
  padding: 10px;
  margin: auto;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: aliceblue;
  overflow: hidden;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .map-container {
    aspect-ratio: 1/1;
  }
  
}
</style>
