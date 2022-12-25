<template>
    <div class="ps-noti" v-show="show">
        <div class="container">
            <p class="m-0">
                Due to the <strong>COVID 19 </strong>epidemic, orders may be
                processed with a slight delay
            </p>
        </div>
        <a class="ps-noti__close" href="#" @click.prevent="show = false"><i class="icon-cross"></i></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        };
    }
};
</script>
