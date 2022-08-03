<template>
    <div class="category-card">
        <div class="category-card__inner" :style="{ backgroundImage: `url(${imagenBg})` }">
            <div class="card-content">
                <div class="card-content__title text-h4 font-weight-light">{{nombre}}</div>
                <div class="card-content__info">{{texto}}</div>
            </div>
        </div>
        <div class="card-image d-none d-sm-block">
            <img :src="imagen" alt="Category">
        </div>
    </div>
</template>

<script>
export default {
    name: 'category-card',
    props: {
        nombre: {
            type: String,
            required: true,
        },
        texto: {
            type: String,
            required: true,
        },
        imagen: {
            type: String,
            required: true,
        },
        imagenBg: {
            type: String,
            required: true,
        },
    },
    data: function(){
        return {}
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

<style scoped lang="scss">
.category-card {
    height: 31.25rem;
    position: relative;
    @media ( min-width: 600px ) {
        padding: 1.875rem;
    }

    &__inner {
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 100%;
        padding: 1.875rem;
    }
}
.card-content {
    background-color: rgba(#000, .7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 1.25rem;

    &__title {
        font-size: 1.875rem;
        margin-bottom: 1.25rem;
    }
    &__info {
        @media ( min-width: 600px ) {
            padding-right: 3.125rem;
        }
    }
}
.card-image {
    position: absolute;
    bottom: 0;
    right: 0;

    & > img {
        width: 7.5rem;
    }
}
</style>