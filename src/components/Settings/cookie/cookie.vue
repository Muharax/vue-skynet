<template>
  <div class="cookie-settings">
    <h2>Ustawienia plików cookie</h2>
    <div class="cookie-switches">
      <div class="cookie-switch">
        <label>
          <input type="checkbox" v-model="requiredCookie" @change="updateRequiredCookie" disabled>
          Wymagane cookie
        </label>
        <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M660-160h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-800v640-640 200-200Zm80 400h147q11-23 25.5-43t32.5-37H280v80Zm0 160h123q-3-20-3-40t3-40H280v80ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v92q-19-6-39-9t-41-3v-40H480v-200H200v640h227q11 23 25.5 43T485-80H200Zm480-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Z" />
          </svg></div>

      </div>
      <div class="cookie-switch">
        <label>
          <input type="checkbox" v-model="marketingCookie" @change="updateMarketingCookie">
          Marketing cookie
        </label>
        <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M660-160h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-800v640-640 200-200Zm80 400h147q11-23 25.5-43t32.5-37H280v80Zm0 160h123q-3-20-3-40t3-40H280v80ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v92q-19-6-39-9t-41-3v-40H480v-200H200v640h227q11 23 25.5 43T485-80H200Zm480-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Z" />
          </svg></div>
      </div>
      <div class="cookie-switch">
        <label>
          <input type="checkbox" v-model="additionalCookie" @change="updateAdditionalCookie">
          Dodatkowe cookie
        </label>
        <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M660-160h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-800v640-640 200-200Zm80 400h147q11-23 25.5-43t32.5-37H280v80Zm0 160h123q-3-20-3-40t3-40H280v80ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v92q-19-6-39-9t-41-3v-40H480v-200H200v640h227q11 23 25.5 43T485-80H200Zm480-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Z" />
          </svg></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const requiredCookie = ref(true);
const marketingCookie = ref(false);
const additionalCookie = ref(false);

const updateMarketingCookie = () => {
  console.log('Aktualizacja ustawień marketingowych plików cookie');
};

const updateAdditionalCookie = () => {
  console.log('Aktualizacja ustawień dodatkowych plików cookie');
};
</script>

<style scoped>
.cookie-settings {
  max-width: 600px;
  margin: 0 auto;
}

.cookie-switches {
  display: flex;
  flex-direction: column;
}

.cookie-switch {
  margin-bottom: 10px;
  ;
  flex-direction: row;
}

.svg>svg {
  margin-left: 4px;
  fill: white;
  cursor: pointer;
  transition: 0.4s;
}
.svg>svg:hover {
  fill: rgb(30, 208, 211);
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #14b7bf;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
