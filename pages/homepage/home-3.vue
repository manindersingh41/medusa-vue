<template>
    <v-main class="ps-page">
        <header-v3 />
        <header-mobile />
        <div class="ps-home ps-home--3">
            <section-banner :listData="banners" />
            <div class="ps-home__content">
                <popular-category-horizontal />
                <div class="container">
                    <div class="row ps-home__row">
                        <div
                            class="col-12 col-sm-4 col-md-3 ps-home__week-deal"
                        >
                            <weekdeal-product :product="product" />
                        </div>
                        <div class="col-12 col-sm-8 col-md-9">
                            <section class="ps-section--latest-horizontal">
                                <h3 class="ps-section__title">
                                    Latest products
                                </h3>
                                <div class="ps-section__content">
                                    <div class="row" v-if="loading">
                                        <div class="col-6 col-lg-3" v-for="item in 4" :key="item">
                                            <v-skeleton-loader
                                            type="image, article"
                                            ></v-skeleton-loader>
                                        </div>
                                    </div>
                                    <div class="row m-0" v-else>
                                        <template v-for="(item, index) in latestProduct">
                                            <div
                                                class="col-6 col-lg-3 p-0"
                                                v-if="index < 8"
                                                :key="item.id"
                                            >
                                                <product-standard :product="item" />
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="ps-promo">
                        <h3 class="ps-promo__title">Latest offers</h3>
                        <div class="row">
                            <div class="col-12 col-sm-4" v-for="(item, index) in promotions" :key="index">
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <bestsellers-product :dataList="bestsellerProduct" />
                <div class="container">
                    <delivery />
                </div>
                <featured-product
                    title="Featured products"
                    :dataList="featuredProduct"
                />
                <section class="ps-home3__banner" style="background-image: url('/img/promotion/banner-bg-12.jpg');">
                    <banner :banner="banner" />
                </section>
            </div>
        </div>
        <footer-v3 />
    </v-main>
</template>

<script>
import FooterV3 from '~/components/shared/footers/FooterV3';
import HeaderV3 from '~/components/shared/headers/HeaderV3';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV3';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import PopularCategoryHorizontal from '~/components/partials/homepage/PopularCategoryHorizontal';
import WeekdealProduct from '~/components/partials/homepage/WeekdealProduct';
import ProductStandard from '~/components/elements/product/ProductStandard';
import PromoItem from '~/components/elements/commons/PromoItem';
import BestsellersProduct from '~/components/partials/homepage/BestsellersProduct';
import Delivery from '~/components/partials/homepage/Delivery';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import Banner from '~/components/elements/commons/Banner';
import { mapState } from 'vuex';
import {
    getProductById,
    getProducts
} from '~/repositories/ProductRepository';
import { getProductByCollection } from '~/repositories/CollectionRepository';
import { home3Banner } from '~/static/data/banners.json';

export default {
    layout: 'home-default',
    components: {
        FooterV3,
        HeaderV3,
        HeaderMobile,
        SectionBanner,
        PopularCategoryHorizontal,
        WeekdealProduct,
        ProductStandard,
        PromoItem,
        BestsellersProduct,
        Delivery,
        FeaturedProduct,
        Banner
    },
    data() {
        return {
            banners: home3Banner,
            product: null,
            latestProduct: null,
            promotions: [
                {
                    banner: '/img/promotion/bg-banner5.jpg',
                    title: 'Candid <br/>Whitening Kit',
                    btnName: 'Shop now',
                    sale: '-10%'
                },
                {
                    banner: '/img/promotion/bg-banner4.jpg',
                    badge: 'New',
                    title: 'Get rid of bacteria <br/>in your home',
                    btnName: 'More',
                    classTitle: 'mb-20'
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
            banner: {
                title: 'Super Sonic Brush <br>X200 Higenic',
                desc:
                    'The sonic power of the brush is the best for <br>dental problems',
                shop: 'bg-warning',
                button: [
                    {
                        icon: '/img/icon/tooth-brush-icon.png',
                        text: 'Up to 5 users simultaneously'
                    },
                    {
                        icon: '/img/icon/dashboard-icon.png',
                        text: 'Has HEALTH certificate'
                    }
                ],
                percent: {
                    text: '-30%',
                    extraClass: 'bg-warning',
                    thumbnail: true
                },
                textShop: 'About'
            },
            bestsellerProduct: [],
            featuredProduct: []
        };
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.product = await getProductById(5);
        const params = {
            _limit: 8
        }
        this.latestProduct = await getProducts(params);
        this.bestsellerProduct = await getProductByCollection('top-5-best-sellers');
        this.featuredProduct = await getProductByCollection('featured-products');
        this.$store.commit('app/setLoading', false);
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-3.scss';
</style>
