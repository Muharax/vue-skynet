<template>
  <div class="LOGOWANIE loaded">
    <div v-if="authError" class="error-message">{{ authError }}</div>
    <div class="LG">
      <div class="logos">
        <img src="../../assets/logo.svg" alt="" class="logos-SWG" />
      </div>
      <div id="logowanie-s">
        <form @submit.prevent="handleSubmit">
          <div class="name">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path
                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <input type="text" id="first" autoComplete="off" autoFocus name="user" placeholder="Login"
              v-model="username" class="w100" />
          </div>
          <div class="pass">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path
                d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
            </svg>
            <input type="password" id="second" autoComplete="off" name="pass" placeholder="Hasło" v-model="password"
              class="w100" />
          </div>
          <div id="btn-log-in">
            <div class="wrapperBtn">
              <div class="box">
                <button type="submit" class="log-in" id="sub">Sign In</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <img title="Welcome" class="skynet-division" src="../../assets/img/skynet-division-png.png"
          alt="SKYNET DIVISION" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const authError = ref('');
const handleSubmit = () => {
};
</script>
<style scoped>

#sub {
  /* Domyślny wygląd przycisku */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  
}

#sub.log-in {
  background-color: var(--box-shadow);
  color: var(--font-color);
}

#sub.log-in:hover {
  background-color: #45a049;
}

#sub.log-in:active {
  background-color: #359e6b;
}

#sub.log-in:hover {
  animation: buttonPulse 0.5s infinite alternate;
}

.box{
  text-align: center;
}
.wrapperBtn{
  margin-top: 0.4rem;
}






.icon {
  fill: var(--primary);
}
.LOGOWANIE {
  width: 290px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background-color: var(--search);
  border-radius: 5px;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 20px 3px var(--box-shadow);
  align-items: center;
}
.LG {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logos {
  background-color: #000;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 210px;
}
#logowanie-s {
  margin-top: 30px;
}
.logos-SWG {
  margin: 20px;
  object-fit: contain;
  width: 130px;
  animation: pulse 2s infinite;
}
.error-message {
  position: relative;
  top: -25px;
}
.show {
  display: block;
}
.close-btn {
  width: 40px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}
.close-btn span {
  cursor: pointer;
}
.close-btn span:hover {
  color: red
}
.close-btn:hover {
  background-color: rgb(0, 0, 0);
  text-align: center;
}
.name,
.pass {
  margin-top: 2px;
  display: flex;
}
.name input,
.pass input {
  margin-left: 4px;
  background-color: var(--color-background);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 12px;
  color: var(--font-color);
}
.GPSROP {
  font-family: monospace;
}
.rop {
  width: 200px;
  position: relative;
  top: -20px;
}
.skynet-division {
  width: 233px;
  box-shadow: 0px 0px 5px 1px black;
  position: relative;
  bottom: -40px;
  opacity: 0.3;
  transition: 0.2s;
  cursor: help;
}
.skynet-division:hover {
  opacity: 1;
}
@keyframes pulse {
  0% {
    filter: drop-shadow(0px 0px 13px rgba(0, 0, 0, 0.7));
    /* box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); */
  }
  50% {
    filter: drop-shadow(0px 0px 13px rgba(0, 255, 255, 0.7));
    /* box-shadow: 0 0 0 15px rgba(255, 0, 0, 0); */
  }
  100% {
    filter: drop-shadow(0px 0px 13px rgba(0, 0, 0, 0.7));
    /* box-shadow: 0 0 0 15px rgba(255, 0, 0, 0); */
  }
}
@media (max-width: 600px) {
  .LOGOWANIE {
    width: auto;
    min-height: 400px;
    justify-content: center;
    position: relative;
    align-items: center;
    top: auto;
    left: auto;
    transform: scale(0.9);
  }
}
</style>