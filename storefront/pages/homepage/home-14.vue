<template>
    <v-main class="ps-page">
        <header-v13 />
        <header-mobile />
        <div class="ps-home ps-home--14">
            <div class="ps-home__content">
                <div class="container">
                    <section class="ps-section--banner">
                        <div class="row">
                            <div class="col-12 col-sm-8">
                                <div class="ps-banner"><img class="ps-banner__imagebg" src="/img/promotion/bg-banner18.jpg" alt>
                                    <div class="ps-banner__block">
                                        <div class="ps-banner__content">
                                            <h2 class="ps-banner__title text-white">Focused<br>by Fredi</h2>
                                            <div class="ps-banner__desc text-white">Only in this week. Don’t misss!</div>
                                            <div class="ps-banner__price"> <span class="text-warning">$15.99</span>
                                                <del>$29.99</del>
                                            </div><a class="ps-banner__shop bg-warning" href="#">Add to cart</a>
                                        </div>
                                        <div class="ps-banner__thumnail"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4">
                                <div class="ps-promo">
                                    <div class="ps-promo__item"><img class="ps-promo__banner" src="/img/promotion/bg-banner19.png" alt>
                                        <div class="ps-promo__content"><span class="ps-promo__badge bg-white">New</span>
                                            <h4 class="ps-promo__name text-white">Power Effect <br>Pro Series</h4>
                                            <div class="ps-promo__sale">-30%</div>
                                            <div class="ps-promo__image"><img src="/img/icon/icon9.png" alt=""></div><a class="ps-promo__btn btn-green" href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="ps-promo ps-promo--home">
                        <div class="row">
                            <div class="col-12 col-sm-4" v-for="(item, index) in promoTop" :key="index">
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <product-type />
                <featured-product
                    title="Latest products"
                    :dataList="latestProduct"
                />
                <div class="ps-promo ps-promo--home">
                    <div class="container">
                        <h3 class="ps-promo__title">This week deals</h3>
                        <div class="row">
                            <div class="col-12 col-sm-4" v-for="(item, index) in promoCenter" :key="index">
                                <promo-item :item="item" />
                            </div>
                        </div>
                        <div class="row ps-promo--horizontal">
                            <div class="col-12 col-sm-3" v-for="(item, index) in promoBottom" :key="index">
                                <promo-item :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
                <best-deals-product-carousel
                    title="Best Deals of the week!"
                    :dataList="bestDealProduct"
                />
                <latest-product-carousel
                    title="Bestsellers"
                    :dataList="bestsellerProduct"
                />
                <div class="ps-home__block">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <post-latset :item="postLatset" />
                            </div>
                            <div class="col-12 col-sm-6">
                                <section class="ps-section--newsletter">
                                    <h3 class="ps-section__title">Join our newsletter and get <br>$20 discount for your first order</h3>
                                    <p class="ps-section__text">Only for the first order.</p>
                                    <div class="ps-section__content">
                                        <form-subscribe @handleSubscribe="handleSubscribe" />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-v10 />
    </v-main>
</template>

<script>
import HeaderV13 from '~/components/shared/headers/HeaderV13';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV13';
import FooterV10 from '~/components/shared/footers/FooterV10';
import PromoItem from '~/components/elements/commons/PromoItem';
import { home14Top, home14center, home14Bottom } from '~/static/data/banners.json';
import ProductType from '~/components/partials/homepage/ProductType';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import { getProducts } from '~/repositories/ProductRepository';
import BestDealsProductCarousel from '~/components/partials/homepage/BestDealsProductCarousel';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import PostLatset from '~/components/elements/commons/PostLatset';
import { getPostById } from '~/repositories/PostRepository';
import FormSubscribe from '~/components/elements/commons/FormSubscribe';

export default {
    layout: 'home-default',
    components: {
        HeaderV13,
        HeaderMobile,
        FooterV10,
        PromoItem,
        ProductType,
        FeaturedProduct,
        BestDealsProductCarousel,
        LatestProductCarousel,
        PostLatset,
        FormSubscribe
    },
    data() {
        return {
            promoTop: home14Top,
            latestProduct: [],
            promoCenter: home14center,
            promoBottom: home14Bottom,
            bestDealProduct: [],
            bestsellerProduct: [],
            postLatset: null
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 10,
            _start: 44
        }
        this.latestProduct = await getProducts(params);
        const param1 = {
            _limit: 10,
            _start: 50
        }
        this.bestDealProduct = await getProducts(param1);
        const param2 = {
            _limit: 10,
            _start: 48
        }
        this.bestsellerProduct = await getProducts(param2);
        this.postLatset = await getPostById(2);
        this.$store.commit('app/setLoading', false);
    },
    methods: {
        handleSubscribe(email) {
            console.log('email', email);
            const message = {
                message: 'Thank you for you subscribe.',
                icon: 'icon-shield-check'
            }
            this.$store.commit('app/setMessageNotify', message)
            this.$store.commit('app/setDialogNotify', true);
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/styles/home-14.scss';
</style>
