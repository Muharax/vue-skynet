<template>
  <div>
    <button class="close" @click="openModal">OPEN</button>
    <div v-if="isOpen" class="modal" @click="closeModal">
      <div class="modal-content">
        <ModalPlaylist /> <!-- Importuj i użyj komponentu ModalPlaylist -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalPlaylist from './ModalPlaylist.vue'; // Importuj komponent ModalPlaylist

console.log("XX1");

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Stylizacja modalu */
.modal {
  display: none; /* Ukryj modal domyślnie */
  position: fixed; /* Umieść modal na ekranie */
  z-index: 1; /* Nadaj najwyższy priorytet */
  left: 0;
  top: 0;
  width: 100%; /* Szerokość ekranu */
  height: 100%; /* Wysokość ekranu */
  overflow: auto; /* Dodaj pasek przewijania, jeśli zawartość jest za długa */
  background-color: rgb(0, 0, 0); /* Kolor tła */
  background-color: rgba(0, 0, 0, 0.4); /* Czarny z przezroczystością */
}

/* Stylizacja zawartości modalu */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* Ustaw margines na środku */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Szerokość zawartości */
}

/* Stylizacja przycisku zamknięcia */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
