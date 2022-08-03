<template>
    <v-badge
        :content="messages"
        :value="messages"
        color="red"
        overlap
    >
        <v-icon color="black">
            mdi-cart
        </v-icon>
    </v-badge>
</template>

<script>
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {
            messages: 0
        }
    },
    // computed: {},
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
    
</style>