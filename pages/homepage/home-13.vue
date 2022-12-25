<template>
    <v-main class="ps-page">
        <header-v13 />
        <header-mobile />
        <div class="ps-home ps-home--13">
            <section-banner :listData="banners" />
            <div class="ps-home__content">
                <div class="ps-promo ps-not-padding">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-12 col-sm-4"
                                v-for="(item, index) in promoTop"
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
                <div class="container">
                    <div class="ps-home--block">
                        <div class="row">
                            <div class="col-12 col-sm-4">
                                <div class="ps-block__image">
                                    <banner-overlay :banner="bannerContent[0]" />
                                </div>
                            </div>
                            <div class="col-12 col-sm-8">
                                <div class="ps-block__product">
                                    <div class="row" v-if="!productSkin || !productSkin.length">
                                        <div class="col-6 col-lg-4" v-for="item in 6" :key="item">
                                            <v-skeleton-loader
                                            type="image, article"
                                            ></v-skeleton-loader>
                                        </div>
                                    </div>
                                    <div class="row m-0">
                                        <div class="col-6 col-lg-4 p-0" v-for="item in productSkin" :key="item.id">
                                            <product-standard :product="item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <delivery-info />
                    <div class="ps-home--block">
                        <div class="row">
                            <div class="col-12 col-sm-8">
                                <div class="ps-block__product">
                                    <div class="row" v-if="!productMedicine || !productMedicine.length">
                                        <div class="col-6 col-lg-4" v-for="item in 6" :key="item">
                                            <v-skeleton-loader
                                            type="image, article"
                                            ></v-skeleton-loader>
                                        </div>
                                    </div>
                                    <div class="row m-0">
                                        <div class="col-6 col-lg-4 p-0" v-for="item in productMedicine" :key="item.id">
                                            <product-standard :product="item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <div class="ps-block__image">
                                    <banner-overlay :banner="bannerContent[1]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ps-promo">
                        <h3 class="ps-promo__title">Latest offers</h3>
                        <div class="row">
                            <div class="col-12 col-sm-4" v-for="(item, index) in bannerBottom" :key="index">
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                    <branch :branchs="branchs" />
                </div>
                <blog-latest :dataList="latestPost" />
                <newsletter-inline />
            </div>
        </div>
        <footer-v9 />
    </v-main>
</template>

<script>
import HeaderV13 from '~/components/shared/headers/HeaderV13';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV13';
import FooterV9 from '~/components/shared/footers/FooterV9';
import { getProducts, getListIdProduct } from '~/repositories/ProductRepository';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import { home13Banner, home13BannerContent, home13BannerBottom } from '~/static/data/banners.json';
import NewsletterInline from '~/components/partials/homepage/NewsletterInline';
import BlogLatest from '~/components/partials/homepage/BlogLatest';
import { getPosts } from '~/repositories/PostRepository';
import Branch from '~/components/elements/commons/Branch';
import { branchDark } from '~/static/data/common.json';
import PromoItem from '~/components/elements/commons/PromoItem';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import ProductStandard from '~/components/elements/product/ProductStandard';
import BannerOverlay from '~/components/elements/commons/BannerOverlay';
import DeliveryInfo from '~/components/partials/homepage/DeliveryInfo';

export default {
    layout: 'home-default',
    components: {
        HeaderV13,
        HeaderMobile,
        FooterV9,
        SectionBanner,
        NewsletterInline,
        BlogLatest,
        Branch,
        PromoItem,
        LatestProductCarousel,
        ProductStandard,
        BannerOverlay,
        DeliveryInfo
    },
    data() {
        return {
            banners: home13Banner,
            latestPost: [],
            branchs: branchDark,
            promoTop: [
                {
                    banner: '/img/promotion/banner-home13-4.jpg',
                    title: 'Power Effect <br/>Pro Series',
                    btnName: 'More',
                    badge: 'New',
                    classTitle: 'text-dark',
                    btnClass: 'btn-green',
                    image: '/img/icon/icon10.png'
                },
                {
                    banner: '/img/promotion/banner-home13-5.jpg',
                    title: 'Eczema <br/>Treatment CBD <br/>Ointement',
                    btnName: 'Shop now',
                    sale: '-30%',
                    classTitle: 'text-white',
                    saleColor: 'text-white',
                    btnClass: 'btn-green'
                },
                {
                    banner: '/img/promotion/banner-home13-6.jpg',
                    title: 'Cashew Butter <br/>500MG',
                    btnName: 'Buy now',
                    price: '$15.99',
                    del: '$29.99',
                    priceColor: 'text-warning',
                    classTitle: 'text-dark',
                    btnClass: 'btn-green'
                }
            ],
            latestProduct: [],
            productSkin: [],
            productMedicine: [],
            bannerContent: home13BannerContent,
            bannerBottom: home13BannerBottom
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.latestPost = await getPosts();
        const params = {
            _limit: 10,
            _start: 44
        }
        this.latestProduct = await getProducts(params);
        const query1 = 'id=54&id=55&id=56&id=57&id=50&id=58';
        this.productSkin = await getListIdProduct(query1);
        const query2 = 'id=61&id=46&id=49&id=52&id=59&id=60';
        this.productMedicine = await getListIdProduct(query2);
        this.$store.commit('app/setLoading', false);
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-13.scss';
</style>
