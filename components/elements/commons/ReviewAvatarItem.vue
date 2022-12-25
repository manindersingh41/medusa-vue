<template>
    <div class="ps-review">
        <div class="ps-review__review">
            <rating-component :value="item.rate" />
        </div>
        <div class="ps-review__text">{{ item.text }}</div>
        <div class="ps-review__thumbnail" v-if="item.images"> 
            <img v-for="(val, index) in item.images" :key="index" :src="val" alt="">
        </div>
        <div class="ps-review__author">
            <div class="ps-review__image"><img :src="item.avatar" alt=""></div>
            <span class="ps-review__name">{{ item.name }}</span>
            <span class="ps-review__date">{{ item.date }}</span>
        </div>
    </div>
</template>

<script>
import RatingComponent from '~/components/elements/commons/RatingComponent';
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        RatingComponent
    }
}
</script>
