<template>
    <div class="ps-review--product">
        <div class="ps-review__row">
            <div class="ps-review__avatar">
                <img :src="item.image" alt="alt" />
            </div>
            <div class="ps-review__info">
                <div class="ps-review__name">{{ item.name }}</div>
                <div class="ps-review__date">{{ item.date }}</div>
            </div>
            <div class="ps-review__rating" v-if="item.rating">
                <rating-component :value="item.rating" />
            </div>
            <div class="ps-review__desc">
                <p>{{ item.desc }}</p>
                <a class="ps-review__reply" href="#" @click.prevent="handleReply()" v-if="item.post">Reply</a>
            </div>
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
    components: { RatingComponent },
    methods: {
        handleReply() {
            this.$emit('handleReply', this.item);
        }
    }
}
</script>
