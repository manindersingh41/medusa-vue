<template>
    <v-main class="ps-page">
        <header-v10 />
        <header-mobile />
        <div class="ps-home ps-home--10">
            <div class="ps-home__content">
                <banner-single :banner="banner" />
                <mask-promo :item="promoMask[0]" />
                <mask-promo :item="promoMask[1]" />
                <latest-review-avatar />
                <choose-style-mask :products="productChoose" />
                <newsletter />
            </div>
        </div>
        <footer-v6 />
    </v-main>
</template>

<script>
import HeaderV10 from '~/components/shared/headers/HeaderV10';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV10';
import FooterV6 from '~/components/shared/footers/FooterV6';
import MaskPromo from '~/components/partials/homepage/MaskPromo';
import LatestReviewAvatar from '~/components/partials/homepage/LatestReviewAvatar';
import { getListIdProduct } from '~/repositories/ProductRepository';
import Newsletter from '~/components/partials/homepage/Newsletter';
import ChooseStyleMask from '~/components/partials/homepage/ChooseStyleMask';
import BannerSingle from '~/components/elements/commons/BannerSingle';

export default {
    layout: 'home-default',
    components: {
        HeaderV10,
        HeaderMobile,
        FooterV6,
        MaskPromo,
        LatestReviewAvatar,
        Newsletter,
        ChooseStyleMask,
        BannerSingle
    },
    data() {
        return {
            promoMask: [
                {
                    title: 'The best quality <br>masks at the best price',
                    image: '/img/promotion/face-masks.jpg',
                    btnGroup: [
                        {
                            icon: '/img/icon/virus.svg',
                            text: 'Up to 5 users simultaneously'
                        },
                        {
                            icon: '/img/icon/ribbon.svg',
                            text: 'Has HEALTH certificate'
                        }
                    ],
                    shop: {
                        text: 'Shop now',
                        class: 'bg-warning',
                        link: '/shop'
                    },
                    persen: {
                        text: '-30%',
                        class: 'bg-warning'
                    },
                    class: 'bg-white'
                },
                {
                    title: 'Effective & reliable <br>protection for your family',
                    desc: 'Only this week 30% to 50% cheaper! <br/>Choose a color that really matches your personality',
                    image: '/img/promotion/goby-unsplash-1.jpg',
                    shop: {
                        text: 'About',
                        class: 'bg-warning',
                        link: '/shop'
                    },
                    class: 'bg-white'
                }
            ],
            productChoose: [],
            banner: {
                title: 'Best quality masks <br>for your daily life',
                desc: 'Now with special price -30%',
                button: [
                    {
                        icon: '/img/icon/bacterial.svg',
                        text: 'Anti-Bacterial'
                    },
                    {
                        icon: '/img/icon/virus.svg',
                        text: 'Anti-Virus'
                    }
                ],
                img: '/img/promotion/slide10.jpg',
                shop: {
                    text: 'Select mask for you',
                    class: 'bg-warning',
                    link: '/shop'
                },
                group: [
                    {
                        icon: '/img/icon/certificate-navy.png',
                        text: 'Health Certificate 2000 - <br />professional care'
                    },
                    {
                        icon: '/img/icon/bacteria-navy.png',
                        text: 'Anti-bacterial<br />protection'
                    },
                    {
                        icon: '/img/icon/virus-navy.png',
                        text: 'Anti-bacterial<br />protection'
                    }
                ]
            }
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const query = 'id=41&id=42&id=43';
        this.productChoose = await getListIdProduct(query);
        this.$store.commit('app/setLoading', false);
    }
}
</script>

<style lang="scss">
@import '~/assets/styles/home-10.scss';
</style>
