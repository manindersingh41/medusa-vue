<template>
    <div class="ps-wishlist">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h3 class="ps-wishlist__title">My wishlist on MyMedi</h3>
            <div class="ps-wishlist__content">
                <ul class="ps-wishlist__list">
                    <li v-for="(product, index) in wishlistProducts" :key="index">
                        <product-wishlist :product="product" type="wishlist" />
                    </li>
                </ul>
                <div class="ps-wishlist__table">
                    <table class="table ps-table ps-table--product">
                        <thead>
                            <tr>
                                <th class="ps-product__remove"></th>
                                <th class="ps-product__thumbnail"></th>
                                <th class="ps-product__name">Product name</th>
                                <th class="ps-product__meta">Unit price</th>
                                <th class="ps-product__status">Stock status</th>
                                <th class="ps-product__cart"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in wishlistProducts" :key="index">
                                <td class="ps-product__remove"> <a href="#" @click.prevent="handleRemoveProduct(product)"><i class="icon-cross"></i></a></td>
                                <td class="ps-product__thumbnail">
                                    <nuxt-link class="ps-product__image" :to="`/product/layout/layout-1/${product.id}`" v-if="product.thumbnail">
                                        <figure><img :src="baseDomain + product.thumbnail.url" alt></figure>
                                    </nuxt-link>
                                </td>
                                <td class="ps-product__name"><nuxt-link :to="`/product/layout/layout-1/${product.id}`">{{ product.name }}</nuxt-link></td>
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
                                <td class="ps-product__status"> 
                                    <span class="ps-product__instock" v-if="index != 0">In Stock</span>
                                    <span class="ps-product__outstock" v-else>Out of stock</span>
                                </td>
                                <td class="ps-product__cart">
                                    <button class="ps-btn" @click="addToCart(product)">Add to cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="ps-wishlist__share">
                    <label>Share on:</label>
                    <social-icon-color />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import SocialIconColor from '~/components/shared/SocialIconColor';
import { mapState } from 'vuex';
import { baseUrl } from '~/repositories/Repository';
import ProductWishlist from '~/components/elements/product/ProductWishlist';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        SocialIconColor,
        ProductWishlist
    },
    data() {
        return {
            baseDomain: baseUrl,
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/shop/wishlist',
                    extraClass: 'active',
                    text: 'Wishlist'
                }
            ]
        }
    },
    computed: {
        ...mapState({
            wishlistItems: state => state.wishlist.items,
            wishlistProducts: state => state.product.wishlistItems
        })
    },
    methods: {
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
            this.$store.commit('cart/setDialogAddCart2', false);
        },
        handleRemoveProduct(product) {
            this.$store.dispatch('wishlist/removeItemFromWishlist', product.id);
            this.$store.commit('product/removeWishlistItem', product.id);
        }
    }
}
</script>
