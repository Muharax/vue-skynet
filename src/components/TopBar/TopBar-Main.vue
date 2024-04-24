<script setup>
import logo from './logo.vue';
import login from './login.vue';
import socialMedia from './socialMedia.vue';

</script>

<template>
  <div class="tpMain">
    <logo></logo>
    <socialMedia />
    <login></login>
  </div>

</template>


<style scoped>
.tpMain {
    padding: 0rem 1rem 0rem 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
}
</style>