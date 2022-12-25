<template>
    <div class="ps-home--block ps-block--brands">
        <div class="ps-block__header" v-if="header">
            <div class="ps-block__title">{{ title }}</div>
            <nuxt-link class="ps-block__view" to="/flash-salel"
                >View all<i class="icon-chevron-right"></i
            ></nuxt-link>
        </div>
        <div class="ps-block__content">
            <swiper-component
                :options="swiperOptions"
                :navigation-next="navigationNext"
                :navigation-prev="navigationPrev"
                :pagination="pagination"
            >
                <div
                    class="swiper-slide"
                    v-for="(item, index) in listBrands"
                    :key="index"
                >
                    <nuxt-link to="/shop/shop-all-brands"><img :src="item.image" alt/></nuxt-link>
                </div>
            </swiper-component>
        </div>
    </div>
</template>

<script>
import SwiperComponent from '~/components/elements/commons/SwiperComponent';
import { brands } from '~/static/data/categories.json';
import { mapState } from 'vuex';

export default {
    components: { SwiperComponent },
    props: {
        title: {
            type: String,
            default: ''
        },
        swiperOptions: {
            type: Object
        },
        className: {
            type: String
        },
        header: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            navigationNext: '',
            navigationPrev: '',
            pagination: '',
            listBrands: brands,
            numberLoading: 2
        };
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    created() {
        this.resizeWindow();
        this.navigationNext = 'swiper-next-' + this.className;
        this.navigationPrev = 'swiper-prev-' + this.className;
        this.pagination = 'pagination-' + this.className;
        window.addEventListener("resize", this.resizeWindow);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeWindow);
    },
    methods: {
        resizeWindow() {
            const innerWidth = window.innerWidth;
            if (innerWidth < 480) {
                this.numberLoading = 2;
            } else if (innerWidth < 768) {
                this.numberLoading = this.swiperOptions.breakpoints[768].slidesPerView;
            } else if (innerWidth < 992) {
                this.numberLoading = this.swiperOptions.breakpoints[992].slidesPerView;
            } else {
                this.numberLoading = this.swiperOptions.breakpoints[1200].slidesPerView;
            }
        }
    }
};
</script>
