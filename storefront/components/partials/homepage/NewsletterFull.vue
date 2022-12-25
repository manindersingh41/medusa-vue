<template>
    <section class="ps-section--newsletter ps-section--newsletter-full" style="background-image: url('/img/bg-newsletter.jpg')">
        <div class="container">
            <div class="ps-section__content">
                <h3 class="ps-section__title">Join our newsletter and get $20 discount for your first order</h3>
                <form-subscribe @handleSubscribe="handleSubscribe" />
            </div>
        </div>
    </section>
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
}
</script>
