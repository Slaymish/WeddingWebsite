<script lang="ts">
import { defineComponent } from 'vue'
import CoupleImages from './CoupleImages.vue'
import DividerComponent from './DividerComponent.vue'

export default defineComponent({
  name: 'CoupleDetails',
  components: {
    CoupleImages,
    DividerComponent
  },
  setup() {}
})
</script>

<template>
  <div class="couple-details">
    <div class="images">
      <CoupleImages />
    </div>
    <div class="profile-section">
      <!-- Vuetify Quote -->
      <p class="quote">
        One small step for man, a huge step for mankind
      </p>
      <p class="quote-author">
        - Neil Armstrong
      </p>
    </div>
  </div>
  <DividerComponent />
</template>

<style scoped>
.quote {
  font-family: var(--font-title);
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.quote-author {
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 0.5rem;
}

.couple-details {
  box-sizing: border-box;
}

.couple-title {
  font-family: var(--font-title);
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.couple-title,
.couple-blurb,
.profile-section p {
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;
}

.couple-blurb {
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
  font-family: var(--font-title);
}

.profile-section {
  font-size: 0.9rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
  font-family: var(--font-text);
}

.images {
  margin: 0 auto;
  width: 100%; 
  margin-bottom: 2rem;
  margin: 0;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .profile-section p {
    max-width: 90%;
  }

  .quote {
    font-size: 1rem;
    margin: 0 auto;
  }

  .quote-author {
    font-size: 0.8rem;
    margin: 0 auto;
  }
}
</style>
