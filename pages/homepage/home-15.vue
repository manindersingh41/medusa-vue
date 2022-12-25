<template>
    <v-main class="ps-page">
        <header-v14 />
        <header-mobile />
        <div class="ps-home ps-home--15">
            <section-banner :listData="banners" />
            <div class="ps-home__content">
                <div class="ps-promo ps-promo--home">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-4" v-for="(item, index) in promoTop" :key="index">
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <latest-product-carousel
                    title="Latest products"
                    :dataList="latestProduct"
                />
                <div class="container">
                    <div class="ps-promo ps-promo--banner ps-promo--left">
                        <promo-item :item="promoLeft" />
                    </div>
                    <div class="ps-promo ps-promo--banner ps-promo--center">
                        <promo-item :item="promoCenter" />
                    </div>
                </div>
                <about-info title="Effective and reliable <br/>protection for your teeth" :listData="extents" />
                <latest-reviews-avatar-carousel/>
                <newsletter-info bgImage="/img/bg-newsletter15.jpg" />
            </div>
        </div>
        <footer-v8 />
    </v-main>
</template>

<script>
import HeaderV14 from '~/components/shared/headers/HeaderV14';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV14';
import FooterV8 from '~/components/shared/footers/FooterV8';
import { home15Banner, home15Top } from '~/static/data/banners.json';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import PromoItem from '~/components/elements/commons/PromoItem';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import { getProducts } from '~/repositories/ProductRepository';
import AboutInfo from '~/components/partials/page/about/AboutInfo';
import NewsletterInfo from '~/components/partials/homepage/NewsletterInfo';
import LatestReviewsAvatarCarousel from '~/components/partials/homepage/LatestReviewsAvatarCarousel';

export default {
    layout: 'home-default',
    components: {
        HeaderV14,
        HeaderMobile,
        FooterV8,
        SectionBanner,
        PromoItem,
        LatestProductCarousel,
        AboutInfo,
        NewsletterInfo,
        LatestReviewsAvatarCarousel
    },
    data() {
        return {
            banners: home15Banner,
            promoTop: home15Top,
            latestProduct: [],
            promoLeft: {
                banner: "/img/promotion/promo15.jpg",
                title: "Your one <br/>and only <br/>online <br/>pharmacy!",
                btnName: "About",
                btnClass: "btn-warning",
                classTitle: "text-dark"
            },
            promoCenter: {
                banner: "/img/promotion/promo16.jpg",
                title: "Protection for your family",
                btnName: "About",
                btnClass: "btn-warning",
                classTitle: "text-dark",
                text: "Only this week 30% to 50% cheaper! <br/>Choose a color that really matches your personality"
            },
            extents: [
                {
                    icon: "/img/icon/certificate-dark.png",
                    title: "Health Certificate 2000 - <br/>professional care",
                    subtitle: "The highest quality and protection for your teeth"
                },
                {
                    icon: "/img/icon/dentistry-dark.png",
                    title: "Sonic cleaning <br/>and whitening power",
                    subtitle: "At the same time, it protects and whitens"
                },
                {
                    icon: "/img/icon/toothbrush-dark.png",
                    title: "3 types <br/>of cleaning tips",
                    subtitle: "Round, rectangular and super-wide"
                }
            ]
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 10,
            _start: 44
        }
        this.latestProduct = await getProducts(params);
        this.$store.commit('app/setLoading', false);
    }
}
</script>

<style lang="scss">
@import '~/assets/styles/home-15.scss';
</style>
