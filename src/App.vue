<template>
    <v-app id="inspire" dark>
        <layout></layout>
        <v-content>
            <v-container fluid fill-height grid-list-md>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app fixed>
            <span>&copy; Jean-Robin Foehn</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Layout from './components/Layout';

    export default {
        name: 'app',
        components: {
            Layout,
        },
    };
</script>

<style lang="scss">
    body {
        background-color: #303030;
    }
</style>
