<template>
    <section class="ps-section--blog">
        <div class="container">
            <h3 class="ps-section__title">{{ title }}</h3>
            <div class="ps-section__carousel">
                <div class="ps-swiper">
                    <div class="swiper" v-swiper:latestBlogSwiper="swiperOption">
                        <div class="swiper-wrapper" v-if="loading">
                            <div
                                class="swiper-slide ps-preloader"
                                v-for="item in 3" 
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
                                <post-latset :item="item" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PostLatset from '~/components/elements/commons/PostLatset';
import { mapState } from 'vuex';

export default {
    props: {
        title: {
            type: String,
            default: 'From the blog'
        },
        dataList: {
            type: Array,
            default: () => []
        }
    },
    components: { PostLatset },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
                loop: false,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3
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
