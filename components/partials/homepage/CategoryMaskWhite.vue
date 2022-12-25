<template>
    <section class="ps-section--mask">
        <div class="container">
            <div class="ps-section__content">
                <div
                    class="ps-section__item"
                    v-for="(item, index) in dataList"
                    :key="index"
                >
                    <div class="ps-section__thumbnail">
                        <img :src="item.image" :alt="item.text" />
                    </div>
                    <h5 class="ps-section__text">
                        <nuxt-link to="/shop">{{ item.text }}</nuxt-link>
                    </h5>
                </div>
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
                    image: '/img/products/mask1.png',
                    text: 'Rubber finish'
                },
                {
                    image: '/img/products/mask2.png',
                    text: 'Knotted fabric finish'
                },
                {
                    image: '/img/products/mask3.png',
                    text: 'Knotted rubber finish'
                }
            ]
        };
    }
};
</script>
