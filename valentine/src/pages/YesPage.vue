<script setup lang="ts">
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';

const emojis = ["💖","💕","💘","💝","💗","✨","😍","🥰"]
</script>

<template>
  <div class="happy">
    <!-- Летающие смайлы -->
    <span
        v-for="i in 25"
        :key="i"
        class="emoji"
        :style="{
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        fontSize: 20 + Math.random() * 30 + 'px'
      }"
    >
      {{ emojis[Math.floor(Math.random() * emojis.length)] }}
    </span>

    <h1 class="happy__title">
      Ураа! Я так счастлива! 💖
    </h1>

    <div class="happy__photos">
      <div class="photo photo--left">
        <img :src="photo1" alt="photo1" />
      </div>

      <div class="photo photo--right">
        <img :src="photo2" alt="photo2" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.happy {
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(135deg, #ff5fa2, #ff7ac6, #ff9adf);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
}

/* Заголовок */
.happy__title {
  font-size: 3.5rem;
  color: white;
  font-weight: 800;
  margin-bottom: 60px;
  text-shadow: 0 5px 15px rgba(0,0,0,0.2);
  position: relative;
  z-index: 2;
}

/* Фото */
.happy__photos {
  display: flex;
  gap: 40px;
  position: relative;
  z-index: 2;
}

.photo {
  background: white;
  padding: 12px;
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

.photo--left {
  transform: rotate(-6deg);
}

.photo--right {
  transform: rotate(6deg);
}

.photo img {
  width: 250px;
  height: 320px;
  object-fit: cover;
  border-radius: 18px;
}

/* Летающие смайлы */
.emoji {
  position: absolute;
  top: -50px;
  animation: floatDown 6s linear infinite;
  pointer-events: none;
  z-index: 1;
}

@keyframes floatDown {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(110vh);
    opacity: 0;
  }
}
</style>
