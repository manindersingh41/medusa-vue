<template>
    <div class="ps-categogy">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h1 class="ps-categogy__name">Search results: “{{this.$route.query.text && this.$route.query.text}}”</h1>
            <div class="ps-categogy__content">
                <div class="row row-reverse">
                    <div class="col-12 col-sm-9">
                        <shop-wrapper
                            :type="type"
                            :pageSize="meta.pageSize"
                            :sort="sortBy"
                            @handleChangeType="handleChangeType"
                            @onlySaleProduct="onlySaleProduct"
                            @handleChangeSort="handleChangeSort"
                            @handleChangePageZise="handleChangePageZise"
                        />
                        <div class="ps-categogy--list">
                            <product-listing v-for="product in products" :key="product.id" :product="product" />
                        </div>
                        <module-pagination
                            :page="meta.pageIndex"
                            :length="2"
                            @handleChangePage="handleChangePage"
                        />
                        <delivery />
                    </div>
                    <div class="col-12 col-sm-3">
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
import ShopWrapper from '~/components/partials/shop/ShopWrapper';
import ModulePagination from '~/components/elements/commons/ModulePagination';
import ProductListing from '~/components/elements/product/ProductListing';
import { getProductSearch, getProductCategory } from '~/repositories/ProductRepository';
import ShopWidget from '~/components/partials/shop/ShopWidget';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        Delivery,
        ShopWrapper,
        ModulePagination,
        ProductListing,
        ShopWidget
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/shop/result',
                    extraClass: 'active',
                    text: 'Search results'
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
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.getProduct();
        this.productCategory = await getProductCategory();
        this.$store.commit('app/setLoading', false);
    },
    methods: {
        async getProduct() {
            const start = this.meta.pageSize * (this.meta.pageIndex - 1);
            let params = {
                limit: this.meta.pageSize,
                start: start
            }
            if (this.$route.query.text) {
                params.name = this.$route.query.text;
            }
            this.products = await getProductSearch(params);
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
        },
        handleChangePage(val) {
            this.meta.pageIndex = val;
        },
        handleFilter(type, value) {
            // list type: price, color, branch, rating
            console.log(type, value);
        }
    }
}
</script>
