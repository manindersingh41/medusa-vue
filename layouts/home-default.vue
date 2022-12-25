<template>
    <client-only>
        <v-app>
            <nuxt></nuxt>
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
        Loading
    },
    created() {
        this.$store.commit('app/setLoading', true);
        this.$store.commit('cart/setDialogAddCart', false);
        this.$store.commit('cart/setDialogQuickview', false);
        this.$store.commit('app/setCurrentDrawerContent', null);
        this.$store.commit('app/setAppDrawer', false);
    }
};
</script>

<style lang="scss" scoped></style>
