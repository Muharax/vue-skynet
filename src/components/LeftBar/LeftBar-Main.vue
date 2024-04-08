<template>
  <div :class="['sidebar', expanded ? 'expanded' : 'no-expanded']">
    <div key="0" class="menu-item" :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']"
      @click="toggleExpanded">
      <div class="menu-ico-ham">
        <!-- Warunkowe wyświetlanie ikon -->
        <svg v-if="expanded" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <!-- Ikona A -->
          <path
            d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <!-- Ikona B -->
          <path
            d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
        </svg>
      </div>
    </div>
    <!-- ============================= LOGIN ============================== -->
    <router-link to="/login" title="" class="menu-item"
      :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']" @click="handleItemClick('/login')">
      <div class="menu-ico" :class="[$route.path === '/login' ? 'menu-ico-active' : '']">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z" />
        </svg>
      </div>
      <div class="description" :class="[
        expanded ? 'show-description' : '',
        $route.path === '/login' ? 'activeDescription' : ''
      ]">
        Twoje konto
      </div>
    </router-link>
    <!-- ============================= SETTINGS ============================== -->
    <router-link to="/settings" title="" class="menu-item"
      :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']" @click="handleItemClick('/settings')">
      <div class="menu-ico" :class="[$route.path === '/settings' ? 'menu-ico-active' : '']">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
        </svg>
      </div>
      <div class="description" :class="[expanded ? 'show-description' : '',
      $route.path.startsWith('/settings') ? 'activeDescription' : ''
      ]">
        Ustawienia
      </div>
    </router-link>
    <hr>
    <!-- ============================= AI ============================== -->
    <!-- <router-link to="/Ai" title="" class="menu-item"
      :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']" @click="handleItemClick('/Ai')">
      <div class="menu-ico" :class="[$route.path === '/Ai' ? 'menu-ico-active' : '']">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M80-120v-80h800v80H80Zm680-160v-560h60v560h-60Zm-600 0 210-560h100l210 560h-96l-50-144H308l-52 144h-96Zm176-224h168l-82-232h-4l-82 232Z" />
        </svg>
      </div>
      <div class="description" :class="[expanded ? 'show-description' : '',
      $route.path.startsWith('/Ai') ? 'activeDescription' : ''
      ]">
        AI
      </div>
    </router-link> -->
    <!-- ============================= HOME ============================== -->
    <router-link to="/" title="" class="menu-item" :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item',
    ($route.path === '/' || $route.path.startsWith('/vue-skynet/')) ? 'activeTab' : '']" @click="handleItemClick('/')">
      <div class="menu-ico"
        :class="[expanded ? 'show-description' : '', ($route.path === '/' || $route.path.startsWith('/vue-skynet/')) ? 'menu-ico-active' : '']">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z" />
        </svg>
      </div>
      <div class="description"
        :class="[expanded ? 'show-description' : '', ($route.path === '/' || $route.path.startsWith('/vue-skynet/')) ? 'activeDescription' : '']">
        Strona główna
      </div>
    </router-link>


    <!-- ============================= Ads ============================== -->
    <!-- <router-link to="/Ads" title="" class="menu-item"
      :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']" @click="handleItemClick('/Ads')">
      <div class="menu-ico" :class="[$route.path === '/Ads' ? 'menu-ico-active' : '']">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/></svg>
      </div>
      <div class="description" :class="[expanded ? 'show-description' : '',
  $route.path.startsWith('/Ads') ? 'activeDescription' : ''
  ]">
        Ogłoszenia
      </div>
    </router-link> -->

    <!-- ============================= Unit-Converter ============================== -->
    <router-link to="/Unit-Converter" title="" class="menu-item"
      :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']" @click="handleItemClick('/Unit-Converter')">
      <div class="menu-ico" :class="[$route.path === '/Unit-Converter' ? 'menu-ico-active' : '']">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M221-120q-45 0-73-24t-28-64q0-32 17-51.5t43-19.5q25 0 42.5 17t17.5 41q0 5-.5 9t-1.5 9q5-1 8.5-5.5T252-221l62-339h-74q-17 0-28.5-11.5T200-600q0-17 11.5-28.5T240-640h89l21-114q7-38 37.5-62t72.5-24q44 0 72 26t28 65q0 30-17 49.5T500-680q-25 0-42.5-17T440-739q0-5 .5-9t1.5-9q-6 2-9 6t-5 12l-17 99h149q17 0 28.5 11.5T600-600q0 15-9.5 26T567-561l53 60 53-60q-14-2-23.5-13t-9.5-26q0-17 11.5-28.5T680-640h120q17 0 28.5 11.5T840-600q0 17-11.5 28.5T800-560h-22L673-440l105 120h22q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H680q-17 0-28.5-11.5T640-280q0-15 9.5-26t23.5-13l-53-61-53 61q14 2 23.5 13t9.5 26q0 17-11.5 28.5T560-240H440q-17 0-28.5-11.5T400-280q0-17 11.5-28.5T440-320h22l105-120-105-120h-66l-64 344q-8 45-37 70.5T221-120Z" />
        </svg>
      </div>
      <div class="description" :class="[expanded ? 'show-description' : '',
      $route.path.startsWith('/Unit-Converter') ? 'activeDescription' : ''
      ]">
        Konwerter Jednostek
      </div>
    </router-link>
    <!-- ======================================================================= -->
    <router-link to="/geometry" class="menu-item" :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']">
      <div class="menu-ico" :class="[$route.path === '/geometry' ? 'menu-ico-active' : '']">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24"><path d="M12 44h7.684l-4.648 16.732A1.003 1.003 0 0 0 16 62h6a1 1 0 0 0 .964-.732L27.76 44h8.479l4.797 17.268A1 1 0 0 0 42 62h6a1 1 0 0 0 .964-1.268L44.316 44H52c2.757 0 5-2.243 5-5V12c0-2.757-2.243-5-5-5H37V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v4H12c-2.757 0-5 2.243-5 5v27c0 2.757 2.243 5 5 5zm9.24 16h-3.925l4.444-16h3.925L21.24 60zm25.445 0H42.76l-4.444-16h3.925l4.444 16zM29 4h6v3h-6V4zM9 12c0-1.654 1.346-3 3-3h40c1.654 0 3 1.346 3 3v27c0 1.654-1.346 3-3 3H12c-1.654 0-3-1.346-3-3V12z"></path><path d="M11 14h2v9h-2zM11 27h2v9h-2zM35 38h16v2H35zM15 38h16v2H15zM34 12h17v2H34zM34 16h17v2H34zM34 20h17v2H34zM16 36h34a1 1 0 0 0 .507-1.862L23.733 18.389l1.125-1.874-1.715-1.029-1.134 1.889-5.502-3.237A.999.999 0 0 0 15 15v20a1 1 0 0 0 1 1zm1-2v-3h3v3h-3zm3.98-14.91-.837 1.396 1.715 1.029.847-1.411L46.328 34H22v-4a1 1 0 0 0-1-1h-4V16.749l3.98 2.341z"></path></svg>
      </div>
      <div class="description" :class="[
        expanded ? 'show-description' : '',
        $route.path === '/geometry' ? 'activeDescription' : ''
      ]">
        Geometria
      </div>
    </router-link>
        <!-- ==============================GAME================================== -->
       <router-link to="/game" class="menu-item" :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']">
      <div class="menu-ico" :class="[$route.path === '/game' ? 'menu-ico-active' : '']">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g fill-rule="evenodd"><path d="M21.144 2.944a.5.5 0 0 0-.196-.98l-3.536.707a.5.5 0 0 0 .196.98l3.536-.707Zm-6.607 8.14a.5.5 0 0 0 .707.708l5.448-5.449a.5.5 0 0 0-.707-.707l-5.448 5.449Z"></path><path d="M9.529 11.85a.5.5 0 1 0-.708-.707l-2.27 2.271a.5.5 0 1 0 .706.707l2.272-2.27Zm8.335-8.335a.5.5 0 0 0-.707-.707l-5.351 5.35a.5.5 0 1 0 .707.708l5.351-5.351Zm1.985 2.377a.5.5 0 0 0 .98.196l.707-3.536a.5.5 0 0 0-.98-.196l-.707 3.536Zm-10.47 10.35a.5.5 0 1 0 .707.708l2.217-2.217a.5.5 0 1 0-.708-.707L9.38 16.243Z"></path><path d="m5.841 13.412 4.247 4.247a.496.496 0 0 1-.002.705.503.503 0 0 1-.705.002L5.134 14.12a.496.496 0 0 1 .002-.705.503.503 0 0 1 .705-.002Zm-1.414 1.414 4.247 4.247a1.503 1.503 0 0 0 2.119-.002 1.496 1.496 0 0 0 .002-2.12l-4.247-4.246a1.503 1.503 0 0 0-2.119.002 1.496 1.496 0 0 0-.002 2.12Z"></path><path d="m3.722 17.657.707.707 2.121-2.121-.707-.707zM7.964 17.657l-.707-.707-2.12 2.121.706.707z"></path><path d="M5.136 21.9a2.5 2.5 0 1 0-3.535-3.536A2.5 2.5 0 0 0 5.136 21.9zM2.308 19.07a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.121-2.12zm10.76-9.346a.5.5 0 1 0 .707.707l4.089-4.089a.5.5 0 0 0-.707-.707l-4.089 4.089zm-5.104 5.103a.5.5 0 1 0 .708.708l2.24-2.242a.5.5 0 1 0-.706-.707l-2.242 2.241z"></path><path d="M2.856 2.944a.5.5 0 0 1 .196-.98l3.536.707a.5.5 0 0 1-.196.98l-3.536-.707Zm11.765 13.299a.5.5 0 1 1-.707.707L3.308 6.343a.5.5 0 0 1 .707-.707L14.62 16.243Z"></path><path d="M6.136 3.515a.5.5 0 0 1 .707-.707L17.45 13.414a.5.5 0 1 1-.707.707L6.136 3.515ZM4.151 5.892a.5.5 0 0 1-.98.196l-.707-3.536a.5.5 0 0 1 .98-.196l.707 3.536Z"></path><path d="m18.159 13.412-4.247 4.247a.496.496 0 0 0 .002.705.503.503 0 0 0 .705.002l4.247-4.247a.496.496 0 0 0-.002-.705.503.503 0 0 0-.705-.002Zm1.414 1.414-4.247 4.247a1.503 1.503 0 0 1-2.119-.002 1.496 1.496 0 0 1-.002-2.12l4.247-4.246a1.503 1.503 0 0 1 2.119.002c.588.588.588 1.534.002 2.12Z"></path><path d="m20.278 17.657-.707.707-2.121-2.121.707-.707zM16.036 17.657l.707-.707 2.12 2.121-.706.707z"></path><path d="M18.864 21.9a2.5 2.5 0 1 1 3.535-3.536 2.5 2.5 0 0 1-3.535 3.536zm2.828-2.829a1.5 1.5 0 1 0-2.121 2.121 1.5 1.5 0 0 0 2.121-2.12zm-5.656-4.243a.5.5 0 1 1-.708.708L6.136 6.343a.5.5 0 0 1 .707-.707l9.193 9.192z"></path></g></svg>
      </div>
      <div class="description" :class="[
        expanded ? 'show-description' : '',
        $route.path === '/game' ? 'activeDescription' : ''
      ]">
        Game Zone
      </div>
    </router-link>
    <!-- ============================= LOGOUT ============================== -->
    <router-link to="/logout" title="" class="menu-item"
      :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']" @click="handleItemClick('/logout')">
      <div class="menu-ico" :class="[$route.path === '/logout' ? 'menu-ico-active' : '']">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
        </svg>
      </div>
      <div class="description" :class="[
        expanded ? 'show-description' : '',
        $route.path === '/logout' ? 'activeDescription' : ''
      ]">
        Wyloguj
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const expanded = ref(() => {
  const savedExpanded = localStorage.getItem('menuExpanded');
  return savedExpanded ? JSON.parse(savedExpanded) : false;
});

const toggleExpanded = () => {
  expanded.value = !expanded.value;
};

const handleItemClick = (path) => {
  router.push(path);
};

watch(expanded, () => {
  localStorage.setItem('menuExpanded', JSON.stringify(expanded.value));
});

const checkScreenWidth = () => {
  expanded.value = window.innerWidth >= 600;
};

onMounted(checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
</script>


<style>
.dropdown-menu{
  position: absolute;
  top: 100%;
  left: 20%;
  display: flex;
  flex-direction: column;
}
.menu-item {
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 4px 14px 4px 14px;
  cursor: pointer;

  color: var(--font-color);
}

.menu-item:hover>* {
  transition: 0.3s;
  color: var(--font-color-active);
  fill: var(--font-color-active);
}

.menu-ico {
  width: 30px;
  height: 24px;
}

.menu-ico-active {
  fill: var(--font-color-active);
}

.expanded {
  min-width: 13rem;
  /* animation: slideIn 0.5s ease forwards; */
}

.no-expanded {
  align-items: center;
}

.no-expanded-menu-item {
  width: 100%;
  display: flex;
  justify-content: center;
}

.activeTab,
.activeDescription {
  color: var(--font-color-active) !important;
  transition: 300ms;
}

.menu-darker {
  box-shadow: inset 3px 1px 9px 0px #000;
  background-color: rgb(144, 144, 144);
  /* background: linear-gradient(to bottom, #b1b1b1, #d8d8d8); */
  /* background: linear-gradient(to bottom, #cdcdcd, #a9a9a9, #cdcdcd); */
  /* background: radial-gradient(circle, #00ff99, #0099ff); */
  /* background: linear-gradient(45deg, #ff0000, #ffff00); */
  font-size: 14px;
}

.description {
  display: none;
  margin-left: 5px;
}

.show-description {
  display: block;
}

.sidebar {
  height: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: 0.2s;
}

.sidebar>*:first-child {
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: row-reverse;
}

.sidebar>*:last-child {
  margin-top: auto;
  margin-bottom: 1rem;
}

@keyframes slideIn {
  0% {

    transform: translateX(-20%);
  }

  100% {
    transform: translateX(0);
  }
}



@media screen and (max-width: 600px) {}
</style>
