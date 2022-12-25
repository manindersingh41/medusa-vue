<template>
    <section class="ps-about--video">
        <div class="ps-banner">
            <div class="container">
                <div class="ps-banner__block">
                    <div class="ps-banner__content">
                        <h2 class="ps-banner__title">
                            Your one and only<br />online pharmacy!
                        </h2>
                        <div class="ps-banner__desc">
                            Only this week 30% to 50% cheaper!
                        </div>
                        <div class="ps-banner__btn-group">
                            <div class="ps-banner__btn">
                                <img src="/img/icon/virus.svg" alt />Up to 5
                                users simultaneously
                            </div>
                            <div class="ps-banner__btn">
                                <img src="/img/icon/ribbon.svg" alt />Has HEALTH
                                certificate
                            </div>
                        </div>
                        <a class="ps-banner__shop bg-warning" href="#">About</a>
                    </div>
                    <div class="ps-banner__thumnail">
                        <img
                            class="ps-banner__image"
                            src="/img/about/goby-tD3GaS9ysF4-unsplash-1.jpg"
                            alt
                        />
                        <div id="ps-video-gallery">
                            <div class="video">
                                <a href="#" @click.prevent="dialog = true">
                                    <div class="ps-banner__video">
                                        <i class="fa fa-play"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog v-model="dialog" max-width="1000" content-class="ps-dialog ps-dialog--video">
            <v-card class="ps-dialog__body">
                <button class="ps-dialog__close" @click="dialog = false">
                    <i class="icon-cross"></i>
                </button>
                <div class="ps-dialog__content">
                    <video
                        class="ps-dialog__video"
                        controls
                        preload="none"
                        poster="/img/about/goby-tD3GaS9ysF4-unsplash-1.jpg"
                    >
                        <source src="/img/video.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </v-card>
        </v-dialog>
    </section>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    }
}
</script>

