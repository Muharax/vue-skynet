<template>
    <div class="playlist">
      <div v-for="(file, index) in audioFiles" :key="index" class="audio-item">
        <audio controls :src="file.url"></audio>
        <button @click="playAudio(file)">Play</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  interface AudioFile {
    name: string;
    url: string;
  }
  
  const audioFiles = ref<AudioFile[]>([]);
  
  const loadAudioFiles = async () => {
    try {
      const publicPath = '/'; // Ustaw publiczny adres URL na '/'
      const musicFiles = import.meta.glob('/music/*.mp3'); // Znajdź wszystkie pliki MP3 w katalogu /music/
      audioFiles.value = Object.entries(musicFiles).map(([path, url]) => ({
        name: path.split('/').pop(), // Pobierz nazwę pliku z pełnej ścieżki
        url: `${publicPath}${url.default}`, // Utwórz pełny adres URL pliku
      }));
    } catch (error) {
      console.error('Error loading audio files:', error);
    }
  };
  
  const playAudio = (file: AudioFile) => {
    const audio = new Audio(file.url);
    audio.play();
  };
  
  onMounted(() => {
    loadAudioFiles();
  });
  </script>
  
  <style scoped>
  .playlist {
    display: flex;
    flex-direction: column;
  }
  
  .audio-item {
    margin-bottom: 10px;
  }
  </style>
  