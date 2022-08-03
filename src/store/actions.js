const actions = {
    async fetchVinosAction({ commit }) {
        try {
            let response = await fetch('./productos.json')
            if( !response.ok ) throw 'Ocurrió un error al obtener los datos'

            let data = await response.json()
            data.productos.forEach(producto => {
                commit('ADD_VINOS', producto)
            });
        }
        catch(error) {
            console.log(error)
        }
    },
    addToCartAction({ commit }, producto) {
        commit('ADD_TO_CART', producto)
    }
}

export default actions