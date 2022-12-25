<template>
    <header :class="['ps-header ps-header--3 ps-header--mobile', {'ps-header--sticky': sticky}]">
        <notification />
        <div class="ps-header__middle">
            <div class="container">
                <div class="ps-logo">
                    <nuxt-link to="/">
                        <img src="/img/mobile-logo.png" alt
                    /></nuxt-link>
                </div>
                <div class="ps-header__right">
                    <ul class="ps-header__icons">
                        <li class="ps-header__user">
                            <a href="#" class="active  ps-header__item"
                                ><i class="icon-user"></i
                            ></a>
                        </li>
                        <li class="">
                            <nuxt-link to="/shop/wishlist" class="ps-header__item"
                                ><i class="fa fa-heart-o"></i>
                                <span class="badge">{{
                                    wishlistItems.length
                                }}</span></nuxt-link
                            >
                        </li>
                        <li class="ps-header__cart">
                            <nuxt-link to="/shop/shopping-cart" class="active  ps-header__item"
                                ><i class="icon-cart-empty"></i>
                                <span class="badge">{{
                                    productCartQuantity
                                }}</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <header3-search />
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
import Notification from '~/components/shared/headers/modules/Notification';
import Header3Search from '~/components/shared/headers/modules/Header3Search';

export default {
    components: {
        Notification,
        Header3Search
    },
    data() {
        return {
            sticky: false
        }
    },
    computed: {
        ...mapState({
            appDrawer: state => state.app.appDrawer,
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
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            let scroll = window.scrollY;
            if (scroll > 700) {
                this.sticky = true;
            } else {
                this.sticky = false;
            }
        },
        handleOpenDrawer(drawer) {
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        }
    }
};
</script>
