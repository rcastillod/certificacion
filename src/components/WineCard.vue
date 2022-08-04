<template>
    <v-card>
        <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
        </template>
        <v-img :src="imagen"></v-img>
        <v-card-title class="text-h6">{{nombre}}</v-card-title>
        <v-card-text>
            <div class="text-subtitle-1 text-decoration-line-through">
                Antes: $ {{precionormal.toLocaleString('es-CL')}}
            </div>
            <div class="text-subtitle-1 secondary--text">
                Ahora: $ {{preciopromo.toLocaleString('es-CL')}}
            </div>
            <div class="mt-3">{{descripcion}}</div>
        </v-card-text>

        <v-card-actions v-if="caracteristicas!=undefined">
            <v-btn text>
                Características
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="show">
                <v-list>
                    <v-list-item 
                        v-for="(caracteristica, i) in caracteristicas"
                        :key="i"
                        dense
                    >
                        <v-list-item-content class="py-0">
                            <v-list-item-title class="text-body-2">- {{caracteristica}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
        </v-expand-transition>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="d-flex justify-center py-6">
            <v-btn
                color="secondary"
                outlined
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
        return {
            show: false,
        }
    },
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
    }
}
</script>

<style scoped>
    
</style>