<template>
    <div class="ps-blog">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h1 class="ps-blog__title">My Medi Blog</h1>
            <div class="ps-blog__content">
                <div class="row">
                    <div class="col-12 col-sm-9">
                        <div class="ps-blog--sidebar" v-if="loading">
                            <v-skeleton-loader
                            type="image, article"
                            v-for="item in 3"
                            :key="item"
                            class="mb-4"
                            ></v-skeleton-loader>
                        </div>
                        <div class="ps-blog--sidebar" v-else>
                            <post-latset v-for="(item, index) in blogs" :key="index" :item="item"/>
                        </div>
                        <module-pagination
                            :page="meta.pageIndex"
                            :length="2"
                            @handleChangePage="handleChangePage"
                        />
                    </div>
                    <div class="col-12 col-sm-3">
                        <blog-widget :products="products" :categories="postCategory" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import BlogWidget from '~/components/partials/blog/BlogWidget';
import { getProducts } from '~/repositories/ProductRepository';
import ModulePagination from '~/components/elements/commons/ModulePagination';
import PostLatset from '~/components/elements/commons/PostLatset';
import { getPosts, getPostCategory } from '~/repositories/PostRepository';
import { mapState } from 'vuex';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        BlogWidget,
        ModulePagination,
        PostLatset
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/blog/sidebar-1',
                    extraClass: 'active',
                    text: 'My Medi Blog'
                }
            ],
            products: [],
            meta: {
                pageSize: 5,
                pageIndex: 1
            },
            blogs: [],
            postCategory: []
        }
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 4,
            _start: 30
        }
        this.products = await getProducts(params);
        this.postCategory = await getPostCategory();
        this.getPostList();
        this.$store.commit('app/setLoading', false);
    },
    methods: {
        handleChangePage(val) {
            this.meta.pageIndex = val;
            this.getPostList();
        },
        async getPostList() {
            const start = this.meta.pageSize * (this.meta.pageIndex - 1);
            const params = {
                _limit: this.meta.pageSize,
                _start: start
            }
            this.blogs = await getPosts(params);
        }
    }
}
</script>
