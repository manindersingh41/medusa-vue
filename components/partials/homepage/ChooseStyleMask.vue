<template>
    <section class="ps-section--black-style" :style="{backgroundImage: 'url(' + bgImage + ')'}">
        <div class="container">
            <div class="ps-section__body">
                <h3 class="ps-section__title">Choose your style</h3>
                <div class="ps-section__content">
                    <div class="ps-section__product" v-for="item in products" :key="item.id">
                        <product-standard :product="item" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
export default {
    props: {
        products: {
            type: Array,
            default: () => []
        },
        bgImage: {
            type: String,
            default: ''
        }
    },
    components: {
        ProductStandard
    }
}
</script>
