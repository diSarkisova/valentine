<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

function goYes(): void {
  router.push({name: 'YesPage'});
}

function goNo(): void {
  router.push({name: 'NoPage'});
}

import { ref } from 'vue';

const noButtonRef = ref<HTMLElement | null>(null);

function moveButton() {
  if (noButtonRef.value) {
    const maxX = 200; // максимум в пикселях по горизонтали
    const maxY = 200; // максимум по вертикали
    const randX = Math.random() * maxX - maxX/2; // случайное смещение
    const randY = Math.random() * maxY - maxY/2;
    noButtonRef.value.style.transform = `translate(${randX}px, ${randY}px)`;
  }
}

</script>

<template>
  <div class="main-page">
    <h1 class="title">💖 Для самого <br>лучшего 💖</h1>
    <div class="emoji">🥰</div>
    <p class="question">Будешь моей валентинкой?</p>
    <div class="buttons">
      <button class="yes-button" @click="goYes"> Да ❤️</button>
      <button
          class="no-button"
          @mouseenter="moveButton"
          ref="noButtonRef"
          @click="goNo"
      >
        Нет
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Центрируем содержимое страницы и делаем градиентный фон */
.main-page {
  width: 90%;
  max-width: 500px;
  min-height: 700px;
  padding: 30px;
  background-color: #fff; /* белый фон */
  border-radius: 30px; /* закругленные углы */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Заголовок и сердечки */
.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: rebeccapurple; /* фиолетовый цвет */
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ccc; /* серый фон */
  color: #000; /* черный текст */
  transition: transform 0.3s ease;
  position: relative;
  transform: translate(0, 0);
}

/* Большое сердце */
.emoji {
  font-size: 3rem;
  margin-bottom: 20px;
}

/* Текст вопроса */
.question {
  font-size: 1.3rem;
  margin-bottom: 30px;
  color: #000; /* черный цвет текста */
}

/* Обертка для кнопок */
.buttons {
  display: flex;
  gap: 15px;
}

/* Стиль для кнопки "Да" */
.yes-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(135deg, #a770ef, #cf8bf3);
  color: #fff;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
}

.yes-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Стиль для кнопки "Нет" */
.no-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ccc; /* серый фон */
  color: #000; /* черный текст */
  transition: transform 0.2s, box-shadow 0.2s;
}

.no-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Большое сердце */
.emoji {
  font-size: 8rem; /* очень большое эмодзи */
  margin-bottom: 20px;
}
</style>