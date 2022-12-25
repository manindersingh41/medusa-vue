<template>
    <div class="ps-page--product3">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <div class="ps-page__content">
                <div class="ps-product--detail">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-lg-5">
                            <module-product-gallery :images="productDetail.images" />
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <product-info :product="productDetail" :design="design" />
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <product-feature
                                :feature="feature"
                                :product="productDetail"
                            />
                        </div>
                    </div>
                    <div class="ps-product__content">
                        <module-tab-description
                            :description="content"
                        />
                    </div>
                </div>
                <write-review />
                <delivery />
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import { getProductById } from '~/repositories/ProductRepository';
import ProductFeature from '~/components/partials/product/ProductFeature';
import ModuleTabDescription from '~/components/partials/product/modules/ModuleTabDescription';
import Delivery from '~/components/partials/homepage/Delivery';
import WriteReview from '~/components/partials/product/WriteReview';
import ModuleProductGallery from '~/components/elements/product/modules/ModuleProductGallery';
import ProductInfo from '~/components/elements/product/ProductInfo';

export default {
    layout: 'default',
    components: { Breadcrumb, ProductFeature, ModuleTabDescription, Delivery, WriteReview, ModuleProductGallery, ProductInfo },
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
            productDetail: {},
            content: {
                title: 'Binocular Course Microscope BM100 LED',
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
            feature: {
                outStock: true,
                group: [
                    {
                        text: 'Color',
                        items: [
                            {
                                text: 'Gray',
                                value: '#5b6c8f'
                            },
                            {
                                text: 'Red',
                                value: '#f00000'
                            },
                            {
                                text: 'Black',
                                value: '#313330'
                            }
                        ]
                    },
                    {
                        text: 'Size',
                        items: [
                            {
                                value: 'L',
                                text: 'L'
                            },
                            {
                                value: 'M',
                                text: 'M'
                            },
                            {
                                value: 'S',
                                text: 'S'
                            }
                        ]
                    }
                ]
            },
            design: {
                social: true,
                extent: true,
                branch: 'HeartRate',
                shipping: true,
                type: true
            }
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.productDetail = await getProductById(this.$route.params.id);
        const currentBreadcrumb = {
            url: `/product/layout/layout-3/${this.$route.params.id}`,
            extraClass: "active",
            text: this.productDetail.name
        }
        this.breadcrumb.push(currentBreadcrumb);
        this.$store.commit('app/setLoading', false);
    }
};
</script>
