exports.ids = [17];
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

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/page/about/AboutInfo.vue?vue&type=template&id=4e6a6651&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-about--info"
  }, [_vm._ssrNode("<div class=\"container\"><h2 class=\"ps-about__title\">" + _vm._s(_vm.title) + "</h2> <p class=\"ps-about__subtitle\">\n            The brush handle fits perfectly in the hand, is slim and\n            beautifully made.\n        </p> <div class=\"ps-about__extent\"><div class=\"row m-0\">" + _vm._ssrList(_vm.extents, function (item, index) {
    return "<div class=\"col-12 col-sm-4 p-0\"><div class=\"ps-block--about\"><div class=\"ps-block__icon\"><img" + _vm._ssrAttr("src", item.icon) + " alt></div> <h4 class=\"ps-block__title\">" + _vm._s(item.title) + "</h4> <div class=\"ps-block__subtitle\">" + _vm._s(item.subtitle) + "</div></div></div>";
  }) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/page/about/AboutInfo.vue?vue&type=template&id=4e6a6651&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/page/about/AboutInfo.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutInfovue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'Effective and reliable <br />protection for your teeth'
    },
    listData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      extents: [],
      items: [{
        icon: '/img/icon/award-icon-2.png',
        title: 'Health Certificate 2000 - <br/>professional care',
        subtitle: 'The highest quality and protection for your teeth'
      }, {
        icon: '/img/icon/dentistry-icon-2.png',
        title: 'Sonic cleaning <br/>and whitening power',
        subtitle: 'At the same time, it protects and whitens'
      }, {
        icon: '/img/icon/toothbrush-icon-2.png',
        title: '3 types <br/>of cleaning tips',
        subtitle: 'Round, rectangular and super-wide'
      }]
    };
  },
  mounted() {
    if (this.listData && this.listData.length) {
      this.extents = this.listData;
    } else {
      this.extents = this.items;
    }
  }
});
// CONCATENATED MODULE: ./components/partials/page/about/AboutInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_AboutInfovue_type_script_lang_js_ = (AboutInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/page/about/AboutInfo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_AboutInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "26cfdfd6"
  
)

/* harmony default export */ var AboutInfo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV8.vue?vue&type=template&id=a5dcc3c0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "ps-footer ps-footer--12"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('footer-top'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-footer__middle\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-md-7\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-6 col-md-4\">", "</div>", [_c('footer-address')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-sm-6 col-md-8\">", "</div>", [_c('footer-contact')], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-md-5\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-6 col-sm-4\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.information.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.information.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.account.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.account.items,
      "className": 'ps-block__list'
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-6 col-sm-4\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.store.title)) + "</h5> "), _c('render-list', {
    attrs: {
      "list": _vm.store.items,
      "className": 'ps-block__list'
    }
  })], 2)])], 2)])], 2)]), _vm._ssrNode(" "), _c('footer-bottom')], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/FooterV8.vue?vue&type=template&id=a5dcc3c0&

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterBottom.vue + 2 modules
var FooterBottom = __webpack_require__(88);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterTop.vue + 4 modules
var FooterTop = __webpack_require__(85);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterContact.vue + 2 modules
var FooterContact = __webpack_require__(89);

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterAddress.vue + 4 modules
var FooterAddress = __webpack_require__(86);

// EXTERNAL MODULE: ./static/data/footer.json
var footer = __webpack_require__(47);

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV8.vue?vue&type=script&lang=js&






/* harmony default export */ var FooterV8vue_type_script_lang_js_ = ({
  components: {
    FooterBottom: FooterBottom["a" /* default */],
    FooterTop: FooterTop["a" /* default */],
    FooterContact: FooterContact["a" /* default */],
    FooterAddress: FooterAddress["a" /* default */],
    RenderList: RenderList["a" /* default */]
  },
  data() {
    return {
      information: footer["e" /* information */],
      account: footer["a" /* account */],
      store: footer["g" /* store */]
    };
  }
});
// CONCATENATED MODULE: ./components/shared/footers/FooterV8.vue?vue&type=script&lang=js&
 /* harmony default export */ var footers_FooterV8vue_type_script_lang_js_ = (FooterV8vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/FooterV8.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footers_FooterV8vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "55f1e684"
  
)

/* harmony default export */ var FooterV8 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/NewsletterInfo.vue?vue&type=template&id=26a0b83c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--newsletter ps-section--newsletter-info",
    style: {
      backgroundImage: 'url(' + _vm.bgImage + ')'
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-8 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"ps-section__body\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">Join our newsletter and get <br>$20 discount for your first order</h3> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_c('form-subscribe', {
    on: {
      "handleSubscribe": _vm.handleSubscribe
    }
  })], 1)], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/NewsletterInfo.vue?vue&type=template&id=26a0b83c&

// EXTERNAL MODULE: ./components/elements/commons/FormSubscribe.vue + 4 modules
var FormSubscribe = __webpack_require__(308);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/NewsletterInfo.vue?vue&type=script&lang=js&

/* harmony default export */ var NewsletterInfovue_type_script_lang_js_ = ({
  props: {
    bgImage: {
      type: String,
      default: ''
    }
  },
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
// CONCATENATED MODULE: ./components/partials/homepage/NewsletterInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_NewsletterInfovue_type_script_lang_js_ = (NewsletterInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/NewsletterInfo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_NewsletterInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "98342b4a"
  
)

/* harmony default export */ var NewsletterInfo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(443);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("5ee4773a", content, true, context)
};

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_12_vue_vue_type_style_index_0_id_6baebe70_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_12_vue_vue_type_style_index_0_id_6baebe70_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_12_vue_vue_type_style_index_0_id_6baebe70_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_12_vue_vue_type_style_index_0_id_6baebe70_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_12_vue_vue_type_style_index_0_id_6baebe70_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--space-unit:1em;--space-xxxxs:calc(var(--space-unit)*0.09);--space-xxxs:calc(var(--space-unit)*0.146);--space-xxs:calc(var(--space-unit)*0.236);--space-xs:calc(var(--space-unit)*0.382);--space-sm:calc(var(--space-unit)*0.618);--space-md:calc(var(--space-unit)*1);--space-lg:calc(var(--space-unit)*1.618);--space-xl:calc(var(--space-unit)*2.618);--space-xxl:calc(var(--space-unit)*4.236);--space-xxxl:calc(var(--space-unit)*6.854);--space-xxxxl:calc(var(--space-unit)*11.08);--component-padding:var(--space-xxxl)}.ps-home--12 .ps-about--info{padding:30px 0 50px}.ps-home--12 .ps-about--info .ps-about__title{font-size:20px;color:#333}.ps-home--12 .ps-about--info .ps-about__subtitle{display:none}.ps-home--12 .ps-about--info .ps-block__subtitle,.ps-home--12 .ps-about--info .ps-block__title{color:#333}.ps-home--12 .ps-swiper .ps-swiper__nav>:hover,.ps-home--12 .ps-swiper .swiper-pagination .swiper-pagination-bullet-active{background-color:#333}.ps-home--12 .ps-banner--round{margin:0}.ps-home--12 .ps-banner--round .ps-banner{padding-top:66px;height:auto}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__content{padding:40px 0 0;height:auto;text-align:center}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__btn,.ps-home--12 .ps-banner--round .ps-banner .ps-banner__desc,.ps-home--12 .ps-banner--round .ps-banner .ps-banner__title{color:#333}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__image{width:auto}.ps-home--12 .ps-section--newsletter-info{padding:80px 0}.ps-home--12 .ps-project--info{padding:30px 0 80px;margin-bottom:50px;border-bottom:1px solid #f0f2f5}.ps-home--12 .ps-section--mask-info{padding:80px 0}@media(min-width:768px){.ps-home--12 .ps-about--info{padding:30px 0 80px}.ps-home--12 .ps-about--info .ps-about__title{font-size:25px}.ps-home--12 .ps-banner--round .ps-banner{padding-top:100px}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__content{text-align:left;padding-top:100px;padding-bottom:100px}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__thumnail{justify-content:flex-start}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__thumnail .ps-banner__round{left:-50%;height:200%;bottom:-250px}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__thumnail .ps-banner__image{height:450px}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__block{align-items:flex-end;height:auto}.ps-home--12 .ps-section--newsletter-info{padding:140px 0}}@media(min-width:1280px){.ps-home--12 .ps-about--info .ps-about__title{font-size:30px}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__content{padding-top:140px;padding-bottom:140px}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__title{font-size:70px;line-height:84px}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__btn{font-size:18px}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__thumnail .ps-banner__round{left:-60%;height:240%;bottom:-70%}.ps-home--12 .ps-banner--round .ps-banner .ps-banner__thumnail .ps-banner__image{height:640px}.ps-home--12 .ps-section--newsletter-info{padding:160px 0}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(282);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-12.vue?vue&type=template&id=6baebe70&


var home_12vue_type_template_id_6baebe70_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VMain["a" /* default */], {
    staticClass: "ps-page"
  }, [_c('header-v12'), _vm._v(" "), _c('header-mobile'), _vm._v(" "), _c('div', {
    staticClass: "ps-home ps-home--12"
  }, [_c('div', {
    staticClass: "ps-home__content"
  }, [_c('section-banner', {
    attrs: {
      "listData": _vm.banners,
      "round": true
    }
  }), _vm._v(" "), _c('mask-service-info'), _vm._v(" "), _c('project-info'), _vm._v(" "), _c('about-info', {
    attrs: {
      "title": "Best quality on the market",
      "listData": _vm.extents
    }
  }), _vm._v(" "), _c('category-mask-info'), _vm._v(" "), _c('newsletter-info', {
    attrs: {
      "bgImage": "/img/bg-newsletter12.jpg"
    }
  })], 1)]), _vm._v(" "), _c('footer-v8')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/homepage/home-12.vue?vue&type=template&id=6baebe70&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV12.vue?vue&type=template&id=2407b240&
var HeaderV12vue_type_template_id_2407b240_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--11 ps-header--12', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo-dark.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "sticky-logo",
    attrs: {
      "src": "/img/logo-dark.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__right\">", "</div>", [_vm._ssrNode("<ul class=\"ps-header__icons\">", "</ul>", [_vm._ssrNode("<li><a href=\"#\" class=\"active ps-header__item open-search\"><i class=\"icon-magnifier\"></i></a></li> "), _vm._ssrNode("<li class=\"ps-header__user\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-user\"></i></a> "), _c('login-modal')], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    staticClass: "ps-header__item",
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_c('i', {
    staticClass: "fa fa-heart-o"
  }), _vm._v(" "), _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.wishlistItems.length))])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"ps-header__cart\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-cart-empty\"></i> <span class=\"badge\">" + _vm._ssrEscape(_vm._s(_vm.productCartQuantity)) + "</span></a> "), _c('cart-mini')], 2)], 2), _vm._ssrNode(" "), _c('language-currency'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__menu\">", "</div>", [_c('render-list', {
    attrs: {
      "list": _vm.mainMenu,
      "className": "menu"
    }
  })], 1)], 2)], 2)])]);
};
var HeaderV12vue_type_template_id_2407b240_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/HeaderV12.vue?vue&type=template&id=2407b240&

// EXTERNAL MODULE: ./components/shared/headers/modules/Notification.vue + 4 modules
var Notification = __webpack_require__(42);

// EXTERNAL MODULE: ./static/data/menu.json
var menu = __webpack_require__(27);

// EXTERNAL MODULE: ./components/elements/commons/RenderList.vue + 14 modules
var RenderList = __webpack_require__(37);

// EXTERNAL MODULE: ./components/shared/headers/modules/LanguageCurrency.vue + 4 modules
var LanguageCurrency = __webpack_require__(78);

// EXTERNAL MODULE: ./components/shared/headers/modules/FormSearch.vue + 4 modules
var FormSearch = __webpack_require__(82);

// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(14);

// EXTERNAL MODULE: ./components/shared/headers/modules/LoginModal.vue + 4 modules
var LoginModal = __webpack_require__(84);

// EXTERNAL MODULE: ./components/shared/headers/modules/CartMini.vue + 9 modules
var CartMini = __webpack_require__(83);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/shared/headers/modules/HeaderTop.vue + 4 modules
var HeaderTop = __webpack_require__(349);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV12.vue?vue&type=script&lang=js&










/* harmony default export */ var HeaderV12vue_type_script_lang_js_ = ({
  components: {
    Notification: Notification["a" /* default */],
    RenderList: RenderList["a" /* default */],
    LanguageCurrency: LanguageCurrency["a" /* default */],
    FormSearch: FormSearch["a" /* default */],
    LoginModal: LoginModal["a" /* default */],
    CartMini: CartMini["a" /* default */],
    HeaderTop: HeaderTop["a" /* default */]
  },
  data() {
    return {
      mainMenu: menu["b" /* menuHome11 */],
      product: null,
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
  async mounted() {
    this.product = await Object(ProductRepository["getProductById"])(5);
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
// CONCATENATED MODULE: ./components/shared/headers/HeaderV12.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_HeaderV12vue_type_script_lang_js_ = (HeaderV12vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/headers/HeaderV12.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  headers_HeaderV12vue_type_script_lang_js_,
  HeaderV12vue_type_template_id_2407b240_render,
  HeaderV12vue_type_template_id_2407b240_staticRenderFns,
  false,
  null,
  null,
  "6b6d17a7"
  
)

/* harmony default export */ var HeaderV12 = (component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV12.vue?vue&type=template&id=3ea4c1e9&
var HeaderV12vue_type_template_id_3ea4c1e9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--12 ps-header--mobile', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo-dark.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" <div class=\"ps-header__right\"><ul class=\"ps-header__icons\"><li><a href=\"#\" class=\"ps-header__item open-search\"><i class=\"fa fa-search\"></i></a></li></ul></div>")], 2)])]);
};
var HeaderV12vue_type_template_id_3ea4c1e9_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV12.vue?vue&type=template&id=3ea4c1e9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV12.vue?vue&type=script&lang=js&


/* harmony default export */ var mobile_headers_HeaderV12vue_type_script_lang_js_ = ({
  components: {
    Notification: Notification["a" /* default */]
  },
  data() {
    return {
      sticky: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      appDrawer: state => state.app.appDrawer
    })
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
    }
  }
});
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV12.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_mobile_headers_HeaderV12vue_type_script_lang_js_ = (mobile_headers_HeaderV12vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV12.vue





/* normalize component */

var HeaderV12_component = Object(componentNormalizer["a" /* default */])(
  shared_mobile_headers_HeaderV12vue_type_script_lang_js_,
  HeaderV12vue_type_template_id_3ea4c1e9_render,
  HeaderV12vue_type_template_id_3ea4c1e9_staticRenderFns,
  false,
  null,
  null,
  "b7fada44"
  
)

/* harmony default export */ var headers_HeaderV12 = (HeaderV12_component.exports);
// EXTERNAL MODULE: ./components/shared/footers/FooterV8.vue + 4 modules
var FooterV8 = __webpack_require__(385);

// EXTERNAL MODULE: ./components/partials/homepage/SectionBanner.vue + 4 modules
var SectionBanner = __webpack_require__(351);

// EXTERNAL MODULE: ./static/data/banners.json
var banners = __webpack_require__(347);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/MaskServiceInfo.vue?vue&type=template&id=4913e35f&
var MaskServiceInfovue_type_template_id_4913e35f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-mask--service"
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"ps-mask__content\"><div class=\"row\"><div class=\"col-12 col-sm-4 col-md-3\"><div class=\"ps-mask__left\"><div class=\"ps-mask__item\"><div class=\"ps-mask__icon\"><img src=\"/img/icon/certificate-1.png\" alt=\"icon\"></div> <h4 class=\"ps-mask__title\">Health Certificate 2000 - professional care</h4> <p class=\"ps-mask__desc\">The highest quality and protection for your family</p></div> <div class=\"ps-mask__item\"><div class=\"ps-mask__icon\"><img src=\"/img/heart-white.png\" alt=\"icon\"></div> <h4 class=\"ps-mask__title\">Surgical quality and wearing comfort</h4> <p class=\"ps-mask__desc\">At the same time, it protects and whitens</p></div></div></div> <div class=\"col-12 col-sm-4 col-md-6\"><div class=\"ps-mask__thumbnail\"><img src=\"/img/promotion/img-mask.png\" alt=\"mask\"></div></div> <div class=\"col-12 col-sm-4 col-md-3\"><div class=\"ps-mask__right\"><div class=\"ps-mask__item\"><div class=\"ps-mask__icon\"><img src=\"/img/icon/bacteria-1.png\" alt=\"icon\"></div> <h4 class=\"ps-mask__title\">It has antiviral and antibacterial properties</h4> <p class=\"ps-mask__desc\">Round, rectangular and super-wide</p></div> <div class=\"ps-mask__item\"><div class=\"ps-mask__icon\"><img src=\"/img/icon/paramedic-white.png\" alt=\"icon\"></div> <h4 class=\"ps-mask__title\">Used in operating theaters</h4> <p class=\"ps-mask__desc\">Health Certificate 2000 - <br>professional care</p></div></div></div></div></div></div>")]);
};
var MaskServiceInfovue_type_template_id_4913e35f_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/MaskServiceInfo.vue?vue&type=template&id=4913e35f&

// CONCATENATED MODULE: ./components/partials/homepage/MaskServiceInfo.vue

var script = {}


/* normalize component */

var MaskServiceInfo_component = Object(componentNormalizer["a" /* default */])(
  script,
  MaskServiceInfovue_type_template_id_4913e35f_render,
  MaskServiceInfovue_type_template_id_4913e35f_staticRenderFns,
  false,
  null,
  null,
  "4fc3825a"
  
)

/* harmony default export */ var MaskServiceInfo = (MaskServiceInfo_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/ProjectInfo.vue?vue&type=template&id=1913ab38&
var ProjectInfovue_type_template_id_1913ab38_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-project--info"
  }, [_vm._ssrNode("<div class=\"container\"><h2 class=\"ps-project__title\">Effective &amp; reliable <br>protection for your family</h2> <div class=\"ps-project__content\"><div class=\"row\">" + _vm._ssrList(_vm.items, function (item, index) {
    return "<div class=\"col-12 col-sm-6\"><div class=\"ps-project__item\"><div class=\"ps-project__thumbnail\"><img" + _vm._ssrAttr("src", item.img) + " alt></div> <h4 class=\"ps-project__name\">" + _vm._s(item.name) + "</h4> <p class=\"ps-project__desc\">" + _vm._s(item.desc) + "</p></div></div>";
  }) + "</div></div></div>")]);
};
var ProjectInfovue_type_template_id_1913ab38_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/ProjectInfo.vue?vue&type=template&id=1913ab38&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/ProjectInfo.vue?vue&type=script&lang=js&
/* harmony default export */ var ProjectInfovue_type_script_lang_js_ = ({
  data() {
    return {
      items: [{
        img: '/img/promotion/goby-tD3GaS9ysF4-unsplash.jpg',
        name: 'Health Certificate <br>2000 - professional care',
        desc: 'Just a few seconds to measure your body temperature. <br>Up to 5 users! The battery lasts up to 2 years.'
      }, {
        img: '/img/promotion/goby-tD3GaS9ysF4-unsplash2.jpg',
        name: 'The possibility of testing when <br>applied to the forehead. Ready to <br>work in 30 seconds.',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form,'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/ProjectInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_ProjectInfovue_type_script_lang_js_ = (ProjectInfovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/homepage/ProjectInfo.vue





/* normalize component */

var ProjectInfo_component = Object(componentNormalizer["a" /* default */])(
  homepage_ProjectInfovue_type_script_lang_js_,
  ProjectInfovue_type_template_id_1913ab38_render,
  ProjectInfovue_type_template_id_1913ab38_staticRenderFns,
  false,
  null,
  null,
  "3790347a"
  
)

/* harmony default export */ var ProjectInfo = (ProjectInfo_component.exports);
// EXTERNAL MODULE: ./components/partials/page/about/AboutInfo.vue + 4 modules
var AboutInfo = __webpack_require__(384);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/CategoryMaskInfo.vue?vue&type=template&id=7b658843&
var CategoryMaskInfovue_type_template_id_7b658843_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--mask-info"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h2 class=\"ps-section__title\">3 different headband <br>binding finishes</h2> <p class=\"ps-section__subtitle\">Choose the one that is most comfortable for you</p> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", _vm._l(_vm.dataList, function (item, index) {
    return _vm._ssrNode("<div class=\"ps-section__item\">", "</div>", [_vm._ssrNode("<div class=\"ps-section__thumbnail\"><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.text) + "></div> "), _vm._ssrNode("<h5 class=\"ps-section__text\">", "</h5>", [_c('nuxt-link', {
      attrs: {
        "to": "/shop"
      }
    }, [_vm._v(_vm._s(item.text))])], 1), _vm._ssrNode(" "), _c('nuxt-link', {
      staticClass: "ps-btn ps-btn--warning",
      attrs: {
        "to": "/shop"
      }
    }, [_vm._v("Choose")])], 2);
  }), 0)], 2)]);
};
var CategoryMaskInfovue_type_template_id_7b658843_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/CategoryMaskInfo.vue?vue&type=template&id=7b658843&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/CategoryMaskInfo.vue?vue&type=script&lang=js&
/* harmony default export */ var CategoryMaskInfovue_type_script_lang_js_ = ({
  data() {
    return {
      dataList: [{
        image: "/img/products/mask1.png",
        text: "Rubber finish"
      }, {
        image: "/img/products/mask2.png",
        text: "Knotted fabric finish"
      }, {
        image: "/img/products/mask3.png",
        text: "Knotted rubber finish"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/CategoryMaskInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_CategoryMaskInfovue_type_script_lang_js_ = (CategoryMaskInfovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/homepage/CategoryMaskInfo.vue





/* normalize component */

var CategoryMaskInfo_component = Object(componentNormalizer["a" /* default */])(
  homepage_CategoryMaskInfovue_type_script_lang_js_,
  CategoryMaskInfovue_type_template_id_7b658843_render,
  CategoryMaskInfovue_type_template_id_7b658843_staticRenderFns,
  false,
  null,
  null,
  "dde022a8"
  
)

/* harmony default export */ var CategoryMaskInfo = (CategoryMaskInfo_component.exports);
// EXTERNAL MODULE: ./components/partials/homepage/NewsletterInfo.vue + 4 modules
var NewsletterInfo = __webpack_require__(410);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-12.vue?vue&type=script&lang=js&










/* harmony default export */ var home_12vue_type_script_lang_js_ = ({
  layout: 'home-default',
  components: {
    HeaderV12: HeaderV12,
    HeaderMobile: headers_HeaderV12,
    FooterV8: FooterV8["a" /* default */],
    SectionBanner: SectionBanner["a" /* default */],
    MaskServiceInfo: MaskServiceInfo,
    ProjectInfo: ProjectInfo,
    AboutInfo: AboutInfo["a" /* default */],
    CategoryMaskInfo: CategoryMaskInfo,
    NewsletterInfo: NewsletterInfo["a" /* default */]
  },
  data() {
    return {
      banners: banners["a" /* home12Banner */],
      extents: [{
        icon: "/img/icon/certificate-info.png",
        title: "Health Certificate 2000 - <br/>professional care",
        subtitle: "The highest quality and protection for your teeth"
      }, {
        icon: "/img/icon/dentistry-info.png",
        title: "Sonic cleaning <br/>and whitening power",
        subtitle: "At the same time, it protects and whitens"
      }, {
        icon: "/img/icon/toothbrush-info.png",
        title: "3 types <br/>of cleaning tips",
        subtitle: "Round, rectangular and super-wide"
      }]
    };
  },
  async mounted() {
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/homepage/home-12.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home_12vue_type_script_lang_js_ = (home_12vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/homepage/home-12.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(442)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var home_12_component = Object(componentNormalizer["a" /* default */])(
  homepage_home_12vue_type_script_lang_js_,
  home_12vue_type_template_id_6baebe70_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cf80785c"
  
)

/* harmony default export */ var home_12 = __webpack_exports__["default"] = (home_12_component.exports);

/***/ })

};;
//# sourceMappingURL=home-12.js.map