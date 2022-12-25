<template>
    <v-main class="ps-page">
        <header-v12 />
        <header-mobile />
        <div class="ps-home ps-home--12">
            <div class="ps-home__content">
                <section-banner :listData="banners" :round="true" />
                <mask-service-info />
                <project-info />
                <about-info title="Best quality on the market" :listData="extents" />
                <category-mask-info />
                <newsletter-info bgImage="/img/bg-newsletter12.jpg" />
            </div>
        </div>
        <footer-v8 />
    </v-main>
</template>

<script>
import HeaderV12 from '~/components/shared/headers/HeaderV12';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV12';
import FooterV8 from '~/components/shared/footers/FooterV8';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import { home12Banner } from '~/static/data/banners.json';
import MaskServiceInfo from '~/components/partials/homepage/MaskServiceInfo';
import ProjectInfo from '~/components/partials/homepage/ProjectInfo';
import AboutInfo from '~/components/partials/page/about/AboutInfo';
import CategoryMaskInfo from '~/components/partials/homepage/CategoryMaskInfo';
import NewsletterInfo from '~/components/partials/homepage/NewsletterInfo';

export default {
    layout: 'home-default',
    components: {
        HeaderV12,
        HeaderMobile,
        FooterV8,
        SectionBanner,
        MaskServiceInfo,
        ProjectInfo,
        AboutInfo,
        CategoryMaskInfo,
        NewsletterInfo
    },
    data() {
        return {
            banners: home12Banner,
            extents: [
                {
                    icon: "/img/icon/certificate-info.png",
                    title: "Health Certificate 2000 - <br/>professional care",
                    subtitle: "The highest quality and protection for your teeth"
                },
                {
                    icon: "/img/icon/dentistry-info.png",
                    title: "Sonic cleaning <br/>and whitening power",
                    subtitle: "At the same time, it protects and whitens"
                },
                {
                    icon: "/img/icon/toothbrush-info.png",
                    title: "3 types <br/>of cleaning tips",
                    subtitle: "Round, rectangular and super-wide"
                }
            ]
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', false);
    }
}
</script>

<style lang="scss">
@import '~/assets/styles/home-12.scss';
</style>
