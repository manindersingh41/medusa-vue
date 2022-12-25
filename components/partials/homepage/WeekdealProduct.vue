<template>
    <section class="ps-section--weekdeal">
        <h3 class="ps-section__title">Popular categories</h3>
        <div class="ps-section__content">
            <div class="ps-weekdeal__product">
                <count-down />
                <v-skeleton-loader
                type="image, article"
                v-if="loading"
                ></v-skeleton-loader>
                <product-standard :product="product" v-else />
            </div>
        </div>
    </section>
</template>

<script>
import CountDown from '~/components/elements/commons/CountDown';
import ProductStandard from '~/components/elements/product/ProductStandard';
import { mapState } from 'vuex';

export default {
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        CountDown,
        ProductStandard
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    }
}
</script>
