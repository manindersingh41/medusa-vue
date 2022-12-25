import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';


export const state = () => ({
    searchResults: null,
    cartProducts: [],
    wishlistItems: [],
    compareItems: []
});

export const mutations = {
    setCartProducts(state, payload) {
        state.cartProducts = payload;
    },

    setWishlistItems(state, payload) {
        state.wishlistItems = payload;
    },

    setCompareItems(state, payload) {
        state.compareItems = payload;
    },

    addCartProduct(state, payload) {
        let existItem = state.cartProducts.find(item => item.id === payload.id);
        if (existItem) {
            existItem.quantity += payload.quantity;
        } else {
            state.cartProducts.push(payload);
        }
    },

    removeCartProduct: (state, id) => {
        const cartProducts = state.cartProducts;
        state.cartProducts = cartProducts.filter(el => {
            return el.id != id;
        })
    },

    clearAllCartProduct(state) {
        state.cartProducts = [];
    },

    addWishlistItem(state, payload) {
        let existItem = state.wishlistItems.find(item => item.id === payload.id);
        if (!existItem) {
            state.wishlistItems.push(payload);
        }
    },

    removeWishlistItem: (state, id) => {
        const wishlistItems = state.wishlistItems;
        state.wishlistItems = wishlistItems.filter(el => {
            return el.id != id;
        })
    },

    changeCartItemQuantity(state, payload) {
        const cartProducts = state.cartProducts;
        if (payload.quantity == 0) {
            state.cartProducts = cartProducts.filter(el => {
                return el.id != payload.id;
            })
        } else {
            cartProducts.forEach(element => {
                if (element.id == payload.id) {
                    element.quantity = payload.quantity;
                }
            });
        }
    },

    setSearchResults(state, payload) {
        state.searchResults = payload;
    }
};

export const actions = {
    async getCartProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item.id}`;
            } else {
                query = query + `&id=${item.id}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/products?${query}`)
            .then(response => {
                let products = response.data;
                for (let index = 0; index < payload.length; index++) {
                    const element = payload[index];
                    let product = products[index];
                    product.quantity = element.quantity;
                }
                commit('setCartProducts', products);

                return products;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getWishlishtProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item.id}`;
            } else {
                query = query + `&id=${item.id}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/products?${query}`)
            .then(response => {
                commit('setWishlistItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getCompareProducts({ commit }, payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id=${item.id}`;
            } else {
                query = query + `&id=${item.id}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/products?${query}`)
            .then(response => {
                commit('setCompareItems', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductByKeyword({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setSearchResults', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },

    async getProductsByPriceRange({ commit }, payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                commit('setProducts', response.data);
                commit('setSearchResults', response.data);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
