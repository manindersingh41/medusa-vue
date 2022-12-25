<template>
    <ul :class="className">
        <li
            v-for="(item, index) in list"
            :class="[item.extraClass, {'active': active == index}]"
            :key="index"
        >
            <a
                href="#"
                @click.prevent="openSubItem(index)"
            >
                {{ item.name }}
            </a>
            <span class="sub-toggle" v-if="item.products && item.products.length" @click="openSubItem(index)">
                <i class="fa fa-chevron-down"></i>
            </span>
            <slide-up-down :active="active == index ? true : false">
                <ul v-if="item.products && item.products.length" class="sub-menu">
                    <li v-for="(val, idx) in item.products" :key="idx">
                        <nuxt-link
                            :to="`/product/layout/layout-1/${val.id}`"
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
    name: 'module-product-category',
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
