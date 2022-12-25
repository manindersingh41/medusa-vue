<template>
    <div class="ps-footer--address">
        <div class="ps-logo">
            <nuxt-link to="/">
                <img src="/img/sticky-logo.png" alt/>
                <img
                    class="logo-white"
                    src="/img/logo-white.png"
                    alt/>
                <img class="logo-black" src="/img/Logo-black.png" alt />
                <img class="logo-white-all" src="/img/logo-white1.png" alt />
                <img class="logo-green" src="/img/logo-green.png" alt />
            </nuxt-link>
        </div>
        <div class="ps-footer__title">Our store</div>
        <p>1487 Rocky Horse Carrefour<br />Arlington, TX 16819</p>
        <p>
            <a
                target="_blank"
                href="https://www.google.com/maps/place/Arlington,+TX,+USA/@32.701968,-97.2054529,12z/data=!3m1!4b1!4m8!1m2!2m1!1s1487+Rocky+Horse+Carrefour+Arlington,+TX+16819!3m4!1s0x864e62d2e40898d3:0xb5ef6ac1fa05351!8m2!3d32.735687!4d-97.1080656"
                >Show on map</a
            >
        </p>
        <social-icon />
    </div>
</template>

<script>
import SocialIcon from '~/components/shared/SocialIcon';
export default {
    components: { SocialIcon }
};
</script>
