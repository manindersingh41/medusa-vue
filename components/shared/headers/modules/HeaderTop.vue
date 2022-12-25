<template>
    <div class="container">
        <div class="ps-header__text"> <strong>100% Secure delivery </strong>without contacting the courier </div>
        <div class="ps-top__right"> 
            <language-currency />
            <div class="ps-top__social">
                <social-icon />
            </div>
            <render-list :list="menu" className="menu-top" />
            <div class="ps-header__text">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>
        </div>
    </div>
</template>

<script>
import SocialIcon from '~/components/shared/SocialIcon';
import LanguageCurrency from '~/components/shared/headers/modules/LanguageCurrency';
import { menuTopHome2 } from '~/static/data/menu.json';
import RenderList from '~/components/elements/commons/RenderList';
export default {
    components: { SocialIcon, LanguageCurrency, RenderList },
    data() {
        return {
            menu: menuTopHome2
        }
    }
}
</script>
