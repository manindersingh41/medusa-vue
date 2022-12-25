<template>
    <section class="ps-section--newsletter ps-section--newsletter-inline">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-7">
                    <h3 class="ps-section__title">Join our newsletter and get $20 discount for your first order</h3>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="ps-section__content">
                        <form-subscribe @handleSubscribe="handleSubscribe" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FormSubscribe from '~/components/elements/commons/FormSubscribe';

export default {
    components: {
        FormSubscribe
    },
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
}
</script>