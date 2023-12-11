<script lang="ts">
import { defineComponent } from 'vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Autoplay,Navigation } from 'swiper/modules'

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
          imagesrc: 'coupleslider/car.webp',
          caption: 'Caption 1'
        },
        {
          id: 2,
          imagesrc: 'coupleslider/ballons.webp',
          caption: 'Caption 2'
        },
        {
          id: 3,
          imagesrc: 'coupleslider/city.webp',
          caption: 'Caption 3'
        },
        {
          id: 4,
          imagesrc: 'coupleslider/door.webp',
          caption: 'Caption 4'
        },
        {
          id: 5,
          imagesrc: 'coupleslider/dressup.webp',
          caption: 'Caption 5'
        },
        {
          id: 6,
          imagesrc: 'coupleslider/graduation.webp',
          caption: 'Caption 6'
        },
        {
          id: 7,
          imagesrc: 'coupleslider/hiking.webp',
          caption: 'Caption 7'
        },
        {
          id: 8,
          imagesrc: 'coupleslider/wings.webp',
          caption: 'Caption 8'
        }
      ]
    }
  },
  setup() {
    return {
      modules: [Autoplay,Navigation]
    }
  },
  methods: {
    computeSrc(src: string) {
      return new URL(`../assets/images/${src}`, import.meta.url).href
    }
  }
});
</script>

<template>
  <swiper
  :centeredSlides="false"
  :autoplay="{
    delay: 3000,
    disableOnInteraction: false
  }"
  :navigation="true"
  :loop="true"
  :speed="500"
  :modules="modules"
  class="mySwiper"
>
  <SwiperSlide v-for="image in images" :key="image.id" class="image-item">
    <img :src="computeSrc(image.imagesrc)" alt="couple picture" class="SwiperImage" />
  </SwiperSlide>
</swiper>
</template>

<style>

.mySwiper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.swiper-button-next,
.swiper-button-prev {
  color: var(--color-text);
  background-color: var(--white-soft);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.1s ease-in-out;
}


.swiper-button-next:hover,
.swiper-button-prev:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 24px;
  font-weight: bold;
}

/* Image wrapper */
.image-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Single image */
.SwiperImage {
  width: auto;
  height: 550px;
  object-fit: contain;
  overflow: hidden;
}


/* Responsive adjustments */
@media (max-width: 768px) {
  .swiper-slide {
    width: 100vw;
  }

  .SwiperImage {
    height: 400px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
