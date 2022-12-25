<template>
    <section class="ps-product--type">
        <div class="container">
            <h3 class="ps-section__title">Popular categories</h3>
            <div class="ps-category__content">
                <nuxt-link class="ps-category__item" to="/shop" v-for="(item, index) in dataList" :key="index">
                    <img class="ps-category__icon" :src="item.image" alt>
                    <h6 class="ps-category__name">{{ item.text }}</h6>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            dataList: [
                {
                    image: "/img/icon/icon13.png",
                    text: "Creams"
                },
                {
                    image: "/img/icon/icon14.png",
                    text: "Pills"
                },
                {
                    image: "/img/icon/icon15.png",
                    text: "Herbs"
                },
                {
                    image: "/img/icon/icon16.png",
                    text: "Capsules"
                },
                {
                    image: "/img/icon/icon17.png",
                    text: "Prescription"
                },
                {
                    image: "/img/icon/icon18.png",
                    text: "Drops"
                }
            ]
        }
    }
}
</script>
