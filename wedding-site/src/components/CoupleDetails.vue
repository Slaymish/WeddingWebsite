<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CoupleDetails',
  setup() {}
})
</script>

<template>
  <div class="couple-details">
    <div class="couple-title">Lani & Finlay</div>
    <p class="couple-blurb">
        Join us for a celebration of love, friendship, laughter, and family as we come together to unite in marriage.
    </p>
    <div class="profile-section">
        <div class="profile-picture">
            <img src="@/assets/images/Poop.webp" alt="groom" />
            <h2>Finlay</h2>
        </div>
        <div class="profile-picture">
            <img src="@/assets/images/Poop.webp" alt="bride" />
            <h2>Lani</h2>
        </div>
    </div>
  </div>
</template>

<style scoped>
.couple-details {
    text-align: center;
    padding: 2rem;
    background-color: #f9f9f9;
}

.couple-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #555;
}

.couple-blurb {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: #555;
}

.profile-section {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.profile-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-picture img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.5rem;
}

.profile-picture h2 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #555;
}

@media (max-width: 768px) {
    .profile-section {
        flex-direction: column;
    }

    .profile-picture {
        margin-bottom: 1rem;
    }
    
}



</style>
