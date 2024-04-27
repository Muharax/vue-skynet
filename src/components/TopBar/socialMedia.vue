<template>
  <div class="player-container">
    <div class="controls-container">
      <div class="showModal">
        <showModal @audioSelected="files => handleAudioSelected(files, true)" :audioFiles="audioFiles" />
      </div>
      <div class="controls">
        <button class="play-pause mega-button" @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>
        <input class="volume-slider" type="range" min="0" max="100" v-model="volume" @input="changeVolume">
      </div>
    </div>
    <div class="canvas">
      <canvas id="canvas" width="400" height="55"></canvas>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect, onMounted, computed } from 'vue';
import { Howl, Howler } from 'howler';
import showModal from './showModal.vue';
interface AudioFile {
  name: string;
  url: string;
}

const isPlaying = ref(false);
const volume = ref(getInitialVolume());
const audioFiles = ref<AudioFile[]>([]);
let sound: Howl | null = null;
const isComponentLoaded = ref(false);
let currentIndex = 0;


const playNextAudioFile = (isSingleFile: boolean = false) => {
  let nextIndex;

  if (isSingleFile) {
    handleAudioFile(audioFiles.value[currentIndex]);
    isSingleFile = false;
    return;
  }

  if (!isComponentLoaded.value) {
    nextIndex = currentIndex % audioFiles.value.length;
  } else {
    nextIndex = (currentIndex + 1) % audioFiles.value.length;
    currentIndex = nextIndex;
    if (nextIndex === 0) {
      console.log("Restarting from the beginning");
    }
  }
  const nextFile = audioFiles.value[nextIndex];
  handleAudioFile(nextFile);
};



const handleAudioSelected = (files: AudioFile[] | AudioFile, autoPlay: boolean = false) => {
  
  if (Array.isArray(files)) {
    audioFiles.value = files;
    currentIndex = 0;
  } else {
    sound.stop();
    const index = audioFiles.value.findIndex(file => file === files);
    // console.log("Index: " + index);
    // console.log("audioFiles.value: " + files.name);
    if (index !== -1) {
      if (!isComponentLoaded.value) {
        isComponentLoaded.value = true;
      }
      currentIndex = index;
      playNextAudioFile(true);
      return;
    } else {
      currentIndex = 0;
      console.error('Wybrany utwór nie został znaleziony w playlistcie.');
    }
  }

  if (autoPlay) {
    playNextAudioFile();
  }
};


const handleAudioFile = (file: AudioFile) => {
  if (sound && sound.playing()) {
    sound.stop();
    sound.unload();
  }

  sound = new Howl({
    src: [file.url],
    autoplay: isComponentLoaded.value,
    loop: true,
    volume: volume.value / 100,
    onplay: () => {
      animateEqualizer();
      isPlaying.value = true;
      audioFiles.value[currentIndex].autoPlay = true;
    },
    onpause: () => {
      isPlaying.value = false;
      audioFiles.value[currentIndex].autoPlay = false;
    },
    onend: () => {
      audioFiles.value[currentIndex].autoPlay = false;
      playNextAudioFile();
    },
  });


};


const togglePlayPause = () => {
  if (!isComponentLoaded.value) {
    isComponentLoaded.value = true;
  }
  if (sound && sound.playing()) {
    sound.pause();
  } else if (sound) {
    sound.play();
  }
};

function getInitialVolume() {
  const storedVolume = localStorage.getItem('playerVolume');
  return storedVolume ? parseFloat(storedVolume) : 20;
}



watchEffect(() => {
  const volumeWithoutDecimal = Math.floor(volume.value);
  localStorage.setItem('playerVolume', volumeWithoutDecimal.toString());
});

const changeVolume = (event) => {
  const newVolume = parseFloat(event.target.value) / 100;
  sound.volume(newVolume);
  volume.value = newVolume * 100;
};


let canvas = null;
let ctx = null;
let analyser = null;
let canvasWidth = 400;
let canvasHeight = 55;
let numBars = 32;
let barWidth = Math.floor(canvasWidth / numBars);
let barSpacing = Math.floor(barWidth / 10);
let gradientStartColor = '#00ffc3';
let gradientStopColor = '#0983c0';

const FPS = 60;
const interval = 1000 / FPS;

const initAnalyser = () => {
  analyser = Howler.ctx.createAnalyser();
  Howler.masterGain.connect(analyser);
  analyser.connect(Howler.ctx.destination);
  analyser.fftSize = numBars * 2;
};

const initCanvas = () => {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  barWidth = Math.floor((canvas.width - (numBars - 1) * barSpacing) / numBars);
};


const animateEqualizer = () => {
  if (!analyser) {
    initAnalyser();
  }
  if (!canvas || !ctx) {
    initCanvas();
  }
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  barWidth = Math.floor((canvas.width - (numBars - 1) * barSpacing) / numBars);
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, gradientStartColor);
  gradient.addColorStop(1, gradientStopColor);
  
  const renderFrame = () => {
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient;
    const barWidthWithSpacing = barWidth + barSpacing; 
    dataArray.forEach((dataValue, index) => {
      const x = index * barWidthWithSpacing;
      const height = (dataValue / 256) * canvas.height;
      const y = canvas.height - height;
      ctx.fillRect(x, y, barWidth, height);
    });
    setTimeout(() => {
      requestAnimationFrame(renderFrame);
    }, interval);
  };
  renderFrame();
};




</script>
<style scoped>
.song-title {
  margin-left: 10px;
}

.player-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 75px;
}

.controls-container {
  display: flex;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.play-pause {
  width: 80px;
}

.volume-slider {
  width: 80px;
  -webkit-appearance: none;
  appearance: none;
  background-color: #333;
  border-radius: 5px;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #007bff;
  border-radius: 50%;
  cursor: pointer;
}

@media (max-width: 600px) {
  .player-container {}
}
</style>