<template>
    <div class="ps-footer--newsletter">
        <h5 class="ps-footer__title">Join our newsletter</h5>
        <p>And get $20 discount for your first order</p>
        <form-subscribe @handleSubscribe="handleSubscribe" />
    </div>
</template>

<script>
import FormSubscribe from '~/components/elements/commons/FormSubscribe';
export default {
    components: { FormSubscribe },
    methods: {
        handleSubscribe(email) {
            console.log('email', email);
            const message = {
                message: 'Thank you for you subscribe.',
                icon: 'icon-shield-check'
            }
            this.$store.commit('app/setMessageNotify', message)
            this.$store.commit('app/setDialogNotify', true);
        }
    }
};
</script>
