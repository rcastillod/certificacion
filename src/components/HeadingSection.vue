<template>
    <section class="heading">
        <v-container fill-height>
            <v-row>
                <v-col cols="12" class="text-center">
                    <h1 class="text-h2 font-weight-light white--text mb-4">{{title}}</h1>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'heading-section',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data: function(){
        return {}
    }
}
</script>

<style scoped lang="scss">
.heading {
    background-image: url('../assets/images/heading-bg.jpg');
    background-size: cover;
    background-position: center;
    height: 25rem;
    position: relative;
    z-index: 1;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(#000, .5);
        z-index: -1;
    }
}
</style>