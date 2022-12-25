<template>
    <section class="ps-section--review-product">
        <h2 class="ps-section__title">Latest reviews</h2>
        <a class="ps-section__toggle" href="#" @click.prevent="activeForm = !activeForm">Write a review</a>
        <slide-up-down :active="activeForm">
            <form-review @submit="handleReview" />
        </slide-up-down>
        <div class="ps-section__content">
            <ul class="ps-section__list">
                <template v-for="(item, index) in reviews">
                    <li :key="index" v-if="index < 4">
                        <review-item :item="item" />
                    </li>
                </template>
            </ul>
        </div>
    </section>
</template>

<script>
import FormReview from '~/components/elements/commons/FormReview';
import { reviews } from '~/static/data/common.json';
import ReviewItem from '~/components/elements/commons/ReviewItem';

export default {
    components: {
        FormReview,
        ReviewItem
    },
    data() {
        return {
            reviews: reviews,
            activeForm: false
        }
    },
    methods: {
        handleReview(data) {
            console.log('data', data);
        }
    }
}
</script>
