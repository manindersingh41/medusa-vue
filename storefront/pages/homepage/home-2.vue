<template>
    <v-main class="ps-page">
        <header-v2 />
        <header-mobile />
        <div class="ps-home ps-home--2">
            <div class="ps-home__content">
                <div class="container">
                    <section-banner
                        :listData="banners"
                        :sectionClass="'ps-banner--container'"
                    />
                    <div class="ps-promo">
                        <div class="row">
                            <div
                                class="col-12 col-sm-6"
                                v-for="(item, index) in promoTop"
                                :key="index"
                            >
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <popular-categories />
                <latest-productCarousel
                    title="Latest products"
                    :dataList="latestProduct"
                />
                <best-deals-product-carousel
                    title="Best Deals of the week!"
                    :dataList="bestDealProduct"
                />
                <home2-banner />
                <div class="ps-promo">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-12 col-sm-4"
                                v-for="(item, index) in promoCenter"
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
                <blog-latest :dataList="latestPost" />
                <newsletter />
            </div>
        </div>
        <footer-v2 />
    </v-main>
</template>

<script>
import FooterV2 from '~/components/shared/footers/FooterV2';
import HeaderV2 from '~/components/shared/headers/HeaderV2';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV2';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import PromoItem from '~/components/elements/commons/PromoItem';
import PopularCategories from '~/components/partials/homepage/PopularCategories';
import { getProducts } from '~/repositories/ProductRepository';
import BestDealsProductCarousel from '~/components/partials/homepage/BestDealsProductCarousel';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import Home2Banner from '~/components/partials/homepage/Home2Banner';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import Newsletter from '~/components/partials/homepage/Newsletter';
import BlogLatest from '~/components/partials/homepage/BlogLatest';
import { getProductByCollection } from '~/repositories/CollectionRepository';
import { getPosts } from '~/repositories/PostRepository';
import { home2Banner } from '~/static/data/banners.json';

export default {
    layout: 'home-default',
    components: {
        FooterV2,
        HeaderV2,
        SectionBanner,
        HeaderMobile,
        PromoItem,
        PopularCategories,
        BestDealsProductCarousel,
        LatestProductCarousel,
        Home2Banner,
        FeaturedProduct,
        Newsletter,
        BlogLatest
    },
    data() {
        return {
            banners: home2Banner,
            promoTop: [
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
            latestProduct: [],
            promoCenter: [
                {
                    banner: '/img/promotion/bg-banner6.jpg',
                    title: 'Get rid <br/>of bacteria <br/>in your home',
                    btnName: 'Shop now',
                    sale: '-7%',
                    saleColor: 'text-primary'
                },
                {
                    banner: '/img/promotion/bg-banner7.jpg',
                    badge: 'New',
                    title: 'SuperBrush <br/>X200 Higenic <br/>ProMaster',
                    btnName: 'More',
                    classTitle: 'mb-20'
                },
                {
                    banner: '/img/promotion/bg-banner8.jpg',
                    title: 'Hubble <br/>Eye <br/>Lenses',
                    btnName: 'Shop now',
                    sale: '-12%',
                    classTitle: 'text-white',
                    saleColor: 'text-yellow'
                }
            ],
            latestPost: [],
            bestDealProduct: [],
            featuredProduct: []
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 8
        }
        this.latestProduct = await getProducts(params);
        this.bestDealProduct = await getProductByCollection('best-deal-of-week');
        this.featuredProduct = await getProductByCollection('featured-products');
        this.latestPost = await getPosts();
        this.$store.commit('app/setLoading', false);
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-2.scss';
</style>
