<template>
  <div class="clock-container">
    <div class="clock">
      <div class="needle hour" :style="{ transform: `translate(-50%, -100%) rotate(${hourAngle}deg)` }">
      </div>

      <div class="needle minute" :style="{ transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)` }">
      </div>

      <div class="needle second" :style="{ transform: `translate(-50%, -100%) rotate(${secondAngle}deg)` }">
      </div>

      <div class="center-point"></div>
    </div>
    <div class="time">{{ currentTime }}</div>
    <div class="date">{{ currentDate }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const currentTime = ref<string>('');
const currentDate = ref<string>('');

const days: string[] = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
const months: string[] = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

const setTime = () => {
  const time: Date = new Date();
  const month: string = months[time.getMonth()];
  const day: string = days[time.getDay()];
  const hours: number = time.getHours();
  const minutes: number = time.getMinutes();

  const formatTime = (value: number) => value < 10 ? '0' + value : String(value);

  currentTime.value = `${formatTime(hours)}:${formatTime(minutes)}`;
  currentDate.value = `${day}, ${month} ${time.getDate()}`;
};

const { hourAngle, minuteAngle, secondAngle } = {
  hourAngle: ref<number>(0),
  minuteAngle: ref<number>(0),
  secondAngle: ref<number>(0),
};

const updateClockHands = () => {
  const time: Date = new Date();
  hourAngle.value = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  minuteAngle.value = time.getMinutes() * 6;
  secondAngle.value = time.getSeconds() * 6;
};

onMounted(() => {
  updateClockHands();
  setTime();
  setInterval(() => {
    updateClockHands();
    setTime();
  }, 1000);
});

</script>

<style scoped>

.clock-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.clock {
  position: relative;
  width: 200px;
  height: 200px;
}

.needle {
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 2px;
  transform-origin: bottom center;
  transition: 0.5s ease-out;
}

.needle.hour {
  transform: translate(-50%, -100%) rotate(0deg);
}

.needle.minute {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
}

.needle.second {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: #e74c3c;
}

.center-point {
  background-color: #e74c3c;
  width: 7px;
  height: 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.center-point::after {
  content: '';
  background-color: var(--primary-color);
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.time {
  font-size: 60px;
}

.date {
  color: #aaa;
  font-size: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
</style>
