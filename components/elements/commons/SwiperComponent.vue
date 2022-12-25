<template>
    <div class="ps-swiper">
        <div class="swiper" v-swiper:componentSwiper="options">
            <div class="swiper-wrapper">
                <!--<div
                    class="swiper-slide"
                    v-for="(item, index) in listData"
                    :key="index"
                >
                </div> -->
                <slot></slot>
            </div>
        </div>
        <div class="ps-slide__nav">
            <div :class="['swiper-button swiper-button-prev', navigationPrev]"></div>
            <div :class="['swiper-button swiper-button-next', navigationNext]"></div>
        </div>
        <div :class="['swiper-pagination pagination-component', pagination]"></div>
    </div>
</template>
<script>
export default {
    props: {
        options: {
            type: Object
        },
        pagination: {
            type: String,
            default: ''
        },
        navigationNext: {
            type: String,
            default: ''
        },
        navigationPrev: {
            type: String,
            default: ''
        }
    }
}
</script>
