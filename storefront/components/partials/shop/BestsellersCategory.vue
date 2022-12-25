<template>
    <section class="ps-section--seller-diagnosis">
        <h3 class="ps-section__title">{{ title }}</h3>
        <div class="ps-section__carousel">
            <div class="ps-swiper">
                <div class="swiper" v-swiper:bestDealsProductSwiper="swiperOption">
                    <div class="swiper-wrapper" v-if="loading">
                        <div
                            class="swiper-slide ps-preloader"
                            v-for="item in 4" 
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
                    <div class="swiper-button-prev prev-best-deals"></div>
                    <div class="swiper-button-next next-best-deals"></div>
                </div>
                <div class="swiper-pagination pagination-best-deals"></div>
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
                    delay: 10000,
                    disableOnInteraction: false
                },
                navigation: {
                    prevEl: '.prev-best-deals',
                    nextEl: '.next-best-deals'
                },
                pagination: {
                    el: '.pagination-best-deals',
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
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
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
