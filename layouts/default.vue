<template>
    <client-only>
        <v-app>
            <v-main class="ps-page">
                <header-v1 />
                <header-mobile />
                <nuxt></nuxt>
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
import Loading from '~/components/shared/Loading';

export default {
    components: {
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
        Loading
    },
    created() {
        this.$store.commit('app/setLoading', true);
        this.$store.commit('cart/setDialogAddCart', false);
        this.$store.commit('cart/setDialogQuickview', false);
        this.$store.commit('cart/setDialogAddCart2', false);
        this.$store.commit('app/setCurrentDrawerContent', null);
        this.$store.commit('app/setAppDrawer', false);
        this.$store.commit('cart/setDialogAddCart', false);
    }
};
</script>

<style lang="scss" scoped></style>
