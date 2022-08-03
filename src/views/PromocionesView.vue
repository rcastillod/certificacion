<template>
    <div>
        <heading-section title="Tienda"></heading-section>
        <section class="tienda py-16">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <cart-shop></cart-shop>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-row>
                            <v-col 
                                v-for="(promocion, i) in promociones"
                                :key="i"
                                class="d-flex align-stretch"
                                cols="12" 
                                sm="6"
                                md="4"
                            >
                                <wine-card
                                    :id="promocion.id"
                                    :nombre="promocion.nombre"
                                    :descripcion="promocion.descripcion"
                                    :caracteristicas="promocion.caracteristicas"
                                    :precionormal="promocion.precio_normal"
                                    :preciopromo="promocion.precio_promo"
                                    :imagen="promocion.imagen"
                                ></wine-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import HeadingSection from '@/components/HeadingSection.vue'
import WineCard from '@/components/WineCard.vue'
import Cart from '@/components/Cart.vue'

export default {
    name: 'promociones-view',
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['promociones'])
    },
    components: {
        'heading-section': HeadingSection,
        'wine-card': WineCard,
        'cart-shop': Cart
    }
}
</script>

<style scoped>
    
</style>