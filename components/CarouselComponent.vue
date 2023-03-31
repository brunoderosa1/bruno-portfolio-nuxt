<template>
  <div class="flex flex-col items-center">
    <div class="w-full overflow-hidden relative" :style="{ height: height + 'px' }">
      <div
        class="flex absolute transition-all duration-500"
        :style="{ transform: 'translateX(' + -activeIndex * 100 + '%)' }"
      >
        <slot></slot>
      </div>
    </div>
    <div class="flex mt-4">
      <button
        class="mx-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
        @click="prev"
      >
        Prev
      </button>
      <button
        class="mx-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    height: {
      type: Number,
      default: 300,
    },
  },
  setup(props) {
    const activeIndex = ref(0);
    const slides = ref(null);

    onMounted(() => {
      slides.value = document.querySelectorAll('.carousel > div > div > *');
    });

    const next = () => {
      if (activeIndex.value < slides.value.length - 1) {
        activeIndex.value++;
      } else {
        activeIndex.value = 0;
      }
    };

    const prev = () => {
      if (activeIndex.value > 0) {
        activeIndex.value--;
      } else {
        activeIndex.value = slides.value.length - 1;
      }
    };

    return { activeIndex, next, prev };
  },
};
</script>