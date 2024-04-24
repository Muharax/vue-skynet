<template>
  <header class="TopBar">
    <TopBar />
  </header>
  <div class="line">
    <LeftBarMain />
    <div class="router">
      <router-view></router-view>
    </div>
  </div>


</template>

<script setup>
import './App.css';
import { initializeTheme } from './components/Settings/theme/themeLogic.js';
initializeTheme();

import TopBar from './components/TopBar/TopBar-Main.vue'
import LeftBarMain from './components/LeftBar/LeftBar-Main.vue';


</script>

<style scoped>
.TopBar {
  background-color: var(--color-background);
  box-shadow: 0px 0px 2px 1px var(--box-shadow);
  height: 75px;
  display: flex;
  align-items: center;
  z-index: 1;
}

.line {
  height: calc(100vh - 75px);
  display: flex;
}

.router {
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  margin-left: 0px;
}

@media screen and (max-width: 600px) {
  .router {
  margin-left: 60px;
}
}

</style>