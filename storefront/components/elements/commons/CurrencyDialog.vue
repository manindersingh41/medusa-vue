<template>
    <v-dialog v-model="dialog" max-width="600" content-class="ps-dialog ps-dialog--select">
        <v-card class="ps-dialog__body">
            <button class="ps-dialog__close" @click="handleCloseDialog(false)">
                <i class="icon-cross"></i>
            </button>
            <div>
                <h2 class="ps-dialog__title">Select currency</h2>
                <ul class="ps-dialog__list">
                    <li
                        class="language-item"
                        v-for="item in dataList"
                        :key="item.value"
                    >
                        <a
                            :class="[
                                'btn',
                                currency == item.value ? 'active' : ''
                            ]"
                            href="#"
                            @click.prevent="handleSelectCurrency(item.value)"
                            >{{ item.text }}</a
                        >
                    </li>
                </ul>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            dataList: [
                {
                    text: 'USD',
                    value: 'USD'
                },
                {
                    text: 'EUR',
                    value: 'EUR'
                },
                {
                    text: 'JPY',
                    value: 'JPY'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            openDialogCurrency: state => state.app.openDialogCurrency,
            currency: state => state.app.currency
        }),
        dialog: {
            set(value) {
                this.handleCloseDialog(value);
                return value;
            },
            get() {
                return this.openDialogCurrency;
            }
        }
    },
    methods: {
        handleCloseDialog(value) {
            this.$store.commit('app/setDialogCurrency', value);
        },
        handleSelectCurrency(value) {
            this.$store.commit('app/setCurrency', value);
            this.handleCloseDialog(false);
        }
    }
};
</script>
