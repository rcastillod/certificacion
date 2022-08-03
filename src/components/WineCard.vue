<template>
    <v-card
        class="mx-auto my-12"
        max-width="374"
    >
        <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="250"
            :src="imagen"
        ></v-img>
        <v-card-title>{{nombre}}</v-card-title>
        <v-card-text>
            <div class="my-4 text-subtitle-1">
                Antes: $ {{precionormal}}
            </div>
            <div class="my-4 text-subtitle-1">
                Ahora: $ {{preciopromo}}
            </div>
            <div>{{descripcion}}</div>
            <v-list>
                <v-list-item 
                    v-for="(caracteristica, i) in caracteristicas"
                    :key="i"
                >
                    <v-list-item-content>
                        <v-list-item-title>- {{caracteristica}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="addToCart()"
            >
                Agregar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'wine-card',
    props: {
        id: {
            type: String,
            required: true,
        },
        nombre: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        caracteristicas: {
            type: Array,
            required: true,
        },
        precionormal: {
            type: Number,
            required: true,
        },
        preciopromo: {
            type: Number,
            required: true,
        },
        imagen: {
            type: String,
            required: true,
        },
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        ...mapActions(['addToCartAction']),
        addToCart() {
            let producto = {
                id: this.id,
                count: 1,
                nombre: this.nombre,
                precio: this.preciopromo,
                imagen: this.imagen,
            }
            this.addToCartAction(producto)
        }
    },
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