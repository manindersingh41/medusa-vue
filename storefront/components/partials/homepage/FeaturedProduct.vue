<template>
    <section class="ps-section--featured">
        <div class="container">
            <h3 class="ps-section__title">{{ title }}</h3>
            <div class="ps-section__content">
                <div class="row" v-if="loading">
                    <div
                        class="col-6 col-sm-4 col-lg-2dot4"
                        v-for="item in 5"
                        :key="item"
                    >
                        <v-skeleton-loader
                        type="image, article"
                        ></v-skeleton-loader>
                    </div>
                </div>
                <div class="row m-0" v-else>
                    <div
                        class="col-6 col-sm-4 col-lg-2dot4 p-0"
                        v-for="(item, index) in dataList"
                        :key="index"
                    >
                        <product-standard :product="item" />
                    </div>
                </div>
                <div class="ps-shop__more"><a href="#">Show all</a></div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
import { mapState } from 'vuex';

export default {
    props: {
        title: {
            type: String,
            default: ''
        },
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
};
</script>
