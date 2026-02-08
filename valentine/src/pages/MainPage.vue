<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

function goYes(): void {
  router.push({ name: 'YesPage' })
}

function goNo(): void {
  router.push({ name: 'NoPage' })
}

</script>

<template>
<div class="main-page">
  <h1>Для самого лучшего</h1>

  <p>Будешь моей Валентинкой?</p>

  <div class="buttons">
    <button @click="goYes">Да</button>
    <button @click="goNo">Нет</button>
  </div>
</div>
</template>

<style scoped>

</style>