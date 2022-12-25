export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
        const cartItems = this.$cookies.get('cart', { parseJSON: true });
        const wishlistItems = this.$cookies.get('wishlist', {
            parseJSON: true
        });
        const compareItems = this.$cookies.get('compare', { parseJSON: true });
        const auth = this.$cookies.get('auth', { parseJSON: true });
        const historys = this.$cookies.get('historys', { parseJSON: true });
        if (cartItems && cartItems.length > 0) {
            commit('cart/initCart', cartItems);
            
            await dispatch('product/getCartProducts', cartItems);
        } 
        if (wishlistItems) {
            commit('wishlist/initWishlist', wishlistItems);
            await dispatch('product/getWishlishtProducts', wishlistItems);
        }
        if (compareItems) {
            commit('compare/initCompare', compareItems);
            await dispatch('product/getCompareProducts', compareItems);
        }

        if(historys) {
            commit('search/initHistorys', historys);
        }
        
        if (auth) {
            commit('auth/setIsLoggedIn', Boolean(auth.isLoggedIn));
        }
        
        await dispatch('home/getRecentViewed');
    }
};
