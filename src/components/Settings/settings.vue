<template>
  <div class="settings">
    <div>
      <h1>Ustawienia</h1>
      <hr>
    </div>
    <div class="sett">
    <div class="settMenu">
    <router-link to="/settings/language" class="button">Przejdź do ustawień języka</router-link>
    <router-link to="/settings/language" class="button">Przejdź do ustawień motywu</router-link>
    <router-link to="/settings/language" class="button">Przejdź do ustawień ciasteczek</router-link>
  </div>
  <div class="settRouter">
    <router-view></router-view>
  </div>
</div>
</div>
</template>

<script setup>


</script>

<style scoped>
.settings {
  color: white;
}
.sett{
  display: flex; 
  padding: 5px;
}
.settMenu{
  display: flex;
  flex-direction: column;
}
.settRouter{
  /* background-color: var(--primary); */
}
.sett > * {
  padding: 7px;
}
</style>
