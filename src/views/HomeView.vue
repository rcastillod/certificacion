<template>
  <carousel-items></carousel-items>
</template>

<script>
import CarouselItems from '@/components/CarouselItems.vue'

  export default {
    name: 'home-view',

    components: {
      'carousel-items': CarouselItems
    },
  }
</script>
