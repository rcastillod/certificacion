<template>
    <div class="cart">
        <cart-list></cart-list>
        <cart-total></cart-total>
    </div>
</template>

<script>
import CartList from './CartList.vue'
import CartTotal from './CartTotal.vue'

export default {
    name: 'cart-shop',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'cart-list': CartList,
        'cart-total': CartTotal,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.cart {
    background-image: linear-gradient(40deg, #191E2A, #313E53);
    border-radius: .3125rem;
    padding: 1.875rem;
}
</style>