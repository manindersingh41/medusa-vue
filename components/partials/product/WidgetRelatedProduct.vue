<template>
    <div class="ps-widget--related-product">
        <div class="ps-widget__title">Related Products</div>
        <div class="ps-widget__product" v-if="loading">
            <v-skeleton-loader
            type="image, article"
            v-for="item in 2"
            :key="item"
            ></v-skeleton-loader>
        </div>
        <div class="ps-widget__product" v-else>
            <product-standard v-for="(item, index) in dataList" :key="index" :product="item" />
        </div>
    </div>
</template>

<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
import { mapState } from 'vuex';

export default {
    props: {
        dataList: {
            type: Array,
            default: () => []
        }
    },
    components: { ProductStandard },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    }
}
</script>
