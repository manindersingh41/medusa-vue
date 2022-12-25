<template>
    <div class="ps-banner--full" :style="{backgroundImage: 'url(' + banner.img + ')'}">
        <section class="ps-banner">
            <div class="container">
                <div class="ps-banner__block">
                    <div class="ps-banner__content">
                        <h2 class="ps-banner__title" v-html="banner.title"></h2>
                        <div class="ps-banner__desc" v-html="banner.desc"></div>
                        <div class="ps-banner__btn-group">
                            <div class="ps-banner__btn" v-for="(item, index) in banner.button" :key="index">
                                <img :src="item.icon" alt>{{ item.text }}
                            </div>
                        </div>
                        <nuxt-link
                            :class="['ps-banner__shop', banner.shop.class]"
                            :to="banner.shop.link"
                            >{{ banner.shop.text }}</nuxt-link
                        >
                    </div>
                    <div class="ps-banner__thumnail"></div>
                </div>
                <div class="ps-banner__group" v-if="banner.group">
                    <div class="ps-banner__item" v-for="(item, index) in banner.group" :key="index">
                        <img :src="item.icon" alt="">
                        <p v-html="item.text"></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        banner: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
