import Vue from 'vue';
import VueChartkick from 'vue-chartkick';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueChartkick);
Vue.use(Vuetify);

// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
});
