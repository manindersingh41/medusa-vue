<template>
    <div class="ps-product--mini-cart">
        <nuxt-link class="ps-product__thumbnail" :to="`/product/layout/layout-1/${product.id}`" v-if="product && product.thumbnail"
            ><img :src="baseDomain + product.thumbnail.url" alt="alt"
        /></nuxt-link>
        <div class="ps-product__content">
            <nuxt-link class="ps-product__name" :to="`/product/layout/layout-1/${product.id}`"
                >{{ product.name }}</nuxt-link
            >
            <div class="ps-product__quantity">
                <div class="def-number-input number-input safari_only">
                    <button
                        class="minus"
                        @click="handleDecreaseItem()"
                    >
                        <i class="icon-minus"></i>
                    </button>
                    <input
                        class="quantity"
                        min="0"
                        :value="productQuantity"
                        type="number"
                        @input="val => handleChangeQuantity(val)"
                    />
                    <button class="plus" @click="handleincreaseItem()">
                        <i class="icon-plus"></i>
                    </button>
                </div>
            </div>
            <div class="ps-product__meta">
                <span :class="['ps-product__price', product.sale_price ? 'sale' : '']">${{ product.sale_price ? product.sale_price : product.price }}</span
                >
                <span class="ps-product__del" v-if="product.sale_price">${{ product.price }}</span>
            </div>
        </div>
        <a class="ps-product__remove" href="#" @click.prevent="removeCartItem()"
            ><i class="icon-cross"></i
        ></a>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import { mapState } from 'vuex';

export default {
    props: {
        product: {
            type: Object
        }
    },
    data() {
        return {
            baseDomain: baseUrl
        };
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems
        }),
        productQuantity() {
            const item = this.cartItems.find(item => item.id === this.product.id);
            if (item) {
                return item.quantity;
            }
            return 1;
        }
    },
    methods: {
        removeCartItem() {
            this.$store.dispatch('cart/removeProductCart', this.product.id);
            this.$store.commit('product/removeCartProduct', this.product.id);
        },
        handleDecreaseItem() {
            const params = {
                quantity: this.productQuantity - 1,
                id: this.product.id
            };
            this.$store.dispatch('cart/changeQuantityProductCart', params);
            this.$store.commit('product/changeCartItemQuantity', params);
        },
        handleincreaseItem() {
            const params = {
                quantity: this.productQuantity + 1,
                id: this.product.id
            };
            this.$store.dispatch('cart/changeQuantityProductCart', params);
            this.$store.commit('product/changeCartItemQuantity', params);
        },
        handleChangeQuantity(val) {
            if (val.data) {
                const value = parseInt(val.data);
                let params = {
                    quantity: value < 0 ? 0 : value,
                    id: this.product.id
                };
                
                this.$store.dispatch('cart/changeQuantityProductCart', params);
                this.$store.commit('product/changeCartItemQuantity', params);
            }
        }
    }
};
</script>
