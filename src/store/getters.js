const getters = {
    getCartCount(state) {
        return state.carrito.length
    },
    getCartProducts(state) {
        return state.carrito.map((producto) => {
            let prod = producto
            prod.total = producto.count * producto.precio
            return prod            
        })
    },
    getCartSubTotal(state, getters) {
        return getters.getCartProducts.reduce((total, producto) => {
            return total + producto.total
        }, 0)
    },
    getCartDiscount(state, getters) {
        let discount = ''
        if ( getters.getCartSubTotal < 100000 ) {
            discount = (5 / 100) * getters.getCartSubTotal
        } else if ( getters.getCartSubTotal >= 100000 ) {
            discount = (11 / 100) * getters.getCartSubTotal
        }
        return discount
    },
    getCartTotal(state, getters) {
        let result = getters.getCartSubTotal - getters.getCartDiscount
        return result
    }
}

export default getters