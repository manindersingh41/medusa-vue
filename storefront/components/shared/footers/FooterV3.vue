<template>
    <footer class="ps-footer ps-footer--3">
        <div class="container">
            <footer-top />
            <div class="ps-footer__middle">
                <footer-category />
                <div class="row ps-footer__box">
                    <div class="col-12 col-sm-4">
                        <footer-contact/>
                    </div>
                    <div class="col-12 col-sm-4">
                        <footer-address/>
                    </div>
                    <div class="col-12 col-sm-4">
                        <footer-newsletter />
                    </div>
                </div>
                <footer-listpage />
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
import FooterCategory from '~/components/shared/footers/modules/FooterCategory';
import FooterListpage from '~/components/shared/footers/modules/FooterListpage';
import FooterNewsletter from '~/components/shared/footers/modules/FooterNewsletter';

export default {
    components: { FooterBottom, FooterTop, FooterContact, FooterAddress, FooterCategory, FooterListpage, FooterNewsletter }
}
</script>
