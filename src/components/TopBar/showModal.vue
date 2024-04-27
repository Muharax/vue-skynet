<template>
  <div>
    <button class="mega-button" @click="openModal">Playlista</button>
    <div :class="{ 'modal': true, 'show': isOpen }">
      <div class="modal-content">
        <button class="ct close-btn-playlist" @click="closeModal">X</button>
        <div class="content">
          <div class="playlist">
            <span>Autoplay: {{ autoPlayIndex + 1 }}</span>
            <div v-for="(file, index) in audioFiles" :key="index" class="audio-item">
              <button v-if="autoPlayIndex !== index" style="cursor: pointer;" @click="playAudio(file)" class="mega-button">Play</button>
              <button v-else style="cursor: pointer;" @click="playAudio(file)" class="btn-pulse">Lecimy</button>
              <p>{{ file.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, onMounted, computed } from 'vue';
interface AudioFile {
  name: string;
  url: string;
  autoPlay: boolean;
}
const audioFiles = ref<AudioFile[]>([
  // { name: 'Nie płakać psia mać V1', url: '/vue-skynet/music/33.mp3', autoPlay: false },
  { name: 'Nie płakać psia mać V5', url: '/vue-skynet/music/music1.mp3', autoPlay: false },
  { name: 'W labiryncie kodu V1 (new)', url: '/vue-skynet/music/11wLabiryncie.mp3', autoPlay: false },
  { name: 'W labiryncie kodu V2 (new)', url: '/vue-skynet/music/22wLabiryncie.mp3', autoPlay: false },
  { name: 'Jeszcze Polska nie zgineła', url: '/vue-skynet/music/33jeszczePolska.mp3', autoPlay: false },
  { name: 'Nanashi Zer YouTube Nanashi Zero', url: '/vue-skynet/music/44Nanashi_ZerYouTubeNanashi_Zero.mp3', autoPlay: false },
  // { name: 'Nie płakać psia mać V0', url: '/vue-skynet/music/33.mp3' },
]);
// const audioFiles = ref<AudioFile[]>([
//   { name: 'Nie płakać psia mać V1', url: '/vue-skynet/music/33.mp3', autoPlay: false },
//   { name: 'Nie płakać psia mać V4', url: '/vue-skynet/music/33.mp3', autoPlay: false },
//   { name: 'Nie płakać psia mać V5', url: '/vue-skynet/music/33.mp3', autoPlay: false },
//   { name: 'W labiryncie kodu V1 (new)', url: '/vue-skynet/music/33.mp3', autoPlay: false },
//   { name: 'W labiryncie kodu V2 (new)', url: '/vue-skynet/music/33.mp3', autoPlay: false },
//   { name: 'Jeszcze Polska nie zgineła', url: '/vue-skynet/music/33.mp3', autoPlay: false },
//   { name: 'Nanashi Zer YouTube Nanashi Zero', url: '/vue-skynet/music/33.mp3', autoPlay: false },
// ]);
const autoPlayIndex = computed(() => {
  const index = audioFiles.value.findIndex(file => file.autoPlay);
  console.log("I: " + index)
  return index !== -1 ? index : null;
});
const emit = defineEmits(["audioSelected"]);
const isOpen = ref(false);
const openModal = () => {
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
};
const playAudio = (file: AudioFile) => {
  console.log("EMITUJ showModal" + JSON.stringify(file));
  emit('audioSelected', file);
  setAutoPlayIndex(file);
};
const setAutoPlayIndex = (file: AudioFile) => {
  const index = audioFiles.value.findIndex(f => f.name === file.name);
  if (index !== -1) {
    audioFiles.value.forEach((f, i) => {
      if (i === index) {
        f.autoPlay = true;
      } else {
        f.autoPlay = false;
      }
    });
  }
};
onMounted(() => {
  emit('audioSelected', audioFiles.value);
  console.log(audioFiles.value);
});
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 19;
  left: 50%;
  top: 75px;
  overflow: auto;
  display: none;
  transform: translateX(-50%);
}
.show {
  display: block;
}
.modal-content {
  background: linear-gradient(to bottom right, rgb(0, 0, 0), rgb(15, 128, 136));
  padding: 20px;
  border: 1px solid #888;
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
.audio-item {
  display: flex;
  align-items: center;
}
.audio-item>* {
  margin-left: 5px;
  margin-top: 3px;
}
.mega-button:hover {
  color: orange;
  /* background-color: #45a049; */
  animation: buttonPulse 0.5s infinite alternate;
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
@media screen and (max-width: 600px) {
  .modal {
    width: 100%;
  }
}
</style>
