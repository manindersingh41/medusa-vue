<template>
    <button class="btn scroll-top" v-show="isShow" @click="scrollToTop()"><i class="fa fa-angle-double-up"></i></button>
</template>

<script>
export default {
    data() {
        return { isShow: false }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            let scroll = window.scrollY;
            if (scroll > 200) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>
