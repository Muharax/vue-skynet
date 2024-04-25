<!-- <template>
  <div class="playlist">
    <div v-for="(file, index) in audioFiles" :key="index" class="audio-item">
      <button style="cursor: pointer;" @click="playAudio(file)">Play</button>
      <p>{{ file.name }}</p>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, onMounted } from 'vue';

interface AudioFile {
  name: string;
  url: string;
}

const emit = defineEmits(["audioSelected"]);

const audioFiles: AudioFile[] = [
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
  // Dodaj kolejne pliki audio w tej tablicy
]);


const playAudio = (file: AudioFile) => {
  console.log("EMITUJ ModalPlaylist" + JSON.stringify(file));
  emit('audioSelected', file);
};

// Wyemituj listę plików audio przy montowaniu komponentu
onMounted(() => {
  emit('audioSelected', audioFiles.value);
});
</script>
<style scoped>
.audio-item{
  display: flex;
  align-items: center;
}
.audio-item>*{
  margin-left: 5px;
  margin-top: 3px;
}
</style> -->