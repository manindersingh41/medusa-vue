import Repository, { serializeQuery } from '~/repositories/Repository.js';
import { baseUrl } from '~/repositories/Repository';

export const state = () => ({
    recentViewed: []
});

export const mutations = {
    setRecentViewed(state, payload) {
        state.recentViewed = payload;
    }
};

export const actions = {
    async getProductCategories({ commit }, Name) {
        const payload = {
            name: Name
        }
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?${serializeQuery(payload)}`
        )
            .then(response => {
                if (response.data && response.data.length) {
                    return response.data[0];
                } else {
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
    async getRecentViewed({ commit },) {
        const payload = {
            name: 'Recent Viewed'
        }
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?${serializeQuery(payload)}`
        )
            .then(response => {
                if (response.data && response.data.length) {
                    commit('setRecentViewed', response.data[0].products);
                    return response.data[0].products;
                } else {
                    commit('setRecentViewed', []);
                    return null;
                }
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
