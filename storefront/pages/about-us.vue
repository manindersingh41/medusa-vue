<template>
    <div class="ps-about">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
        </div>
        <div class="ps-about__content">
            <home2-banner />
            <about-info />
            <about-banner />
            <about-project />
            <about-video />
            <latest-reviews-v3 />
            <blog-latest :dataList="latestPost" />
            <newsletter />
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import AboutInfo from '~/components/partials/page/about/AboutInfo';
import Home2Banner from '~/components/partials/homepage/Home2Banner';
import AboutBanner from '~/components/partials/page/about/AboutBanner';
import AboutProject from '~/components/partials/page/about/AboutProject';
import AboutVideo from '~/components/partials/page/about/AboutVideo';
import LatestReviewsV3 from '~/components/partials/homepage/LatestReviewsV3';
import Newsletter from '~/components/partials/homepage/Newsletter';
import BlogLatest from '~/components/partials/homepage/BlogLatest';
import { getPosts } from '~/repositories/PostRepository';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        AboutInfo,
        Home2Banner,
        AboutBanner,
        AboutProject,
        AboutVideo,
        LatestReviewsV3,
        Newsletter,
        BlogLatest
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/about-us',
                    extraClass: 'active',
                    text: 'About us'
                }
            ],
            latestPost: []
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.latestPost = await getPosts();
        this.$store.commit('app/setLoading', false);
    }
}
</script>
