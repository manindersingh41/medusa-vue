<template>
    <div class="ps-blog--latset">
        <div class="ps-blog__thumbnail">
            <nuxt-link :to="`/portfolio/${item.id}`"
                ><img :src="item.image" alt="alt"
            /></nuxt-link>
            <div class="ps-blog__badge">
                <span
                    class="ps-badge__item"
                    v-for="(val, index) in item.badge"
                    :key="index"
                    >{{ val.text }}</span
                >
            </div>
        </div>
        <div class="ps-blog__content">
            <nuxt-link class="ps-blog__title" :to="`/portfolio/${item.id}`">{{
                item.title
            }}</nuxt-link>
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
};
</script>
