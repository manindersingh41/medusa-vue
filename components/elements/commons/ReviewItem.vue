<template>
    <div class="ps-review">    
        <div class="ps-review__text">{{ item.text }}</div>
        <div class="ps-review__name">{{ item.name }}</div>
        <div class="ps-review__review">
            <rating-component :value="item.rate" />
        </div>
    </div>
</template>

<script>
import RatingComponent from '~/components/elements/commons/RatingComponent';

export default {
    props: {
        item: Object,
        default: () => {}
    },
    components: { RatingComponent }
}
</script>
