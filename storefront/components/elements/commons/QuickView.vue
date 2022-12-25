<template>
    <v-dialog v-model="dialog" max-width="1100" content-class="ps-dialog ps-quickview">
        <v-card class="ps-dialog__body">
            <button
                class="ps-dialog__close"
                type="button"
                @click="closeModel(false)"
            >
                <i class="icon-cross"></i>
            </button>

            <div class="ps-quickview__body">
                <div class="ps-product--detail" v-if="productOverview">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <module-product-gallery :images="productOverview.images" />
                        </div>
                        <div class="col-12 col-md-6">
                            <product-info :product="productOverview" :design="design" />
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import ProductInfo from '~/components/elements/product/ProductInfo';
import ModuleProductGallery from '~/components/elements/product/modules/ModuleProductGallery';

export default {
    components: { ProductInfo, ModuleProductGallery },
    data() {
        return {
            design: {
                inStock: true,
                branch: 'HeartRate',
                quickview: true,
                type: true
            }
        }
    },
    computed: {
        ...mapState({
            dialogQuickview: state => state.cart.dialogQuickview,
            productOverview: state => state.cart.productOverview
        }),
        dialog: {
            set(value) {
                this.closeModel(value);
                return value;
            },
            get() {
                return this.dialogQuickview;
            }
        }
    },
    methods: {
        closeModel(value) {
            this.$store.commit('cart/setDialogQuickview', value);
        }
    }
};
</script>

