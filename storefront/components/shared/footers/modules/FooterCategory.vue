<template>
    <div class="row ps-footer__category m-0">
        <div class="col-6 col-sm-4 col-md-2 p-0">
            <div class="ps-footer--block">
                <h5 class="ps-block__title">{{ woundCare.title }}</h5>
                <render-list :list="woundCare.items" :className="'ps-block__list'" />
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-2 p-0">
            <div class="ps-footer--block">
                <h5 class="ps-block__title">{{ higiene.title }}</h5>
                <render-list :list="higiene.items" :className="'ps-block__list'" />
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-2 p-0">
            <div class="ps-footer--block">
                <h5 class="ps-block__title">{{ laboratory.title }}</h5>
                <render-list :list="laboratory.items" :className="'ps-block__list'" />
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-2 p-0">
            <div class="ps-footer--block">
                <h5 class="ps-block__title">{{ tools.title }}</h5>
                <render-list :list="tools.items" :className="'ps-block__list'" />
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-2 p-0">
            <div class="ps-footer--block">
                <h5 class="ps-block__title">{{ diagnosis.title }}</h5>
                <render-list :list="diagnosis.items" :className="'ps-block__list'" />
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-2 p-0">
            <div class="ps-footer--block">
                <h5 class="ps-block__title">{{ equipment.title }}</h5>
                <render-list :list="equipment.items" :className="'ps-block__list'" />
            </div>
        </div>
    </div>
</template>

<script>
import RenderList from '~/components/elements/commons/RenderList';
import { woundCare, higiene, laboratory, tools, diagnosis, equipment } from '~/static/data/footer.json';
export default {
    components: { RenderList },
    data() {
        return {
            woundCare,
            higiene,
            laboratory,
            tools,
            diagnosis,
            equipment
        }
    }
}
</script>
