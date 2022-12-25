exports.ids = [15];
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

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/ReviewAvatarItem.vue?vue&type=template&id=06fd1ab6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-review"
  }, [_vm._ssrNode("<div class=\"ps-review__review\">", "</div>", [_c('rating-component', {
    attrs: {
      "value": _vm.item.rate
    }
  })], 1), _vm._ssrNode(" <div class=\"ps-review__text\">" + _vm._ssrEscape(_vm._s(_vm.item.text)) + "</div> " + (_vm.item.images ? "<div class=\"ps-review__thumbnail\">" + _vm._ssrList(_vm.item.images, function (val, index) {
    return "<img" + _vm._ssrAttr("src", val) + " alt>";
  }) + "</div>" : "<!---->") + " <div class=\"ps-review__author\"><div class=\"ps-review__image\"><img" + _vm._ssrAttr("src", _vm.item.avatar) + " alt></div> <span class=\"ps-review__name\">" + _vm._ssrEscape(_vm._s(_vm.item.name)) + "</span> <span class=\"ps-review__date\">" + _vm._ssrEscape(_vm._s(_vm.item.date)) + "</span></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/ReviewAvatarItem.vue?vue&type=template&id=06fd1ab6&

// EXTERNAL MODULE: ./components/elements/commons/RatingComponent.vue + 4 modules
var RatingComponent = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/ReviewAvatarItem.vue?vue&type=script&lang=js&

/* harmony default export */ var ReviewAvatarItemvue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    RatingComponent: RatingComponent["a" /* default */]
  }
});
// CONCATENATED MODULE: ./components/elements/commons/ReviewAvatarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_ReviewAvatarItemvue_type_script_lang_js_ = (ReviewAvatarItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/ReviewAvatarItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_ReviewAvatarItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6b818f43"
  
)

/* harmony default export */ var ReviewAvatarItem = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV6.vue?vue&type=template&id=46b5f797&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "ps-footer ps-footer--8"
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

// CONCATENATED MODULE: ./components/shared/footers/FooterV6.vue?vue&type=template&id=46b5f797&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/footers/FooterV6.vue?vue&type=script&lang=js&






/* harmony default export */ var FooterV6vue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/shared/footers/FooterV6.vue?vue&type=script&lang=js&
 /* harmony default export */ var footers_FooterV6vue_type_script_lang_js_ = (FooterV6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/footers/FooterV6.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footers_FooterV6vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "562a4488"
  
)

/* harmony default export */ var FooterV6 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/MaskPromo.vue?vue&type=template&id=0c12691a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-promo--mask"
  }, [_vm._ssrNode("<div" + _vm._ssrClass(null, ['ps-banner', _vm.item.class]) + ">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, ['ps-banner__block', _vm.reverse ? 'row-reverse' : '']) + ">", "</div>", [_vm._ssrNode("<div class=\"ps-banner__content\">", "</div>", [_vm._ssrNode("<h2 class=\"ps-banner__title\">" + _vm._s(_vm.item.title) + "</h2> " + (_vm.item.desc ? "<div class=\"ps-banner__desc\">" + _vm._s(_vm.item.desc) + "</div>" : "<!---->") + " " + (_vm.item.btnGroup ? "<div class=\"ps-banner__btn-group\">" + _vm._ssrList(_vm.item.btnGroup, function (val, index) {
    return "<div class=\"ps-banner__btn\"><img" + _vm._ssrAttr("src", val.icon) + " alt>" + _vm._ssrEscape(_vm._s(val.text) + "\n                        ") + "</div>";
  }) + "</div>" : "<!---->") + " "), _c('nuxt-link', {
    class: ['ps-banner__shop', _vm.item.shop.class],
    attrs: {
      "to": _vm.item.shop.link
    }
  }, [_vm._v(_vm._s(_vm.item.shop.text))])], 2), _vm._ssrNode(" <div class=\"ps-banner__thumnail\"><img" + _vm._ssrAttr("src", _vm.item.image) + " alt class=\"ps-banner__image\"> " + (_vm.item.persen ? "<div" + _vm._ssrClass(null, ['ps-banner__persen', _vm.item.persen.class]) + ">" + _vm._ssrEscape(_vm._s(_vm.item.persen.text)) + "</div>" : "<!---->") + "</div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/MaskPromo.vue?vue&type=template&id=0c12691a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/MaskPromo.vue?vue&type=script&lang=js&
/* harmony default export */ var MaskPromovue_type_script_lang_js_ = ({
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/MaskPromo.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_MaskPromovue_type_script_lang_js_ = (MaskPromovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/MaskPromo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_MaskPromovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d99cedf"
  
)

/* harmony default export */ var MaskPromo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/LatestReviewAvatar.vue?vue&type=template&id=4d69d2e5&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--reviews ps-reviews--3"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\"><img src=\"/img/quote-icon.png\" alt>Latest reviews</h3> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_vm._ssrNode("<ul class=\"ps-section__list\">", "</ul>", _vm._l(_vm.reviews, function (item, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('review-avatar-item', {
      attrs: {
        "item": item
      }
    })], 1);
  }), 0)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewAvatar.vue?vue&type=template&id=4d69d2e5&

// EXTERNAL MODULE: ./static/data/common.json
var common = __webpack_require__(76);

// EXTERNAL MODULE: ./components/elements/commons/ReviewAvatarItem.vue + 4 modules
var ReviewAvatarItem = __webpack_require__(400);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/LatestReviewAvatar.vue?vue&type=script&lang=js&


/* harmony default export */ var LatestReviewAvatarvue_type_script_lang_js_ = ({
  components: {
    ReviewAvatarItem: ReviewAvatarItem["a" /* default */]
  },
  data() {
    return {
      reviews: common["g" /* reviews */]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_LatestReviewAvatarvue_type_script_lang_js_ = (LatestReviewAvatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewAvatar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_LatestReviewAvatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "618946cc"
  
)

/* harmony default export */ var LatestReviewAvatar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(438);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("74dd2650", content, true, context)
};

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_10_vue_vue_type_style_index_0_id_1d47a27c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_10_vue_vue_type_style_index_0_id_1d47a27c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_10_vue_vue_type_style_index_0_id_1d47a27c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_10_vue_vue_type_style_index_0_id_1d47a27c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_10_vue_vue_type_style_index_0_id_1d47a27c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(439);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--space-unit:1em;--space-xxxxs:calc(var(--space-unit)*0.09);--space-xxxs:calc(var(--space-unit)*0.146);--space-xxs:calc(var(--space-unit)*0.236);--space-xs:calc(var(--space-unit)*0.382);--space-sm:calc(var(--space-unit)*0.618);--space-md:calc(var(--space-unit)*1);--space-lg:calc(var(--space-unit)*1.618);--space-xl:calc(var(--space-unit)*2.618);--space-xxl:calc(var(--space-unit)*4.236);--space-xxxl:calc(var(--space-unit)*6.854);--space-xxxxl:calc(var(--space-unit)*11.08);--component-padding:var(--space-xxxl)}.ps-home--10 .ps-banner--full{background-position:75%}.ps-home--10 .ps-banner--full .ps-banner__item p{color:#103178}.ps-home--10 .ps-banner--full .ps-banner__item:after{background-color:#103178;opacity:.3}.ps-home--10 .ps-banner--full .ps-banner{min-height:500px}.ps-home--10 .ps-banner--full .ps-banner .ps-banner__btn,.ps-home--10 .ps-banner--full .ps-banner .ps-banner__desc,.ps-home--10 .ps-banner--full .ps-banner .ps-banner__title{color:#fff}.ps-home--10 .ps-banner--full .ps-banner .ps-banner__btn img{filter:brightness(0) invert(1)}.ps-home--10 .ps-banner--full .ps-banner .ps-banner__shop,.ps-home--10 .ps-banner--full .ps-banner__group{position:relative;z-index:10}.ps-home--10 .ps-banner--full:after{content:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");position:absolute;bottom:-30px;left:0;width:100%;z-index:0;height:300px}.ps-home--10 .ps-promo--mask{border-top:1px solid #f0f2f5;padding:80px 0}.ps-home--10 .ps-promo--mask .ps-banner .ps-banner__persen{top:5px;bottom:auto;right:24%;transform:rotate(-25deg);width:99px;height:99px;font-size:30px;line-height:30px}.ps-home--10 .ps-promo--mask .ps-banner .ps-banner__btn{font-weight:500}.ps-home--10 .ps-promo--mask .ps-banner .ps-banner__btn,.ps-home--10 .ps-promo--mask .ps-banner .ps-banner__desc,.ps-home--10 .ps-promo--mask .ps-banner .ps-banner__title{color:#103178}.ps-home--10 .ps-section--black-style{border-bottom:1px solid #f0f2f5;padding:80px 0}.ps-home--10 .ps-section--black-style .ps-product--standard .ps-product__price,.ps-home--10 .ps-section--black-style .ps-product--standard .ps-product__title{color:#103178}.ps-home--10 .ps-section--black-style .ps-product--standard .ps-product__del{color:#9babcd}.ps-home--10 .ps-section--reviews{padding:80px 0;margin:0}.ps-home--10 .ps-section--reviews .ps-review .ps-review__date,.ps-home--10 .ps-section--reviews .ps-review .ps-review__name{color:#103178}.ps-home--10 .ps-section--newsletter{padding:80px 0}@media(min-width:768px){.ps-home--10 .ps-promo--mask .ps-banner .ps-banner__persen{right:18%}.ps-home--10 .ps-banner--full{background-position:60%}.ps-home--10 .ps-banner--full .ps-banner__group{position:absolute}.ps-home--10 .ps-banner--full .ps-banner .ps-banner__btn{color:#fd8d27}.ps-home--10 .ps-banner--full .ps-banner .ps-banner__btn img{filter:invert(60%) sepia(75%) saturate(1000%) hue-rotate(1turn) brightness(100%) contrast(100%)}.ps-home--10 .ps-banner--full .ps-banner .ps-banner__desc,.ps-home--10 .ps-banner--full .ps-banner .ps-banner__title{color:#103178}.ps-home--10 .ps-banner--full:after{height:auto}}@media(min-width:1280px){.ps-home--10 .ps-promo--mask .ps-banner .ps-banner__persen{width:133px;height:133px;font-size:45px;line-height:45px}.ps-home--10 .ps-banner--full{background-position:10% 25%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/white-gradient.378b626.png";

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(282);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-10.vue?vue&type=template&id=1d47a27c&


var home_10vue_type_template_id_1d47a27c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VMain["a" /* default */], {
    staticClass: "ps-page"
  }, [_c('header-v10'), _vm._v(" "), _c('header-mobile'), _vm._v(" "), _c('div', {
    staticClass: "ps-home ps-home--10"
  }, [_c('div', {
    staticClass: "ps-home__content"
  }, [_c('banner-single', {
    attrs: {
      "banner": _vm.banner
    }
  }), _vm._v(" "), _c('mask-promo', {
    attrs: {
      "item": _vm.promoMask[0]
    }
  }), _vm._v(" "), _c('mask-promo', {
    attrs: {
      "item": _vm.promoMask[1]
    }
  }), _vm._v(" "), _c('latest-review-avatar'), _vm._v(" "), _c('choose-style-mask', {
    attrs: {
      "products": _vm.productChoose
    }
  }), _vm._v(" "), _c('newsletter')], 1)]), _vm._v(" "), _c('footer-v6')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/homepage/home-10.vue?vue&type=template&id=1d47a27c&

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV10.vue?vue&type=template&id=18952b80&
var HeaderV10vue_type_template_id_18952b80_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--2 ps-header--10', {
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
var HeaderV10vue_type_template_id_18952b80_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/headers/HeaderV10.vue?vue&type=template&id=18952b80&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/headers/HeaderV10.vue?vue&type=script&lang=js&










/* harmony default export */ var HeaderV10vue_type_script_lang_js_ = ({
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
      mainMenu: menu["d" /* menuHome9 */],
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
// CONCATENATED MODULE: ./components/shared/headers/HeaderV10.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_HeaderV10vue_type_script_lang_js_ = (HeaderV10vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/shared/headers/HeaderV10.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  headers_HeaderV10vue_type_script_lang_js_,
  HeaderV10vue_type_template_id_18952b80_render,
  HeaderV10vue_type_template_id_18952b80_staticRenderFns,
  false,
  null,
  null,
  "6b50e8a5"
  
)

/* harmony default export */ var HeaderV10 = (component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV10.vue?vue&type=template&id=0f031362&
var HeaderV10vue_type_template_id_0f031362_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    class: ['ps-header ps-header--10 ps-header--mobile', {
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
var HeaderV10vue_type_template_id_0f031362_staticRenderFns = [];

// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV10.vue?vue&type=template&id=0f031362&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/shared/mobile/headers/HeaderV10.vue?vue&type=script&lang=js&


/* harmony default export */ var mobile_headers_HeaderV10vue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV10.vue?vue&type=script&lang=js&
 /* harmony default export */ var shared_mobile_headers_HeaderV10vue_type_script_lang_js_ = (mobile_headers_HeaderV10vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/shared/mobile/headers/HeaderV10.vue





/* normalize component */

var HeaderV10_component = Object(componentNormalizer["a" /* default */])(
  shared_mobile_headers_HeaderV10vue_type_script_lang_js_,
  HeaderV10vue_type_template_id_0f031362_render,
  HeaderV10vue_type_template_id_0f031362_staticRenderFns,
  false,
  null,
  null,
  "b8333848"
  
)

/* harmony default export */ var headers_HeaderV10 = (HeaderV10_component.exports);
// EXTERNAL MODULE: ./components/shared/footers/FooterV6.vue + 4 modules
var FooterV6 = __webpack_require__(407);

// EXTERNAL MODULE: ./components/partials/homepage/MaskPromo.vue + 4 modules
var MaskPromo = __webpack_require__(408);

// EXTERNAL MODULE: ./components/partials/homepage/LatestReviewAvatar.vue + 4 modules
var LatestReviewAvatar = __webpack_require__(409);

// EXTERNAL MODULE: ./components/partials/homepage/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(362);

// EXTERNAL MODULE: ./components/partials/homepage/ChooseStyleMask.vue + 4 modules
var ChooseStyleMask = __webpack_require__(393);

// EXTERNAL MODULE: ./components/elements/commons/BannerSingle.vue + 4 modules
var BannerSingle = __webpack_require__(394);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home-10.vue?vue&type=script&lang=js&









/* harmony default export */ var home_10vue_type_script_lang_js_ = ({
  layout: 'home-default',
  components: {
    HeaderV10: HeaderV10,
    HeaderMobile: headers_HeaderV10,
    FooterV6: FooterV6["a" /* default */],
    MaskPromo: MaskPromo["a" /* default */],
    LatestReviewAvatar: LatestReviewAvatar["a" /* default */],
    Newsletter: Newsletter["a" /* default */],
    ChooseStyleMask: ChooseStyleMask["a" /* default */],
    BannerSingle: BannerSingle["a" /* default */]
  },
  data() {
    return {
      promoMask: [{
        title: 'The best quality <br>masks at the best price',
        image: '/img/promotion/face-masks.jpg',
        btnGroup: [{
          icon: '/img/icon/virus.svg',
          text: 'Up to 5 users simultaneously'
        }, {
          icon: '/img/icon/ribbon.svg',
          text: 'Has HEALTH certificate'
        }],
        shop: {
          text: 'Shop now',
          class: 'bg-warning',
          link: '/shop'
        },
        persen: {
          text: '-30%',
          class: 'bg-warning'
        },
        class: 'bg-white'
      }, {
        title: 'Effective & reliable <br>protection for your family',
        desc: 'Only this week 30% to 50% cheaper! <br/>Choose a color that really matches your personality',
        image: '/img/promotion/goby-unsplash-1.jpg',
        shop: {
          text: 'About',
          class: 'bg-warning',
          link: '/shop'
        },
        class: 'bg-white'
      }],
      productChoose: [],
      banner: {
        title: 'Best quality masks <br>for your daily life',
        desc: 'Now with special price -30%',
        button: [{
          icon: '/img/icon/bacterial.svg',
          text: 'Anti-Bacterial'
        }, {
          icon: '/img/icon/virus.svg',
          text: 'Anti-Virus'
        }],
        img: '/img/promotion/slide10.jpg',
        shop: {
          text: 'Select mask for you',
          class: 'bg-warning',
          link: '/shop'
        },
        group: [{
          icon: '/img/icon/certificate-navy.png',
          text: 'Health Certificate 2000 - <br />professional care'
        }, {
          icon: '/img/icon/bacteria-navy.png',
          text: 'Anti-bacterial<br />protection'
        }, {
          icon: '/img/icon/virus-navy.png',
          text: 'Anti-bacterial<br />protection'
        }]
      }
    };
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    const query = 'id=41&id=42&id=43';
    this.productChoose = await Object(ProductRepository["getListIdProduct"])(query);
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/homepage/home-10.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home_10vue_type_script_lang_js_ = (home_10vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/homepage/home-10.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(437)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var home_10_component = Object(componentNormalizer["a" /* default */])(
  homepage_home_10vue_type_script_lang_js_,
  home_10vue_type_template_id_1d47a27c_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cfb8d660"
  
)

/* harmony default export */ var home_10 = __webpack_exports__["default"] = (home_10_component.exports);

/***/ })

};;
//# sourceMappingURL=home-10.js.map