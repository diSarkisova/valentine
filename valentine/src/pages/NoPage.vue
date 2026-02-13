<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isClickedSerious = ref(false);

function handleClick() {
  if (!isClickedSerious.value) {
    isClickedSerious.value = true;
  } else {
    router.push({ name: "MainPage" });
  }
}
</script>

<template>
  <div class="nopage" @click="handleClick" role="button" tabindex="0">
    <h1 v-if="isClickedSerious" class="nopage__title-big ">
      <span class="animated-emoji">😂</span>
      <span class="animated-emoji" style="animation-delay: 0.2s">😂</span>
      <span class="animated-emoji" style="animation-delay: 0.4s">😂</span><br />

      ХАХХАХАХ!!!<br />

      Как легко повелся!<br />
      Думал я дам тебе такую возможность?!
    </h1>
    <div v-else class="nopage__initial">
      <div class="nopage__icon nopage__icon--top">😿</div>
      <h1 class="nopage__title">Ты серьезно???</h1>
      <div class="nopage__icon nopage__icon--bottom">💔</div>
    </div>
  </div>
</template>

<style scoped>
.nopage {
  text-align: center;
  cursor: pointer;
  user-select: none;
  padding: 40px 20px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 25px;
  transition: background-color 0.4s ease;
}



.nopage__title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #3a3a3a;
  font-size: 3rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  max-width: 480px;
  animation: fadeInUp 0.7s ease forwards;
}

.nopage__title-big {
  font-size: 3rem;
  text-shadow: 0 0 8px #a485f7, 0 2px 4px rgba(122, 58, 244, 0.6);
  letter-spacing: 0.03em;
  margin-top: 20px;
  animation-delay: 0.3s;
  line-height: 1.3; /* регулирует расстояние между строками */
}

.nopage__initial {
  animation: fadeIn 0.8s ease forwards;
}

.nopage__icon {
  font-size: 7.5rem;
  user-select: none;
  filter: drop-shadow(0 4px 5px rgba(0, 0, 0, 0.15));
  transition: transform 0.3s ease;
}

.nopage__icon--top {
  margin-bottom: 15px;
  transform-origin: center bottom;
  animation: wobble 1.2s ease-in-out infinite;
}

.nopage__icon--bottom {
  margin-top: 25px;
  font-size: 9.5rem;
  animation: pulse 2s ease-in-out infinite;
}

.nopage__title,
.nopage__icon {
  user-select: none;
}

/* Анимации */
@keyframes wobble {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(15deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.8;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-emoji {
  display: inline-block;
  font-size: 4rem;
  animation: bounceIn 0.6s ease forwards;
  opacity: 0;
  margin-right: 0.3em; /* <-- вот здесь задаем отступ справа */
}

/* Появление с подпрыгиванием */
@keyframes bounceIn {
  0% {
    transform: translateY(-50px) scale(0.3) rotate(-30deg);
    opacity: 0;
  }
  50% {
    transform: translateY(0px) scale(1.2) rotate(10deg);
    opacity: 1;
  }
  70% {
    transform: translateY(-10px) scale(0.9) rotate(-5deg);
  }
  100% {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 1;
  }
}
</style>
