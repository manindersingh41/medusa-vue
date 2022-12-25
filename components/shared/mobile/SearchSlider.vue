<template>
    <div class="ps-search">
        <div class="ps-search__content ps-search--mobile">
            <a
                class="ps-search__close"
                href="#"
                @click.prevent="handleCloseDrawer()"
                ><i class="icon-cross"></i
            ></a>
            <h3>Search</h3>
            <form>
                <div class="ps-search-table">
                    <div class="input-group">
                        <input
                            class="form-control ps-input"
                            type="text"
                            placeholder="Search for products"
                            v-model="textSearch"
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
            <div :class="['ps-search__result', openResult ? 'active' : '']">
                <p v-if="!resultProduct" class="ps-result__empty">
                    Product not found!
                </p>
                <div v-else>
                    <div
                        class="ps-search__item"
                        v-for="product in resultProduct"
                        :key="product.id"
                    >
                        <product-horizontal :product="product" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductHorizontal from '~/components/elements/product/ProductHorizontal';
import { getProductSearch } from '~/repositories/ProductRepository';

export default {
    components: {
        ProductHorizontal
    },
    data() {
        return {
            textSearch: null,
            openResult: false,
            resultProduct: null
        };
    },
    computed: {
        ...mapState({
            appDrawer: state => state.app.appDrawer
        })
    },
    methods: {
        handleCloseDrawer() {
            this.openResult = false;
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        },
        async handleSearch() {
            const params = {
                limit: 10,
                name: this.textSearch
            };
            this.resultProduct = await getProductSearch(params);
            this.$store.dispatch(
                'search/addItemToHistorys',
                this.textSearch
            );
            this.openResult = true;
        }
    }
};
</script>
