<template>
    <section class="ps-section--instagram"> 
        <div class="container">
            <h3 class="ps-section__title">Follow <strong>@MYMEDI </strong>on instagram</h3>
            <div class="ps-section__content">
                <div class="row m-0"> 
                    <div class="col-6 col-sm-4 col-md-2" v-for="(item, index) in instagram" :key="index"> 
                        <a class="ps-image--transition" :href="item.link" target="_blank"> 
                            <img :src="item.image" alt>
                            <span class="ps-image__overlay"><i class="fa fa-instagram"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { instagram } from '~/static/data/common.json';
export default {
    data() {
        return {
            instagram: instagram
        }
    }
}
</script>
