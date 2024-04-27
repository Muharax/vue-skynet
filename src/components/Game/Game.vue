<template>
  <div class="container">
    <div class="gameMain">
      <div class="game-container">
        <div class="game-starter">

          <Images 
          
          imagePath="/ship1.png" 
          title="Gul gul" 
          :posX="218" 
          :posY="420" 
          imageWidth="131"
          imageHeight="63"
          linkUrl=""
          linkText=""/>
          


          <Images 
          imagePath="/btn1.png" 
          title="Lecisz z nami ?" 
          :posX="277" 
          :posY="655"
          imageWidth="157"
          imageHeight="36"
          linkUrl="https://example.com"
          linkText="START"/>
          

        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Images from './core/Images.vue';
</script>

<style scoped>
.elo{
  /* filter: grayscale(20%); */
}
.container {
  width: 700px;
  height: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gameMain {
  width: 100%;
  height: 100%;
}

.game-container,
.game-starter {
  height: inherit;
}

.game-starter {
  background-image: url('/public/game/images/bg2.jpg');
  background-size: cover;
  /* z-index: 10; */
  /* filter: grayscale(50%); */
}
</style>
