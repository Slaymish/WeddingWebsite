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
      <p>
        This is filler text. Need a paragraph or two here about the couple or a quote or something.
        This is filler text. Need a paragraph or two here about the couple or a quote or something.
        This is filler text. Need a paragraph or two here about the couple or a quote or something.
      </p>
    </div>
  </div>
  <DividerComponent />
</template>

<style scoped>
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
    flex-direction: column;
    align-items: center;
  }

  .profile-section p {
    max-width: 90%;
  }
}
</style>
