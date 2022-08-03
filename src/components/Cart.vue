<template>
    <div class="cart">
        <h3 class="text-h5 font-weight-light mb-5 white--text">Bolsa de Compra Vinos Mi Chile</h3>
        <cart-list></cart-list>
        <cart-total></cart-total>
    </div>
</template>

<script>
import CartList from './CartList.vue'
import CartTotal from './CartTotal.vue'

export default {
    name: 'cart-shop',
    data: function(){
        return {}
    },
    components: {
        'cart-list': CartList,
        'cart-total': CartTotal,
    }
}
</script>

<style scoped lang="scss">
.cart {
    background-image: linear-gradient(40deg, #191E2A, #313E53);
    border-radius: .3125rem;
    padding: 1.875rem;
}
</style>