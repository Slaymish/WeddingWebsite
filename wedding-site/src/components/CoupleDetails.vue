<script lang="ts">
import { defineComponent } from 'vue'
import CoupleImages from './CoupleImages.vue'
import DividerComponent from './DividerComponent.vue';

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
        This is filler text. Need a paragraph or two here about the couple. This is filler text.
        Once upon a time there was a couple who were getting married. This is filler text. Need a
        paragraph or two here about the couple. This is filler text. Once upon a time there was a
        couple who were getting married. This is filler text. Need a paragraph or two here about the
        couple. This is filler text. Once upon a time there was a couple who were getting married.
        This is filler text. Need a paragraph or two here about the couple. This is filler text.
        Once upon a time there was a couple who were getting married. This is filler text. Need a
        paragraph or two here about the couple. This is filler text. Once upon a time there was a
        couple who were getting married. This is filler text. Need a paragraph or two here about the
        couple. This is filler text. Once upon a time there was a couple who were getting married.
      </p>
    </div>
  </div>
  <DividerComponent />
</template>

<style scoped>
.couple-details {
  box-sizing: border-box;
  padding: 20px;
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

.profile-section p {
  font-size: 0.9rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  margin-top: 1rem;
  font-family: var(--font-text);
}

.images {
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  margin-bottom: 2rem;
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
