<template>
    <footer class="ps-footer ps-footer--12">
        <div class="container">
            <footer-top />
            <div class="ps-footer__middle">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4">
                                <footer-address/>
                            </div>
                            <div class="col-12 col-sm-6 col-md-8">
                                <footer-contact/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="row">
                            <div class="col-6 col-sm-4">
                                <div class="ps-footer--block">
                                    <h5 class="ps-block__title">{{ information.title }}</h5>
                                    <render-list :list="information.items" :className="'ps-block__list'" />
                                </div>
                            </div>
                            <div class="col-6 col-sm-4">
                                <div class="ps-footer--block">
                                    <h5 class="ps-block__title">{{ account.title }}</h5>
                                    <render-list :list="account.items" :className="'ps-block__list'" />
                                </div>
                            </div>
                            <div class="col-6 col-sm-4">
                                <div class="ps-footer--block">
                                    <h5 class="ps-block__title">{{ store.title }}</h5>
                                    <render-list :list="store.items" :className="'ps-block__list'" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer-bottom/>
        </div>
    </footer>
</template>

<script>
import FooterBottom from '~/components/shared/footers/modules/FooterBottom';
import FooterTop from '~/components/shared/footers/modules/FooterTop';
import FooterContact from '~/components/shared/footers/modules/FooterContact';
import FooterAddress from '~/components/shared/footers/modules/FooterAddress';
import { information, account, store } from '~/static/data/footer.json';
import RenderList from '~/components/elements/commons/RenderList';

export default {
    components: { FooterBottom, FooterTop, FooterContact, FooterAddress, RenderList },
    data() {
        return {
            information,
            account,
            store
        }
    }
}
</script>
