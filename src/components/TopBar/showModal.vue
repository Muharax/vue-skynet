<template>
  <div>
    <button class="close" @click="openModal">Playlista</button>
    <div :class="{ 'modal': true, 'show': isOpen }">
      <div class="modal-content">
        <button class="ct close-btn-playlist" @click="closeModal">X</button>

        <div class="content">
          <ModalPlaylist @audioSelected="handleAudioSelected" :audioFiles="audioFiles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

import ModalPlaylist from './ModalPlaylist.vue'; // Import ModalPlaylist

interface AudioFile {
  name: string;
  url: string;
}

const emit = defineEmits(["audioSelected"]);

const handleAudioSelected = (file: AudioFile) => {
  emit('audioSelected', file);
  console.log("Odebrano showModal:", file);
};




const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

// Function to close the modal when clicking outside
const closeModalOutside = (event: MouseEvent) => {
  if (!(event.target as HTMLElement).closest('.modal-content')) {
    isOpen.value = false;
  }
};
</script>



<style scoped>
/* Stylizacja modalu */
.modal {
  position: fixed; /* Umieść modal na ekranie */
  z-index: 1; /* Nadaj najwyższy priorytet */
  left: 50%;
  top: 15%;
  overflow: auto; /* Dodaj pasek przewijania, jeśli zawartość jest za długa */
  
  display: none; /* Ukryj modal domyślnie */
}

.show {
  display: block; /* Pokaż modal, gdy isOpen === true */
}

/* Stylizacja zawartości modalu */
.modal-content {
  background: var(--primary); /* Gradient tła */
  margin: 6% auto; /* Ustaw margines na środku */
  padding: 20px;
  border: 1px solid #888;
  width: 400px; /* Szerokość */
  height: 400px; /* Wysokość */
  overflow-y: auto; /* Dodaj pasek przewijania Y */
  position: relative; /* Pozycja względem rodzica */
}

.content {
  padding: 10px;
}

/* Stylizacja przycisku zamknięcia */
.close {
  color: var(--primary);
  float: right;
  font-size: 16px;
  font-weight: bold;
}

.close-btn-playlist {
  position: absolute;
  background: none;
  top: 10px;
  right: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: rgb(221, 153, 17);
  /* background-color: orange; */
}

.close-btn-playlist:hover {

}

.close-btn-playlist:hover {
  color: rgb(255, 0, 0);
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
