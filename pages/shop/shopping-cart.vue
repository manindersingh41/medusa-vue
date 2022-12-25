<template>
    <div class="ps-shopping">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h3 class="ps-shopping__title">Shopping cart<sup>({{ productCartQuantity }})</sup></h3>
            <div class="ps-shopping__content">
                <div class="row">
                    <div class="col-12 col-sm-7 col-md-9">
                        <ul class="ps-shopping__list">
                            <li v-for="(product, index) in cartProducts" :key="index">
                                <product-wishlist :product="product" type="cart" />
                            </li>
                        </ul>
                        <div class="ps-shopping__table">
                            <table class="table ps-table ps-table--product">
                                <thead>
                                    <tr>
                                        <th class="ps-product__remove"></th>
                                        <th class="ps-product__thumbnail"></th>
                                        <th class="ps-product__name">Product name</th>
                                        <th class="ps-product__meta">Unit price</th>
                                        <th class="ps-product__quantity">Quantity</th>
                                        <th class="ps-product__subtotal">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in cartProducts" :key="index">
                                        <td class="ps-product__remove"> <a href="#" @click.prevent="handleRemove(product)"><i class="icon-cross"></i></a></td>
                                        <td class="ps-product__thumbnail">
                                            <nuxt-link class="ps-product__image" :to="`/product/layout/layout-1/${product.id}`" v-if="product.thumbnail">
                                                <figure><img :src="baseDomain + product.thumbnail.url" alt></figure>
                                            </nuxt-link>
                                        </td>
                                        <td class="ps-product__name"> 
                                            <nuxt-link :to="`/product/layout/layout-1/${product.id}`">{{ product.name }}</nuxt-link>
                                        </td>
                                        <td class="ps-product__meta">
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
                                        </td>
                                        <td class="ps-product__quantity">
                                            <div class="def-number-input number-input safari_only">
                                                <button
                                                    class="minus"
                                                    @click="handleDecreaseItem(product)"
                                                >
                                                    <i class="icon-minus"></i>
                                                </button>
                                                <input
                                                    class="quantity"
                                                    min="0"
                                                    :value="productQuantity(product)"
                                                    type="number"
                                                    @input="val => handleChangeQuantity(val, product)"
                                                />
                                                <button class="plus" @click="handleincreaseItem(product)">
                                                    <i class="icon-plus"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td class="ps-product__subtotal">${{ productTotal(product) }}</td>
                                    </tr>
                                    <tr v-if="!cartProducts || !cartProducts.length">
                                        <td colspan="6">No item</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="ps-shopping__footer">
                            <div class="ps-shopping__coupon">
                                <v-text-field
                                    class="form-control ps-input"
                                    v-model="couponCode"
                                    rounded
                                    placeholder="Coupon code"
                                />
                                <button class="ps-btn ps-btn--primary" type="button" @click="handleCoupon()">Apply coupon</button>
                            </div>
                            <div class="ps-shopping__button">
                                <button class="ps-btn ps-btn--primary" type="button" @click="handleClearAll()">Clear All</button>
                                <button class="ps-btn ps-btn--primary" type="button" @click="handleUpdateCart()">Update cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-5 col-md-3">
                        <div class="ps-shopping__label">Cart totals</div>
                        <div class="ps-shopping__box">
                            <div class="ps-shopping__row">
                                <div class="ps-shopping__label">Subtotal</div>
                                <div class="ps-shopping__price">${{ totalCart }}</div>
                            </div>
                            <div class="ps-shopping__label">Shipping</div>
                            <div class="ps-shopping__checkbox">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="cart-free-ship" checked>
                                    <label class="form-check-label" for="cart-free-ship">Free shipping</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="cart-ship">
                                    <label class="form-check-label" for="cart-ship">Local Pickup: $10.00</label>
                                </div>
                            </div>
                            <div class="ps-shopping__text">Shipping options will be updated during checkout.</div>
                            <a class="ps-shopping__toggle" href="#" @click.prevent="calculateShipping = !calculateShipping">Calculate shipping</a>
                            <div class="ps-shopping__form" v-show="calculateShipping">
                                <div class="ps-shopping__group">
                                    <v-select
                                    :items="items"
                                    rounded
                                    class="ps-input"
                                    v-model="region"
                                    item-text="text"
                                    item-value="value"
                                    ></v-select>
                                </div>
                                <div class="ps-shopping__group">
                                    <v-text-field
                                        class="form-control ps-input"
                                        v-model="country"
                                        rounded
                                        placeholder="County"
                                    />
                                </div>
                                <div class="ps-shopping__group">
                                    <v-text-field
                                        class="form-control ps-input"
                                        v-model="town"
                                        rounded
                                        placeholder="Town / City"
                                    />
                                </div>
                                <div class="ps-shopping__group">
                                    <v-text-field
                                        class="form-control ps-input"
                                        v-model="postcode"
                                        rounded
                                        placeholder="Postcode"
                                    />
                                </div>
                            </div>
                            <div class="ps-shopping__row">
                                <div class="ps-shopping__label">Total</div>
                                <div class="ps-shopping__price">${{ totalCart }}</div>
                            </div>
                            <div class="ps-shopping__checkout">
                                <nuxt-link class="ps-btn ps-btn--warning" to="/shop/checkout">Proceed to checkout</nuxt-link>
                                <nuxt-link class="ps-shopping__link" to="/shop">Continue To Shopping</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <latest-product-carousel title="You may be interested in…" :dataList="latestProduct" />
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import LatestProductCarousel from '~/components/partials/homepage/LatestProductCarousel';
import { getListIdProduct } from '~/repositories/ProductRepository';
import { mapState } from 'vuex';
import { baseUrl } from '~/repositories/Repository';
import ProductWishlist from '~/components/elements/product/ProductWishlist';

export default {
    layout: 'default',
    components: { Breadcrumb, LatestProductCarousel, ProductWishlist },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/shop/shopping-cart',
                    extraClass: 'active',
                    text: 'Shopping cart'
                }
            ],
            latestProduct: [],
            baseDomain: baseUrl,
            calculateShipping: false,
            items: [
                {
                    text: 'Afghanistan',
                    value: 'Afghanistan'
                },
                {
                    text: 'Åland Islands',
                    value: 'Åland Islands'
                },
                {
                    text: 'Albania',
                    value: 'Albania'
                },
                {
                    text: 'Andorra',
                    value: 'Andorra'
                },
                {
                    text: 'American Samoa',
                    value: 'American Samoa'
                }
            ],
            region: null,
            country: null,
            town: null,
            postcode: null,
            couponCode: null
        }
    },
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
                total+= price * quantity;
            });
            return total.toFixed(2);
        },
        productCartQuantity() {
            let quantity = 0;
            this.cartItems.forEach(element => {
                quantity += element.quantity;
            });
            return quantity;
        }
    },
    async mounted() {
        let query = 'id=3&id=5&id=8&id=9&id=15&id=51&id=22&id=21&id=24&id=25';
        this.latestProduct = await getListIdProduct(query);
        this.$store.commit('app/setLoading', false);
    },
    methods: {
        handleCoupon() {
            console.log('couponCode', this.couponCode);
        },
        handleUpdateCart() {
            this.$router.go(this.$router.currentRoute);
        },
        handleClearAll() {
            this.$store.dispatch("cart/clearCart");
            this.$store.commit("product/clearAllCartProduct");
        },
        handleRemove(product) {
            this.$store.dispatch("cart/removeProductCart", product.id);
            this.$store.commit("product/removeCartProduct", product.id);
        },
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
        },
        productTotal(product) {
            let total = this.productPrice(product) * this.productQuantity(product);
            return total.toFixed(2);
        },
        handleDecreaseItem(product) {
            const params = {
                quantity: this.productQuantity(product) - 1,
                id: product.id
            };
            this.$store.dispatch('cart/changeQuantityProductCart', params);
            this.$store.commit('product/changeCartItemQuantity', params);
        },
        handleincreaseItem(product) {
            const params = {
                quantity: this.productQuantity(product) + 1,
                id: product.id
            };
            this.$store.dispatch('cart/changeQuantityProductCart', params);
            this.$store.commit('product/changeCartItemQuantity', params);
        },
        handleChangeQuantity(val, product) {
            if (val.data) {
                const value = parseInt(val.data);
                let params = {
                    quantity: value < 0 ? 0 : value,
                    id: product.id
                };
                
                this.$store.dispatch('cart/changeQuantityProductCart', params);
                this.$store.commit('product/changeCartItemQuantity', params);
            }
        }
    }
}
</script>
