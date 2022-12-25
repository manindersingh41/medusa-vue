<template>
    <div class="ps-categogy__wrapper">
        <div class="ps-categogy__filter" v-if="filter">
            <a href="#" @click="separateChange()"
                ><i class="fa fa-filter" v-if="!openSeparate"></i
                ><i class="fa fa-times" v-else></i>Filter</a
            >
        </div>
        <div class="ps-categogy__type">
            <a
                v-for="(item, index) in shopType"
                :key="index"
                href="#"
                :class="{ active: item.name == type }"
                @click.prevent="getType = item.name"
            >
                <img :src="item.icon" alt />
            </a>
        </div>
        <div class="ps-categogy__onsale">
            <div class="custom-control custom-checkbox">
                <input
                    class="custom-control-input"
                    type="checkbox"
                    id="onSaleProduct"
                    v-model="onSaleProduct"
                />
                <label class="custom-control-label" for="onSaleProduct"
                    >Show only products on sale</label
                >
            </div>
        </div>
        <div class="ps-categogy__sort">
            <span>Sort by</span>
            <v-select
                dense
                :items="sortItems"
                item-text="text"
                item-value="value"
                v-model="getSort"
            ></v-select>
        </div>
        <div class="ps-categogy__show">
            <span>Show</span>
            <v-select
                dense
                :items="showItems"
                item-text="text"
                item-value="value"
                v-model="getPageSize"
            ></v-select>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'grid3'
        },
        pageSize: {
            type: Number,
            default: 12
        },
        sort: {
            type: String,
            default: 'Latest'
        },
        filter: {
            type: Boolean,
            default: false
        },
        listType: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            onSaleProduct: false,
            shopType: [
                {
                    icon: '/img/icon/bars.svg',
                    name: 'list'
                },
                {
                    icon: '/img/icon/grid2.svg',
                    name: 'grid2'
                },
                {
                    icon: '/img/icon/grid3.svg',
                    name: 'grid3'
                },
                {
                    icon: '/img/icon/grid4.svg',
                    name: 'grid4'
                }
            ],
            sortItems: [
                {
                    text: 'Latest',
                    value: 'Latest'
                },
                {
                    text: 'Popularity',
                    value: 'Popularity'
                },
                {
                    text: 'Average rating',
                    value: 'Average rating'
                },
                {
                    text: 'Price: low to high',
                    value: 'Price: low to high'
                },
                {
                    text: 'Price: high to low',
                    value: 'Price: high to low'
                }
            ],
            showItems: [
                {
                    text: '12',
                    value: 12
                },
                {
                    text: '24',
                    value: 24
                },
                {
                    text: '36',
                    value: 36
                },
                {
                    text: '48',
                    value: 48
                }
            ],
            openSeparate: false
        };
    },
    computed: {
        getType: {
            set(value) {
                this.handleChangeType(value);
                return value;
            },
            get() {
                return this.type;
            }
        },
        getSort: {
            set(value) {
                this.handleChangeSort(value);
                return value;
            },
            get() {
                return this.sort;
            }
        },
        getPageSize: {
            set(value) {
                this.handleChangePageZise(value);
                return value;
            },
            get() {
                return this.pageSize;
            }
        }
    },
    mounted() {
        if (this.listType && this.listType.length) {
            this.shopType = this.listType;
        }
    },
    methods: {
        handleChangeType(value) {
            if (value != this.type) {
                this.$emit('handleChangeType', value);
            }
        },
        handleChangePageZise(value) {
            if (value != this.pageSize) {
                this.$emit('handleChangePageZise', value);
            }
        },
        handleChangeSort(value) {
            if (value != this.sort) {
                this.$emit('handleChangeSort', value);
            }
        },
        separateChange() {
            this.openSeparate = !this.openSeparate;
            this.$emit('handleChangeFilter', this.openSeparate);
        }
    },
    watch: {
        onSaleProduct() {
            this.$emit('onlySaleProduct', this.onSaleProduct);
        }
    }
};
</script>
