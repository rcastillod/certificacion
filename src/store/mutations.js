const mutations = {
    ADD_VINOS(state, producto) {
        state.vinos.push(producto)
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
    }
}

export default mutations