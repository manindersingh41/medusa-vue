<template>
    <v-main class="ps-page">
        <header-v8 />
        <header-mobile />
        <div class="ps-home ps-home--8">
            <div class="ps-home__content">
                <div class="container">
                    <div class="ps-promo">
                        <nuxt-link class="ps-promo__item" to="/shop"
                            ><img
                                class="ps-promo__text"
                                src="/img/christmas-banner-txt.png"
                                alt/><img
                                class="ps-promo__banner"
                                src="/img/christmas-banner-bg.jpg"
                                alt
                        /></nuxt-link>
                    </div>
                    <div class="ps-promo mobile">
                        <nuxt-link class="ps-promo__item" to="/shop"
                            ><img
                                class="ps-promo__text"
                                src="/img/christmas-banner-mobile-txt.png"
                                alt/><img
                                class="ps-promo__banner"
                                src="/img/christmas-banner-mobile.jpg"
                                alt
                        /></nuxt-link>
                    </div>
                    <section-banner
                        :listData="banners"
                        sectionClass="ps-banner--container"
                    />
                </div>
                <category-image />
                <latest-product-carousel
                    title="Latest products"
                    :dataList="latestProduct"
                />
                <div class="container">
                    <div class="ps-promo ps-home__promo">
                        <div class="row">
                            <div
                                class="col-12 col-md-6"
                                v-for="(item, index) in promotion"
                                :key="index"
                            >
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                    <banner-overlay :banner="bannerContent[1]" />
                </div>
                <featured-product
                    title="Bestsellers"
                    :dataList="bestsellerProduct"
                />
                <featured-product
                    title="Featured products"
                    :dataList="featuredProduct"
                />
                <instagram />
                <div class="ps-home__line"></div>
                <newsletter />
            </div>
        </div>
        <footer-v6 />
    </v-main>
</template>

<script>
import HeaderV8 from '~/components/shared/headers/HeaderV8';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV8';
import FooterV6 from '~/components/shared/footers/FooterV6';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import { home8Banner, home4BannerContent } from '~/static/data/banners.json';
import CategoryImage from '~/components/partials/homepage/CategoryImage';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import { getProducts } from '~/repositories/ProductRepository';
import { getProductByCollection } from '~/repositories/CollectionRepository';
import PromoItem from '~/components/elements/commons/PromoItem';
import BannerOverlay from '~/components/elements/commons/BannerOverlay';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import Instagram from '~/components/partials/homepage/Instagram';
import Newsletter from '~/components/partials/homepage/Newsletter';

export default {
    layout: 'home-default',
    components: {
        HeaderV8,
        HeaderMobile,
        FooterV6,
        SectionBanner,
        CategoryImage,
        LatestProductCarousel,
        PromoItem,
        BannerOverlay,
        FeaturedProduct,
        Instagram,
        Newsletter
    },
    data() {
        return {
            banners: home8Banner,
            latestProduct: [],
            promotion: [
                {
                    banner: '/img/promotion/bg-banner8.jpg',
                    title: 'Hubble <br/>Eye Lenses',
                    btnName: 'Shop now',
                    sale: '-12%',
                    classTitle: 'text-white',
                    saleColor: 'text-yellow'
                },
                {
                    banner: '/img/promotion/bg-banner6.jpg',
                    title: 'Domestic <br/>Clean PRO',
                    btnName: 'Shop now',
                    price: '$15.99',
                    del: '$29.99',
                    priceColor: 'text-primary',
                    priceHorizontal: true
                }
            ],
            bannerContent: home4BannerContent,
            featuredProduct: [],
            bestsellerProduct: []
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 8
        };
        this.latestProduct = await getProducts(params);
        this.featuredProduct = await getProductByCollection('featured-products');
        this.bestsellerProduct = await getProductByCollection('top-5-best-sellers');
        this.$store.commit('app/setLoading', false);
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-8.scss';
</style>
