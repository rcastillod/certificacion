GettersmapGetters<template>
    <div class="cart-total d-flex flex-column">
        <div class="cart-total__subtotal d-flex justify-space-between">
            <div class="text-h5 font-weight-light">Subtotal Productos</div>
            <span>{{getCartSubTotal}}</span>
        </div>
        <div class="cart-total__discount d-flex justify-space-between">
            <div class="text-h5 font-weight-light">Descuentos</div>
            <span>{{getCartDiscount}}</span>
        </div>
        <div class="cart-total__total d-flex justify-space-between">
            <div class="text-h5 font-weight-light">Total</div>
            <span>0</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'cart-total',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['getCartSubTotal', 'getCartDiscount'])
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
.cart-total {
    color: #fff;
    gap: .625rem;
}
</style>