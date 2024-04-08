<template>
  <div class="circle-calculator">
    <div class="image-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="2" fill="none"/>
        <text x="50" y="55" fill="white" text-anchor="middle">r</text>
      </svg>
    </div>
    <div class="circle-results">
      <div class="input-group">
        <label for="radius">Promień (r):</label>
        <input type="number" id="radius" v-model.number="radius" 
        @input="updateValues('radius')">
      </div>
      <div class="input-group">
        <label for="area">Pole powierzchni (P):</label>
        <input type="number" id="area" v-model.number="areaInput" 
        @input="updateValues('area')">
      </div>
      <div class="input-group">
        <label for="circumference">Obwód:</label>
        <input type="number" id="circumference" v-model.number="circumferenceInput" @input="updateValues('circumference')">
      </div>
      <div class="input-group">
        <label for="diameter">Średnica:</label>
        <input type="number" id="diameter" v-model.number="diameterInput" 
        @input="updateValues('diameter')">
      </div>
      <button type="button" @click="clearValues">Wyczyść</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radius = ref<number>(0);
const areaInput = ref<number>(0);
const circumferenceInput = ref<number>(0);
const diameterInput = ref<number>(0);

function updateValues(changedValue: string) {
  const newRadius = changedValue === 'radius' ? radius.value : 
                     changedValue === 'area' ? Math.sqrt(areaInput.value / Math.PI) :
                     changedValue === 'circumference' ? circumferenceInput.value / (2 * Math.PI) :
                     diameterInput.value / 2;

  // Aktualizacja pozostałych wartości na podstawie nowego promienia
  if (changedValue !== 'radius') radius.value = newRadius;
  if (changedValue !== 'area') areaInput.value = Math.PI * newRadius * newRadius;
  if (changedValue !== 'circumference') circumferenceInput.value = 2 * Math.PI * newRadius;
  if (changedValue !== 'diameter') diameterInput.value = 2 * newRadius;

  // Zaokrąglanie do 2 miejsc po przecinku (opcjonalne)
  radius.value = +radius.value.toFixed(2);
  areaInput.value = +areaInput.value.toFixed(2);
  circumferenceInput.value = +circumferenceInput.value.toFixed(2);
  diameterInput.value = +diameterInput.value.toFixed(2);
}

function clearValues() {
  radius.value = 0;
  areaInput.value = 0;
  circumferenceInput.value = 0;
  diameterInput.value = 0;
}
</script>


<style scoped>
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

#radius {
width: fit-content;
}
</style>
