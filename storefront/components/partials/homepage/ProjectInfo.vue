<template>
    <section class="ps-project--info">
        <div class="container">
            <h2 class="ps-project__title">Effective & reliable <br>protection for your family</h2>
            <div class="ps-project__content">
                <div class="row">
                    <div class="col-12 col-sm-6" v-for="(item, index) in items" :key="index">
                        <div class="ps-project__item">
                            <div class="ps-project__thumbnail"> <img :src="item.img" alt=""></div>
                            <h4 class="ps-project__name" v-html="item.name"></h4>
                            <p class="ps-project__desc" v-html="item.desc"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    img: '/img/promotion/goby-tD3GaS9ysF4-unsplash.jpg',
                    name: 'Health Certificate <br>2000 - professional care',
                    desc: 'Just a few seconds to measure your body temperature. <br>Up to 5 users! The battery lasts up to 2 years.'
                },
                {
                    img: '/img/promotion/goby-tD3GaS9ysF4-unsplash2.jpg',
                    name: 'The possibility of testing when <br>applied to the forehead. Ready to <br>work in 30 seconds.',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form,'
                }
            ]
        }
    }
}
</script>
