<template>
    <section class="tienda">
        <v-container>
            <v-row>
                <v-col cols="12" sm="4">
                    <!-- Carrito -->
                </v-col>
                <v-col cols="12" sm="8">
                    <!-- Listado -->
                    <v-row>
                        <v-col 
                            v-for="(vino, i) in vinos"
                            :key="i"
                            cols="12" 
                            sm="4"
                        >
                            <wine-card
                                :id="vino.id"
                                :nombre="vino.nombre"
                                :descripcion="vino.descripcion"
                                :caracteristicas="vino.caracteristicas"
                                :precionormal="vino.precio_normal"
                                :preciopromo="vino.precio_promo"
                                :imagen="vino.imagen"
                            ></wine-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import WineCard from '@/components/WineCard.vue'

export default {
    name: 'vinos-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['vinos'])
    },
    //methods: {}
    // watch: {},
    components: {
        'wine-card': WineCard
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>