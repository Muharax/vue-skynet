import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import logowanie from './components/Logowanie/logowanie.vue';

// Importuj główny plik CSS
import './assets/main.css'
import './assets/root.css'
import Logowanie from './components/Logowanie/logowanie.vue';

// Tworzenie routera
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: App },
      { path: '/login', component: Logowanie },
    ]
  });

const app = createApp(App);



app.use(router);
app.mount('#app');