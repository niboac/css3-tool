<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <button>Chroma</button>
  </div>

</template>

<style scoped>
button {
  border: none;
  padding: 1em;
  outline: none;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  font-style: 1.2em;
  letter-spacing: 0.2em;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: none;
}
button:before,
button:after {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10em;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 105%;
  height: 105%;
  content: '';
  z-index: -2;
  background-size: 400% 400%;
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
}
button:before {
  -webkit-filter: blur(7px);
  filter: blur(1px);
  transition: all 0.25s ease;
  -webkit-animation: pulse 10s infinite ease;
  animation: pulse 10s infinite ease;
}
</style>
