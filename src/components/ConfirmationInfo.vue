<template>
    <div class="confirmation-info">
        <h3 class="text-h3 font-weight-light">Felicitaciones</h3>
        <p class="text-body-1">Tu compra N° {{orderNumber}} en Vinos Mi Chile ha sido exitosa!</p>
        <p class="text-body-1">A continuación te dejamos un resumen de la compra:</p>
        <div class="resumen">
            <div 
                v-for="(producto, i) in carrito"
                :key="i"
                cols="12"
                class="cart-list"
            >
                <div class="cart-list__item">
                    <div class="cart-list__image">
                        <img :src="producto.imagen" alt="Product">
                    </div>
                    <div class="card-list__info">
                        <div class="name">
                            {{producto.nombre}}
                            <v-badge
                                :content="`x ${producto.count}`"
                                :value="producto.count"
                                class="ml-2"
                                color="secondary"
                            >
                            </v-badge>
                        </div>
                        <div class="price">$ {{producto.precio.toLocaleString('es-CL')}}</div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-space-between align-center mt-5">
                <div class="text-h5 font-weight-light">Total: {{getCartTotal}}</div>
                <v-btn
                    color="secondary"
                    @click="confirmToHome"
                >
                    Volver al Home
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'confirmation-info',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['carrito']),
        ...mapGetters(['getCartTotal']),
        orderNumber() {
            return Math.floor(Math.random()*1000);
        }
    },
    methods: {
        ...mapActions(['cleanCartAction']),
        confirmToHome() {
            window.localStorage.clear();
            this.cleanCartAction()
            this.$router.push('/')
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.cart-list {
    padding-block: 20px;
    &:not(:last-of-type) {
        border-bottom: 1px solid rgba(#000, .1);
    }

    &__item {
        display: grid;
        gap: 1.25rem;
        grid-template-columns: 1.875rem auto;
    }
    &__image {
        & > img {
            max-width: 100%;
            vertical-align: middle;
        }
    }
    &__info {
        color: #fff;
    }
}
</style>