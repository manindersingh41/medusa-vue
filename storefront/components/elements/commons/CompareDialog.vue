<template>
    <v-dialog v-model="dialog" max-width="1100" content-class="ps-dialog ps-compare">
        <v-card class="ps-dialog__body">
            <button
                class="ps-dialog__close"
                type="button"
                @click="closeModel(false)"
            >
                <i class="icon-cross"></i>
            </button>

            <div class="ps-compare--product">
                <div class="ps-compare__header">
                    <div class="container">
                        <h2>Compare Products</h2>
                    </div>
                </div>
                <div class="ps-compare__content">
                    <div class="ps-compare__table">
                        <table class="table ps-table">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td v-for="product in compareItems" :key="product.id">
                                        <div class="ps-product__remove"><a href="#" @click="removeItemCompare(product)"><i class="fa fa-times"></i></a></div>
                                        <div class="ps-product__thumbnail">
                                            <nuxt-link class="ps-product__image" :to="`/product/layout/layout-1/${product.id}`">
                                                <figure><img :src="baseDomain + product.thumbnail.url" alt></figure>
                                            </nuxt-link>
                                        </div>
                                        <div class="ps-product__content">
                                            <h5 class="ps-product__title"><nuxt-link :to="`/product/layout/layout-1/${product.id}`">{{ product.name }}</nuxt-link></h5>
                                            <div class="ps-product__meta">
                                                <span
                                                    :class="[
                                                        'ps-product__price',
                                                        product.sale_price ? 'sale' : ''
                                                    ]"
                                                    >${{
                                                        product.sale_price ? product.sale_price : product.price
                                                    }}</span
                                                >
                                                <span class="ps-product__del" v-if="product.sale_price"
                                                    >${{ product.price }}</span
                                                >
                                            </div>
                                            <button class="ps-btn ps-btn--warning" @click.prevent="addToCart(product)">Add to cart</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td v-for="product in compareItems" :key="product.id">
                                        <ul class="ps-product__list">
                                            <li class="ps-check-line">5 cleaning programs</li>
                                            <li class="ps-check-line">Digital display</li>
                                            <li class="ps-check-line">Memory for 3 user</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Availability</th>
                                    <td v-for="product in compareItems" :key="product.id">
                                        <p class="ps-product__text ps-check-line">in stock</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td v-for="product in compareItems" :key="product.id">
                                        <p class="ps-product__text">10 kg</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Dimensions</th>
                                    <td v-for="product in compareItems" :key="product.id">
                                        <p class="ps-product__text">10 × 10 × 10 cm</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td v-for="product in compareItems" :key="product.id">
                                        <p class="ps-product__text">Red, Navy</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Sku</th>
                                    <td v-for="product in compareItems" :key="product.id">
                                        <p class="ps-product__text">SF-006</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td v-for="product in compareItems" :key="product.id">
                                        <span class="ps-product__del" v-if="product.sale_price"
                                            >${{ product.price }}</span>
                                        <span
                                            :class="[
                                                'ps-product__price',
                                                product.sale_price ? 'sale' : ''
                                            ]"
                                            >${{
                                                product.sale_price ? product.sale_price : product.price
                                            }}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import { baseUrl } from '~/repositories/Repository';

export default {
    data() {
        return {
            baseDomain: baseUrl
        };
    },
    computed: {
        ...mapState({
            compareItems: state => state.compare.items,
            dialogCompare: state => state.compare.dialogCompare
        }),
        dialog: {
            set(value) {
                this.closeModel(value);
                return value;
            },
            get() {
                return this.dialogCompare;
            }
        }
    },
    methods: {
        closeModel(value) {
            this.$store.commit('compare/setDialogCompare', value);
        },
        addToCart(product) {
            const params = {
                id: product.id,
                quantity: 1
            };
            this.$store.dispatch('cart/addProductToCart', params);
            this.$store.commit('cart/setDialogAddCart', true);
            this.$store.commit('cart/setProductOverview', product);
            this.$store.commit('compare/setDialogCompare', false);
            this.$store.commit('cart/setDialogQuickview', false);
            this.$store.commit('product/addCartProduct', product);
        },
        removeItemCompare(item) {
            this.$store.dispatch('compare/removeItemCompare', item.id)
        }
    }
}
</script>
