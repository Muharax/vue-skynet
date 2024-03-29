<template>
  <div class="home">
    <h1>HOME</h1>
    <hr>
    Hello Home, how are you?
    <hr>
    <!-- <ul>
    <li><h2>Ogłoszenia promowane</h2></li>
  </ul> -->
    <!-- <div v-if="ads.length > 0" class="ads-cont">
      <div v-for="ad in ads" :key="ad.id" class="ads-container">
        <div :title="ad.title" class="ads-title">{{ ad.title }}</div>
        <hr style="width: 50%;" />
        <div class="ads-descriptions">{{ ad.description }}</div>
        <div class="ads-image-container">
          <img :src="`/ads/image/${ad.image}`" alt="Ad Image" class="ads-image" />
        </div>
      </div>
    </div>
    <div v-else>
      Brak ogłoszeń
    </div> -->
  </div>
</template>
<script setup>
// import { ref, onMounted } from 'vue';
// import axios from 'axios';
// import { SERVER_URL } from '../../config.js';
// const ads = ref([]);
// // Pobierz dane z serwera przy montowaniu komponentu
// onMounted(async () => {
//   try {
//     const response = await axios.get(`${SERVER_URL}/api/ads`); // Endpoint do pobierania danych z bazy danych
//     ads.value = response.data; // Ustaw dane ogłoszeń na te pobrane z serwera
//   } catch (error) {
//     console.error('Błąd podczas pobierania danych:', error);
//   }
// });
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