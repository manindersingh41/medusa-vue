<template>
    <div class="ps-product__content">
        <v-tabs v-model="tab">
            <v-tab href="#description-content">
                Description
            </v-tab>
            <v-tab href="#information-content" v-if="information && information.length">
                Additional information
            </v-tab>
            <v-tab href="#specification-content" v-if="specification && specification.length">
                Specification
            </v-tab>
            <v-tab href="#reviews-content">
                Reviews ({{reviews && reviews.length ? reviews.length : 0}})
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item value="description-content">
                <v-card flat class="tab-content">
                    <module-tab-description
                        :description="content"
                    />
                </v-card>
            </v-tab-item>
            <v-tab-item value="information-content" v-if="information && information.length">
                <v-card flat class="tab-content">
                    <table-oriented :dataList="information" />
                </v-card>
            </v-tab-item>
            <v-tab-item value="specification-content" v-if="specification && specification.length">
                <v-card flat class="tab-content">
                    <div v-for="(item, index) in specification" :key="index">
                        <div class="ps-table__name" v-if="item.title">{{ item.title }}</div>
                        <table-oriented :dataList="item.data" />
                    </div>
                </v-card>
            </v-tab-item>
            <v-tab-item value="reviews-content">
                <v-card flat class="tab-content">
                    <div class="ps-product__tabreview" v-if="!reviews || !reviews.length">
                        <p class="ps-desc">There are no reviews yet.</p>
                    </div>
                    <div class="ps-product__tabreview" v-if="!bottom && reviews && reviews.length">
                        <review-product v-for="(item, index) in reviews" :key="index" :item="item" />
                    </div>
                    <form-review @submit="handleReview" />
                    <div class="ps-product__tabreview" v-if="bottom && reviews && reviews.length">
                        <review-product v-for="(item, index) in reviews" :key="index" :item="item" />
                    </div>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import ModuleTabDescription from '~/components/partials/product/modules/ModuleTabDescription';
import TableOriented from '~/components/elements/commons/TableOriented';
import FormReview from '~/components/elements/commons/FormReview';
import ReviewProduct from '~/components/elements/commons/ReviewProduct';

export default {
    props: {
        content: {
            type: Object,
            default: () => {}
        },
        information: {
            type: Array,
            default: () => []
        },
        specification: {
            type: Array,
            default: () => []
        },
        reviews: {
            type: Array,
            default: () => []
        },
        bottom: {
            type: Boolean,
            default: false
        }
    },
    components: { ModuleTabDescription, TableOriented, FormReview, ReviewProduct },
    data() {
        return {
            tab: 0
        };
    },
    methods: {
        handleReview(data) {
            console.log('data', data);
        }
    }
};
</script>
