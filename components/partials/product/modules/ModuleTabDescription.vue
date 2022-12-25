<template>
    <div class="ps-document">
        <div class="row row-reverse" v-if="description.imgContent"> 
            <div class="col-12 col-md-6">
                <img class="ps-thumbnail" v-if="description.imgContent" :src="description.imgContent" alt>
            </div>
            <div class="col-12 col-md-6">
                <h2 class="ps-title" v-if="description.title">{{ description.title }}</h2>
                <div class="ps-subtitle" v-if="description.subtitle">{{ description.subtitle }}</div>
                <p class="ps-desc" v-if="description.desc">{{ description.desc }}</p>
                <ul class="ps-list" v-if="description.list"> 
                    <li v-for="(item, index) in description.list" :key="index"><img :src="item.img" alt=""><span>{{ item.text }}</span></li>
                </ul>
            </div>
        </div>
        <div v-else>
            <h2 class="ps-title" v-if="description.title">{{ description.title }}</h2>
            <div class="ps-subtitle" v-if="description.subtitle">{{ description.subtitle }}</div>
            <p class="ps-desc" v-if="description.desc" v-html="description.desc"></p>
            <ul class="ps-list" v-if="description.list"> 
                <li v-for="(item, index) in description.list" :key="index" :class="item.extraClass"><img :src="item.img" alt=""><span>{{ item.text }}</span></li>
            </ul>
        </div>
        <table-oriented :dataList="description.table" v-if="description.table" />
        <div class="row" v-if="description.news"> 
            <div class="col-12 col-md-6" v-for="(item, index) in description.news" :key="index">
                <div class="ps-item"> 
                    <img :src="item.img" alt>
                    <nuxt-link :to="item.url">{{ item.text }}</nuxt-link>
                </div>
            </div>
        </div>
        <div class="row m-0" v-if="description.reviews"> 
            <div class="col-12 col-md-4 p-0" v-for="(item, index) in description.reviews" :key="index"> 
                <div class="ps-document__review"> <span>{{ item.number }}</span>{{ item.text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import TableOriented from '~/components/elements/commons/TableOriented';

export default {
    props: {
        description: {
            type: Object,
            default: () => {}
        }
    },
    components: { TableOriented }
}
</script>
