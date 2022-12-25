<template>
    <header :class="['ps-header ps-header--8 ps-header--mobile', {'ps-header--sticky': sticky}]">
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
                        <li>
                            <a
                                class="ps-header__item open-search"
                                href="#"
                                @click.prevent="handleOpenDrawer('search')"
                                ><i class="fa fa-search"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
import Notification from '~/components/shared/headers/modules/Notification';

export default {
    components: {
        Notification
    },
    data() {
        return {
            sticky: false
        }
    },
    computed: {
        ...mapState({
            appDrawer: state => state.app.appDrawer
        })
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
