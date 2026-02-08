<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const isClickedSerious = ref(false)


function handleClick() {
  if(!isClickedSerious.value){
    isClickedSerious.value = true
    }
else {
  router.push({name: 'MainPage'})
  }
}

</script>

<template>
  <div @click="handleClick">
    <h1 v-if="isClickedSerious"> ХАХХАХАХ!!! Как легко повелся! Думал я дам тебе такую возможность?! </h1>
    <h1 v-else >Ты серьезно???</h1>

  </div>
</template>

<style scoped>

</style>