exports.ids = [11];
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/ModulePagination.vue?vue&type=template&id=02861189&


var ModulePaginationvue_type_template_id_02861189_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-pagination"
  }, [_vm.loading ? _c(VSkeletonLoader["a" /* default */], {
    attrs: {
      "type": "image",
      "width": "100%",
      "height": "50"
    }
  }) : _c('ul', {
    staticClass: "pagination"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.prevPage();
      }
    }
  }, [_c('i', {
    staticClass: "icon-chevron-left"
  })])]), _vm._v(" "), _vm._l(_vm.length, function (item) {
    return _c('li', {
      key: item,
      class: [_vm.pageIndex === item ? 'active' : '']
    }, [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          _vm.pageIndex = item;
        }
      }
    }, [_vm._v(_vm._s(item))])]);
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.nextPage();
      }
    }
  }, [_c('i', {
    staticClass: "icon-chevron-right"
  })])])], 2)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/commons/ModulePagination.vue?vue&type=template&id=02861189&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/commons/ModulePagination.vue?vue&type=script&lang=js&

/* harmony default export */ var ModulePaginationvue_type_script_lang_js_ = ({
  props: {
    page: {
      type: Number,
      default: 1
    },
    length: {
      type: Number,
      default: 1
    }
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    }),
    pageIndex: {
      set(value) {
        this.handleChangPage(value);
        return value;
      },
      get() {
        return this.page;
      }
    }
  },
  methods: {
    handleChangPage(pageIndex) {
      if (pageIndex != this.page) {
        this.$emit('handleChangePage', pageIndex);
      }
    },
    prevPage() {
      if (this.pageIndex > 1) {
        this.pageIndex--;
      }
    },
    nextPage() {
      if (this.pageIndex < this.length) {
        this.pageIndex++;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/elements/commons/ModulePagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var commons_ModulePaginationvue_type_script_lang_js_ = (ModulePaginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/commons/ModulePagination.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commons_ModulePaginationvue_type_script_lang_js_,
  ModulePaginationvue_type_template_id_02861189_render,
  staticRenderFns,
  false,
  null,
  null,
  "03d4a036"
  
)

/* harmony default export */ var ModulePagination = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/blog/BlogWidget.vue?vue&type=template&id=6e5c2738&


var BlogWidgetvue_type_template_id_6e5c2738_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-widget ps-widget--blog"
  }, [_vm._ssrNode("<div class=\"ps-widget__block\">", "</div>", [_vm._ssrNode("<h4 class=\"ps-widget__title\">Categories</h4> <a href=\"#\"" + _vm._ssrClass(null, ['ps-block-control', {
    'active': _vm.activeSlide == 'category'
  }]) + "><i class=\"fa fa-angle-down\"></i></a> "), _c('slide-up-down', {
    attrs: {
      "active": !_vm.isMobile ? true : _vm.activeSlide == 'category' ? true : false
    }
  }, [_c('div', {
    staticClass: "ps-widget__content ps-widget__category"
  }, [_c('module-post-category', {
    attrs: {
      "list": _vm.categories,
      "className": "menu--mobile ps-widget--category"
    }
  })], 1)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-widget__block\">", "</div>", [_vm._ssrNode("<h4 class=\"ps-widget__title\">Related Products</h4> <a href=\"#\"" + _vm._ssrClass(null, ['ps-block-control', {
    'active': _vm.activeSlide == 'product'
  }]) + "><i class=\"fa fa-angle-down\"></i></a> "), _c('slide-up-down', {
    attrs: {
      "active": !_vm.isMobile ? true : _vm.activeSlide == 'product' ? true : false
    }
  }, [_c('div', {
    staticClass: "ps-widget__content"
  }, [_vm.loading ? _c('div', {
    staticClass: "ps-widget__product"
  }, _vm._l(3, function (item) {
    return _c(VSkeletonLoader["a" /* default */], {
      key: item,
      attrs: {
        "type": "image, article"
      }
    });
  }), 1) : _c('div', {
    staticClass: "ps-widget__product"
  }, _vm._l(_vm.products, function (product) {
    return _c('product-standard', {
      key: product.id,
      attrs: {
        "product": product
      }
    });
  }), 1)])])], 2), _vm._ssrNode(" <div class=\"ps-widget--promo\"><img src=\"/img/banner-sidebar1.jpg\" alt></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/blog/BlogWidget.vue?vue&type=template&id=6e5c2738&

// EXTERNAL MODULE: ./components/elements/product/ProductStandard.vue + 4 modules
var ProductStandard = __webpack_require__(16);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/blog/modules/ModulePostCategory.vue?vue&type=template&id=b6e2ac78&
var ModulePostCategoryvue_type_template_id_b6e2ac78_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.list && _vm.list.length ? _c('ul', {
    class: _vm.className
  }, _vm._l(_vm.list, function (item, index) {
    return _vm._ssrNode("<li" + _vm._ssrClass(null, [item.extraClass, {
      'active': _vm.active == index
    }]) + ">", "</li>", [_c('nuxt-link', {
      attrs: {
        "to": "/blog/sidebar-1"
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.openSubItem(index);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n        ")]), _vm._ssrNode(" " + (item.posts && item.posts.length ? "<span class=\"sub-toggle\"><i class=\"fa fa-chevron-down\"></i></span>" : "<!---->") + " "), _c('slide-up-down', {
      attrs: {
        "active": _vm.active == index ? true : false
      }
    }, [item.posts && item.posts.length ? _c('ul', {
      staticClass: "sub-menu"
    }, _vm._l(item.posts, function (val, idx) {
      return _c('li', {
        key: idx
      }, [_c('nuxt-link', {
        attrs: {
          "to": `/blog/post-detail-1/${val.id}`
        }
      }, [_vm._v("\n                        " + _vm._s(val.name) + "\n                    ")])], 1);
    }), 0) : _vm._e()])], 2);
  }), 0) : _vm._e();
};
var ModulePostCategoryvue_type_template_id_b6e2ac78_staticRenderFns = [];

// CONCATENATED MODULE: ./components/partials/blog/modules/ModulePostCategory.vue?vue&type=template&id=b6e2ac78&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/blog/modules/ModulePostCategory.vue?vue&type=script&lang=js&
/* harmony default export */ var ModulePostCategoryvue_type_script_lang_js_ = ({
  name: 'module-post-category',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      active: null
    };
  },
  methods: {
    openSubItem(index) {
      if (index == this.active) {
        this.active = null;
      } else {
        this.active = index;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/partials/blog/modules/ModulePostCategory.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_ModulePostCategoryvue_type_script_lang_js_ = (ModulePostCategoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/partials/blog/modules/ModulePostCategory.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_ModulePostCategoryvue_type_script_lang_js_,
  ModulePostCategoryvue_type_template_id_b6e2ac78_render,
  ModulePostCategoryvue_type_template_id_b6e2ac78_staticRenderFns,
  false,
  null,
  null,
  "26031a1c"
  
)

/* harmony default export */ var ModulePostCategory = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partials/blog/BlogWidget.vue?vue&type=script&lang=js&



/* harmony default export */ var BlogWidgetvue_type_script_lang_js_ = ({
  props: {
    products: {
      type: Array,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ProductStandard: ProductStandard["a" /* default */],
    ModulePostCategory: ModulePostCategory
  },
  data() {
    return {
      activeSlide: null,
      windowWidth: 0
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    }),
    isMobile() {
      return this.windowWidth < 768;
    }
  },
  created() {
    window.addEventListener("resize", this.resizeScreen);
    this.resizeScreen();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeScreen);
  },
  methods: {
    activeSlideUpDown(val) {
      if (this.activeSlide == val) {
        this.activeSlide = null;
      } else {
        this.activeSlide = val;
      }
    },
    resizeScreen() {
      this.windowWidth = window.innerWidth;
    }
  }
});
// CONCATENATED MODULE: ./components/partials/blog/BlogWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_BlogWidgetvue_type_script_lang_js_ = (BlogWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/partials/blog/BlogWidget.vue





/* normalize component */

var BlogWidget_component = Object(componentNormalizer["a" /* default */])(
  blog_BlogWidgetvue_type_script_lang_js_,
  BlogWidgetvue_type_template_id_6e5c2738_render,
  staticRenderFns,
  false,
  null,
  null,
  "8d0558b4"
  
)

/* harmony default export */ var BlogWidget = __webpack_exports__["a"] = (BlogWidget_component.exports);

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSkeletonLoader/VSkeletonLoader.js
var VSkeletonLoader = __webpack_require__(285);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/sidebar-2.vue?vue&type=template&id=610715e3&


var sidebar_2vue_type_template_id_610715e3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-blog"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('breadcrumb', {
    attrs: {
      "dataList": _vm.breadcrumb
    }
  }), _vm._ssrNode(" <h1 class=\"ps-blog__title\">My Medi Blog</h1> "), _vm._ssrNode("<div class=\"ps-blog__content\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12 col-sm-9\">", "</div>", [_vm._ssrNode("<div class=\"ps-blog--sidebar\">", "</div>", [_vm.loading ? _c(VSkeletonLoader["a" /* default */], {
    staticClass: "mb-2",
    attrs: {
      "type": "image, article"
    }
  }) : _c('post-latset', {
    attrs: {
      "item": _vm.blogs[0]
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-blog--grid\">", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(2, function (item) {
    return _vm._ssrNode("<div class=\"col-12 col-lg-6 p-0\">", "</div>", [_c(VSkeletonLoader["a" /* default */], {
      staticClass: "mb-2",
      attrs: {
        "type": "image, article"
      }
    })], 1);
  }), 0) : _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._l(_vm.blogs, function (item, index) {
    return [index > 0 ? _vm._ssrNode("<div class=\"col-12 col-lg-6 p-0\">", "</div>", [_c('post-latset', {
      attrs: {
        "item": item
      }
    })], 1) : _vm._e()];
  })], 2)]), _vm._ssrNode(" "), _c('module-pagination', {
    attrs: {
      "page": _vm.meta.pageIndex,
      "length": 1
    },
    on: {
      "handleChangePage": _vm.handleChangePage
    }
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-12 col-sm-3\">", "</div>", [_c('blog-widget', {
    attrs: {
      "products": _vm.products,
      "categories": _vm.postCategory
    }
  })], 1)], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/sidebar-2.vue?vue&type=template&id=610715e3&

// EXTERNAL MODULE: ./components/elements/commons/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(77);

// EXTERNAL MODULE: ./repositories/PostRepository.js
var PostRepository = __webpack_require__(309);

// EXTERNAL MODULE: ./components/partials/blog/BlogWidget.vue + 9 modules
var BlogWidget = __webpack_require__(389);

// EXTERNAL MODULE: ./repositories/ProductRepository.js
var ProductRepository = __webpack_require__(14);

// EXTERNAL MODULE: ./components/elements/commons/PostLatset.vue + 4 modules
var PostLatset = __webpack_require__(335);

// EXTERNAL MODULE: ./components/elements/commons/ModulePagination.vue + 4 modules
var ModulePagination = __webpack_require__(352);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/sidebar-2.vue?vue&type=script&lang=js&







/* harmony default export */ var sidebar_2vue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    Breadcrumb: Breadcrumb["a" /* default */],
    BlogWidget: BlogWidget["a" /* default */],
    PostLatset: PostLatset["a" /* default */],
    ModulePagination: ModulePagination["a" /* default */]
  },
  data() {
    return {
      breadcrumb: [{
        url: '/',
        text: 'Home'
      }, {
        url: '/blog/sidebar-2',
        extraClass: 'active',
        text: 'My Medi Blog'
      }],
      blogs: [],
      products: [],
      meta: {
        pageSize: 9,
        pageIndex: 1
      },
      postCategory: []
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      loading: state => state.app.loading
    })
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
    const params = {
      _limit: 4,
      _start: 30
    };
    this.products = await Object(ProductRepository["e" /* getProducts */])(params);
    this.postCategory = await Object(PostRepository["b" /* getPostCategory */])();
    this.getPostList();
    this.$store.commit('app/setLoading', false);
  },
  methods: {
    handleChangePage(val) {
      this.meta.pageIndex = val;
      this.getPostList();
    },
    async getPostList() {
      const start = this.meta.pageSize * (this.meta.pageIndex - 1);
      const params = {
        _limit: this.meta.pageSize,
        _start: start
      };
      this.blogs = await Object(PostRepository["c" /* getPosts */])(params);
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/sidebar-2.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_sidebar_2vue_type_script_lang_js_ = (sidebar_2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/blog/sidebar-2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_sidebar_2vue_type_script_lang_js_,
  sidebar_2vue_type_template_id_610715e3_render,
  staticRenderFns,
  false,
  null,
  null,
  "246f56f8"
  
)

/* harmony default export */ var sidebar_2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sidebar-2.js.map