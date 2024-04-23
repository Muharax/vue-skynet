<template>

</template>

<script setup>
import { selectedTheme, updateTheme } from './theme/themeLogic.js';
</script>

<style scoped>
.fade-in {
  animation: fadeInAnimation 3s ease forwards;
  opacity: 0;
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

</style>
