<template>
    <ul class="ps-breadcrumb">
        <li
            :class="['ps-breadcrumb__item', item.extraClass]"
            v-for="(item, index) in dataList"
            :key="index"
        >
            <nuxt-link :to="item.url">{{ item.text }}</nuxt-link>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        dataList: {
            type: Array
        }
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    }
};
</script>
