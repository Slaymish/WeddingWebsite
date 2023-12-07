<script lang="ts">
import { defineComponent } from 'vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Autoplay } from 'swiper/modules'

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
      modules: [Autoplay]
    }
  },
  methods: {
    computeSrc(src: string) {
      return new URL(`../assets/images/${src}`, import.meta.url).href
    }
  }
})
</script>

<template>
  <swiper
    :spaceBetween="0"
    :slidesPerView="2"
    :centeredSlides="false"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false
    }"
    :navigation="true"
    :loop="true"
    :speed="1000"
    :modules="modules"
    class="mySwiper"
  >
    <SwiperSlide v-for="image in images" :key="image.id" class="image-item">
      <img :src="computeSrc(image.imagesrc)" alt="couple picture" class="image" />
      <!--
      <div class="caption">
        <p>{{ image.caption }}</p>
      </div>
      -->
    </SwiperSlide>
  </swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.image-item {
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.image {
  width: auto;
  height: 550px;
  object-fit: cover;
  border-radius: 2px;
  overflow: hidden;
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

  .image {
    height: 200px;
  }

  .caption {
    font-size: 1rem;
  }

  
}
</style>
