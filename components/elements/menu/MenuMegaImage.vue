<template>
    <ul class="sub-menu--image">
        <li v-for="(image, index) in dataList" :key="index"> 
            <nuxt-link :to="image.url"><img :src="image.image" alt="alt" /></nuxt-link>
            <h3 class="image-title">{{ image.heading }}</h3>
            <span class="has-badge" v-if="image.new">New</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        dataList: {
            type: Array,
            default: () => []
        }
    }
}
</script>
