<script setup>
import TopBar from './components/TopBar/TopBar-Main.vue'
import LeftBarMain from './components/LeftBar/LeftBar-Main.vue';
import './App.css';


</script>

<template>
  <div class="TopBar">
    <TopBar />
  </div>
  <div class="line">
    <div class="left">
      <LeftBarMain />
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>


</template>

<style scoped>
.TopBar {
  background-color: var(--color-background);
  box-shadow: 0px 0px 2px 1px var(--box-shadow);
  padding-right: 15px;
  /* margin-bottom: 10px; */
  justify-content: space-between;
  width: 100%;
  height: 75px;
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 1;
}

.line {
  height: calc(100vh - 75px); /* Wysokość ekranu minus wysokość TopBar */
  display: flex;
}
.router{
  width: 100%;
  padding: 7px;
}
</style>