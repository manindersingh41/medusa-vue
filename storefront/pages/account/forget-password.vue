<template>
    <div class="ps-forget-password">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <div class="ps-forget-password__content">
                <div class="ps-forget-password__text">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</div>
                <div class="ps-form--review">
                    <div class="ps-form__group">
                        <label class="ps-form__label">Username or email</label>
                        <v-text-field
                            class="form-control ps-form__input"
                            type="email"
                            v-model="email"
                            required
                            rounded
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                            :error-messages="emailErrors"
                        />
                    </div>
                    <div class="ps-form__submit">
                        <button class="ps-btn ps-btn--warning" @click="handleResetPassword()">Reset password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import Breadcrumb from '~/components/elements/commons/Breadcrumb';

export default {
    layout: 'default',
    mixins: [validationMixin],
    validations: {
        email: { required, email }
    },
    components: { Breadcrumb },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/account/forget-password',
                    extraClass: 'active',
                    text: 'Lost Password'
                }
            ],
            email: null
        }
    },
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push('Must be valid e-mail');
            !this.$v.email.required && errors.push('E-mail is required');
            return errors;
        }
    },
    methods: {
        handleResetPassword() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                console.log('reset');
            }
        }
    }
}
</script>
