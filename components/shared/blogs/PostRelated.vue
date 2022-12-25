<template>
    <div class="ps-post--related">
        <div class="post__img">
            <nuxt-link to="/blog/blog-default"><img :src="post.image" alt /></nuxt-link>
        </div>
        <div class="post__content">
            <div class="post__archives">
                <nuxt-link class="archive__item post__type" to="/vendor-store"><i class="icon-folder"></i>{{ post.type }}</nuxt-link>
                <span class="archive__item"><i class="icon-bubbles"></i>{{ post.number }}</span>
            </div>
            <nuxt-link class="post__title" to="/blog/blog-default">{{ post.title }}</nuxt-link>
            <p class="post__des">{{ post.description }}</p>
            <p class="post__date" v-if="post.showDate"> 
                <i class="icon-calendar-full"></i>{{ post.date }} by <nuxt-link class="text-success" to="/store-list">{{ post.auth }}</nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object
        }
    }
}
</script>
