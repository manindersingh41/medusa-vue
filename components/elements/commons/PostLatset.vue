<template>
    <div class="ps-blog--latset" v-if="item">
        <div class="ps-blog__thumbnail">
            <nuxt-link :to="`/blog/post-detail-1/${item.id}`" v-if="item.thumbnail"
                ><img :src="baseDomain + item.thumbnail.url" alt="alt"
            /></nuxt-link>
            <div class="ps-blog__badge">
                <span
                    class="ps-badge__item"
                    v-for="val in item.post_categories"
                    :key="val.id"
                    >{{ val.name }}</span
                >
            </div>
        </div>
        <div class="ps-blog__content">
            <div class="ps-blog__meta">
                <span class="ps-blog__date">{{ createdAt }}</span
                ><a class="ps-blog__author" href="#">Alfredo Austin</a>
            </div>
            <nuxt-link class="ps-blog__title" :to="`/blog/post-detail-1/${item.id}`">{{
                item.name
            }}</nuxt-link>
            <p class="ps-blog__desc" v-if="item.short_description">{{ item.short_description }}</p>
        </div>
    </div>
</template>

<script>
import { baseUrl } from '~/repositories/Repository';
import Moment from "moment";

export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            baseDomain: baseUrl
        };
    },
    computed: {
        createdAt() {
            return Moment(this.item.created_at).format("MMM DD, YYYY");
        }
    }
};
</script>
