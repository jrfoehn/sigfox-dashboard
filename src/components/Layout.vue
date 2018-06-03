<template>
    <div id='layout'>
        <v-navigation-drawer clipped fixed v-model="drawer" app>
            <v-list dense>
                <router-link :to="{ 'name': 'configuration' }" class='link-to-route'>
                    <v-list-tile  class='credential-tile'>
                        <v-list-tile-action>
                            <v-icon>account_box</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Sigfox API Configuration</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
                <router-link :to="{ name: 'dashboards' }" class='link-to-route'>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Dashboards</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Sigfox Dashboard</v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "layout",
        props: {
            source: String
        },
        data () {
            return {
                drawer: false,
            }
        }
    }
</script>

<style scoped>
    .link-to-route {
        text-decoration: none;
        color: white;
    }
</style>
