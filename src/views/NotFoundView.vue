<template>
    <section class="not-found">
        <v-container fill-height>
                <v-row>
                    <v-col cols="12" md="5">
                        <h1 class="text-h1 text-404 white--text mb-10">404</h1>
                        <h2 class="test-h2 white--text mb-6">No encontramos la página que buscas</h2>
                        <router-link to="/">
                            <v-btn
                                color="white"
                                outlined
                            >
                                Volver al Home
                            </v-btn>
                        </router-link>
                    </v-col>
                </v-row>
            </v-container>
    </section>
</template>

<script>
export default {
    name: 'notfound-view',
    data: function(){
        return {}
    },
}
</script>

<style scoped lang="scss">
.not-found {
    background-image: url('../assets/images/404-bg.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
}
.text-404 {
    font-size: 12.5rem !important;
}
</style>