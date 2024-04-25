<template>
  <div>
    <button class="mega-button" @click="openModal">Playlista</button>
    <div :class="{ 'modal': true, 'show': isOpen }">
      <div class="modal-content">
        <button class="ct close-btn-playlist" @click="closeModal">X</button>

        <div class="content">
          <div class="playlist">
            <div v-for="(file, index) in audioFiles" :key="index" class="audio-item">
              <button style="cursor: pointer;" @click="playAudio(file)">Play</button>
              <p>{{ file.name }}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, onMounted } from 'vue';

// import ModalPlaylist from './ModalPlaylist.vue'; // Import ModalPlaylist

interface AudioFile {
  name: string;
  url: string;
}

// const audioFiles: AudioFile[] = [
//   { name: 'audio1.mp3', url: '/vue-skynet/music/1.mp3' },
//   { name: 'audio2.mp3', url: '/vue-skynet/music/2.mp3' },
//   { name: 'audio3.mp3', url: '/vue-skynet/music/3.mp3' },
//   { name: 'audio4.mp3', url: '/vue-skynet/music/4.mp3' },
//   { name: 'audio5.mp3', url: '/vue-skynet/music/music1.mp3' },
//   // Dodaj kolejne pliki audio w tej tablicy
// ];

const audioFiles = ref<AudioFile[]>([
  { name: 'Nie płakać psia mać V1', url: '/vue-skynet/music/music1.mp3' },
  // { name: 'Nie płakać psia mać V2', url: '/vue-skynet/music/2.mp3' },
  { name: 'Nie płakać psia mać V3', url: '/vue-skynet/music/1.mp3' },
  { name: 'Nie płakać psia mać V4', url: '/vue-skynet/music/4.mp3' },
  { name: 'Nie płakać psia mać V5', url: '/vue-skynet/music/3.mp3' },
  { name: 'W labiryncie kodu V1 (new)', url: '/vue-skynet/music/11wLabiryncie.mp3' },
  { name: 'W labiryncie kodu V2 (new)', url: '/vue-skynet/music/22wLabiryncie.mp3' },
  { name: 'Jeszcze Polska nie zgineła', url: '/vue-skynet/music/33jeszczePolska.mp3' },
  { name: 'Nanashi Zer YouTube Nanashi Zero', url: '/vue-skynet/music/44Nanashi_ZerYouTubeNanashi_Zero.mp3' },
]);

const emit = defineEmits(["audioSelected"]);
const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

// Function to close the modal when clicking outside
// const closeModalOutside = (event: MouseEvent) => {
//   if (!(event.target as HTMLElement).closest('.modal-content')) {
//     isOpen.value = false;
//   }
// };

const playAudio = (file: AudioFile) => {
  console.log("EMITUJ showModal" + JSON.stringify(file));
  emit('audioSelected', file);
};

onMounted(() => {
  emit('audioSelected', audioFiles.value);
});

</script>



<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 15%;
  overflow: auto;
  display: none;
}

.show {
  display: block;
}

.modal-content {
  background: var(--primary-transparent);
  margin: 6% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 400px;
  height: 400px;
  overflow-y: auto;
  position: relative;
}

.content {
  padding: 10px;
}

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

.audio-item{
  display: flex;
  align-items: center;
}
.audio-item>*{
  margin-left: 5px;
  margin-top: 3px;
}

.mega-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: var(--font-color);
  background-color: var(--primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.mega-button:hover {
  background-color: #45a049;
}

@keyframes pulse {
  0% {
    transform: scale(1); 
  }
  50% {
    transform: scale(1.05); 
  }
  100% {
    transform: scale(1);
  }
}
</style>
