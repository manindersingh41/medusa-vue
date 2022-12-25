<template>
    <div class="ps-product ps-product--standard" v-if="product">
        <div class="ps-product__thumbnail">
            <nuxt-link
                class="ps-product__image"
                :to="`/product/layout/layout-1/${product.id}`"
                v-if="product.thumbnail"
            >
                <figure>
                    <img :src="baseDomain + product.thumbnail.url" alt="alt" />
                    <img
                        v-if="product.thumbnail_back"
                        :src="baseDomain + product.thumbnail_back.url"
                        alt="alt"
                    /></figure
            ></nuxt-link>
            <div class="ps-product__actions">
                <div
                    class="ps-product__item"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Wishlist"
                >
                    <a href="#" @click.prevent="addProductToWishlist()"
                        ><i class="fa fa-heart-o"></i
                    ></a>
                </div>
                <div
                    class="ps-product__item rotate"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to compare"
                >
                    <a href="#" @click.prevent="addProductCompare()"
                        ><i class="fa fa-align-left"></i
                    ></a>
                </div>
                <div
                    class="ps-product__item"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Quick view"
                >
                    <a href="#" @click.prevent="productQuickview()"
                        ><i class="fa fa-search"></i
                    ></a>
                </div>
                <div
                    class="ps-product__item"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to cart"
                >
                    <a href="#" @click.prevent="addToCart()"
                        ><i class="fa fa-shopping-basket"></i
                    ></a>
                </div>
            </div>
            <div class="ps-product__badge" v-if="product.badges.length">
                <div
                    v-for="item in product.badges"
                    :key="item.id"
                    :class="[
                        'ps-badge',
                        item.value == 'hot'
                            ? 'ps-badge--hot'
                            : item.value == 'new'
                            ? 'ps-badge--new'
                            : item.value == 'sale'
                            ? 'ps-badge--sale'
                            : 'ps-badge--sold'
                    ]"
                >
                    {{ item.name }}
                </div>
            </div>
            <div class="ps-product__percent" v-if="product.percent">
                {{ product.percent }}
            </div>
        </div>
        <div class="ps-product__content">
            <nuxt-link class="ps-product__branch" to="/" v-if="product.branch"
                >MyMedi</nuxt-link
            >
            <h5 class="ps-product__title">
                <nuxt-link :to="`/product/layout/layout-1/${product.id}`">{{
                    product.name
                }}</nuxt-link>
            </h5>
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
            <div class="ps-product__rating">
                <rating-component :value="rating" />
                <span class="ps-product__review">(Reviews)</span>
            </div>
            <div class="ps-product__footer" v-if="product.footer">
                No of pcs <br/>available <span>{{ product.available }}</span>
            </div>
            <div class="ps-product__desc">
                <ul class="ps-product__list">
                    <li>Study history up to 30 days</li>
                    <li>Up to 5 users simultaneously</li>
                    <li>Has HEALTH certificate</li>
                </ul>
            </div>
            <div class="ps-product__actions ps-product__group-mobile">
                <div class="ps-product__quantity">
                    <div class="def-number-input number-input safari_only">
                        <button
                            class="minus"
                            @click="quantity > 0 ? quantity-- : quantity"
                        >
                            <i class="icon-minus"></i>
                        </button>
                        <input
                            class="quantity"
                            min="0"
                            v-model="quantity"
                            type="number"
                        />
                        <button class="plus" @click="quantity++">
                            <i class="icon-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="ps-product__cart">
                    <a
                        class="ps-btn ps-btn--warning"
                        href="#"
                        @click.prevent="addToCart()"
                        >Add to cart</a
                    >
                </div>
                <!-- <div class="ps-product__item cart">
                    <a href="#" @click.prevent="addToCart()"
                        ><i class="fa fa-shopping-basket"></i
                    ></a>
                </div>
                <div class="ps-product__item">
                    <a href="#" @click.prevent="addProductToWishlist()"
                        ><i class="fa fa-heart-o"></i
                    ></a>
                </div>
                <div class="ps-product__item rotate">
                    <a href="#" @click.prevent="addProductCompare()"
                        ><i class="fa fa-align-left"></i
                    ></a>
                </div> -->
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
        }
    },
    components: { RatingComponent },
    data() {
        return {
            baseDomain: baseUrl,
            quantity: 1
        };
    },
    computed: {
        productPrice() {
            if (this.product) {
                return this.product.sale_price
                    ? this.product.sale_price
                    : this.product.price;
            } else {
                return 0;
            }
        },
        totalPrice() {
            return Math.round(this.quantity * this.productPrice * 100) / 100;
        },
        rating() {
            return Math.floor(Math.random() * Math.floor(6) + 3);
        }
    },
    methods: {
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
        },
        addProductCompare() {
            this.$store.commit('cart/setDialogQuickview', false);
            this.$store.commit('cart/setDialogAddCart', false);
            this.$store.commit('compare/setDialogCompare', true);
            this.$store.dispatch('compare/addItemToCompare', this.product);
            this.$store.commit('cart/setDialogAddCart2', false);
        },
        productQuickview() {
            this.$store.commit('cart/setProductOverview', this.product);
            this.$store.commit('cart/setDialogQuickview', true);
            this.$store.commit('cart/setDialogAddCart', false);
            this.$store.commit('compare/setDialogCompare', false);
            this.$store.commit('cart/setDialogAddCart2', false);
        },
        addProductToWishlist() {
            const params = {
                id: this.product.id
            };
            const title = this.product ? this.product.name : '';
            const message = {
                icon: 'icon-shield-check',
                message: title + ' has been added to your wishlist !'
            };
            this.$store.dispatch('wishlist/addItemToWishlist', params);
            this.$store.commit('product/addWishlistItem', this.product);
            this.$store.commit('cart/setDialogAddCart2', false);
            this.$store.commit('app/setMessageNotify', message);
            this.$store.commit('app/setDialogNotify', true);
        }
    }
};
</script>
