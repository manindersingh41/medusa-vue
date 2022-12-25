<template>
    <div class="ps-checkout__success">
        <p class="ps-checkout__text">
            Thank you. Your order has been received.
        </p>
        <div class="ps-checkout__box">
            <div class="ps-checkout__item">
                <label class="ps-checkout__label">ORDER NUMBER:</label
                ><span class="ps-checkout__content">17659</span>
            </div>
            <div class="ps-checkout__item">
                <label class="ps-checkout__label">DATE:</label
                ><span class="ps-checkout__content">Jun 20, 2021</span>
            </div>
            <div class="ps-checkout__item">
                <label class="ps-checkout__label">TOTAL:</label
                ><span class="ps-checkout__content">${{ totalCart }}</span>
            </div>
            <div class="ps-checkout__item">
                <label class="ps-checkout__label">PAYMENT METHOD:</label
                ><span class="ps-checkout__content">Check payments</span>
            </div>
        </div>
        <div class="ps-checkout__detail">
            <h2 class="ps-checkout__subtitle">Order details</h2>
            <table class="table ps-table ps-table--responsive">
                <thead>
                    <tr>
                        <th class="ps-table__th-empty">Product</th>
                        <th class="ps-table__th-empty">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in cartProducts" :key="product.id">
                        <td data-label="Product">
                            <span class="ps-product__name">{{
                                product.name
                            }}</span>
                        </td>
                        <td data-label="Total">
                            <span class="ps-checkout__content"
                                >${{ productTotal(product) }}</span
                            >
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Product">
                            <span class="ps-checkout__content">Subtotal:</span>
                        </td>
                        <td data-label="Total">
                            <span class="ps-checkout__content"
                                >${{ totalCart }}</span
                            >
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Product">
                            <span class="ps-checkout__content">Shipping:</span>
                        </td>
                        <td data-label="Total">Free shipping</td>
                    </tr>
                    <tr>
                        <td data-label="Product">
                            <span class="ps-checkout__content"
                                >Payment method:</span
                            >
                        </td>
                        <td data-label="Total">Check payments</td>
                    </tr>
                    <tr>
                        <td data-label="Product">
                            <span class="ps-checkout__content">Total:</span>
                        </td>
                        <td data-label="Total">
                            <span class="ps-checkout__content"
                                >${{ totalCart }}</span
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            cartProducts: state => state.product.cartProducts
        }),
        totalCart() {
            let total = 0;
            this.cartProducts.forEach(element => {
                let price = this.productPrice(element);
                let quantity = this.productQuantity(element);
                total += price * quantity;
            });
            return total.toFixed(2);
        }
    },
    methods: {
        productQuantity(product) {
            const item = this.cartItems.find(item => item.id === product.id);
            if (item) {
                return item.quantity;
            }
            return 1;
        },
        productPrice(product) {
            if (product) {
                return product.sale_price ? product.sale_price : product.price;
            } else {
                return 0;
            }
        },
        productTotal(product) {
            let total =
                this.productPrice(product) * this.productQuantity(product);
            return total.toFixed(2);
        }
    }
};
</script>
