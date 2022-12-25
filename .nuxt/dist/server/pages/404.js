exports.ids = [3];
exports.modules = {

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js
var VMain = __webpack_require__(282);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/404.vue?vue&type=template&id=7fee5c72&lang=html&



var _404vue_type_template_id_7fee5c72_lang_html_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('client-only', [_c(VApp["a" /* default */], [_c(VMain["a" /* default */], {
    staticClass: "ps-page"
  }, [_c('header-v1'), _vm._v(" "), _c('header-mobile'), _vm._v(" "), _c('div', {
    staticClass: "ps-page--notfound"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('breadcrumb', {
    attrs: {
      "dataList": _vm.breadcrumb
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ps-page__content"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-md-6 col-lg-5"
  }, [_c('img', {
    attrs: {
      "src": "/img/cartoon-doctor.jpg",
      "alt": "cartoon-doctor"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-md-6 col-lg-7"
  }, [_c('h1', {
    staticClass: "ps-page__name"
  }, [_vm._v("404")]), _vm._v(" "), _c('h5', [_vm._v("\n                                    This page has been probably moved\n                                    somewhere...\n                                ")]), _vm._v(" "), _c('p', [_vm._v("\n                                    Please back to homepage or check our\n                                    offer\n                                ")]), _vm._v(" "), _c('div', [_c('nuxt-link', {
    staticClass: "ps-btn ps-btn--primary",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to homepage")])], 1)])])])], 1), _vm._v(" "), _c('latest-productCarousel', {
    attrs: {
      "title": "Latest products",
      "dataList": _vm.latestProduct
    }
  })], 1), _vm._v(" "), _c('footer-v1')], 1), _vm._v(" "), _c('navigation-bottom'), _vm._v(" "), _c('mobile-drawer'), _vm._v(" "), _c('scroll-top'), _vm._v(" "), _c('language-dialog'), _vm._v(" "), _c('currency-dialog'), _vm._v(" "), _c('quick-view'), _vm._v(" "), _c('compare-dialog'), _vm._v(" "), _c('add-product-v1'), _vm._v(" "), _c('add-product-v2'), _vm._v(" "), _c('notify-dialog')], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/404.vue?vue&type=template&id=7fee5c72&lang=html&

// EXTERNAL MODULE: ./components/elements/commons/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(77);

// EXTERNAL MODULE: ./components/shared/mobile/NavigationBottom.vue + 4 modules
var NavigationBottom = __webpack_require__(31);

// EXTERNAL MODULE: ./components/shared/mobile/MobileDrawer.vue + 29 modules
var MobileDrawer = __webpack_require__(17);

// EXTERNAL MODULE: ./components/elements/commons/QuickView.vue + 4 modules
var QuickView = __webpack_require__(18);

// EXTERNAL MODULE: ./components/shared/ScrollTop.vue + 4 modules
var ScrollTop = __webpack_require__(19);

// EXTERNAL MODULE: ./components/elements/commons/LanguageDialog.vue + 4 modules
var LanguageDialog = __webpack_require__(20);

// EXTERNAL MODULE: ./components/elements/commons/CurrencyDialog.vue + 4 modules
var CurrencyDialog = __webpack_require__(21);

// EXTERNAL MODULE: ./components/elements/commons/CompareDialog.vue + 4 modules
var CompareDialog = __webpack_require__(22);

// EXTERNAL MODULE: ./components/elements/commons/AddProductV1.vue + 4 modules
var AddProductV1 = __webpack_require__(23);

// EXTERNAL MODULE: ./components/elements/commons/AddProductV2.vue + 4 modules
var AddProductV2 = __webpack_require__(24);

// EXTERNAL MODULE: ./components/elements/commons/NotifyDialog.vue + 4 modules
var NotifyDialog = __webpack_require__(25);

// EXTERNAL MODULE: ./components/shared/footers/FooterV1.vue + 4 modules
var FooterV1 = __webpack_require__(52);

// EXTERNAL MODULE: ./components/shared/headers/HeaderV1.vue + 4 modules
var HeaderV1 = __webpack_require__(55);

// EXTERNAL MODULE: ./components/shared/mobile/headers/HeaderV1.vue + 4 modules
var headers_HeaderV1 = __webpack_require__(56);

// EXTERNAL MODULE: ./components/partials/homepage/LatestProductCarousel.vue + 4 modules
var LatestProductCarousel = __webpack_require__(90);

// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/404.vue?vue&type=script&lang=js&
















/* harmony default export */ var _404vue_type_script_lang_js_ = ({
  layout: 'empty',
  head() {
    return this.pageNotFound;
  },
  components: {
    Breadcrumb: Breadcrumb["a" /* default */],
    NavigationBottom: NavigationBottom["a" /* default */],
    MobileDrawer: MobileDrawer["a" /* default */],
    QuickView: QuickView["a" /* default */],
    ScrollTop: ScrollTop["a" /* default */],
    LanguageDialog: LanguageDialog["a" /* default */],
    CurrencyDialog: CurrencyDialog["a" /* default */],
    CompareDialog: CompareDialog["a" /* default */],
    AddProductV1: AddProductV1["a" /* default */],
    AddProductV2: AddProductV2["a" /* default */],
    NotifyDialog: NotifyDialog["a" /* default */],
    FooterV1: FooterV1["a" /* default */],
    HeaderV1: HeaderV1["a" /* default */],
    HeaderMobile: headers_HeaderV1["a" /* default */],
    LatestProductCarousel: LatestProductCarousel["a" /* default */]
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      latestProduct: [],
      breadcrumb: [{
        url: '/',
        text: 'Home'
      }, {
        url: `/404`,
        extraClass: 'active',
        text: '404'
      }]
    };
  },
  created() {
    this.$store.commit('app/setLoading', true);
    this.$store.commit('app/setCurrentDrawerContent', null);
    this.$store.commit('app/setAppDrawer', false);
  },
  async mounted() {
    const params = {
      _limit: 8
    };
    this.latestProduct = await Object(ProductRepository["e" /* getProducts */])(params);
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/404.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_404vue_type_script_lang_js_ = (_404vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/404.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_404vue_type_script_lang_js_,
  _404vue_type_template_id_7fee5c72_lang_html_render,
  staticRenderFns,
  false,
  null,
  null,
  "3586e678"
  
)

/* harmony default export */ var _404 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=404.js.map