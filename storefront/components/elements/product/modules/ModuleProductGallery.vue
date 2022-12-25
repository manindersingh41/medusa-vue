<template>
    <div class="ps-product--gallery">
        <div class="ps-swiper">
            <div v-swiper:swiperTop="swiperOptionTop" class="swiper ps-product__thumbnail">
                <div class="swiper-wrapper" v-if="loading">
                    <div class="swiper-slide">
                        <v-skeleton-loader
                        type="image"
                        ></v-skeleton-loader>
                    </div>
                </div>
                <div class="swiper-wrapper" v-else>
                    <div class="swiper-slide" v-for="(item, index) in images" :key="index">
                        <img :src="baseDomain + item.url" width="100%" alt />
                    </div>
                </div>
            </div>
        </div>
        <div class="ps-swiper">
            <div v-swiper:swiperThumbs="swiperOptionThumbs" class="swiper ps-gallery--image">
                <div class="swiper-wrapper" v-if="loading">
                    <div class="swiper-slide" v-for="item in 5" :key="item">
                        <v-skeleton-loader
                        type="image"
                        ></v-skeleton-loader>
                    </div>
                </div>
                <div class="swiper-wrapper" v-else>
                    <div class="swiper-slide" v-for="(item, index) in images" :key="index">
                        <div class="ps-gallery__item">
                            <img :src="baseDomain + item.url" alt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { baseUrl } from '~/repositories/Repository';

export default {
    props: {
        images: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            swiperOptionTop: {
                loop: true,
                loopedSlides: 5,
                centeredSlides: true
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 5,
                spaceBetween: 15,
                centeredSlides: true,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                slidesPerView: 'auto',
            },
            baseDomain: baseUrl,
            style: false
        }
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    mounted() {
        this.$nextTick(() => {
            this.swiperTop.controller.control = this.swiperThumbs;
            this.swiperThumbs.controller.control = this.swiperTop;
            this.$forceUpdate();
        });
    }
};
</script>
