<template>

  <div class="theme">
    <div>Theme</div>
    <div>
      <select v-model="selectedTheme" @change="updateTheme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  </div>
</template>

<script setup>
  import { selectedTheme, updateTheme } from './themeLogic.js';
</script>

<style scoped>
.theme {
  background-color: var(--primary);
  padding: 0.5rem;
  margin-right: 15px;
  border-radius: 5px;
  color: var(--font-color)
}
</style>