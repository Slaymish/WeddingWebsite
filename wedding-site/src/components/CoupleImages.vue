<script lang="ts">
import { defineComponent } from 'vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'

export default defineComponent({
  name: 'CoupleImages',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      images: [
        {
          id: 1,
          imagesrc: 'wedding-site/src/assets/images/reference/flowers.jpg', // Ensure these are the correct paths to your image files
          caption: 'Our First Date'
        },
        {
          id: 2,
          imagesrc: 'images2.jpg',
          caption: 'Proposal Moment'
        },
        {
          id: 3,
          imagesrc: 'images3.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 4,
          imagesrc: 'images4.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 5,
          imagesrc: 'images5.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 6,
          imagesrc: 'images6.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 7,
          imagesrc: 'images7.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 8,
          imagesrc: 'images8.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 9,
          imagesrc: 'images9.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 10,
          imagesrc: 'images10.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 11,
          imagesrc: 'images11.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 12,
          imagesrc: 'images12.jpg',
          caption: 'Engagement Party'
        },
        {
          id: 13,
          imagesrc: 'images13.jpg',
          caption: 'Engagement Party'
        }
      ]
    }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination]
    }
  }
})
</script>

<template>
  <swiper
    :spaceBetween="2"
    :slidesPerView="1"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2 }"
    :loop="true"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide v-for="image in images" :key="image.id" class="image-item">
      <img :src="image.imagesrc" alt="couple picture" class="image" />
      <div class="caption">
        <p>{{ image.caption }}</p>
      </div>
    </SwiperSlide>
  </swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
  max-height: 500px;
}

.image-item {
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
}

.image {
  display: block;
  aspect-ratio: 16/9;
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-color: var(--white-mute);
}

.caption {
  padding: 10px;
  transform: translateY(-60px);
  color: var(--color-text);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .swiper-slide {
    width: 100vw;
  }
}
</style>
