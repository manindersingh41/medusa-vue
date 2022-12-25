export const state = () => ({
    items: [],
    dialogCompare: false
});

export const mutations = {
    initCompare(state, payload) {
        state.items = payload;
    },

    setDialogCompare(state, payload) {
        state.dialogCompare = payload;
    },

    addProductCompare(state, payload) {
        let existItem = state.items.find(item => item.id === payload.id);
        if (!existItem) {
            state.items.push(payload);
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
    addItemToCompare({ commit, state }, payload) {
        commit('addProductCompare', payload);
        const params = state.items;

        this.$cookies.set('compare', params, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    removeItemCompare({ commit, state }, payload) {
        commit('removeItem', payload);
        const params = state.items;

        this.$cookies.set('compare', params, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
