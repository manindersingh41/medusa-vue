exports.ids = [50];
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

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/PopularCategoryHorizontal.vue?vue&type=template&id=4a969818&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--category-horizontal"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\">Popular categories</h3> "), _vm._ssrNode("<div class=\"ps-category__content\">", "</div>", _vm._l(_vm.popularCategories, function (item, index) {
    return _vm._ssrNode("<div class=\"ps-category__item\">", "</div>", [_c('nuxt-link', {
      staticClass: "ps-category__link",
      attrs: {
        "to": "/shop"
      }
    }, [_c('img', {
      attrs: {
        "src": item.image,
        "alt": ""
      }
    })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-category__name\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": "/shop"
      }
    }, [_vm._v(_vm._s(item.text))])], 1)], 2);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-category__all\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/shop"
    }
  }, [_vm._v("Show all")])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/PopularCategoryHorizontal.vue?vue&type=template&id=4a969818&

// EXTERNAL MODULE: ./static/data/category.json
var category = __webpack_require__(370);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/PopularCategoryHorizontal.vue?vue&type=script&lang=js&

/* harmony default export */ var PopularCategoryHorizontalvue_type_script_lang_js_ = ({
  data() {
    return {
      popularCategories: category["c" /* popularCategories */]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/homepage/PopularCategoryHorizontal.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_PopularCategoryHorizontalvue_type_script_lang_js_ = (PopularCategoryHorizontalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/PopularCategoryHorizontal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_PopularCategoryHorizontalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f3dcfd7"
  
)

/* harmony default export */ var PopularCategoryHorizontal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/promo-category.vue?vue&type=template&id=04992ee4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-categogy--promo"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('breadcrumb', {
    attrs: {
      "dataList": _vm.breadcrumb
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-promo\">", "</div>", [_c('promo-item', {
    attrs: {
      "item": _vm.promotion
    }
  })], 1), _vm._ssrNode(" "), _c('popular-category-horizontal')], 2), _vm._ssrNode(" "), _c('best-deals-product-carousel', {
    attrs: {
      "title": "Best Deals of the week!",
      "dataList": _vm.bestDealProduct
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_c('branch', {
    attrs: {
      "branchs": _vm.branchs
    }
  })], 1), _vm._ssrNode(" "), _c('featured-product', {
    attrs: {
      "title": "Featured products",
      "dataList": _vm.featuredProduct
    }
  }), _vm._ssrNode(" "), _c('blog-latest', {
    attrs: {
      "dataList": _vm.latestPost
    }
  }), _vm._ssrNode(" "), _c('newsletter')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/shop/promo-category.vue?vue&type=template&id=04992ee4&

// EXTERNAL MODULE: ./components/elements/commons/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(77);

// EXTERNAL MODULE: ./components/elements/commons/PromoItem.vue + 4 modules
var PromoItem = __webpack_require__(94);

// EXTERNAL MODULE: ./components/partials/homepage/PopularCategoryHorizontal.vue + 4 modules
var PopularCategoryHorizontal = __webpack_require__(398);

// EXTERNAL MODULE: ./components/partials/homepage/BestDealsProductCarousel.vue + 4 modules
var BestDealsProductCarousel = __webpack_require__(380);

// EXTERNAL MODULE: ./components/elements/commons/Branch.vue + 4 modules
var Branch = __webpack_require__(99);

// EXTERNAL MODULE: ./static/data/common.json
var common = __webpack_require__(76);

// EXTERNAL MODULE: ./components/partials/homepage/FeaturedProduct.vue + 4 modules
var FeaturedProduct = __webpack_require__(368);

// EXTERNAL MODULE: ./components/partials/homepage/BlogLatest.vue + 4 modules
var BlogLatest = __webpack_require__(367);

// EXTERNAL MODULE: ./repositories/PostRepository.js
var PostRepository = __webpack_require__(309);

// EXTERNAL MODULE: ./components/partials/homepage/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(362);

// EXTERNAL MODULE: ./repositories/CollectionRepository.js
var CollectionRepository = __webpack_require__(354);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/promo-category.vue?vue&type=script&lang=js&











/* harmony default export */ var promo_categoryvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    Breadcrumb: Breadcrumb["a" /* default */],
    PromoItem: PromoItem["a" /* default */],
    PopularCategoryHorizontal: PopularCategoryHorizontal["a" /* default */],
    BestDealsProductCarousel: BestDealsProductCarousel["a" /* default */],
    Branch: Branch["a" /* default */],
    FeaturedProduct: FeaturedProduct["a" /* default */],
    BlogLatest: BlogLatest["a" /* default */],
    Newsletter: Newsletter["a" /* default */]
  },
  data() {
    return {
      breadcrumb: [{
        url: '/',
        text: 'Home'
      }, {
        url: '/shop/promo-category',
        extraClass: 'active',
        text: 'Promo Category'
      }],
      promotion: {
        banner: '/img/category/banner-promo.jpg',
        title: 'Multi-Surface <br/>Free&Clear',
        btnName: 'Add to cart',
        price: '$15.99',
        del: '$29.99',
        sale: '-25%',
        priceHorizontal: true
      },
      branchs: common["b" /* branchDefault */],
      latestPost: [],
      featuredProduct: [],
      bestDealProduct: []
    };
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    this.featuredProduct = await Object(CollectionRepository["a" /* getProductByCollection */])('featured-products');
    this.bestDealProduct = await Object(CollectionRepository["a" /* getProductByCollection */])('best-deal-of-week');
    this.latestPost = await Object(PostRepository["c" /* getPosts */])();
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/shop/promo-category.vue?vue&type=script&lang=js&
 /* harmony default export */ var shop_promo_categoryvue_type_script_lang_js_ = (promo_categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/shop/promo-category.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shop_promo_categoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "20dc6941"
  
)

/* harmony default export */ var promo_category = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=promo-category.js.map