<template>
    <section class="ps-section--sellers">
        <div class="container">
            <h3 class="ps-section__title">Top 5 Bestsellers in: </h3>
            <div class="ps-section__tab">
                <v-tabs v-model="tab" centered>
                    <v-tab href="#blood">
                        Blood pressure
                    </v-tab>
                    <v-tab href="#mask">
                        Face masks
                    </v-tab>
                    <v-tab href="#stomatology">
                        Stomatology
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item value="blood">
                        <v-card flat class="tab-content">
                            <div class="ps-swiper">
                                <div class="swiper" v-swiper:tabBloodSwiper="swiperOption1">
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
                                <div class="swiper-pagination pagination-tab-blood"></div>
                            </div>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item value="mask">
                        <v-card flat class="tab-content">
                            <div class="ps-swiper">
                                <div class="swiper" v-swiper:tabMaskSwiper="swiperOption2">
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
                                <div class="swiper-pagination pagination-tab-mask"></div>
                            </div>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item value="stomatology">
                        <v-card flat class="tab-content">
                            <div class="ps-swiper">
                                <div class="swiper" v-swiper:tabStomatologySwiper="swiperOption3">
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
                                <div class="swiper-pagination pagination-tab-stomatology"></div>
                            </div>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </div>
    </section>
</template>

<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
import { mapState } from 'vuex';

export default {
    props: {
        dataList: {
            type: Array,
            default: () => []
        }
    },
    components: { ProductStandard },
    data() {
        return {
            tab: 0,
            swiperOption1: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 0,
                loop: false,
                autoplay: {
                    delay: 11000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.pagination-tab-blood',
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
            },
            swiperOption2: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 0,
                loop: false,
                autoplay: {
                    delay: 11000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.pagination-tab-mask',
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
            },
            swiperOption3: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 0,
                loop: false,
                autoplay: {
                    delay: 11000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.pagination-tab-stomatology',
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
