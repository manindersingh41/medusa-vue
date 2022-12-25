<template>
    <div class="ps-portfolio">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <div class="ps-portfolio__content">
                <h1 class="ps-portfolio__title">Portfolio</h1>
                <div class="ps-portfolio__tabs">
                    <v-tabs v-model="tab">
                        <v-tab href="#All">
                            All
                        </v-tab>
                        <v-tab href="#design">
                            Design
                        </v-tab>
                        <v-tab href="#management">
                            Management
                        </v-tab>
                        <v-tab href="#fashion">
                            Fashion
                        </v-tab>
                        <v-tab href="#photography">
                            Photography
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tab">
                        <v-tab-item value="All">
                            <v-card flat class="tab-content">
                                <div class="row">
                                    <div
                                        class="col-12 col-sm-6 col-md-4"
                                        v-for="(item, index) in projects"
                                        :key="index"
                                    >
                                        <portfolio-item :item="item" />
                                    </div>
                                </div>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item value="design">
                            <v-card flat class="tab-content">
                                <div class="row">
                                    <template v-for="(item, index) in projects">
                                        <div
                                            class="col-12 col-sm-6 col-md-4"
                                            v-if="item.design"
                                            :key="index"
                                        >
                                            <portfolio-item :item="item" />
                                        </div>
                                    </template>
                                </div>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item value="management">
                            <v-card flat class="tab-content">
                                <div class="row">
                                    <template v-for="(item, index) in projects">
                                        <div
                                            class="col-12 col-sm-6 col-md-4"
                                            v-if="item.management"
                                            :key="index"
                                        >
                                            <portfolio-item :item="item" />
                                        </div>
                                    </template>
                                </div>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item value="fashion">
                            <v-card flat class="tab-content">
                                <div class="row">
                                    <template v-for="(item, index) in projects">
                                        <div
                                            class="col-12 col-sm-6 col-md-4"
                                            v-if="item.fashion"
                                            :key="index"
                                        >
                                            <portfolio-item :item="item" />
                                        </div>
                                    </template>
                                </div>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item value="photography">
                            <v-card flat class="tab-content">
                                <div class="row">
                                    <template v-for="(item, index) in projects">
                                        <div
                                            class="col-12 col-sm-6 col-md-4"
                                            v-if="item.photography"
                                            :key="index"
                                        >
                                            <portfolio-item :item="item" />
                                        </div>
                                    </template>
                                </div>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
                <div class="ps-portfolio__button">
                    <a
                        class="ps-btn ps-btn--primary"
                        href="#"
                        @click.prevent="handleLoadMore()"
                        >Load more</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import PortfolioItem from '~/components/elements/commons/PortfolioItem';
import { projects } from '~/static/data/blog.json';

export default {
    components: {
        Breadcrumb,
        PortfolioItem
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: `/portfolio`,
                    extraClass: 'active',
                    text: 'Portfolio'
                }
            ],
            tab: 0,
            projects: projects
        };
    },
    methods: {
        handleLoadMore() {}
    }
};
</script>
