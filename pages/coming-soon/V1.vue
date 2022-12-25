<template>
    <div class="ps-page ps-layout">
        <div class="ps-coming ps-coming--v1" style="background-image: url('/img/bg-comming-soon.jpg');">
            <div class="container">
                <div class="ps-logo"> <nuxt-link to="/"><img src="/img/logo.png" alt=""></nuxt-link></div>
                <div class="ps-coming__content">
                    <h1 class="ps-coming__title">Coming Soon</h1>
                    <p class="ps-coming__text">Opening Soon!</p>
                    <count-down />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CountDown from '~/components/elements/commons/CountDown';
export default {
    layout: 'empty',
    components: {
        CountDown
    }
}
</script>
