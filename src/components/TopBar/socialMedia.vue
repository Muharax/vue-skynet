<template>
	<!-- <showModal /> -->
  
	<div class="player-container">
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
  import { ref, watchEffect } from 'vue';
  import { Howl, Howler } from 'howler';
  
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
	// Dodaj więcej pasków equalizera w razie potrzeby
  ]);

  const sound = new Howl({
	src: ['/vue-skynet/music/music1.mp3'],
	autoplay: false,
	loop: true,
	volume: 0.5, // Ustawienie głośności na 30%
	onplay: () => {
	  animateEqualizer();
	},
  });

  const isPlaying = ref(false);

  const volume = ref(getInitialVolume()); // Pobierz początkową głośność z ciasteczka
  
  // Funkcja do pobierania początkowej głośności z ciasteczka
  function getInitialVolume() {
	const storedVolume = localStorage.getItem('playerVolume');
	if (storedVolume) {
	  return parseFloat(storedVolume);
	} else {
	  return 30; // Domyślna głośność
	}
  }
  
 // Obserwuj zmiany głośności i zapisuj je do ciasteczka
watchEffect(() => {
  // Konwertuj wartość do liczby całkowitej przed zapisaniem
  const volumeWithoutDecimal = Math.floor(volume.value);
  localStorage.setItem('playerVolume', volumeWithoutDecimal.toString());
});
  
  
  const togglePlayPause = () => {
	// let previousIsPlaying = isPlaying.value;
	// const storedVolume = localStorage.getItem('playerVolume');
//   if (storedVolume) {
//     volume.value = parseFloat(storedVolume);
//   }
  
	if (isPlaying.value) {
		console.log("IsPlaying  "+isPlaying.value);
		
	  sound.pause();

	} else {
		// sound.volume(0.5);
		// Howler.volume(0.5);
		console.log("IsPlaying  "+isPlaying.value);
	
	//   if (storedVolume) {
    //         const parsedVolume = parseFloat(storedVolume);
    //         sound.volume(parsedVolume / 100);
    //         // Zaktualizuj również wartość zmiennej reaktywnej volume
    //         volume.value = parsedVolume;
    //     }
        sound.play();
	}
  
	isPlaying.value = !isPlaying.value;
  
	// Sprawdź, czy stan odtwarzania faktycznie się zmienił
	// if (isPlaying.value !== previousIsPlaying) {
	//   sound.volume(volume.value / 100);
	// }
  };
  
  const changeVolume = (event) => {
	// Aktualizuj głośność bezpośrednio na podstawie wprowadzonych danych użytkownika
	const newVolume = parseFloat(event.target.value) / 100;
	const limitedVolume = Math.min(newVolume, 0.6); // 
	sound.volume(limitedVolume);
	volume.value = newVolume * 100; // Aktualizuj zmienną reaktywną dla spójności
  };


  	let analyser = null;

	const initAnalyser = () => {
	analyser = Howler.ctx.createAnalyser();
	Howler.masterGain.connect(analyser);
	analyser.connect(Howler.ctx.destination);
	analyser.fftSize = 256;
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
	background-color: #1e1e1e;
	border: 2px solid #333;
	border-radius: 10px;
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
	background-color: #007bff;
	margin: 0 1px; /* Zmniejszone marginesy paska equalizera */
  }
  
  .controls {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 5px; /* Zmniejszone odstępy między kontrolkami */
  }
  
  .play-pause {
	background-color: transparent;
	border: none;
	color: #fff;
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
  </style>
  