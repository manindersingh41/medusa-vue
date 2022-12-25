exports.ids = [30];
exports.modules = {

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

/***/ 404:
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":[{\"id\":1,\"image\":\"/img/blog/portfolio-4-393x300.jpg\",\"title\":\"The latest tests of popular masks in accordance with CV2s standards\",\"badge\":[{\"text\":\"Design\",\"url\":\"#\"},{\"text\":\"Management\",\"url\":\"#\"}],\"design\":true,\"management\":true},{\"id\":2,\"image\":\"/img/blog/portfolio-1-393x300.jpg\",\"title\":\"New special offer for customers who have been with us for 10 years\",\"badge\":[{\"text\":\"Management\",\"url\":\"#\"}],\"management\":true},{\"id\":3,\"image\":\"/img/blog/portfolio-5-393x300.jpg\",\"title\":\"[PDF REPORT] – Impact of wearing masks on social behavior\",\"badge\":[{\"text\":\"Fashion\",\"url\":\"#\"}],\"fashion\":true},{\"id\":4,\"image\":\"/img/blog/portfolio-6-393x300.jpg\",\"title\":\"The latest tests of popular masks in accordance with CV2s standards\",\"badge\":[{\"text\":\"Photography\",\"url\":\"#\"}],\"photography\":true},{\"id\":5,\"image\":\"/img/blog/portfolio-2-393x300.jpg\",\"title\":\"New special offer for customers who have been with us for 10 years\",\"badge\":[{\"text\":\"Design\",\"url\":\"#\"}],\"design\":true},{\"id\":6,\"image\":\"/img/blog/portfolio-3-393x300.jpg\",\"title\":\"[PDF REPORT] – Impact of wearing masks on social behavior\",\"badge\":[{\"text\":\"Photography\",\"url\":\"#\"}],\"photography\":true},{\"id\":7,\"image\":\"/img/blog/portfolio-7-393x300.jpg\",\"title\":\"The latest tests of popular masks in accordance with CV2s standards\",\"badge\":[{\"text\":\"Fashion\",\"url\":\"#\"}],\"fashion\":true},{\"id\":8,\"image\":\"/img/blog/portfolio-8-393x300.jpg\",\"title\":\"New special offer for customers who have been with us for 10 years\",\"badge\":[{\"text\":\"Management\",\"url\":\"#\"},{\"text\":\"Fashion\",\"url\":\"#\"}],\"management\":true,\"fashion\":true},{\"id\":9,\"image\":\"/img/blog/portfolio-9-393x300.jpg\",\"title\":\"The latest tests of popular masks in accordance with CV2s standards\",\"badge\":[{\"text\":\"Photography\",\"url\":\"#\"}],\"photography\":true}]}");

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/_id.vue?vue&type=template&id=13ce842e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-portfolio--detail"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('breadcrumb', {
    attrs: {
      "dataList": _vm.breadcrumb
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-6\"><div class=\"ps-portfolio__thunmnail\"><a href=\"/img/blog/portfolio-1.jpg\"><img src=\"/img/blog/portfolio-1.jpg\" alt></a><a href=\"/img/blog/portfolio-2.jpg\"><img src=\"/img/blog/portfolio-2.jpg\" alt></a><a href=\"/img/blog/portfolio-3.jpg\"><img src=\"/img/blog/portfolio-3.jpg\" alt></a></div></div> "), _vm._ssrNode("<div class=\"col-12 col-sm-6\">", "</div>", [_vm._ssrNode("<div class=\"ps-portfolio__content\">", "</div>", [_vm._ssrNode("<h2 class=\"ps-portfolio__title\">New special offer for customers who have been with us for 10 years</h2> <p class=\"ps-portfolio__subtitle\">Sed ac ligula ut leo dignissim blandit non at odio. Mauris et odio ut odio elementum fermentum. Nullam dictum diam nisl, vitae euismod erat imperdiet in. Vestibulum ac tristique tortor, non iaculis dolor.</p> <p class=\"ps-portfolio__des\">Nunc in tincidunt dui. Proin laoreet imperdiet dui et imperdiet. Nam sit amet erat nisl. Nam tristique porttitor risus, at fringilla velit. Aliquam erat volutpat.</p> <p class=\"ps-portfolio__des\">Suspendisse viverra egestas eros. Duis tempus varius diam et condimentum. Donec elementum, mi ut posuere posuere, erat dui interdum ante, nec fringilla augue odio ac felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> "), _c('review-item', {
    attrs: {
      "item": _vm.review
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-portfolio__footer\">", "</div>", _vm._l(_vm.footerLink, function (item, index) {
    return _vm._ssrNode("<div class=\"ps-portfolio__item\">", "</div>", [_vm._ssrNode("<span class=\"ps-portfolio__label\">" + _vm._ssrEscape(_vm._s(item.label)) + "</span> "), _vm._ssrNode("<span class=\"ps-portfolio__text\">", "</span>", [_vm._ssrNode(_vm._ssrEscape("\n                                " + _vm._s(item.text && item.text) + "\n                                ")), item.link ? _c('nuxt-link', {
      attrs: {
        "to": item.link
      }
    }, [_vm._v("http://nouthemes.net/html/mymedi" + _vm._s(item.link))]) : _vm._e()], 2)], 2);
  }), 0), _vm._ssrNode(" "), _c('social-icon-color')], 2)])], 2)], 2), _vm._ssrNode(" "), _c('blog-latest', {
    staticStyle: {
      "background-image": "url('/img/related-bg.jpg')"
    },
    attrs: {
      "title": "Related Projects",
      "dataList": _vm.postLatest
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/portfolio/_id.vue?vue&type=template&id=13ce842e&

// EXTERNAL MODULE: ./components/elements/commons/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(77);

// EXTERNAL MODULE: ./components/partials/homepage/BlogLatest.vue + 4 modules
var BlogLatest = __webpack_require__(367);

// EXTERNAL MODULE: ./static/data/blog.json
var blog = __webpack_require__(404);

// EXTERNAL MODULE: ./components/elements/commons/ReviewItem.vue + 4 modules
var ReviewItem = __webpack_require__(366);

// EXTERNAL MODULE: ./components/shared/SocialIconColor.vue + 2 modules
var SocialIconColor = __webpack_require__(98);

// EXTERNAL MODULE: ./repositories/PostRepository.js
var PostRepository = __webpack_require__(309);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/_id.vue?vue&type=script&lang=js&






/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    Breadcrumb: Breadcrumb["a" /* default */],
    BlogLatest: BlogLatest["a" /* default */],
    ReviewItem: ReviewItem["a" /* default */],
    SocialIconColor: SocialIconColor["a" /* default */]
  },
  data() {
    return {
      postLatest: [],
      projects: blog["a" /* projects */],
      review: {
        text: 'I ordered on Friday evening and on Monday at 12:30 the package was with me. I have never encountered such a fast order processing.',
        name: 'Mark J.',
        rate: 5
      },
      footerLink: [{
        label: 'Client:',
        text: 'Client name'
      }, {
        label: 'Year:',
        text: '2018'
      }, {
        label: 'Categories:',
        text: 'Management'
      }, {
        label: 'Link:',
        link: '/portfolio/1'
      }, {
        label: '2 Likes',
        text: ''
      }]
    };
  },
  computed: {
    breadcrumb() {
      let item = this.projects.find(el => {
        return el.id == this.$route.params.id;
      });
      let title = 'Portfolio Detail';
      if (item) {
        title = item.title;
      }
      return [{
        url: '/',
        text: 'Home'
      }, {
        url: '/portfolio',
        text: 'Portfolio'
      }, {
        url: `/portfolio/${this.$route.params.id}`,
        extraClass: 'active',
        text: title
      }];
    }
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    this.postLatest = await Object(PostRepository["c" /* getPosts */])();
    this.$store.commit('app/setLoading', false);
  }
});
// CONCATENATED MODULE: ./pages/portfolio/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var portfolio_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/portfolio/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  portfolio_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6fd2fd7f"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map