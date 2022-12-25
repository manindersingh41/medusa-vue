<template>
    <div class="ps-portfolio--detail">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <div class="row">
                <div class="col-12 col-sm-6">
                    <div class="ps-portfolio__thunmnail">
                        <a href="/img/blog/portfolio-1.jpg"
                            ><img src="/img/blog/portfolio-1.jpg" alt=""/></a
                        ><a href="/img/blog/portfolio-2.jpg"
                            ><img src="/img/blog/portfolio-2.jpg" alt=""/></a
                        ><a href="/img/blog/portfolio-3.jpg"
                            ><img src="/img/blog/portfolio-3.jpg" alt=""
                        /></a>
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="ps-portfolio__content">
                        <h2 class="ps-portfolio__title">New special offer for customers who have been with us for 10 years</h2>
                        <p class="ps-portfolio__subtitle">Sed ac ligula ut leo dignissim blandit non at odio. Mauris et odio ut odio elementum fermentum. Nullam dictum diam nisl, vitae euismod erat imperdiet in. Vestibulum ac tristique tortor, non iaculis dolor.</p>
                        <p class="ps-portfolio__des">Nunc in tincidunt dui. Proin laoreet imperdiet dui et imperdiet. Nam sit amet erat nisl. Nam tristique porttitor risus, at fringilla velit. Aliquam erat volutpat.</p>
                        <p class="ps-portfolio__des">Suspendisse viverra egestas eros. Duis tempus varius diam et condimentum. Donec elementum, mi ut posuere posuere, erat dui interdum ante, nec fringilla augue odio ac felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <review-item :item="review" />
                        <div class="ps-portfolio__footer">
                            <div class="ps-portfolio__item" v-for="(item, index) in footerLink" :key="index"> 
                                <span class="ps-portfolio__label">{{ item.label }}</span>
                                <span class="ps-portfolio__text">
                                    {{ item.text && item.text }}
                                    <nuxt-link v-if="item.link" :to="item.link">http://nouthemes.net/html/mymedi{{item.link}}</nuxt-link>
                                </span>
                            </div>
                        </div>
                        <social-icon-color />
                    </div>
                </div>
            </div>
        </div>
        <blog-latest
            title="Related Projects"
            :dataList="postLatest"
            style="background-image: url('/img/related-bg.jpg');"
        />
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import BlogLatest from '~/components/partials/homepage/BlogLatest';
import { projects } from '~/static/data/blog.json';
import ReviewItem from '~/components/elements/commons/ReviewItem';
import SocialIconColor from '~/components/shared/SocialIconColor';
import { getPosts } from '~/repositories/PostRepository';

export default {
    layout: 'default',
    components: {
        Breadcrumb,
        BlogLatest,
        ReviewItem,
        SocialIconColor
    },
    data() {
        return {
            postLatest: [],
            projects: projects,
            review: {
                text: 'I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.',
                name: 'Mark J.',
                rate: 5
            },
            footerLink: [
                {
                    label: 'Client:',
                    text: 'Client name'
                },
                {
                    label: 'Year:',
                    text: '2018'
                },
                {
                    label: 'Categories:',
                    text: 'Management'
                },
                {
                    label: 'Link:',
                    link: '/portfolio/1'
                },
                {
                    label: '2 Likes',
                    text: ''
                }
            ]
        };
    },
    computed: {
        breadcrumb() {
            let item = this.projects.find(el => {
                return el.id == this.$route.params.id;
            });
            let title = 'Portfolio Detail';
            if (item) {
                title = item.title;
            }
            return [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/portfolio',
                    text: 'Portfolio'
                },
                {
                    url: `/portfolio/${this.$route.params.id}`,
                    extraClass: 'active',
                    text: title
                }
            ];
        }
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
        this.postLatest = await getPosts();
        this.$store.commit('app/setLoading', false);
    }
};
</script>
