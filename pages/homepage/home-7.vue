<template>
    <v-main class="ps-page">
        <header-v7 />
        <header-mobile />
        <div class="ps-home ps-home--7">
            <section class="ps-banner--home7" style="background-image: url('/img/promotion/slide7.jpg');">
                <div class="ps-banner__round"><img src="/img/round5.png" alt=""></div>
                <banner :banner="banners[0]" />
            </section>
            <section class="ps-home7--promo" style="background-image: url('/img/goby-unsplash.jpg');">
                <banner :banner="banners[1]" />
            </section>
            <div class="ps-home__content">
                <about-info />
                <about-video />
                <latest-reviews-v3 />
                <choose-style :listProduct="chooseStyle" />
                <div class="ps-home__block">
                    <div class="container">
                        <div class="ps-home__row">
                            <div class="ps-home__blog">
                                <post-latset :item="post" />
                            </div>
                            <div class="ps-home__newsletter">
                                <newsletter title="Join our newsletter and get $20 discount!" desc="*Only for the first order." />
                            </div>
                        </div>
                    </div>
                </div>
                <instagram />
            </div>
        </div>
        <footer-v1 />
    </v-main>
</template>

<script>
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV7';
import FooterV1 from '~/components/shared/footers/FooterV1';
import HeaderV7 from '~/components/shared/headers/HeaderV7';
import Banner from '~/components/elements/commons/Banner';
import AboutInfo from '~/components/partials/page/about/AboutInfo';
import AboutVideo from '~/components/partials/page/about/AboutVideo';
import LatestReviewsV3 from '~/components/partials/homepage/LatestReviewsV3';
import ChooseStyle from '~/components/partials/homepage/ChooseStyle';
import { getProducts } from '~/repositories/ProductRepository';
import { getPostById } from '~/repositories/PostRepository';
import PostLatset from '~/components/elements/commons/PostLatset';
import Newsletter from '~/components/partials/homepage/Newsletter';
import Instagram from '~/components/partials/homepage/Instagram';
import { home7Banner } from '~/static/data/banners.json';

export default {
    layout: 'home-default',
    components: { 
        HeaderMobile,
        FooterV1,
        HeaderV7,
        Banner,
        AboutInfo,
        AboutVideo,
        LatestReviewsV3,
        ChooseStyle,
        PostLatset,
        Newsletter,
        Instagram
    },
    data() {
        return {
            banners: home7Banner,
            chooseStyle: [],
            post: null
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const params = {
            _limit: 3,
            _start: 15
        }
        this.chooseStyle = await getProducts(params);
        this.post = await getPostById(2);
        this.$store.commit('app/setLoading', false);
    }
}
</script>

<style lang="scss">
@import '~/assets/styles/home-7.scss';
</style>
