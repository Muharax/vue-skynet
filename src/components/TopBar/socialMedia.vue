<template>
	
  
	<div class="player-container">
		<showModal @audioSelected="handleAudioSelected" :audioFiles="audioFiles"/>
	  <div class="player">
		<div class="equalizer">
		  <div
			class="bar"
			v-for="(bar, index) in bars"
			:key="index"
			:style="{ height: bar.height + 'px' }"
		  ></div>
		</div>
		<div class="controls">
		  <button class="play-pause" @click="togglePlayPause">{{ isPlaying ? 'Pause' : 'Play' }}</button>
		  <input class="volume-slider" type="range" min="0" max="100" v-model="volume" @input="changeVolume">
		</div>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref, watchEffect, onMounted } from 'vue';
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

// Zmienna przechowująca aktualny indeks odtwarzanego pliku
let currentIndex = 0;

const playNextAudioFile = () => {
  const currentFile = audioFiles.value[currentIndex];
  console.log("CR "+audioFiles.value[currentIndex]);
  handleAudioFile(currentFile);
  currentIndex = (currentIndex + 1) % audioFiles.value.length; // Ustawiamy currentIndex na resztę z dzielenia przez długość listy, aby zapętlić odtwarzanie
  
};

// Funkcja obsługi odtwarzania kolejnych plików z listy
// const playNextAudioFile = () => {
//   // Pobierz aktualny plik audio na podstawie indeksu
//   const currentFile = audioFiles.value[currentIndex];

//   // Obsłuż odtwarzanie pliku
//   handleAudioFile(currentFile);

//   // Zwiększ indeks o 1, aby przejść do następnego pliku
//   currentIndex++;

//   // Sprawdź, czy osiągnięto koniec listy
//   if (currentIndex >= audioFiles.value.length) {
// 	console.log("currentIndex"+currentIndex);
// 	console.log("audioFiles.value.length"+audioFiles.value.length);
//     console.log("Doszliśmy do końca listy. Wrócono do początku.");
//     // Ustaw currentIndex na 0, aby zacząć od początku listy
//     currentIndex = 0;
//   }
// };


// Obsługa otrzymania listy plików audio
// Obsługa otrzymania listy plików audio
const handleAudioSelected = (files: AudioFile[] | AudioFile) => {
  if (Array.isArray(files)) {
    audioFiles.value = files;
  } else {
    audioFiles.value = [files];
  }
  currentIndex = 0; 
  playNextAudioFile();
};

// Funkcja obsługi odtwarzania pojedynczego pliku audio
const handleAudioFile = (file: AudioFile) => {
  // Wyświetl informacje o pliku audio
  console.log("Odebrano socialMedia:", file);
  if (sound && sound.playing()) {
    sound.stop();
  }
  // Jeśli istnieje poprzedni dźwięk, rozładuj go
  if (sound) {
    sound.unload();
  }

  // Inicjalizuj nowy dźwięk
  sound = new Howl({
    src: [file.url],
    autoplay: true,
    loop: true,
    volume: volume.value / 100,
    onplay: () => {
      animateEqualizer();
      isPlaying.value = true;
    },
    onpause: () => {
      isPlaying.value = false;
    },
    onend: () => {
      // Po zakończeniu odtwarzania bieżącego pliku, przejdź do następnego
      playNextAudioFile();
    },
  });
};




const togglePlayPause = () => {
  if (sound && sound.playing()) {
    sound.pause(); // Pauzuj dźwięk, jeśli jest odtwarzany
  } else if (sound) {
    sound.play(); // Wznów odtwarzanie, jeśli jest wstrzymany
  }
};
 

const bars = ref([
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	{ height: 0 },
	// Dodaj więcej pasków equalizera w razie potrzeby
  ]);



  // Pobierz początkową głośność z ciasteczka
  
  // Funkcja do pobierania początkowej głośności z ciasteczka
  function getInitialVolume() {
  const storedVolume = localStorage.getItem('playerVolume');
  return storedVolume ? parseFloat(storedVolume) : 20; // Domyślna głośność 50
}
  
 // Obserwuj zmiany głośności i zapisuj je do ciasteczka
watchEffect(() => {
  // Konwertuj wartość do liczby całkowitej przed zapisaniem
  const volumeWithoutDecimal = Math.floor(volume.value);
  localStorage.setItem('playerVolume', volumeWithoutDecimal.toString());
});
  
  

  
  const changeVolume = (event) => {
	// Aktualizuj głośność bezpośrednio na podstawie wprowadzonych danych użytkownika
	const newVolume = parseFloat(event.target.value) / 100;
	// const limitedVolume = Math.min(newVolume, 0.6);
	// sound.volume(limitedVolume);
	sound.volume(newVolume);
	volume.value = newVolume * 100; // Aktualizuj zmienną reaktywną dla spójności
  };


  	let analyser = null;

	const initAnalyser = () => {
	analyser = Howler.ctx.createAnalyser();
	Howler.masterGain.connect(analyser);
	analyser.connect(Howler.ctx.destination);
	analyser.fftSize = 64;
	};

	const animateEqualizer = () => {
	if (!analyser) {
		initAnalyser();
	}

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const renderFrame = () => {
    analyser.getByteFrequencyData(dataArray);

    bars.value.forEach((bar, index) => {
      const dataValue = dataArray[Math.floor(index * (bufferLength / bars.value.length))];
      const height = (dataValue / 256) * 50; // Normalizacja wartości i dostosowanie do wysokości equalizera
      bar.height = height;
    });

    requestAnimationFrame(renderFrame);
  };

  renderFrame();
};





// const animateEqualizer = () => {
// 	const analyser = Howler.ctx.createAnalyser();
// 	const gainNode = Howler.ctx.createGain();

// 	Howler.masterGain.connect(analyser);
// 	Howler.masterGain.connect(gainNode);

// 	analyser.connect(Howler.ctx.destination);
// 	// analyser.connect(Howler.ctx.destination);
// 	analyser.fftSize = 256;
// 	const bufferLength = analyser.frequencyBinCount;
// 	const dataArray = new Uint8Array(bufferLength);
  
// 	const renderFrame = () => {
// 	  analyser.getByteFrequencyData(dataArray);
  
// 	  bars.value.forEach((bar, index) => {
// 		const dataValue = dataArray[Math.floor(index * (bufferLength / bars.value.length))];
// 		const height = (dataValue / 256) * 50; // Normalizacja wartości i dostosowanie do wysokości equalizera
// 		bar.height = height;
// 	  });
  
// 	  requestAnimationFrame(renderFrame);
// 	};
  
// 	renderFrame();
//   };









  
//   const increaseVolume = () => {
// 	if (volume.value < 100) {
// 	  volume.value += 10; // Zwiększ głośność o 10 jednostek
// 	  sound.volume(volume.value / 100);
// 	}
//   };
  


// RENDERUJ EQUALIZER ZGODNIE Z DOSTĘPNYMI CZĘSTOTLIWOŚCIAMI
// const animateEqualizer = () => {
//   const analyser = Howler.ctx.createAnalyser();
//   Howler.masterGain.connect(analyser);
//   analyser.connect(Howler.ctx.destination);
//   analyser.fftSize = 256;
//   const bufferLength = analyser.frequencyBinCount;
//   const dataArray = new Uint8Array(bufferLength);

//   // Dostosuj rozmiar tablicy bars do liczby danych częstotliwościowych
//   bars.value = Array.from({ length: bufferLength }, () => ({ height: 0 }));

//   const renderFrame = () => {
//     analyser.getByteFrequencyData(dataArray);

//     bars.value.forEach((bar, index) => {
//       const dataValue = dataArray[index];
//       const height = (dataValue / 256) * 100; // Normalizacja wartości i dostosowanie do wysokości equalizera
//       bar.height = height;
//     });

//     requestAnimationFrame(renderFrame);
//   };

//   renderFrame();
// };





 


  </script>
  























  <style scoped>
  .player-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 75px; /* Zmieniona wysokość odtwarzacza */
  }
  
  .player {
	display: flex;
	/* background-color: #1e1e1e; */
	/* border: 2px solid #333; */
	/* border-radius: 10px; */
	padding: 10px; /* Zmniejszone wcięcie odtwarzacza */
  }
  
  .equalizer {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	height: 50px; /* Zmniejszona wysokość equalizera */
  }
  
  .bar {
	width: 8px; /* Zmniejszona szerokość paska equalizera */
	/* background-color: #007bff; */

	/* background: linear-gradient(to right, #ff0000, #000000); */
	/* background: linear-gradient(to bottom, #ff0000, #000000); */
	/* background: linear-gradient(to bottom right, #ff0000, #000000); */
	/* background: linear-gradient(to left, #ff0000, #000000); */
	background: linear-gradient(to bottom right, #00ffc3, #000000);

	margin: 0 1px; /* Zmniejszone marginesy paska equalizera */
  }
  
  .controls {
	position: absolute;
    left: 127px;
	top: 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 5px; /* Zmniejszone odstępy między kontrolkami */
  }
  
  .play-pause {
	width: 80px;
	background-color: transparent;
	border: none;
	color: var(--font-color);
	font-size: 16px; /* Zmniejszona wielkość czcionki przycisku play/pause */
	cursor: pointer;
  }
  
  .volume-slider {
	width: 80px; /* Zmniejszona długość suwaka głośności */
	-webkit-appearance: none;
	appearance: none;
	background-color: #333;
	border-radius: 5px;
  }
  
  .volume-slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 12px; /* Zmniejszona szerokość kciuka suwaka głośności */
	height: 12px; /* Zmniejszona wysokość kciuka suwaka głośności */
	background-color: #007bff;
	border-radius: 50%;
	cursor: pointer;
  }


  @media (max-width: 600px) {
  .player-container {
	transform: scale(0.9);
    position: relative;
    left: -11px;
  }
  }
  </style>
  