<template>
    <section class="ps-section--choose-style" style="background-image: url('/img/related-bg.jpg');">
        <div class="container">
            <h3 class="ps-section__title">Choose your style</h3>
            <div class="ps-section__content" v-if="loading">
                <div class="ps-section__product" v-for="item in 3" :key="item">
                    <v-skeleton-loader
                    type="image, paragraph, text"
                    ></v-skeleton-loader>
                </div>
            </div>
            <div class="ps-section__content" v-else>
                <div class="ps-section__product" v-for="(item, index) in listProduct" :key="index">
                    <product-standard :product="item" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
import { mapState } from 'vuex';

export default {
    props: {
        listProduct: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ProductStandard
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    }
}
</script>
