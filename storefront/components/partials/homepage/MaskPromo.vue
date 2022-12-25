<template>
    <section class="ps-promo--mask">
        <div :class="['ps-banner', item.class]">
            <div class="container">
                <div
                    :class="['ps-banner__block', reverse ? 'row-reverse' : '']"
                >
                    <div class="ps-banner__content">
                        <h2 class="ps-banner__title" v-html="item.title"></h2>
                        <div
                            class="ps-banner__desc"
                            v-if="item.desc"
                            v-html="item.desc"
                        ></div>
                        <div class="ps-banner__btn-group" v-if="item.btnGroup">
                            <div
                                class="ps-banner__btn"
                                v-for="(val, index) in item.btnGroup"
                                :key="index"
                            >
                                <img :src="val.icon" alt />{{ val.text }}
                            </div>
                        </div>
                        <nuxt-link
                            :class="['ps-banner__shop', item.shop.class]"
                            :to="item.shop.link"
                            >{{ item.shop.text }}</nuxt-link
                        >
                    </div>
                    <div class="ps-banner__thumnail">
                        <img class="ps-banner__image" :src="item.image" alt />
                        <div :class="['ps-banner__persen', item.persen.class]" v-if="item.persen">{{ item.persen.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        item: {
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
