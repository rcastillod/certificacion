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
        let totalDiscount = ''
        if ( getters.getCartSubTotal < 100000 ) {
            discount = (5 / 100) * getters.getCartSubTotal
            totalDiscount = getters.getCartSubTotal - discount
        } else if ( getters.getCartSubTotal >= 100000 ) {
            discount = (11 / 100) * getters.getCartSubTotal
            totalDiscount = getters.getCartSubTotal - discount
        }
        return totalDiscount
    }
}

export default getters