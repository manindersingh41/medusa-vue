<template>
    <div class="product-list" >
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-3" v-for="(product, index) in products" :key="index">
                <product-standard :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
import { getProducts } from '~/repositories/ProductRepository';

export default {
    components: { ProductStandard },
    data() {
        return {
            products: []
        }
    },
    async mounted() {
        const params = {
            _limit: 4
        }
        this.products = await getProducts(params);
    }
}
</script>
