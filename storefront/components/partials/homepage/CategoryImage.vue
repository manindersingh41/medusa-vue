<template>
    <section class="ps-section--category ps-category--image">
        <div class="container">
            <h3 class="ps-section__title">Check out the most popular categories</h3>
            <div class="ps-section__content">
                <div class="row">
                    <div class="col-6 col-sm-4" v-for="(item, index) in categoryImage" :key="index">
                        <div class="ps-category__thumbnail"> 
                            <nuxt-link class="ps-category__image" to="/shop"><img :src="item.image" alt></nuxt-link>
                            <div class="ps-category__content">
                                <nuxt-link class="ps-category__name" to="/shop">{{ item.name }}</nuxt-link>
                                <nuxt-link class="ps-category__more" to="/shop">More</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { categoryImage } from '~/static/data/category.json';
export default {
    data() {
        return {
            categoryImage
        };
    }
}
</script>
