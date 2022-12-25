<template>
    <div class="ps-categogy">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h1 class="ps-categogy__name">Diagnosis<sup>(32)</sup></h1>
            <div class="ps-categogy__content">
                <div class="row row-reverse">
                    <div class="col-12 col-md-9">
                        <shop-wrapper
                            :type="type"
                            :pageSize="meta.pageSize"
                            :sort="sortBy"
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
                            </div>
                        </div>
                        <module-pagination
                            :page="meta.pageIndex"
                            :length="2"
                            @handleChangePage="handleChangePage"
                        />
                        <delivery />
                    </div>
                    <div class="col-12 col-md-3">
                        <shop-widget @handleFilter="handleFilter" :categories="productCategory" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import Delivery from '~/components/partials/homepage/Delivery';
import ModulePagination from '~/components/elements/commons/ModulePagination';
import { getProducts, getProductCategory } from '~/repositories/ProductRepository';
import ProductStandard from '~/components/elements/product/ProductStandard';
import ShopWrapper from '~/components/partials/shop/ShopWrapper';
import ShopWidget from '~/components/partials/shop/ShopWidget';
import ProductListing from '~/components/elements/product/ProductListing';
import { mapState } from 'vuex';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        Delivery,
        ModulePagination,
        ProductStandard,
        ShopWrapper,
        ShopWidget,
        ProductListing
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
            type: 'list',
            products: [],
            meta: {
                pageSize: 12,
                pageIndex: 1
            },
            sortBy: 'Latest',
            productCategory: []
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
                _limit: this.meta.pageSize,
                _start: start
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
