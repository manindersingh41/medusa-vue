<template>
    <div class="ps-menu--slidebar">
        <div class="ps-menu__content"> 
            <module-main-menu :list="mainMenu" className="menu--mobile" />
        </div>
        <div class="ps-menu__footer"> 
            <div class="ps-menu__item">
                <module-language-currency />
            </div>
            <div class="ps-menu__item">
                <div class="ps-menu__contact">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>
            </div>
        </div>
    </div>
</template>

<script>
import { menuMobile } from '~/static/data/menu.json'
import SlideUpDown from 'vue-slide-up-down'
import ModuleLanguageCurrency from '~/components/shared/mobile/modules/ModuleLanguageCurrency';
import ModuleMainMenu from '~/components/shared/mobile/modules/ModuleMainMenu';

export default {
    components: { SlideUpDown, ModuleLanguageCurrency, ModuleMainMenu },
    data() {
        return {
            mainMenu: menuMobile
        };
    }
};
</script>
