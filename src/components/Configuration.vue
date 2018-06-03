<template>
    <v-layout justify-left align-center>
        <v-flex>
            <v-text-field v-model="usr" label="API User" required></v-text-field>
            <v-text-field v-model="pwd" label="API Password" required></v-text-field>
            <v-text-field v-model="sigfoxDeviceId" label="Sigfox Device Id" required></v-text-field>
            <v-text-field v-model="sigfoxPayload" label="Sigfox Payload" required></v-text-field>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: "Configuration",

    computed: {
        usr: {
            get() {
                return this.$store.state.usr;
            },
            set(value) {
                this.$store.commit("setUsr", value);
            },
        },
        pwd: {
            get() {
                return this.$store.state.pwd;
            },
            set(value) {
                this.$store.commit("setPwd", value);
            },
        },
        sigfoxDeviceId: {
            get() {
                return this.$store.state.sigfoxDeviceId;
            },
            set(value) {
                this.$store.commit("setDeviceId", value);
            },
        },
        sigfoxPayload: {
            get() {
                return this.$store.state.payload;
            },
            set(value) {
                this.$store.commit("setPayload", value);
            },
        },
    },

};
</script>

<style scoped>

</style>
