<template>
    <div class="ps-cart--mini">
        <div class="ps-cart__empty" v-if="!products.length">
            <div class="ps-cart__icon">
                <i class="fa fa-shopping-basket"></i>
            </div>
            <p class="ps-cart__text">Your cart is currently empty</p>
        </div>
        <template v-else>
            <ul class="ps-cart__items">
                <li
                    class="ps-cart__item"
                    v-for="(product, index) in products"
                    :key="index"
                >
                    <product-mini-cart :product="product" />
                </li>
            </ul>
            <div class="ps-cart__total">
                <span>Subtotal </span><span>${{totalCart}}</span>
            </div>
            <div class="ps-cart__footer">
                <nuxt-link class="ps-btn ps-btn--outline" to="/shop/shopping-cart"
                    >View Cart</nuxt-link
                ><nuxt-link class="ps-btn ps-btn--warning" to="/shop/checkout">Checkout</nuxt-link>
            </div>
        </template>
    </div>
</template>

<script>
import ProductMiniCart from '~/components/elements/product/ProductMiniCart';
import { mapState } from 'vuex';
export default {
    components: { ProductMiniCart },
    computed: {
        ...mapState({
            products: state => state.product.cartProducts,
            cartItems: state => state.cart.cartItems
        }),
        totalCart() {
            let total = 0;
            this.products.forEach(element => {
                let price = this.productPrice(element);
                let quantity = this.productQuantity(element);
                total+= price * quantity;
            });
            return total.toFixed(2);
        }
    },
    methods: {
        productPrice(product) {
            if (product) {
                return product.sale_price ? product.sale_price : product.price;
            } else {
                return 0;
            }
        },
        productQuantity(product) {
            const item = this.cartItems.find(item => item.id === product.id);
            if (item) {
                return item.quantity;
            }
            return 1;
        }
    }
};
</script>
