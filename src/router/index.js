import Vue from  'vue';
import VueRouter from 'vue-router';
import Configuration from '../components/Configuration';
import Dashboards from '../components/Dashboards';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'dashboards',
        component: Dashboards,
    },
    {
        path: '/configuration',
        name: 'configuration',
        component: Configuration,
    },
];

export default new VueRouter({ routes });
