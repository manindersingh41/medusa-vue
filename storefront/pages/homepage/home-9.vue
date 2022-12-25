<template>
    <v-main class="ps-page">
        <header-v9 />
        <header-mobile />
        <div class="ps-home ps-home--9">
            <div class="ps-home__content">
                <banner-single :banner="banner" />
                <mask-promo :reverse="true" :item="promoReverse" />
                <mask-promo :item="promoMask" />
                <latest-review-avatar />
                <choose-style-mask
                    :products="productChoose"
                    bgImage="/img/rounds.png"
                />
                <newsletter-full />
            </div>
        </div>
        <footer-v7 />
    </v-main>
</template>

<script>
import HeaderV9 from '~/components/shared/headers/HeaderV9';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV9';
import FooterV7 from '~/components/shared/footers/FooterV7';
import { getListIdProduct } from '~/repositories/ProductRepository';
import SectionBanner from '~/components/partials/homepage/SectionBanner';
import MaskPromo from '~/components/partials/homepage/MaskPromo';
import LatestReviewAvatar from '~/components/partials/homepage/LatestReviewAvatar';
import ChooseStyleMask from '~/components/partials/homepage/ChooseStyleMask';
import NewsletterFull from '~/components/partials/homepage/NewsletterFull';
import BannerSingle from '~/components/elements/commons/BannerSingle';

export default {
    layout: 'home-default',
    components: {
        HeaderV9,
        HeaderMobile,
        FooterV7,
        SectionBanner,
        MaskPromo,
        LatestReviewAvatar,
        ChooseStyleMask,
        NewsletterFull,
        BannerSingle
    },
    data() {
        return {
            promoReverse: {
                title: 'The best quality <br>masks at the best price',
                image: '/img/promotion/home9-mask.png',
                btnGroup: [
                    {
                        icon: '/img/icon/bacterial.svg',
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
                }
            },
            promoMask: {
                title: 'Effective & reliable <br>protection for your family',
                desc:
                    'Only this week 30% to 50% cheaper! <br/>Choose a color that really matches your personality',
                image: '/img/promotion/goby-unsplash.jpg',
                shop: {
                    text: 'About',
                    class: 'bg-warning',
                    link: '/shop'
                },
                class: 'bg-white'
            },
            productChoose: [],
            banner: {
                title: 'Best quality masks <br />for your daily life',
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
                img: '/img/promotion/slide9.jpg',
                shop: {
                    text: 'Select mask for you',
                    class: 'bg-warning',
                    link: '/shop'
                },
                group: [
                    {
                        icon: '/img/icon/certificate-1.png',
                        text: 'Health Certificate 2000 - <br />professional care'
                    },
                    {
                        icon: '/img/icon/bacteria-1.png',
                        text: 'Anti-bacterial<br />protection'
                    },
                    {
                        icon: '/img/icon/anti-virus.png',
                        text: 'Anti-bacterial<br />protection'
                    }
                ]
            }
        };
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        const query = 'id=38&id=39&id=40';
        this.productChoose = await getListIdProduct(query);
        this.$store.commit('app/setLoading', false);
    }
};
</script>

<style lang="scss">
@import '~/assets/styles/home-9.scss';
</style>
