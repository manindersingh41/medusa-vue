exports.ids = [25];
exports.modules = {

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/FormSubscribe.vue?vue&type=template&id=7952c332&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('form', [_vm._ssrNode("<div class=\"ps-form--subscribe\"><div class=\"ps-form__control\"><input type=\"email\" placeholder=\"Enter your email address\"" + _vm._ssrAttr("value", _vm.email) + " class=\"form-control ps-input\"> <button class=\"ps-btn ps-btn--warning\">Subscribe</button></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/FormSubscribe.vue?vue&type=template&id=7952c332&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/FormSubscribe.vue?vue&type=script&lang=js&
/* harmony default export */ var FormSubscribevue_type_script_lang_js_ = ({
  name: 'form-subscribe',
  data() {
    return {
      email: null
    };
  },
  methods: {
    handleSubscribe() {
      this.$emit('handleSubscribe', this.email);
    }
  }
});
// CONCATENATED MODULE: ./components/elements/commons/FormSubscribe.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_FormSubscribevue_type_script_lang_js_ = (FormSubscribevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/FormSubscribe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_FormSubscribevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cfe82e92"
  
)

/* harmony default export */ var FormSubscribe = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/Banner.vue?vue&type=template&id=302aed02&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.banner ? _c('div', {
    staticClass: "ps-banner",
    style: {
      backgroundColor: _vm.banner.bgColor
    }
  }, [_vm._ssrNode((_vm.banner.imgbg ? "<img" + _vm._ssrAttr("src", _vm.banner.img) + " alt=\"alt\"" + _vm._ssrClass(null, ['ps-banner__imagebg', _vm.banner.imgbg]) + ">" : "<!---->") + " <div" + _vm._ssrClass(null, [_vm.banner.noFull ? 'container-no-round' : 'container container-initial']) + "><div" + _vm._ssrClass(null, ['ps-banner__block', _vm.reverse ? 'row-reverse' : '']) + "><div class=\"ps-banner__content\">" + (_vm.banner.baged ? "<p class=\"ps-banner__baged\"><strong>" + _vm._ssrEscape(_vm._s(_vm.banner.baged)) + "</strong></p>" : "<!---->") + " <h2" + _vm._ssrClass(null, ['ps-banner__title', _vm.banner.textColor && _vm.banner.textColor]) + ">" + _vm._s(_vm.banner.title) + "</h2> <div" + _vm._ssrClass(null, ['ps-banner__desc', _vm.banner.textColor && _vm.banner.textColor]) + ">" + _vm._s(_vm.banner.desc) + "</div> " + (_vm.banner.price ? "<div class=\"ps-banner__price\"><span>" + _vm._ssrEscape(_vm._s(_vm.banner.price.ins)) + "</span> <del>" + _vm._ssrEscape(_vm._s(_vm.banner.price.del)) + "</del></div>" : "<!---->") + " " + (_vm.banner.button ? "<div class=\"ps-banner__btn-group\">" + _vm._ssrList(_vm.banner.button, function (item, index) {
    return "<div" + _vm._ssrClass(null, ['ps-banner__btn', _vm.banner.buttonColor && _vm.banner.buttonColor]) + "><img" + _vm._ssrAttr("src", item.icon) + " alt=\"alt\"" + _vm._ssrStyle(null, _vm.banner.filter && _vm.banner.filter, null) + ">" + _vm._ssrEscape(_vm._s(item.text) + "\n                    ") + "</div>";
  }) + "</div>" : "<!---->") + " " + (_vm.banner.shop || _vm.banner.cart ? "<a href=\"#\"" + _vm._ssrClass(null, ['ps-banner__shop', _vm.banner.shop, _vm.banner.cart]) + ">" + _vm._ssrEscape(_vm._s(_vm.banner.textShop ? _vm.banner.textShop : _vm.banner.shop ? 'Shop now' : 'Add to cart')) + "</a>" : "<!---->") + " " + (_vm.banner.percent && !_vm.banner.percent.thumbnail ? "<div" + _vm._ssrClass(null, ['ps-banner__persen', _vm.banner.percent.extraClass]) + ">" + _vm._s(_vm.banner.percent.text) + "</div>" : "<!---->") + "</div> <div" + _vm._ssrClass(null, ['ps-banner__thumnail', {
    'ps-banner__fluid': !_vm.banner.round
  }]) + ">" + (_vm.banner.round ? "<img" + _vm._ssrAttr("src", _vm.banner.round) + " alt=\"alt\" class=\"ps-banner__round\">" : "<!---->") + " " + (!_vm.banner.imgbg && _vm.banner.img ? "<img" + _vm._ssrAttr("src", _vm.banner.img) + " alt=\"alt\" class=\"ps-banner__image\">" : "<!---->") + " " + (_vm.banner.percent && _vm.banner.percent.thumbnail ? "<div" + _vm._ssrClass(null, ['ps-banner__persen', _vm.banner.percent.extraClass]) + ">" + _vm._ssrEscape("\n                " + _vm._s(_vm.banner.percent.text) + "\n                ") + "</div>" : "<!---->") + "</div></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/Banner.vue?vue&type=template&id=302aed02&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/Banner.vue?vue&type=script&lang=js&
/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  props: {
    banner: {
      type: Object,
      default: () => {}
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/elements/commons/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/Banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ae49e4aa"
  
)

/* harmony default export */ var Banner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module) {

module.exports = JSON.parse("{\"j\":[{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"},{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\"}],\"k\":[{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$29.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/slide2.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"noFull\":true},{\"title\":\"Fully equipped <br/> of ophthalmic rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round2.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Antibacterial <br/> Medical Mask\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/slide8.jpg\",\"bgColor\":\"#306A53\",\"buttonColor\":\"text-warning\",\"textColor\":\"text-white\",\"noFull\":true,\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"}],\"l\":[{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$29.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/bg-slide3-home3.jpg\",\"round\":\"\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\"}],\"m\":[{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\",\"buttonColor\":\"font-bold\"},{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"}],\"o\":[{\"title\":\"Fully equipped<br/> of ophthalmic <br/>rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow ps-center\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\",\"buttonColor\":\"font-bold\"},{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"}],\"q\":[{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"only <br/> $25\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home6-bg.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"imgbg\":\"not-fuild\",\"filter\":\"filter: invert(40%) sepia(50%) saturate(366%) hue-rotate(182deg) brightness(80%) contrast(89%);\"},{\"title\":\"Dental office <br/> equipement <br/> on sale\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/home6-bg2.jpg\",\"bgColor\":\"#fcfcfe\",\"imgbg\":\"fuild\"},{\"title\":\"Best prices <br/> for all the lenses\",\"desc\":\"All correction values\",\"shop\":\"bg-warning\",\"textSale\":\"Up to -30%\",\"img\":\"/img/promotion/home6-bg3.jpg\",\"bgColor\":\"rgb(243 245 244)\",\"imgbg\":\"fuild\"}],\"s\":[{\"title\":\"SonicX900 <br>Electrical Brush\",\"desc\":\"Now with special price -30%\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"baged\":\"New\",\"percent\":{\"text\":\"New\",\"extraClass\":\"bg-success\",\"thumbnail\":true}},{\"title\":\"New stylish colors <br>now available!\",\"desc\":\"Choose a color that really <br>matches your personality\",\"shop\":\"bg-pink\",\"baged\":\"New\"}],\"n\":[{\"title\":\"PowerSteel <br/>X-tra 200 Brush\",\"shop\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home4-banner-4.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"textShop\":\"Add to cart\"},{\"title\":\"Fully equipped <br/>of ophthalmic rooms\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow ps-right\"},\"img\":\"/img/promotion/bg.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Antibacterial <br/>Medical Mask\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/anti-virus-bg.jpg\",\"bgColor\":\"#FFCC00\",\"textColor\":\"text-white\",\"buttonColor\":\"text-warning\",\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"},{\"title\":\"Super Sonic Brush <br/>X200 Higenic\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/tooth-brush-icon.png\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/dashboard-icon.png\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/bg-banner-detal.jpg\",\"bgColor\":\"#FFCC00\"}],\"p\":[{\"title\":\"Take care of <br/>yourself and <br/>your loved ones\",\"shop\":\"bg-yellow\",\"textShop\":\"Face mask\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/bg-banner15.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Best blood <br/>pressure <br/>monitors\",\"shop\":\"bg-yellow\",\"textShop\":\"Blood pressure\",\"img\":\"/img/promotion/blood-pressure.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Home and <br/>dental office <br/>equipment\",\"shop\":\"bg-yellow\",\"textShop\":\"Dental\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"img\":\"/img/promotion/bg-banner-dental.jpg\",\"bgColor\":\"#FFCC00\",\"textColor\":\"text-white\"}],\"r\":[{\"title\":\"The best quality <br/>masks at the<br/>best price\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Up to 5 users simultaneously\"},{\"icon\":\"/img/icon/ribbon.svg\",\"text\":\"Has HEALTH certificate\"}],\"img\":\"/img/promotion/face-masks.jpg\",\"bgColor\":\"#fcfcfe\"},{\"title\":\"PowerSteel <br/>X-tra 200 Brush\",\"shop\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home4-banner-4.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"textShop\":\"Add to cart\"},{\"title\":\"Your one and only <br>online pharmacy!\",\"desc\":\"Just a few seconds to measure<br>your body temperature.\",\"shop\":\"bg-yellow\",\"textShop\":\"About\",\"button\":[{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Up to 5 users simultaneously\"},{\"icon\":\"/img/icon/ribbon.svg\",\"text\":\"Has HEALTH certificate\"}],\"round\":\"/img/round5.png\",\"img\":\"/img/girl-face-mask.png\"}],\"t\":[{\"title\":\"Antibacterial <br/> Medical Mask\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/slide8.jpg\",\"round\":\"\",\"bgColor\":\"#306A53\",\"buttonColor\":\"text-warning\",\"textColor\":\"text-white\",\"noFull\":true,\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"},{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/slide2.jpg\",\"round\":\"\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"noFull\":true},{\"title\":\"Fully equipped <br/> of ophthalmic rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round2.png\",\"bgColor\":\"#F0F2F5\"}],\"a\":[{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/girl-face-mask.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"bannerRound\":true,\"filter\":\"filter: invert(9%) sepia(19%) saturate(9%) hue-rotate(352deg) brightness(101%) contrast(91%);\"},{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/home6-bg.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"bannerRound\":true,\"filter\":\"filter: invert(9%) sepia(19%) saturate(9%) hue-rotate(352deg) brightness(101%) contrast(91%);\"}],\"b\":[{\"title\":\"Premium CBD <br/>Oil 1000mg\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning\"},\"img\":\"/img/promotion/slide13.jpg\",\"bgColor\":\"#DAECFA\",\"textColor\":\"text-dark\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide14.jpg\",\"bgColor\":\"#E8F5F4\",\"textColor\":\"text-dark\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/slide16.jpg\",\"bgColor\":\"#F2F2F2\",\"textColor\":\"text-white\",\"imgbg\":\"d-block\",\"filter\":\"filter: brightness(0) invert(1);\"}],\"d\":[{\"title\":\"Take care <br/>of yourself and your skin \",\"shop\":\"bg-white\",\"textShop\":\"Sunscreens\",\"button\":[{\"icon\":\"/img/icon/icon11.png\",\"text\":\"Best quality\"},{\"icon\":\"/img/icon/icon12.png\",\"text\":\"Day & Night\"}],\"img\":\"/img/promotion/bg-banner16.jpg\",\"bgColor\":\"#FD8D27\"},{\"title\":\"Stay focused <br/>with best <br/>supplements\",\"shop\":\"bg-warning\",\"textShop\":\"Supplements\",\"img\":\"/img/promotion/bg-banner17.jpg\",\"bgColor\":\"#182947\"}],\"c\":[{\"banner\":\"/img/promotion/banner-home13-1.jpg\",\"title\":\"Boxed water <br/>is better!\",\"btnName\":\"Shop now\",\"sale\":\"-30%\",\"classTitle\":\"text-dark\",\"saleColor\":\"text-dark\",\"btnClass\":\"btn-green\"},{\"banner\":\"/img/promotion/banner-home13-2.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon9.png\"},{\"banner\":\"/img/promotion/banner-home13-3.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"Buy now\",\"price\":\"$15.99\",\"del\":\"$29.99\",\"priceColor\":\"text-white\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\"}],\"f\":[{\"banner\":\"/img/promotion/bg-promo1.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon10.png\"},{\"banner\":\"/img/promotion/bg-promo2.jpg\",\"title\":\"Eczema <br/>Treatment CBD <br/>Ointement\",\"btnName\":\"Shop now\",\"sale\":\"-30%\",\"classTitle\":\"text-white\",\"saleColor\":\"text-white\",\"btnClass\":\"btn-green\"},{\"banner\":\"/img/promotion/bg-promo3.jpg\",\"title\":\"SFP 50+ <br/>Suncream\",\"btnName\":\"Buy now\",\"price\":\"$6.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"delColor\":\"text-white\"}],\"g\":[{\"banner\":\"/img/promotion/bg-banner20.jpg\",\"title\":\"FaceWash <br/>up to -20%\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon19.png\"},{\"banner\":\"/img/promotion/bg-banner21.jpg\",\"title\":\"PREHCU <br/>Workout\",\"btnName\":\"Buy now\",\"price\":\"$6.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"delColor\":\"text-white\"},{\"banner\":\"/img/promotion/bg-banner22.jpg\",\"title\":\"Neauthy <br/>creams\",\"btnName\":\"Buy now\",\"price\":\"$12.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"}],\"e\":[{\"banner\":\"/img/promotion/bg-banner23.jpg\",\"title\":\"PowerUp <br/>Lemon\",\"btnName\":\"Buy now\",\"price\":\"$38.24\",\"del\":\"$48.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner24.jpg\",\"title\":\"TwoEXP+ <br/>Areozol\",\"btnName\":\"Buy now\",\"price\":\"$8.24\",\"del\":\"$12.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner25.jpg\",\"title\":\"Cranberry <br/>Brand\",\"btnName\":\"Buy now\",\"price\":\"$13.24\",\"del\":\"$18.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner26.jpg\",\"title\":\"Recoup <br/>Recovery\",\"btnName\":\"Buy now\",\"price\":\"$8.24\",\"del\":\"$12.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"}],\"h\":[{\"title\":\"Premium CBD <br/>Oil 1000mg\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-white text-dark\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-dark\"},\"img\":\"/img/promotion/slide15.jpg\",\"bgColor\":\"#DAECFA\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide17.jpg\",\"bgColor\":\"#e9f5f5\",\"imgbg\":\"d-block bg-padding\",\"textColor\":\"text-dark\"}],\"i\":[{\"banner\":\"/img/promotion/promo12.jpg\",\"title\":\"Pure Natural <br/>Creams\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"},{\"banner\":\"/img/promotion/promo13.jpg\",\"title\":\"Orange Relief <br/>for your body\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"},{\"banner\":\"/img/promotion/promo14.jpg\",\"title\":\"Herbal Power <br/>Skin Care\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"}]}");

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/modules/HeaderTop.vue?vue&type=template&id=1f30af2d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"ps-header__text\"><strong>100% Secure delivery </strong>without contacting the courier </div> "), _vm._ssrNode("<div class=\"ps-top__right\">", "</div>", [_c('language-currency'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-top__social\">", "</div>", [_c('social-icon')], 1), _vm._ssrNode(" "), _c('render-list', {
    attrs: {
      "list": _vm.menu,
      "className": "menu-top"
    }
  }), _vm._ssrNode(" <div class=\"ps-header__text\">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/modules/HeaderTop.vue?vue&type=template&id=1f30af2d&

// EXTERNAL MODULE: ./components/shared/SocialIcon.vue + 2 modules
var SocialIcon = __webpack_require__(87);

// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageCurrency.vue + 4 modules
var LanguageCurrency = __webpack_require__(78);

// EXTERNAL MODULE: ./static/data/menu.json
var menu = __webpack_require__(27);

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/modules/HeaderTop.vue?vue&type=script&lang=js&




/* harmony default export */ var HeaderTopvue_type_script_lang_js_ = ({
  components: {
    SocialIcon: SocialIcon["a" /* default */],
    LanguageCurrency: LanguageCurrency["a" /* default */],
    RenderList: RenderList["a" /* default */]
  },
  data() {
    return {
      menu: menu["f" /* menuTopHome2 */]
    };
  }
});
// CONCATENATED MODULE: ./components/shared/headers/modules/HeaderTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_HeaderTopvue_type_script_lang_js_ = (HeaderTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/headers/modules/HeaderTop.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_HeaderTopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "24ca075d"
  
)

/* harmony default export */ var HeaderTop = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/SectionBanner.vue?vue&type=template&id=47feff8f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    class: ['ps-section--banner', _vm.sectionClass]
  }, [_vm._ssrNode("<div class=\"ps-section__overlay\"" + _vm._ssrStyle(null, null, {
    display: _vm.loadingBanner ? '' : 'none'
  }) + "><div class=\"ps-section__loading\"></div></div> "), _vm._ssrNode("<div class=\"ps-swiper\">", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:bannerSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "bannerSwiper"
    }],
    staticClass: "swiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(_vm.listData, function (item, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm.round ? _vm._ssrNode("<div class=\"ps-banner--round\">", "</div>", [_c('banner', {
      attrs: {
        "banner": item
      }
    })], 1) : _c('banner', {
      attrs: {
        "banner": item
      }
    })], 1);
  }), 0)]), _vm._ssrNode(" <div class=\"ps-swiper__nav\"><div class=\"swiper-button-prev swiper-prev-banner\"></div> <div class=\"swiper-button-next swiper-next-banner\"></div></div> <div class=\"swiper-pagination pagination-banner\"></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/SectionBanner.vue?vue&type=template&id=47feff8f&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/elements/commons/Banner.vue + 4 modules
var Banner = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/SectionBanner.vue?vue&type=script&lang=js&


/* harmony default export */ var SectionBannervue_type_script_lang_js_ = ({
  props: {
    listData: {
      type: Array,
      default: () => []
    },
    sectionClass: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Banner: Banner["a" /* default */]
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 15000,
          disableOnInteraction: false
        },
        navigation: {
          prevEl: '.swiper-prev-banner',
          nextEl: '.swiper-next-banner'
        },
        pagination: {
          el: '.pagination-banner',
          clickable: true
        }
      },
      loadingBanner: true
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  },
  mounted() {
    setTimeout(() => {
      this.loadingBanner = false;
    }, 1000);
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/SectionBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_SectionBannervue_type_script_lang_js_ = (SectionBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/SectionBanner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_SectionBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ca0dea66"
  
)

/* harmony default export */ var SectionBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductByCollection; });
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

async function getProductByCollection(slug) {
  const endPoint = `collections?slug=${slug}`;
  const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "a"]}/${endPoint}`).then(response => {
    if (response.data && response.data.length > 0) {
      return response.data[0].products;
    } else {
      return [];
    }
  }).catch(error => {
    console.log(JSON.stringify(error));
    return null;
  });
  return reponse;
}

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/ReviewItem.vue?vue&type=template&id=755c1282&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-review"
  }, [_vm._ssrNode("<div class=\"ps-review__text\">" + _vm._ssrEscape(_vm._s(_vm.item.text)) + "</div> <div class=\"ps-review__name\">" + _vm._ssrEscape(_vm._s(_vm.item.name)) + "</div> "), _vm._ssrNode("<div class=\"ps-review__review\">", "</div>", [_c('rating-component', {
    attrs: {
      "value": _vm.item.rate
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/ReviewItem.vue?vue&type=template&id=755c1282&

// EXTERNAL MODULE: ./components/elements/commons/RatingComponent.vue + 4 modules
var RatingComponent = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/ReviewItem.vue?vue&type=script&lang=js&

/* harmony default export */ var ReviewItemvue_type_script_lang_js_ = ({
  props: {
    item: Object,
    default: () => {}
  },
  components: {
    RatingComponent: RatingComponent["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/elements/commons/ReviewItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_ReviewItemvue_type_script_lang_js_ = (ReviewItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/ReviewItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_ReviewItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0677f60a"
  
)

/* harmony default export */ var ReviewItem = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/FeaturedProduct.vue?vue&type=template&id=2828fa0e&


var FeaturedProductvue_type_template_id_2828fa0e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--featured"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(5, function (item) {
    return _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-2dot4\">", "</div>", [_c(VSkeletonLoader["a" /* default */], {
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _vm._ssrNode("<div class=\"row m-0\">", "</div>", _vm._l(_vm.dataList, function (item, index) {
    return _vm._ssrNode("<div class=\"col-6 col-sm-4 col-lg-2dot4 p-0\">", "</div>", [_c('product-standard', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"ps-shop__more\"><a href=\"#\">Show all</a></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/FeaturedProduct.vue?vue&type=template&id=2828fa0e&

// EXTERNAL MODULE: ./components/elements/product/ProductStandard.vue + 4 modules
var ProductStandard = __webpack_require__(16);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/FeaturedProduct.vue?vue&type=script&lang=js&


/* harmony default export */ var FeaturedProductvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: ''
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ProductStandard: ProductStandard["a" /* default */]
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/FeaturedProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_FeaturedProductvue_type_script_lang_js_ = (FeaturedProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/FeaturedProduct.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_FeaturedProductvue_type_script_lang_js_,
  FeaturedProductvue_type_template_id_2828fa0e_render,
  staticRenderFns,
  false,
  null,
  null,
  "4006783d"
  
)

/* harmony default export */ var FeaturedProduct = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/BannerOverlay.vue?vue&type=template&id=5e4ebd87&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-home__banner"
  }, [_vm._ssrNode(_vm.banner ? "<div class=\"ps-banner\"" + _vm._ssrStyle(null, {
    backgroundColor: _vm.banner.bgColor
  }, null) + "><img" + _vm._ssrAttr("src", _vm.banner.img) + " alt=\"alt\" class=\"ps-banner__overlay\"> <div class=\"ps-banner__block\"><div class=\"ps-banner__content\"><h2" + _vm._ssrClass(null, ['ps-banner__title', _vm.banner.textColor && _vm.banner.textColor]) + ">" + _vm._s(_vm.banner.title) + "</h2> " + (_vm.banner.button ? "<div class=\"ps-banner__btn-group\">" + _vm._ssrList(_vm.banner.button, function (item, index) {
    return "<div" + _vm._ssrClass(null, ['ps-banner__btn', _vm.banner.buttonColor && _vm.banner.buttonColor]) + "><img" + _vm._ssrAttr("src", item.icon) + " alt=\"alt\"" + _vm._ssrStyle(null, _vm.banner.filter && _vm.banner.filter, null) + ">" + _vm._ssrEscape(_vm._s(item.text) + "\n                    ") + "</div>";
  }) + "</div>" : "<!---->") + " " + (_vm.banner.price ? "<div class=\"ps-banner__price\"><span>" + _vm._ssrEscape(_vm._s(_vm.banner.price.ins)) + "</span> <del>" + _vm._ssrEscape(_vm._s(_vm.banner.price.del)) + "</del></div>" : "<!---->") + " <a href=\"#\"" + _vm._ssrClass(null, ['ps-banner__shop', _vm.banner.shop]) + ">" + _vm._ssrEscape(_vm._s(_vm.banner.textShop)) + "</a></div> " + (_vm.banner.percent ? "<div class=\"ps-banner__thumnail\"><div" + _vm._ssrClass(null, ['ps-banner__persen', _vm.banner.percent.extraClass]) + ">" + _vm._ssrEscape("\n                " + _vm._s(_vm.banner.percent.text) + "\n                ") + "</div></div>" : "<!---->") + "</div></div>" : "<!---->")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/BannerOverlay.vue?vue&type=template&id=5e4ebd87&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/BannerOverlay.vue?vue&type=script&lang=js&
/* harmony default export */ var BannerOverlayvue_type_script_lang_js_ = ({
  props: {
    banner: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./components/elements/commons/BannerOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_BannerOverlayvue_type_script_lang_js_ = (BannerOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/BannerOverlay.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_BannerOverlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8300df56"
  
)

/* harmony default export */ var BannerOverlay = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterCategory.vue?vue&type=template&id=35ace21a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row ps-footer__category m-0"
  }, [_vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.woundCare.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.woundCare.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.higiene.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.higiene.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.laboratory.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.laboratory.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.tools.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.tools.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.diagnosis.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.diagnosis.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4 col-md-2 p-0\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.equipment.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.equipment.items,
      "className": 'ps-block__list'
    }
  })], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterCategory.vue?vue&type=template&id=35ace21a&

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// EXTERNAL MODULE: ./static/data/footer.json
var footer = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterCategory.vue?vue&type=script&lang=js&


/* harmony default export */ var FooterCategoryvue_type_script_lang_js_ = ({
  components: {
    RenderList: RenderList["a" /* default */]
  },
  data() {
    return {
      woundCare: footer["i" /* woundCare */],
      higiene: footer["d" /* higiene */],
      laboratory: footer["f" /* laboratory */],
      tools: footer["h" /* tools */],
      diagnosis: footer["b" /* diagnosis */],
      equipment: footer["c" /* equipment */]
    };
  }
});
// CONCATENATED MODULE: ./components/shared/footers/modules/FooterCategory.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_FooterCategoryvue_type_script_lang_js_ = (FooterCategoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterCategory.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_FooterCategoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a8630c2"
  
)

/* harmony default export */ var FooterCategory = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterListpage.vue?vue&type=template&id=0bd37320&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-footer--listpage"
  }, [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/about-us"
    }
  }, [_vm._v("About us")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Delivery information")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Privacy Policy")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Affiliate")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Sales")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Terms & Conditions")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Bestsellers")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Discount")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Latest products")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("My account")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("My orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Returns")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-4 col-md-2\">", "</div>", [_vm._ssrNode("<ul class=\"ps-footer__list\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/shop/list"
    }
  }, [_vm._v("Shipping")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_vm._v("Wishlist")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-4 col-md-2\"></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterListpage.vue?vue&type=template&id=0bd37320&

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterListpage.vue?vue&type=script&lang=js&

/* harmony default export */ var FooterListpagevue_type_script_lang_js_ = ({
  components: {
    RenderList: RenderList["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/shared/footers/modules/FooterListpage.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_FooterListpagevue_type_script_lang_js_ = (FooterListpagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterListpage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_FooterListpagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7dd04f1e"
  
)

/* harmony default export */ var FooterListpage = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterNewsletter.vue?vue&type=template&id=35b80cc0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-footer--newsletter"
  }, [_vm._ssrNode("<h5 class=\"ps-footer__title\">Join our newsletter</h5> <p>And get $20 discount for your first order</p> "), _c('form-subscribe', {
    on: {
      "handleSubscribe": _vm.handleSubscribe
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterNewsletter.vue?vue&type=template&id=35b80cc0&

// EXTERNAL MODULE: ./components/elements/commons/FormSubscribe.vue + 4 modules
var FormSubscribe = __webpack_require__(308);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/modules/FooterNewsletter.vue?vue&type=script&lang=js&

/* harmony default export */ var FooterNewslettervue_type_script_lang_js_ = ({
  components: {
    FormSubscribe: FormSubscribe["a" /* default */]
  },
  methods: {
    handleSubscribe(email) {
      console.log('email', email);
      const message = {
        message: 'Thank you for you subscribe.',
        icon: 'icon-shield-check'
      };
      this.$store.commit('app/setMessageNotify', message);
      this.$store.commit('app/setDialogNotify', true);
    }
  }
});
// CONCATENATED MODULE: ./components/shared/footers/modules/FooterNewsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_FooterNewslettervue_type_script_lang_js_ = (FooterNewslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/modules/FooterNewsletter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_FooterNewslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a9207006"
  
)

/* harmony default export */ var FooterNewsletter = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/modules/Header3Search.vue?vue&type=template&id=b540d024&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-header3-search-mobile"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-search__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-menu__sticky\"><a href=\"#\" class=\"menu-slide\"><i class=\"fa fa-bars\"></i>Products</a></div> "), _vm._ssrNode("<div class=\"ps-header__menu\">", "</div>", [_c('render-list', {
    attrs: {
      "list": _vm.mainMenu,
      "className": "menu"
    }
  })], 1), _vm._ssrNode(" "), _c('form-search')], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/modules/Header3Search.vue?vue&type=template&id=b540d024&

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// EXTERNAL MODULE: ./static/data/menu.json
var menu = __webpack_require__(27);

// EXTERNAL MODULE: ./components/shared/headers/modules/FormSearch.vue + 4 modules
var FormSearch = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/modules/Header3Search.vue?vue&type=script&lang=js&



/* harmony default export */ var Header3Searchvue_type_script_lang_js_ = ({
  components: {
    RenderList: RenderList["a" /* default */],
    FormSearch: FormSearch["a" /* default */]
  },
  data() {
    return {
      mainMenu: menu["c" /* menuHome3 */]
    };
  }
});
// CONCATENATED MODULE: ./components/shared/headers/modules/Header3Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_Header3Searchvue_type_script_lang_js_ = (Header3Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/headers/modules/Header3Search.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_Header3Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e234ba3a"
  
)

/* harmony default export */ var Header3Search = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV5.vue?vue&type=template&id=48a6a87e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "ps-footer ps-footer--5"
  }, [_c('footer-top', {
    attrs: {
      "container": true
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer__middle\">", "</div>", [_c('footer-category'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row ps-footer__box\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-4\">", "</div>", [_c('footer-contact')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-sm-4\">", "</div>", [_c('footer-address')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-sm-4\">", "</div>", [_c('footer-newsletter')], 1)], 2), _vm._ssrNode(" "), _c('footer-listpage')], 2), _vm._ssrNode(" "), _c('footer-bottom')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/FooterV5.vue?vue&type=template&id=48a6a87e&

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterBottom.vue + 2 modules
var FooterBottom = __webpack_require__(88);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterTop.vue + 4 modules
var FooterTop = __webpack_require__(85);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterContact.vue + 2 modules
var FooterContact = __webpack_require__(89);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterAddress.vue + 4 modules
var FooterAddress = __webpack_require__(86);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterCategory.vue + 4 modules
var FooterCategory = __webpack_require__(382);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterListpage.vue + 4 modules
var FooterListpage = __webpack_require__(401);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterNewsletter.vue + 4 modules
var FooterNewsletter = __webpack_require__(402);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV5.vue?vue&type=script&lang=js&







/* harmony default export */ var FooterV5vue_type_script_lang_js_ = ({
  components: {
    FooterBottom: FooterBottom["a" /* default */],
    FooterTop: FooterTop["a" /* default */],
    FooterContact: FooterContact["a" /* default */],
    FooterAddress: FooterAddress["a" /* default */],
    FooterCategory: FooterCategory["a" /* default */],
    FooterListpage: FooterListpage["a" /* default */],
    FooterNewsletter: FooterNewsletter["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/shared/footers/FooterV5.vue?vue&type=script&lang=js&
 /* harmony default export */ var footers_FooterV5vue_type_script_lang_js_ = (FooterV5vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/FooterV5.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footers_FooterV5vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5646738a"
  
)

/* harmony default export */ var FooterV5 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(459);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("407c0cb8", content, true, context)
};

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_6_vue_vue_type_style_index_0_id_2fb81475_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_6_vue_vue_type_style_index_0_id_2fb81475_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_6_vue_vue_type_style_index_0_id_2fb81475_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_6_vue_vue_type_style_index_0_id_2fb81475_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_6_vue_vue_type_style_index_0_id_2fb81475_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--space-unit:1em;--space-xxxxs:calc(var(--space-unit)*0.09);--space-xxxs:calc(var(--space-unit)*0.146);--space-xxs:calc(var(--space-unit)*0.236);--space-xs:calc(var(--space-unit)*0.382);--space-sm:calc(var(--space-unit)*0.618);--space-md:calc(var(--space-unit)*1);--space-lg:calc(var(--space-unit)*1.618);--space-xl:calc(var(--space-unit)*2.618);--space-xxl:calc(var(--space-unit)*4.236);--space-xxxl:calc(var(--space-unit)*6.854);--space-xxxxl:calc(var(--space-unit)*11.08);--component-padding:var(--space-xxxl)}.ps-home--6 .ps-banner .ps-banner__imagebg{position:absolute;right:0;bottom:0;width:100%}.ps-home--6 .ps-banner .ps-banner__imagebg.fuild{height:100%;-o-object-fit:cover;object-fit:cover}.ps-home--6 .ps-banner .ps-banner__image{display:none}.ps-home--6 .ps-banner .ps-banner__block{position:relative}.ps-home--6 .ps-banner .ps-banner__persen{bottom:-30%}.ps-home--6 .ps-section--banner .ps-banner__shop{margin-top:20px}.ps-home--6 .ps-section--banner .ps-banner__btn,.ps-home--6 .ps-section--banner .ps-banner__desc{color:#5b6c8f}.ps-home--6 .ps-home__content{border-top:1px solid #f0f2f5}.ps-home--6 .ps-home__content .ps-banner{margin-bottom:50px}.ps-home--6 .ps-home__content .ps-banner .ps-banner__image{display:block}.ps-home--6 .ps-home__content .ps-banner .ps-banner__btn{font-weight:600;color:#103178}.ps-home--6 .ps-home__content .ps-banner .ps-banner__btn:first-child img{margin-top:-5px}.ps-home--6 .ps-section--latest{margin:30px 0 50px}.ps-home--6 .ps-home__banner{padding-top:30px;margin-bottom:30px!important}.ps-home--6 .ps-banner--round{background-color:#fff;margin:30px 0 0}.ps-home--6 .ps-banner--round .ps-banner{overflow:hidden;border-top:1px solid #f0f2f5;margin-bottom:0;background-color:#fff}.ps-home--6 .ps-delivery{padding-top:60px;padding-bottom:60px;margin-bottom:0;margin-top:0}.ps-home--6 .ps-section--featured{padding:30px 0 50px}.ps-home--6 .ps-promo{padding-bottom:50px}@media(min-width:768px){.ps-home--6{border-top:1px solid #d9dee8}.ps-home--6 .ps-banner .ps-banner__imagebg{width:52%;height:100%;display:block}.ps-home--6 .ps-banner .ps-banner__imagebg.fuild{width:100%;height:auto}.ps-home--6 .ps-banner .ps-banner__content{padding-top:2%;position:relative;z-index:10}.ps-home--6 .ps-banner .ps-banner__persen{bottom:25%}.ps-home--6 .ps-banner .ps-banner__thumnail .ps-banner__round{z-index:0}.ps-home--6 .ps-home__content .ps-banner{border-bottom:1px solid #f0f2f5;height:330px}.ps-home--6 .ps-home__content .ps-banner .ps-banner__image{height:70%;width:auto;position:static;margin:auto}.ps-home--6 .ps-home__content .ps-banner .ps-banner__thumnail{display:flex}.ps-home--6 .ps-home__content .ps-banner .ps-banner__content{padding:9% 4% 0}.ps-home--6 .ps-banner--round .ps-banner__content{padding-left:0}.ps-home--6 .ps-banner--round .ps-banner{padding-top:0;height:370px}.ps-home--6 .ps-banner--round .ps-banner .ps-banner__image{position:absolute;right:15%;height:95%}}@media(min-width:1280px){.ps-home--6 .ps-banner .ps-banner{height:700px}.ps-home--6 .ps-banner .ps-banner__desc{margin-bottom:20px}.ps-home--6 .ps-banner .ps-banner__content{padding-top:8%}.ps-home--6 .ps-home__content .ps-banner{height:400px;padding:0}.ps-home--6 .ps-home__content .ps-banner .ps-banner__content{padding-top:60px}.ps-home--6 .ps-home__content .ps-section--banner .ps-banner .ps-banner__title{font-size:50px;line-height:60px}.ps-home--6 .ps-home__content .ps-banner--round .ps-banner,.ps-home--6 .ps-home__content .ps-section--banner .ps-banner{height:490px}.ps-home--6 .ps-banner--round .ps-banner__desc{margin-bottom:35px}.ps-home--6 .ps-section--banner .ps-banner{height:750px}.ps-home--6 .ps-section--banner .ps-banner .ps-banner__content{padding-top:0;display:flex;flex-direction:column;justify-content:center}.ps-home--6 .ps-section--banner .ps-banner .ps-banner__shop{width:-moz-fit-content;width:fit-content}.ps-home--6 .ps-section--banner .ps-banner .ps-banner__thumnail .ps-banner__round{left:auto;right:-50%;height:250%;top:-75%}.ps-home--6 .ps-section--banner .ps-banner .ps-banner__imagebg.not-fuild{height:113%;width:auto}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(282);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-6.vue?vue&type=template&id=2fb81475&


var home_6vue_type_template_id_2fb81475_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VMain["a" /* default */], {
    staticClass: "ps-page"
  }, [_c('header-v6'), _vm._v(" "), _c('header-mobile'), _vm._v(" "), _c('div', {
    staticClass: "ps-home ps-home--6"
  }, [_c('section-banner', {
    attrs: {
      "listData": _vm.banners
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-home__content"
  }, [_c('div', {
    staticClass: "ps-section--banner"
  }, [_c('banner', {
    attrs: {
      "banner": _vm.bannerContent[0]
    }
  })], 1), _vm._v(" "), _c('latest-product-carousel', {
    attrs: {
      "title": "Latest products",
      "dataList": _vm.latestProduct
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('banner-overlay', {
    attrs: {
      "banner": _vm.bannerContent[1]
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-promo"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.promotions, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-12 col-sm-6"
    }, [_c('promo-item', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0)])], 1), _vm._v(" "), _c('featured-product', {
    attrs: {
      "title": "Featured products",
      "dataList": _vm.featuredProduct
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "ps-banner--round"
  }, [_c('banner', {
    attrs: {
      "banner": _vm.bannerContent[2]
    }
  })], 1), _vm._v(" "), _c('latest-reviews-v2'), _vm._v(" "), _c('delivery-full')], 1)], 1), _vm._v(" "), _c('footer-v5')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/homepage/home-6.vue?vue&type=template&id=2fb81475&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV6.vue?vue&type=template&id=10257af4&
var HeaderV6vue_type_template_id_10257af4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--6 ps-header--mobile', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_c('notification'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-header__left\"><ul class=\"ps-header__icons\"><li>" + (!_vm.appDrawer || !_vm.currentDrawerContent || _vm.currentDrawerContent !== 'menu' ? "<a href=\"javascript: void(0);\" class=\"ps-header__item\"><i class=\"icon-menu\"></i></a>" : "<!---->") + " " + (_vm.appDrawer && _vm.currentDrawerContent && _vm.currentDrawerContent === 'menu' ? "<a href=\"javascript: void(0);\" class=\"ps-header__item\"><i class=\"icon-cross\"></i></a>" : "<!---->") + "</li></ul></div> "), _vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/mobile-logo.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__right\">", "</div>", [_vm._ssrNode("<ul class=\"ps-header__icons\">", "</ul>", [_vm._ssrNode("<li class=\"ps-header__cart\">", "</li>", [_c('nuxt-link', {
    staticClass: "active ps-header__item",
    attrs: {
      "to": "/shop/shopping-cart"
    }
  }, [_c('i', {
    staticClass: "icon-cart-empty"
  }), _vm._v(" "), _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.productCartQuantity))])])], 1)])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_c('form-search')], 1)], 2)], 2);
};
var HeaderV6vue_type_template_id_10257af4_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV6.vue?vue&type=template&id=10257af4&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/shared/headers/modules/Notification.vue + 4 modules
var Notification = __webpack_require__(42);

// EXTERNAL MODULE: ./components/shared/headers/modules/FormSearch.vue + 4 modules
var FormSearch = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV6.vue?vue&type=script&lang=js&



/* harmony default export */ var HeaderV6vue_type_script_lang_js_ = ({
  components: {
    Notification: Notification["a" /* default */],
    FormSearch: FormSearch["a" /* default */]
  },
  data() {
    return {
      sticky: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      appDrawer: state => state.app.appDrawer,
      currentDrawerContent: state => state.app.currentDrawerContent,
      cartItems: state => state.cart.cartItems
    }),
    productCartQuantity() {
      let quantity = 0;
      this.cartItems.forEach(element => {
        quantity += element.quantity;
      });
      return quantity;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scroll = window.scrollY;
      if (scroll > 700) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    },
    handleOpenDrawer(drawer) {
      this.$store.commit('app/setCurrentDrawerContent', drawer);
      this.$store.commit('app/setAppDrawer', !this.appDrawer);
    },
    handleCloseDrawer() {
      this.$store.commit('app/setCurrentDrawerContent', null);
      this.$store.commit('app/setAppDrawer', false);
    }
  }
});
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV6.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_HeaderV6vue_type_script_lang_js_ = (HeaderV6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV6.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  headers_HeaderV6vue_type_script_lang_js_,
  HeaderV6vue_type_template_id_10257af4_render,
  HeaderV6vue_type_template_id_10257af4_staticRenderFns,
  false,
  null,
  null,
  "2eda6c89"
  
)

/* harmony default export */ var HeaderV6 = (component.exports);
// EXTERNAL MODULE: ./components/shared/footers/FooterV5.vue + 4 modules
var FooterV5 = __webpack_require__(412);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV6.vue?vue&type=template&id=1d8dffdc&
var HeaderV6vue_type_template_id_1d8dffdc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--3 ps-header--6', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_c('notification'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "sticky-logo",
    attrs: {
      "src": "/img/sticky-logo.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__right\">", "</div>", [_vm._ssrNode("<ul class=\"ps-header__icons\">", "</ul>", [_vm._ssrNode("<li class=\"ps-header__user\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-user\"></i></a> "), _c('login-modal')], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    staticClass: "ps-header__item",
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_c('i', {
    staticClass: "fa fa-heart-o"
  }), _vm._v(" "), _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.wishlistItems.length))])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"ps-header__cart\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-cart-empty\"></i> <span class=\"badge\">" + _vm._ssrEscape(_vm._s(_vm.productCartQuantity)) + "</span></a> "), _c('cart-mini')], 2)], 2), _vm._ssrNode(" "), _c('language-currency'), _vm._ssrNode(" "), _c('form-search'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__menu\">", "</div>", [_c('render-list', {
    attrs: {
      "list": _vm.mainMenu,
      "className": "menu"
    }
  })], 1)], 2)], 2), _vm._ssrNode(" "), _c('header3-search')], 2)], 2);
};
var HeaderV6vue_type_template_id_1d8dffdc_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/HeaderV6.vue?vue&type=template&id=1d8dffdc&

// EXTERNAL MODULE: ./static/data/menu.json
var menu = __webpack_require__(27);

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageCurrency.vue + 4 modules
var LanguageCurrency = __webpack_require__(78);

// EXTERNAL MODULE: ./components/shared/headers/modules/LoginModal.vue + 4 modules
var LoginModal = __webpack_require__(84);

// EXTERNAL MODULE: ./components/shared/headers/modules/CartMini.vue + 9 modules
var CartMini = __webpack_require__(83);

// EXTERNAL MODULE: ./components/shared/headers/modules/HeaderTop.vue + 4 modules
var HeaderTop = __webpack_require__(349);

// EXTERNAL MODULE: ./components/shared/headers/modules/Header3Search.vue + 4 modules
var Header3Search = __webpack_require__(403);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV6.vue?vue&type=script&lang=js&










/* harmony default export */ var shared_headers_HeaderV6vue_type_script_lang_js_ = ({
  components: {
    Notification: Notification["a" /* default */],
    RenderList: RenderList["a" /* default */],
    LanguageCurrency: LanguageCurrency["a" /* default */],
    FormSearch: FormSearch["a" /* default */],
    LoginModal: LoginModal["a" /* default */],
    CartMini: CartMini["a" /* default */],
    HeaderTop: HeaderTop["a" /* default */],
    Header3Search: Header3Search["a" /* default */]
  },
  data() {
    return {
      mainMenu: menu["c" /* menuHome3 */],
      sticky: false,
      showNavigation: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      cartItems: state => state.cart.cartItems,
      wishlistItems: state => state.wishlist.items,
      appDrawer: state => state.app.appDrawer
    }),
    productCartQuantity() {
      let quantity = 0;
      this.cartItems.forEach(element => {
        quantity += element.quantity;
      });
      return quantity;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scroll = window.scrollY;
      if (scroll > 200) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    },
    handleOpenDrawer(drawer) {
      this.$store.commit('app/setCurrentDrawerContent', drawer);
      this.$store.commit('app/setAppDrawer', !this.appDrawer);
    },
    handleOpenMenu() {
      this.showNavigation = !this.showNavigation;
    }
  }
});
// CONCATENATED MODULE: ./components/shared/headers/HeaderV6.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_shared_headers_HeaderV6vue_type_script_lang_js_ = (shared_headers_HeaderV6vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/headers/HeaderV6.vue





/* normalize component */

var HeaderV6_component = Object(componentNormalizer["a" /* default */])(
  components_shared_headers_HeaderV6vue_type_script_lang_js_,
  HeaderV6vue_type_template_id_1d8dffdc_render,
  HeaderV6vue_type_template_id_1d8dffdc_staticRenderFns,
  false,
  null,
  null,
  "6f17aaa0"
  
)

/* harmony default export */ var headers_HeaderV6 = (HeaderV6_component.exports);
// EXTERNAL MODULE: ./components/partials/homepage/SectionBanner.vue + 4 modules
var SectionBanner = __webpack_require__(351);

// EXTERNAL MODULE: ./components/elements/commons/Banner.vue + 4 modules
var Banner = __webpack_require__(310);

// EXTERNAL MODULE: ./components/partials/homepage/LatestProductCarousel.vue + 4 modules
var LatestProductCarousel = __webpack_require__(90);

// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(14);

// EXTERNAL MODULE: ./repositories/CollectionRepository.js
var CollectionRepository = __webpack_require__(354);

// EXTERNAL MODULE: ./components/elements/commons/BannerOverlay.vue + 4 modules
var BannerOverlay = __webpack_require__(381);

// EXTERNAL MODULE: ./components/elements/commons/PromoItem.vue + 4 modules
var PromoItem = __webpack_require__(94);

// EXTERNAL MODULE: ./components/partials/homepage/FeaturedProduct.vue + 4 modules
var FeaturedProduct = __webpack_require__(368);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/DeliveryFull.vue?vue&type=template&id=7b3c4d11&
var DeliveryFullvue_type_template_id_7b3c4d11_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-delivery",
    staticStyle: {
      "background-image": "url('/img/promotion/banner-delivery-2.jpg')"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-delivery__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-delivery__text\"><i class=\"icon-shield-check\"></i><span><strong>100% Secure delivery </strong>without contacting the\n                    courier</span></div> "), _c('nuxt-link', {
    staticClass: "ps-delivery__more",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("More")])], 2)])]);
};
var DeliveryFullvue_type_template_id_7b3c4d11_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/DeliveryFull.vue?vue&type=template&id=7b3c4d11&

// CONCATENATED MODULE: ./components/partials/homepage/DeliveryFull.vue

var script = {}


/* normalize component */

var DeliveryFull_component = Object(componentNormalizer["a" /* default */])(
  script,
  DeliveryFullvue_type_template_id_7b3c4d11_render,
  DeliveryFullvue_type_template_id_7b3c4d11_staticRenderFns,
  false,
  null,
  null,
  "58fddaf7"
  
)

/* harmony default export */ var DeliveryFull = (DeliveryFull_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/LatestReviewsV2.vue?vue&type=template&id=a223a814&
var LatestReviewsV2vue_type_template_id_a223a814_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--reviews ps-reviews--2"
  }, [_vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-3 col-md-3\"><img src=\"/img/promotion/home6-latest-review_280x.png\" alt class=\"ps-section__thumbnail\"></div> "), _vm._ssrNode("<div class=\"col-12 col-sm-9 col-md-9\">", "</div>", [_vm._ssrNode("<div class=\"ps-section__carousel\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\"><img src=\"/img/quote-icon.png\" alt>Latest reviews</h3> "), _vm._ssrNode("<div class=\"ps-swiper\">", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:reviewSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "reviewSwiper"
    }],
    staticClass: "swiper"
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(_vm.reviews, function (item, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('review-item', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0)]), _vm._ssrNode(" <div class=\"swiper-pagination pagination-review-1\"></div>")], 2)], 2)])], 2)])]);
};
var LatestReviewsV2vue_type_template_id_a223a814_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewsV2.vue?vue&type=template&id=a223a814&

// EXTERNAL MODULE: ./static/data/common.json
var common = __webpack_require__(76);

// EXTERNAL MODULE: ./components/elements/commons/ReviewItem.vue + 4 modules
var ReviewItem = __webpack_require__(366);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/LatestReviewsV2.vue?vue&type=script&lang=js&


/* harmony default export */ var LatestReviewsV2vue_type_script_lang_js_ = ({
  components: {
    ReviewItem: ReviewItem["a" /* default */]
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 11000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.pagination-review-1',
          clickable: true
        },
        breakpoints: {
          480: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 3
          }
        }
      },
      reviews: common["g" /* reviews */]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewsV2.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_LatestReviewsV2vue_type_script_lang_js_ = (LatestReviewsV2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewsV2.vue





/* normalize component */

var LatestReviewsV2_component = Object(componentNormalizer["a" /* default */])(
  homepage_LatestReviewsV2vue_type_script_lang_js_,
  LatestReviewsV2vue_type_template_id_a223a814_render,
  LatestReviewsV2vue_type_template_id_a223a814_staticRenderFns,
  false,
  null,
  null,
  "1393a40c"
  
)

/* harmony default export */ var LatestReviewsV2 = (LatestReviewsV2_component.exports);
// EXTERNAL MODULE: ./static/data/banners.json
var banners = __webpack_require__(347);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-6.vue?vue&type=script&lang=js&














/* harmony default export */ var home_6vue_type_script_lang_js_ = ({
  layout: 'home-default',
  components: {
    HeaderMobile: HeaderV6,
    FooterV5: FooterV5["a" /* default */],
    HeaderV6: headers_HeaderV6,
    SectionBanner: SectionBanner["a" /* default */],
    Banner: Banner["a" /* default */],
    LatestProductCarousel: LatestProductCarousel["a" /* default */],
    BannerOverlay: BannerOverlay["a" /* default */],
    PromoItem: PromoItem["a" /* default */],
    FeaturedProduct: FeaturedProduct["a" /* default */],
    DeliveryFull: DeliveryFull,
    LatestReviewsV2: LatestReviewsV2
  },
  data() {
    return {
      banners: banners["q" /* home6Banner */],
      bannerContent: banners["r" /* home6BannerContent */],
      latestProduct: [],
      promotions: [{
        banner: '/img/promotion/bg-banner4.jpg',
        badge: 'New',
        title: 'Get rid of bacteria <br/>in your home',
        btnName: 'More',
        classTitle: 'mb-20'
      }, {
        banner: '/img/promotion/bg-banner5.jpg',
        title: 'Candid <br/>Whitening Kit',
        btnName: 'Shop now',
        sale: '-10%'
      }],
      featuredProduct: []
    };
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    const params = {
      _limit: 8
    };
    this.latestProduct = await Object(ProductRepository["e" /* getProducts */])(params);
    this.featuredProduct = await Object(CollectionRepository["a" /* getProductByCollection */])('featured-products');
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/homepage/home-6.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home_6vue_type_script_lang_js_ = (home_6vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/homepage/home-6.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(458)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var home_6_component = Object(componentNormalizer["a" /* default */])(
  homepage_home_6vue_type_script_lang_js_,
  home_6vue_type_template_id_2fb81475_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e794d15"
  
)

/* harmony default export */ var home_6 = __webpack_exports__["default"] = (home_6_component.exports);

/***/ })

};;
//# sourceMappingURL=home-6.js.map