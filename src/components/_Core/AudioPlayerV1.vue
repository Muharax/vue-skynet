<template>
  <div class="audio-container">
    <div class="audioTitle">Tytuł: {{ title }} ( SUNO )</div>
    <div class="audio-player">
      <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate">
      <source :src="path" type="audio/mpeg">
      Twoja przeglądarka nie obsługuje elementu audio.
    </audio>
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String, // Przyjmij tytuł jako string
  path: String   // Przyjmij ścieżkę jako string
});
</script>

<style scoped>
.audio-player, audio{
  width: 100%;
}
.audio-container{
  background-color: rgb(38, 38, 38);
  color: rgb(38, 203, 85);
  width: 100%;
  padding: 0px 10px 0px 10px;
}
audio::-webkit-media-controls-panel{
  background-color: rgb(44, 148, 152);
}

/* audio::-webkit-media-controls-panel
audio::-webkit-media-controls-mute-button
audio::-webkit-media-controls-play-button
audio::-webkit-media-controls-timeline-container
audio::-webkit-media-controls-current-time-display
audio::-webkit-media-controls-time-remaining-display
audio::-webkit-media-controls-timeline
audio::-webkit-media-controls-volume-slider-container
audio::-webkit-media-controls-volume-slider
audio::-webkit-media-controls-seek-back-button
audio::-webkit-media-controls-seek-forward-button
audio::-webkit-media-controls-fullscreen-button
audio::-webkit-media-controls-rewind-button
audio::-webkit-media-controls-return-to-realtime-button
audio::-webkit-media-controls-toggle-closed-captions-button */
</style>
