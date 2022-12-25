<template>
    <div class="ps-comment--post">
        <h2 class="ps-comment__title">Comments ({{dataList.length}})</h2>
        <ul class="ps-comment__list">
            <li v-for="(item, index) in dataList" :key="index">
                <review-product :item="item" @handleReply="handleReply" />
                <ul class="ps-comment__children" v-if="item.children">
                    <li v-for="(val, idx) in item.children" :key="idx">
                        <review-product :item="val" @handleReply="handleReply" />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import ReviewProduct from '~/components/elements/commons/ReviewProduct';

export default {
    props: {
        dataList: {
            type: Array,
            default: (() => [])
        }
    },
    components: {
        ReviewProduct
    },
    methods: {
        handleReply(item) {
            console.log('Reply', item);
        }
    }
}
</script>
