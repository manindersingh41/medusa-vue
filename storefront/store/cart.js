import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';

export const state = () => ({
    total: 0,
    cartItems: [],
    dialogAddCart: false,
    productOverview: null,
    aboutCart: null,
    dialogQuickview: false,
    dialogAddCart2: false
});

export const mutations = {
    initCart(state, payload) {
        state.cartItems = payload;
    },

    setDialogAddCart2(state, payload) {
        state.dialogAddCart2 = payload;
    },

    setDialogAddCart(state, payload) {
        state.dialogAddCart = payload;
    },

    addItem(state, payload) {
        let existItem = state.cartItems.find(item => item.id === payload.id);
        if (existItem) {
            existItem.quantity += payload.quantity;
        } else {
            state.cartItems.push(payload);
        }
    },

    removeItem: (state, id) => {
        const cartItems = state.cartItems;
        state.cartItems = cartItems.filter(el => {
            return el.id != id;
        })
    },

    changeCartItemQuantity(state, payload) {
        const cartItems = state.cartItems;
        if (payload.quantity == 0) {
            state.cartItems = cartItems.filter(el => {
                return el.id != payload.id;
            })
        } else {
            cartItems.forEach(element => {
                if (element.id == payload.id) {
                    element.quantity = payload.quantity;
                }
            });
        }
    },

    clearCart: state => {
        state.cartItems = [];
    },
    setProductSale(state, payload) {
        state.aboutCart = payload;
    },
    setTotal(state, payload) {
        state.total = payload;
    },

    setDialogQuickview(state, payload) {
        state.dialogQuickview = payload;
    },

    setProductOverview(state, payload) {
        state.productOverview = payload;
    }
};

export const actions = {
    async getProducts({ commit }) {
        const payload = {
            name: 'Flash Deals'
        }
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?${serializeQuery(payload)}`
        )
            .then(response => {
                if (response.data && response.data.length) {
                    commit('setProductSale', response.data[0]);
                    return response.data[0];
                } else {
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    addProductToCart({ commit, state }, payload) {
        commit('addItem', payload);
        const cookieParams = state.cartItems;

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    removeProductCart({ commit, state }, payload) {
        commit('removeItem', payload);
        const cookieParams = state.cartItems;

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    changeQuantityProductCart({ commit, state }, payload) {
        commit('changeCartItemQuantity', payload);
        const cookieParams = state.cartItems;

        this.$cookies.set('cart', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    },

    clearCart({ commit, state }) {
        commit('clearCart');

        this.$cookies.set('cart', [], {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
};
