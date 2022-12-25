<template>
    <v-main class="ps-page">
        <header-v13 />
        <header-mobile />
        <div class="ps-page--product6">
            <div class="container">
                <breadcrumb :dataList="breadcrumb" />
                <div class="ps-page__content">
                    <div class="ps-product--detail ps-product--full">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-5">
                                <module-product-gallery :images="productDetail.images" />
                            </div>
                            <div class="col-12 col-md-6 col-lg-7">
                                <product-info :product="productDetail" :design="design" />
                                <product-content
                                    :specification="specification"
                                    :content="content"
                                    :bottom="true"
                                    :reviews="reviews"
                                />
                                <div class="ps-product__type">
                                    <ul class="ps-product__list">
                                        <li>
                                            <span class="ps-list__title">Tags: </span
                                            ><a class="ps-list__text" href="#">Health</a
                                            ><a class="ps-list__text" href="#">Thermometer</a>
                                        </li>
                                        <li>
                                            <span class="ps-list__title">SKU: </span
                                            ><a class="ps-list__text" href="#">SF-006</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ps-product__social">
                                    <social-icon-color />
                                </div>
                            </div>
                        </div>
                    </div>
                    <bought-horizontal :dataList="listBought" extraClass="ps-bought--vertical ps-bought--dark" />
                </div>
            </div>
            <latest-product-carousel
                title="Bestsellers"
                :dataList="latestProduct"
            />
            <newsletter-inline />
            <footer-v9 />
        </div>
    </v-main>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import {
    getProducts,
    getProductById
} from '~/repositories/ProductRepository';
import ProductContent from '~/components/partials/product/ProductContent';
import BoughtHorizontal from '~/components/partials/product/modules/BoughtHorizontal';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import ModuleProductGallery from '~/components/elements/product/modules/ModuleProductGallery';
import ProductInfo from '~/components/elements/product/ProductInfo';
import SocialIconColor from '~/components/shared/SocialIconColor';
import { reviewProduct } from '~/static/data/common.json';
import HeaderV13 from '~/components/shared/headers/HeaderV13';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV13';
import FooterV9 from '~/components/shared/footers/FooterV9';
import NewsletterInline from '~/components/partials/homepage/NewsletterInline';

export default {
    layout: 'home-default',
    components: {
        Breadcrumb,
        ProductContent,
        BoughtHorizontal,
        LatestProductCarousel,
        ModuleProductGallery,
        ProductInfo,
        SocialIconColor,
        HeaderV13,
        HeaderMobile,
        FooterV9,
        NewsletterInline
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/shop',
                    text: 'Shop'
                },
                {
                    url: '/',
                    text: 'Equipment'
                },
                {
                    url: '/',
                    text: 'Machines'
                }
            ],
            latestProduct: [],
            productDetail: {},
            specification: [
                {
                    data: [
                        {
                            title: 'Higher memory bandwidth',
                            text: '1,544 MHz'
                        },
                        {
                            title: 'Higher pixel rate',
                            text: '74.1 GPixel/s'
                        }
                    ]
                }
            ],
            listBought: [],
            content: {
                desc:
                    'Just a few seconds to measure your body temperature. Up to 5 users! The battery lasts up to 2 years. There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form, by injected humour, or randomised words which don’t look even slightly believable.<br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            },
            design: {
                social: false,
                extent: false,
                branch: 'HeartRate',
                inStock: true,
                type: false
            },
            reviews: [reviewProduct[0]]
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 8,
            _start: 44
        }
        this.latestProduct = await getProducts(params);
        this.productDetail = await getProductById(this.$route.params.id);
        const currentBreadcrumb = {
            url: `/product/layout/layout-4/${this.$route.params.id}`,
            extraClass: "active",
            text: this.productDetail.name
        }
        this.breadcrumb.push(currentBreadcrumb);
        const queryBought = {
            _limit: 2,
            _start: 20
        }
        this.listBought = await getProducts(queryBought);
        this.listBought.unshift(this.productDetail);
        this.$store.commit('app/setLoading', false);
    }
};
</script>
