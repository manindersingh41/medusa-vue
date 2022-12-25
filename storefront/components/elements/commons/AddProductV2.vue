<template>
    <v-dialog v-model="dialog" max-width="800" content-class="ps-dialog ps-addcart">
        <v-card class="ps-dialog__body">
            <button
                class="ps-dialog__close"
                type="button"
                @click="closeModel(false)"
            >
                <i class="icon-cross"></i>
            </button>

            <div class="ps-addcart__body" v-if="productOverview">
                <div class="ps-addcart__overlay">
                    <div class="ps-addcart__loading"></div>
                </div>
                <p class="ps-addcart__noti"> <i class="fa fa-check"> </i>Added to cart succesfully</p>
                <div class="ps-addcart__product">
                    <div class="ps-product ps-product--standard">
                        <div class="ps-product__thumbnail">
                            <nuxt-link class="ps-product__image" to="#">
                                <figure>
                                    <img :src="baseDomain + productOverview.thumbnail.url" alt="alt" />
                                    <img
                                        v-if="productOverview.thumbnail_back"
                                        :src="baseDomain + productOverview.thumbnail_back.url"
                                        alt="alt"
                                    />
                                </figure>
                            </nuxt-link>
                        </div>
                        <div class="ps-product__content">
                            <div class="ps-product__title">{{ productOverview.name }}</div>
                            <div class="ps-product__quantity"><span>x{{ productQuantity }}</span></div>
                            <div class="ps-product__meta">
                                <span
                                    :class="[
                                        'ps-product__price',
                                        productOverview.sale_price ? 'sale' : ''
                                    ]"
                                    >${{
                                        productOverview.sale_price ? productOverview.sale_price : productOverview.price
                                    }}</span
                                >
                                <span class="ps-product__del" v-if="productOverview.sale_price"
                                    >${{ productOverview.price }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ps-addcart__header">
                    <h3>Want o add one of these?</h3>
                    <p>People who buy this product buy also:</p>
                </div>
                <div class="ps-addcart__content">
                    <div class="ps-swiper">
                        <div v-swiper:swiperAddCart="swiperOption" class="swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(product, index) in products" :key="index">
                                    <product-standard :product="product" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ps-addcart__footer">
                    <a class="ps-btn ps-btn--border" href="#" @click.prevent="closeModel(false)">No thanks :(</a>
                    <nuxt-link class="ps-btn ps-btn--warning" to="/shop/shopping-cart">Continue to Cart</nuxt-link>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import { baseUrl } from '~/repositories/Repository';
import ProductStandard from '~/components/elements/product/ProductStandard';
import { getProducts } from '~/repositories/ProductRepository';

export default {
    components: {
        ProductStandard
    },
    data() {
        return {
            baseDomain: baseUrl,
            swiperOption: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                loop: false,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false
                }
            },
            products: []
        }
    },
    computed: {
        ...mapState({
            productOverview: state => state.cart.productOverview,
            dialogAddCart2: state => state.cart.dialogAddCart2,
            cartItems: state => state.cart.cartItems
        }),
        dialog: {
            set(value) {
                this.closeModel(value);
                return value;
            },
            get() {
                return this.dialogAddCart2;
            }
        },
        productQuantity() {
            const item = this.cartItems.find(item => item.id === this.productOverview.id);
            if (item) {
                return item.quantity;
            }
            return 1;
        }
    },
    async mounted() {
        const params = {
            _limit: 8
        }
        this.products = await getProducts(params);
    },
    methods: {
        closeModel(value) {
            this.$store.commit('cart/setDialogAddCart2', value);
        }
    },
    watch: {
        dialog() {
            this.$nextTick(() => {
                this.$forceUpdate();
            });
        }
    }
}
</script>
