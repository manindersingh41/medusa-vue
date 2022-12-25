<template lang="html">
    <ul :class="className">
        <li
            v-for="(item, index) in list"
            :class="[item.extraClass]"
            :key="index"
        >
            <nuxt-link
                :to="item.url ? item.url : '#'"
                :class="[item.linkClass]"
            >
                <i v-if="item.icon" :class="item.icon"></i>
                {{ item.text }}
                <span class="has-badge" v-if="item.new">New</span>
            </nuxt-link>
            <span class="sub-toggle" v-if="item.subMenu || item.megaContent">
                <i class="fa fa-chevron-down"></i>
            </span>
            <render-list v-if="item.subMenu" :list="item.subMenu" :className="item.subClass" />
            <div class="mega-menu" v-else-if="item.megaContent">
                <div class="container">
                    <div class="mega-menu__widget" v-if="item.home">
                        <menu-mega-image :data-list="item.megaContent" />
                    </div>
                    <div class="mega-menu__row" v-else>
                        <div v-for="(val, indexVal) in item.megaContent" :class="['mega-menu__column', val.megaColumn && val.megaColumn]">
                            <template v-if="val.heading">
                                <h4>{{ val.heading }}</h4>
                                <render-list :list="val.megaItems" className="sub-menu--mega" />
                            </template>
                            <template v-else>
                                <menu-product v-if="val.collection" />
                                <div class="mega-menu__product" v-else-if="val.product">
                                    <count-down />
                                    <product-standard :product="product" />
                                </div>
                                <render-list v-else-if="val.megaItems" :list="val.megaItems" className="sub-menu--mega sub-menu--bold" />
                                <div v-else-if="val.promo">
                                    <div class="ps-promo" v-for="(promo, indexPromo) in promos" :key="indexPromo">
                                        <promo-item :item="promo" />
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <branch :branchs="branchs" v-if="item.branch" />
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import Branch from '~/components/elements/commons/Branch';
import { branchDefault } from '~/static/data/common.json';
import { navPromo } from '~/static/data/menu.json';
import PromoItem from '~/components/elements/commons/PromoItem';
import CountDown from '~/components/elements/commons/CountDown';
import MenuMegaImage from '~/components/elements/menu/MenuMegaImage';
import ProductStandard from '~/components/elements/product/ProductStandard';
import MenuProduct from '~/components/elements/menu/MenuProduct';

export default {
    name: 'RenderList',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        className: {
            type: String,
            default: ''
        },
        active: {
            type: Number,
            default: -1
        },
        product: {
            type: Object,
            default: () => {}
        }
    },
    components: { Branch, PromoItem, CountDown, MenuMegaImage, ProductStandard, MenuProduct },
    data() {
        return {
            branchs: branchDefault,
            promos: navPromo,
            active_el: null
        }
    }
};
</script>
