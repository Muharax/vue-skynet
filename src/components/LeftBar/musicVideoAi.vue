<template>
  <div class="container-music">
    <div>Pan co waży nasze losy feat. SUNO</div>
    <hr style="width: 100%;">
    <div class="fs">
      <div class="fk">
        <div class="cont-music">
          <div>V0.6</div>
          <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate nofullscreen">
            <source src="/music/7.mp3" type="audio/mpeg">
            Twoja przeglądarka nie obsługuje elementu audio.
          </audio>
        </div>

        <div class="cont-music">
          <div>V0.7</div>
          <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate nofullscreen">
            <source src="/music/6.mp3" type="audio/mpeg">
            Twoja przeglądarka nie obsługuje elementu audio.
          </audio>
        </div>

        <div class="cont-music">
          <div>V0.8</div>
          <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate nofullscreen">
            <source src="/music/55.mp3" type="audio/mpeg">
            Twoja przeglądarka nie obsługuje elementu audio.
          </audio>
        </div>
      </div>

      <div class="fk">
        <div class="cont-music">
          <div>V0.9</div>
          <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate nofullscreen">
            <source src="/music/8.mp3" type="audio/mpeg">
            Twoja przeglądarka nie obsługuje elementu audio.
          </audio>
        </div>
     
      </div>

      <div class="fk">
        <div class="cont-music">
          <div>V1.2</div>
          <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate nofullscreen">
            <source src="/music/1.mp3" type="audio/mpeg">
            Twoja przeglądarka nie obsługuje elementu audio.
          </audio>
        </div>

        <div class="cont-music">
          <div>V1.3</div>
          <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate nofullscreen">
            <source src="/music/4.mp3" type="audio/mpeg">
            Twoja przeglądarka nie obsługuje elementu audio.
          </audio>
        </div>

      </div>

      <div class="fk">
        <div class="cont-music">
          <div>V2.2</div>
          <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate nofullscreen">
            <source src="/music/10.mp3" type="audio/mpeg">
            Twoja przeglądarka nie obsługuje elementu audio.
          </audio>
        </div>

        <div class="cont-music">
          <div>V3.1</div>
          <audio ref="audioPlayer" controls controlsList="nodownload noplaybackrate nofullscreen">
            <source src="/music/12.mp3" type="audio/mpeg">
            Twoja przeglądarka nie obsługuje elementu audio.
          </audio>
        </div>
      </div>
    </div>
  </div>

  <div class="container-ai">
    <div class="cont-ai">
      <h3>Pan - co waży nasze losy</h3>
      <video class="vds" controls controlsList="nodownload noplaybackrate nofullscreen">
        <source src="/video/v1.mp4" type="video/mp4">
        Twoja przeglądarka nie obsługuje odtwarzacza wideo.
      </video>
    </div>

    <div class="cont-ai">
      <h3>Moonlight Densetsu</h3>
      <video class="vds" controls controlsList="nodownload noplaybackrate nofullscreen">
        <source src="/video/v3Moonlight.mp4" type="video/mp4">
        Twoja przeglądarka nie obsługuje odtwarzacza wideo.
      </video>
    </div>

    <div class="cont-ai">
      <h3>Mix</h3>
      <video class="vds" controls controlsList="nodownload noplaybackrate nofullscreen">
        <source src="/video/mix.mp4" type="video/mp4">
        Twoja przeglądarka nie obsługuje odtwarzacza wideo.
      </video>
    </div>

    <div class="cont-ai">
      <h3>Ty jedna na milion</h3>
      <video class="vds" controls controlsList="nodownload noplaybackrate nofullscreen">
        <source src="/video/v2(tyJednaNaMilion).mp4" type="video/mp4">
        Twoja przeglądarka nie obsługuje odtwarzacza wideo.
      </video>
    </div>

  </div>

</template>

<script setup>

</script>

<style>
.container-music>.fk {
  display: flex;
}

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

.container-music {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
}

.cont-music {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  justify-content: space-around;
}

.cont-music>div {
  margin-right: 10px;
}

.vds {
  width: 400px;
  height: 400px;
}

audio {
  height: 30px;
}

@media (max-width: 600px) {
  .vds {
    width: 90%;
    height: 90%;
  }

  audio {
    width: 200px;
  }
}
</style>
