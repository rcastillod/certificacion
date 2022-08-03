<template>
    <div>

        <v-app-bar
            color="white"
            class="nav-bar"
            elevation="0"
            height="80"
            app
        >
            <v-container>
                <v-row align="center">
                    <v-col cols="6">
                        <div class="d-flex align-center">
                            <a
                                @click="toHome()"
                            >
                                <v-img
                                    alt="Vinos Mi Chile"
                                    class="shrink mr-2"
                                    contain
                                    src="../assets/images/logo.svg"
                                    width="250"
                                />
                            </a>
                        </div>
    
                    </v-col>
                    <v-col cols="6" class="d-flex justify-end align-center">
                        <div class="nav-list mr-4 d-none d-md-block">
                            <v-btn
                                v-for="route in routes"
                                :key="route.title"
                                @click="redirectTo(route.name)"
                                :disabled="currentRoute==route.name"
                                text
                            >
                                {{ route.title }}
                            </v-btn>
                        </div>
                        <mini-cart></mini-cart>
                        <v-app-bar-nav-icon 
                            @click.stop="drawer = !drawer"
                            class="d-block d-md-none"
                        ></v-app-bar-nav-icon>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer 
            v-model="drawer"
            color="#F6FAFF"
            fixed 
            right 
            temporary
        >
            <v-list
                dense
                nav
            >
                <v-list-item
                    v-for="route in routes"
                    :key="route.title"
                    @click="redirectTo(route.name)"
                    :disabled="currentRoute==route.name"
                    link
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ route.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import MiniCart from '@/components/MiniCart.vue'

export default {
    name: 'nav-bar',
    data: function(){
        return {
            drawer: false,
            group: null,
            routes: [
                { title: 'Home', name: 'home' },
                { title: 'Vinos', name: 'vinos' },
                { title: 'Vinos en Promoción', name: 'promociones' },
                { title: 'Accesorios', name: 'accesorios' },
            ],
        }
    },
    computed: {
        currentRoute(){
            return this.$route.name
        }
    },
    methods: {
        toHome() {
            if ( this.$route.name !== 'home' ) {
                this.$router.push('/')
            }
        },
        redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        },
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
    components: {
        'mini-cart': MiniCart
    }
}
</script>

<style scoped lang="scss">
.nav-list {
    a {
        text-decoration: none;
    }
}
</style>