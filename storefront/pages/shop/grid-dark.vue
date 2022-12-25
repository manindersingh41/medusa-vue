<template>
    <v-main class="ps-page">
        <header-v14 />
        <header-mobile />
        <div class="ps-categogy ps-categogy--dark ps-page--sticky">
            <div class="container">
                <breadcrumb :dataList="breadcrumb" />
                <h1 class="ps-categogy__name">Face Masks - protective<sup>(32)</sup></h1>
                <div class="ps-categogy__content">
                    <div class="row row-reverse">
                        <div class="col-12 col-md-9">
                            <shop-wrapper
                                :type="type"
                                :pageSize="meta.pageSize"
                                :sort="sortBy"
                                :listType="listType"
                                @handleChangeType="handleChangeType"
                                @onlySaleProduct="onlySaleProduct"
                                @handleChangeSort="handleChangeSort"
                                @handleChangePageZise="handleChangePageZise"
                            />
                            <div v-if="type == 'list'" class="ps-categogy--list">
                                <template v-if="loading">
                                    <div class="ps-product ps-product--list" v-for="item in 3" :key="item">
                                        <div class="ps-product__content">
                                            <div class="ps-product__thumbnail">
                                                <v-skeleton-loader
                                                type="image"
                                                ></v-skeleton-loader>
                                            </div>
                                            <div class="ps-product__info">
                                                <v-skeleton-loader
                                                type="article"
                                                ></v-skeleton-loader>
                                            </div>
                                        </div>
                                        <div class="ps-product__footer">
                                            <v-skeleton-loader
                                            type="article"
                                            ></v-skeleton-loader>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <product-listing v-for="item in products" :key="item.id" :product="item" />
                                </template>
                            </div>
                            <div v-else-if="type == 'grid2'" class="ps-categogy--grid ps-categogy--detail">
                                <div class="row" v-if="loading">
                                    <div class="col-6 col-md-4" v-for="item in 3" :key="item">
                                        <v-skeleton-loader
                                        type="image, article"
                                        ></v-skeleton-loader>
                                    </div>
                                </div>
                                <div class="row m-0" v-else>
                                    <div
                                        class="col-6 col-md-4 p-0"
                                        v-for="item in products"
                                        :key="item.id"
                                    >
                                        <product-standard :product="item" />
                                    </div>
                                    <div class="col-6 col-md-4 p-0">
                                        <a class="ps-nextpage" href="#" @click.prevent="handleChangePage(meta.pageIndex + 1)"><span class="ps-nextpage__text">Next <br>page</span><i class="fa fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="ps-categogy--grid" v-else-if="type == 'grid3'">
                                <div class="row" v-if="loading">
                                    <div class="col-6 col-md-4 col-lg-3" v-for="item in 4" :key="item">
                                        <v-skeleton-loader
                                        type="image, article"
                                        ></v-skeleton-loader>
                                    </div>
                                </div>
                                <div class="row m-0" v-else>
                                    <div
                                        class="col-6 col-md-4 col-lg-3 p-0"
                                        v-for="item in products"
                                        :key="item.id"
                                    >
                                        <product-standard :product="item" />
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 p-0">
                                        <a class="ps-nextpage" href="#" @click.prevent="handleChangePage(meta.pageIndex + 1)"><span class="ps-nextpage__text">Next <br>page</span><i class="fa fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="ps-categogy--separate">
                                <div class="row" v-if="loading">
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item in 4" :key="item">
                                        <v-skeleton-loader
                                        type="image, article"
                                        ></v-skeleton-loader>
                                    </div>
                                </div>
                                <div class="row m-0" v-else>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0" v-for="item in products" :key="item.id">
                                        <product-standard :product="item" />
                                    </div>
                                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-0">
                                        <a class="ps-nextpage" href="#" @click.prevent="handleChangePage(meta.pageIndex + 1)"><span class="ps-nextpage__text">Next <br>page</span><i class="fa fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <module-pagination
                                :page="meta.pageIndex"
                                :length="2"
                                @handleChangePage="handleChangePage"
                            />
                        </div>
                        <div class="col-12 col-md-3">
                            <shop-widget @handleFilter="handleFilter" :categories="productCategory" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-v8 />
    </v-main>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import ModulePagination from '~/components/elements/commons/ModulePagination';
import { getProducts, getProductCategory } from '~/repositories/ProductRepository';
import ProductStandard from '~/components/elements/product/ProductStandard';
import ShopWrapper from '~/components/partials/shop/ShopWrapper';
import ShopWidget from '~/components/partials/shop/ShopWidget';
import ProductListing from '~/components/elements/product/ProductListing';
import { mapState } from 'vuex';
import HeaderV14 from '~/components/shared/headers/HeaderV14';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV14';
import FooterV8 from '~/components/shared/footers/FooterV8';

export default {
    layout: 'home-default',
    components: {
        Breadcrumb,
        ModulePagination,
        ProductStandard,
        ShopWrapper,
        ShopWidget,
        ProductListing,
        HeaderV14,
        HeaderMobile,
        FooterV8
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
                    url: '/shop/grid',
                    extraClass: 'active',
                    text: 'Diagnosis'
                }
            ],
            type: 'grid3',
            products: [],
            meta: {
                pageSize: 12,
                pageIndex: 1
            },
            sortBy: 'Latest',
            productCategory: [],
            listType: [
                {
                    icon: '/img/icon/bars-dark.svg',
                    name: 'list'
                },
                {
                    icon: '/img/icon/grid2-dark.svg',
                    name: 'grid2'
                },
                {
                    icon: '/img/icon/grid3-dark.svg',
                    name: 'grid3'
                },
                {
                    icon: '/img/icon/grid4-dark.svg',
                    name: 'grid4'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.productCategory = await getProductCategory();
        this.getProductList();
    },
    methods: {
        async getProductList() {
            const start = this.meta.pageSize * (this.meta.pageIndex - 1);
            const params = {
                _limit: this.meta.pageSize - 1,
                _start: start + 44
            }
            this.products = await getProducts(params);
            this.$store.commit('app/setLoading', false);
        },
        handleChangePage(val) {
            this.meta.pageIndex = val;
            this.getProductList();
        },
        handleChangeType(val) {
            this.type = val;
        },
        onlySaleProduct(val) {
            // get only sale product
            console.log('val', val);
        },
        handleChangeSort(val) {
            this.sortBy = val;
        },
        handleChangePageZise(val) {
            this.meta.pageSize = val;
            this.getProductList();
        },
        handleFilter(type, value) {
            // list type: price, color, branch, rating
            console.log(type, value);
        }
    }
};
</script>
