<template>
    <v-badge
        :content="getCartCount"
        :value="getCartCount"
        color="red"
        overlap
    >
        <v-icon color="black">
            mdi-cart
        </v-icon>
    </v-badge>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'component-name',
    data: function(){
        return {
        }
    },
    computed: {
        ...mapGetters(['getCartCount'])
    }
}
</script>

<style scoped>
    
</style>