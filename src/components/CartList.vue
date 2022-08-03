<template>
    <v-row dense>
        <v-col
            v-for="(producto, i) in carrito"
            :key="i"
            cols="12"
        >
            <v-card
            color="transparent"

            >
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title
                            class="text-h5"
                            v-text="producto.nombre"
                        ></v-card-title>
                        <v-card-subtitle v-text="producto.precio"></v-card-subtitle>
                    </div>
                    <v-avatar
                        class="ma-3"
                        size="125"
                        tile
                    >
                        <v-img :src="producto.imagen"></v-img>
                    </v-avatar>
                </div>
            </v-card>
        </v-col>
        <v-divider
            v-show="carrito.length > 0"
            class="align-self-start"
            dark
        ></v-divider>
    </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'cart-list',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['carrito'])
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>