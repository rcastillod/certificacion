<template>
    <div>
        <div 
            v-for="(producto, i) in carrito"
            :key="i"
            cols="12"
            class="cart-list"
        >
            <div class="cart-list__item">
                <div 
                    class="cart-list__remove" 
                    @click="removeProduct(producto.id)"
                >
                    <v-badge
                        color="primary"
                        content="x"
                    >
                    </v-badge>
                </div>
                <div class="cart-list__image">
                    <img :src="producto.imagen" alt="Product">
                </div>
                <div class="card-list__info">
                    <div class="name white--text">
                        {{producto.nombre}}
                        <v-badge
                            :content="`x ${producto.count}`"
                            :value="producto.count"
                            class="ml-2"
                            color="secondary"
                        >
                        </v-badge>
                    </div>
                    <div class="price white--text">$ {{producto.precio.toLocaleString('es-CL')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'cart-list',
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['carrito'])
    },
    methods: {
        ...mapActions(['removeProductAction']),
        removeProduct(id) {
            this.removeProductAction(id)
        }
    }
}
</script>

<style scoped lang="scss">
.cart-list {
    padding-block: 20px;
    &:not(:last-of-type) {
        border-bottom: 1px solid rgba(#fff, .1);
    }

    &__item {
        display: grid;
        gap: 1.25rem;
        grid-template-columns: 1.875rem 5rem auto;
    }
    &__remove {
        display: grid;
        place-items: center;
        .v-badge {
            cursor: pointer;
        }
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