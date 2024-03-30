<template>
  <div :class="['sidebar', expanded ? 'expanded' : 'no-expanded']">
    <div key="0" class="menu-item" :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item']"
      @click="toggleExpanded">
      <div class="menu-ico">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
    </div>
    <!-- ============================= LOGIN ============================== -->
    <router-link to="/login" title="" class="menu-item setHover"
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
    <router-link to="/settings" title="" class="menu-item setHover"
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
    <router-link to="/Ai" title="" class="menu-item setHover"
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
    </router-link>
    <!-- ============================= HOME ============================== -->
    <router-link to="/" title="" class="menu-item setHover" :class="[expanded ? 'expanded-menu-item' : 'no-expanded-menu-item',
  ($route.path === '/' || $route.path.startsWith('/vue-skynet/')) ? 'activeTab' : '']" @click="handleItemClick('/')">
      <div class="menu-ico" :class="[expanded ? 'show-description' : '', ($route.path === '/' || $route.path.startsWith('/vue-skynet/')) ? 'menu-ico-active' : '']">
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

    <!-- ============================= LOGOUT ============================== -->
    <router-link to="/logout" title="" class="menu-item setHover"
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
.menu-item {
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 4px 14px 4px 14px;
  cursor: pointer;
}
.menu-ico {
  width: 30px;
  height: 24px;
}

.menu-ico>svg:hover {
  fill: var(--font-color-active);
}
.menu-ico-active{
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



@media screen and (max-width: 600px) {

}
</style>
