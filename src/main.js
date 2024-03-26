import { createApp } from 'vue';
import App from './App.vue';
import router from './components/_Router/router'; // Importuj router

// Importuj główny plik CSS
import './assets/main.css';
import './assets/root.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
