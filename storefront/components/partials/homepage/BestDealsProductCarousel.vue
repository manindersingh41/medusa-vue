<template>
    <section class="ps-section--deals">
        <div class="container">
            <div class="ps-section__header">
                <h3 class="ps-section__title">{{ title }}</h3>
                <count-down />
            </div>
            <div class="ps-section__carousel">
                <div class="ps-swiper">
                    <div class="swiper" v-swiper:bestDealsProductSwiper="swiperOption">
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
                                v-for="(item, index) in products"
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
        </div>
    </section>
</template>


<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
import CountDown from '~/components/elements/commons/CountDown';
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
    components: { ProductStandard, CountDown },
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
                        slidesPerView: 4
                    },
                    1200: {
                        slidesPerView: 5
                    }
                }
            },
            products: []
        }
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    mounted() {
        this.setData();
    },
    methods: {
        setData() {
            if (this.dataList && this.dataList.length) {
                this.products = [];
                this.dataList.forEach(element => {
                    let product = Object.assign({}, element);
                    let percent = Math.floor(Math.random() * 50) + 10;
                    product.percent = '-' + percent + '%';
                    product.footer = true;
                    product.available = Math.floor(Math.random() * 10) + 1; 
                    this.products.push(product);
                });
            }
        }
    },
    watch: {
        dataList() {
            this.setData();
        }
    }
}
</script>
