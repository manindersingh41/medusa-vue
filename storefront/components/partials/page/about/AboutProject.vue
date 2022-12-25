<template>
    <section class="ps-about__project">
        <div class="container">
            <h2 class="ps-about__title">Your home medical provider now also online</h2>
            <section :class="['ps-section--block-grid', item.extraClass]" v-for="(item, index) in dataList" :key="index">
                <div class="ps-section__thumbnail"> <a class="ps-section__image" href="#"><img :src="item.image" alt=""></a></div>
                <div class="ps-section__content">
                  <h3 class="ps-section__title">{{ item.title }}</h3>
                  <div class="ps-section__subtitle">{{ item.subtitle }}</div>
                  <div class="ps-section__desc">{{ item.desc }}</div>
                  <ul class="ps-section__list"> 
                    <li v-for="(val, idx) in item.list" :key="idx">{{ val }}</li>
                  </ul>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            dataList: [
                {
                    extraClass: '',
                    image: '/img/about/about-us-1.jpg',
                    title: 'Top quality products and proven suppliers with quality certificates!',
                    subtitle: 'They have CEE 2020 certificate.',
                    desc: 'Hundreds of thousands of products at bargain prices. Completely the needs of home medicine chest and professional offices. Effective and reliable protection for your teeth. The brush handle fits perfectly in the hand, is slim and beautifully made.',
                    list: ['Study history up to 30 days', 'Up to 5 users simultaneously', 'Has HEALTH certificate']
                },
                {
                    extraClass: 'row-reverse',
                    image: '/img/about/about-us-2.jpg',
                    title: 'Many years of experience and a high level of consumer confidence',
                    subtitle: 'Developed for over 30 years on the market',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
                    list: ['Proin nec lectus dolor.', 'Curabitur egestas molestie lorem sed pharetra.', 'Integer volutpat efficitur tellus vel tempus.']
                },
                {
                    extraClass: '',
                    image: '/img/about/about-us-3.jpg',
                    title: 'Just a few seconds to measure your body temperature. Up to 5 users!',
                    subtitle: 'The battery lasts up to 2 years.',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
                    list: ['Study history up to 30 days', 'Up to 5 users simultaneously', 'Has HEALTH certificate']
                }
            ]
        }
    }
}
</script>
