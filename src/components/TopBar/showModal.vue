<template>
  <div>
    <button class="mega-button" @click="openModal">Playlista</button>
    <div :class="{ 'modal': true, 'show': isOpen }">
      <div class="modal-content">
        <button class="ct close-btn-playlist" @click="closeModal">X</button>


        <div class="content">

          <!-- <label>AutoPlay</label>
          <label class="switch">
                <input type="checkbox" v-model="file.autoplay">
                <span class="slider round"></span>
          </label> -->

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

interface AudioFile {
  name: string;
  url: string;
  // autoplay: boolean;
}

const audioFiles = ref<AudioFile[]>([
  { name: 'Nie płakać psia mać V1', url: '/vue-skynet/music/3.mp3' },
  { name: 'Nie płakać psia mać V4', url: '/vue-skynet/music/2.mp3' },
  { name: 'Nie płakać psia mać V5', url: '/vue-skynet/music/music1.mp3' },
  { name: 'W labiryncie kodu V1 (new)', url: '/vue-skynet/music/11wLabiryncie.mp3' },
  { name: 'W labiryncie kodu V2 (new)', url: '/vue-skynet/music/22wLabiryncie.mp3' },
  { name: 'Jeszcze Polska nie zgineła', url: '/vue-skynet/music/33jeszczePolska.mp3' },
  { name: 'Nanashi Zer YouTube Nanashi Zero', url: '/vue-skynet/music/44Nanashi_ZerYouTubeNanashi_Zero.mp3' },
]);

// const audioFiles = ref<AudioFile[]>([
//   { name: 'Nie płakać psia mać V1', url: '/vue-skynet/music/33.mp3' },
//   { name: 'Nie płakać psia mać V4', url: '/vue-skynet/music/33.mp3' },
//   { name: 'Nie płakać psia mać V5', url: '/vue-skynet/music/33.mp3' },
//   { name: 'W labiryncie kodu V1 (new)', url: '/vue-skynet/music/33.mp3' },
//   { name: 'W labiryncie kodu V2 (new)', url: '/vue-skynet/music/33.mp3' },
//   { name: 'Jeszcze Polska nie zgineła', url: '/vue-skynet/music/33.mp3' },
//   { name: 'Nanashi Zer YouTube Nanashi Zero', url: '/vue-skynet/music/33.mp3' },
// ]);

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

.audio-item{
  display: flex;
  align-items: center;
}
.audio-item>*{
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
  .modal{
 width: 100%;
}
}
</style>
