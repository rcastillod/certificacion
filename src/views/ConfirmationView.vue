<template>
    <div>
        <heading-section title="Pago Exitoso"></heading-section>
        <section class="confirm py-16">
            <v-container fill-height>
                <v-row>
                    <v-col cols="12" md="5">
                        <confirmation-info></confirmation-info>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
import HeadingSection from '@/components/HeadingSection.vue'
import ConfirmationInfo from '@/components/ConfirmationInfo.vue'

export default {
    name: 'confirmation-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'heading-section': HeadingSection,
        'confirmation-info': ConfirmationInfo
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.confirm {
    background-image: url('../assets/images/confirm-bg.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
}
</style>