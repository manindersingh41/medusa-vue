<template>
    <div class="ps-pagination">
        <v-skeleton-loader
            type="image"
            v-if="loading"
            width="100%"
            height="50"
        ></v-skeleton-loader>
        <ul class="pagination" v-else>
            <li><a href="#" @click.prevent="prevPage()"><i class="icon-chevron-left"></i></a></li>
            <li v-for="item in length" :key="item" :class="[pageIndex === item ? 'active' : '']"><a href="#" @click.prevent="pageIndex = item">{{ item }}</a></li>
            <li><a href="#" @click.prevent="nextPage()"><i class="icon-chevron-right"></i></a></li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        page: {
            type: Number,
            default: 1
        },
        length: {
            type: Number,
            default: 1
        }
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        }),
        pageIndex: {
            set(value) {
                this.handleChangPage(value);
                return value;
            },
            get() {
                return this.page
            }
        }
    },
    methods: {
        handleChangPage(pageIndex) {
            if (pageIndex != this.page) {
                this.$emit('handleChangePage', pageIndex)
            }
        },
        prevPage() {
            if(this.pageIndex > 1) {
                this.pageIndex--
            }
        },
        nextPage() {
            if(this.pageIndex < this.length) {
                this.pageIndex++
            }
        }
    }
}
</script>