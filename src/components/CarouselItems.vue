<template>
    <v-carousel 
        v-model="model"
        :progress="false"
        :hide-delimiters="true"
    >
        <v-carousel-item
            v-for="(wine, i) in wines"
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
</template>

<script>
export default {
    name: 'carousel-items',
    props: {
        wines: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
            model: 0,
        }
    },
}
</script>

<style scoped lang="scss">
.v-sheet {
    background-color: transparent !important;
}
.carousel-wrapper {
    position: relative;
}
.carousel-title {
    color: #fff;
    z-index: 1;
}
.back-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & > img {
        width: 13.125rem;
    }
}
</style>