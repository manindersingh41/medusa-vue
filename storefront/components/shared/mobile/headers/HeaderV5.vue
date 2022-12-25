<template>
    <header :class="['ps-header ps-header--5 ps-header--mobile', {'ps-header--sticky': sticky}]">
        <notification />
        <div class="ps-header__top">
            <ul class="ps-header__icons">
                <li>
                    <a
                        href="javascript: void(0);"
                        class="ps-header__item"
                        @click="handleOpenDrawer('menu')"
                        v-if="!appDrawer || !currentDrawerContent || currentDrawerContent !== 'menu'"
                        ><i class="icon-menu"></i
                    ></a>
                    <a
                        href="javascript: void(0);"
                        class="ps-header__item"
                        @click="handleCloseDrawer()"
                        v-if="appDrawer && currentDrawerContent && currentDrawerContent === 'menu'"
                        ><i class="icon-cross"></i
                    ></a>
                </li>
                <li>
                    <a
                        class="ps-header__item open-search"
                        href="#"
                        @click.prevent="handleOpenDrawer('search')"
                        ><i class="fa fa-search"></i
                    ></a>
                </li>
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
        <div class="ps-header__middle">
            <div class="container">
                <div class="ps-logo">
                    <nuxt-link to="/">
                        <img src="/img/logo-white.png" alt
                    /></nuxt-link>
                </div>
                <div class="ps-header__right">
                    <language-currency />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
import Notification from '~/components/shared/headers/modules/Notification';
import LanguageCurrency from '~/components/shared/headers/modules/LanguageCurrency';

export default {
    components: {
        Notification,
        LanguageCurrency
    },
    data() {
        return {
            sticky: false
        }
    },
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
        },
        handleCloseDrawer() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        }
    }
};
</script>
