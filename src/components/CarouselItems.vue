<template>
    <section class="carousel">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-carousel 
                        v-model="model"
                        :progress="false"
                        :hide-delimiters="true"
                    >
                        <v-carousel-item
                            v-for="(wine, i) in bestWines"
                            :key="i"
                        >
                            <v-sheet
                                height="100%"
                                tile
                            >
                                <v-row
                                    class="carousel-wrapper fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <div class="carousel-title text-h4 text-sm-h2 font-weight-light">
                                        {{wine.titulo}}
                                    </div>
                                    <div class="back-image">
                                        <img :src="wine.imagen" alt="Wine">
                                    </div>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'carousel-items',
    // props: {},
    data: function(){
        return {
            model: 0,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            bestWines: []
        }
    },
    // computed: {},
    methods: {
        async fetchBestWines() {
            try {
                let response = await fetch('./home.json')
                if ( !response.ok ) throw ('Ocurrió un problema al obtener los datos')
                
                let data = await response.json()

                data.mejoresvinos.forEach(wine => {
                    this.bestWines.push(wine)
                });
            } 
            catch(error) {
                console.log(error)
            }
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchBestWines()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.carousel-wrapper {
    position: relative;
}
.carousel-title {
    z-index: 1;
}
.back-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>