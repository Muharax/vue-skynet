import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

// Importuj główny plik CSS
import './assets/main.css'

// Tworzenie routera
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: App },
    ]
  });



const app = createApp(App);
app.use(router);
app.mount('#app');