<template>
    <div class="ps-product ps-product--wishlist" v-if="product">
        <div class="ps-product__remove"><a href="#" @click.prevent="handleRemove()"><i class="icon-cross"></i></a></div>
        <div class="ps-product__thumbnail">
            <nuxt-link class="ps-product__image" :to="`/product/layout/layout-1/${product.id}`">
                <figure><img :src="baseDomain + product.thumbnail.url" alt="alt" />
                    <img :src="baseDomain + product.thumbnail_back.url" alt="alt" />
                </figure>
            </nuxt-link>
        </div>
        <div class="ps-product__content">
            <h5 class="ps-product__title"><nuxt-link :to="`/product/layout/layout-1/${product.id}`">{{ product.name }}</nuxt-link></h5>
            <div class="ps-product__row">
                <div class="ps-product__label">Price:</div>
                <div class="ps-product__value">
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
            </div>
            <div class="ps-product__row ps-product__stock">
                <div class="ps-product__label">Stock:</div>
                <div class="ps-product__value">
                    <span class="ps-product__in-stock">In Stock</span>
                    <span class="ps-product__out-stock" v-show="false">Out of stock</span>
                </div>
            </div>
            <div class="ps-product__cart">
                <button class="ps-btn" @click="addToCart()">Add to cart</button>
            </div>
            <div class="ps-product__row ps-product__quantity">
                <div class="ps-product__label">Quantity:</div>
                <div class="ps-product__value">{{ quantity }}</div>
            </div>
            <div class="ps-product__row ps-product__subtotal">
                <div class="ps-product__label">Subtotal:</div>
                <div class="ps-product__value">${{ productPrice() }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import RatingComponent from '~/components/elements/commons/RatingComponent';

export default {
    props: {
        product: {
            type: Object
        },
        type: {
            type: String,
            default: 'wishlist'
        }
    },
    components: { RatingComponent },
    data() {
        return {
            baseDomain: baseUrl,
            quantity: 1
        };
    },
    methods: {
        handleRemove() {
            if (this.type == 'cart') {
                this.$store.dispatch("cart/removeProductCart", this.product.id);
                this.$store.commit("product/removeCartProduct", this.product.id);
            }
        },
        productPrice() {
            if (this.product) {
                return this.product.sale_price
                    ? this.product.sale_price
                    : this.product.price;
            } 
            return 0;
        },
        addToCart() {
            const params = {
                id: this.product.id,
                quantity: this.quantity
            };
            this.$store.dispatch('cart/addProductToCart', params);
            this.$store.commit('cart/setDialogAddCart', true);
            this.$store.commit('cart/setProductOverview', this.product);
            this.$store.commit('compare/setDialogCompare', false);
            this.$store.commit('cart/setDialogQuickview', false);
            this.$store.commit('product/addCartProduct', this.product);
            this.$store.commit('cart/setDialogAddCart2', false);
        }
    }
}
</script>
