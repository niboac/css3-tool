<script setup>
import { ref } from 'vue'
import Button1 from './Button1.vue'
import Button2 from './Button2.vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <Button1></Button1>
  <Button2></Button2>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
