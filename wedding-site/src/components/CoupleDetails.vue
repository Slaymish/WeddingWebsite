<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoupleDetails',
  setup() {}
})
</script>

<template>
  <div class="couple-details">
    <div class="profile-section left">
        <div class="profile-picture">
            <img src="@/assets/images/Poop.webp" alt="groom" />
        </div>
        <h2>Finlay</h2>
        <p class="details">
            Finlays bio goes here..
        </p>
    </div>
    <div class="center-piece">
        <p class="welcome-message">Together is a beautiful place to be.</p>
    </div>
    <div class="profile-section right">
        <div class="profile-picture">
            <img src="@/assets/images/Poop.webp" alt="bride" />
        </div>
        <h2>Lani</h2>
        <p class="details">
            Lanis bio goes here..
        </p>
    </div>
  </div>
</template>

<style scoped>
.couple-details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 0;
    background-color: #f0f0f0f0;
    color: black;
}

.profile-section {
    flex-basis: 30%;
    margin: 1rem;
    text-align: center;
}

.profile-picture img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
}

.center-piece {
    flex-basis: 100%;
    text-align: center;
    margin: 2rem 0;
}

.welcome-message{
    font-style: italic;
    font-size: 1.5rem;
    color: #555;
}

.center-piece h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.center-piece p {
    font-size: 1.25rem;
}

@media (max-width: 768px) {
    .profile-section{
        flex-basis: 100%;
    }

    .profile-picture img {
        width: 120px;
        height: 120px;
    }

    .center-piece h1 {
        font-size: 1.75rem;
    }

    .center-piece p {
        font-size: 1rem;
    }
    
}
</style>
