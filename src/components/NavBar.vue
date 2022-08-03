<template>
    <v-app-bar
        app
        color="white"
        class="nav-bar py-2"
        elevation="0"
    >
        <v-container>
            <v-row align="center">
                <v-col cols="6">
                    <div class="d-flex align-center">
                        <v-img
                            alt="Vinos Mi Chile"
                            class="shrink mr-2"
                            contain
                            src="../assets/images/logo.svg"
                            width="250"
                        />
                    </div>

                </v-col>
                <v-col cols="6" class="d-flex justify-end align-center">
                    <div class="nav-list mr-4">
                        <v-btn text>
                            Vinos
                        </v-btn>
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
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'mini-cart': MiniCart
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.nav-bar {
    border-bottom: 1px solid #000;
}
</style>