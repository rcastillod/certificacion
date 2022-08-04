const mutations = {
    ADD_VINOS(state, producto) {
        state.vinos.push(producto)
    },
    ADD_PROMOCIONES(state, producto) {
        state.promociones.push(producto)
    },
    ADD_ACCESORIOS(state, producto) {
        state.accesorios.push(producto)
    },
    CLEAN_VINOS(state) {
        state.vinos = []
    },
    CLEAN_PROMOCIONES(state) {
        state.promociones = []
    },
    CLEAN_ACCESORIOS(state) {
        state.accesorios = []
    },
    ADD_TO_CART(state, producto) {
        let in_cart = state.carrito.some( (prod) => prod.id === producto.id )
        if ( !in_cart ) {
            state.carrito.push(producto)
        } else {
            state.carrito.forEach( prod => {
                if ( prod.id === producto.id ) {
                    prod.count += 1
                }
            })
        }
    },
    ADD_CUSTOMER_DATA(state, data) {
        state.customer.push(data)
    },
    CLEAN_CART(state) {
        state.carrito = []
        state.customer = []
    },
    REMOVE_PRODUCT(state, productoID){
        let product = state.carrito.findIndex( ( prod ) => prod.id == productoID )
        state.carrito.splice(product, 1)
    }
}

export default mutations