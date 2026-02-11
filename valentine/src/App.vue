<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style>
/* Общие базовые стили для всей страницы */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f0f2f5; /* светлый нейтральный фон */
  color: #333; /* темный текст для читаемости */
}

/* Центрируем содержимое внутри #app */
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* чтобы занимало всю высоту экрана */
  box-sizing: border-box;
}


</style>