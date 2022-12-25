<template>
    <div class="ps-page--product ps-page--product1">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <div class="ps-page__content">
                <div class="row">
                    <div class="col-12 col-md-9">
                        <div class="ps-product--detail">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-7">
                                    <module-product-gallery :images="productDetail.images" />
                                </div>
                                <div class="col-12 col-sm-6 col-md-5">
                                    <product-info :product="productDetail" :design="design" />
                                </div>
                            </div>
                            <bought-horizontal :dataList="listBought" />
                            <product-content :specification="specification" :content="content" :reviews="reviews" />
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <product-extension />
                        <widget-related-product :dataList="widgetProduct" />
                        <div class="ps-widget--promo"><img src="/img/banner-sidebar1.jpg" alt></div>
                    </div>
                </div>
            </div>
        </div>
        <product-also :dataList="alsoProduct" title="Customer also bought" />
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import ProductAlso from '~/components/partials/product/ProductAlso';
import { getProducts, getProductById } from '~/repositories/ProductRepository';
import ProductExtension from '~/components/partials/product/ProductExtension';
import WidgetRelatedProduct from '~/components/partials/product/WidgetRelatedProduct';
import ProductContent from '~/components/partials/product/ProductContent';
import BoughtHorizontal from '~/components/partials/product/modules/BoughtHorizontal';
import ModuleProductGallery from '~/components/elements/product/modules/ModuleProductGallery';
import ProductInfo from '~/components/elements/product/ProductInfo';

export default {
    layout: 'default',
    components: { Breadcrumb, ProductAlso, ProductExtension, WidgetRelatedProduct, ProductContent, BoughtHorizontal, ModuleProductGallery, ProductInfo },
    data() {
        return { 
            breadcrumb: [
                {
                    url: "/",
                    text: "Home"
                },
                {
                    url: "/shop",
                    text: "Shop"
                },
                {
                    url: "/",
                    text: "Equipment"
                },
                {
                    url: "/",
                    text: "Machines"
                }
            ],
            alsoProduct: [],
            widgetProduct: [],
            productDetail: {},
            specification: [
                {
                    title: 'Performance',
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
                },
                {
                    title: 'Speed',
                    data: [
                        {
                            title: 'More shading units',
                            text: '1,544 MHz'
                        },
                        {
                            title: 'Better PassMark direct compute score',
                            text: '3,953 GFLOPS'
                        },
                        {
                            title: 'More texture mapping units',
                            text: '123.5 GTexel/s'
                        },
                        {
                            title: 'Higher memory clock speed',
                            text: '1,759 MHz'
                        },
                        {
                            title: 'Better floating-point performance',
                            text: '5,049'
                        }
                    ]
                },
                {
                    title: 'Information',
                    data: [
                        {
                            title: 'Power',
                            text: '5,049'
                        },
                        {
                            title: 'Windows',
                            text: '64bit Windows 7*, 8 or 10'
                        },
                        {
                            title: 'Graphic Card',
                            text: '4Gb dedicated Graphics card (such as NVIDIA – Open GL 4.0 or later)'
                        },
                        {
                            title: 'HDD',
                            text: '500Gb HDD (this is more driven by the amount of data you want to keep on your computer, rather than LSS itself)'
                        },
                        {
                            title: 'Screen',
                            text: 'Single HD Screen (1920x1080 with 100% desktop scaling) or 1366x768 with second monitor 1920x1080 or higher'
                        }
                    ]
                }
            ],
            listBought: [],
            content: {
                title: 'Digital Thermometer X30-Pro',
                desc:
                    'Just a few seconds to measure your body temperature. Up to 5 users! The battery lasts up to 2 years. There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form, by injected humour, or randomised words which don’t look even slightly believable.<br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                list: [
                    {
                        img: '/img/icon/bacterial.svg',
                        text: 'Study history up to 30 days',
                        extraClass: 'd-inline-block'
                    },
                    {
                        img: '/img/icon/virus.svg',
                        text: 'Up to 5 users simultaneously',
                        extraClass: 'd-inline-block'
                    },
                    {
                        img: '/img/icon/ribbon.svg',
                        text: 'Has HEALTH certificate',
                        extraClass: 'd-inline-block'
                    }
                ],
                table: [
                    {
                        title: 'Power',
                        text: '5,049'
                    },
                    {
                        title: 'Windows',
                        text: '64bit Windows 7*, 8 or 10'
                    },
                    {
                        title: 'Graphic Card',
                        text:
                            ' 4Gb dedicated Graphics card (such as NVIDIA – Open GL 4.0 or later)'
                    },
                    {
                        title: 'HDD',
                        text:
                            '500Gb HDD (this is more driven by the amount of data you want to keep on your computer, rather than LSS itself)'
                    },
                    {
                        title: 'Screen',
                        text:
                            'Single HD Screen (1920×1080 with 100% desktop scaling) or 1366×768 with second monitor 1920×1080 or higher'
                    }
                ]
            },
            design: {
                social: true,
                extent: false,
                branch: 'HeartRate',
                outStock: true,
                type: true
            },
            reviews: []
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 8
        }
        this.alsoProduct = await getProducts(params);
        this.widgetProduct = [this.alsoProduct[3], this.alsoProduct[6]];
        this.productDetail = await getProductById(this.$route.params.id);
        const currentBreadcrumb = {
            url: `/product/layout/product-sold-out/${this.$route.params.id}`,
            extraClass: "active",
            text: this.productDetail.name
        }
        this.breadcrumb.push(currentBreadcrumb);
        const queryBought = {
            _limit: 3,
            _start: 20
        }
        this.listBought = await getProducts(queryBought);
        this.listBought.unshift(this.productDetail);
        this.$store.commit('app/setLoading', false);
    }
}
</script>
