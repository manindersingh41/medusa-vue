<template>
    <ul class="ps-language-currency">
        <li class="menu-item-has-children" v-for="(item, index) in list" :key="index">
            <a href="#" @click.prevent="openSubItem(index)">{{item.text}}</a>
            <span class="sub-toggle"><i class="fa fa-chevron-down"></i></span>
            <slide-up-down :active="active == index ? true : false">
                <ul :class="item.subClass">
                    <li v-for="(val, indexVal) in item.subMenu" :key="indexVal">
                        <a href="#">{{val.text}}</a>
                    </li>
                </ul>
            </slide-up-down>
        </li>
    </ul>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'

export default {
    components: { SlideUpDown },
    data() {
        return {
            active: null,
            list: [
                {
                    text: 'English',
                    subClass: "sub-menu",
                    url: '#',
                    subMenu: [
                        {
                            text: 'Français',
                            url: '#'
                        },
                        {
                            text: 'Deutsch',
                            url: '#'
                        }
                    ]
                },
                {
                    text: 'USD',
                    subClass: "sub-menu",
                    url: '#',
                    subMenu: [
                        {
                            text: 'USD',
                            url: '#'
                        },
                        {
                            text: 'EUR',
                            url: '#'
                        }
                    ]
                }
            ]
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
