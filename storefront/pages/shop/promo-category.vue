<template>
    <div class="ps-categogy--promo">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <div class="ps-promo">
                <promo-item :item="promotion" />
            </div>
            <popular-category-horizontal />
        </div>
        <best-deals-product-carousel
            title="Best Deals of the week!"
            :dataList="bestDealProduct"
        />
        <div class="container">
            <branch :branchs="branchs" />
        </div>
        <featured-product
            title="Featured products"
            :dataList="featuredProduct"
        />
        <blog-latest :dataList="latestPost" />
        <newsletter />
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import PromoItem from '~/components/elements/commons/PromoItem';
import PopularCategoryHorizontal from '~/components/partials/homepage/PopularCategoryHorizontal';
import BestDealsProductCarousel from '~/components/partials/homepage/BestDealsProductCarousel';
import Branch from '~/components/elements/commons/Branch';
import { branchDefault } from '~/static/data/common.json';
import FeaturedProduct from '~/components/partials/homepage/FeaturedProduct';
import BlogLatest from '~/components/partials/homepage/BlogLatest';
import { getPosts } from '~/repositories/PostRepository';
import Newsletter from '~/components/partials/homepage/Newsletter';
import { getProductByCollection } from '~/repositories/CollectionRepository';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        PromoItem,
        PopularCategoryHorizontal,
        BestDealsProductCarousel,
        Branch,
        FeaturedProduct,
        BlogLatest,
        Newsletter
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/shop/promo-category',
                    extraClass: 'active',
                    text: 'Promo Category'
                }
            ],
            promotion: {
                banner: '/img/category/banner-promo.jpg',
                title: 'Multi-Surface <br/>Free&Clear',
                btnName: 'Add to cart',
                price: '$15.99',
                del: '$29.99',
                sale: '-25%',
                priceHorizontal: true
            },
            branchs: branchDefault,
            latestPost: [],
            featuredProduct: [],
            bestDealProduct: [],
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.featuredProduct = await getProductByCollection('featured-products');
        this.bestDealProduct = await getProductByCollection('best-deal-of-week');
        this.latestPost = await getPosts();
        this.$store.commit('app/setLoading', false);
    }
};
</script>
