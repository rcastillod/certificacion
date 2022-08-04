<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer 
      class="footer"
      dark
      padless
    >
      <v-col
        class="text-center
        py-5"
        cols="12"
      >
        &copy; Copyright {{ new Date().getFullYear() }} — <strong>Vinos Mi Chile</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    'nav-bar': NavBar
  },
  methods: {
    ...mapActions(['fetchVinosAction', 'fetchPromocionesAction', 'fetchAccesoriosAction'])
  },
  created() {
    this.fetchVinosAction()
    this.fetchPromocionesAction()
    this.fetchAccesoriosAction()
  }
};
</script>

<style lang="scss">
/** Global Style */
.heading-title {
  display: inline-block;
  position: relative;
  z-index: 1;

  &::after {
    content: url('./assets/images/wine-stain.svg');
    position: absolute;
    top: 50%;
    right: -1.25rem;
    opacity: .5;
    width: 6.25rem;
    transform: translateY(-50%);
    z-index: -1;
  }
}
.footer {
  background-image: linear-gradient(40deg, #191E2A, #313E53);
}
</style>