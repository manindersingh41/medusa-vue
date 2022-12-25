<template>
    <v-main class="ps-page">
        <header-v1 />
        <header-mobile />
        <div class="ps-home ps-home--1">
            <section-banner :listData="banners" />
            <div class="ps-home__content">
                <div class="ps-promo ps-not-padding">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-12 col-sm-4"
                                v-for="(item, index) in promotionTop"
                                :key="index"
                            >
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <category-collection />
                <latest-product-carousel
                    title="Latest products"
                    :dataList="latestProduct"
                />
                <div class="container">
                    <delivery />
                </div>
                <best-deals-product-carousel
                    title="Best Deals of the week!"
                    :dataList="bestDealProduct"
                />
                <bestsellers-product :dataList="bestsellerProduct" />
                <div class="ps-promo">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-12 col-sm-6"
                                v-for="(item, index) in promotionCenter"
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
                <latest-reviews-v1 />
                <instagram />
                <newsletter />
            </div>
        </div>
        <footer-v1 />
    </v-main>
</template>
<script>
import FooterV1 from '~/components/shared/footers/FooterV1';
import HeaderV1 from '~/components/shared/headers/HeaderV1';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV1';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import PromoItem from '~/components/elements/commons/PromoItem';
import CategoryCollection from '~/components/partials/homepage/CategoryCollection';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import { getProducts } from '~/repositories/ProductRepository';
import { getProductByCollection } from '~/repositories/CollectionRepository';
import Delivery from '~/components/partials/homepage/Delivery';
import BestDealsProductCarousel from '~/components/partials/homepage/BestDealsProductCarousel';
import BestsellersProduct from '~/components/partials/homepage/BestsellersProduct';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import LatestReviewsV1 from '~/components/partials/homepage/LatestReviewsV1';
import Instagram from '~/components/partials/homepage/Instagram';
import Newsletter from '~/components/partials/homepage/Newsletter';
import { home1Banner } from '~/static/data/banners.json';

export default {
    layout: 'home-default',
    components: {
        FooterV1,
        HeaderV1,
        HeaderMobile,
        SectionBanner,
        PromoItem,
        CategoryCollection,
        LatestProductCarousel,
        Delivery,
        BestDealsProductCarousel,
        BestsellersProduct,
        FeaturedProduct,
        LatestReviewsV1,
        Instagram,
        Newsletter
    },
    data() {
        return {
            banners: home1Banner,
            promotionTop: [
                {
                    banner: '/img/promotion/bg-banner1.jpg',
                    badge: 'New',
                    title: 'Vaprorizer <br/>Charger <br/>X200 5KW',
                    btnName: 'More',
                    classTitle: 'mb-20'
                },
                {
                    banner: '/img/promotion/bg-banner2.jpg',
                    title: 'Digital <br/>Thermometer <br/>X30-Pro',
                    btnName: 'Shop now',
                    sale: '-10%'
                },
                {
                    banner: '/img/promotion/bg-banner3.jpg',
                    title: 'SuperBrush <br/>X200 Higenic',
                    btnName: 'Shop now',
                    price: '$119.00',
                    del: '$129.00',
                    classTitle: 'text-white'
                }
            ],
            latestProduct: [],
            promotionCenter: [
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
            featuredProduct: [],
            bestDealProduct: [],
            bestsellerProduct: []
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 8
        }
        this.latestProduct = await getProducts(params);
        this.featuredProduct = await getProductByCollection('featured-products');
        this.bestDealProduct = await getProductByCollection('best-deal-of-week');
        this.bestsellerProduct = await getProductByCollection('top-5-best-sellers');
        this.$store.commit('app/setLoading', false);
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-1.scss';
</style>
