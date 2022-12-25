<template>
    <section class="ps-section--also" style="background-image: url('/img/related-bg.jpg');"> 
        <div class="container">
            <h3 class="ps-section__title">{{ title }}</h3>
            <div class="ps-section__carousel">
                <div class="ps-swiper">
                    <div class="swiper" v-swiper:alsoSwiper="swiperOption">
                        <div class="swiper-wrapper" v-if="loading">
                            <div
                                class="swiper-slide ps-preloader"
                                v-for="item in 5" 
                                :key="item"
                            >
                                <v-skeleton-loader
                                type="image, article"
                                ></v-skeleton-loader>
                            </div>
                        </div>
                        <div class="swiper-wrapper" v-else>
                            <div
                                class="swiper-slide"
                                v-for="(item, index) in dataList"
                                :key="index"
                            >
                                <product-standard :product="item" />
                            </div>
                        </div>
                    </div>
                    <div class="ps-swiper__nav">
                        <div class="swiper-button-prev prev-also-product"></div>
                        <div class="swiper-button-next next-also-product"></div>
                    </div>
                    <div class="swiper-pagination pagination-also-product"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
import { mapState } from 'vuex';

export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        dataList: {
            type: Array,
            default: () => []
        }
    },
    components: { ProductStandard },
    data() {
        return {
            swiperOption: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 0,
                loop: false,
                autoplay: {
                    delay: 12000,
                    disableOnInteraction: false
                },
                navigation: {
                    prevEl: '.prev-also-product',
                    nextEl: '.next-also-product'
                },
                pagination: {
                    el: '.pagination-also-product',
                    clickable: true
                },
                breakpoints: {
                    480: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 4
                    },
                    1200: {
                        slidesPerView: 5
                    }
                }
            }
        }
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    }
}
</script>
