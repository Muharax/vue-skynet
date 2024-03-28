<template>
  <div>
    <div class="fade-in">
      <h1>Witaj w Ustawieniach systemu SKYNET!</h1>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.fade-in {
  animation: fadeInAnimation 3s ease forwards;
  opacity: 0;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
    /* position: absolute; */
    /* right:-1200px; */
  }
  to {
    opacity: 1;
    /* right: 0; */
    /* position: static; */
  }
}

</style>
