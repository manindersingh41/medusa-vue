<template>
    <v-main class="ps-page">
        <header-v11 />
        <header-mobile />
        <div class="ps-home ps-home--11">
            <div class="ps-home__content">
                <banner-single :banner="banner" />
                <category-mask-white />
                <section class="ps-promo--desc">
                    <banner :reverse="true" :banner="promoDesc" />
                </section>
                <section-project />
                <choose-style-mask :products="productChoose" />
                <instagram />
                <newsletter />
            </div>
        </div>
        <footer-v1 />
    </v-main>
</template>

<script>
import HeaderV11 from '~/components/shared/headers/HeaderV11';
import HeaderMobile from '~/components/shared/mobile/headers/HeaderV11';
import FooterV1 from '~/components/shared/footers/FooterV1';
import BannerSingle from '~/components/elements/commons/BannerSingle';
import CategoryMaskWhite from '~/components/partials/homepage/CategoryMaskWhite';
import Banner from '~/components/elements/commons/Banner';
import SectionProject from '~/components/partials/homepage/SectionProject';
import ChooseStyleMask from '~/components/partials/homepage/ChooseStyleMask';
import { getListIdProduct } from '~/repositories/ProductRepository';
import Instagram from '~/components/partials/homepage/Instagram';
import Newsletter from '~/components/partials/homepage/Newsletter';

export default {
    layout: 'home-default',
    components: {
        HeaderV11,
        HeaderMobile,
        FooterV1,
        BannerSingle,
        CategoryMaskWhite,
        Banner,
        SectionProject,
        ChooseStyleMask,
        Instagram,
        Newsletter
    },
    data() {
        return {
            banner: {
                title: 'Antibacterial<br>Medical Mask',
                desc: 'Just a few seconds to measure <br>your body temperature.',
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
                img: '/img/promotion/slide11.png',
                shop: {
                    text: 'Shop now',
                    class: 'bg-warning',
                    link: '/shop'
                }
            },
            promoDesc: {
                title: 'Only this week 30% to <br>50% cheaper! <br>Choose a color that really<br>matches your personality',
                desc: 'The brush handle fits perfectly in the hand, is slim and beautifully made.',
                button: [
                    {
                        icon: '/img/icon/certificate-ribbon.png',
                        text: 'Health Certificate 2000 - professional care'
                    },
                    {
                        icon: '/img/icon/paramedic-sign.png',
                        text: 'Sonic cleaningand whitening power'
                    },
                    {
                        icon: '/img/icon/heart-healthcare.png',
                        text: '3 types of cleaning tips'
                    }
                ],
                img: '/img/promotion/promo11.png'
            },
            productChoose: [],
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
@import '~/assets/styles/home-11.scss';
</style>
