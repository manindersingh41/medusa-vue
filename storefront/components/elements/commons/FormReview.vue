<template>
    <div class="ps-form--review">
        <div class="ps-form__title">Write a review</div>
        <div class="ps-form__desc">
            Your email address will not be published. Required fields are marked
            *
        </div>
        <form>
            <div class="row">
                <div class="col-12 col-lg-4">
                    <label class="ps-form__label">Your rating *</label>
                    <v-rating
                        class="ps-rating ps-rating--form"
                        background-color="orange lighten-3"
                        color="orange"
                        length="5"
                        v-model="rating"
                    ></v-rating>
                </div>
                <div class="col-6 col-lg-4">
                    <label class="ps-form__label">Name *</label>
                    <v-text-field
                        class="form-control ps-form__input"
                        v-model="name"
                        required
                        rounded
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                        :error-messages="nameErrors"
                    />
                </div>
                <div class="col-6 col-lg-4">
                    <label class="ps-form__label">Email *</label>
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
                <div class="col-12">
                    <div class="ps-form__block">
                        <label class="ps-form__label">Your review *</label>
                        <v-textarea
                            class="form-control ps-form__textarea"
                            v-model="review"
                            rows="3"
                            required
                            rounded
                            @input="$v.review.$touch()"
                            @blur="$v.review.$touch()"
                            :error-messages="reviewErrors"
                        ></v-textarea>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <button
                        class="btn ps-btn ps-btn--warning"
                        @click.prevent="formSubmit()"
                    >
                        Add Review
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
export default {
    mixins: [validationMixin],
    validations: {
        name: { required },
        email: { required, email },
        review: { required }
    },
    data() {
        return {
            rating: 5,
            name: null,
            email: null,
            review: null
        };
    },
    computed: {
        reviewErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.review.required && errors.push('Name is required.');
            return errors;
        },
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push('Name is required.');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push('Must be valid e-mail');
            !this.$v.email.required && errors.push('E-mail is required');
            return errors;
        }
    },
    methods: {
        formSubmit() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                const params = {
                    rating: this.rating,
                    name: this.name,
                    email: this.email,
                    review: this.review
                };
                this.$emit('submit', params);
            }
        }
    }
};
</script>
