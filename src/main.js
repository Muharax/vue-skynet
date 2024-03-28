import { createApp } from 'vue';
// Importuj główny plik CSS
import './assets/main.css';
import './assets/root.css';

import App from './App.vue';
import router from './components/_Router/router'; // Importuj router



const app = createApp(App);

app.use(router);
app.mount('#app');
