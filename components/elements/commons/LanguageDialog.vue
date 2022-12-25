<template>
    <v-dialog v-model="dialog" max-width="600" content-class="ps-dialog ps-dialog--select">
        <v-card class="ps-dialog__body">
            <button class="ps-dialog__close" @click="handleCloseDialog(false)">
                <i class="icon-cross"></i>
            </button>
            <div>
                <h2 class="ps-dialog__title">Select language</h2>
                <ul class="ps-dialog__list">
                    <li
                        class="language-item"
                        v-for="item in dataList"
                        :key="item.value"
                    >
                        <a
                            :class="[
                                'btn',
                                language == item.value ? 'active' : ''
                            ]"
                            href="#"
                            @click.prevent="handleSelectLanguage(item.value)"
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
                    text: 'English',
                    value: 'English'
                },
                {
                    text: 'Deutsch',
                    value: 'Deutsch'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            openDialogLanguage: state => state.app.openDialogLanguage,
            language: state => state.app.language
        }),
        dialog: {
            set(value) {
                this.handleCloseDialog(value);
                return value;
            },
            get() {
                return this.openDialogLanguage;
            }
        }
    },
    methods: {
        handleCloseDialog(value) {
            this.$store.commit('app/setDialogLanguage', value);
        },
        handleSelectLanguage(value) {
            this.$store.commit('app/setLanguage', value);
            this.handleCloseDialog(false);
        }
    }
};
</script>
