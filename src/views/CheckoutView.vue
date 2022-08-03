<template>
    <div>
        <heading-section title="Checkout"></heading-section>
        <section class="checkout py-16">
            <v-container>
                <v-row>
                    <v-col cols="12" md="8">
                        <checkout-form></checkout-form>
                    </v-col>
                    <v-col cols="12" md="4">
                        <cart-shop></cart-shop>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import HeadingSection from '@/components/HeadingSection.vue'
import Cart from '@/components/Cart.vue'
import CheckoutForm from '@/components/CheckoutForm.vue'

export default {
    name: 'checkout-view',
    data: function(){
        return {}
    },
    components: {
        'heading-section': HeadingSection,
        'cart-shop': Cart,
        'checkout-form': CheckoutForm
    }
}
</script>

<style scoped>
    
</style>