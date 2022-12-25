<template>
    <div class="ps-header__search">
        <form>
            <div class="ps-search-table">
                <div class="input-group">
                    <input
                        class="form-control ps-input"
                        type="text"
                        placeholder="Search for products"
                        v-model="textSearch"
                        @blur="openResult = false"
                        @input="handleSearch()"
                    />
                    <div class="input-group-append">
                        <a href="#" @click.prevent="handleSearch()"
                            ><i class="fa fa-search"></i
                        ></a>
                    </div>
                </div>
            </div>
        </form>
        <div :class="['ps-search--result', openResult ? 'active' : '']">
            <p v-if="!resultProduct" class="ps-result__empty">
                Product not found!
            </p>
            <div class="ps-result__content" v-else>
                <div class="row m-0">
                    <template v-for="(product, index) in resultProduct">
                        <div class="col-12 col-lg-6" v-if="index < 4" :key="product.id">
                            <product-horizontal :product="product" />
                        </div>
                    </template>
                </div>
                <div class="ps-result__viewall" v-if="resultProduct.length > 4">
                    <nuxt-link :to="`/shop/result?text=${textSearch}`">View all {{resultProduct.length}} results</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductHorizontal from '~/components/elements/product/ProductHorizontal';
import { getProductSearch } from '~/repositories/ProductRepository';

export default {
    components: { ProductHorizontal },
    data() {
        return {
            textSearch: null,
            openResult: false,
            resultProduct: null
        };
    },
    methods: {
        async handleSearch() {
            const params = {
                limit: 10,
                name: this.textSearch
            }
            this.resultProduct = await getProductSearch(params);
            this.$store.dispatch('search/addItemToHistorys', this.textSearch);
            this.openResult= true;
        }
    }
};
</script>
