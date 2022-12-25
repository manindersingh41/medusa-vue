<template>
    <v-main class="ps-page">
        <header-v6 />
        <header-mobile />
        <div class="ps-home ps-home--6">
            <section-banner :listData="banners" />
            <div class="ps-home__content">
                <div class="ps-section--banner">
                    <banner :banner="bannerContent[0]" />
                </div>
                <latest-product-carousel
                    title="Latest products"
                    :dataList="latestProduct"
                />
                <div class="container">
                    <banner-overlay :banner="bannerContent[1]" />
                    <div class="ps-promo">
                        <div class="row">
                            <div
                                class="col-12 col-sm-6"
                                v-for="(item, index) in promotions"
                                :key="index"
                            >
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <featured-product
                    title="Featured products"
                    :dataList="featuredProduct"
                />
                <section class="ps-banner--round">
                    <banner :banner="bannerContent[2]" />
                </section>
                <latest-reviews-v2 />
                <delivery-full />
            </div>
        </div>
        <footer-v5 />
    </v-main>
</template>

<script>
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV6';
import FooterV5 from '~/components/shared/footers/FooterV5';
import HeaderV6 from '~/components/shared/headers/HeaderV6';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import Banner from '~/components/elements/commons/Banner';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import { getProducts } from '~/repositories/ProductRepository';
import { getProductByCollection } from '~/repositories/CollectionRepository';
import BannerOverlay from '~/components/elements/commons/BannerOverlay';
import PromoItem from '~/components/elements/commons/PromoItem';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import DeliveryFull from '~/components/partials/homepage/DeliveryFull';
import LatestReviewsV2 from '~/components/partials/homepage/LatestReviewsV2';
import { home6Banner, home6BannerContent } from '~/static/data/banners.json';

export default {
    layout: 'home-default',
    components: {
        HeaderMobile,
        FooterV5,
        HeaderV6,
        SectionBanner,
        Banner,
        LatestProductCarousel,
        BannerOverlay,
        PromoItem,
        FeaturedProduct,
        DeliveryFull,
        LatestReviewsV2
    },
    data() {
        return {
            banners: home6Banner,
            bannerContent: home6BannerContent,
            latestProduct: [],
            promotions: [
                {
                    banner: '/img/promotion/bg-banner4.jpg',
                    badge: 'New',
                    title: 'Get rid of bacteria <br/>in your home',
                    btnName: 'More',
                    classTitle: 'mb-20'
                },
                {
                    banner: '/img/promotion/bg-banner5.jpg',
                    title: 'Candid <br/>Whitening Kit',
                    btnName: 'Shop now',
                    sale: '-10%'
                }
            ],
            featuredProduct: []
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 8
        }
        this.latestProduct = await getProducts(params);
        this.featuredProduct = await getProductByCollection('featured-products');
        this.$store.commit('app/setLoading', false);
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-6.scss';
</style>