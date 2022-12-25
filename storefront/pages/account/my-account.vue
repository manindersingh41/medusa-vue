<template>
    <div class="ps-account">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <div class="ps-form--review">
                        <h2 class="ps-form__title">Login</h2>
                        <div class="ps-form__group">
                            <label class="ps-form__label"
                                >Username or email address *</label
                            >
                            <v-text-field
                                class="form-control ps-form__input"
                                type="email"
                                v-model="loginEmail"
                                required
                                rounded
                                @input="$v.loginEmail.$touch()"
                                @blur="$v.loginEmail.$touch()"
                                :error-messages="loginEmailErrors"
                            />
                        </div>
                        <div class="ps-form__group">
                            <label class="ps-form__label">Password *</label>
                            <v-text-field
                                class="form-control ps-form__input"
                                v-model="loginPassword"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                required
                                rounded
                                @click:append="show1 = !show1"
                                @input="$v.loginPassword.$touch()"
                                @blur="$v.loginPassword.$touch()"
                                :error-messages="loginPasswordErrors"
                            ></v-text-field>
                        </div>
                        <div class="ps-form__submit">
                            <button class="ps-btn ps-btn--warning" @click="handleLogin()">
                                Log in
                            </button>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="remember"
                                    v-model="rememberLogin"
                                />
                                <label class="form-check-label" for="remember"
                                    >Remember me</label
                                >
                            </div>
                        </div>
                        <nuxt-link class="ps-account__link" to="/account/forget-password"
                            >Lost your password?</nuxt-link
                        >
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="ps-form--review">
                        <h2 class="ps-form__title">Register</h2>
                        <div class="ps-form__group">
                            <label class="ps-form__label"
                                >Email address *</label
                            >
                            <v-text-field
                                class="form-control ps-form__input"
                                type="email"
                                v-model="registerEmail"
                                required
                                rounded
                                @input="$v.registerEmail.$touch()"
                                @blur="$v.registerEmail.$touch()"
                                :error-messages="registerEmailErrors"
                            />
                        </div>
                        <div class="ps-form__group">
                            <label class="ps-form__label">Password *</label>
                            <v-text-field
                                class="form-control ps-form__input"
                                v-model="registerPassword"
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show2 ? 'text' : 'password'"
                                required
                                rounded
                                @click:append="show2 = !show2"
                                @input="$v.registerPassword.$touch()"
                                @blur="$v.registerPassword.$touch()"
                                :error-messages="registerPasswordErrors"
                            ></v-text-field>
                            <p class="ps-form__text">
                                Hint: The password should be at least twelve
                                characters long. To make it stronger, use upper
                                and lower case letters, numbers, and symbols
                                like ! " ? $ % ^ & ).
                            </p>
                        </div>
                        <div class="ps-form__submit">
                            <button class="ps-btn ps-btn--warning" @click="handleRegister()">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
    layout: 'default',
    mixins: [validationMixin],
    validations: {
        loginEmail: { required, email },
        loginPassword: { required },
        registerEmail: { required, email },
        registerPassword: { required }
    },
    data() {
        return {
            show1: false,
            show2: false,
            loginEmail: null,
            loginPassword: null,
            registerEmail: null,
            registerPassword: null,
            rememberLogin: false
        };
    },
    computed: {
        loginEmailErrors() {
            const errors = [];
            if (!this.$v.loginEmail.$dirty) return errors;
            !this.$v.loginEmail.email && errors.push('Must be valid e-mail');
            !this.$v.loginEmail.required && errors.push('E-mail is required');
            return errors;
        },
        loginPasswordErrors() {
            const errors = [];
            if (!this.$v.loginPassword.$dirty) return errors;
            !this.$v.loginPassword.required && errors.push('Password is required');
            return errors;
        },
        registerEmailErrors() {
            const errors = [];
            if (!this.$v.registerEmail.$dirty) return errors;
            !this.$v.registerEmail.email && errors.push('Must be valid e-mail');
            !this.$v.registerEmail.required && errors.push('E-mail is required');
            return errors;
        },
        registerPasswordErrors() {
            const errors = [];
            if (!this.$v.registerPassword.$dirty) return errors;
            !this.$v.registerPassword.required && errors.push('Password is required');
            return errors;
        }
    },
    methods: {
        handleLogin() {
            this.$v.loginEmail.$touch();
            this.$v.loginPassword.$touch();
            if (!this.$v.$invalid) {
                const params = {
                    email: this.loginEmail,
                    password: this.loginPassword,
                    remember: this.rememberLogin
                }
                console.log('params', params)
            }
        },
        handleRegister() {
            this.$v.registerEmail.$touch();
            this.$v.registerPassword.$touch();
            if (!this.$v.$invalid) {
                const params = {
                    email: this.registerEmail,
                    password: this.registerPassword
                }
                console.log('params', params)
            }
        }
    }
};
</script>
