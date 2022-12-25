<template>
    <ul class="comment__list">
        <li class="comment__item" v-for="(item, index) in comments" :key="index">
            <div class="item__avatar"><img :src="item.avatar" alt="alt" /></div>
            <div class="item__content">
                <div class="item__name">{{ item.name}}</div>
                <div class="item__date">- {{ item.date }}</div>
                <template v-if="item.product">
                    <div class="item__check"> <i class="icon-checkmark-circle"></i>Verified Purchase</div>
                    <div class="item__rate">
                        <rating-component
                            :value="item.rate"
                        />
                    </div>
                </template>
                <p class="item__des">{{ item.des }}</p>
                <a v-if="!item.product">REPLY</a>
                <ul class="comment__list comment__sub" v-if="item.recomment">
                    <li v-for="(comment, idComment) in item.recomment" :key="idComment" class="comment__item">
                        <div class="item__avatar"><img :src="comment.avatar" alt="alt" /></div>
                        <div class="item__content">
                            <div class="item__name">{{ comment.name}}</div>
                            <div class="item__date">- {{ comment.date }}</div>
                            <p class="item__des">{{ comment.des }}</p>
                            <a>REPLY</a>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
import RatingComponent from '~/components/elements/commons/RatingComponent';

export default {
    components: { RatingComponent },
    props: {
        comments: {
            type: Array
        }
    }
}
</script>
