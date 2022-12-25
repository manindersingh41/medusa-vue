<template>
    <div class="ps-blog ps-blog--masonry">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h1 class="ps-blog__title">Blog Masonry</h1>
            <div class="ps-blog__content">
                <div class="row" v-if="loading">
                    <div class="col-12 col-sm-6 col-md-4" v-for="item in 3" :key="item">
                        <v-skeleton-loader
                        type="image, article"
                        class="mb-4"
                        ></v-skeleton-loader>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-12 col-sm-6 col-md-4" v-for="(item, index) in blogs" :key="index">
                        <post-latset :item="item"/>
                    </div>
                </div>
                <div class="ps-blog__button"> <a class="ps-btn ps-btn--primary" href="#" @click.prevent="handleLoadMore()">Load more</a></div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import PostLatset from '~/components/elements/commons/PostLatset';
import { getPosts } from '~/repositories/PostRepository';
import { mapState } from 'vuex';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
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
                    url: '/blog/masonry',
                    extraClass: 'active',
                    text: 'Blog Masonry'
                }
            ],
            blogs: [],
            meta: {
                pageSize: 9,
                pageIndex: 1
            }
        }
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.getPostList();
        this.$store.commit('app/setLoading', false);
    },
    methods: {
        handleLoadMore() {
            this.meta.pageIndex++;
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
