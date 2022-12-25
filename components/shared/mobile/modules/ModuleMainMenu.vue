<template>
    <ul :class="className">
        <li
            v-for="(item, index) in list"
            :class="[item.extraClass, {'active': active == index}]"
            :key="index"
        >
            <nuxt-link
                :to="item.url"
                :class="[item.linkClass]"
                @click.native="openSubItem(index)"
            >
                {{ item.text }}
            </nuxt-link>
            <span class="sub-toggle" v-if="item.subMenu" @click="openSubItem(index)">
                <i class="fa fa-chevron-down"></i>
            </span>
            <slide-up-down :active="active == index ? true : false">
                <ul v-if="item.subMenu" :class="item.subClass">
                    <li v-for="(val, idx) in item.subMenu" :key="idx" :class="{'active': subActive == idx}">
                        <nuxt-link
                            :to="val.url"
                            :class="[val.linkClass]"
                            @click.native="openSubChild(idx)"
                        >
                            {{ val.text }}
                        </nuxt-link>
                        <span class="sub-toggle" v-if="val.subMenu" @click="openSubChild(idx)">
                            <i class="fa fa-chevron-down"></i>
                        </span>
                        <slide-up-down :active="subActive == idx ? true : false">
                            <module-main-menu :list="val.subMenu" :className="val.subClass" />
                        </slide-up-down>
                    </li>
                </ul>
            </slide-up-down>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'module-main-menu',
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
            active: null,
            subActive: null
        }
    },
    methods: {
        openSubItem(index) {
            if (index == this.active) {
                this.active = null;
            } else {
                this.active = index;
            }
        },
        openSubChild(index) {
            if (index == this.subActive) {
                this.subActive = null;
            } else {
                this.subActive = index;
            }
        }
    }
}
</script>
