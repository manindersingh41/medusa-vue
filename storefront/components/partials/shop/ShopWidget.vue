<template>
    <div class="ps-widget ps-widget--product">
        <div class="ps-widget__block">
            <h4 class="ps-widget__title">Categories</h4>
            <a :class="['ps-block-control', {'active': activeSlide == 'category'}]" href="#" @click.prevent="activeSlideUpDown('category')"
                ><i class="fa fa-angle-down"></i
            ></a>
            <slide-up-down :active="!isMobile ? true : activeSlide == 'category' ? true : false">
                <div class="ps-widget__content ps-widget__category">
                    <module-product-category :list="categories" className="menu--mobile" />
                </div>
            </slide-up-down>
        </div>
        <div class="ps-widget__block">
            <h4 class="ps-widget__title">By price</h4>
            <a :class="['ps-block-control', {'active': activeSlide == 'price'}]" href="#" @click.prevent="activeSlideUpDown('price')"
                ><i class="fa fa-angle-down"></i
            ></a>
            <slide-up-down :active="!isMobile ? true : activeSlide == 'price' ? true : false">
                <div class="ps-widget__content">
                    <div class="ps-widget__price">
                        <v-range-slider
                            v-model="range"
                            :max="1000"
                            :min="0"
                        ></v-range-slider>
                    </div>
                    <div class="ps-widget__input">
                        <span class="ps-price" id="slide-price-min">${{ range[0] }}</span
                        ><span class="bridge">-</span
                        ><span class="ps-price" id="slide-price-max">${{ range[1] }}</span>
                    </div>
                    <button class="ps-widget__filter" @click="handleFilterPrice()">Filter</button>
                </div>
            </slide-up-down>
        </div>
        <div class="ps-widget__block">
            <h4 class="ps-widget__title">Color</h4>
            <a :class="['ps-block-control', {'active': activeSlide == 'color'}]" href="#" @click.prevent="activeSlideUpDown('color')"><i class="fa fa-angle-down"></i></a>
            <slide-up-down :active="!isMobile ? true : activeSlide == 'color' ? true : false">
                <div class="ps-widget__content">
                    <div class="ps-widget__color">
                        <div class="custom-control custom-checkbox" v-for="(item, index) in colors" :key="index">
                            <input class="custom-control-input" v-model="filterColor" :value="item.value" type="checkbox" :id="`color${item.text}`">
                            <label class="custom-control-label" :for="`color${item.text}`" :style="{'--bg-color': item.value}"></label>
                        </div>
                    </div>
                </div>
            </slide-up-down>
        </div>
        <div class="ps-widget__block">
            <h4 class="ps-widget__title">Brands</h4>
            <a :class="['ps-block-control', {'active': activeSlide == 'brand'}]" href="#" @click.prevent="activeSlideUpDown('brand')"><i class="fa fa-angle-down"></i></a>
            <slide-up-down :active="!isMobile ? true : activeSlide == 'brand' ? true : false">
                <div class="ps-widget__content">
                    <div class="ps-widget__item" v-for="(item, index) in branchs" :key="index">
                        <div class="custom-control custom-checkbox">
                            <input class="custom-control-input" v-model="filterBranch" :value="item.text" type="checkbox" :id="`branch${item.text}`">
                            <label class="custom-control-label" :for="`branch${item.text}`">{{ item.text }}</label>
                        </div>
                    </div>
                </div>
            </slide-up-down>
        </div>
        <div class="ps-widget__block">
            <h4 class="ps-widget__title">Ratings</h4>
            <a :class="['ps-block-control', {'active': activeSlide == 'rating'}]" href="#" @click.prevent="activeSlideUpDown('rating')"><i class="fa fa-angle-down"></i></a>
            <slide-up-down :active="!isMobile ? true : activeSlide == 'rating' ? true : false">
                <div class="ps-widget__content">
                    <div class="ps-widget__item ps-widget__rating">
                        <div class="custom-control custom-checkbox" v-for="item in ratingList" :key="item.label">
                            <input class="custom-control-input" v-model="filterRating" :value="item.label" type="checkbox" :id="`rating${item.label}`">
                            <label class="custom-control-label" :for="`rating${item.label}`"> </label>
                            <div class="custom-label">
                                <rating-component :value="item.label" />
                                <span>({{ item.value }})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </slide-up-down>
        </div>
        <div class="ps-widget__promo">
            <img src="/img/banner-sidebar1.jpg" alt />
        </div>
    </div>
</template>

<script>
import { colors, branchDefault } from '~/static/data/common.json';
import RatingComponent from '~/components/elements/commons/RatingComponent';
import ModuleProductCategory from '~/components/partials/shop/modules/ModuleProductCategory';
export default {
    props: {
        categories: {
            type: Array,
            default: () => []
        }
    },
    components: {
        RatingComponent,
        ModuleProductCategory
    },
    data() {
        return {
            range: [0, 820],
            colors: colors,
            branchs: branchDefault,
            ratingList: [
                {
                    label: 5,
                    value: 6
                },
                {
                    label: 4,
                    value: 3
                },
                {
                    label: 3,
                    value: 0
                },
                {
                    label: 2,
                    value: 0
                },
                {
                    label: 1,
                    value: 0
                }
            ],
            filterColor: [],
            filterBranch: [],
            filterRating: [],
            activeSlide: null,
            windowWidth: 0
        };
    },
    computed: {
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
        handleFilterPrice() {
            this.$emit('handleFilter', 'price', range)
        },
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
    },
    watch: {
        filterColor() {
            this.$emit('handleFilter', 'color', this.filterColor)
        },
        filterBranch() {
            this.$emit('handleFilter', 'branch', this.filterBranch)
        },
        filterRating() {
            this.$emit('handleFilter', 'rating', this.filterRating)
        }
    }
};
</script>
