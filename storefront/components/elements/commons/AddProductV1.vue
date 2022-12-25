<template>
    <v-dialog
        v-model="dialog"
        max-width="1100"
        content-class="ps-dialog ps-addcart"
    >
        <v-card class="ps-dialog__body">
            <button
                class="ps-dialog__close"
                type="button"
                @click="closeModel(false)"
            >
                <i class="icon-cross"></i>
            </button>

            <div class="ps-addcart__body" v-if="productOverview">
                <p class="ps-addcart__noti">
                    <i class="fa fa-check"> </i>Added to cart succesfully
                </p>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <product-standard :product="productOverview" />
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="ps-addcart__content">
                            <p>There are two items in your cart.</p>
                            <p class="ps-addcart__total">
                                Total: <span class="ps-price">${{ totalPrice }}</span>
                            </p>
                            <a
                                class="ps-btn ps-btn--border"
                                href="#"
                                @click.prevent="closeModel(false)"
                                >Continue shopping</a
                            ><nuxt-link
                                class="ps-btn ps-btn--border"
                                to="/shop/shopping-cart"
                                >View cart</nuxt-link
                            ><nuxt-link
                                class="ps-btn ps-btn--warning"
                                to="/shop/checkout"
                                >Proceed to checkout</nuxt-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import ProductStandard from '~/components/elements/product/ProductStandard';

export default {
    components: { ProductStandard },
    computed: {
        ...mapState({
            productOverview: state => state.cart.productOverview,
            dialogAddCart: state => state.cart.dialogAddCart,
            cartItems: state => state.cart.cartItems
        }),
        dialog: {
            set(value) {
                this.closeModel(value);
                return value;
            },
            get() {
                return this.dialogAddCart;
            }
        },
        productPrice() {
            if (this.productOverview) {
                return this.productOverview.sale_price
                    ? this.productOverview.sale_price
                    : this.productOverview.price;
            } else {
                return 0;
            }
        },
        productQuantity() {
            const item = this.cartItems.find(item => item.id === this.productOverview.id);
            if (item) {
                return item.quantity;
            }
            return 1;
        },
        totalPrice() {
            return Math.round(this.productQuantity * this.productPrice * 100) / 100;
        }
    },
    methods: {
        closeModel(value) {
            this.$store.commit('cart/setDialogAddCart', value);
        }
    }
};
</script>
