<template>
    <v-layout row wrap align-top text-xs-center>
        <v-flex xs12>
            <v-btn @click="getMessages">Get New Messages</v-btn>
        </v-flex>
        <v-flex xs12 sm6>
            <h3>Temperature Data</h3>
            <line-chart
                :data="temperatureData"
                :points="false"
                xtitle="Time" ytitle="Temperature"
                label="Temperature"
                :messages="{ empty: 'No temperature data' }"
                :library="{ backgroundColor: 'transparent' }">
            </line-chart>
        </v-flex>
        <v-flex xs12 sm6>
            <h3>Pressure Data</h3>
            <line-chart
                :data="pressureData"
                :points="false"
                xtitle="Time"
                ytitle="Pressure"
                label="Pressure"
                :messages="{ empty: 'No pressure data' }"
                :library="{ backgroundColor: 'transparent' }">
            </line-chart>
        </v-flex>
        <v-flex xs12 sm6>
            <h3>X-Axis Acceleration Data</h3>
            <line-chart
                :data="xAccData"
                :points="false"
                xtitle="Time"
                ytitle="X Acceleration"
                label="X Acceleration"
                :messages="{ empty: 'No accelerometer data' }"
                :library="{ backgroundColor: 'transparent' }">
            </line-chart>
        </v-flex>
        <v-flex xs12 sm6>
            <h3>Y-Axis Acceleration Data</h3>
            <line-chart
                :data="yAccData"
                :points="false"
                xtitle="Time"
                ytitle="Y Acceleration"
                label="Y Acceleration"
                :messages="{ empty: 'No accelerometer data' }"
                :library="{ backgroundColor: 'transparent' }">
            </line-chart>
        </v-flex>
        <v-flex xs12 sm6>
            <h3>Z-Axis Acceleration Data</h3>
            <line-chart
                :data="zAccData"
                :points="false"
                xtitle="Time"
                ytitle="Z Acceleration"
                label="Z Acceleration"
                :messages="{ empty: 'No accelerometer data' }"
                :library="{ backgroundColor: 'transparent' }">
            </line-chart>
        </v-flex>
    </v-layout>
</template>


<script>
    import axios from "axios";
    import { mapState } from "vuex";

    export default {
        name: "Dashboards",

        data() {
            return {
                backendResponse: "",
                temperatureData: [],
                pressureData: [],
                photoData: [],
                xAccData: [],
                yAccData: [],
                zAccData: [],
            }
        },

        computed: {
            ...mapState({
                apiUsr: state => state.usr,
                apiPwd: state => state.pwd,
                deviceId: state => state.sigfoxDeviceId,
                payload: state => state.payload,
            }),
        },

        methods: {
            getMessages() {
                if (this.apiUsr.length > 0 && this.apiPwd.length > 0 && this.deviceId.length > 0 && this.payload.length > 0) {
                    let data = {
                        api_usr: this.apiUsr,
                        api_pwd: this.apiPwd,
                        device_id: this.deviceId
                    };
                    let url = "http://localhost:6969/api/device";
                    axios
                        .post(url, data)
                        .then(response => {
                            this.backendResponse = response["data"];
                            this.parseData(response["data"]["data"]);
                        })
                        .catch(e => {
                            console.error("error " + e);
                            console.log(url);
                        });
                }
            },
            parseData(data) {
                console.log("data", data);
                let parser = require("sigfox-parser");
                this.temperatureData = [];
                this.pressureData = [];
                this.xAccData = [];
                this.yAccData = [];
                this.zAccData = [];
                for (let i = 0; i < data.length; i++) {
                    // let time = moment.unix(data[i]["time"]).format("YYYY/MM/DD HH:MM:SS");
                    let decoded = parser(data[i]["data"], this.payload);
                    let temperature = decoded.temperature / 100;
                    let pressure = decoded.pressure / 3;
                    let xAcc = decoded.xAcc / 250;
                    let yAcc = decoded.yAcc / 250;
                    let zAcc = decoded.zAcc / 250;
                    this.temperatureData.push([data[i]["time"], temperature]);
                    this.pressureData.push([data[i]["time"], pressure]);
                    this.xAccData.push([data[i]["time"], xAcc]);
                    this.yAccData.push([data[i]["time"], yAcc]);
                    this.zAccData.push([data[i]["time"], zAcc]);
                }
            },
        },

        mounted() {
            this.getMessages();
        },
    }
</script>

<style scoped>
</style>
