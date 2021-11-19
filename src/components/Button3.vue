<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="black-container">
    <button
      class="button green"
      data-filter-color="rgba(71, 255, 111, 0.4)"
      style="perspective: 195.335px;"
    >
      <span
        style="transform: rotateY(0deg) rotateX(0deg) scale(1); perspective: 293.002px; filter: drop-shadow(rgba(71, 255, 111, 0.4) 0px 10px 15px);"
      >
        🔧
        Work
      </span>
    </button>
  </div>

  <div class="black-container">
    <button
      class="button purple"
      data-custom-perspective="900px"
      data-filter-color="#e347ff8f"
      style="perspective: 900px;"
    >
      <span
        style="transform: rotateY(0deg) rotateX(0deg) scale(1); perspective: 547.839px; filter: drop-shadow(rgba(227, 71, 255, 0.56) 0px 10px 15px);"
      >⚙️ Another Example</span>
    </button>
  </div>
</template>

<style scoped>
button {
  box-shadow: none;
  background: transparent;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
  transform-style: preserve-3d;
  padding: 0;
  height: auto;
  float: none;
  appearance: none;
  border: none;
  letter-spacing: 1px;
}

button span {
  background: linear-gradient(180deg, #ff7147, #e0417f);
  font-size: 2rem;
  color: white;
  padding: 1rem 2rem;
  line-height: 3rem;
  will-change: transform, filter;
  float: none;
  margin: 0;
  transition: all 0.15s ease-out;
  height: auto;
  border-radius: 100px;
  overflow: hidden;
  display: block;
  margin: 0px auto;
  display: block;
  transform: rotateX(0deg) rotateY(0deg) scale(1);
  filter: drop-shadow(0 15px 15px rgba(0, 0, 0, 0.3));
  font-weight: 500;
  perspective-origin: 0 0;
  letter-spacing: 0;
}

button.animated span:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 600%;
  height: 200%;
  background: linear-gradient(90deg, #00a1ff, #af4ae6, #00a1ff, #2cefff);
  animation: colorCycle 8s infinite alternate;
  z-index: -1;
}
button.green span {
  background: linear-gradient(180deg, #47ff6f, #417ce0);
  filter: drop-shadow(0 15px 15px rgba(71, 255, 111, 0.4));
}

button.animated span {
  filter: drop-shadow(0 15px 15px #00a1ff57);
}

button.purple span {
  background: linear-gradient(180deg, #e347ff, #7b41e0);
}

button.animated.example span:after {
  width: 200%;
  height: 100%;
  animation: colorCycleExample 4s infinite alternate;
}

@keyframes colorCycle {
  0% {
    top: 0;
    left: 0;
    transform: scale(1);
  }
  50% {
    top: -50%;
    transform: scale(1.4);
  }
  100% {
    top: 0;
    left: -500%;
    transform: scale(1);
  }
}

@keyframes colorCycleExample {
  0% {
    top: 0;
    left: 0;
    transform: scale(1);
  }
  100% {
    top: 0;
    left: -100%;
    transform: scale(1);
  }
}

@media screen and (max-width: 1000px) {
  #dark-light-container > div {
    width: 100%;
  }
}
</style>
