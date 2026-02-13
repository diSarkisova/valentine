<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

function goYes(): void {
  router.push({ name: "YesPage" });
}

function goNo(): void {
  router.push({ name: "NoPage" });
}

const noButtonRef = ref<HTMLElement | null>(null);

function moveButton() {
  if (noButtonRef.value) {
    const maxX = 220;
    const maxY = 150;
    const randX = Math.random() * maxX - maxX / 2;
    const randY = Math.random() * maxY - maxY / 2;
    noButtonRef.value.style.transform = `translate(${randX}px, ${randY}px)`;
  }
}
</script>

<template>
  <div class="main-page">
    <h1 class="title">
      💖 Для самого<br />
      лучшего 💖
    </h1>
    <div class="emoji">🥰</div>
    <p class="question">Будешь моей валентинкой?</p>
    <div class="buttons">
      <button class="yes-button" @click="goYes">Да ❤️</button>
      <button
          class="no-button"
          @mouseenter="moveButton"
          ref="noButtonRef"
          @click="goNo"
          aria-label="Нет"
      >
        Нет
      </button>
    </div>
  </div>
</template>

<style scoped>
.main-page {
  width: 90%;
  max-width: 480px;
  min-height: 700px;
  padding: 40px 35px;
  background: linear-gradient(135deg, #ffe6f7, #f6d1f9);
  border-radius: 30px;
  box-shadow:
      0 10px 30px rgba(230, 75, 190, 0.2),
      0 0 60px rgba(230, 75, 190, 0.1) inset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  user-select: none;
}

.title {
  font-size: 3.2rem;
  color: #9c27b0;
  font-weight: 900;
  letter-spacing: 0.03em;
  text-shadow: 1px 1px 5px rgba(156, 39, 176, 0.4);
  margin-bottom: 25px;
  line-height: 1.1;
}

.emoji {
  font-size: 7rem;
  margin-bottom: 25px;
  filter: drop-shadow(0 2px 4px rgba(156, 39, 176, 0.4));
  user-select: none;
}

.question {
  font-size: 1.5rem;
  margin-bottom: 40px;
  font-weight: 600;
  color: #5a0e68;
  text-shadow: 0 0 5px rgba(156, 39, 176, 0.3);
}

.buttons {
  display: flex;
  gap: 20px;
}

.yes-button,
.no-button {
  padding: 14px 32px;
  font-size: 1.3rem;
  border-radius: 35px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(156, 39, 176, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
  min-width: 120px;
  position: relative;
}

.yes-button {
  background: linear-gradient(135deg, #a770ef, #cf8bf3);
  color: white;
  text-shadow: 0 0 10px #d291f4;
}

.yes-button:hover,
.yes-button:focus-visible {
  transform: scale(1.1);
  box-shadow:
      0 8px 30px #d291f4,
      0 0 25px #a770ef,
      0 0 40px #cf8bf3;
  outline: none;
}

.no-button {
  background-color: #e0d5e8;
  color: #6a3a8d;
  font-weight: 700;
  border: 2px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.no-button:hover,
.no-button:focus-visible {
  border-color: #a770ef;
  box-shadow: 0 0 20px #a770ef;
  transform: scale(1.05);
  outline: none;
}

/* Чтобы кнопка "Нет" не уходила слишком далеко */
.no-button[style] {
  transition: transform 0.25s ease;
}

/* Адаптив */
@media (max-width: 480px) {
  .main-page {
    min-height: 600px;
    padding: 30px 20px;
    width: 100%;
    max-width: 100%;
  }

  .title {
    font-size: 2.6rem;
  }

  .emoji {
    font-size: 5.5rem;
    margin-bottom: 20px;
  }

  .question {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .buttons {
    gap: 15px;
    flex-wrap: wrap;
  }

  .yes-button,
  .no-button {
    min-width: 100px;
    font-size: 1.1rem;
    padding: 12px 25px;
  }
}
</style>
