<template>
    <div class="cart-total d-flex flex-column">
        <div class="cart-total__subtotal d-flex justify-space-between">
            <div class="text-h5 font-weight-light">Subtotal Productos</div>
            <span>$ {{getCartSubTotal.toLocaleString('es-CL')}}</span>
        </div>
        <div class="cart-total__discount d-flex justify-space-between">
            <div class="text-h5 font-weight-light">Descuentos</div>
            <span>$ {{getCartDiscount.toLocaleString('es-CL')}}</span>
        </div>
        <div class="cart-total__total d-flex justify-space-between">
            <div class="text-h5 font-weight-light">Total</div>
            <span>$ {{getCartTotal.toLocaleString('es-CL')}}</span>
        </div>
        <div
            v-if="carrito.length > 0"
            class="cart-total__buton text-center mt-3">
            <v-btn
                color="secondary"
                dark
                @click="toCheckout"
            >
                Pagar
            </v-btn>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'cart-total',
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['carrito']),
        ...mapGetters(['getCartSubTotal', 'getCartDiscount', 'getCartTotal'])
    },
    methods: {
        toCheckout() {
            this.$router.push('/checkout')
        }
    }
}
</script>

<style scoped lang="scss">
.cart-total {
    border-top: 1px solid rgba(#000, .2);
    color: #fff;
    gap: .625rem;
    padding-top: 1.25rem;
}
</style>