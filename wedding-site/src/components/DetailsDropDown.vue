<template>
  <div class="details-dropdown">
    <div v-for="(detail, index) in details" :key="detail.id" class="faq-item">
      <div @click="toggleDropdown(index)">
        {{ detail.name }}
        <span class="toggle-icon">{{ isOpen(index) ? '-' : '+' }}</span>
      </div>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-if="isOpen(index)" class="faq-answer" v-html="detail.answer"></div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DetailsDropDown',
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      openIndex: null
    }
  },
  methods: {
    toggleDropdown(index) {
      this.openIndex = this.openIndex === index ? null : index
    },
    isOpen(index) {
      return this.openIndex === index
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      el.style.height = '0'
    }
  }
})
</script>

<style scoped>
@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: auto;
  }
}

.details-dropdown {
  width: 100%;
  max-width: 600px;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
}

.faq-item {
  padding: 10px;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
}

.faq-enter-active,
.faq-leave-active {
  animation: slideDown 0.3s ease;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-answer {
  padding: 0 10px;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}

.toggle-icon {
  float: right;
}
</style>
