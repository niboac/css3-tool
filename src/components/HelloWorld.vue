<script setup>
import { ref } from 'vue'
import Button1 from './Button1.vue'
import Button2 from './Button2.vue'
import Button3 from './Button3.vue'
import Button4 from './Button4.vue'
import Button5 from './Button5.vue'
import Button6 from './Button6.vue'
import Button7 from './Button7.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="container">
    <div>
      <span style="background-color: red;padding:1px;line-height:1; font-size: 19px;">SDKF是的房间里卡按时</span>
    </div>
    <h1>{{ msg }}</h1>
    <Button1></Button1>
    <Button2></Button2>
    <button3></button3>
    <button4></button4>
    <button5></button5>
    <button6></button6>
    <button7></button7>
  </div>
</template>

<style scoped>
.container {
  background: #4e5d74;
  background: linear-gradient(#54647d, #313946);
  height: 100%;
}
</style>
