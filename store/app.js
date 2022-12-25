export const state = () => ({
    appDrawer: false,
    currentDrawerContent: null,
    currency: 'USD',
    language: 'English',
    loading: true,
    openDialogLanguage: false,
    openDialogCurrency: false,
    dialogNotify: false,
    messageNotify: null
});

export const mutations = {
    setAppDrawer(state, payload) {
        state.appDrawer = payload;
    },

    setCurrentDrawerContent(state, payload) {
        state.currentDrawerContent = payload;
    },

    setDialogLanguage(state, payload) {
        state.openDialogLanguage = payload;
    },

    setLanguage(state, payload) {
        state.language = payload;
    },

    setCurrency(state, payload) {
        state.currency = payload;
    },

    setDialogCurrency(state, payload) {
        state.openDialogCurrency = payload;
    },

    setLoading(state, payload) {
        state.loading = payload;
    },

    setDialogNotify(state, payload) {
        state.dialogNotify = payload;
    },

    setMessageNotify(state, payload) {
        state.messageNotify = payload;
    }
};

export const actions = {
    changeCurrency({ commit, state }, payload) {
        commit('setCurrency', payload);
        const cookieParams = {
            data: state.currency
        };

        this.$cookies.set('currency', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
