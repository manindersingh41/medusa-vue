<template>
    <div class="ps-header3-search-mobile">
        <div class="container">
            <div class="ps-search__content">
                <div class="ps-menu__sticky"><a class="menu-slide" href="#"><i class="fa fa-bars"></i>Products</a></div>
                <div class="ps-header__menu">
                    <render-list :list="mainMenu" className="menu" />
                </div>
                <form-search />
            </div>
        </div>
    </div>
</template>

<script>
import RenderList from '~/components/elements/commons/RenderList';
import { menuHome3 } from '~/static/data/menu.json';
import FormSearch from '~/components/shared/headers/modules/FormSearch';
export default {
    components: { RenderList, FormSearch },
    data() {
        return {
            mainMenu: menuHome3
        };
    },
}
</script>
