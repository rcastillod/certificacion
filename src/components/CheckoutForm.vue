<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <div class="form-group mb-5">
            <div class="text-h5 font-weight-light mb-3">Datos del Comprador</div>
            <v-alert
                :value="alertError"
                color="red"
                icon="mdi-alert-circle-outline"
                outlined
            >
                <div>{{alertErrorMessage}}</div>
            </v-alert>
            <v-text-field
                v-model="customerData.nombre"
                :rules="nameRules"
                dense
                label="Nombre"
                outlined
                required
            ></v-text-field>
    
            <v-text-field
                v-model="customerData.email"
                :rules="emailRules"
                dense
                label="Email"
                outlined
                required
            ></v-text-field>
            
            <v-text-field
                v-model="customerData.confirmEmail"
                :rules="[ruleConfirmEmail]"
                dense
                label="Confirmar Email"
                outlined
                required
            ></v-text-field>
            
            <v-text-field
                v-model="customerData.telefono"
                :rules="phoneRules"
                dense
                label="Teléfono"
                outlined
                required
            ></v-text-field>
        </div>
        
        <div class="form-group mb-5">
            <div class="text-h5 font-weight-light mb-3">Datos del Despacho</div>
            <v-text-field
                v-model="customerData.direccion"
                :rules="addressRules"
                dense
                label="Dirección"
                outlined
                required
            ></v-text-field>
    
            <v-text-field
                v-model="customerData.comuna"
                :rules="cityRules"
                dense
                label="Comuna"
                outlined
                required
            ></v-text-field>
        </div>
        
        <div class="form-group mb-5">
            <div class="text-h5 font-weight-light mb-3">Forma de Pago</div>
            <div class="payment-options rounded pa-3">
                <v-radio-group 
                    v-model="customerData.pago" 
                    :rules="paymentRules"
                >
                    <v-radio
                        v-for="(pay, i) in payments"
                        :key="i"
                        :label="pay"
                        :value="pay"
                    ></v-radio>
                </v-radio-group>
            </div>
        </div>

        <v-btn
            color="secondary"
            class="mr-4"
            @click="formValidation"
        >
            Finalizar
        </v-btn>
    </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'checkout-form',
    data: function(){
        return {
            radioGroup: 0,
            valid: true,
            alertError: false,
            alertErrorMessage: '',
            customerData: {
                nombre: null,
                email: null,
                confirmEmail: null,
                telefono: null,
                direccion: null,
                comuna: null,
                pago: null,
            },
            payments: [
                'Transferencia Bancaria',
                'Servipag',
                'Webpay',
                'Contra Entrega',
            ],
            nameRules: [
                v => !!v || 'El nombre es obligatorio',
                v => (v && v.length >= 10) || 'El nombre debe tener al menos 10 caracteres',
            ],
            emailRules: [
                v => !!v || 'El email es obligatorio',
                v => /.+@.+\..+/.test(v) || 'Ingresa un email valido',
            ],
            phoneRules: [
                v => !!v || 'El teléfono es obligatorio',
                v => /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(v) || 'Ingresa un numero de teléfono valido'
            ],
            addressRules: [
                v => !!v || 'La dirección es obligatoria',
            ],
            cityRules: [
                v => !!v || 'La comuna es obligatoria',
            ],
            paymentRules: [
                v => !!v || 'El método de pago es obligatoria',
            ]
        }
    },
    computed: {
        ...mapGetters(['getCartSubTotal', 'getCartDiscount', 'getCartTotal'])
    },
    methods: {
        ...mapActions(['addCustomerDataAction']),
        ruleConfirmEmail() {
            if ( this.customerData.email != this.customerData.confirmEmail ) {
                return 'El email no coincide'
            }
        },
        formValidation() {
            this.$refs.form.validate()
            if ( this.valid == false ) {
                this.alertError = true
                this.alertErrorMessage = 'Por favor ingresa todos los campos requeridos!'
            } else {
                this.alertError = false
                let data = this.customerData
                data.subtotal = this.getCartSubTotal
                data.descuento = this.getCartDiscount
                data.total = this.getCartTotal
                this.addCustomerDataAction(data)

                this.$router.push('/confirm')
            }
        }
    }
}
</script>

<style scoped lang="scss">
.payment-options {
    border: 1px solid rgba(#000, .4);
}
</style>