<template>
    <section class="ps-about--info">
        <div class="container">
            <h2 class="ps-about__title" v-html="title"></h2>
            <p class="ps-about__subtitle">
                The brush handle fits perfectly in the hand, is slim and
                beautifully made.
            </p>
            <div class="ps-about__extent">
                <div class="row m-0">
                    <div class="col-12 col-sm-4 p-0" v-for="(item, index) in extents" :key="index">
                        <div class="ps-block--about">
                            <div class="ps-block__icon">
                                <img
                                    :src="item.icon"
                                    alt=""
                                />
                            </div>
                            <h4 class="ps-block__title" v-html="item.title"></h4>
                            <div class="ps-block__subtitle" v-html="item.subtitle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Effective and reliable <br />protection for your teeth'
        },
        listData: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            extents: [],
            items: [
                {
                    icon: '/img/icon/award-icon-2.png',
                    title: 'Health Certificate 2000 - <br/>professional care',
                    subtitle:
                        'The highest quality and protection for your teeth'
                },
                {
                    icon: '/img/icon/dentistry-icon-2.png',
                    title: 'Sonic cleaning <br/>and whitening power',
                    subtitle: 'At the same time, it protects and whitens'
                },
                {
                    icon: '/img/icon/toothbrush-icon-2.png',
                    title: '3 types <br/>of cleaning tips',
                    subtitle: 'Round, rectangular and super-wide'
                }
            ]
        };
    },
    mounted() {
        if (this.listData && this.listData.length) {
            this.extents = this.listData;
        } else {
            this.extents = this.items;
        }
    }
};
</script>
