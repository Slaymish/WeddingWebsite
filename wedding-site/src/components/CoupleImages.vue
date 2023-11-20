<script lang="ts">
import { defineComponent } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default defineComponent({
  name: 'CoupleImages',
  components: {
    Swiper,
    SwiperSlide,
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
        }
      ],
    };
  },
  setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
});
</script>

<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 5500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >    <SwiperSlide v-for="image in images" :key="image.id" class="image-item">
      <img :src="image.imagesrc" alt="couple picture" class="image">
      <div class="caption"><p>{{ image.caption }}</p></div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}

.image-item {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Add more styles for border, padding, etc., if needed */
}

.image {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 10px; /* Optional: if you want rounded corners */
  height: 300px;
  width: 680px;
  background-color: aqua;
}

.caption p {
  padding: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .swiper {
    width: 100%;
    height: auto;
  }

  .swiper-slide {
    width: auto;
  }
}
</style>
