<template>
    <v-rating
        class="ps-rating"
        background-color="orange lighten-3"
        color="orange"
        length="5"
        readonly
        size="20"
        :value="value"
    ></v-rating>
</template>
<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    }
}
</script>