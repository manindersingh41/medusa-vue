<template>
    <div class="ps-footer--listpage">
        <div class="row">
            <div class="col-4 col-md-2">
                <ul class="ps-footer__list">
                    <li><nuxt-link to="/about-us">About us</nuxt-link></li>
                    <li><nuxt-link to="/">Delivery information</nuxt-link></li>
                    <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
                </ul>
            </div>
            <div class="col-4 col-md-2">
                <ul class="ps-footer__list">
                    <li><nuxt-link to="/">Affiliate</nuxt-link></li>
                    <li><nuxt-link to="/">Sales</nuxt-link></li>
                    <li><nuxt-link to="/">Terms & Conditions</nuxt-link></li>
                </ul>
            </div>
            <div class="col-4 col-md-2">
                <ul class="ps-footer__list">
                    <li><nuxt-link to="/">Bestsellers</nuxt-link></li>
                    <li><nuxt-link to="/">Discount</nuxt-link></li>
                    <li><nuxt-link to="/">Latest products</nuxt-link></li>
                </ul>
            </div>
            <div class="col-4 col-md-2">
                <ul class="ps-footer__list">
                    <li><nuxt-link to="/">My account</nuxt-link></li>
                    <li><nuxt-link to="/">My orders</nuxt-link></li>
                    <li><nuxt-link to="/">Returns</nuxt-link></li>
                </ul>
            </div>
            <div class="col-4 col-md-2">
                <ul class="ps-footer__list">
                    <li><nuxt-link to="/shop/list">Shipping</nuxt-link></li>
                    <li><nuxt-link to="/shop/wishlist">Wishlist</nuxt-link></li>
                </ul>
            </div>
            <div class="col-4 col-md-2"></div>
        </div>
    </div>
</template>

<script>
import RenderList from '~/components/elements/commons/RenderList';
export default {
    components: { RenderList }
};
</script>
