<template>
    <form>
        <div class="ps-form--subscribe"> 
            <div class="ps-form__control">
                <input class="form-control ps-input" v-model="email" type="email" placeholder="Enter your email address">
                <button class="ps-btn ps-btn--warning" @click.prevent="handleSubscribe()">Subscribe</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'form-subscribe',
    data() {
        return {
            email: null
        }
    },
    methods: {
        handleSubscribe() {
            this.$emit('handleSubscribe', this.email);
        }
    }
}
</script>
