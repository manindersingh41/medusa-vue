<template>
    <section class="ps-home__banner">
        <div class="ps-banner" :style="{ backgroundColor: banner.bgColor }" v-if="banner">
            <img class="ps-banner__overlay" :src="banner.img" alt="alt" />
            <div class="ps-banner__block">
                <div class="ps-banner__content">
                    <h2 :class="['ps-banner__title', banner.textColor && banner.textColor]" v-html="banner.title"></h2>
                    <div v-if="banner.button" class="ps-banner__btn-group">
                        <div
                            :class="['ps-banner__btn', banner.buttonColor && banner.buttonColor]"
                            v-for="(item, index) in banner.button"
                            :key="index"
                        >
                            <img :src="item.icon" alt="alt" :style="banner.filter && banner.filter" />{{item. text }}
                        </div>
                    </div>
                    <div v-if="banner.price" class="ps-banner__price">
                        <span>{{ banner.price.ins }}</span>
                        <del>{{ banner.price.del }}</del>
                    </div>
                    <a :class="['ps-banner__shop', banner.shop]" href="#">{{
                        banner.textShop
                    }}</a>
                </div>
                <div class="ps-banner__thumnail" v-if="banner.percent">
                    <div
                        :class="[
                            'ps-banner__persen',
                            banner.percent.extraClass
                        ]"
                    >
                    {{ banner.percent.text }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        banner: {
            type: Object,
            default: () => {}
        }
    }
};
</script>
