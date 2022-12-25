exports.ids = [4];
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/VDialog.js
var VDialog = __webpack_require__(283);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/page/about/AboutVideo.vue?vue&type=template&id=75d2347b&



var AboutVideovue_type_template_id_75d2347b_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-about--video"
  }, [_vm._ssrNode("<div class=\"ps-banner\"><div class=\"container\"><div class=\"ps-banner__block\"><div class=\"ps-banner__content\"><h2 class=\"ps-banner__title\">\n                        Your one and only<br>online pharmacy!\n                    </h2> <div class=\"ps-banner__desc\">\n                        Only this week 30% to 50% cheaper!\n                    </div> <div class=\"ps-banner__btn-group\"><div class=\"ps-banner__btn\"><img src=\"/img/icon/virus.svg\" alt>Up to 5\n                            users simultaneously\n                        </div> <div class=\"ps-banner__btn\"><img src=\"/img/icon/ribbon.svg\" alt>Has HEALTH\n                            certificate\n                        </div></div> <a href=\"#\" class=\"ps-banner__shop bg-warning\">About</a></div> <div class=\"ps-banner__thumnail\"><img src=\"/img/about/goby-tD3GaS9ysF4-unsplash-1.jpg\" alt class=\"ps-banner__image\"> <div id=\"ps-video-gallery\"><div class=\"video\"><a href=\"#\"><div class=\"ps-banner__video\"><i class=\"fa fa-play\"></i></div></a></div></div></div></div></div></div> "), _c(VDialog["a" /* default */], {
    attrs: {
      "max-width": "1000",
      "content-class": "ps-dialog ps-dialog--video"
    },
    model: {
      value: _vm.dialog,
      callback: function ($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "ps-dialog__body"
  }, [_c('button', {
    staticClass: "ps-dialog__close",
    on: {
      "click": function ($event) {
        _vm.dialog = false;
      }
    }
  }, [_c('i', {
    staticClass: "icon-cross"
  })]), _vm._v(" "), _c('div', {
    staticClass: "ps-dialog__content"
  }, [_c('video', {
    staticClass: "ps-dialog__video",
    attrs: {
      "controls": "",
      "preload": "none",
      "poster": "/img/about/goby-tD3GaS9ysF4-unsplash-1.jpg"
    }
  }, [_c('source', {
    attrs: {
      "src": "/img/video.mp4",
      "type": "video/mp4"
    }
  }), _vm._v("\n                    Your browser does not support HTML5 video.\n                ")])])])], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/page/about/AboutVideo.vue?vue&type=template&id=75d2347b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/page/about/AboutVideo.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutVideovue_type_script_lang_js_ = ({
  data() {
    return {
      dialog: false
    };
  }
});
// CONCATENATED MODULE: ./components/partials/page/about/AboutVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_AboutVideovue_type_script_lang_js_ = (AboutVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/page/about/AboutVideo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_AboutVideovue_type_script_lang_js_,
  AboutVideovue_type_template_id_75d2347b_render,
  staticRenderFns,
  false,
  null,
  null,
  "885397fa"
  
)

/* harmony default export */ var AboutVideo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/LatestReviewsV3.vue?vue&type=template&id=34d2b438&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-section--reviews ps-reviews--2"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h3 class=\"ps-section__title\"><img src=\"/img/quote-icon.png\" alt>Latest reviews</h3> "), _vm._ssrNode("<div class=\"ps-section__content\">", "</div>", [_vm._ssrNode("<div class=\"ps-swiper\">", "</div>", [_c('div', {
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
  }), 0)]), _vm._ssrNode(" <div class=\"swiper-pagination pagination-review-1\"></div>")], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewsV3.vue?vue&type=template&id=34d2b438&

// EXTERNAL MODULE: ./static/data/common.json
var common = __webpack_require__(76);

// EXTERNAL MODULE: ./components/elements/commons/ReviewItem.vue + 4 modules
var ReviewItem = __webpack_require__(366);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/homepage/LatestReviewsV3.vue?vue&type=script&lang=js&


/* harmony default export */ var LatestReviewsV3vue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewsV3.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_LatestReviewsV3vue_type_script_lang_js_ = (LatestReviewsV3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/homepage/LatestReviewsV3.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_LatestReviewsV3vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13a1bb8d"
  
)

/* harmony default export */ var LatestReviewsV3 = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us.vue?vue&type=template&id=693ee188&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-about"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('breadcrumb', {
    attrs: {
      "dataList": _vm.breadcrumb
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-about__content\">", "</div>", [_c('home2-banner'), _vm._ssrNode(" "), _c('about-info'), _vm._ssrNode(" "), _c('about-banner'), _vm._ssrNode(" "), _c('about-project'), _vm._ssrNode(" "), _c('about-video'), _vm._ssrNode(" "), _c('latest-reviews-v3'), _vm._ssrNode(" "), _c('blog-latest', {
    attrs: {
      "dataList": _vm.latestPost
    }
  }), _vm._ssrNode(" "), _c('newsletter')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=template&id=693ee188&

// EXTERNAL MODULE: ./components/elements/commons/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(77);

// EXTERNAL MODULE: ./components/partials/page/about/AboutInfo.vue + 4 modules
var AboutInfo = __webpack_require__(384);

// EXTERNAL MODULE: ./components/partials/homepage/Home2Banner.vue + 4 modules
var Home2Banner = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/page/about/AboutBanner.vue?vue&type=template&id=5e9a6aaf&
var AboutBannervue_type_template_id_5e9a6aaf_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-about__banner",
    staticStyle: {
      "background-image": "url('/img/Mask-Group.jpg')"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"ps-banner\">", "</div>", [_vm._ssrNode("<h2 class=\"ps-banner__title\">\n                Hundreds of thousands of products at bargain prices\n            </h2> <div class=\"ps-banner__desc\">\n                Completely the needs of home medicine chest and professional\n                offices\n            </div> "), _c('nuxt-link', {
    staticClass: "ps-banner__shop",
    attrs: {
      "to": "/shop/list"
    }
  }, [_vm._v("Shop now")])], 2)])]);
};
var AboutBannervue_type_template_id_5e9a6aaf_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/page/about/AboutBanner.vue?vue&type=template&id=5e9a6aaf&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/page/about/AboutBanner.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  AboutBannervue_type_template_id_5e9a6aaf_render,
  AboutBannervue_type_template_id_5e9a6aaf_staticRenderFns,
  false,
  null,
  null,
  "36fe3158"
  
)

/* harmony default export */ var AboutBanner = (component.exports);
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/page/about/AboutProject.vue?vue&type=template&id=1d8b646c&
var AboutProjectvue_type_template_id_1d8b646c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "ps-about__project"
  }, [_vm._ssrNode("<div class=\"container\"><h2 class=\"ps-about__title\">Your home medical provider now also online</h2> " + _vm._ssrList(_vm.dataList, function (item, index) {
    return "<section" + _vm._ssrClass(null, ['ps-section--block-grid', item.extraClass]) + "><div class=\"ps-section__thumbnail\"><a href=\"#\" class=\"ps-section__image\"><img" + _vm._ssrAttr("src", item.image) + " alt></a></div> <div class=\"ps-section__content\"><h3 class=\"ps-section__title\">" + _vm._ssrEscape(_vm._s(item.title)) + "</h3> <div class=\"ps-section__subtitle\">" + _vm._ssrEscape(_vm._s(item.subtitle)) + "</div> <div class=\"ps-section__desc\">" + _vm._ssrEscape(_vm._s(item.desc)) + "</div> <ul class=\"ps-section__list\">" + _vm._ssrList(item.list, function (val, idx) {
      return "<li>" + _vm._ssrEscape(_vm._s(val)) + "</li>";
    }) + "</ul></div></section>";
  }) + "</div>")]);
};
var AboutProjectvue_type_template_id_1d8b646c_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/page/about/AboutProject.vue?vue&type=template&id=1d8b646c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/page/about/AboutProject.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutProjectvue_type_script_lang_js_ = ({
  data() {
    return {
      dataList: [{
        extraClass: '',
        image: '/img/about/about-us-1.jpg',
        title: 'Top quality products and proven suppliers with quality certificates!',
        subtitle: 'They have CEE 2020 certificate.',
        desc: 'Hundreds of thousands of products at bargain prices. Completely the needs of home medicine chest and professional offices. Effective and reliable protection for your teeth. The brush handle fits perfectly in the hand, is slim and beautifully made.',
        list: ['Study history up to 30 days', 'Up to 5 users simultaneously', 'Has HEALTH certificate']
      }, {
        extraClass: 'row-reverse',
        image: '/img/about/about-us-2.jpg',
        title: 'Many years of experience and a high level of consumer confidence',
        subtitle: 'Developed for over 30 years on the market',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
        list: ['Proin nec lectus dolor.', 'Curabitur egestas molestie lorem sed pharetra.', 'Integer volutpat efficitur tellus vel tempus.']
      }, {
        extraClass: '',
        image: '/img/about/about-us-3.jpg',
        title: 'Just a few seconds to measure your body temperature. Up to 5 users!',
        subtitle: 'The battery lasts up to 2 years.',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered altevration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
        list: ['Study history up to 30 days', 'Up to 5 users simultaneously', 'Has HEALTH certificate']
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/partials/page/about/AboutProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_AboutProjectvue_type_script_lang_js_ = (AboutProjectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/page/about/AboutProject.vue





/* normalize component */

var AboutProject_component = Object(componentNormalizer["a" /* default */])(
  about_AboutProjectvue_type_script_lang_js_,
  AboutProjectvue_type_template_id_1d8b646c_render,
  AboutProjectvue_type_template_id_1d8b646c_staticRenderFns,
  false,
  null,
  null,
  "3041e0be"
  
)

/* harmony default export */ var AboutProject = (AboutProject_component.exports);
// EXTERNAL MODULE: ./components/partials/page/about/AboutVideo.vue + 4 modules
var AboutVideo = __webpack_require__(405);

// EXTERNAL MODULE: ./components/partials/homepage/LatestReviewsV3.vue + 4 modules
var LatestReviewsV3 = __webpack_require__(406);

// EXTERNAL MODULE: ./components/partials/homepage/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(362);

// EXTERNAL MODULE: ./components/partials/homepage/BlogLatest.vue + 4 modules
var BlogLatest = __webpack_require__(367);

// EXTERNAL MODULE: ./repositories/PostRepository.js
var PostRepository = __webpack_require__(309);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about-us.vue?vue&type=script&lang=js&










/* harmony default export */ var about_usvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    Breadcrumb: Breadcrumb["a" /* default */],
    AboutInfo: AboutInfo["a" /* default */],
    Home2Banner: Home2Banner["a" /* default */],
    AboutBanner: AboutBanner,
    AboutProject: AboutProject,
    AboutVideo: AboutVideo["a" /* default */],
    LatestReviewsV3: LatestReviewsV3["a" /* default */],
    Newsletter: Newsletter["a" /* default */],
    BlogLatest: BlogLatest["a" /* default */]
  },
  data() {
    return {
      breadcrumb: [{
        url: '/',
        text: 'Home'
      }, {
        url: '/about-us',
        extraClass: 'active',
        text: 'About us'
      }],
      latestPost: []
    };
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    this.latestPost = await Object(PostRepository["c" /* getPosts */])();
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/about-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_about_usvue_type_script_lang_js_ = (about_usvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/about-us.vue





/* normalize component */

var about_us_component = Object(componentNormalizer["a" /* default */])(
  pages_about_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fd9927fc"
  
)

/* harmony default export */ var about_us = __webpack_exports__["default"] = (about_us_component.exports);

/***/ })

};;
//# sourceMappingURL=about-us.js.map