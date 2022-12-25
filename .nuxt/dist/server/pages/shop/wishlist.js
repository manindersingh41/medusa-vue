exports.ids = [53];
exports.modules = {

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/product/ProductWishlist.vue?vue&type=template&id=72ccfe8f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.product ? _c('div', {
    staticClass: "ps-product ps-product--wishlist"
  }, [_vm._ssrNode("<div class=\"ps-product__remove\"><a href=\"#\"><i class=\"icon-cross\"></i></a></div> "), _vm._ssrNode("<div class=\"ps-product__thumbnail\">", "</div>", [_c('nuxt-link', {
    staticClass: "ps-product__image",
    attrs: {
      "to": `/product/layout/layout-1/${_vm.product.id}`
    }
  }, [_c('figure', [_c('img', {
    attrs: {
      "src": _vm.baseDomain + _vm.product.thumbnail.url,
      "alt": "alt"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.baseDomain + _vm.product.thumbnail_back.url,
      "alt": "alt"
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-product__content\">", "</div>", [_vm._ssrNode("<h5 class=\"ps-product__title\">", "</h5>", [_c('nuxt-link', {
    attrs: {
      "to": `/product/layout/layout-1/${_vm.product.id}`
    }
  }, [_vm._v(_vm._s(_vm.product.name))])], 1), _vm._ssrNode(" <div class=\"ps-product__row\"><div class=\"ps-product__label\">Price:</div> <div class=\"ps-product__value\"><span" + _vm._ssrClass(null, ['ps-product__price', _vm.product.sale_price ? 'sale' : '']) + ">" + _vm._ssrEscape("$" + _vm._s(_vm.product.sale_price ? _vm.product.sale_price : _vm.product.price)) + "</span> " + (_vm.product.sale_price ? "<span class=\"ps-product__del\">" + _vm._ssrEscape("$" + _vm._s(_vm.product.price)) + "</span>" : "<!---->") + "</div></div> <div class=\"ps-product__row ps-product__stock\"><div class=\"ps-product__label\">Stock:</div> <div class=\"ps-product__value\"><span class=\"ps-product__in-stock\">In Stock</span> <span class=\"ps-product__out-stock\"" + _vm._ssrStyle(null, null, {
    display: false ? undefined : 'none'
  }) + ">Out of stock</span></div></div> <div class=\"ps-product__cart\"><button class=\"ps-btn\">Add to cart</button></div> <div class=\"ps-product__row ps-product__quantity\"><div class=\"ps-product__label\">Quantity:</div> <div class=\"ps-product__value\">" + _vm._ssrEscape(_vm._s(_vm.quantity)) + "</div></div> <div class=\"ps-product__row ps-product__subtotal\"><div class=\"ps-product__label\">Subtotal:</div> <div class=\"ps-product__value\">" + _vm._ssrEscape("$" + _vm._s(_vm.productPrice())) + "</div></div>")], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/elements/product/ProductWishlist.vue?vue&type=template&id=72ccfe8f&

// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__(4);

// EXTERNAL MODULE: ./components/elements/commons/RatingComponent.vue + 4 modules
var RatingComponent = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/product/ProductWishlist.vue?vue&type=script&lang=js&


/* harmony default export */ var ProductWishlistvue_type_script_lang_js_ = ({
  props: {
    product: {
      type: Object
    },
    type: {
      type: String,
      default: 'wishlist'
    }
  },
  components: {
    RatingComponent: RatingComponent["a" /* default */]
  },
  data() {
    return {
      baseDomain: Repository["a" /* baseUrl */],
      quantity: 1
    };
  },
  methods: {
    handleRemove() {
      if (this.type == 'cart') {
        this.$store.dispatch("cart/removeProductCart", this.product.id);
        this.$store.commit("product/removeCartProduct", this.product.id);
      }
    },
    productPrice() {
      if (this.product) {
        return this.product.sale_price ? this.product.sale_price : this.product.price;
      }
      return 0;
    },
    addToCart() {
      const params = {
        id: this.product.id,
        quantity: this.quantity
      };
      this.$store.dispatch('cart/addProductToCart', params);
      this.$store.commit('cart/setDialogAddCart', true);
      this.$store.commit('cart/setProductOverview', this.product);
      this.$store.commit('compare/setDialogCompare', false);
      this.$store.commit('cart/setDialogQuickview', false);
      this.$store.commit('product/addCartProduct', this.product);
      this.$store.commit('cart/setDialogAddCart2', false);
    }
  }
});
// CONCATENATED MODULE: ./components/elements/product/ProductWishlist.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductWishlistvue_type_script_lang_js_ = (ProductWishlistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/elements/product/ProductWishlist.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductWishlistvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "eedffc28"
  
)

/* harmony default export */ var ProductWishlist = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/wishlist.vue?vue&type=template&id=9ec92b40&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ps-wishlist"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('breadcrumb', {
    attrs: {
      "dataList": _vm.breadcrumb
    }
  }), _vm._ssrNode(" <h3 class=\"ps-wishlist__title\">My wishlist on MyMedi</h3> "), _vm._ssrNode("<div class=\"ps-wishlist__content\">", "</div>", [_vm._ssrNode("<ul class=\"ps-wishlist__list\">", "</ul>", _vm._l(_vm.wishlistProducts, function (product, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('product-wishlist', {
      attrs: {
        "product": product,
        "type": "wishlist"
      }
    })], 1);
  }), 0), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-wishlist__table\">", "</div>", [_vm._ssrNode("<table class=\"table ps-table ps-table--product\">", "</table>", [_vm._ssrNode("<thead><tr><th class=\"ps-product__remove\"></th> <th class=\"ps-product__thumbnail\"></th> <th class=\"ps-product__name\">Product name</th> <th class=\"ps-product__meta\">Unit price</th> <th class=\"ps-product__status\">Stock status</th> <th class=\"ps-product__cart\"></th></tr></thead> "), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.wishlistProducts, function (product, index) {
    return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode("<td class=\"ps-product__remove\"><a href=\"#\"><i class=\"icon-cross\"></i></a></td> "), _vm._ssrNode("<td class=\"ps-product__thumbnail\">", "</td>", [product.thumbnail ? _c('nuxt-link', {
      staticClass: "ps-product__image",
      attrs: {
        "to": `/product/layout/layout-1/${product.id}`
      }
    }, [_c('figure', [_c('img', {
      attrs: {
        "src": _vm.baseDomain + product.thumbnail.url,
        "alt": ""
      }
    })])]) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<td class=\"ps-product__name\">", "</td>", [_c('nuxt-link', {
      attrs: {
        "to": `/product/layout/layout-1/${product.id}`
      }
    }, [_vm._v(_vm._s(product.name))])], 1), _vm._ssrNode(" <td class=\"ps-product__meta\"><span" + _vm._ssrClass(null, ['ps-product__price', product.sale_price ? 'sale' : '']) + ">" + _vm._ssrEscape("$" + _vm._s(product.sale_price ? product.sale_price : product.price)) + "</span> " + (product.sale_price ? "<span class=\"ps-product__del\">" + _vm._ssrEscape("$" + _vm._s(product.price)) + "</span>" : "<!---->") + "</td> <td class=\"ps-product__status\">" + (index != 0 ? "<span class=\"ps-product__instock\">In Stock</span>" : "<span class=\"ps-product__outstock\">Out of stock</span>") + "</td> <td class=\"ps-product__cart\"><button class=\"ps-btn\">Add to cart</button></td>")], 2);
  }), 0)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ps-wishlist__share\">", "</div>", [_vm._ssrNode("<label>Share on:</label> "), _c('social-icon-color')], 2)], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/shop/wishlist.vue?vue&type=template&id=9ec92b40&

// EXTERNAL MODULE: ./components/elements/commons/Breadcrumb.vue + 4 modules
var Breadcrumb = __webpack_require__(77);

// EXTERNAL MODULE: ./components/shared/SocialIconColor.vue + 2 modules
var SocialIconColor = __webpack_require__(98);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./repositories/Repository.js
var Repository = __webpack_require__(4);

// EXTERNAL MODULE: ./components/elements/product/ProductWishlist.vue + 4 modules
var ProductWishlist = __webpack_require__(414);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/shop/wishlist.vue?vue&type=script&lang=js&





/* harmony default export */ var wishlistvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    Breadcrumb: Breadcrumb["a" /* default */],
    SocialIconColor: SocialIconColor["a" /* default */],
    ProductWishlist: ProductWishlist["a" /* default */]
  },
  data() {
    return {
      baseDomain: Repository["a" /* baseUrl */],
      breadcrumb: [{
        url: '/',
        text: 'Home'
      }, {
        url: '/shop/wishlist',
        extraClass: 'active',
        text: 'Wishlist'
      }]
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])({
      wishlistItems: state => state.wishlist.items,
      wishlistProducts: state => state.product.wishlistItems
    })
  },
  methods: {
    addToCart(product) {
      const params = {
        id: product.id,
        quantity: 1
      };
      this.$store.dispatch('cart/addProductToCart', params);
      this.$store.commit('cart/setDialogAddCart', true);
      this.$store.commit('cart/setProductOverview', product);
      this.$store.commit('compare/setDialogCompare', false);
      this.$store.commit('cart/setDialogQuickview', false);
      this.$store.commit('product/addCartProduct', product);
      this.$store.commit('cart/setDialogAddCart2', false);
    },
    handleRemoveProduct(product) {
      this.$store.dispatch('wishlist/removeItemFromWishlist', product.id);
      this.$store.commit('product/removeWishlistItem', product.id);
    }
  }
});
// CONCATENATED MODULE: ./pages/shop/wishlist.vue?vue&type=script&lang=js&
 /* harmony default export */ var shop_wishlistvue_type_script_lang_js_ = (wishlistvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/shop/wishlist.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  shop_wishlistvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "431a204a"
  
)

/* harmony default export */ var wishlist = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=wishlist.js.map