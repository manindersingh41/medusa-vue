(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{629:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return f}));var n=r(7),o=(r(26),r(11));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="posts",e&&(r+="?".concat(Object(o.c)(e))),t.next=4,o.b.get("".concat(o.a,"/").concat(r)).then((function(t){return t.data})).catch((function(t){return console.log(JSON.stringify(t)),null}));case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.get("".concat(o.a,"/posts/").concat(e)).then((function(t){return t.data})).catch((function(t){return{error:JSON.stringify(t)}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="post-categories",e&&(r+="?".concat(Object(o.c)(e))),t.next=4,o.b.get("".concat(o.a,"/").concat(r)).then((function(t){return t.data})).catch((function(t){return console.log(JSON.stringify(t)),null}));case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},630:function(t,e,r){"use strict";var n={name:"form-subscribe",data:function(){return{email:null}},methods:{handleSubscribe:function(){this.$emit("handleSubscribe",this.email)}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("form",[e("div",{staticClass:"ps-form--subscribe"},[e("div",{staticClass:"ps-form__control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control ps-input",attrs:{type:"email",placeholder:"Enter your email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("button",{staticClass:"ps-btn ps-btn--warning",on:{click:function(e){return e.preventDefault(),t.handleSubscribe()}}},[t._v("Subscribe")])])])])}),[],!1,null,null,null);e.a=component.exports},631:function(t,e,r){"use strict";r(19);var n=r(11),o=r(0),c=r.n(o),l={props:{item:{type:Object,default:function(){}}},data:function(){return{baseDomain:n.a}},computed:{createdAt:function(){return c()(this.item.created_at).format("MMM DD, YYYY")}}},d=r(4),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"ps-blog--latset"},[e("div",{staticClass:"ps-blog__thumbnail"},[t.item.thumbnail?e("nuxt-link",{attrs:{to:"/blog/post-detail-1/".concat(t.item.id)}},[e("img",{attrs:{src:t.baseDomain+t.item.thumbnail.url,alt:"alt"}})]):t._e(),t._v(" "),e("div",{staticClass:"ps-blog__badge"},t._l(t.item.post_categories,(function(r){return e("span",{key:r.id,staticClass:"ps-badge__item"},[t._v(t._s(r.name))])})),0)],1),t._v(" "),e("div",{staticClass:"ps-blog__content"},[e("div",{staticClass:"ps-blog__meta"},[e("span",{staticClass:"ps-blog__date"},[t._v(t._s(t.createdAt))]),e("a",{staticClass:"ps-blog__author",attrs:{href:"#"}},[t._v("Alfredo Austin")])]),t._v(" "),e("nuxt-link",{staticClass:"ps-blog__title",attrs:{to:"/blog/post-detail-1/".concat(t.item.id)}},[t._v(t._s(t.item.name))]),t._v(" "),t.item.short_description?e("p",{staticClass:"ps-blog__desc"},[t._v(t._s(t.item.short_description))]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.a=component.exports},638:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(7),o=(r(26),r(11));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="collections?slug=".concat(e),t.next=3,o.b.get("".concat(o.a,"/").concat(r)).then((function(t){return t.data&&t.data.length>0?t.data[0].products:[]})).catch((function(t){return console.log(JSON.stringify(t)),null}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},639:function(t,e,r){"use strict";var n=r(630),o={props:{title:{type:String,default:"Join our newsletter and get <br>$20 discount for your first order"},desc:{type:String,default:""}},components:{FormSubscribe:n.a},methods:{handleSubscribe:function(t){console.log("email",t);this.$store.commit("app/setMessageNotify",{message:"Thank you for you subscribe.",icon:"icon-shield-check"}),this.$store.commit("app/setDialogNotify",!0)}}},c=r(4),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--newsletter"},[e("div",{staticClass:"container",staticStyle:{"background-image":"url('/img/newsletter-bg.jpg')"}},[e("h3",{staticClass:"ps-section__title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.desc?e("p",{staticClass:"ps-section__text"},[t._v(t._s(t.desc))]):t._e(),t._v(" "),e("div",{staticClass:"ps-section__content"},[e("form-subscribe",{on:{handleSubscribe:t.handleSubscribe}})],1)])])}),[],!1,null,null,null);e.a=component.exports},643:function(t,e,r){"use strict";var n=r(624),o=(r(10),r(9),r(8),r(13),r(14),r(1)),c=r(631),l=r(12);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={props:{title:{type:String,default:"From the blog"},dataList:{type:Array,default:function(){return[]}}},components:{PostLatset:c.a},data:function(){return{swiperOption:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!1,autoplay:{delay:15e3,disableOnInteraction:!1},breakpoints:{480:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:3}}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({loading:function(t){return t.app.loading}}))},f=m,h=r(4),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--blog"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"ps-section__title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"ps-section__carousel"},[e("div",{staticClass:"ps-swiper"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:latestBlogSwiper",value:t.swiperOption,expression:"swiperOption",arg:"latestBlogSwiper"}],staticClass:"swiper"},[t.loading?e("div",{staticClass:"swiper-wrapper"},t._l(3,(function(t){return e("div",{key:t,staticClass:"swiper-slide ps-preloader"},[e(n.a,{attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"swiper-wrapper"},t._l(t.dataList,(function(t,r){return e("div",{key:r,staticClass:"swiper-slide"},[e("post-latset",{attrs:{item:t}})],1)})),0)])])])])])}),[],!1,null,null,null);e.a=component.exports},669:function(t,e,r){"use strict";var n=r(624),o=(r(10),r(9),r(8),r(13),r(14),r(1)),c=r(57),l=r(12);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={props:{title:{type:String,default:""},dataList:{type:Array,default:function(){return[]}}},components:{ProductStandard:c.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({loading:function(t){return t.app.loading}}))},f=m,h=r(4),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--featured"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"ps-section__title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"ps-section__content"},[t.loading?e("div",{staticClass:"row"},t._l(5,(function(t){return e("div",{key:t,staticClass:"col-6 col-sm-4 col-lg-2dot4"},[e(n.a,{attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"row m-0"},t._l(t.dataList,(function(t,r){return e("div",{key:r,staticClass:"col-6 col-sm-4 col-lg-2dot4 p-0"},[e("product-standard",{attrs:{product:t}})],1)})),0),t._v(" "),t._m(0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"ps-shop__more"},[t("a",{attrs:{href:"#"}},[this._v("Show all")])])}],!1,null,null,null);e.a=component.exports},673:function(t){t.exports=JSON.parse('{"a":[{"name":"Wound Care","list":[{"text":"Accessories","url":"/shop"},{"text":"Bandages","url":"/shop"},{"text":"Gypsum foundations","url":"/shop"},{"text":"Patches and tapes","url":"/shop"},{"text":"Surgical sutures","url":"/shop"},{"text":"Swabs","url":"/shop"},{"text":"Wound healing","url":"/shop"}]},{"name":"Higiene","list":[{"text":"Disinfectants","url":"/shop"},{"text":"Disposable products","url":"/shop"},{"text":"Face Masks - protective","url":"/shop"},{"text":"Gloves","url":"/shop"},{"text":"Protective clothing","url":"/shop"},{"text":"Sterilization","url":"/shop"},{"text":"Surgical foils","url":"/shop"}]},{"name":"Laboratory","list":[{"text":"Accessories","url":"/shop"},{"text":"Devices","url":"/shop"},{"text":"Diagnostic tests","url":"/shop"},{"text":"Dyes","url":"/shop"},{"text":"Pipettes","url":"/shop"},{"text":"Tubes","url":"/shop"},{"text":"Test-tubes","url":"/shop"}]},{"name":"Tools","list":[{"text":"Care products","url":"/shop"},{"text":"Claws and forceps","url":"/shop"},{"text":"Electrosurgery","url":"/shop"},{"text":"Needles","url":"/shop"},{"text":"Plaster tools","url":"/shop"},{"text":"Scalpels, blades","url":"/shop"},{"text":"Scissors","url":"/shop"}]},{"name":"Diagnosis","list":[{"text":"Accessories","url":"/shop"},{"text":"Biopsy tools","url":"/shop"},{"text":"Endoscopes","url":"/shop"},{"text":"Monitoring","url":"/shop"},{"text":"Otoscopes","url":"/shop"},{"text":"Oxygen concentrators","url":"/shop"},{"text":"Thermometers","url":"/shop"}]},{"name":"Equipment","list":[{"text":"Blades","url":"/shop"},{"text":"Education","url":"/shop"},{"text":"Germicidal lamps","url":"/shop"},{"text":"Infusion stands","url":"/shop"},{"text":"Lighting","url":"/shop"},{"text":"Machines","url":"/shop"},{"text":"Tables and assistants","url":"/shop"}]}],"c":[{"text":"Bandages","image":"/img/branch/plastercross.svg"},{"text":"Capsules","image":"/img/branch/capsule.svg"},{"text":"Dental","image":"/img/branch/dental.svg"},{"text":"Thermometer","image":"/img/branch/thermometer.svg"},{"text":"Heart Health","image":"/img/branch/heart-healt.svg"},{"text":"Micrscope","image":"/img/branch/microscope.svg"},{"text":"Tubes","image":"/img/branch/tube.svg"}],"b":[{"name":"Face masks","image":"/img/promotion/facemask-cat.png"},{"name":"Uniforms","image":"/img/promotion/uniforms-cat.png"},{"name":"Protective covers","image":"/img/promotion/protectcover-cat.png"},{"name":"Dental","image":"/img/promotion/dental-cat.png"},{"name":"Blood pressure","image":"/img/promotion/pressure-cat.png"},{"name":"Sugar level","image":"/img/promotion/sugarlevel-cat.png"}]}')},680:function(t,e,r){"use strict";var n=r(624),o=(r(10),r(9),r(8),r(13),r(14),r(1)),c=r(57),l=r(199),d=r(12);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={props:{title:{type:String,default:""},dataList:{type:Array,default:function(){return[]}}},components:{ProductStandard:c.a,CountDown:l.a},data:function(){return{swiperOption:{slidesPerView:2,slidesPerGroup:2,spaceBetween:0,loop:!1,autoplay:{delay:1e4,disableOnInteraction:!1},navigation:{prevEl:".prev-best-deals",nextEl:".next-best-deals"},pagination:{el:".pagination-best-deals",clickable:!0},breakpoints:{480:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:5}}},products:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)({loading:function(t){return t.app.loading}})),mounted:function(){this.setData()},methods:{setData:function(){var t=this;this.dataList&&this.dataList.length&&(this.products=[],this.dataList.forEach((function(element){var e=Object.assign({},element),r=Math.floor(50*Math.random())+10;e.percent="-"+r+"%",e.footer=!0,e.available=Math.floor(10*Math.random())+1,t.products.push(e)})))}},watch:{dataList:function(){this.setData()}}},h=f,v=r(4),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--deals"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-section__header"},[e("h3",{staticClass:"ps-section__title"},[t._v(t._s(t.title))]),t._v(" "),e("count-down")],1),t._v(" "),e("div",{staticClass:"ps-section__carousel"},[e("div",{staticClass:"ps-swiper"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:bestDealsProductSwiper",value:t.swiperOption,expression:"swiperOption",arg:"bestDealsProductSwiper"}],staticClass:"swiper"},[t.loading?e("div",{staticClass:"swiper-wrapper"},t._l(5,(function(t){return e("div",{key:t,staticClass:"swiper-slide ps-preloader"},[e(n.a,{attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(t,r){return e("div",{key:r,staticClass:"swiper-slide"},[e("product-standard",{attrs:{product:t}})],1)})),0)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"swiper-pagination pagination-best-deals"})])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"ps-swiper__nav"},[t("div",{staticClass:"swiper-button-prev prev-best-deals"}),this._v(" "),t("div",{staticClass:"swiper-button-next next-best-deals"})])}],!1,null,null,null);e.a=component.exports},706:function(t,e,r){"use strict";var n=r(673),o={data:function(){return{popularCategories:n.c}}},c=r(4),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--category-horizontal"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"ps-section__title"},[t._v("Popular categories")]),t._v(" "),e("div",{staticClass:"ps-category__content"},t._l(t.popularCategories,(function(r,n){return e("div",{key:n,staticClass:"ps-category__item"},[e("nuxt-link",{staticClass:"ps-category__link",attrs:{to:"/shop"}},[e("img",{attrs:{src:r.image,alt:""}})]),t._v(" "),e("div",{staticClass:"ps-category__name"},[e("nuxt-link",{attrs:{to:"/shop"}},[t._v(t._s(r.text))])],1)],1)})),0),t._v(" "),e("div",{staticClass:"ps-category__all"},[e("nuxt-link",{attrs:{to:"/shop"}},[t._v("Show all")])],1)])])}),[],!1,null,null,null);e.a=component.exports},868:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(26),r(182)),c=r(195),l=r(706),d=r(680),m=r(210),f=r(184),h=r(669),v=r(643),_=r(629),w=r(639),y=r(638),O={layout:"default",components:{Breadcrumb:o.a,PromoItem:c.a,PopularCategoryHorizontal:l.a,BestDealsProductCarousel:d.a,Branch:m.a,FeaturedProduct:h.a,BlogLatest:v.a,Newsletter:w.a},data:function(){return{breadcrumb:[{url:"/",text:"Home"},{url:"/shop/promo-category",extraClass:"active",text:"Promo Category"}],promotion:{banner:"/img/category/banner-promo.jpg",title:"Multi-Surface <br/>Free&Clear",btnName:"Add to cart",price:"$15.99",del:"$29.99",sale:"-25%",priceHorizontal:!0},branchs:f.b,latestPost:[],featuredProduct:[],bestDealProduct:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("app/setLoading",!0),e.next=3,Object(y.a)("featured-products");case 3:return t.featuredProduct=e.sent,e.next=6,Object(y.a)("best-deal-of-week");case 6:return t.bestDealProduct=e.sent,e.next=9,Object(_.c)();case 9:t.latestPost=e.sent,t.$store.commit("app/setLoading",!1);case 11:case"end":return e.stop()}}),e)})))()}},x=r(4),component=Object(x.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-categogy--promo"},[e("div",{staticClass:"container"},[e("breadcrumb",{attrs:{dataList:t.breadcrumb}}),t._v(" "),e("div",{staticClass:"ps-promo"},[e("promo-item",{attrs:{item:t.promotion}})],1),t._v(" "),e("popular-category-horizontal")],1),t._v(" "),e("best-deals-product-carousel",{attrs:{title:"Best Deals of the week!",dataList:t.bestDealProduct}}),t._v(" "),e("div",{staticClass:"container"},[e("branch",{attrs:{branchs:t.branchs}})],1),t._v(" "),e("featured-product",{attrs:{title:"Featured products",dataList:t.featuredProduct}}),t._v(" "),e("blog-latest",{attrs:{dataList:t.latestPost}}),t._v(" "),e("newsletter")],1)}),[],!1,null,null,null);e.default=component.exports}}]);