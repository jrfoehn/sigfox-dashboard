import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeObject = {
    strict: true,
    state: {
        usr: '',
        pwd: '',
        sigfoxDeviceId: '',
        payload: 'temperature::uint:16:little-endian pressure::uint:16:little-endian photo::uint:16:little-endian xAcc::int:16:little-endian yAcc::int:16:little-endian zAcc::int:16:little-endian',
    },
    mutations: {
        setUsr(state, apiUsr) {
            state.usr = apiUsr;
        },
        setPwd(state, apiPwd) {
            state.pwd = apiPwd;
        },
        setDeviceId(state, deviceId) {
            state.sigfoxDeviceId = deviceId;
        },
        setPayload(state, payload) {
            state.payload = payload;
        },
    },
};

export default new Vuex.Store(storeObject);
