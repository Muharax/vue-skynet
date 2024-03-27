<template>
  <div class="settings">
    <div class="fade-in">
      <h1>Witaj w Ustawieniach systemu SKYNET!</h1>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.fade-in {
  animation: fadeInAnimation 2s ease forwards;
  opacity: 0;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
