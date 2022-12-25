exports.ids = [21];
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

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/Newsletter.vue?vue&type=template&id=0225d52e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--newsletter"
  }, [_vm._ssrNode("<div class=\"container\" style=\"background-image: url('/img/newsletter-bg.jpg');\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">" + _vm._s(_vm.title) + "</h3> " + (_vm.desc ? "<p class=\"ps-section__text\">" + _vm._ssrEscape(_vm._s(_vm.desc)) + "</p>" : "<!---->") + " "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_c('form-subscribe', {
    on: {
      "handleSubscribe": _vm.handleSubscribe
    }
  })], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/Newsletter.vue?vue&type=template&id=0225d52e&

// EXTERNAL MODULE: ./components/elements/commons/FormSubscribe.vue + 4 modules
var FormSubscribe = __webpack_require__(308);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/Newsletter.vue?vue&type=script&lang=js&

/* harmony default export */ var Newslettervue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'Join our newsletter and get <br>$20 discount for your first order'
    },
    desc: {
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
// CONCATENATED MODULE: ./components/partials/homepage/Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_Newslettervue_type_script_lang_js_ = (Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/Newsletter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74436b0d"
  
)

/* harmony default export */ var Newsletter = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/BlogLatest.vue?vue&type=template&id=1835ebde&


var BlogLatestvue_type_template_id_1835ebde_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--blog"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3> "), _vm._ssrNode("<div class=\"ps-section__carousel\">", "</div>", [_vm._ssrNode("<div class=\"ps-swiper\">", "</div>", [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:latestBlogSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "latestBlogSwiper"
    }],
    staticClass: "swiper"
  }, [_vm.loading ? _vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(3, function (item) {
    return _vm._ssrNode("<div class=\"swiper-slide ps-preloader\">", "</div>", [_c(VSkeletonLoader["a" /* default */], {
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _vm._ssrNode("<div class=\"swiper-wrapper\">", "</div>", _vm._l(_vm.dataList, function (item, index) {
    return _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_c('post-latset', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0)])])])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/BlogLatest.vue?vue&type=template&id=1835ebde&

// EXTERNAL MODULE: ./components/elements/commons/PostLatset.vue + 4 modules
var PostLatset = __webpack_require__(335);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/BlogLatest.vue?vue&type=script&lang=js&


/* harmony default export */ var BlogLatestvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'From the blog'
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    PostLatset: PostLatset["a" /* default */]
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: false,
        autoplay: {
          delay: 15000,
          disableOnInteraction: false
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
      }
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/BlogLatest.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_BlogLatestvue_type_script_lang_js_ = (BlogLatestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/BlogLatest.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_BlogLatestvue_type_script_lang_js_,
  BlogLatestvue_type_template_id_1835ebde_render,
  staticRenderFns,
  false,
  null,
  null,
  "4f70481d"
  
)

/* harmony default export */ var BlogLatest = __webpack_exports__["a"] = (component.exports);

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

/***/ 370:
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":[{\"name\":\"Wound Care\",\"list\":[{\"text\":\"Accessories\",\"url\":\"/shop\"},{\"text\":\"Bandages\",\"url\":\"/shop\"},{\"text\":\"Gypsum foundations\",\"url\":\"/shop\"},{\"text\":\"Patches and tapes\",\"url\":\"/shop\"},{\"text\":\"Surgical sutures\",\"url\":\"/shop\"},{\"text\":\"Swabs\",\"url\":\"/shop\"},{\"text\":\"Wound healing\",\"url\":\"/shop\"}]},{\"name\":\"Higiene\",\"list\":[{\"text\":\"Disinfectants\",\"url\":\"/shop\"},{\"text\":\"Disposable products\",\"url\":\"/shop\"},{\"text\":\"Face Masks - protective\",\"url\":\"/shop\"},{\"text\":\"Gloves\",\"url\":\"/shop\"},{\"text\":\"Protective clothing\",\"url\":\"/shop\"},{\"text\":\"Sterilization\",\"url\":\"/shop\"},{\"text\":\"Surgical foils\",\"url\":\"/shop\"}]},{\"name\":\"Laboratory\",\"list\":[{\"text\":\"Accessories\",\"url\":\"/shop\"},{\"text\":\"Devices\",\"url\":\"/shop\"},{\"text\":\"Diagnostic tests\",\"url\":\"/shop\"},{\"text\":\"Dyes\",\"url\":\"/shop\"},{\"text\":\"Pipettes\",\"url\":\"/shop\"},{\"text\":\"Tubes\",\"url\":\"/shop\"},{\"text\":\"Test-tubes\",\"url\":\"/shop\"}]},{\"name\":\"Tools\",\"list\":[{\"text\":\"Care products\",\"url\":\"/shop\"},{\"text\":\"Claws and forceps\",\"url\":\"/shop\"},{\"text\":\"Electrosurgery\",\"url\":\"/shop\"},{\"text\":\"Needles\",\"url\":\"/shop\"},{\"text\":\"Plaster tools\",\"url\":\"/shop\"},{\"text\":\"Scalpels, blades\",\"url\":\"/shop\"},{\"text\":\"Scissors\",\"url\":\"/shop\"}]},{\"name\":\"Diagnosis\",\"list\":[{\"text\":\"Accessories\",\"url\":\"/shop\"},{\"text\":\"Biopsy tools\",\"url\":\"/shop\"},{\"text\":\"Endoscopes\",\"url\":\"/shop\"},{\"text\":\"Monitoring\",\"url\":\"/shop\"},{\"text\":\"Otoscopes\",\"url\":\"/shop\"},{\"text\":\"Oxygen concentrators\",\"url\":\"/shop\"},{\"text\":\"Thermometers\",\"url\":\"/shop\"}]},{\"name\":\"Equipment\",\"list\":[{\"text\":\"Blades\",\"url\":\"/shop\"},{\"text\":\"Education\",\"url\":\"/shop\"},{\"text\":\"Germicidal lamps\",\"url\":\"/shop\"},{\"text\":\"Infusion stands\",\"url\":\"/shop\"},{\"text\":\"Lighting\",\"url\":\"/shop\"},{\"text\":\"Machines\",\"url\":\"/shop\"},{\"text\":\"Tables and assistants\",\"url\":\"/shop\"}]}],\"c\":[{\"text\":\"Bandages\",\"image\":\"/img/branch/plastercross.svg\"},{\"text\":\"Capsules\",\"image\":\"/img/branch/capsule.svg\"},{\"text\":\"Dental\",\"image\":\"/img/branch/dental.svg\"},{\"text\":\"Thermometer\",\"image\":\"/img/branch/thermometer.svg\"},{\"text\":\"Heart Health\",\"image\":\"/img/branch/heart-healt.svg\"},{\"text\":\"Micrscope\",\"image\":\"/img/branch/microscope.svg\"},{\"text\":\"Tubes\",\"image\":\"/img/branch/tube.svg\"}],\"b\":[{\"name\":\"Face masks\",\"image\":\"/img/promotion/facemask-cat.png\"},{\"name\":\"Uniforms\",\"image\":\"/img/promotion/uniforms-cat.png\"},{\"name\":\"Protective covers\",\"image\":\"/img/promotion/protectcover-cat.png\"},{\"name\":\"Dental\",\"image\":\"/img/promotion/dental-cat.png\"},{\"name\":\"Blood pressure\",\"image\":\"/img/promotion/pressure-cat.png\"},{\"name\":\"Sugar level\",\"image\":\"/img/promotion/sugarlevel-cat.png\"}]}");

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

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/Home2Banner.vue?vue&type=template&id=5ecd7ad6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-banner--round"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-banner\">", "</div>", [_vm._ssrNode("<div class=\"ps-banner__block\">", "</div>", [_vm._ssrNode("<div class=\"ps-banner__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" <h2 class=\"ps-banner__title\">Your one and only <br>online pharmacy!</h2> <div class=\"ps-banner__btn-group\"><div class=\"ps-banner__btn\"><img src=\"/img/icon/virus.svg\" alt>Up to 5 users simultaneously</div> <div class=\"ps-banner__btn\"><img src=\"/img/icon/ribbon.svg\" alt>Has HEALTH certificate</div></div>"), _c('nuxt-link', {
    staticClass: "ps-banner__shop bg-yellow",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("About")])], 2), _vm._ssrNode(" <div class=\"ps-banner__thumnail\"><img src=\"/img/round5.png\" alt class=\"ps-banner__round\"><img src=\"/img/girl-face-mask.png\" alt class=\"ps-banner__image\"></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/Home2Banner.vue?vue&type=template&id=5ecd7ad6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/Home2Banner.vue?vue&type=script&lang=js&
/* harmony default export */ var Home2Bannervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/partials/homepage/Home2Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_Home2Bannervue_type_script_lang_js_ = (Home2Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/Home2Banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_Home2Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "462a6a9b"
  
)

/* harmony default export */ var Home2Banner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(451);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("6551a2a2", content, true, context)
};

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_2_vue_vue_type_style_index_0_id_324ff839_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(427);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_2_vue_vue_type_style_index_0_id_324ff839_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_2_vue_vue_type_style_index_0_id_324ff839_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_2_vue_vue_type_style_index_0_id_324ff839_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_2_vue_vue_type_style_index_0_id_324ff839_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ps-home--2 .ps-home__content{padding-top:0}.ps-home--2 .ps-promo{padding:30px 0 50px}.ps-home--2 .ps-section--latest{margin-bottom:50px}.ps-home--2 .ps-section--deals,.ps-home--2 .ps-section--featured{padding:30px 0 50px}.ps-home--2 .ps-section--newsletter{padding:30px 0 80px}.ps-home--2 .ps-section--categories{padding:30px 0 50px}.ps-home--2 .ps-banner--round{margin:30px 0 50px}.ps-home--2 .ps-banner--round .ps-banner__btn img{filter:invert(40%) sepia(50%) saturate(366%) hue-rotate(182deg) brightness(80%) contrast(89%)}.ps-home--2 .ps-section--blog{padding-bottom:50px}@media(min-width:1280px){.ps-home--2 .ps-section--banner{min-height:400px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(282);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-2.vue?vue&type=template&id=324ff839&


var home_2vue_type_template_id_324ff839_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VMain["a" /* default */], {
    staticClass: "ps-page"
  }, [_c('header-v2'), _vm._v(" "), _c('header-mobile'), _vm._v(" "), _c('div', {
    staticClass: "ps-home ps-home--2"
  }, [_c('div', {
    staticClass: "ps-home__content"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('section-banner', {
    attrs: {
      "listData": _vm.banners,
      "sectionClass": 'ps-banner--container'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-promo"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.promoTop, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-12 col-sm-6"
    }, [_c('promo-item', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0)])], 1), _vm._v(" "), _c('popular-categories'), _vm._v(" "), _c('latest-productCarousel', {
    attrs: {
      "title": "Latest products",
      "dataList": _vm.latestProduct
    }
  }), _vm._v(" "), _c('best-deals-product-carousel', {
    attrs: {
      "title": "Best Deals of the week!",
      "dataList": _vm.bestDealProduct
    }
  }), _vm._v(" "), _c('home2-banner'), _vm._v(" "), _c('div', {
    staticClass: "ps-promo"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
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
  }), 0)])]), _vm._v(" "), _c('featured-product', {
    attrs: {
      "title": "Featured products",
      "dataList": _vm.featuredProduct
    }
  }), _vm._v(" "), _c('blog-latest', {
    attrs: {
      "dataList": _vm.latestPost
    }
  }), _vm._v(" "), _c('newsletter')], 1)]), _vm._v(" "), _c('footer-v2')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/homepage/home-2.vue?vue&type=template&id=324ff839&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV2.vue?vue&type=template&id=f2d66f5c&
var FooterV2vue_type_template_id_f2d66f5c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "ps-footer ps-footer--2"
  }, [_c('footer-top', {
    attrs: {
      "container": true
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer__middle\">", "</div>", [_c('footer-category'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-6 col-sm-4\">", "</div>", [_vm._ssrNode("<div class=\"ps-footer--block\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-block__title\">" + _vm._ssrEscape(_vm._s(_vm.information.title)) + "</h5> "), _c('render-list', {
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
  })], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-md-6\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-6 col-md-4\">", "</div>", [_c('footer-address')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-sm-6 col-md-8\">", "</div>", [_c('footer-contact')], 1)], 2)])], 2)], 2), _vm._ssrNode(" "), _c('footer-bottom')], 2)], 2);
};
var FooterV2vue_type_template_id_f2d66f5c_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/footers/FooterV2.vue?vue&type=template&id=f2d66f5c&

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

// EXTERNAL MODULE: ./components/shared/footers/modules/FooterCategory.vue + 4 modules
var FooterCategory = __webpack_require__(382);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV2.vue?vue&type=script&lang=js&







/* harmony default export */ var FooterV2vue_type_script_lang_js_ = ({
  components: {
    FooterBottom: FooterBottom["a" /* default */],
    FooterTop: FooterTop["a" /* default */],
    FooterContact: FooterContact["a" /* default */],
    FooterAddress: FooterAddress["a" /* default */],
    RenderList: RenderList["a" /* default */],
    FooterCategory: FooterCategory["a" /* default */]
  },
  data() {
    return {
      information: footer["e" /* information */],
      account: footer["a" /* account */],
      store: footer["g" /* store */]
    };
  }
});
// CONCATENATED MODULE: ./components/shared/footers/FooterV2.vue?vue&type=script&lang=js&
 /* harmony default export */ var footers_FooterV2vue_type_script_lang_js_ = (FooterV2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/FooterV2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footers_FooterV2vue_type_script_lang_js_,
  FooterV2vue_type_template_id_f2d66f5c_render,
  FooterV2vue_type_template_id_f2d66f5c_staticRenderFns,
  false,
  null,
  null,
  "569b0090"
  
)

/* harmony default export */ var FooterV2 = (component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV2.vue?vue&type=template&id=cf508d08&
var HeaderV2vue_type_template_id_cf508d08_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--2', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_c('notification'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__top\">", "</div>", [_c('header-top')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
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
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__right\">", "</div>", [_vm._ssrNode("<a href=\"#\" class=\"ps-menu--sticky\"><i class=\"fa fa-bars\"></i></a> "), _vm._ssrNode("<ul class=\"ps-header__icons\">", "</ul>", [_vm._ssrNode("<li class=\"ps-header__user\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-user\"></i></a> "), _c('login-modal')], 2), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
    staticClass: "ps-header__item",
    attrs: {
      "to": "/shop/wishlist"
    }
  }, [_c('i', {
    staticClass: "fa fa-heart-o"
  }), _vm._v(" "), _c('span', {
    staticClass: "badge"
  }, [_vm._v(_vm._s(_vm.wishlistItems.length))])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"ps-header__cart\">", "</li>", [_vm._ssrNode("<a href=\"#\" class=\"active ps-header__item\"><i class=\"icon-cart-empty\"></i> <span class=\"badge\">" + _vm._ssrEscape(_vm._s(_vm.productCartQuantity)) + "</span></a> "), _c('cart-mini')], 2)], 2), _vm._ssrNode(" "), _c('form-search'), _vm._ssrNode(" <div class=\"ps-middle__text\">Need help? <strong>0020 500 - MYMEDI - 000</strong></div>")], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, ['ps-navigation', {
    'active': _vm.showNavigation
  }]) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-navigation__left\">", "</div>", [_vm._ssrNode("<nav class=\"ps-main-menu\">", "</nav>", [_c('render-list', {
    attrs: {
      "list": _vm.mainMenu,
      "className": "menu",
      "product": _vm.product
    }
  })], 1)])])])], 2);
};
var HeaderV2vue_type_template_id_cf508d08_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/HeaderV2.vue?vue&type=template&id=cf508d08&

// EXTERNAL MODULE: ./components/shared/headers/modules/Notification.vue + 4 modules
var Notification = __webpack_require__(42);

// EXTERNAL MODULE: ./static/data/menu.json
var menu = __webpack_require__(27);

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV2.vue?vue&type=script&lang=js&










/* harmony default export */ var HeaderV2vue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/shared/headers/HeaderV2.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_HeaderV2vue_type_script_lang_js_ = (HeaderV2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/headers/HeaderV2.vue





/* normalize component */

var HeaderV2_component = Object(componentNormalizer["a" /* default */])(
  headers_HeaderV2vue_type_script_lang_js_,
  HeaderV2vue_type_template_id_cf508d08_render,
  HeaderV2vue_type_template_id_cf508d08_staticRenderFns,
  false,
  null,
  null,
  "6edf4c9c"
  
)

/* harmony default export */ var HeaderV2 = (HeaderV2_component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV2.vue?vue&type=template&id=3bf4da46&
var HeaderV2vue_type_template_id_3bf4da46_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--2 ps-header--mobile', {
      'ps-header--sticky': _vm.sticky
    }]
  }, [_c('notification'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__middle\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/mobile-logo.png",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-header__right\">", "</div>", [_c('language-currency')], 1), _vm._ssrNode(" "), _c('form-search')], 2)])], 2);
};
var HeaderV2vue_type_template_id_3bf4da46_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV2.vue?vue&type=template&id=3bf4da46&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV2.vue?vue&type=script&lang=js&




/* harmony default export */ var mobile_headers_HeaderV2vue_type_script_lang_js_ = ({
  components: {
    Notification: Notification["a" /* default */],
    LanguageCurrency: LanguageCurrency["a" /* default */],
    FormSearch: FormSearch["a" /* default */]
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
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV2.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_mobile_headers_HeaderV2vue_type_script_lang_js_ = (mobile_headers_HeaderV2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV2.vue





/* normalize component */

var headers_HeaderV2_component = Object(componentNormalizer["a" /* default */])(
  shared_mobile_headers_HeaderV2vue_type_script_lang_js_,
  HeaderV2vue_type_template_id_3bf4da46_render,
  HeaderV2vue_type_template_id_3bf4da46_staticRenderFns,
  false,
  null,
  null,
  "2ea20e85"
  
)

/* harmony default export */ var headers_HeaderV2 = (headers_HeaderV2_component.exports);
// EXTERNAL MODULE: ./components/partials/homepage/SectionBanner.vue + 4 modules
var SectionBanner = __webpack_require__(351);

// EXTERNAL MODULE: ./components/elements/commons/PromoItem.vue + 4 modules
var PromoItem = __webpack_require__(94);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/PopularCategories.vue?vue&type=template&id=45b98586&
var PopularCategoriesvue_type_template_id_45b98586_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--categories"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">Popular categories</h3> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-categories__list\">", "</div>", _vm._l(_vm.popularCategories, function (item, index) {
    return _vm._ssrNode("<div class=\"ps-categories__item\">", "</div>", [_c('nuxt-link', {
      staticClass: "ps-categories__link",
      attrs: {
        "to": "/shop"
      }
    }, [_c('img', {
      attrs: {
        "src": item.image,
        "alt": ""
      }
    })]), _c('nuxt-link', {
      staticClass: "ps-categories__name",
      attrs: {
        "to": "/shop"
      }
    }, [_vm._v(_vm._s(item.text))])], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"text-center\">", "</div>", [_c('nuxt-link', {
    staticClass: "ps-categories__show",
    attrs: {
      "to": "/shop"
    }
  }, [_vm._v("Show all")])], 1)], 2)], 2)]);
};
var PopularCategoriesvue_type_template_id_45b98586_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/PopularCategories.vue?vue&type=template&id=45b98586&

// EXTERNAL MODULE: ./static/data/category.json
var category = __webpack_require__(370);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/PopularCategories.vue?vue&type=script&lang=js&

/* harmony default export */ var PopularCategoriesvue_type_script_lang_js_ = ({
  data() {
    return {
      popularCategories: category["c" /* popularCategories */]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/PopularCategories.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_PopularCategoriesvue_type_script_lang_js_ = (PopularCategoriesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/homepage/PopularCategories.vue





/* normalize component */

var PopularCategories_component = Object(componentNormalizer["a" /* default */])(
  homepage_PopularCategoriesvue_type_script_lang_js_,
  PopularCategoriesvue_type_template_id_45b98586_render,
  PopularCategoriesvue_type_template_id_45b98586_staticRenderFns,
  false,
  null,
  null,
  "0762b39e"
  
)

/* harmony default export */ var PopularCategories = (PopularCategories_component.exports);
// EXTERNAL MODULE: ./components/partials/homepage/BestDealsProductCarousel.vue + 4 modules
var BestDealsProductCarousel = __webpack_require__(380);

// EXTERNAL MODULE: ./components/partials/homepage/LatestProductCarousel.vue + 4 modules
var LatestProductCarousel = __webpack_require__(90);

// EXTERNAL MODULE: ./components/partials/homepage/Home2Banner.vue + 4 modules
var Home2Banner = __webpack_require__(390);

// EXTERNAL MODULE: ./components/partials/homepage/FeaturedProduct.vue + 4 modules
var FeaturedProduct = __webpack_require__(368);

// EXTERNAL MODULE: ./components/partials/homepage/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(362);

// EXTERNAL MODULE: ./components/partials/homepage/BlogLatest.vue + 4 modules
var BlogLatest = __webpack_require__(367);

// EXTERNAL MODULE: ./repositories/CollectionRepository.js
var CollectionRepository = __webpack_require__(354);

// EXTERNAL MODULE: ./repositories/PostRepository.js
var PostRepository = __webpack_require__(309);

// EXTERNAL MODULE: ./static/data/banners.json
var banners = __webpack_require__(347);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-2.vue?vue&type=script&lang=js&
















/* harmony default export */ var home_2vue_type_script_lang_js_ = ({
  layout: 'home-default',
  components: {
    FooterV2: FooterV2,
    HeaderV2: HeaderV2,
    SectionBanner: SectionBanner["a" /* default */],
    HeaderMobile: headers_HeaderV2,
    PromoItem: PromoItem["a" /* default */],
    PopularCategories: PopularCategories,
    BestDealsProductCarousel: BestDealsProductCarousel["a" /* default */],
    LatestProductCarousel: LatestProductCarousel["a" /* default */],
    Home2Banner: Home2Banner["a" /* default */],
    FeaturedProduct: FeaturedProduct["a" /* default */],
    Newsletter: Newsletter["a" /* default */],
    BlogLatest: BlogLatest["a" /* default */]
  },
  data() {
    return {
      banners: banners["k" /* home2Banner */],
      promoTop: [{
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
      latestProduct: [],
      promoCenter: [{
        banner: '/img/promotion/bg-banner6.jpg',
        title: 'Get rid <br/>of bacteria <br/>in your home',
        btnName: 'Shop now',
        sale: '-7%',
        saleColor: 'text-primary'
      }, {
        banner: '/img/promotion/bg-banner7.jpg',
        badge: 'New',
        title: 'SuperBrush <br/>X200 Higenic <br/>ProMaster',
        btnName: 'More',
        classTitle: 'mb-20'
      }, {
        banner: '/img/promotion/bg-banner8.jpg',
        title: 'Hubble <br/>Eye <br/>Lenses',
        btnName: 'Shop now',
        sale: '-12%',
        classTitle: 'text-white',
        saleColor: 'text-yellow'
      }],
      latestPost: [],
      bestDealProduct: [],
      featuredProduct: []
    };
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    const params = {
      _limit: 8
    };
    this.latestProduct = await Object(ProductRepository["e" /* getProducts */])(params);
    this.bestDealProduct = await Object(CollectionRepository["a" /* getProductByCollection */])('best-deal-of-week');
    this.featuredProduct = await Object(CollectionRepository["a" /* getProductByCollection */])('featured-products');
    this.latestPost = await Object(PostRepository["c" /* getPosts */])();
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/homepage/home-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home_2vue_type_script_lang_js_ = (home_2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/homepage/home-2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(450)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var home_2_component = Object(componentNormalizer["a" /* default */])(
  homepage_home_2vue_type_script_lang_js_,
  home_2vue_type_template_id_324ff839_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e40ef11"
  
)

/* harmony default export */ var home_2 = __webpack_exports__["default"] = (home_2_component.exports);

/***/ })

};;
//# sourceMappingURL=home-2.js.map