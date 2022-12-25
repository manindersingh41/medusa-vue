<template>
    <div class="row">
        <div class="col-12">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label">Email address *</label>
                <v-text-field
                    class="form-control ps-input"
                    type="email"
                    v-model="email"
                    required
                    rounded
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    :error-messages="emailErrors"
                />
            </div>
        </div>
        <div class="col-12 col-sm-6">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label">First name *</label>
                <v-text-field
                    class="form-control ps-input"
                    v-model="firstName"
                    required
                    rounded
                    @input="$v.firstName.$touch()"
                    @blur="$v.firstName.$touch()"
                    :error-messages="getInputErrors('firstName', 'First name')"
                />
            </div>
        </div>
        <div class="col-12 col-sm-6">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label">Last name *</label>
                <v-text-field
                    class="form-control ps-input"
                    v-model="lastName"
                    required
                    rounded
                    @input="$v.lastName.$touch()"
                    @blur="$v.lastName.$touch()"
                    :error-messages="getInputErrors('lastName', 'Last name')"
                />
            </div>
        </div>
        <div class="col-12">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label"
                    >Company name (optional)</label
                >
                <v-text-field
                    class="form-control ps-input"
                    v-model="company"
                    rounded
                />
            </div>
        </div>
        <div class="col-12">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label">Street address *</label>
                <v-text-field
                    class="form-control ps-input mb-5"
                    placeholder="House number and street name"
                    v-model="street"
                    required
                    rounded
                    @input="$v.street.$touch()"
                    @blur="$v.street.$touch()"
                    :error-messages="getInputErrors('street', 'Street address')"
                />
                <v-text-field
                    class="form-control ps-input"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    v-model="apartment"
                    rounded
                />
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label">Town / City *</label>
                <v-text-field
                    class="form-control ps-input"
                    v-model="town"
                    required
                    rounded
                    @input="$v.town.$touch()"
                    @blur="$v.town.$touch()"
                    :error-messages="getInputErrors('town', 'Town / City')"
                />
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label">Postcode *</label>
                <v-text-field
                    class="form-control ps-input"
                    v-model="postcode"
                    required
                    rounded
                    @input="$v.postcode.$touch()"
                    @blur="$v.postcode.$touch()"
                    :error-messages="getInputErrors('postcode', 'Postcode')"
                />
            </div>
        </div>
        <div class="col-12">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label">County (optional)</label>
                <v-text-field
                    class="form-control ps-input"
                    v-model="county"
                    rounded
                />
            </div>
        </div>
        <div class="col-12">
            <div class="ps-checkout__group">
                <label class="ps-checkout__label">Phone *</label>
                <v-text-field
                    class="form-control ps-input"
                    v-model="phone"
                    required
                    rounded
                    @input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                    :error-messages="getInputErrors('phone', 'Phone')"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, requiredIf } from 'vuelidate/lib/validators';

export default {
    mixins: [validationMixin],
    validations: {
        email: { required, email },
        firstName: { required },
        lastName: { required },
        street: { required },
        town: { required },
        phone: { required },
        postcode: { required }
    },
    data() {
        return {
            email: null,
            firstName: null,
            lastName: null,
            company: null,
            street: null,
            apartment: null,
            county: null,
            town: null,
            postcode: null,
            phone: null
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
        getInputErrors(name, mess) {
            const errors = [];
            if (!this.$v[name].$dirty) return errors;
            !this.$v[name].required && errors.push(mess + ' is required.');
            return errors;
        },
        submitForm() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                const params = {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    company: this.company,
                    street: this.street,
                    apartment: this.apartment,
                    county: this.county,
                    town: this.town,
                    postcode: this.postcode
                };
                this.$emit('validate', true);
                this.$emit('submit', params);
            } else {
                this.$emit('validate', false);
            }
        }
    }
}
</script>

