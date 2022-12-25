<template>
    <section class="ps-section--categories">
        <div class="container">
            <h3 class="ps-section__title">Popular categories</h3>
            <div class="ps-section__content">
                <div class="ps-categories__list">
                    <div class="ps-categories__item" v-for="(item, index) in popularCategories" :key="index">
                        <nuxt-link class="ps-categories__link" to="/shop"
                            ><img :src="item.image" alt/></nuxt-link
                        ><nuxt-link
                            class="ps-categories__name"
                            to="/shop"
                            >{{ item.text }}</nuxt-link
                        >
                    </div>
                </div>
                <div class="text-center">
                    <nuxt-link class="ps-categories__show" to="/shop"
                        >Show all</nuxt-link
                    >
                </div>
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
