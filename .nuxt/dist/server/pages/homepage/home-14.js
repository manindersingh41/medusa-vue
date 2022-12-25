exports.ids = [19];
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

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPostCategory; });
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

async function getPosts(payload) {
  let endPoint = `posts`;
  if (payload) {
    endPoint = endPoint + `?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__[/* serializeQuery */ "c"])(payload)}`;
  }
  const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "a"]}/${endPoint}`).then(response => {
    return response.data;
  }).catch(error => {
    console.log(JSON.stringify(error));
    return null;
  });
  return reponse;
}
async function getPostById(id) {
  const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "a"]}/posts/${id}`).then(response => {
    return response.data;
  }).catch(error => ({
    error: JSON.stringify(error)
  }));
  return reponse;
}
async function getPostCategory(payload) {
  let endPoint = `post-categories`;
  if (payload) {
    endPoint = endPoint + `?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__[/* serializeQuery */ "c"])(payload)}`;
  }
  const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__[/* baseUrl */ "a"]}/${endPoint}`).then(response => {
    return response.data;
  }).catch(error => {
    console.log(JSON.stringify(error));
    return null;
  });
  return reponse;
}

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/PostLatset.vue?vue&type=template&id=d6b0b504&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.item ? _c('div', {
    staticClass: "ps-blog--latset"
  }, [_vm._ssrNode("<div class=\"ps-blog__thumbnail\">", "</div>", [_vm.item.thumbnail ? _c('nuxt-link', {
    attrs: {
      "to": `/blog/post-detail-1/${_vm.item.id}`
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.baseDomain + _vm.item.thumbnail.url,
      "alt": "alt"
    }
  })]) : _vm._e(), _vm._ssrNode(" <div class=\"ps-blog__badge\">" + _vm._ssrList(_vm.item.post_categories, function (val) {
    return "<span class=\"ps-badge__item\">" + _vm._ssrEscape(_vm._s(val.name)) + "</span>";
  }) + "</div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-blog__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-blog__meta\"><span class=\"ps-blog__date\">" + _vm._ssrEscape(_vm._s(_vm.createdAt)) + "</span><a href=\"#\" class=\"ps-blog__author\">Alfredo Austin</a></div> "), _c('nuxt-link', {
    staticClass: "ps-blog__title",
    attrs: {
      "to": `/blog/post-detail-1/${_vm.item.id}`
    }
  }, [_vm._v(_vm._s(_vm.item.name))]), _vm._ssrNode(" " + (_vm.item.short_description ? "<p class=\"ps-blog__desc\">" + _vm._ssrEscape(_vm._s(_vm.item.short_description)) + "</p>" : "<!---->"))], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/PostLatset.vue?vue&type=template&id=d6b0b504&

// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__(4);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(107);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/PostLatset.vue?vue&type=script&lang=js&


/* harmony default export */ var PostLatsetvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      baseDomain: Repository["a" /* baseUrl */]
    };
  },
  computed: {
    createdAt() {
      return external_moment_default()(this.item.created_at).format("MMM DD, YYYY");
    }
  }
});
// CONCATENATED MODULE: ./components/elements/commons/PostLatset.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_PostLatsetvue_type_script_lang_js_ = (PostLatsetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/PostLatset.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_PostLatsetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f04a82bc"
  
)

/* harmony default export */ var PostLatset = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module) {

module.exports = JSON.parse("{\"j\":[{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"},{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\"}],\"k\":[{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$29.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/slide2.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"noFull\":true},{\"title\":\"Fully equipped <br/> of ophthalmic rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round2.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Antibacterial <br/> Medical Mask\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/slide8.jpg\",\"bgColor\":\"#306A53\",\"buttonColor\":\"text-warning\",\"textColor\":\"text-white\",\"noFull\":true,\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"}],\"l\":[{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$29.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/bg-slide3-home3.jpg\",\"round\":\"\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\"}],\"m\":[{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\",\"buttonColor\":\"font-bold\"},{\"title\":\"Antibacterial<br/> Medical Mask\",\"desc\":\"Just a few seconds to measure your body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide3.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"}],\"o\":[{\"title\":\"Fully equipped<br/> of ophthalmic <br/>rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow ps-center\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#F0F2F5\"},{\"title\":\"Get rid of bacteria <br/>in your home\",\"desc\":\"Get rid of all bacteria!\",\"shop\":\"bg-white\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-25%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/slide4.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#FFCC00\",\"buttonColor\":\"font-bold\"},{\"title\":\"Candid <br/> Whitening Kit\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide1.png\",\"round\":\"/img/round2.png\",\"bgColor\":\"#DAECFA\"}],\"q\":[{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"only <br/> $25\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home6-bg.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"imgbg\":\"not-fuild\",\"filter\":\"filter: invert(40%) sepia(50%) saturate(366%) hue-rotate(182deg) brightness(80%) contrast(89%);\"},{\"title\":\"Dental office <br/> equipement <br/> on sale\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/home6-bg2.jpg\",\"bgColor\":\"#fcfcfe\",\"imgbg\":\"fuild\"},{\"title\":\"Best prices <br/> for all the lenses\",\"desc\":\"All correction values\",\"shop\":\"bg-warning\",\"textSale\":\"Up to -30%\",\"img\":\"/img/promotion/home6-bg3.jpg\",\"bgColor\":\"rgb(243 245 244)\",\"imgbg\":\"fuild\"}],\"s\":[{\"title\":\"SonicX900 <br>Electrical Brush\",\"desc\":\"Now with special price -30%\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"baged\":\"New\",\"percent\":{\"text\":\"New\",\"extraClass\":\"bg-success\",\"thumbnail\":true}},{\"title\":\"New stylish colors <br>now available!\",\"desc\":\"Choose a color that really <br>matches your personality\",\"shop\":\"bg-pink\",\"baged\":\"New\"}],\"n\":[{\"title\":\"PowerSteel <br/>X-tra 200 Brush\",\"shop\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home4-banner-4.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"textShop\":\"Add to cart\"},{\"title\":\"Fully equipped <br/>of ophthalmic rooms\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow ps-right\"},\"img\":\"/img/promotion/bg.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Antibacterial <br/>Medical Mask\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/anti-virus-bg.jpg\",\"bgColor\":\"#FFCC00\",\"textColor\":\"text-white\",\"buttonColor\":\"text-warning\",\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"},{\"title\":\"Super Sonic Brush <br/>X200 Higenic\",\"shop\":\"bg-warning\",\"textShop\":\"Add to cart\",\"button\":[{\"icon\":\"/img/icon/tooth-brush-icon.png\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/dashboard-icon.png\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-primary\"},\"img\":\"/img/promotion/bg-banner-detal.jpg\",\"bgColor\":\"#FFCC00\"}],\"p\":[{\"title\":\"Take care of <br/>yourself and <br/>your loved ones\",\"shop\":\"bg-yellow\",\"textShop\":\"Face mask\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/bg-banner15.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Best blood <br/>pressure <br/>monitors\",\"shop\":\"bg-yellow\",\"textShop\":\"Blood pressure\",\"img\":\"/img/promotion/blood-pressure.jpg\",\"bgColor\":\"#FFCC00\"},{\"title\":\"Home and <br/>dental office <br/>equipment\",\"shop\":\"bg-yellow\",\"textShop\":\"Dental\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"img\":\"/img/promotion/bg-banner-dental.jpg\",\"bgColor\":\"#FFCC00\",\"textColor\":\"text-white\"}],\"r\":[{\"title\":\"The best quality <br/>masks at the<br/>best price\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Up to 5 users simultaneously\"},{\"icon\":\"/img/icon/ribbon.svg\",\"text\":\"Has HEALTH certificate\"}],\"img\":\"/img/promotion/face-masks.jpg\",\"bgColor\":\"#fcfcfe\"},{\"title\":\"PowerSteel <br/>X-tra 200 Brush\",\"shop\":\"bg-yellow\",\"price\":{\"del\":\"$15.99\",\"ins\":\"$25.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/home4-banner-4.jpg\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"textShop\":\"Add to cart\"},{\"title\":\"Your one and only <br>online pharmacy!\",\"desc\":\"Just a few seconds to measure<br>your body temperature.\",\"shop\":\"bg-yellow\",\"textShop\":\"About\",\"button\":[{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Up to 5 users simultaneously\"},{\"icon\":\"/img/icon/ribbon.svg\",\"text\":\"Has HEALTH certificate\"}],\"round\":\"/img/round5.png\",\"img\":\"/img/girl-face-mask.png\"}],\"t\":[{\"title\":\"Antibacterial <br/> Medical Mask\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-left\"},\"img\":\"/img/promotion/slide8.jpg\",\"round\":\"\",\"bgColor\":\"#306A53\",\"buttonColor\":\"text-warning\",\"textColor\":\"text-white\",\"noFull\":true,\"filter\":\"filter: invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%);\"},{\"title\":\"PowerSteel <br/> X-tra 200 Brush\",\"desc\":\"Only in this week. Don’t misss!\",\"cart\":\"bg-yellow\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-yellow\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-yellow\"},\"img\":\"/img/promotion/slide2.jpg\",\"round\":\"\",\"bgColor\":\"#103178\",\"textColor\":\"text-white\",\"noFull\":true},{\"title\":\"Fully equipped <br/> of ophthalmic rooms\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"percent\":{\"text\":\"<small>only</small>$25\",\"extraClass\":\"bg-yellow ps-top\"},\"img\":\"/img/promotion/slide5.jpg\",\"round\":\"/img/round2.png\",\"bgColor\":\"#F0F2F5\"}],\"a\":[{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/girl-face-mask.png\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"bannerRound\":true,\"filter\":\"filter: invert(9%) sepia(19%) saturate(9%) hue-rotate(352deg) brightness(101%) contrast(91%);\"},{\"title\":\"Antibacterial <br/>Medical Mask\",\"desc\":\"Just a few seconds to measure your <br/>body temperature.\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/home6-bg.jpg\",\"round\":\"/img/round5.png\",\"bgColor\":\"#fcfcfe\",\"bannerRound\":true,\"filter\":\"filter: invert(9%) sepia(19%) saturate(9%) hue-rotate(352deg) brightness(101%) contrast(91%);\"}],\"b\":[{\"title\":\"Premium CBD <br/>Oil 1000mg\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning\"},\"img\":\"/img/promotion/slide13.jpg\",\"bgColor\":\"#DAECFA\",\"textColor\":\"text-dark\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide14.jpg\",\"bgColor\":\"#E8F5F4\",\"textColor\":\"text-dark\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"button\":[{\"icon\":\"/img/icon/bacterial.svg\",\"text\":\"Anti-Bacterial\"},{\"icon\":\"/img/icon/virus.svg\",\"text\":\"Anti-Virus\"}],\"img\":\"/img/promotion/slide16.jpg\",\"bgColor\":\"#F2F2F2\",\"textColor\":\"text-white\",\"imgbg\":\"d-block\",\"filter\":\"filter: brightness(0) invert(1);\"}],\"d\":[{\"title\":\"Take care <br/>of yourself and your skin \",\"shop\":\"bg-white\",\"textShop\":\"Sunscreens\",\"button\":[{\"icon\":\"/img/icon/icon11.png\",\"text\":\"Best quality\"},{\"icon\":\"/img/icon/icon12.png\",\"text\":\"Day & Night\"}],\"img\":\"/img/promotion/bg-banner16.jpg\",\"bgColor\":\"#FD8D27\"},{\"title\":\"Stay focused <br/>with best <br/>supplements\",\"shop\":\"bg-warning\",\"textShop\":\"Supplements\",\"img\":\"/img/promotion/bg-banner17.jpg\",\"bgColor\":\"#182947\"}],\"c\":[{\"banner\":\"/img/promotion/banner-home13-1.jpg\",\"title\":\"Boxed water <br/>is better!\",\"btnName\":\"Shop now\",\"sale\":\"-30%\",\"classTitle\":\"text-dark\",\"saleColor\":\"text-dark\",\"btnClass\":\"btn-green\"},{\"banner\":\"/img/promotion/banner-home13-2.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon9.png\"},{\"banner\":\"/img/promotion/banner-home13-3.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"Buy now\",\"price\":\"$15.99\",\"del\":\"$29.99\",\"priceColor\":\"text-white\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\"}],\"f\":[{\"banner\":\"/img/promotion/bg-promo1.jpg\",\"title\":\"Power Effect <br/>Pro Series\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon10.png\"},{\"banner\":\"/img/promotion/bg-promo2.jpg\",\"title\":\"Eczema <br/>Treatment CBD <br/>Ointement\",\"btnName\":\"Shop now\",\"sale\":\"-30%\",\"classTitle\":\"text-white\",\"saleColor\":\"text-white\",\"btnClass\":\"btn-green\"},{\"banner\":\"/img/promotion/bg-promo3.jpg\",\"title\":\"SFP 50+ <br/>Suncream\",\"btnName\":\"Buy now\",\"price\":\"$6.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"delColor\":\"text-white\"}],\"g\":[{\"banner\":\"/img/promotion/bg-banner20.jpg\",\"title\":\"FaceWash <br/>up to -20%\",\"btnName\":\"More\",\"badge\":\"New\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"image\":\"/img/icon/icon19.png\"},{\"banner\":\"/img/promotion/bg-banner21.jpg\",\"title\":\"PREHCU <br/>Workout\",\"btnName\":\"Buy now\",\"price\":\"$6.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-white\",\"btnClass\":\"btn-green\",\"delColor\":\"text-white\"},{\"banner\":\"/img/promotion/bg-banner22.jpg\",\"title\":\"Neauthy <br/>creams\",\"btnName\":\"Buy now\",\"price\":\"$12.99\",\"del\":\"$19.99\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"}],\"e\":[{\"banner\":\"/img/promotion/bg-banner23.jpg\",\"title\":\"PowerUp <br/>Lemon\",\"btnName\":\"Buy now\",\"price\":\"$38.24\",\"del\":\"$48.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner24.jpg\",\"title\":\"TwoEXP+ <br/>Areozol\",\"btnName\":\"Buy now\",\"price\":\"$8.24\",\"del\":\"$12.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner25.jpg\",\"title\":\"Cranberry <br/>Brand\",\"btnName\":\"Buy now\",\"price\":\"$13.24\",\"del\":\"$18.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"},{\"banner\":\"/img/promotion/bg-banner26.jpg\",\"title\":\"Recoup <br/>Recovery\",\"btnName\":\"Buy now\",\"price\":\"$8.24\",\"del\":\"$12.24\",\"priceColor\":\"text-warning\",\"classTitle\":\"text-dark\",\"btnClass\":\"btn-green\",\"delColor\":\"text-dark\"}],\"h\":[{\"title\":\"Premium CBD <br/>Oil 1000mg\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-white text-dark\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-dark\"},\"img\":\"/img/promotion/slide15.jpg\",\"bgColor\":\"#DAECFA\",\"imgbg\":\"d-block\"},{\"title\":\"Mouth Rinse <br/>12 hours\",\"desc\":\"Only in this week. Don’t misss!\",\"shop\":\"bg-warning\",\"price\":{\"del\":\"$29.99\",\"ins\":\"$15.99\",\"color\":\"text-warning\"},\"percent\":{\"text\":\"-30%\",\"extraClass\":\"bg-warning ps-center\"},\"img\":\"/img/promotion/slide17.jpg\",\"bgColor\":\"#e9f5f5\",\"imgbg\":\"d-block bg-padding\",\"textColor\":\"text-dark\"}],\"i\":[{\"banner\":\"/img/promotion/promo12.jpg\",\"title\":\"Pure Natural <br/>Creams\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"},{\"banner\":\"/img/promotion/promo13.jpg\",\"title\":\"Orange Relief <br/>for your body\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"},{\"banner\":\"/img/promotion/promo14.jpg\",\"title\":\"Herbal Power <br/>Skin Care\",\"btnName\":\"Shop now\",\"btnClass\":\"btn-white\",\"classTitle\":\"text-white\"}]}");

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

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/BestDealsProductCarousel.vue?vue&type=template&id=7f222472&


var BestDealsProductCarouselvue_type_template_id_7f222472_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--deals"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-section__header\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> "), _c('count-down')], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-section__carousel\">", "</div>", [_vm._ssrNode("<div class=\"ps-swiper\">", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:bestDealsProductSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "bestDealsProductSwiper"
    }],
    staticClass: "swiper"
  }, [_vm.loading ? _vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(5, function (item) {
    return _vm._ssrNode("<div class=\"swiper-slide ps-preloader\">", "</div>", [_c(VSkeletonLoader["a" /* default */], {
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(_vm.products, function (item, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('product-standard', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0)]), _vm._ssrNode(" <div class=\"ps-swiper__nav\"><div class=\"swiper-button-prev prev-best-deals\"></div> <div class=\"swiper-button-next next-best-deals\"></div></div> <div class=\"swiper-pagination pagination-best-deals\"></div>")], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/BestDealsProductCarousel.vue?vue&type=template&id=7f222472&

// EXTERNAL MODULE: ./components/elements/product/ProductStandard.vue + 4 modules
var ProductStandard = __webpack_require__(16);

// EXTERNAL MODULE: ./components/elements/commons/CountDown.vue + 4 modules
var CountDown = __webpack_require__(97);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/BestDealsProductCarousel.vue?vue&type=script&lang=js&



/* harmony default export */ var BestDealsProductCarouselvue_type_script_lang_js_ = ({
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
    ProductStandard: ProductStandard["a" /* default */],
    CountDown: CountDown["a" /* default */]
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
        loop: false,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          prevEl: '.prev-best-deals',
          nextEl: '.next-best-deals'
        },
        pagination: {
          el: '.pagination-best-deals',
          clickable: true
        },
        breakpoints: {
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }
      },
      products: []
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  },
  mounted() {
    this.setData();
  },
  methods: {
    setData() {
      if (this.dataList && this.dataList.length) {
        this.products = [];
        this.dataList.forEach(element => {
          let product = Object.assign({}, element);
          let percent = Math.floor(Math.random() * 50) + 10;
          product.percent = '-' + percent + '%';
          product.footer = true;
          product.available = Math.floor(Math.random() * 10) + 1;
          this.products.push(product);
        });
      }
    }
  },
  watch: {
    dataList() {
      this.setData();
    }
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/BestDealsProductCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_BestDealsProductCarouselvue_type_script_lang_js_ = (BestDealsProductCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/BestDealsProductCarousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_BestDealsProductCarouselvue_type_script_lang_js_,
  BestDealsProductCarouselvue_type_template_id_7f222472_render,
  staticRenderFns,
  false,
  null,
  null,
  "534cb280"
  
)

/* harmony default export */ var BestDealsProductCarousel = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV13.vue?vue&type=template&id=5cacffdd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--13', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_c('notification'), _vm._ssrNode(" <div class=\"ps-header__top\"><div class=\"container\"><div class=\"ps-header__text\">Need help? <strong>0020 500 - MYMEDI - 000</strong></div></div></div> "), _vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo-green.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "sticky-logo",
    attrs: {
      "src": "/img/logo-green.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" <a href=\"#\" class=\"ps-menu--sticky\"><i class=\"fa fa-bars\"></i></a> "), _vm._ssrNode("<div class=\"ps-header__right\">", "</div>", [_vm._ssrNode("<ul class=\"ps-header__icons\">", "</ul>", [_vm._ssrNode("<li><a href=\"#\" class=\"active ps-header__item open-search\"><i class=\"icon-magnifier\"></i></a></li> "), _vm._ssrNode("<li class=\"ps-header__user\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-user\"></i></a> "), _c('login-modal')], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    staticClass: "ps-header__item",
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_c('i', {
    staticClass: "fa fa-heart-o"
  }), _vm._v(" "), _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.wishlistItems.length))])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"ps-header__cart\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-cart-empty\"></i> <span class=\"badge\">" + _vm._ssrEscape(_vm._s(_vm.productCartQuantity)) + "</span></a> "), _c('cart-mini')], 2)], 2), _vm._ssrNode(" "), _c('language-currency'), _vm._ssrNode(" "), _c('form-search')], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, ['ps-navigation', {
    'active': _vm.showNavigation
  }]) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-navigation__left\">", "</div>", [_vm._ssrNode("<nav class=\"ps-main-menu\">", "</nav>", [_c('render-list', {
    attrs: {
      "list": _vm.mainMenu,
      "className": "menu",
      "product": _vm.product
    }
  })], 1)]), _vm._ssrNode(" <div class=\"ps-navigation__right\">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/HeaderV13.vue?vue&type=template&id=5cacffdd&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV13.vue?vue&type=script&lang=js&









/* harmony default export */ var HeaderV13vue_type_script_lang_js_ = ({
  components: {
    Notification: Notification["a" /* default */],
    RenderList: RenderList["a" /* default */],
    LanguageCurrency: LanguageCurrency["a" /* default */],
    FormSearch: FormSearch["a" /* default */],
    LoginModal: LoginModal["a" /* default */],
    CartMini: CartMini["a" /* default */]
  },
  data() {
    return {
      mainMenu: menu["a" /* mainMenu */],
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
// CONCATENATED MODULE: ./components/shared/headers/HeaderV13.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_HeaderV13vue_type_script_lang_js_ = (HeaderV13vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/headers/HeaderV13.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  headers_HeaderV13vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6b7b2f28"
  
)

/* harmony default export */ var HeaderV13 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV13.vue?vue&type=template&id=1901f5b4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--13 ps-header--mobile', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_c('notification'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-header__left\"><ul class=\"ps-header__icons\"><li><a href=\"#\" class=\"ps-header__item open-search\"><i class=\"fa fa-search\"></i></a></li></ul></div> "), _vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo-green.png",
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
  }, [_vm._v(_vm._s(_vm.productCartQuantity))])])], 1)])])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV13.vue?vue&type=template&id=1901f5b4&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/shared/headers/modules/Notification.vue + 4 modules
var Notification = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV13.vue?vue&type=script&lang=js&


/* harmony default export */ var HeaderV13vue_type_script_lang_js_ = ({
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
      appDrawer: state => state.app.appDrawer,
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
    }
  }
});
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV13.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_HeaderV13vue_type_script_lang_js_ = (HeaderV13vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV13.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  headers_HeaderV13vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b7deab42"
  
)

/* harmony default export */ var HeaderV13 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(447);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("0b0ca47f", content, true, context)
};

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_14_vue_vue_type_style_index_0_id_5dc9f324_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_14_vue_vue_type_style_index_0_id_5dc9f324_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_14_vue_vue_type_style_index_0_id_5dc9f324_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_14_vue_vue_type_style_index_0_id_5dc9f324_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_14_vue_vue_type_style_index_0_id_5dc9f324_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--space-unit:1em;--space-xxxxs:calc(var(--space-unit)*0.09);--space-xxxs:calc(var(--space-unit)*0.146);--space-xxs:calc(var(--space-unit)*0.236);--space-xs:calc(var(--space-unit)*0.382);--space-sm:calc(var(--space-unit)*0.618);--space-md:calc(var(--space-unit)*1);--space-lg:calc(var(--space-unit)*1.618);--space-xl:calc(var(--space-unit)*2.618);--space-xxl:calc(var(--space-unit)*4.236);--space-xxxl:calc(var(--space-unit)*6.854);--space-xxxxl:calc(var(--space-unit)*11.08);--component-padding:var(--space-xxxl)}.ps-home--14 .ps-section--banner{margin-left:-15px;margin-right:-15px;padding-bottom:30px}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__item{background-color:#00a198}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__badge{color:#333}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__sale{background-color:#fd8d27;color:#fff;transform:translate(20%,-65%);position:absolute;top:50%;left:100%;width:90px;height:90px;border-radius:50%;display:inline-flex;justify-content:center;align-items:center}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__content{transform:translate(0);top:0;padding:40px}.ps-home--14 .ps-section--banner .ps-banner{height:auto;min-height:300px}.ps-home--14 .ps-section--banner .ps-banner .ps-banner__imagebg{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.ps-home--14 .ps-section--banner .ps-banner .ps-banner__content{padding:80px 40px;height:auto;text-align:left;position:relative;z-index:1}.ps-home--14 .ps-section--banner .ps-banner .ps-banner__price del{color:#fff}.ps-home--14 .ps-promo--home{padding-bottom:50px}.ps-home--14 .ps-promo--home .ps-promo__btn{display:none}.ps-home--14 .ps-promo--home .ps-promo__meta{margin-bottom:0}.ps-home--14 .ps-promo--home .ps-promo__title{color:#333}.ps-home--14 .ps-section--featured{padding:30px 0 80px}.ps-home--14 .ps-product--standard .ps-product__del,.ps-home--14 .ps-product--standard .ps-product__footer,.ps-home--14 .ps-product--standard .ps-product__footer span,.ps-home--14 .ps-product--standard .ps-product__title,.ps-home--14 .ps-section--featured .ps-section__title{color:#333}.ps-home--14 .ps-product--standard .ps-product__percent{background-color:#333}.ps-home--14 .ps-product--standard .ps-product__price{color:#333}.ps-home--14 .ps-product--standard .ps-product__price.sale{color:#fd8d27}.ps-home--14 .ps-section--deals .ps-section__title{color:#333}.ps-home--14 .ps-section--latest{margin:30px 0 50px}.ps-home--14 .ps-section--latest .ps-section__title{color:#333}.ps-home--14 .swiper-pagination .swiper-pagination-bullet-active{background-color:#333}.ps-home--14 .ps-swiper__nav div:hover{background-color:#333!important}.ps-home--14 .ps-home__block{padding:30px 0 80px}.ps-home--14 .ps-home__block .ps-section--newsletter{background-color:#e5f5f4;background-image:none;padding:30px 15px;border-radius:4px}.ps-home--14 .ps-home__block .ps-section--newsletter .ps-section__title{color:#333;text-align:left;font-size:20px;line-height:30px;margin-bottom:15px}.ps-home--14 .ps-home__block .ps-section--newsletter .ps-section__text{font-size:14px;margin-bottom:20px;color:#333}.ps-home--14 .ps-home__block .ps-section--newsletter .ps-form__control{max-width:100%}.ps-home--14 .ps-home__block .ps-blog--latset{margin-bottom:30px}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__badge{display:none}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__content{position:absolute;top:20px;left:20px;background-color:#fff;width:88%;padding:20px;border-radius:4px;display:flex;flex-direction:column-reverse}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__author,.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__date{color:#333}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__meta{margin-bottom:0}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__title{font-size:18px;color:#333;margin-bottom:10px}.ps-home--14 .ps-product--type,.ps-home--14 .ps-section--deals{padding:30px 0 50px}@media(min-width:768px){.ps-home--14 .ps-section--banner{margin-left:0;margin-right:0;padding-bottom:23px}.ps-home--14 .ps-section--banner .ps-banner{min-height:280px!important;border-radius:4px;overflow:hidden}.ps-home--14 .ps-section--banner .ps-banner .ps-banner__content{width:80%;flex:0 0 80%;padding:30px 40px}.ps-home--14 .ps-section--banner .ps-promo{height:100%;border-radius:4px;overflow:hidden}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__content{padding:20px}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__sale{left:70%}.ps-home--14 .ps-promo--horizontal{padding-top:30px}.ps-home--14 .ps-promo--horizontal .ps-promo__meta{display:flex}.ps-home--14 .ps-promo--horizontal .ps-promo__del{margin-bottom:0;margin-left:10px;font-size:14px;line-height:18px}.ps-home--14 .ps-promo--horizontal .ps-promo__price{font-size:16px;line-height:20px}.ps-home--14 .ps-promo--horizontal .ps-promo__content{padding:20px}.ps-home--14 .ps-home__block .ps-blog--latset{height:100%;margin-bottom:0}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__thumbnail,.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__thumbnail a,.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__thumbnail img{height:100%}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__content{width:70%}}@media(min-width:992px){.ps-home--14 .ps-section--banner{padding-bottom:30px}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__sale{font-size:25px}.ps-home--14 .ps-section--banner .ps-banner .ps-banner__content{padding:60px 40px}.ps-home--14 .col-lg-2dot4{flex:0 0 20%;max-width:20%}.ps-home--14 .ps-home__block .ps-section--newsletter{height:100%;display:flex;flex-direction:column;justify-content:center}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__content{width:50%}}@media(min-width:1280px){.ps-home--14 .ps-home__block .ps-section--newsletter{padding:60px 40px}.ps-home--14 .ps-home__block .ps-section--newsletter .ps-section__title{font-size:30px;line-height:40px}.ps-home--14 .ps-home__block .ps-section--newsletter .ps-section__text{font-size:16px}.ps-home--14 .ps-home__block .ps-blog--latset .ps-blog__content{padding:40px}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__name{font-size:30px}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__content{padding:40px}.ps-home--14 .ps-section--banner .ps-promo .ps-promo__sale{left:100%;top:60%}.ps-home--14 .ps-section--banner .ps-banner .ps-banner__title{font-size:50px;line-height:60px}.ps-home--14 .ps-section--banner .ps-banner .ps-banner__content{padding:80px 60px}.ps-home--14 .ps-section--banner .ps-banner .ps-banner__desc{font-size:22px}.ps-home--14 .ps-promo--horizontal .ps-promo__name{font-size:20px}.ps-home--14 .ps-promo--horizontal .ps-promo__price{font-size:18px}.ps-home--14 .ps-promo--horizontal .ps-promo__del{font-size:16px}.ps-home--14 .ps-promo--horizontal .ps-promo__content{padding:40px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(282);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-14.vue?vue&type=template&id=5dc9f324&


var home_14vue_type_template_id_5dc9f324_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VMain["a" /* default */], {
    staticClass: "ps-page"
  }, [_c('header-v13'), _vm._v(" "), _c('header-mobile'), _vm._v(" "), _c('div', {
    staticClass: "ps-home ps-home--14"
  }, [_c('div', {
    staticClass: "ps-home__content"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('section', {
    staticClass: "ps-section--banner"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-sm-8"
  }, [_c('div', {
    staticClass: "ps-banner"
  }, [_c('img', {
    staticClass: "ps-banner__imagebg",
    attrs: {
      "src": "/img/promotion/bg-banner18.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-banner__block"
  }, [_c('div', {
    staticClass: "ps-banner__content"
  }, [_c('h2', {
    staticClass: "ps-banner__title text-white"
  }, [_vm._v("Focused"), _c('br'), _vm._v("by Fredi")]), _vm._v(" "), _c('div', {
    staticClass: "ps-banner__desc text-white"
  }, [_vm._v("Only in this week. Don’t misss!")]), _vm._v(" "), _c('div', {
    staticClass: "ps-banner__price"
  }, [_c('span', {
    staticClass: "text-warning"
  }, [_vm._v("$15.99")]), _vm._v(" "), _c('del', [_vm._v("$29.99")])]), _c('a', {
    staticClass: "ps-banner__shop bg-warning",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Add to cart")])]), _vm._v(" "), _c('div', {
    staticClass: "ps-banner__thumnail"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-sm-4"
  }, [_c('div', {
    staticClass: "ps-promo"
  }, [_c('div', {
    staticClass: "ps-promo__item"
  }, [_c('img', {
    staticClass: "ps-promo__banner",
    attrs: {
      "src": "/img/promotion/bg-banner19.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-promo__content"
  }, [_c('span', {
    staticClass: "ps-promo__badge bg-white"
  }, [_vm._v("New")]), _vm._v(" "), _c('h4', {
    staticClass: "ps-promo__name text-white"
  }, [_vm._v("Power Effect "), _c('br'), _vm._v("Pro Series")]), _vm._v(" "), _c('div', {
    staticClass: "ps-promo__sale"
  }, [_vm._v("-30%")]), _vm._v(" "), _c('div', {
    staticClass: "ps-promo__image"
  }, [_c('img', {
    attrs: {
      "src": "/img/icon/icon9.png",
      "alt": ""
    }
  })]), _c('a', {
    staticClass: "ps-promo__btn btn-green",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Shop now")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "ps-promo ps-promo--home"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.promoTop, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-12 col-sm-4"
    }, [_c('promo-item', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0)])]), _vm._v(" "), _c('product-type'), _vm._v(" "), _c('featured-product', {
    attrs: {
      "title": "Latest products",
      "dataList": _vm.latestProduct
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-promo ps-promo--home"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h3', {
    staticClass: "ps-promo__title"
  }, [_vm._v("This week deals")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l(_vm.promoCenter, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-12 col-sm-4"
    }, [_c('promo-item', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "row ps-promo--horizontal"
  }, _vm._l(_vm.promoBottom, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-12 col-sm-3"
    }, [_c('promo-item', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0)])]), _vm._v(" "), _c('best-deals-product-carousel', {
    attrs: {
      "title": "Best Deals of the week!",
      "dataList": _vm.bestDealProduct
    }
  }), _vm._v(" "), _c('latest-product-carousel', {
    attrs: {
      "title": "Bestsellers",
      "dataList": _vm.bestsellerProduct
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-home__block"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-sm-6"
  }, [_c('post-latset', {
    attrs: {
      "item": _vm.postLatset
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-sm-6"
  }, [_c('section', {
    staticClass: "ps-section--newsletter"
  }, [_c('h3', {
    staticClass: "ps-section__title"
  }, [_vm._v("Join our newsletter and get "), _c('br'), _vm._v("$20 discount for your first order")]), _vm._v(" "), _c('p', {
    staticClass: "ps-section__text"
  }, [_vm._v("Only for the first order.")]), _vm._v(" "), _c('div', {
    staticClass: "ps-section__content"
  }, [_c('form-subscribe', {
    on: {
      "handleSubscribe": _vm.handleSubscribe
    }
  })], 1)])])])])])], 1)]), _vm._v(" "), _c('footer-v10')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/homepage/home-14.vue?vue&type=template&id=5dc9f324&

// EXTERNAL MODULE: ./components/shared/headers/HeaderV13.vue + 4 modules
var HeaderV13 = __webpack_require__(386);

// EXTERNAL MODULE: ./components/shared/mobile/headers/HeaderV13.vue + 4 modules
var headers_HeaderV13 = __webpack_require__(387);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV10.vue?vue&type=template&id=7392bf6a&
var FooterV10vue_type_template_id_7392bf6a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "ps-footer ps-footer--13 ps-footer--14"
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
var FooterV10vue_type_template_id_7392bf6a_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/FooterV10.vue?vue&type=template&id=7392bf6a&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV10.vue?vue&type=script&lang=js&






/* harmony default export */ var FooterV10vue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/shared/footers/FooterV10.vue?vue&type=script&lang=js&
 /* harmony default export */ var footers_FooterV10vue_type_script_lang_js_ = (FooterV10vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/FooterV10.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footers_FooterV10vue_type_script_lang_js_,
  FooterV10vue_type_template_id_7392bf6a_render,
  FooterV10vue_type_template_id_7392bf6a_staticRenderFns,
  false,
  null,
  null,
  "8037cdee"
  
)

/* harmony default export */ var FooterV10 = (component.exports);
// EXTERNAL MODULE: ./components/elements/commons/PromoItem.vue + 4 modules
var PromoItem = __webpack_require__(94);

// EXTERNAL MODULE: ./static/data/banners.json
var banners = __webpack_require__(347);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/ProductType.vue?vue&type=template&id=037fe09a&
var ProductTypevue_type_template_id_037fe09a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-product--type"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">Popular categories</h3> "), _vm._ssrNode("<div class=\"ps-category__content\">", "</div>", _vm._l(_vm.dataList, function (item, index) {
    return _c('nuxt-link', {
      key: index,
      staticClass: "ps-category__item",
      attrs: {
        "to": "/shop"
      }
    }, [_c('img', {
      staticClass: "ps-category__icon",
      attrs: {
        "src": item.image,
        "alt": ""
      }
    }), _vm._v(" "), _c('h6', {
      staticClass: "ps-category__name"
    }, [_vm._v(_vm._s(item.text))])]);
  }), 1)], 2)]);
};
var ProductTypevue_type_template_id_037fe09a_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/ProductType.vue?vue&type=template&id=037fe09a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/ProductType.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductTypevue_type_script_lang_js_ = ({
  data() {
    return {
      dataList: [{
        image: "/img/icon/icon13.png",
        text: "Creams"
      }, {
        image: "/img/icon/icon14.png",
        text: "Pills"
      }, {
        image: "/img/icon/icon15.png",
        text: "Herbs"
      }, {
        image: "/img/icon/icon16.png",
        text: "Capsules"
      }, {
        image: "/img/icon/icon17.png",
        text: "Prescription"
      }, {
        image: "/img/icon/icon18.png",
        text: "Drops"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/ProductType.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_ProductTypevue_type_script_lang_js_ = (ProductTypevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/homepage/ProductType.vue





/* normalize component */

var ProductType_component = Object(componentNormalizer["a" /* default */])(
  homepage_ProductTypevue_type_script_lang_js_,
  ProductTypevue_type_template_id_037fe09a_render,
  ProductTypevue_type_template_id_037fe09a_staticRenderFns,
  false,
  null,
  null,
  "5d2393b6"
  
)

/* harmony default export */ var ProductType = (ProductType_component.exports);
// EXTERNAL MODULE: ./components/partials/homepage/FeaturedProduct.vue + 4 modules
var FeaturedProduct = __webpack_require__(368);

// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(14);

// EXTERNAL MODULE: ./components/partials/homepage/BestDealsProductCarousel.vue + 4 modules
var BestDealsProductCarousel = __webpack_require__(380);

// EXTERNAL MODULE: ./components/partials/homepage/LatestProductCarousel.vue + 4 modules
var LatestProductCarousel = __webpack_require__(90);

// EXTERNAL MODULE: ./components/elements/commons/PostLatset.vue + 4 modules
var PostLatset = __webpack_require__(335);

// EXTERNAL MODULE: ./repositories/PostRepository.js
var PostRepository = __webpack_require__(309);

// EXTERNAL MODULE: ./components/elements/commons/FormSubscribe.vue + 4 modules
var FormSubscribe = __webpack_require__(308);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-14.vue?vue&type=script&lang=js&













/* harmony default export */ var home_14vue_type_script_lang_js_ = ({
  layout: 'home-default',
  components: {
    HeaderV13: HeaderV13["a" /* default */],
    HeaderMobile: headers_HeaderV13["a" /* default */],
    FooterV10: FooterV10,
    PromoItem: PromoItem["a" /* default */],
    ProductType: ProductType,
    FeaturedProduct: FeaturedProduct["a" /* default */],
    BestDealsProductCarousel: BestDealsProductCarousel["a" /* default */],
    LatestProductCarousel: LatestProductCarousel["a" /* default */],
    PostLatset: PostLatset["a" /* default */],
    FormSubscribe: FormSubscribe["a" /* default */]
  },
  data() {
    return {
      promoTop: banners["f" /* home14Top */],
      latestProduct: [],
      promoCenter: banners["g" /* home14center */],
      promoBottom: banners["e" /* home14Bottom */],
      bestDealProduct: [],
      bestsellerProduct: [],
      postLatset: null
    };
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    const params = {
      _limit: 10,
      _start: 44
    };
    this.latestProduct = await Object(ProductRepository["e" /* getProducts */])(params);
    const param1 = {
      _limit: 10,
      _start: 50
    };
    this.bestDealProduct = await Object(ProductRepository["e" /* getProducts */])(param1);
    const param2 = {
      _limit: 10,
      _start: 48
    };
    this.bestsellerProduct = await Object(ProductRepository["e" /* getProducts */])(param2);
    this.postLatset = await Object(PostRepository["a" /* getPostById */])(2);
    this.$store.commit('app/setLoading', false);
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
// CONCATENATED MODULE: ./pages/homepage/home-14.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home_14vue_type_script_lang_js_ = (home_14vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/homepage/home-14.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(446)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var home_14_component = Object(componentNormalizer["a" /* default */])(
  homepage_home_14vue_type_script_lang_js_,
  home_14vue_type_template_id_5dc9f324_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cf481a58"
  
)

/* harmony default export */ var home_14 = __webpack_exports__["default"] = (home_14_component.exports);

/***/ })

};;
//# sourceMappingURL=home-14.js.map