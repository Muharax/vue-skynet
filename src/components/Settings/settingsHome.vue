<template>
  <div>
    <div class="fade-in">
      <h1>Witaj w Ustawieniach systemu SKYNET!</h1>
      System automatycznie wykrywa z jakiego motywu korzystasz na swoim urządzeniu, <br />polecamy <span class="theme-switch" @click="switchTheme">DARK</span> w trosce o oczy!
      <div>
        <img src="/src/assets/img/skynet-division.png" alt="SKYNET DIVISION">
      </div>
    </div>
  </div>
</template>

<script setup>
import { selectedTheme, updateTheme } from './theme/themeLogic.js';

const switchTheme = () => {
  // Zmiana motywu na przeciwny
  selectedTheme.value = selectedTheme.value === 'dark' ? 'light' : 'dark';
  updateTheme(); // Zastosowanie zmiany motywu
};
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
  color: var(--primary);/* Kolor tekstu dla DARK */
  font-weight: bold;
  text-decoration:underline;
}
.theme-switch:hover {
  text-decoration:none;
}
</style>
