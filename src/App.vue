<script setup>
import TopBar from './components/TopBar/TopBar-Main.vue'
import './App.css';
</script>

<template>
  <header class="TopBar">
    <TopBar />
    <div class="main">
      <router-view />
    </div>

  </header>

  <main>
  </main>
</template>

<style scoped>
.TopBar {
  background-color: black;
  box-shadow: 0 0 2px 1px #08d1ff;
  margin-bottom: 10px;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>