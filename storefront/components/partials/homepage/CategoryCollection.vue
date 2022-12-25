<template>
    <section class="ps-section--category">
        <div class="container">
            <h3 class="ps-section__title">
                Check out the most popular categories
            </h3>
            <div class="ps-category--block">
                <div class="ps-category__thumbnail" v-for="(item, index) in categoryImage" :key="index">
                    <nuxt-link class="ps-category__image" to="/shop"
                        ><img :src="item.image" alt
                    /></nuxt-link>
                    <div class="ps-category__content">
                        <nuxt-link class="ps-category__name" to="/shop"
                            >{{ item.name }}</nuxt-link
                        ><nuxt-link class="ps-category__more" to="/shop"
                            >More</nuxt-link
                        >
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-sm-4 col-md-2" v-for="(item, index) in categories" :key="index">
                    <div class="ps-category__nav">
                        <div class="ps-category__title">{{ item.name }}</div>
                        <render-list :list="item.list" :className="'ps-category__list'" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { categories, categoryImage } from '~/static/data/category.json';
import RenderList from '~/components/elements/commons/RenderList';

export default {
    components: { RenderList },
    data() {
        return {
            categoryImage,
            categories: categories
        };
    }
};
</script>
