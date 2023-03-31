<template>
  <div class="carousel">
    <div
      class="carousel-container"
      :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
    >
      <div class="carousel-slide" v-for="(item, index) in items" :key="index">
        <slot class="carousel-item" :item="item" :index="index">
          <img :src="item" alt="" />
        </slot>
      </div>
    </div>
    <div class="carousel-controls">
      <button @click="prev" :disabled="currentSlide === 0">Prev</button>
      <button @click="next" :disabled="currentSlide === items.length - 1">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  slideWidth: {
    type: Number,
    default: 300,
  },
})

const currentSlide = ref(0)

const next = () => {
  currentSlide.value = Math.min(currentSlide.value + 1, props.items.length - 1)
}

const prev = () => {
  currentSlide.value = Math.max(currentSlide.value - 1, 0)
}

const slideWidth = ref(props.slideWidth)
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  display: flex;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
}

.carousel-controls {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

button {
  margin: 0 10px;
}
</style>
