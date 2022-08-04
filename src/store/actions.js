const actions = {
    async fetchVinosAction({ commit }) {
        try {
            let response = await fetch('./productos.json')
            if( !response.ok ) throw 'Ocurrió un error al obtener los datos'

            let data = await response.json()
            commit('CLEAN_VINOS')
            data.productos.forEach(producto => {
                commit('ADD_VINOS', producto)
            });
        }
        catch(error) {
            console.log(error)
        }
    },
    async fetchPromocionesAction({ commit }) {
        try {
            let response = await fetch('./promocion.json')
            if( !response.ok ) throw 'Ocurrió un error al obtener los datos'
            
            let data = await response.json()
            commit('CLEAN_PROMOCIONES')
            data.productos.forEach(producto => {
                commit('ADD_PROMOCIONES', producto)
            });
        }
        catch(error) {
            console.log(error)
        }
    },
    async fetchAccesoriosAction({ commit }) {
        try {
            let response = await fetch('./accesorios.json')
            if( !response.ok ) throw 'Ocurrió un error al obtener los datos'
            
            let data = await response.json()
            commit('CLEAN_ACCESORIOS')
            data.productos.forEach(producto => {
                commit('ADD_ACCESORIOS', producto)
            });
        }
        catch(error) {
            console.log(error)
        }
    },
    addToCartAction({ commit }, producto) {
        commit('ADD_TO_CART', producto)
    },
    addCustomerDataAction({ commit }, data) {
        commit('ADD_CUSTOMER_DATA', data)
    },
    cleanCartAction({ commit }) {
        commit('CLEAN_CART')
    },
    removeProductAction({ commit }, productoID){
        commit('REMOVE_PRODUCT', productoID)
    },
}

export default actions