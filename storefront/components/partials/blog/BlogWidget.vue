<template>
    <div class="ps-widget ps-widget--blog">
        <div class="ps-widget__block">
            <h4 class="ps-widget__title">Categories</h4>
            <a :class="['ps-block-control', {'active': activeSlide == 'category'}]" href="#" @click.prevent="activeSlideUpDown('category')"
                ><i class="fa fa-angle-down"></i
            ></a>
            <slide-up-down :active="!isMobile ? true : activeSlide == 'category' ? true : false">
                <div class="ps-widget__content ps-widget__category">
                    <module-post-category :list="categories" className="menu--mobile ps-widget--category" />
                </div>
            </slide-up-down>
        </div>
        <div class="ps-widget__block">
            <h4 class="ps-widget__title">Related Products</h4>
            <a :class="['ps-block-control', {'active': activeSlide == 'product'}]" href="#" @click.prevent="activeSlideUpDown('product')"
                ><i class="fa fa-angle-down"></i
            ></a>
            <slide-up-down :active="!isMobile ? true : activeSlide == 'product' ? true : false">
                <div class="ps-widget__content">
                    <div class="ps-widget__product" v-if="loading">
                        <v-skeleton-loader
                        type="image, article"
                        v-for="item in 3"
                        :key="item"
                        ></v-skeleton-loader>
                    </div>
                    <div class="ps-widget__product" v-else>
                        <product-standard v-for="product in products" :key="product.id" :product="product" />
                    </div>
                </div>
            </slide-up-down>
        </div>
        <div class="ps-widget--promo"><img src="/img/banner-sidebar1.jpg" alt></div>
    </div>
</template>

<script>
import ProductStandard from '~/components/elements/product/ProductStandard';
import { mapState } from 'vuex';
import ModulePostCategory from '~/components/partials/blog/modules/ModulePostCategory';

export default {
    props: {
        products: {
            type: Array,
            default: () => []
        },
        categories: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ProductStandard,
        ModulePostCategory
    },
    data() {
        return {
            activeSlide: null,
            windowWidth: 0
        }
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        }),
        isMobile() {
            return this.windowWidth < 768
        }
    },
    created() {
        window.addEventListener("resize", this.resizeScreen);
        this.resizeScreen();
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeScreen);
    },
    methods: {
        activeSlideUpDown(val) {
            if (this.activeSlide == val) {
                this.activeSlide = null;
            } else {
                this.activeSlide = val;
            }
        },
        resizeScreen() {
            this.windowWidth = window.innerWidth
        }
    }
}
</script>
