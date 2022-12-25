<template lang="html">
    <div class="ps-navigation--footer">
        <div class="ps-nav__item">
            <a
                href="javascript: void(0);"
                @click="handleOpenDrawer('menu')"
                v-if="!appDrawer || !currentDrawerContent || currentDrawerContent !== 'menu'"
                ><i class="icon-menu"></i
            ></a>
            <a
                href="javascript: void(0);"
                @click="handleCloseDrawer()"
                v-if="appDrawer && currentDrawerContent && currentDrawerContent === 'menu'"
                ><i class="icon-cross"></i
            ></a>
        </div>
        <div class="ps-nav__item">
            <nuxt-link to="/"><i class="icon-home2"></i></nuxt-link>
        </div>
        <div class="ps-nav__item">
            <nuxt-link to="/account/my-account"><i class="icon-user"></i></nuxt-link>
        </div>
        <div class="ps-nav__item">
            <nuxt-link to="/shop/wishlist"
                ><i class="fa fa-heart-o"></i
                ><span class="badge">{{
                    wishlistItems.length
                }}</span></nuxt-link
            >
        </div>
        <div class="ps-nav__item">
            <nuxt-link to="/shop/shopping-cart"
                ><i class="icon-cart-empty"></i
                ><span class="badge">{{ productCartQuantity }}</span></nuxt-link
            >
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'NavigationBottom',
    computed: {
        ...mapState({
            appDrawer: state => state.app.appDrawer,
            currentDrawerContent: state => state.app.currentDrawerContent,
            cartItems: state => state.cart.cartItems,
            wishlistItems: state => state.wishlist.items
        }),
        productCartQuantity() {
            let quantity = 0;
            this.cartItems.forEach(element => {
                quantity += element.quantity;
            });
            return quantity;
        }
    },
    data() {
        return {
            drawer: true
        };
    },
    methods: {
        handleOpenDrawer(drawer) {
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        },
        handleCloseDrawer() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        }
    }
};
</script>

<style lang="scss" scoped></style>
