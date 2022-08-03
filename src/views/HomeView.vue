<template>
  <div>
    <section class="carousel">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <carousel-items :wines="bestWines"></carousel-items>
                </v-col>
            </v-row>
        </v-container>
    </section>
    <section class="categories">
        <v-container>
            <v-row>
              <v-col cols="12">
                <h2 class="text-h3 font-weight-light">Tipos de Vinos</h2>
              </v-col>
            </v-row>
            <v-row>
                <v-col 
                  v-for="(category, i) in categoryWines"
                  :key="i"
                  cols="12" 
                  md="4"
                >
                  <category-card 
                    :nombre="category.nombre"
                    :texto="category.texto"
                    :imagen="category.imagen"
                    :imagenBg="category.imagenBg"
                  >
                  </category-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
  </div>
</template>

<script>
import CarouselItems from '@/components/CarouselItems.vue'
import CategoryCard from '@/components/CategoryCard.vue'

  export default {
    name: 'home-view',
    data: function(){
        return {
            model: 0,
            bestWines: [],
            categoryWines: [],
        }
    },
    // computed: {},
    methods: {
        async fetchWinesData() {
            try {
                let response = await fetch('./home.json')
                if ( !response.ok ) throw ('Ocurrió un problema al obtener los datos')
                
                let data = await response.json()

                data.mejoresvinos.forEach(wine => {
                    this.bestWines.push(wine)
                });
                
                data.tiposvino.forEach(wine => {
                    this.categoryWines.push(wine)
                });
            } 
            catch(error) {
                console.log(error)
            }
        }
    },
    // watch: {},
    components: {
      'carousel-items': CarouselItems,
      'category-card': CategoryCard
    },
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.fetchWinesData()
    }
    // -- End Lifecycle Methods
  }
</script>

<style scoped lang="scss">
.carousel {
  background-image: url('../assets/images/bg-carousel.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(#000, .6);
    z-index: -1;
  }
}

.categories {
  padding-block: 6.25rem;
}
</style>
