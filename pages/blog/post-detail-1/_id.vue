<template>
    <div class="ps-post ps-post--sidebar">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <div class="ps-post__content" v-if="postDetail">
                <div class="row">
                    <div class="col-12 col-sm-9">
                        <div class="ps-blog__badge">
                            <span class="ps-badge__item" v-for="item in postDetail.post_categories" :key="item.id">{{ item.name }}</span>
                        </div>
                        <h1 class="ps-post__title">{{ postDetail.name }}</h1>
                        <div class="ps-blog__meta"> <span class="ps-blog__date">{{ createdAt }}</span><a class="ps-blog__author" href="#">Alfredo Austin</a></div>
                        <div class="ps-blog__banner"> <img src="/img/blog/blog13-992x525.jpg" alt=""></div>
                        <p class="ps-blog__text-large">Sed ac ligula ut leo dignissim blandit non at odio. Mauris et odio ut odio elementum fermentum. Nullam dictum diam nisl, vitae euismod erat imperdiet in. Vestibulum ac tristique tortor, non iaculis dolor. Nunc in tincidunt dui. Proin laoreet imperdiet dui et imperdiet. Nam sit amet erat nisl. Nam tristique porttitor risus, at fringilla velit. Aliquam erat volutpat.</p>
                            <p class="ps-blog__text">Suspendisse viverra egestas eros. Duis tempus varius diam et condimentum. Donec elementum, mi ut posuere posuere, erat dui interdum ante, nec fringilla augue odio ac felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quam mauris, tempus ut felis nec, rutrum cursus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque id sodales elit. Quisque et dui vulputate, rutrum nunc a, ullamcorper tortor. Duis at libero vestibulum, aliquet diam a, pharetra mauris. Donec justo libero, suscipit eu dolor scelerisque, eleifend rhoncus quam. Nullam aliquet semper magna, commodo tincidunt risus varius tincidunt. Integer pulvinar ac libero non vulputate.</p>
                            <p class="ps-blog__text">Vivamus et felis vitae dolor imperdiet pulvinar id eu dui. Donec ultrices sem nisl, ut porttitor purus scelerisque vel. Morbi eget lacinia ligula, eu condimentum urna. Maecenas id nisi a ex sollicitudin commodo. Duis imperdiet libero eget nibh volutpat, in iaculis felis varius. Nullam ullamcorper bibendum eros quis congue. Donec aliquam vel lorem vel tincidunt. Nulla nulla augue, pulvinar sit amet faucibus ut, lobortis ut diam. Proin blandit scelerisque odio ac consectetur. Nulla a risus fermentum, auctor mauris vitae, aliquet arcu.</p>
                            <div class="row ps-blog__row">
                                <div class="col-12 col-md-6"> <img class="ps-blog__image" src="/img/blog-detail-image.jpg" alt=""></div>
                                <div class="col-12 col-md-6">
                                    <p class="ps-blog__text-large">Proin laoreet imperdiet dui et imperdiet. Nam sit amet erat nisl. Nam tristique porttitor risus, at fringilla velit. Aliquam erat volutpat.</p>
                                    <p class="ps-blog__text">Pellentesque id sodales elit. Quisque et dui vulputate, rutrum nunc a, ullamcorper tortor. Duis at libero vestibulum, aliquet diam a, pharetra mauris. Donec justo libero, suscipit eu dolor scelerisque, eleifend rhoncus quam. Nullam aliquet semper magna, commodo tincidunt risus varius tincidunt. Integer pulvinar ac libero non vulputate.</p>
                                    <p class="ps-blog__text">Donec tristique dui lectus, facilisis euismod diam faucibus condimentum. Integer venenatis pellentesque pretium.</p>
                                </div>
                            </div>
                            <p class="ps-blog__text">Vivamus et felis vitae dolor imperdiet pulvinar id eu dui. Donec ultrices sem nisl, ut porttitor purus scelerisque vel. Morbi eget lacinia ligula, eu condimentum urna. Maecenas id nisi a ex sollicitudin commodo. Duis imperdiet libero eget nibh volutpat, in iaculis felis varius. Nullam ullamcorper bibendum eros quis congue. Donec aliquam vel lorem vel tincidunt. Nulla nulla augue, pulvinar sit amet faucibus ut, lobortis ut diam. Proin blandit scelerisque odio ac consectetur. Nulla a risus fermentum, auctor mauris vitae, aliquet arcu.</p>
                            <div class="row ps-blog__row">
                                <div class="col-12 col-sm-6">
                                    <review-item :item="reviews[0]" />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <review-item :item="reviews[1]" />
                                </div>
                            </div>
                            <p class="ps-blog__text-large">Sed ac ligula ut leo dignissim blandit non at odio. Mauris et odio ut odio elementum fermentum. Nullam dictum diam nisl, vitae euismod erat imperdiet in. Vestibulum ac tristique tortor, non iaculis dolor. Nunc in tincidunt dui. Proin laoreet imperdiet dui et imperdiet. Nam sit amet erat nisl. Nam tristique porttitor risus, at fringilla velit. Aliquam erat volutpat.</p>
                            <p class="ps-blog__text">Vivamus et felis vitae dolor imperdiet pulvinar id eu dui. Donec ultrices sem nisl, ut porttitor purus scelerisque vel. Morbi eget lacinia ligula, eu condimentum urna. Maecenas id nisi a ex sollicitudin commodo. Duis imperdiet libero eget nibh volutpat, in iaculis felis varius. Nullam ullamcorper bibendum eros quis congue. Donec aliquam vel lorem vel tincidunt. Nulla nulla augue, pulvinar sit amet faucibus ut, lobortis ut diam. Proin blandit scelerisque odio ac consectetur. Nulla a risus fermentum, auctor mauris vitae, aliquet arcu.</p>
                            <product-carousel
                                title="Bestsellers in Face Masks"
                                :dataList="latestProduct"
                            />
                            <p class="ps-blog__text">Vivamus et felis vitae dolor imperdiet pulvinar id eu dui. Donec ultrices sem nisl, ut porttitor purus scelerisque vel. Morbi eget lacinia ligula, eu condimentum urna. Maecenas id nisi a ex sollicitudin commodo. Duis imperdiet libero eget nibh volutpat, in iaculis felis varius. Nullam ullamcorper bibendum eros quis congue. Donec aliquam vel lorem vel tincidunt. Nulla nulla augue, pulvinar sit amet faucibus ut, lobortis ut diam. Proin blandit scelerisque odio ac consectetur. Nulla a risus fermentum, auctor mauris vitae, aliquet arcu.</p>
                            <post-comment :dataList="comments" />
                            <form-review @submit="handleReview" />
                    </div>
                    <div class="col-12 col-sm-3">
                        <blog-widget :products="products" :categories="postCategory" />
                    </div>
                </div>
            </div>
        </div>
        <blog-latest :dataList="latestPost" title="Related Posts" style="background-image: url('/img/related-bg.jpg');" />
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import BlogLatest from '~/components/partials/homepage/BlogLatest';
import BlogWidget from '~/components/partials/blog/BlogWidget';
import { getProducts } from '~/repositories/ProductRepository';
import { reviews } from '~/static/data/common.json';
import ReviewItem from '~/components/elements/commons/ReviewItem';
import ProductCarousel from '~/components/partials/blog/ProductCarousel';
import { commentPost } from '~/static/data/common.json';
import PostComment from '~/components/partials/blog/PostComment';
import FormReview from '~/components/elements/commons/FormReview';
import { getPosts } from '~/repositories/PostRepository';
import { getPostById, getPostCategory } from '~/repositories/PostRepository';
import Moment from "moment";

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        BlogLatest,
        BlogWidget,
        ReviewItem,
        ProductCarousel,
        PostComment,
        FormReview
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
                    text: 'Higiene'
                }
            ],
            latestPost: [],
            products: [],
            reviews: reviews,
            latestProduct: [],
            comments: commentPost,
            postDetail: null,
            postCategory: []
        }
    },
    computed: {
        createdAt() {
            return Moment(this.postDetail.created_at).format("MMM DD, YYYY");
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.postDetail = await getPostById(this.$route.params.id);
        const currentBreadcrumb = {
            url: `/blog/post-detail-1/${this.$route.params.id}`,
            extraClass: "active",
            text: this.postDetail.name
        }
        this.breadcrumb.push(currentBreadcrumb);
        const params = {
            _limit: 4,
            _start: 30
        }
        this.products = await getProducts(params);
        const param2 = {
            _limit: 8
        }
        this.latestProduct = await getProducts(param2);
        this.latestPost = await getPosts();
        this.postCategory = await getPostCategory();
        this.$store.commit('app/setLoading', false);
    },
    methods: {
        handleReview(data) {
            console.log('data', data);
        }
    }
}
</script>
