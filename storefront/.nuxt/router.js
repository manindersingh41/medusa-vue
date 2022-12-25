import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7f596397 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _6dbae10f = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _25503a48 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _32449071 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _647cc3aa = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _5fad762c = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _bc1c4a10 = () => interopDefault(import('../pages/account/forget-password.vue' /* webpackChunkName: "pages/account/forget-password" */))
const _5315e91f = () => interopDefault(import('../pages/account/my-account.vue' /* webpackChunkName: "pages/account/my-account" */))
const _fa6b88ee = () => interopDefault(import('../pages/blog/masonry.vue' /* webpackChunkName: "pages/blog/masonry" */))
const _386df6c4 = () => interopDefault(import('../pages/blog/sidebar-1.vue' /* webpackChunkName: "pages/blog/sidebar-1" */))
const _387c0e45 = () => interopDefault(import('../pages/blog/sidebar-2.vue' /* webpackChunkName: "pages/blog/sidebar-2" */))
const _0d7dd058 = () => interopDefault(import('../pages/coming-soon/V1.vue' /* webpackChunkName: "pages/coming-soon/V1" */))
const _0d61a156 = () => interopDefault(import('../pages/coming-soon/V2.vue' /* webpackChunkName: "pages/coming-soon/V2" */))
const _4840a646 = () => interopDefault(import('../pages/homepage/home-10.vue' /* webpackChunkName: "pages/homepage/home-10" */))
const _48247744 = () => interopDefault(import('../pages/homepage/home-11.vue' /* webpackChunkName: "pages/homepage/home-11" */))
const _48084842 = () => interopDefault(import('../pages/homepage/home-12.vue' /* webpackChunkName: "pages/homepage/home-12" */))
const _47ec1940 = () => interopDefault(import('../pages/homepage/home-13.vue' /* webpackChunkName: "pages/homepage/home-13" */))
const _47cfea3e = () => interopDefault(import('../pages/homepage/home-14.vue' /* webpackChunkName: "pages/homepage/home-14" */))
const _47b3bb3c = () => interopDefault(import('../pages/homepage/home-15.vue' /* webpackChunkName: "pages/homepage/home-15" */))
const _c869bd38 = () => interopDefault(import('../pages/homepage/home-2.vue' /* webpackChunkName: "pages/homepage/home-2" */))
const _c84d8e36 = () => interopDefault(import('../pages/homepage/home-3.vue' /* webpackChunkName: "pages/homepage/home-3" */))
const _c8315f34 = () => interopDefault(import('../pages/homepage/home-4.vue' /* webpackChunkName: "pages/homepage/home-4" */))
const _c8153032 = () => interopDefault(import('../pages/homepage/home-5.vue' /* webpackChunkName: "pages/homepage/home-5" */))
const _c7f90130 = () => interopDefault(import('../pages/homepage/home-6.vue' /* webpackChunkName: "pages/homepage/home-6" */))
const _c7dcd22e = () => interopDefault(import('../pages/homepage/home-7.vue' /* webpackChunkName: "pages/homepage/home-7" */))
const _c7c0a32c = () => interopDefault(import('../pages/homepage/home-8.vue' /* webpackChunkName: "pages/homepage/home-8" */))
const _c7a4742a = () => interopDefault(import('../pages/homepage/home-9.vue' /* webpackChunkName: "pages/homepage/home-9" */))
const _38f0ba5e = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _5d39b85e = () => interopDefault(import('../pages/shop/grid.vue' /* webpackChunkName: "pages/shop/grid" */))
const _9ad7bf96 = () => interopDefault(import('../pages/shop/grid-dark.vue' /* webpackChunkName: "pages/shop/grid-dark" */))
const _5c389460 = () => interopDefault(import('../pages/shop/grid-detail.vue' /* webpackChunkName: "pages/shop/grid-detail" */))
const _e7af7858 = () => interopDefault(import('../pages/shop/grid-green.vue' /* webpackChunkName: "pages/shop/grid-green" */))
const _617a29e2 = () => interopDefault(import('../pages/shop/grid-separate.vue' /* webpackChunkName: "pages/shop/grid-separate" */))
const _cb0d1c94 = () => interopDefault(import('../pages/shop/list.vue' /* webpackChunkName: "pages/shop/list" */))
const _1f987f05 = () => interopDefault(import('../pages/shop/list-load-more.vue' /* webpackChunkName: "pages/shop/list-load-more" */))
const _7e8f3a14 = () => interopDefault(import('../pages/shop/promo-category.vue' /* webpackChunkName: "pages/shop/promo-category" */))
const _2dfd5c96 = () => interopDefault(import('../pages/shop/result.vue' /* webpackChunkName: "pages/shop/result" */))
const _cd2e3206 = () => interopDefault(import('../pages/shop/shopping-cart.vue' /* webpackChunkName: "pages/shop/shopping-cart" */))
const _5fba6946 = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _c4be2306 = () => interopDefault(import('../pages/product/layout/layout-1/_id.vue' /* webpackChunkName: "pages/product/layout/layout-1/_id" */))
const _31e55d7e = () => interopDefault(import('../pages/product/layout/layout-2/_id.vue' /* webpackChunkName: "pages/product/layout/layout-2/_id" */))
const _73ac6702 = () => interopDefault(import('../pages/product/layout/layout-3/_id.vue' /* webpackChunkName: "pages/product/layout/layout-3/_id" */))
const _5a6e3b80 = () => interopDefault(import('../pages/product/layout/layout-4/_id.vue' /* webpackChunkName: "pages/product/layout/layout-4/_id" */))
const _229aaafe = () => interopDefault(import('../pages/product/layout/layout-5/_id.vue' /* webpackChunkName: "pages/product/layout/layout-5/_id" */))
const _fa11ccfc = () => interopDefault(import('../pages/product/layout/layout-6/_id.vue' /* webpackChunkName: "pages/product/layout/layout-6/_id" */))
const _173b8883 = () => interopDefault(import('../pages/product/layout/layout-7/_id.vue' /* webpackChunkName: "pages/product/layout/layout-7/_id" */))
const _44295dbc = () => interopDefault(import('../pages/product/layout/product-sold-out/_id.vue' /* webpackChunkName: "pages/product/layout/product-sold-out/_id" */))
const _4643fdc9 = () => interopDefault(import('../pages/product/layout/product-variable/_id.vue' /* webpackChunkName: "pages/product/layout/product-variable/_id" */))
const _2d01a69e = () => interopDefault(import('../pages/blog/post-detail-1/_id.vue' /* webpackChunkName: "pages/blog/post-detail-1/_id" */))
const _7dc39bb2 = () => interopDefault(import('../pages/blog/post-detail-2/_id.vue' /* webpackChunkName: "pages/blog/post-detail-2/_id" */))
const _0648aedc = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _7f596397,
    name: "404___en"
  }, {
    path: "/about-us",
    component: _6dbae10f,
    name: "about-us___en"
  }, {
    path: "/contact-us",
    component: _25503a48,
    name: "contact-us___en"
  }, {
    path: "/fr",
    component: _32449071,
    name: "index___fr"
  }, {
    path: "/portfolio",
    component: _647cc3aa,
    name: "portfolio___en"
  }, {
    path: "/shop",
    component: _5fad762c,
    name: "shop___en"
  }, {
    path: "/account/forget-password",
    component: _bc1c4a10,
    name: "account-forget-password___en"
  }, {
    path: "/account/my-account",
    component: _5315e91f,
    name: "account-my-account___en"
  }, {
    path: "/blog/masonry",
    component: _fa6b88ee,
    name: "blog-masonry___en"
  }, {
    path: "/blog/sidebar-1",
    component: _386df6c4,
    name: "blog-sidebar-1___en"
  }, {
    path: "/blog/sidebar-2",
    component: _387c0e45,
    name: "blog-sidebar-2___en"
  }, {
    path: "/coming-soon/V1",
    component: _0d7dd058,
    name: "coming-soon-V1___en"
  }, {
    path: "/coming-soon/V2",
    component: _0d61a156,
    name: "coming-soon-V2___en"
  }, {
    path: "/fr/404",
    component: _7f596397,
    name: "404___fr"
  }, {
    path: "/fr/about-us",
    component: _6dbae10f,
    name: "about-us___fr"
  }, {
    path: "/fr/contact-us",
    component: _25503a48,
    name: "contact-us___fr"
  }, {
    path: "/fr/portfolio",
    component: _647cc3aa,
    name: "portfolio___fr"
  }, {
    path: "/fr/shop",
    component: _5fad762c,
    name: "shop___fr"
  }, {
    path: "/homepage/home-10",
    component: _4840a646,
    name: "homepage-home-10___en"
  }, {
    path: "/homepage/home-11",
    component: _48247744,
    name: "homepage-home-11___en"
  }, {
    path: "/homepage/home-12",
    component: _48084842,
    name: "homepage-home-12___en"
  }, {
    path: "/homepage/home-13",
    component: _47ec1940,
    name: "homepage-home-13___en"
  }, {
    path: "/homepage/home-14",
    component: _47cfea3e,
    name: "homepage-home-14___en"
  }, {
    path: "/homepage/home-15",
    component: _47b3bb3c,
    name: "homepage-home-15___en"
  }, {
    path: "/homepage/home-2",
    component: _c869bd38,
    name: "homepage-home-2___en"
  }, {
    path: "/homepage/home-3",
    component: _c84d8e36,
    name: "homepage-home-3___en"
  }, {
    path: "/homepage/home-4",
    component: _c8315f34,
    name: "homepage-home-4___en"
  }, {
    path: "/homepage/home-5",
    component: _c8153032,
    name: "homepage-home-5___en"
  }, {
    path: "/homepage/home-6",
    component: _c7f90130,
    name: "homepage-home-6___en"
  }, {
    path: "/homepage/home-7",
    component: _c7dcd22e,
    name: "homepage-home-7___en"
  }, {
    path: "/homepage/home-8",
    component: _c7c0a32c,
    name: "homepage-home-8___en"
  }, {
    path: "/homepage/home-9",
    component: _c7a4742a,
    name: "homepage-home-9___en"
  }, {
    path: "/shop/checkout",
    component: _38f0ba5e,
    name: "shop-checkout___en"
  }, {
    path: "/shop/grid",
    component: _5d39b85e,
    name: "shop-grid___en"
  }, {
    path: "/shop/grid-dark",
    component: _9ad7bf96,
    name: "shop-grid-dark___en"
  }, {
    path: "/shop/grid-detail",
    component: _5c389460,
    name: "shop-grid-detail___en"
  }, {
    path: "/shop/grid-green",
    component: _e7af7858,
    name: "shop-grid-green___en"
  }, {
    path: "/shop/grid-separate",
    component: _617a29e2,
    name: "shop-grid-separate___en"
  }, {
    path: "/shop/list",
    component: _cb0d1c94,
    name: "shop-list___en"
  }, {
    path: "/shop/list-load-more",
    component: _1f987f05,
    name: "shop-list-load-more___en"
  }, {
    path: "/shop/promo-category",
    component: _7e8f3a14,
    name: "shop-promo-category___en"
  }, {
    path: "/shop/result",
    component: _2dfd5c96,
    name: "shop-result___en"
  }, {
    path: "/shop/shopping-cart",
    component: _cd2e3206,
    name: "shop-shopping-cart___en"
  }, {
    path: "/shop/wishlist",
    component: _5fba6946,
    name: "shop-wishlist___en"
  }, {
    path: "/fr/account/forget-password",
    component: _bc1c4a10,
    name: "account-forget-password___fr"
  }, {
    path: "/fr/account/my-account",
    component: _5315e91f,
    name: "account-my-account___fr"
  }, {
    path: "/fr/blog/masonry",
    component: _fa6b88ee,
    name: "blog-masonry___fr"
  }, {
    path: "/fr/blog/sidebar-1",
    component: _386df6c4,
    name: "blog-sidebar-1___fr"
  }, {
    path: "/fr/blog/sidebar-2",
    component: _387c0e45,
    name: "blog-sidebar-2___fr"
  }, {
    path: "/fr/coming-soon/V1",
    component: _0d7dd058,
    name: "coming-soon-V1___fr"
  }, {
    path: "/fr/coming-soon/V2",
    component: _0d61a156,
    name: "coming-soon-V2___fr"
  }, {
    path: "/fr/homepage/home-10",
    component: _4840a646,
    name: "homepage-home-10___fr"
  }, {
    path: "/fr/homepage/home-11",
    component: _48247744,
    name: "homepage-home-11___fr"
  }, {
    path: "/fr/homepage/home-12",
    component: _48084842,
    name: "homepage-home-12___fr"
  }, {
    path: "/fr/homepage/home-13",
    component: _47ec1940,
    name: "homepage-home-13___fr"
  }, {
    path: "/fr/homepage/home-14",
    component: _47cfea3e,
    name: "homepage-home-14___fr"
  }, {
    path: "/fr/homepage/home-15",
    component: _47b3bb3c,
    name: "homepage-home-15___fr"
  }, {
    path: "/fr/homepage/home-2",
    component: _c869bd38,
    name: "homepage-home-2___fr"
  }, {
    path: "/fr/homepage/home-3",
    component: _c84d8e36,
    name: "homepage-home-3___fr"
  }, {
    path: "/fr/homepage/home-4",
    component: _c8315f34,
    name: "homepage-home-4___fr"
  }, {
    path: "/fr/homepage/home-5",
    component: _c8153032,
    name: "homepage-home-5___fr"
  }, {
    path: "/fr/homepage/home-6",
    component: _c7f90130,
    name: "homepage-home-6___fr"
  }, {
    path: "/fr/homepage/home-7",
    component: _c7dcd22e,
    name: "homepage-home-7___fr"
  }, {
    path: "/fr/homepage/home-8",
    component: _c7c0a32c,
    name: "homepage-home-8___fr"
  }, {
    path: "/fr/homepage/home-9",
    component: _c7a4742a,
    name: "homepage-home-9___fr"
  }, {
    path: "/fr/shop/checkout",
    component: _38f0ba5e,
    name: "shop-checkout___fr"
  }, {
    path: "/fr/shop/grid",
    component: _5d39b85e,
    name: "shop-grid___fr"
  }, {
    path: "/fr/shop/grid-dark",
    component: _9ad7bf96,
    name: "shop-grid-dark___fr"
  }, {
    path: "/fr/shop/grid-detail",
    component: _5c389460,
    name: "shop-grid-detail___fr"
  }, {
    path: "/fr/shop/grid-green",
    component: _e7af7858,
    name: "shop-grid-green___fr"
  }, {
    path: "/fr/shop/grid-separate",
    component: _617a29e2,
    name: "shop-grid-separate___fr"
  }, {
    path: "/fr/shop/list",
    component: _cb0d1c94,
    name: "shop-list___fr"
  }, {
    path: "/fr/shop/list-load-more",
    component: _1f987f05,
    name: "shop-list-load-more___fr"
  }, {
    path: "/fr/shop/promo-category",
    component: _7e8f3a14,
    name: "shop-promo-category___fr"
  }, {
    path: "/fr/shop/result",
    component: _2dfd5c96,
    name: "shop-result___fr"
  }, {
    path: "/fr/shop/shopping-cart",
    component: _cd2e3206,
    name: "shop-shopping-cart___fr"
  }, {
    path: "/fr/shop/wishlist",
    component: _5fba6946,
    name: "shop-wishlist___fr"
  }, {
    path: "/fr/product/layout/layout-1/:id?",
    component: _c4be2306,
    name: "product-layout-layout-1-id___fr"
  }, {
    path: "/fr/product/layout/layout-2/:id?",
    component: _31e55d7e,
    name: "product-layout-layout-2-id___fr"
  }, {
    path: "/fr/product/layout/layout-3/:id?",
    component: _73ac6702,
    name: "product-layout-layout-3-id___fr"
  }, {
    path: "/fr/product/layout/layout-4/:id?",
    component: _5a6e3b80,
    name: "product-layout-layout-4-id___fr"
  }, {
    path: "/fr/product/layout/layout-5/:id?",
    component: _229aaafe,
    name: "product-layout-layout-5-id___fr"
  }, {
    path: "/fr/product/layout/layout-6/:id?",
    component: _fa11ccfc,
    name: "product-layout-layout-6-id___fr"
  }, {
    path: "/fr/product/layout/layout-7/:id?",
    component: _173b8883,
    name: "product-layout-layout-7-id___fr"
  }, {
    path: "/fr/product/layout/product-sold-out/:id?",
    component: _44295dbc,
    name: "product-layout-product-sold-out-id___fr"
  }, {
    path: "/fr/product/layout/product-variable/:id?",
    component: _4643fdc9,
    name: "product-layout-product-variable-id___fr"
  }, {
    path: "/fr/blog/post-detail-1/:id?",
    component: _2d01a69e,
    name: "blog-post-detail-1-id___fr"
  }, {
    path: "/fr/blog/post-detail-2/:id?",
    component: _7dc39bb2,
    name: "blog-post-detail-2-id___fr"
  }, {
    path: "/product/layout/layout-1/:id?",
    component: _c4be2306,
    name: "product-layout-layout-1-id___en"
  }, {
    path: "/product/layout/layout-2/:id?",
    component: _31e55d7e,
    name: "product-layout-layout-2-id___en"
  }, {
    path: "/product/layout/layout-3/:id?",
    component: _73ac6702,
    name: "product-layout-layout-3-id___en"
  }, {
    path: "/product/layout/layout-4/:id?",
    component: _5a6e3b80,
    name: "product-layout-layout-4-id___en"
  }, {
    path: "/product/layout/layout-5/:id?",
    component: _229aaafe,
    name: "product-layout-layout-5-id___en"
  }, {
    path: "/product/layout/layout-6/:id?",
    component: _fa11ccfc,
    name: "product-layout-layout-6-id___en"
  }, {
    path: "/product/layout/layout-7/:id?",
    component: _173b8883,
    name: "product-layout-layout-7-id___en"
  }, {
    path: "/product/layout/product-sold-out/:id?",
    component: _44295dbc,
    name: "product-layout-product-sold-out-id___en"
  }, {
    path: "/product/layout/product-variable/:id?",
    component: _4643fdc9,
    name: "product-layout-product-variable-id___en"
  }, {
    path: "/blog/post-detail-1/:id?",
    component: _2d01a69e,
    name: "blog-post-detail-1-id___en"
  }, {
    path: "/blog/post-detail-2/:id?",
    component: _7dc39bb2,
    name: "blog-post-detail-2-id___en"
  }, {
    path: "/fr/portfolio/:id",
    component: _0648aedc,
    name: "portfolio-id___fr"
  }, {
    path: "/portfolio/:id",
    component: _0648aedc,
    name: "portfolio-id___en"
  }, {
    path: "/",
    component: _32449071,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
