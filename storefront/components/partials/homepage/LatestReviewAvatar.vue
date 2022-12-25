<template>
    <section class="ps-section--reviews ps-reviews--3">
        <div class="container">
            <h3 class="ps-section__title"> <img src="/img/quote-icon.png" alt>Latest reviews</h3>
            <div class="ps-section__content">
                <ul class="ps-section__list">
                    <li v-for="(item, index) in reviews" :key="index">
                        <review-avatar-item :item="item" />
                    </li>
                </ul>
            </div>
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
            reviews: reviews
        }
    }
}
</script>
