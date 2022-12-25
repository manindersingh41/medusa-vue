<template>
    <section :class="['ps-section--banner', sectionClass]">
        <div class="ps-section__overlay" v-show="loadingBanner">
            <div class="ps-section__loading"></div>
        </div>
        <div class="ps-swiper">
            <div class="swiper" v-swiper:bannerSwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide"
                        v-for="(item, index) in listData"
                        :key="index"
                    >
                        <div class="ps-banner--round" v-if="round">
                            <banner :banner="item" />
                        </div>
                        <banner :banner="item" v-else />
                    </div>
                </div>
            </div>

            <div class="ps-swiper__nav">
                <div class="swiper-button-prev swiper-prev-banner"></div>
                <div class="swiper-button-next swiper-next-banner"></div>
            </div>
            <div class="swiper-pagination pagination-banner"></div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import Banner from '~/components/elements/commons/Banner';

export default {
    props: {
        listData: {
            type: Array,
            default: () => []
        },
        sectionClass: {
            type: String,
            default: ''
        },
        round: {
            type: Boolean,
            default: false
        }
    },
    components: { Banner },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                loop: true,
                effect: 'fade',
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false
                },
                navigation: {
                    prevEl: '.swiper-prev-banner',
                    nextEl: '.swiper-next-banner'
                },
                pagination: {
                    el: '.pagination-banner',
                    clickable: true
                }
            },
            loadingBanner: true
        };
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    mounted() {
        setTimeout(() => {
            this.loadingBanner = false;
        }, 1000);
    }
};
</script>
