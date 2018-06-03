<template>
    <v-flex xs12 sm4 md3>
        <v-expansion-panel inset>
            <v-expansion-panel-content>
                <div slot="header">API Configuration</div>
                <v-card>
                    <v-chip outline>User: {{apiUsr}}</v-chip>
                </v-card>
                <v-card>
                    <v-chip outline>Password: {{apiPwd}}</v-chip>
                </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
                <div slot="header">Device ID</div>
                <v-card>
                    <v-card-text>
                        {{deviceId}}
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-flex>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: "DashboardLayout",

        computed: {
            ...mapState({
                apiUsr: state => state.usr,
                apiPwd: state => state.pwd,
                deviceId: state => state.sigfoxDeviceId,
            })
        },


    }
</script>

<style scoped>

</style>
