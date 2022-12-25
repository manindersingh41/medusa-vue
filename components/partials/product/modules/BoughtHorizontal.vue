<template>
    <section :class="['ps-bought', extraClass]">
        <h3 class="ps-bought__title">Frequently bought together</h3>
        <div class="ps-bought__wapper">
            <div class="ps-bought__thumbnail">
                <ul v-if="loading">
                    <li v-for="item in extraClass ? 3 : 4" :key="item">
                        <a href="#">
                            <v-skeleton-loader
                            type="image"
                            ></v-skeleton-loader>
                        </a>
                    </li>
                </ul>
                <ul v-else>
                    <li v-for="(item, index) in dataList" :key="index">
                        <nuxt-link :to="`/product/layout/layout-1/${item.id}`" v-if="item.thumbnail">
                            <img
                                :src="baseDomain + item.thumbnail.url"
                                :alt="item.name"
                            />
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="ps-bought__content">
                <ul class="ps-bought__list">
                    <li v-for="(item, index) in dataList" :key="index">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                :value="item.id"
                                v-model="checkbox"
                                :id="item.id"
                            />
                            <label class="form-check-label" :for="item.id"
                                ><span class="ps-bought__name"
                                    >{{ index == 0 ? 'This Product: ' : '' }}
                                    {{ item.name }} </span
                                >–
                                <span
                                    v-if="item.sale_price"
                                    class="ps-bought__del"
                                    >${{ item.sale_price }}</span
                                >
                                <span
                                    :class="[
                                        'ps-bought__price',
                                        item.sale_price ? 'sale' : ''
                                    ]"
                                    >${{
                                        item.sale_price
                                            ? item.sale_price
                                            : item.price
                                    }}</span
                                >
                            </label>
                        </div>
                    </li>
                </ul>
                <div class="ps-bought__submit">
                    <label>Buy selected for: </label>
                    <div class="ps-bought__total">${{ totalItemPrice }}</div>
                    <a class="ps-btn ps-btn--warning" href="#" @click.prevent="handleAddToCart()"
                        >Add all to cart</a
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import { mapState } from 'vuex';

export default {
    props: {
        dataList: {
            type: Array,
            default: () => []
        },
        extraClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            baseDomain: baseUrl,
            checkbox: []
        };
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        }),
        totalItemPrice() {
            let total = 0;
            this.dataList.forEach(element => {
                let price = this.productPrice(element);
                total+= price;
            });
            return total.toFixed(2);
        }
    },
    mounted() {
        this.getCheckList()
    },
    methods: {
        handleAddToCart() {
            this.dataList.forEach(element => {
                let checked =  this.checkbox.indexOf(element.id);
                if (checked != -1) {
                    let params = {
                        id: element.id,
                        quantity: 1
                    };
                    this.$store.dispatch('cart/addProductToCart', params);
                    this.$store.commit('product/addCartProduct', element);
                }
            })
            const message = {
                icon: 'icon-shield-check',
                message: 'Product has been added to your cart !'
            }
            this.$store.commit('app/setMessageNotify', message)
            this.$store.commit('app/setDialogNotify', true);
        },
        getCheckList() {
            this.checkbox = [];
            this.dataList.forEach(element => {
                this.checkbox.push(element.id);
            })
        },
        productPrice(product) {
            if (product) {
                return product.sale_price ? product.sale_price : product.price;
            } else {
                return 0;
            }
        }
    },
    watch: {
        dataList() {
            this.getCheckList()
        }
    }
};
</script>
