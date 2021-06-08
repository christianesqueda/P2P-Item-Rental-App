export const listingData = {
    namespaced: true,
    state: {
        listingId: null,
    },
    actions: {
        resetState(context) {
            context.commit('RESET_STATE')
        },
        setId(context, listingId) {
            context.commit('SET_ID', listingId)
        },

    },
    mutations: {
        RESET_STATE(state) {
            state.listingId = null
        },
        SET_ID(state, id) {
            state.listingId = id
        },
        
    }

}