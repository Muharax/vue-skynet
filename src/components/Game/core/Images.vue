<template>
  <div
    class="image-container"
    :title="title"
    :style="{
      left: posX + 'px',
      top: posY + 'px',
      width: imageWidth + 'px',
      height: imageHeight + 'px',
      backgroundImage: `url(/vue-skynet/game/images${imagePath})`
    }"
  >
    <a :href="linkUrl" target="_blank" class="image-link">
      {{ linkText }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  imagePath: String,
  title: String || null,
  posX: Number,
  posY: Number,
  imageWidth: Number,
  imageHeight: Number,
  linkUrl: String || null,
  linkText: String || null
})
</script>


<style scoped>
.image-container {
  position: absolute;
  cursor: pointer;
  z-index: 0;
  filter: grayscale(10%);
  transition: 300ms;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  animation: shadow-pulse 2s infinite alternate;
}

.image-container:hover {
  animation: none;
  filter: grayscale(0%) drop-shadow(0px 0px 20px rgba(255, 0, 0, 1));
}

.image-link {
  font-weight: bold;
  font-size: 10px;
  position: absolute;
  bottom: 27%;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: rgb(0, 0, 0);
  transition: 200ms;
}


@keyframes shadow-pulse {
  0% {
    filter: grayscale(0%) drop-shadow(0px 0px 13px rgba(15, 213, 207, 0.2));
  }
  50% {
    filter: grayscale(0%) drop-shadow(0px 0px 13px rgba(174, 189, 13, 0.9));
  }
  100% {
    filter: grayscale(0%) drop-shadow(0px 0px 13px rgba(12, 197, 182, 0.2));
  }
}

</style>
