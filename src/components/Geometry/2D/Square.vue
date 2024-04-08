<template>
  <div class="rectangle-calculator">
    <div class="image-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" width="200" height="240">
        <rect x="10" y="10" width="80" height="100" stroke="green" stroke-width="2" fill="none"/>
        <text x="50" y="120" fill="white" text-anchor="middle">a</text>
        <text x="95" y="60" fill="white" text-anchor="middle">b</text>
      </svg>
    </div>
    <div class="rectangle-results">
      <div class="input-group">
        <label for="sideALength">Długość boku (a):</label>
        <input type="number" id="sideALength" v-model.number="sideALength" 
        >
      </div>
      <div class="input-group">
        <label for="sideBLength">Długość boku (b):</label>
        <input type="number" id="sideBLength" v-model.number="sideBLength">
      </div>
      <div class="input-group">
        <label for="area">Pole powierzchni (P):</label>
        <input type="number" id="area" v-model.number="area">
      </div>
      <div class="input-group">
        <label for="circumference">Obwód:</label>
        <input type="number" id="circumference" v-model.number="circumference" readonly>
      </div>
      <button type="button" @click="clearValues">Wyczyść</button>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const sideALength = ref<number | null>(null);
const sideBLength = ref<number | null>(null);
const area = ref<number | null>(null);
const circumference = ref<number | null>(null);

const calculateFromSides = () => {
  if (sideALength.value !== null && sideBLength.value !== null) {
    area.value = sideALength.value * sideBLength.value;
    circumference.value = 2 * (sideALength.value + sideBLength.value);
  }
};

const calculateFromArea = () => {
  if (area.value !== null) {
    if (sideALength.value !== null && sideALength.value > 0) {
      sideBLength.value = area.value / sideALength.value;
    } else if (sideBLength.value !== null && sideBLength.value > 0) {
      sideALength.value = area.value / sideBLength.value;
    }
    if (sideALength.value !== null && sideBLength.value !== null) {
      circumference.value = 2 * (sideALength.value + sideBLength.value);
    }
  }
};

// Watchers for reactive calculations
watch(sideALength, (newVal, oldVal) => {
  if (newVal !== null && sideBLength.value !== null) {
    calculateFromSides();
  } else if (area.value !== null) {
    calculateFromArea();
  }
});

watch(sideBLength, (newVal, oldVal) => {
  if (newVal !== null && sideALength.value !== null) {
    calculateFromSides();
  } else if (area.value !== null) {
    calculateFromArea();
  }
});

watch(area, (newVal, oldVal) => {
  if (newVal !== null) {
    calculateFromArea();
  }
});

const clearValues = () => {
  sideALength.value = null;
  sideBLength.value = null;
  area.value = null;
  circumference.value = null;
};
</script>


  
  <style scoped>
  .image-container>svg{
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
  #sideLength{
    width: fit-content;
  }
  </style>
  