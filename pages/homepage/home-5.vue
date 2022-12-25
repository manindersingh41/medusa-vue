<template>
    <v-main class="ps-page">
        <header-v5 />
        <header-mobile />
        <div class="ps-home ps-home--5">
            <section-banner :listData="banners" />
            <div class="ps-home__content">
                <div class="ps-promo">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-12 col-sm-6"
                                v-for="(item, index) in promotionTop"
                                :key="index"
                            >
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <category-image />
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
                                    <div class="row" v-if="loading">
                                        <div class="col-6 col-lg-4" v-for="item in 3" :key="item">
                                            <v-skeleton-loader
                                            type="image, article"
                                            ></v-skeleton-loader>
                                        </div>
                                    </div>
                                    <div class="row m-0" v-else>
                                        <div class="col-6 col-lg-4 p-0" v-for="(item, index) in productBlock" :key="index">
                                            <product-standard :product="item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <delivery />
                    <div class="ps-home--block">
                        <div class="row">
                            <div class="col-12 col-sm-8">
                                <div class="ps-block__product">
                                    <div class="row" v-if="loading">
                                        <div class="col-6 col-lg-4" v-for="item in 3" :key="item">
                                            <v-skeleton-loader
                                            type="image, article"
                                            ></v-skeleton-loader>
                                        </div>
                                    </div>
                                    <div class="row m-0" v-else>
                                        <div class="col-6 col-lg-4 p-0" v-for="(item, index) in productBlock" :key="index">
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
                    <footer-top :container="true" />
                    <div class="ps-home--block">
                        <div class="row">
                            <div class="col-12 col-sm-4">
                                <div class="ps-block__image">
                                    <banner-overlay :banner="bannerContent[2]" />
                                </div>
                            </div>
                            <div class="col-12 col-sm-8">
                                <div class="ps-block__product">
                                    <div class="row" v-if="loading">
                                        <div class="col-6 col-lg-4" v-for="item in 3" :key="item">
                                            <v-skeleton-loader
                                            type="image, article"
                                            ></v-skeleton-loader>
                                        </div>
                                    </div>
                                    <div class="row m-0" v-else>
                                        <div class="col-6 col-lg-4 p-0" v-for="(item, index) in productBlock" :key="index">
                                            <product-standard :product="item" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <home2-banner />
                <blog-latest :dataList="latestPost" />
            </div>
        </div>
        <footer-v5 />
    </v-main>
</template>

<script>
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV5';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import PromoItem from '~/components/elements/commons/PromoItem';
import { getProducts } from '~/repositories/ProductRepository';
import FooterV5 from '~/components/shared/footers/FooterV5';
import HeaderV5 from '~/components/shared/headers/HeaderV5';
import CategoryImage from '~/components/partials/homepage/CategoryImage';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import BlogLatest from '~/components/partials/homepage/BlogLatest';
import Home2Banner from '~/components/partials/homepage/Home2Banner';
import BannerOverlay from '~/components/elements/commons/BannerOverlay';
import ProductStandard from '~/components/elements/product/ProductStandard';
import Delivery from '~/components/partials/homepage/Delivery';
import FooterTop from '~/components/shared/footers/modules/FooterTop';
import { mapState } from 'vuex';
import { getPosts } from '~/repositories/PostRepository';
import { home5Banner, home5BannerContent } from '~/static/data/banners.json';

export default {
    layout: 'no-navigation-footer',
    components: {
        HeaderMobile,
        FooterV5,
        HeaderV5,
        SectionBanner,
        CategoryImage,
        PromoItem,
        LatestProductCarousel,
        BlogLatest,
        Home2Banner,
        BannerOverlay,
        ProductStandard,
        Delivery,
        FooterTop
    },
    data() {
        return {
            latestProduct: null,
            banners: home5Banner,
            promotionTop: [
                {
                    banner: '/img/promotion/bg-banner13.jpg',
                    title: 'Antibacterial <br/>Medical Mask',
                    btnName: 'Add to cart',
                    classTitle: 'mb-20 text-white',
                    btnClass: 'btn-warning',
                    text: 'Anti-Bacterial'
                },
                {
                    banner: '/img/promotion/bg-banner14.jpg',
                    title: 'PowerSteel <br/>X-tra 200 Brush',
                    btnName: 'Shop now',
                    price: '$119.00',
                    del: '$129.00',
                    classTitle: 'text-white',
                    btnClass: 'btn-yellow'
                }
            ],
            latestPost: [],
            bannerContent: home5BannerContent,
            productBlock: []
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 8
        }
        this.latestProduct = await getProducts(params);
        const paramBlock = {
            _limit: 6,
            _start: 20
        }
        this.productBlock = await getProducts(paramBlock);
        this.latestPost = await getPosts();
        this.$store.commit('app/setLoading', false);
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-5.scss';
</style>
