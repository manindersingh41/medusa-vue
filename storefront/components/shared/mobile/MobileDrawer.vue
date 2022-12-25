<template>
    <v-navigation-drawer v-model="drawer" width="100%" fixed temporary style="z-index: 600; height: 100vh !important;">
        <navbar-slider v-if="currentDrawerContent === 'menu'" />
        <search-slider v-else-if="currentDrawerContent === 'search'" />
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import NavbarSlider from '~/components/shared/mobile/NavbarSlider';
import SearchSlider from '~/components/shared/mobile/SearchSlider';
export default {
    name: 'MobileDrawer',
    components: { NavbarSlider, SearchSlider },
    computed: {
        ...mapState({
            appDrawer: state => state.app.appDrawer,
            currentDrawerContent: state => state.app.currentDrawerContent
        }),
        drawer: {
            get() {
                return this.appDrawer;
            },
            set(newValue) {
                this.$store.commit('app/setAppDrawer', newValue);
                return newValue;
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
