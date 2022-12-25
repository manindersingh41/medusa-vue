export const state = () => ({
    items: []
});

export const mutations = {
    initWishlist(state, payload) {
        state.items = payload;
    },

    setItems(state, payload) {
        const existItem = state.items.find(item => item.id === payload.id);
        if (!existItem) {
            state.items.push({ id: payload.id });
        }
    },

    removeItem(state, id) {
        const items = state.items;
        state.items = items.filter(el => {
            return el.id != id;
        })
    }
};
export const actions = {
    addItemToWishlist({ commit, state }, payload) {
        commit('setItems', payload);
        const params = state.items;

        this.$cookies.set('wishlist', params, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    removeItemFromWishlist({ commit, state }, id) {
        commit('removeItem', id);
        const params = state.items;

        this.$cookies.set('wishlist', params, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
