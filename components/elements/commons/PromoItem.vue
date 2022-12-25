<template>
    <div class="ps-promo__item">
        <img class="ps-promo__banner" :src="item.banner" alt="alt" />
        <div class="ps-promo__content">
            <span class="ps-promo__badge" v-if="item.badge">{{ item.badge }}</span>
            <h4 :class="['ps-promo__name', item.classTitle && item.classTitle]" v-html="item.title"></h4>
            <div :class="['ps-promo__sale', item.saleColor && item.saleColor]" v-if="item.sale">{{ item.sale }}</div>
            <div :class="['ps-promo__meta', item.priceHorizontal ? 'd-horizontal' : '']" v-if="item.price">
                <p :class="['ps-promo__price', item.priceColor && item.priceColor]">{{ item.price }}</p>
                <p :class="['ps-promo__del', item.delColor && item.delColor]" v-if="item.del">{{ item.del }}</p>
            </div>
            <div class="ps-promo__icon" v-if="item.text">
                <img src="/img/icon/bacterial.svg" :alt="item.text" />
                <span>{{ item.text }}</span>
            </div>
            <div class="ps-promo__image" v-if="item.image">
                <img :src="item.image" alt />
            </div>
            <nuxt-link :class="['ps-promo__btn', item.btnClass && item.btnClass]" to="/shop">{{ item.btnName }}</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
