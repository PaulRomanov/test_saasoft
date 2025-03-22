import { createApp } from 'vue';
import App from './App.vue';
import { install as pinia } from './plugins/pinia';
import './assets/styles/base.scss';

const app = createApp(App);
pinia(app);
app.mount('#app');