exports.ids = [16];
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

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/Instagram.vue?vue&type=template&id=b472175e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--instagram"
  }, [_vm._ssrNode("<div class=\"container\"><h3 class=\"ps-section__title\">Follow <strong>@MYMEDI </strong>on instagram</h3> <div class=\"ps-section__content\"><div class=\"row m-0\">" + _vm._ssrList(_vm.instagram, function (item, index) {
    return "<div class=\"col-6 col-sm-4 col-md-2\"><a" + _vm._ssrAttr("href", item.link) + " target=\"_blank\" class=\"ps-image--transition\"><img" + _vm._ssrAttr("src", item.image) + " alt> <span class=\"ps-image__overlay\"><i class=\"fa fa-instagram\"></i></span></a></div>";
  }) + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/Instagram.vue?vue&type=template&id=b472175e&

// EXTERNAL MODULE: ./static/data/common.json
var common = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/Instagram.vue?vue&type=script&lang=js&

/* harmony default export */ var Instagramvue_type_script_lang_js_ = ({
  data() {
    return {
      instagram: common["e" /* instagram */]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/Instagram.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_Instagramvue_type_script_lang_js_ = (Instagramvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/Instagram.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_Instagramvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a22e18e"
  
)

/* harmony default export */ var Instagram = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/ChooseStyleMask.vue?vue&type=template&id=f8e839aa&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--black-style",
    style: {
      backgroundImage: 'url(' + _vm.bgImage + ')'
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-section__body\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">Choose your style</h3> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", _vm._l(_vm.products, function (item) {
    return _vm._ssrNode("<div class=\"ps-section__product\">", "</div>", [_c('product-standard', {
      attrs: {
        "product": item
      }
    })], 1);
  }), 0)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/ChooseStyleMask.vue?vue&type=template&id=f8e839aa&

// EXTERNAL MODULE: ./components/elements/product/ProductStandard.vue + 4 modules
var ProductStandard = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/ChooseStyleMask.vue?vue&type=script&lang=js&

/* harmony default export */ var ChooseStyleMaskvue_type_script_lang_js_ = ({
  props: {
    products: {
      type: Array,
      default: () => []
    },
    bgImage: {
      type: String,
      default: ''
    }
  },
  components: {
    ProductStandard: ProductStandard["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/ChooseStyleMask.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_ChooseStyleMaskvue_type_script_lang_js_ = (ChooseStyleMaskvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/ChooseStyleMask.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_ChooseStyleMaskvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b02b6e7c"
  
)

/* harmony default export */ var ChooseStyleMask = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/BannerSingle.vue?vue&type=template&id=1246e77e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-banner--full",
    style: {
      backgroundImage: 'url(' + _vm.banner.img + ')'
    }
  }, [_vm._ssrNode("<section class=\"ps-banner\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-banner__block\">", "</div>", [_vm._ssrNode("<div class=\"ps-banner__content\">", "</div>", [_vm._ssrNode("<h2 class=\"ps-banner__title\">" + _vm._s(_vm.banner.title) + "</h2> <div class=\"ps-banner__desc\">" + _vm._s(_vm.banner.desc) + "</div> <div class=\"ps-banner__btn-group\">" + _vm._ssrList(_vm.banner.button, function (item, index) {
    return "<div class=\"ps-banner__btn\"><img" + _vm._ssrAttr("src", item.icon) + " alt>" + _vm._ssrEscape(_vm._s(item.text) + "\n                        ") + "</div>";
  }) + "</div> "), _c('nuxt-link', {
    class: ['ps-banner__shop', _vm.banner.shop.class],
    attrs: {
      "to": _vm.banner.shop.link
    }
  }, [_vm._v(_vm._s(_vm.banner.shop.text))])], 2), _vm._ssrNode(" <div class=\"ps-banner__thumnail\"></div>")], 2), _vm._ssrNode(" " + (_vm.banner.group ? "<div class=\"ps-banner__group\">" + _vm._ssrList(_vm.banner.group, function (item, index) {
    return "<div class=\"ps-banner__item\"><img" + _vm._ssrAttr("src", item.icon) + " alt> <p>" + _vm._s(item.text) + "</p></div>";
  }) + "</div>" : "<!---->"))], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/BannerSingle.vue?vue&type=template&id=1246e77e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/BannerSingle.vue?vue&type=script&lang=js&
/* harmony default export */ var BannerSinglevue_type_script_lang_js_ = ({
  props: {
    banner: {
      type: Object,
      default: () => {}
    }
  }
});
// CONCATENATED MODULE: ./components/elements/commons/BannerSingle.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_BannerSinglevue_type_script_lang_js_ = (BannerSinglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/BannerSingle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_BannerSinglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "77202fd3"
  
)

/* harmony default export */ var BannerSingle = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(441);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("0589550a", content, true, context)
};

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_11_vue_vue_type_style_index_0_id_48d53dda_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_11_vue_vue_type_style_index_0_id_48d53dda_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_11_vue_vue_type_style_index_0_id_48d53dda_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_11_vue_vue_type_style_index_0_id_48d53dda_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_11_vue_vue_type_style_index_0_id_48d53dda_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--space-unit:1em;--space-xxxxs:calc(var(--space-unit)*0.09);--space-xxxs:calc(var(--space-unit)*0.146);--space-xxs:calc(var(--space-unit)*0.236);--space-xs:calc(var(--space-unit)*0.382);--space-sm:calc(var(--space-unit)*0.618);--space-md:calc(var(--space-unit)*1);--space-lg:calc(var(--space-unit)*1.618);--space-xl:calc(var(--space-unit)*2.618);--space-xxl:calc(var(--space-unit)*4.236);--space-xxxl:calc(var(--space-unit)*6.854);--space-xxxxl:calc(var(--space-unit)*11.08);--component-padding:var(--space-xxxl)}.ps-home--11 .ps-banner--full{background-color:#f0f0f0;background-position:0}.ps-home--11 .ps-banner--full .ps-banner{min-height:400px}.ps-home--11 .ps-section--black-style{padding:80px 0}.ps-home--11 .ps-section--black-style .ps-section__body{border:3px solid #fd8d27;border-radius:4px;padding:50px 0 10px}.ps-home--11 .ps-section--black-style .ps-product--standard .ps-product__price,.ps-home--11 .ps-section--black-style .ps-product--standard .ps-product__title{color:#103178}.ps-home--11 .ps-section--black-style .ps-product--standard .ps-product__del{color:#9babcd}.ps-home--11 .ps-section--instagram{padding:0 0 50px}.ps-home--11 .ps-section--newsletter{padding:30px 0 80px}.ps-home--11 .ps-promo--section{padding-top:80px}@media(min-width:768px){.ps-home--11 .ps-banner--full{background-position:10%;height:calc(100vh - 36px)}.ps-home--11 .ps-banner--full .ps-banner .ps-banner__title{font-size:60px;line-height:70px}.ps-home--11 .ps-banner--full .ps-banner .ps-banner__content{flex:0 0 60%;width:60%}}@media(min-width:1280px){.ps-home--11 .ps-banner--full{background-position:50%}.ps-home--11 .ps-banner--full .ps-banner .ps-banner__title{font-size:70px;line-height:84px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(282);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-11.vue?vue&type=template&id=48d53dda&


var home_11vue_type_template_id_48d53dda_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VMain["a" /* default */], {
    staticClass: "ps-page"
  }, [_c('header-v11'), _vm._v(" "), _c('header-mobile'), _vm._v(" "), _c('div', {
    staticClass: "ps-home ps-home--11"
  }, [_c('div', {
    staticClass: "ps-home__content"
  }, [_c('banner-single', {
    attrs: {
      "banner": _vm.banner
    }
  }), _vm._v(" "), _c('category-mask-white'), _vm._v(" "), _c('section', {
    staticClass: "ps-promo--desc"
  }, [_c('banner', {
    attrs: {
      "reverse": true,
      "banner": _vm.promoDesc
    }
  })], 1), _vm._v(" "), _c('section-project'), _vm._v(" "), _c('choose-style-mask', {
    attrs: {
      "products": _vm.productChoose
    }
  }), _vm._v(" "), _c('instagram'), _vm._v(" "), _c('newsletter')], 1)]), _vm._v(" "), _c('footer-v1')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/homepage/home-11.vue?vue&type=template&id=48d53dda&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV11.vue?vue&type=template&id=1bc4c3a4&
var HeaderV11vue_type_template_id_1bc4c3a4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--2 ps-header--11', {
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
  })], 1)], 2)], 2)])], 2);
};
var HeaderV11vue_type_template_id_1bc4c3a4_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/HeaderV11.vue?vue&type=template&id=1bc4c3a4&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV11.vue?vue&type=script&lang=js&










/* harmony default export */ var HeaderV11vue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/shared/headers/HeaderV11.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_HeaderV11vue_type_script_lang_js_ = (HeaderV11vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/headers/HeaderV11.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  headers_HeaderV11vue_type_script_lang_js_,
  HeaderV11vue_type_template_id_1bc4c3a4_render,
  HeaderV11vue_type_template_id_1bc4c3a4_staticRenderFns,
  false,
  null,
  null,
  "6b5f0026"
  
)

/* harmony default export */ var HeaderV11 = (component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV11.vue?vue&type=template&id=eefe6846&
var HeaderV11vue_type_template_id_eefe6846_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--11 ps-header--mobile', {
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
  })])], 1), _vm._ssrNode(" <div class=\"ps-header__right\"><ul class=\"ps-header__icons\"><li><a href=\"#\" class=\"ps-header__item open-search\"><i class=\"fa fa-search\"></i></a></li></ul></div>")], 2)])], 2);
};
var HeaderV11vue_type_template_id_eefe6846_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV11.vue?vue&type=template&id=eefe6846&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV11.vue?vue&type=script&lang=js&


/* harmony default export */ var mobile_headers_HeaderV11vue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV11.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_mobile_headers_HeaderV11vue_type_script_lang_js_ = (mobile_headers_HeaderV11vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV11.vue





/* normalize component */

var HeaderV11_component = Object(componentNormalizer["a" /* default */])(
  shared_mobile_headers_HeaderV11vue_type_script_lang_js_,
  HeaderV11vue_type_template_id_eefe6846_render,
  HeaderV11vue_type_template_id_eefe6846_staticRenderFns,
  false,
  null,
  null,
  "b8170946"
  
)

/* harmony default export */ var headers_HeaderV11 = (HeaderV11_component.exports);
// EXTERNAL MODULE: ./components/shared/footers/FooterV1.vue + 4 modules
var FooterV1 = __webpack_require__(52);

// EXTERNAL MODULE: ./components/elements/commons/BannerSingle.vue + 4 modules
var BannerSingle = __webpack_require__(394);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/CategoryMaskWhite.vue?vue&type=template&id=71ff6d75&
var CategoryMaskWhitevue_type_template_id_71ff6d75_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--mask"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-section__content\">", "</div>", _vm._l(_vm.dataList, function (item, index) {
    return _vm._ssrNode("<div class=\"ps-section__item\">", "</div>", [_vm._ssrNode("<div class=\"ps-section__thumbnail\"><img" + _vm._ssrAttr("src", item.image) + _vm._ssrAttr("alt", item.text) + "></div> "), _vm._ssrNode("<h5 class=\"ps-section__text\">", "</h5>", [_c('nuxt-link', {
      attrs: {
        "to": "/shop"
      }
    }, [_vm._v(_vm._s(item.text))])], 1)], 2);
  }), 0)])]);
};
var CategoryMaskWhitevue_type_template_id_71ff6d75_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/CategoryMaskWhite.vue?vue&type=template&id=71ff6d75&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/CategoryMaskWhite.vue?vue&type=script&lang=js&
/* harmony default export */ var CategoryMaskWhitevue_type_script_lang_js_ = ({
  data() {
    return {
      dataList: [{
        image: '/img/products/mask1.png',
        text: 'Rubber finish'
      }, {
        image: '/img/products/mask2.png',
        text: 'Knotted fabric finish'
      }, {
        image: '/img/products/mask3.png',
        text: 'Knotted rubber finish'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/CategoryMaskWhite.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_CategoryMaskWhitevue_type_script_lang_js_ = (CategoryMaskWhitevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/homepage/CategoryMaskWhite.vue





/* normalize component */

var CategoryMaskWhite_component = Object(componentNormalizer["a" /* default */])(
  homepage_CategoryMaskWhitevue_type_script_lang_js_,
  CategoryMaskWhitevue_type_template_id_71ff6d75_render,
  CategoryMaskWhitevue_type_template_id_71ff6d75_staticRenderFns,
  false,
  null,
  null,
  "30f39eca"
  
)

/* harmony default export */ var CategoryMaskWhite = (CategoryMaskWhite_component.exports);
// EXTERNAL MODULE: ./components/elements/commons/Banner.vue + 4 modules
var Banner = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/SectionProject.vue?vue&type=template&id=3a741d74&
var SectionProjectvue_type_template_id_3a741d74_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-promo--section"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h2 class=\"ps-promo__title\">Effective &amp; reliable<br>protection for your family</h2> <p class=\"ps-promo__subtitle\">Only this week 30% to 50% cheaper! <br>Choose a color that really matches your personality</p> " + _vm._ssrList(_vm.projects, function (item, index) {
    return "<section" + _vm._ssrClass(null, ['ps-section--block-grid', item.class]) + "><div class=\"ps-section__thumbnail\"><a href=\"#\" class=\"ps-section__image\"><img" + _vm._ssrAttr("src", item.img) + " alt></a></div> <div class=\"ps-section__content\"><h3 class=\"ps-section__title\">" + _vm._s(item.title) + "</h3> <div class=\"ps-section__desc\">" + _vm._s(item.desc) + "</div> <ul class=\"ps-section__list\">" + _vm._ssrList(item.list, function (val, idx) {
      return "<li>" + _vm._ssrEscape(_vm._s(val)) + "</li>";
    }) + "</ul></div></section>";
  }) + " "), _vm._ssrNode("<div class=\"ps-promo__footer\">", "</div>", [_c('nuxt-link', {
    staticClass: "ps-btn ps-btn--warning",
    attrs: {
      "to": "/shop"
    }
  }, [_vm._v("Shop now")])], 1)], 2)]);
};
var SectionProjectvue_type_template_id_3a741d74_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/SectionProject.vue?vue&type=template&id=3a741d74&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/SectionProject.vue?vue&type=script&lang=js&
/* harmony default export */ var SectionProjectvue_type_script_lang_js_ = ({
  data() {
    return {
      projects: [{
        title: 'Health Certificate <br>2000 - professional care',
        desc: 'Just a few seconds to measure your body temperature. <br>Up to 5 users! The battery lasts up to 2 years.',
        list: ['Study history up to 30 days', 'Up to 5 users simultaneously', 'Has HEALTH certificate'],
        img: '/img/promotion/goby-tD3GaS9ysF4-unsplash.jpg',
        class: ''
      }, {
        title: 'The possibility of testing when <br>applied to the forehead. Ready to <br>work in 30 seconds.',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form,',
        list: ['Injected humour, or randomised', 'Words which don\'t look even', 'Slightly believable.'],
        img: '/img/promotion/goby-tD3GaS9ysF4-unsplash2.jpg',
        class: 'row-reverse'
      }, {
        title: 'Specially adapted the meter <br>so it can be used.',
        desc: 'Just a few seconds to measure your body temperature. <br>Up to 5 users! The battery lasts up to 2 years.',
        list: ['Injected humour, or randomised', 'Words which don\'t look even', 'Slightly believable.'],
        img: '/img/promotion/goby-tD3GaS9ysF4-unsplash3.jpg',
        class: ''
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/SectionProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_SectionProjectvue_type_script_lang_js_ = (SectionProjectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/homepage/SectionProject.vue





/* normalize component */

var SectionProject_component = Object(componentNormalizer["a" /* default */])(
  homepage_SectionProjectvue_type_script_lang_js_,
  SectionProjectvue_type_template_id_3a741d74_render,
  SectionProjectvue_type_template_id_3a741d74_staticRenderFns,
  false,
  null,
  null,
  "006b5b48"
  
)

/* harmony default export */ var SectionProject = (SectionProject_component.exports);
// EXTERNAL MODULE: ./components/partials/homepage/ChooseStyleMask.vue + 4 modules
var ChooseStyleMask = __webpack_require__(393);

// EXTERNAL MODULE: ./components/partials/homepage/Instagram.vue + 4 modules
var Instagram = __webpack_require__(379);

// EXTERNAL MODULE: ./components/partials/homepage/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(362);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-11.vue?vue&type=script&lang=js&











/* harmony default export */ var home_11vue_type_script_lang_js_ = ({
  layout: 'home-default',
  components: {
    HeaderV11: HeaderV11,
    HeaderMobile: headers_HeaderV11,
    FooterV1: FooterV1["a" /* default */],
    BannerSingle: BannerSingle["a" /* default */],
    CategoryMaskWhite: CategoryMaskWhite,
    Banner: Banner["a" /* default */],
    SectionProject: SectionProject,
    ChooseStyleMask: ChooseStyleMask["a" /* default */],
    Instagram: Instagram["a" /* default */],
    Newsletter: Newsletter["a" /* default */]
  },
  data() {
    return {
      banner: {
        title: 'Antibacterial<br>Medical Mask',
        desc: 'Just a few seconds to measure <br>your body temperature.',
        button: [{
          icon: '/img/icon/bacterial.svg',
          text: 'Anti-Bacterial'
        }, {
          icon: '/img/icon/virus.svg',
          text: 'Anti-Virus'
        }],
        img: '/img/promotion/slide11.png',
        shop: {
          text: 'Shop now',
          class: 'bg-warning',
          link: '/shop'
        }
      },
      promoDesc: {
        title: 'Only this week 30% to <br>50% cheaper! <br>Choose a color that really<br>matches your personality',
        desc: 'The brush handle fits perfectly in the hand, is slim and beautifully made.',
        button: [{
          icon: '/img/icon/certificate-ribbon.png',
          text: 'Health Certificate 2000 - professional care'
        }, {
          icon: '/img/icon/paramedic-sign.png',
          text: 'Sonic cleaningand whitening power'
        }, {
          icon: '/img/icon/heart-healthcare.png',
          text: '3 types of cleaning tips'
        }],
        img: '/img/promotion/promo11.png'
      },
      productChoose: []
    };
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    const query = 'id=41&id=42&id=43';
    this.productChoose = await Object(ProductRepository["getListIdProduct"])(query);
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/homepage/home-11.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home_11vue_type_script_lang_js_ = (home_11vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/homepage/home-11.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(440)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var home_11_component = Object(componentNormalizer["a" /* default */])(
  homepage_home_11vue_type_script_lang_js_,
  home_11vue_type_template_id_48d53dda_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cf9ca75e"
  
)

/* harmony default export */ var home_11 = __webpack_exports__["default"] = (home_11_component.exports);

/***/ })

};;
//# sourceMappingURL=home-11.js.map