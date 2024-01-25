<template>
    <!-- Swiper & Photoswipe-->
<div class="swiper mySwiper" id="my-gallery">
  <ul class="swiper-wrapper" itemscope itemtype="http://schema.org/ImageGallery">
    <!-- Slides -->
    <li id="slide_1" class="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
      <a
         itemprop="contentUrl"
         href="https://picsum.photos/id/911/1600/900"
         data-pswp-width="1600"
         data-pswp-height="900"
         target="_blank"
         >
        <img
             src="https://picsum.photos/id/911/1600/900"
             alt=""
             itemprop="thumbnail" alt="Image 1 description"
             />
      </a>
    </li>
    <li id="slide_2"  class="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
      <a
         itemprop="contentUrl"
         href="https://picsum.photos/id/777/1600/900"
         data-pswp-width="1600"
         data-pswp-height="900"
         target="_blank"
         >
        <img
             src="https://picsum.photos/id/777/1600/900"
             alt=""
             itemprop="thumbnail" alt="Image 2 description"
             />
      </a>
    </li>
    <li id="slide_3"  class="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
      <a
         itemprop="contentUrl"
         href="https://picsum.photos/id/234/1600/900"
         data-pswp-width="1600"
         data-pswp-height="900"
         target="_blank"
         >
        <img
             src="https://picsum.photos/id/234/1600/900"
             alt=""
             itemprop="thumbnail" alt="Image 3 description"
             />
      </a>
    </li>
    <li id="slide_4"  class="swiper-slide" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
      <a
         itemprop="contentUrl"
         href="https://picsum.photos/id/203/1600/900"
         data-pswp-width="1600"
         data-pswp-height="900"
         target="_blank"
         >
        <img
             src="https://picsum.photos/id/203/1600/900"
             alt=""
             itemprop="thumbnail" alt="Image 4 description"
             />
      </a>
    </li>
  </ul>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
</template>

<script lang="ts">
/* ###############################  
        Part 1 of 2 Swiper v8
  ##################################  */
  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-50%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  // If we need pagination
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, /* false by deafult */
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /* remove/comment to stop autoplay*/
  autoplay: { 
    delay: 7000,
    disableOnInteraction: false
  },
  // keyboard control
  keyboard: {
    enabled: true,
  }
});

/* ###############################  
       Part 2 of 2 PhotoSwipe v5
  ##################################  */
/* https://photoswipe.com/getting-started/ */

import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5.4.2/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'https://unpkg.com/photoswipe@5.4.2/dist/photoswipe.esm.js';

const photo_swipe_options = {
  gallery: '#my-gallery',
  pswpModule: PhotoSwipe,
  // set background opacity
  bgOpacity: 1,
  showHideOpacity: true,
  children: 'a',
  loop: true,
  showHideAnimationType: 'zoom', /* options: fade, zoom, none */

  /* Click on image moves to the next slide */
  imageClickAction: 'next',
  tapAction: 'next',

  /* ## Hiding a specific UI element ## */
  zoom: false,
  close: true,
  counter: true,
  arrowKeys: true,
  /* ## Options ## */
  wheelToZoom: true, /* deafult: undefined */
};

const lightbox = new PhotoSwipeLightbox(photo_swipe_options);

lightbox.init();

lightbox.on('change', () => {
  const { pswp } = lightbox;
  swiper.slideTo(pswp.currIndex, 0, false);
  console.log('Slide index', pswp.currIndex);
  //console.log('Slide object', pswp.currSlide);
  //console.log('Slide object data', pswp.currSlide.data);
});

/* ### PhotoSwipe events ### */

lightbox.on('afterInit', () => {
  const { pswp } = lightbox;
  if(swiper.params.autoplay.enabled){
    swiper.autoplay.stop();
  };
});

lightbox.on('closingAnimationStart', () => {
  //console.log('closingAnimationStart');
  const { pswp } = lightbox;
  swiper.slideTo(pswp.currIndex, 0, false);
  /* if autoplay enabled == true -> autoplay.start() when close lightbox */
  if(swiper.params.autoplay.enabled){
    swiper.autoplay.start();
  }
});
</script>

<style scoped>
/* zero custom styles for photoswipe */

/*==================================
SWIPER - minimal styling
===================================*/
/* semantic HTML - remove bullet and space from the list */
ul.swiper-wrapper {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
}

/* Swiper container */
.swiper {
  max-width: 100%;
  height: auto;
}
/* 
/* swiper responive image */
.swiper img {
  width: 100%;
  height: auto;
}


/* Swiper custom pagination */
.swiper-pagination-bullet {
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  opacity: 1;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease, color 0.5s ease;
}

/* Swiper custom pagination */
.swiper-pagination-bullet:hover {
  transition: background-color 0.5s ease;
  background: rgba(0, 0, 0, 1);
  color: white;
}

/* Swiper custom pagination active state */
.swiper-pagination-bullet-active {
  color: #fff;
  background: black;
}

/* override zoom cursor */
.pswp__img {
  cursor: pointer !important;
}
</style>