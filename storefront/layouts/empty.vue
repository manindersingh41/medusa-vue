<template>
    <client-only>
        <v-app>
            <nuxt></nuxt>
        </v-app>
    </client-only>
</template>

<script>

export default {
    created() {
        this.$store.commit('app/setLoading', true);
    }
};
</script>

<style lang="scss" scoped></style>
