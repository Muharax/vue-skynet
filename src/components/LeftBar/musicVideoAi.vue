<template>
  <div class="container-ai">
    <div class="cont-ai">
      <h3>Pan - co waży nasze losy</h3>
      <video controls width="500" height="500">
        <source src="/video/v1.mp4" type="video/mp4">
        Twoja przeglądarka nie obsługuje odtwarzacza wideo.
      </video>
    </div>

    <div class="cont-ai">
      <h3>Moonlight Densetsu</h3>
      <video controls width="500" height="500">
        <source src="/video/v3Moonlight.mp4" type="video/mp4">
        Twoja przeglądarka nie obsługuje odtwarzacza wideo.
      </video>
    </div>

    <div class="cont-ai">
      <h3>Ty jedna na milion</h3>
      <video controls width="500" height="500">
        <source src="/video/v2(tyJednaNaMilion).mp4" type="video/mp4">
        Twoja przeglądarka nie obsługuje odtwarzacza wideo.
      </video>
    </div>

  </div>
</template>

<script setup>

</script>

<style>
.cont-ai {
  padding: 10px;
  width: fit-content;
  text-align: center;
}

.container-ai {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
