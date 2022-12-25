<template>
    <div class="ps-banner" :style="{ backgroundColor: banner.bgColor }" v-if="banner">
        <img v-if="banner.imgbg" :class="['ps-banner__imagebg', banner.imgbg]" :src="banner.img" alt="alt" />
        <div :class="[banner.noFull ? 'container-no-round' : 'container container-initial']">
            <div :class="['ps-banner__block', reverse ? 'row-reverse' : '']">
                <div class="ps-banner__content">
                    <p class="ps-banner__baged" v-if="banner.baged"><strong>{{ banner.baged }}</strong></p>
                    <h2 :class="['ps-banner__title', banner.textColor && banner.textColor]" v-html="banner.title"></h2>
                    <div :class="['ps-banner__desc', banner.textColor && banner.textColor]" v-html="banner.desc"></div>
                    <div v-if="banner.price" class="ps-banner__price">
                        <span>{{ banner.price.ins }}</span>
                        <del>{{ banner.price.del }}</del>
                    </div>
                    <div v-if="banner.button" class="ps-banner__btn-group">
                        <div
                            :class="['ps-banner__btn', banner.buttonColor && banner.buttonColor]"
                            v-for="(item, index) in banner.button"
                            :key="index"
                        >
                            <img :src="item.icon" alt="alt" :style="banner.filter && banner.filter" />{{item. text }}
                        </div>
                    </div>
                    <a :class="['ps-banner__shop', banner.shop, banner.cart]" href="#" v-if="banner.shop || banner.cart">{{
                        banner.textShop ? banner.textShop : banner.shop ? 'Shop now' : 'Add to cart'
                    }}</a>
                    <div
                        :class="[
                            'ps-banner__persen',
                            banner.percent.extraClass
                        ]"
                        v-if="banner.percent && !banner.percent.thumbnail"
                        v-html="banner.percent.text"
                    >
                    </div>
                </div>
                <div :class="['ps-banner__thumnail', {'ps-banner__fluid': !banner.round}]">
                    <img
                        v-if="banner.round"
                        class="ps-banner__round"
                        :src="banner.round"
                        alt="alt"
                    />
                    <img
                        v-if="!banner.imgbg && banner.img"
                        class="ps-banner__image"
                        :src="banner.img"
                        alt="alt"
                    />
                    <div
                        :class="[
                            'ps-banner__persen',
                            banner.percent.extraClass
                        ]"
                        v-if="banner.percent && banner.percent.thumbnail"
                    >
                    {{ banner.percent.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        banner: {
            type: Object,
            default: () => {}
        },
        reverse: {
            type: Boolean,
            default: false
        }
    }
};
</script>
