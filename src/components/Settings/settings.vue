<template>
  <div class="settings loaded">
    <div>
      <h1>Ustawienia</h1>
      <hr>
    </div>
    <div class="sett">
      <div class="settRouter">
        <router-view></router-view>
      </div>
      <details>
          <summary>Motyw</summary>
          <theme />
        </details>
    </div>
  </div>
</template>

<script setup>
import theme from './theme/theme.vue';

</script>

<style scoped>
summary {
  cursor: pointer;
}

.settings {
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
  flex-direction: column;
  padding: 5px;
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


@media (max-width: 600px) {
  .sett {
    padding: 10px;
  }

  .sett>* {
    padding: 0px;
  }

}
</style>
