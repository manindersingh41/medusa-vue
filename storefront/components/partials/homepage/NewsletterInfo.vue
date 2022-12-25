<template>
    <section class="ps-section--newsletter ps-section--newsletter-info" :style="{backgroundImage: 'url(' + bgImage + ')'}">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-8 col-md-6">
                    <div class="ps-section__body">
                        <h3 class="ps-section__title">Join our newsletter and get <br/>$20 discount for your first order</h3>
                        <div class="ps-section__content">
                            <form-subscribe @handleSubscribe="handleSubscribe" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FormSubscribe from '~/components/elements/commons/FormSubscribe';

export default {
    props: {
        bgImage: {
            type: String,
            default: ''
        }
    },
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
