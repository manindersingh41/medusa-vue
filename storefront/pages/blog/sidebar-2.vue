<template>
    <div class="ps-blog">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h1 class="ps-blog__title">My Medi Blog</h1>
            <div class="ps-blog__content">
                <div class="row">
                    <div class="col-12 col-sm-9">
                        <div class="ps-blog--sidebar">
                            <v-skeleton-loader
                            type="image, article"
                            class="mb-2"
                            v-if="loading"
                            ></v-skeleton-loader>
                            <post-latset v-else :item="blogs[0]"/>
                        </div>
                        <div class="ps-blog--grid">
                            <div class="row" v-if="loading">
                                <div class="col-12 col-lg-6 p-0" v-for="item in 2" :key="item">
                                    <v-skeleton-loader
                                    type="image, article"
                                    class="mb-2"
                                    ></v-skeleton-loader>
                                </div>
                            </div>
                            <div class="row" v-else>
                                <template v-for="(item, index) in blogs">
                                    <div class="col-12 col-lg-6 p-0" v-if="index > 0" :key="index">
                                        <post-latset :item="item"/>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <module-pagination
                            :page="meta.pageIndex"
                            :length="1"
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
import { getPosts, getPostCategory } from '~/repositories/PostRepository';
import BlogWidget from '~/components/partials/blog/BlogWidget';
import { getProducts } from '~/repositories/ProductRepository';
import PostLatset from '~/components/elements/commons/PostLatset';
import ModulePagination from '~/components/elements/commons/ModulePagination';
import { mapState } from 'vuex';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        BlogWidget,
        PostLatset,
        ModulePagination
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/blog/sidebar-2',
                    extraClass: 'active',
                    text: 'My Medi Blog'
                }
            ],
            blogs: [],
            products: [],
            meta: {
                pageSize: 9,
                pageIndex: 1
            },
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
