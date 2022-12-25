<template>
    <div class="ps-branch">
        <h3 class="ps-branch__title">Popular Brands</h3>
        <div class="ps-branch__box">
            <div
                class="ps-branch__item"
                v-for="(item, index) in branchs"
                :key="index"
            >
                <a href="#"><img :src="item.image" :alt="item.text"/></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        branchs: {
            type: Array,
            default: () => []
        }
    }
};
</script>
