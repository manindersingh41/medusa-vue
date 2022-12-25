<template>
    <div class="ps-product__feature">
        <div
            class="ps-product__badge"
            v-if="feature.inStock || feature.outStock"
        >
            <span class="ps-badge ps-badge--instock" v-if="feature.inStock"
                >{{ feature.available && feature.available }} IN STOCK</span
            >
            <span class="ps-badge ps-badge--outstock" v-if="feature.outStock"
                >OUT OF STOCK</span
            >
        </div>
        <div class="ps-product__meta">
            <span
                :class="['ps-product__price', product.sale_price ? 'sale' : '']"
                >${{
                    product.sale_price ? product.sale_price : product.price
                }}</span
            >
            <span class="ps-product__del" v-if="product.sale_price"
                >${{ product.price }}</span
            >
        </div>
        <div class="ps-product__variable" v-if="feature.variable">
            <div class="ps-product__attribute" v-for="(val, index) in feature.group" :key="index">
                <h6>{{ val.text }}</h6>
                <v-select
                :items="val.items"
                item-text="text"
                item-value="value"
                dense
                outlined
                rounded
                @change="value => handleSelectFeature(val.text, value)"
                ></v-select>
            </div>
        </div>
        <template v-else>
            <div class="ps-product__group" v-for="(val, index) in feature.group" :key="index">
                <h6>{{ val.text }}</h6>
                <div
                    class="ps-product__color ps-select--feature"
                    v-if="val.text == 'Color'"
                >
                    <a
                        href="#"
                        v-for="color in val.items"
                        :key="color.value"
                        @click.prevent="
                            handleSelectFeature(val.text, color.value)
                        "
                        :class="checkActive(val.text, color.value) ? 'active' : ''"
                        :title="color.text"
                        :style="{ backgroundColor: color.value }"
                    ></a>
                </div>
                <div
                    class="ps-product__size ps-select--feature"
                    v-if="val.text == 'Size'"
                >
                    <a
                        href="#"
                        v-for="size in val.items"
                        :key="size.value"
                        @click.prevent="
                            handleSelectFeature(val.text, size.value)
                        "
                        :class="checkActive(val.text, size.value) ? 'active' : ''"
                        :title="size.text"
                        >{{ size.text }}</a
                    >
                </div>
            </div>
        </template>
        <div class="ps-product__quantity">
            <h6>Quantity</h6>
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
        <button :class="['ps-btn ps-btn--warning', feature.outStock ? 'ps-btn--disabled' : '']" :disabled="feature.outStock ? true : false" @click.prevent="addToCart()"
            >Add to cart</button
        >
        <div class="ps-product__variations">
            <a
                class="ps-product__link"
                href="#"
                @click.prevent="addProductToWishlist()"
                >Add to wishlist</a
            >
            <a
                class="ps-product__link"
                href="#"
                @click.prevent="addProductCompare()"
                >Add to Compare</a
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        feature: {
            type: Object,
            default: () => {}
        },
        product: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            quantity: 1,
            selectFeature: []
        };
    },
    methods: {
        handleSelectFeature(text, value) {
            if (this.selectFeature.length) {
                let check = false;
                this.selectFeature.forEach(element => {
                    if (element.text == text) {
                        element.value = value;
                        check = true;
                    }
                });
                if (!check) {
                    const data = {
                        text: text,
                        value: value
                    };
                    this.selectFeature.push(data);
                }
            } else {
                const data = {
                    text: text,
                    value: value
                };
                this.selectFeature.push(data);
            }
        },
        checkActive(text, value) {
            if (this.selectFeature.length) {
                let check = false;
                this.selectFeature.forEach(element => {
                    if (element.text == text && element.value == value) {
                        check = true;
                    }
                });
                return check;
            }
            return false;
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
        },
        addProductCompare() {
            this.$store.commit('cart/setDialogQuickview', false);
            this.$store.commit('cart/setDialogAddCart', false);
            this.$store.commit('compare/setDialogCompare', true);
            this.$store.dispatch('compare/addItemToCompare', this.product);
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
