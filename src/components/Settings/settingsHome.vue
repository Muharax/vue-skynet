<template>
  <div class="scale09">
    <div class="fade-in">
      <h3>Witaj w Ustawieniach systemu SKYNET!</h3>
      System automatycznie wykrywa z jakiego motywu korzystasz na swoim urządzeniu
      <div>
        <img src="/src/assets/img/skynet-division.png" alt="SKYNET DIVISION">
      </div>
    </div>
  </div>
</template>

<script setup>
import { selectedTheme, updateTheme } from './theme/themeLogic.js';
</script>

<style scoped>
.fade-in {
  animation: fadeInAnimation 3s ease forwards;
  opacity: 0;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.theme-switch {
  cursor: pointer;
  color: var(--font-color-active);/* Kolor tekstu dla DARK */
  font-weight: bold;
  text-decoration:underline;
}
.theme-switch:hover {
  text-decoration:none;
}

@media (max-width: 600px) {
  .scale09 {
    transform: scale(0.9);
  }

}
</style>
