<template>
  <div class="settings">
    <div>
      <h1>Ustawienia</h1>
      <hr>
    </div>
    <div class="sett">
      <div class="settMenu">
        <ul>
          <li><router-link to="/settings/language" class="settLink"
              :class="{ 'active': $route.path === '/settings/language' }">
              Przejdź do ustawień języka
            </router-link>
          </li>
          <li><router-link to="/settings/theme" class="settLink"
              :class="{ 'active': $route.path === '/settings/theme' }">
              Przejdź do ustawień motywu
            </router-link></li>
          <li><router-link to="/settings/cookies" class="settLink"
              :class="{ 'active': $route.path === '/settings/cookies' }">Przejdź do ustawień ciasteczek</router-link>
          </li>
        </ul>
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
.settings{
  height: 100%;
}
.settLink {
  color: var(--font-color);
}
.settLink:hover {
  color: var(--font-color-hover);
}

.sett {
  display: flex;
  padding: 5px;
}

.settMenu {
  display: flex;
  flex-direction: column;
}

.settRouter {
  /* background-color: var(--primary); */
}

.sett>* {
  padding: 7px;
}

.active {
  color: var(--font-color-active);
}
</style>
