<template>
  <div class="circle-calculator">
    <div class="image-container">
      <!-- Aktualizacja SVG do reprezentacji koła -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="2" fill="none"/>
        <text x="50" y="55" fill="white" text-anchor="middle">r</text>
      </svg>
    </div>
    <div class="circle-results">
    <div class="input-group">
      <label for="radius">Promień (r):</label>
      <input type="number" id="radius" v-model.number="radius">
    </div>
    <div class="input-group">
      <label for="area">Pole powierzchni (P):</label>
      <input type="number" id="area" v-model.number="areaInput" 
      @input="calculateFromArea">
    </div>
    <div class="input-group">
      <label for="circumference">Obwód:</label>
      <input type="number" id="circumference" v-model.number="circumferenceInput" @input="calculateFromCircumference">
    </div>
    <div class="input-group">
      <label for="diameter">Średnica:</label>
      <input type="number" id="diameter" v-model.number="diameterInput" @input="calculateFromDiameter">
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const radius = ref<number>(0);
const areaInput = ref<number>(0);
const circumferenceInput = ref<number>(0);
const diameterInput = ref<number>(0);

// Obliczanie wartości na podstawie promienia
watch(radius, (newRadius) => {
  areaInput.value = (Math.PI * newRadius ** 2).toFixed(2) - 0;
  circumferenceInput.value = (2 * Math.PI * newRadius).toFixed(2) - 0;
  diameterInput.value = (2 * newRadius).toFixed(2) - 0;
}, { immediate: true });

// Funkcje do obliczeń na podstawie innych wartości
function calculateFromArea() {
  const newRadius = Math.sqrt(areaInput.value / Math.PI);
  radius.value = Number(newRadius.toFixed(2));
}

function calculateFromCircumference() {
  const newRadius = circumferenceInput.value / (2 * Math.PI);
  radius.value = Number(newRadius.toFixed(2));
}

function calculateFromDiameter() {
  const newRadius = diameterInput.value / 2;
  radius.value = Number(newRadius.toFixed(2));
}
</script>

<style scoped>
.input-group {
  margin-bottom: 10px;
}

.input-group label,
.input-group input {
  display: block;
}




.image-container>svg {
fill: none;
}

.input-container {
display: flex;
flex-direction: column;
margin-top: 10px;
}

.input-container label,
.input-container input {
margin-bottom: 5px;
}

.results p {
margin: 5px 0;
}

#radius {
width: fit-content;
}
</style>
