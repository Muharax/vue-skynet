<template>
	<div class="equalizer">
	  <div class="bar" v-for="(bar, index) in bars" :key="index" :style="{ height: bar.height + 'px', animationDelay: bar.delay }"></div>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		bars: [
		  { height: 10, delay: '0s' },
		  { height: 20, delay: '0.1s' },
		  { height: 30, delay: '0.2s' },
		  { height: 40, delay: '0.3s' },
		  { height: 50, delay: '0.4s' },
		  // Dodaj więcej pasków equalizera w razie potrzeby
		]
	  };
	}
  };
  </script>
  
  <style scoped>
  .equalizer {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	height: 50px;
  }
  
  .bar {
	width: 10px;
	background-color: #007bff;
	margin: 0 2px;
	/* animation: equalizerAnimation 0.2s infinite alternate; */
  }
  
  @keyframes equalizerAnimation {
	from {
	  height: 10px;
	}
	to {
	  height: 50px;
	}
  }
  </style>
  