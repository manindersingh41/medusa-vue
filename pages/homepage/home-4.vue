<template>
    <v-main class="ps-page">
        <header-v4 />
        <header-mobile />
        <div class="ps-home ps-home--4">
            <popular-category-horizontal />
            <section-banner :listData="banners" />
            <div class="ps-home__content">
                <div class="ps-promo">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-12 col-sm-4"
                                v-for="(item, index) in promotions"
                                :key="index"
                            >
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <latest-product-carousel
                    title="Latest products"
                    :dataList="latestProduct"
                />
                <best-deals-product-carousel
                    title="Best Deals of the week!"
                    :dataList="bestDealProduct"
                />
                <div class="ps-banner__padding">
                    <div class="container">
                        <banner-overlay :banner="bannerContent[0]" />
                    </div>
                </div>
                <featured-product
                    title="Featured products"
                    :dataList="featuredProduct"
                />
                <div class="container">
                    <banner-overlay :banner="bannerContent[1]" />
                </div>
                <bestsellers-product :dataList="bestsellerProduct" />
                <div class="container">
                    <banner-overlay :banner="bannerContent[2]" />
                </div>
                <featured-product
                    title="Popular in this week"
                    :dataList="featuredProduct"
                />
                <div class="container">
                    <banner-overlay :banner="bannerContent[3]" />
                </div>
                <newsletter />
            </div>
        </div>
        <footer-v4 />
    </v-main>
</template>

<script>
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV4';
import { getProducts } from '~/repositories/ProductRepository';
import { getProductByCollection } from '~/repositories/CollectionRepository';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import FooterV4 from '~/components/shared/footers/FooterV4';
import HeaderV4 from '~/components/shared/headers/HeaderV4';
import PopularCategoryHorizontal from '~/components/partials/homepage/PopularCategoryHorizontal';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import PromoItem from '~/components/elements/commons/PromoItem';
import BestDealsProductCarousel from '~/components/partials/homepage/BestDealsProductCarousel';
import BannerOverlay from '~/components/elements/commons/BannerOverlay';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import BestsellersProduct from '~/components/partials/homepage/BestsellersProduct';
import Newsletter from '~/components/partials/homepage/Newsletter';
import { home4Banner, home4BannerContent } from '~/static/data/banners.json';

export default {
    layout: 'home-default',
    components: {
        HeaderMobile,
        LatestProductCarousel,
        FooterV4,
        HeaderV4,
        PopularCategoryHorizontal,
        SectionBanner,
        PromoItem,
        BestDealsProductCarousel,
        BannerOverlay,
        FeaturedProduct,
        BestsellersProduct,
        Newsletter
    },
    data() {
        return {
            latestProduct: null,
            banners: home4Banner,
            promotions: [
                {
                    banner: '/img/promotion/bg-banner2.jpg',
                    title: 'Digital <br/>Thermometer <br/>X30-Pro',
                    btnName: 'Shop now',
                    sale: '-10%'
                },
                {
                    banner: '/img/promotion/bg-banner8.jpg',
                    title: 'Hubble <br/>Eye <br/>Lenses',
                    btnName: 'Shop now',
                    sale: '-12%',
                    classTitle: 'text-white',
                    saleColor: 'text-yellow'
                },
                {
                    banner: '/img/promotion/bg-banner7.jpg',
                    badge: 'New',
                    title: 'SuperBrush <br/>X200 Higenic <br/>ProMaster',
                    btnName: 'More',
                    classTitle: 'mb-20'
                }
            ],
            bannerContent: home4BannerContent,
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
@import '~/assets/styles/home-4.scss';
</style>
