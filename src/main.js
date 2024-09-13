import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons';
import "swiper/swiper-bundle.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Vue.config.productionTip = false;


const app = createApp(App);

app.mixin({
  mounted() {
    AOS.init(); // Initialize AOS
  },
});

createApp(App).use(store).use(router).mount('#app')
