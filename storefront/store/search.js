export const state = () => ({
    historys: []
});

export const mutations = {
    initHistorys(state, payload) {
        state.historys = payload;
    },

    addItemHistory(state, payload) {
        if (state.historys.length) {
            let existItem = state.historys.find(item => item === payload);
            if (!existItem) {
                state.historys.push(payload);
            }
        } else {
            state.historys.push(payload);
        }
    },

    removeItem(state, payload) {
        const historys = state.historys;
        state.historys = historys.filter(el => {
            return el != payload;
        })
    },

    clearAllItems(state) {
        state.historys = [];
    }
};

export const actions = {
    addItemToHistorys({ commit, state }, payload) {
        commit('addItemHistory', payload);
        const params = state.historys;

        this.$cookies.set('historys', params, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    removeItemFromHistorys({ commit, state }, payload) {
        commit('removeItem', payload);
        const params = state.historys;

        this.$cookies.set('historys', params, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    clearAllHistorys({ commit, state }) {
        commit('clearAllItems');
        this.$cookies.set('historys', [], {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};