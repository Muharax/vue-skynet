<template>
  <div class="home loaded">
    <div style="margin-bottom: 40px;"></div>
      <clock />

  </div>
</template>

<script setup>
import clock from './clock.vue';
</script>
<style scoped>
.home {}

.ads-descriptions {
  min-height: 78px;
  max-height: 78px;
  /* padding-top: 3px; */
  line-height: 14px;
  font-family: Open Sans, sans-serif;
}

.ads-descriptions:hover {
  z-index: 999;
  position: relative;
  height: 200px;
}

.ads-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ads-container>hr {
  text-align: center;
}

.ads-container {
  /* padding: 5px; */
  transition: 200ms;
  cursor: pointer;
  max-width: 200px;
  /* Ogranicza szerokość kontenera */
  overflow: hidden;
  /* Ukrywa zawartość, która przekracza granice */
  display: flex;
  /* Ustawia kontener w trybie flex */
  flex-direction: column;
  /* Ustawia orientację flex na pionową */
}

.ads-container:hover {
  transform: scale(1.05);
}

.ads-image-container {
  max-width: 200px;
  flex-shrink: 0;
  /* Zapobiega zmniejszaniu się kontenera obrazu */
}

.ads-image {
  max-width: 100%;
}

.ads-cont {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>