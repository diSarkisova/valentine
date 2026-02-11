<script setup lang="ts"></script>

<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: center; /* центр по горизонтали */
  align-items: center;     /* центр по вертикали */
  width: 100vw;            /* ширина всей ширины экрана */
  height: 100vh;           /* высота всей высоты экрана */
  background: linear-gradient(135deg, #667eea, #764ba2);
}
</style>