<template>
    <v-dialog v-model="dialog" max-width="500" content-class="ps-dialog ps-dialog--notify">
        <v-card class="ps-dialog__body">
            <button class="ps-dialog__close" @click="handleCloseDialog(false)">
                <i class="icon-cross"></i>
            </button>
            <div class="ps-dialog__content" v-if="messageNotify">
                <h2 class="ps-dialog__title" v-if="messageNotify.title">{{ messageNotify.title }}</h2>
                <div class="ps-dialog__icon" v-if="messageNotify.icon">
                    <i :class="messageNotify.icon"></i>
                </div>
                <p class="ps-dialog__message">{{ messageNotify.message }}</p>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            dialogNotify: state => state.app.dialogNotify,
            messageNotify: state => state.app.messageNotify
        }),
        dialog: {
            set(value) {
                this.handleCloseDialog(value);
                return value;
            },
            get() {
                return this.dialogNotify;
            }
        }
    },
    methods: {
        handleCloseDialog(value) {
            this.$store.commit('app/setDialogNotify', value);
        }
    }
};
</script>
