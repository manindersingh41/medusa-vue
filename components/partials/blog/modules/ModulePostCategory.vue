<template>
    <ul :class="className" v-if="list && list.length">
        <li
            v-for="(item, index) in list"
            :class="[item.extraClass, {'active': active == index}]"
            :key="index"
        >
            <nuxt-link
                to="/blog/sidebar-1"
                @click.native="openSubItem(index)"
            >
                {{ item.name }}
            </nuxt-link>
            <span class="sub-toggle" v-if="item.posts && item.posts.length" @click="openSubItem(index)">
                <i class="fa fa-chevron-down"></i>
            </span>
            <slide-up-down :active="active == index ? true : false">
                <ul v-if="item.posts && item.posts.length" class="sub-menu">
                    <li v-for="(val, idx) in item.posts" :key="idx">
                        <nuxt-link
                            :to="`/blog/post-detail-1/${val.id}`"
                        >
                            {{ val.name }}
                        </nuxt-link>
                    </li>
                </ul>
            </slide-up-down>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'module-post-category',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        className: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            active: null
        }
    },
    methods: {
        openSubItem(index) {
            if (index == this.active) {
                this.active = null;
            } else {
                this.active = index;
            }
        }
    }
}
</script>
