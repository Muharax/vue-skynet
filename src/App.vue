<script setup>
import TopBar from './components/TopBar/TopBar-Main.vue'
import './App.css';


</script>

<template>
  <header class="TopBar">
    <TopBar />
  </header>

  <main>
    <div class="main">
      <router-view />
    </div>
  </main>
</template>

<style scoped>
.TopBar {
  background-color: var(--bg-color);
  box-shadow: 0 0 2px 1px var(--box-shadow);
  margin-bottom: 10px;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
</style>