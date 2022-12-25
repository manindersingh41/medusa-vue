<template>
    <header :class="['ps-header ps-header--2 ps-header--7', { 'ps-header--sticky': sticky }]">
        <notification />
        <div class="ps-header__top">
            <header-top />
        </div>
        <div class="ps-header__middle">
            <div class="container">
                <div class="ps-logo">
                    <nuxt-link to="/"> 
                        <img src="/img/logo.png" alt>
                        <img class="sticky-logo" src="/img/sticky-logo.png" alt>
                    </nuxt-link>
                </div>
                <a class="ps-menu--sticky" href="#" @click.prevent="handleOpenMenu()"><i class="fa fa-bars"></i></a>
                <div class="ps-header__right">
                    <ul class="ps-header__icons">
                        <li class="">
                            <a href="#" class="active  ps-header__item open-search" @click.prevent="handleOpenDrawer('search')"><i class="icon-magnifier"></i></a> 
                        </li>
                        <li class="ps-header__user">
                            <a href="#" class="active  ps-header__item"><i class="icon-user"></i></a> 
                            <login-modal />
                        </li>
                        <li class="">
                            <nuxt-link to="/shop/wishlist" class="ps-header__item"><i class="fa fa-heart-o"></i>
                            <span class="badge">{{ wishlistItems.length }}</span></nuxt-link>
                        </li>
                        <li class="ps-header__cart">
                            <a href="#" class="active  ps-header__item"><i class="icon-cart-empty"></i>
                                <span class="badge">{{ productCartQuantity }}</span>
                            </a>
                            <cart-mini />
                        </li>
                    </ul>
                    <language-currency />
                    <div class="ps-header__nav">
                        <render-list :list="mainMenu" className="menu" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="['ps-navigation', { 'active': showNavigation }]">
            <div class="container">
                <div class="ps-navigation__left">
                    <nav class="ps-main-menu">
                        <render-list :list="mainMenu" className="menu" :product="product" />
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Notification from '~/components/shared/headers/modules/Notification';
import { mainMenu } from '~/static/data/menu.json';
import RenderList from '~/components/elements/commons/RenderList';
import LanguageCurrency from '~/components/shared/headers/modules/LanguageCurrency';
import FormSearch from '~/components/shared/headers/modules/FormSearch';
import { getProductById } from '~/repositories/ProductRepository';
import LoginModal from '~/components/shared/headers/modules/LoginModal';
import CartMini from '~/components/shared/headers/modules/CartMini';
import { mapState } from 'vuex';
import HeaderTop from '~/components/shared/headers/modules/HeaderTop';

export default {
    components: { Notification, RenderList, LanguageCurrency, FormSearch, LoginModal, CartMini, HeaderTop },
    data() {
        return {
            mainMenu: mainMenu,
            product: null,
            sticky: false,
            showNavigation: false
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            wishlistItems: state => state.wishlist.items,
            appDrawer: state => state.app.appDrawer
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
    async mounted() {
        this.product = await getProductById(5);
    },
    methods: {
        handleScroll() {
            let scroll = window.scrollY;
            if (scroll > 200) {
                this.sticky = true;
            } else {
                this.sticky = false;
            }
        },
        handleOpenDrawer(drawer) {
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        },
        handleOpenMenu() {
            this.showNavigation = !this.showNavigation;
        }
    }
}
</script>
