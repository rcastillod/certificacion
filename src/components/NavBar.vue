<template>
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
                    <div class="nav-list mr-4">
                        <router-link to="/vinos">
                            <v-btn text>
                                Vinos
                            </v-btn>
                        </router-link>
                        <v-btn text>
                            Vinos en Promoción
                        </v-btn>
                        <v-btn text>
                            Accesorios
                        </v-btn>
                    </div>
                    <mini-cart></mini-cart>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import MiniCart from '@/components/MiniCart.vue'

export default {
    name: 'nav-bar',
    data: function(){
        return {}
    },
    methods: {
        toHome() {
            if ( this.$route.name !== 'home' ) {
                this.$router.push('/')
            }
        }
    },
    components: {
        'mini-cart': MiniCart
    }
}
</script>

<style scoped lang="scss">
.nav-bar {
    border-bottom: 1px solid #000;
}
</style>