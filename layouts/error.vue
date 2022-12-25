<template lang="html">
    <client-only>
        <v-app>
            <v-main class="ps-page">
                <header-v1 />
                <header-mobile />
                <div class="ps-page--notfound">
                    <div class="container">
                        <breadcrumb :dataList="breadcrumb" />
                        <div class="ps-page__content">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-5">
                                    <img
                                        src="/img/cartoon-doctor.jpg"
                                        alt="cartoon-doctor"
                                    />
                                </div>
                                <div class="col-12 col-md-6 col-lg-7">
                                    <h1 class="ps-page__name">404</h1>
                                    <h5>
                                        This page has been probably moved
                                        somewhere...
                                    </h5>
                                    <p>
                                        Please back to homepage or check our
                                        offer
                                    </p>
                                    <div>
                                        <nuxt-link
                                            class="ps-btn ps-btn--primary"
                                            to="/"
                                            >Back to homepage</nuxt-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <latest-productCarousel
                        title="Latest products"
                        :dataList="latestProduct"
                    />
                </div>
                <footer-v1 />
            </v-main>
            <navigation-bottom />
            <mobile-drawer />
            <scroll-top />
            <language-dialog />
            <currency-dialog />
            <quick-view />
            <compare-dialog />
            <add-product-v1 />
            <add-product-v2 />
            <notify-dialog />
            <loading />
        </v-app>
    </client-only>
</template>
<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import NavigationBottom from '~/components/shared/mobile/NavigationBottom';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import QuickView from '~/components/elements/commons/QuickView';
import ScrollTop from '~/components/shared/ScrollTop';
import LanguageDialog from '~/components/elements/commons/LanguageDialog';
import CurrencyDialog from '~/components/elements/commons/CurrencyDialog';
import CompareDialog from '~/components/elements/commons/CompareDialog';
import AddProductV1 from '~/components/elements/commons/AddProductV1';
import AddProductV2 from '~/components/elements/commons/AddProductV2';
import NotifyDialog from '~/components/elements/commons/NotifyDialog';
import FooterV1 from '~/components/shared/footers/FooterV1';
import HeaderV1 from '~/components/shared/headers/HeaderV1';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV1';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import { getProducts } from '~/repositories/ProductRepository';
import Loading from '~/components/shared/Loading';

export default {
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return {
            title
        };
    },
    components: {
        Breadcrumb,
        NavigationBottom,
        MobileDrawer,
        QuickView,
        ScrollTop,
        LanguageDialog,
        CurrencyDialog,
        CompareDialog,
        AddProductV1,
        AddProductV2,
        NotifyDialog,
        FooterV1,
        HeaderV1,
        HeaderMobile,
        LatestProductCarousel,
        Loading
    },
    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred',
            latestProduct: [],
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: `/`,
                    extraClass: 'active',
                    text: '404'
                }
            ]
        };
    },
    created() {
        this.$store.commit('app/setLoading', true);
        this.$store.commit('app/setCurrentDrawerContent', null);
        this.$store.commit('app/setAppDrawer', false);
    },
    async mounted() {
        const params = {
            _limit: 8
        }
        this.latestProduct = await getProducts(params);
        this.$store.commit('app/setLoading', false);
    }
};
</script>
