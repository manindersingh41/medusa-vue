<template>
     <section class="ps-promo--section">
        <div class="container">
            <h2 class="ps-promo__title">Effective & reliable<br>protection for your family</h2>
            <p class="ps-promo__subtitle">Only this week 30% to 50% cheaper! <br>Choose a color that really matches your personality</p>
            <section :class="['ps-section--block-grid', item.class]" v-for="(item, index) in projects" :key="index">
                <div class="ps-section__thumbnail"> 
                    <a class="ps-section__image" href="#"><img :src="item.img" alt=""></a>
                </div>
                <div class="ps-section__content">
                    <h3 class="ps-section__title" v-html="item.title"></h3>
                    <div class="ps-section__desc" v-html="item.desc"></div>
                    <ul class="ps-section__list">
                        <li v-for="(val, idx) in item.list" :key="idx">{{ val }}</li>
                    </ul>
                </div>
            </section>
            <div class="ps-promo__footer"> <nuxt-link class="ps-btn ps-btn--warning" to="/shop">Shop now</nuxt-link></div>
        </div>
     </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: 'Health Certificate <br>2000 - professional care',
                    desc: 'Just a few seconds to measure your body temperature. <br>Up to 5 users! The battery lasts up to 2 years.',
                    list: [
                        'Study history up to 30 days',
                        'Up to 5 users simultaneously',
                        'Has HEALTH certificate'
                    ],
                    img: '/img/promotion/goby-tD3GaS9ysF4-unsplash.jpg',
                    class: ''
                },
                {
                    title: 'The possibility of testing when <br>applied to the forehead. Ready to <br>work in 30 seconds.',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form,',
                    list: [
                        'Injected humour, or randomised',
                        'Words which don\'t look even',
                        'Slightly believable.'
                    ],
                    img: '/img/promotion/goby-tD3GaS9ysF4-unsplash2.jpg',
                    class: 'row-reverse'
                },
                {
                    title: 'Specially adapted the meter <br>so it can be used.',
                    desc: 'Just a few seconds to measure your body temperature. <br>Up to 5 users! The battery lasts up to 2 years.',
                    list: [
                        'Injected humour, or randomised',
                        'Words which don\'t look even',
                        'Slightly believable.'
                    ],
                    img: '/img/promotion/goby-tD3GaS9ysF4-unsplash3.jpg',
                    class: ''
                }
            ]
        }
    }
}
</script>
