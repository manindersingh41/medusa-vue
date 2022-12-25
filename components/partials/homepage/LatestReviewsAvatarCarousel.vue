<template>
    <section class="ps-section--reviews ps-reviews--3">
        <h3 class="ps-section__title"> <img src="/img/quote-icon.png" alt>Latest reviews</h3>
        <div class="ps-section__content">
            <div class="ps-swiper">
                <div class="swiper" v-swiper:latestReviewSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(item, index) in reviews"
                            :key="index"
                        >
                            <review-avatar-item :item="item" />
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination pagination-latest-review"></div>
            </div>
            <div class="text-center"><a class="ps-section__link" href="#">Load more reviews</a></div>
        </div>
    </section>
</template>

<script>
import { reviews } from '~/static/data/common.json';
import ReviewAvatarItem from '~/components/elements/commons/ReviewAvatarItem';

export default {
    components: { ReviewAvatarItem },
    data() {
        return {
            reviews: reviews,
            swiperOption: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.pagination-latest-review',
                    clickable: true
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
                        slidesPerView: 4
                    }
                }
            }
        }
    }
}
</script>