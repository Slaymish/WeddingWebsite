<script lang="ts">
import { defineComponent } from 'vue'
import CoupleImages from './CoupleImages.vue'

export default defineComponent({
  name: 'CoupleDetails',
  components: {
    CoupleImages
  },
  setup() {}
})
</script>

<template>
  <div class="couple-details">
    <div>
      <div class="couple-title">Together in harmony</div>
      <p class="couple-blurb">
        Join us for a celebration of love, friendship, laughter, and family as we come together to
        unite in marriage.
      </p>
    </div>
    <div class="images">
      <CoupleImages />
    </div>
    <div class="profile-section">
      <p>
        Finlay and Lani met in a fake bar in a fake town in a fake country. They were both
        pretending to be someone else, but they were both so charming that they couldn't help but
        fall in love.
      </p>
    </div>
  </div>
</template>

<style scoped>
.images {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: aqua;
}

.profile-section p {
  font-family: var(--font-title);
  font-size: 1rem;
  color: var(--color-text);
  max-width: 600px;
}

.profile-section {
  margin-top: 2rem;
}

.couple-details {
  font-family: var(--font-text);
  text-align: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.couple-title {
  font-family: var(--font-title);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.couple-blurb {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--color-text);
  font-family: var(--font-text);
}

.profile-section {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

@media (max-width: 768px) {
  .couple-details {
    height: auto;
  }

  .couple-title {
    font-size: 2rem;
  }

  .couple-blurb {
    font-size: 1rem;
  }

  .profile-section {
    flex-direction: column;
    align-items: center;
  }

  .profile-section p {
    max-width: 90%;
  }
}
</style>
