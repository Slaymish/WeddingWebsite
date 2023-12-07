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
          imagesrc: 'src/assets/images/coupleslider/car.webp',
          caption: 'Our First Date'
        },
        {
          id: 2,
          imagesrc: 'src/assets/images/coupleslider/ballons.webp',
          caption: 'Caption 2'
        },
        {
          id: 3,
          imagesrc: 'src/assets/images/coupleslider/city.webp',
          caption: 'Caption 3'
        },
        {
          id: 4,
          imagesrc: 'src/assets/images/coupleslider/door.webp',
          caption: 'Caption 4'
        },
        {
          id: 5,
          imagesrc: 'src/assets/images/coupleslider/dressup.webp',
          caption: 'Caption 5'
        },
        {
          id: 6,
          imagesrc: 'src/assets/images/coupleslider/graduation.webp',
          caption: 'Caption 6'
        },
        {
          id: 7,
          imagesrc: 'src/assets/images/coupleslider/hiking.webp',
          caption: 'Caption 7'
        },
        {
          id: 8,
          imagesrc: 'src/assets/images/coupleslider/wings.webp',
          caption: 'Caption 8'
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
    :slidesPerView="3"
    :centeredSlides="false"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false
    }"
    :pagination="{ clickable: true, dynamicBullets: true, dynamicMainBullets: 2 }"
    :loop="true"
    :speed="500"
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
  margin: 0 auto;
  min-height: 600px;
  background-color: var(--white-mute);
}

.image-item {
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image {
  max-height: 500px;
  max-width: 100%;
  margin: 0 auto;
}

.caption {
  padding: 10px;
  color: var(--color-text);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .swiper-slide {
    width: 100vw;
  }
}
</style>
