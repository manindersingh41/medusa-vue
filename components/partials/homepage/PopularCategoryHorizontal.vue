<template>
    <section class="ps-section--category-horizontal">
        <div class="container">
            <h3 class="ps-section__title">Popular categories</h3>
            <div class="ps-category__content">
                <div
                    class="ps-category__item"
                    v-for="(item, index) in popularCategories"
                    :key="index"
                >
                    <nuxt-link class="ps-category__link" to="/shop"
                        ><img :src="item.image" alt
                    /></nuxt-link>
                    <div class="ps-category__name">
                        <nuxt-link to="/shop">{{
                            item.text
                        }}</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="ps-category__all">
                <nuxt-link to="/shop">Show all</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
import { popularCategories } from '~/static/data/category.json';
export default {
    data() {
        return {
            popularCategories
        };
    }
};
</script>
