import Vue from "vue";
import App from "./App.vue";
//import store from "./store/store.js";

import '@/styles/reset.css';
import '@/styles/global.scss';

Vue.config.productionTip = false;

window.vm = new Vue({
	render: h => h(App)
}).$mount("#app");
