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
    <div class="couple-title">Together in harmony</div>
    <p class="couple-blurb">
      Join us for a celebration of love, friendship, laughter, and family as we come together to
      unite in marriage.
    </p>
    <div class="images">
      <CoupleImages />
    </div>
  </div>
</template>

<style scoped>
.couple-details {
  font-family: var(--font-text);
  text-align: center;
  padding: 2rem;
  background-color: var(--color-background);
}

.couple-title {
  font-family: var(--font-title);
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.couple-blurb {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.profile-section {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
  }
}
</style>
