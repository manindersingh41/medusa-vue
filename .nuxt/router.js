import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b0327f4 = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _ef83625c = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _74b6ebdf = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6ae29ce4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0139e487 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _57884ded = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _82ba6256 = () => interopDefault(import('../pages/account/forget-password.vue' /* webpackChunkName: "pages/account/forget-password" */))
const _30293f22 = () => interopDefault(import('../pages/account/my-account.vue' /* webpackChunkName: "pages/account/my-account" */))
const _a2e9e068 = () => interopDefault(import('../pages/blog/masonry.vue' /* webpackChunkName: "pages/blog/masonry" */))
const _774ac647 = () => interopDefault(import('../pages/blog/sidebar-1.vue' /* webpackChunkName: "pages/blog/sidebar-1" */))
const _7758ddc8 = () => interopDefault(import('../pages/blog/sidebar-2.vue' /* webpackChunkName: "pages/blog/sidebar-2" */))
const _381de757 = () => interopDefault(import('../pages/coming-soon/V1.vue' /* webpackChunkName: "pages/coming-soon/V1" */))
const _382bfed8 = () => interopDefault(import('../pages/coming-soon/V2.vue' /* webpackChunkName: "pages/coming-soon/V2" */))
const _5272b0c0 = () => interopDefault(import('../pages/homepage/home-10.vue' /* webpackChunkName: "pages/homepage/home-10" */))
const _525681be = () => interopDefault(import('../pages/homepage/home-11.vue' /* webpackChunkName: "pages/homepage/home-11" */))
const _523a52bc = () => interopDefault(import('../pages/homepage/home-12.vue' /* webpackChunkName: "pages/homepage/home-12" */))
const _521e23ba = () => interopDefault(import('../pages/homepage/home-13.vue' /* webpackChunkName: "pages/homepage/home-13" */))
const _5201f4b8 = () => interopDefault(import('../pages/homepage/home-14.vue' /* webpackChunkName: "pages/homepage/home-14" */))
const _51e5c5b6 = () => interopDefault(import('../pages/homepage/home-15.vue' /* webpackChunkName: "pages/homepage/home-15" */))
const _38884241 = () => interopDefault(import('../pages/homepage/home-2.vue' /* webpackChunkName: "pages/homepage/home-2" */))
const _389659c2 = () => interopDefault(import('../pages/homepage/home-3.vue' /* webpackChunkName: "pages/homepage/home-3" */))
const _38a47143 = () => interopDefault(import('../pages/homepage/home-4.vue' /* webpackChunkName: "pages/homepage/home-4" */))
const _38b288c4 = () => interopDefault(import('../pages/homepage/home-5.vue' /* webpackChunkName: "pages/homepage/home-5" */))
const _38c0a045 = () => interopDefault(import('../pages/homepage/home-6.vue' /* webpackChunkName: "pages/homepage/home-6" */))
const _38ceb7c6 = () => interopDefault(import('../pages/homepage/home-7.vue' /* webpackChunkName: "pages/homepage/home-7" */))
const _38dccf47 = () => interopDefault(import('../pages/homepage/home-8.vue' /* webpackChunkName: "pages/homepage/home-8" */))
const _38eae6c8 = () => interopDefault(import('../pages/homepage/home-9.vue' /* webpackChunkName: "pages/homepage/home-9" */))
const _f56b230a = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _d9b7fa0a = () => interopDefault(import('../pages/shop/grid.vue' /* webpackChunkName: "pages/shop/grid" */))
const _1d1e2090 = () => interopDefault(import('../pages/shop/grid-dark.vue' /* webpackChunkName: "pages/shop/grid-dark" */))
const _666a9eda = () => interopDefault(import('../pages/shop/grid-detail.vue' /* webpackChunkName: "pages/shop/grid-detail" */))
const _28e564b1 = () => interopDefault(import('../pages/shop/grid-green.vue' /* webpackChunkName: "pages/shop/grid-green" */))
const _3e8d7fe5 = () => interopDefault(import('../pages/shop/grid-separate.vue' /* webpackChunkName: "pages/shop/grid-separate" */))
const _5f38875a = () => interopDefault(import('../pages/shop/list.vue' /* webpackChunkName: "pages/shop/list" */))
const _36202d3c = () => interopDefault(import('../pages/shop/list-load-more.vue' /* webpackChunkName: "pages/shop/list-load-more" */))
const _43e6a471 = () => interopDefault(import('../pages/shop/promo-category.vue' /* webpackChunkName: "pages/shop/promo-category" */))
const _4d836912 = () => interopDefault(import('../pages/shop/result.vue' /* webpackChunkName: "pages/shop/result" */))
const _767c3d00 = () => interopDefault(import('../pages/shop/shopping-cart.vue' /* webpackChunkName: "pages/shop/shopping-cart" */))
const _1c7c7f7a = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _4ecaabda = () => interopDefault(import('../pages/product/layout/layout-1/_id.vue' /* webpackChunkName: "pages/product/layout/layout-1/_id" */))
const _39e1ca4a = () => interopDefault(import('../pages/product/layout/layout-2/_id.vue' /* webpackChunkName: "pages/product/layout/layout-2/_id" */))
const _775389dc = () => interopDefault(import('../pages/product/layout/layout-3/_id.vue' /* webpackChunkName: "pages/product/layout/layout-3/_id" */))
const _0b97f8dd = () => interopDefault(import('../pages/product/layout/layout-4/_id.vue' /* webpackChunkName: "pages/product/layout/layout-4/_id" */))
const _c0473044 = () => interopDefault(import('../pages/product/layout/layout-5/_id.vue' /* webpackChunkName: "pages/product/layout/layout-5/_id" */))
const _3420d6df = () => interopDefault(import('../pages/product/layout/layout-6/_id.vue' /* webpackChunkName: "pages/product/layout/layout-6/_id" */))
const _6f357440 = () => interopDefault(import('../pages/product/layout/layout-7/_id.vue' /* webpackChunkName: "pages/product/layout/layout-7/_id" */))
const _8e373d02 = () => interopDefault(import('../pages/product/layout/product-sold-out/_id.vue' /* webpackChunkName: "pages/product/layout/product-sold-out/_id" */))
const _213d0e26 = () => interopDefault(import('../pages/product/layout/product-variable/_id.vue' /* webpackChunkName: "pages/product/layout/product-variable/_id" */))
const _7dbc6d98 = () => interopDefault(import('../pages/blog/post-detail-1/_id.vue' /* webpackChunkName: "pages/blog/post-detail-1/_id" */))
const _55663835 = () => interopDefault(import('../pages/blog/post-detail-2/_id.vue' /* webpackChunkName: "pages/blog/post-detail-2/_id" */))
const _49355caf = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))

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
    component: _5b0327f4,
    name: "404___en"
  }, {
    path: "/about-us",
    component: _ef83625c,
    name: "about-us___en"
  }, {
    path: "/contact-us",
    component: _74b6ebdf,
    name: "contact-us___en"
  }, {
    path: "/fr",
    component: _6ae29ce4,
    name: "index___fr"
  }, {
    path: "/portfolio",
    component: _0139e487,
    name: "portfolio___en"
  }, {
    path: "/shop",
    component: _57884ded,
    name: "shop___en"
  }, {
    path: "/account/forget-password",
    component: _82ba6256,
    name: "account-forget-password___en"
  }, {
    path: "/account/my-account",
    component: _30293f22,
    name: "account-my-account___en"
  }, {
    path: "/blog/masonry",
    component: _a2e9e068,
    name: "blog-masonry___en"
  }, {
    path: "/blog/sidebar-1",
    component: _774ac647,
    name: "blog-sidebar-1___en"
  }, {
    path: "/blog/sidebar-2",
    component: _7758ddc8,
    name: "blog-sidebar-2___en"
  }, {
    path: "/coming-soon/V1",
    component: _381de757,
    name: "coming-soon-V1___en"
  }, {
    path: "/coming-soon/V2",
    component: _382bfed8,
    name: "coming-soon-V2___en"
  }, {
    path: "/fr/404",
    component: _5b0327f4,
    name: "404___fr"
  }, {
    path: "/fr/about-us",
    component: _ef83625c,
    name: "about-us___fr"
  }, {
    path: "/fr/contact-us",
    component: _74b6ebdf,
    name: "contact-us___fr"
  }, {
    path: "/fr/portfolio",
    component: _0139e487,
    name: "portfolio___fr"
  }, {
    path: "/fr/shop",
    component: _57884ded,
    name: "shop___fr"
  }, {
    path: "/homepage/home-10",
    component: _5272b0c0,
    name: "homepage-home-10___en"
  }, {
    path: "/homepage/home-11",
    component: _525681be,
    name: "homepage-home-11___en"
  }, {
    path: "/homepage/home-12",
    component: _523a52bc,
    name: "homepage-home-12___en"
  }, {
    path: "/homepage/home-13",
    component: _521e23ba,
    name: "homepage-home-13___en"
  }, {
    path: "/homepage/home-14",
    component: _5201f4b8,
    name: "homepage-home-14___en"
  }, {
    path: "/homepage/home-15",
    component: _51e5c5b6,
    name: "homepage-home-15___en"
  }, {
    path: "/homepage/home-2",
    component: _38884241,
    name: "homepage-home-2___en"
  }, {
    path: "/homepage/home-3",
    component: _389659c2,
    name: "homepage-home-3___en"
  }, {
    path: "/homepage/home-4",
    component: _38a47143,
    name: "homepage-home-4___en"
  }, {
    path: "/homepage/home-5",
    component: _38b288c4,
    name: "homepage-home-5___en"
  }, {
    path: "/homepage/home-6",
    component: _38c0a045,
    name: "homepage-home-6___en"
  }, {
    path: "/homepage/home-7",
    component: _38ceb7c6,
    name: "homepage-home-7___en"
  }, {
    path: "/homepage/home-8",
    component: _38dccf47,
    name: "homepage-home-8___en"
  }, {
    path: "/homepage/home-9",
    component: _38eae6c8,
    name: "homepage-home-9___en"
  }, {
    path: "/shop/checkout",
    component: _f56b230a,
    name: "shop-checkout___en"
  }, {
    path: "/shop/grid",
    component: _d9b7fa0a,
    name: "shop-grid___en"
  }, {
    path: "/shop/grid-dark",
    component: _1d1e2090,
    name: "shop-grid-dark___en"
  }, {
    path: "/shop/grid-detail",
    component: _666a9eda,
    name: "shop-grid-detail___en"
  }, {
    path: "/shop/grid-green",
    component: _28e564b1,
    name: "shop-grid-green___en"
  }, {
    path: "/shop/grid-separate",
    component: _3e8d7fe5,
    name: "shop-grid-separate___en"
  }, {
    path: "/shop/list",
    component: _5f38875a,
    name: "shop-list___en"
  }, {
    path: "/shop/list-load-more",
    component: _36202d3c,
    name: "shop-list-load-more___en"
  }, {
    path: "/shop/promo-category",
    component: _43e6a471,
    name: "shop-promo-category___en"
  }, {
    path: "/shop/result",
    component: _4d836912,
    name: "shop-result___en"
  }, {
    path: "/shop/shopping-cart",
    component: _767c3d00,
    name: "shop-shopping-cart___en"
  }, {
    path: "/shop/wishlist",
    component: _1c7c7f7a,
    name: "shop-wishlist___en"
  }, {
    path: "/fr/account/forget-password",
    component: _82ba6256,
    name: "account-forget-password___fr"
  }, {
    path: "/fr/account/my-account",
    component: _30293f22,
    name: "account-my-account___fr"
  }, {
    path: "/fr/blog/masonry",
    component: _a2e9e068,
    name: "blog-masonry___fr"
  }, {
    path: "/fr/blog/sidebar-1",
    component: _774ac647,
    name: "blog-sidebar-1___fr"
  }, {
    path: "/fr/blog/sidebar-2",
    component: _7758ddc8,
    name: "blog-sidebar-2___fr"
  }, {
    path: "/fr/coming-soon/V1",
    component: _381de757,
    name: "coming-soon-V1___fr"
  }, {
    path: "/fr/coming-soon/V2",
    component: _382bfed8,
    name: "coming-soon-V2___fr"
  }, {
    path: "/fr/homepage/home-10",
    component: _5272b0c0,
    name: "homepage-home-10___fr"
  }, {
    path: "/fr/homepage/home-11",
    component: _525681be,
    name: "homepage-home-11___fr"
  }, {
    path: "/fr/homepage/home-12",
    component: _523a52bc,
    name: "homepage-home-12___fr"
  }, {
    path: "/fr/homepage/home-13",
    component: _521e23ba,
    name: "homepage-home-13___fr"
  }, {
    path: "/fr/homepage/home-14",
    component: _5201f4b8,
    name: "homepage-home-14___fr"
  }, {
    path: "/fr/homepage/home-15",
    component: _51e5c5b6,
    name: "homepage-home-15___fr"
  }, {
    path: "/fr/homepage/home-2",
    component: _38884241,
    name: "homepage-home-2___fr"
  }, {
    path: "/fr/homepage/home-3",
    component: _389659c2,
    name: "homepage-home-3___fr"
  }, {
    path: "/fr/homepage/home-4",
    component: _38a47143,
    name: "homepage-home-4___fr"
  }, {
    path: "/fr/homepage/home-5",
    component: _38b288c4,
    name: "homepage-home-5___fr"
  }, {
    path: "/fr/homepage/home-6",
    component: _38c0a045,
    name: "homepage-home-6___fr"
  }, {
    path: "/fr/homepage/home-7",
    component: _38ceb7c6,
    name: "homepage-home-7___fr"
  }, {
    path: "/fr/homepage/home-8",
    component: _38dccf47,
    name: "homepage-home-8___fr"
  }, {
    path: "/fr/homepage/home-9",
    component: _38eae6c8,
    name: "homepage-home-9___fr"
  }, {
    path: "/fr/shop/checkout",
    component: _f56b230a,
    name: "shop-checkout___fr"
  }, {
    path: "/fr/shop/grid",
    component: _d9b7fa0a,
    name: "shop-grid___fr"
  }, {
    path: "/fr/shop/grid-dark",
    component: _1d1e2090,
    name: "shop-grid-dark___fr"
  }, {
    path: "/fr/shop/grid-detail",
    component: _666a9eda,
    name: "shop-grid-detail___fr"
  }, {
    path: "/fr/shop/grid-green",
    component: _28e564b1,
    name: "shop-grid-green___fr"
  }, {
    path: "/fr/shop/grid-separate",
    component: _3e8d7fe5,
    name: "shop-grid-separate___fr"
  }, {
    path: "/fr/shop/list",
    component: _5f38875a,
    name: "shop-list___fr"
  }, {
    path: "/fr/shop/list-load-more",
    component: _36202d3c,
    name: "shop-list-load-more___fr"
  }, {
    path: "/fr/shop/promo-category",
    component: _43e6a471,
    name: "shop-promo-category___fr"
  }, {
    path: "/fr/shop/result",
    component: _4d836912,
    name: "shop-result___fr"
  }, {
    path: "/fr/shop/shopping-cart",
    component: _767c3d00,
    name: "shop-shopping-cart___fr"
  }, {
    path: "/fr/shop/wishlist",
    component: _1c7c7f7a,
    name: "shop-wishlist___fr"
  }, {
    path: "/fr/product/layout/layout-1/:id?",
    component: _4ecaabda,
    name: "product-layout-layout-1-id___fr"
  }, {
    path: "/fr/product/layout/layout-2/:id?",
    component: _39e1ca4a,
    name: "product-layout-layout-2-id___fr"
  }, {
    path: "/fr/product/layout/layout-3/:id?",
    component: _775389dc,
    name: "product-layout-layout-3-id___fr"
  }, {
    path: "/fr/product/layout/layout-4/:id?",
    component: _0b97f8dd,
    name: "product-layout-layout-4-id___fr"
  }, {
    path: "/fr/product/layout/layout-5/:id?",
    component: _c0473044,
    name: "product-layout-layout-5-id___fr"
  }, {
    path: "/fr/product/layout/layout-6/:id?",
    component: _3420d6df,
    name: "product-layout-layout-6-id___fr"
  }, {
    path: "/fr/product/layout/layout-7/:id?",
    component: _6f357440,
    name: "product-layout-layout-7-id___fr"
  }, {
    path: "/fr/product/layout/product-sold-out/:id?",
    component: _8e373d02,
    name: "product-layout-product-sold-out-id___fr"
  }, {
    path: "/fr/product/layout/product-variable/:id?",
    component: _213d0e26,
    name: "product-layout-product-variable-id___fr"
  }, {
    path: "/fr/blog/post-detail-1/:id?",
    component: _7dbc6d98,
    name: "blog-post-detail-1-id___fr"
  }, {
    path: "/fr/blog/post-detail-2/:id?",
    component: _55663835,
    name: "blog-post-detail-2-id___fr"
  }, {
    path: "/product/layout/layout-1/:id?",
    component: _4ecaabda,
    name: "product-layout-layout-1-id___en"
  }, {
    path: "/product/layout/layout-2/:id?",
    component: _39e1ca4a,
    name: "product-layout-layout-2-id___en"
  }, {
    path: "/product/layout/layout-3/:id?",
    component: _775389dc,
    name: "product-layout-layout-3-id___en"
  }, {
    path: "/product/layout/layout-4/:id?",
    component: _0b97f8dd,
    name: "product-layout-layout-4-id___en"
  }, {
    path: "/product/layout/layout-5/:id?",
    component: _c0473044,
    name: "product-layout-layout-5-id___en"
  }, {
    path: "/product/layout/layout-6/:id?",
    component: _3420d6df,
    name: "product-layout-layout-6-id___en"
  }, {
    path: "/product/layout/layout-7/:id?",
    component: _6f357440,
    name: "product-layout-layout-7-id___en"
  }, {
    path: "/product/layout/product-sold-out/:id?",
    component: _8e373d02,
    name: "product-layout-product-sold-out-id___en"
  }, {
    path: "/product/layout/product-variable/:id?",
    component: _213d0e26,
    name: "product-layout-product-variable-id___en"
  }, {
    path: "/blog/post-detail-1/:id?",
    component: _7dbc6d98,
    name: "blog-post-detail-1-id___en"
  }, {
    path: "/blog/post-detail-2/:id?",
    component: _55663835,
    name: "blog-post-detail-2-id___en"
  }, {
    path: "/fr/portfolio/:id",
    component: _49355caf,
    name: "portfolio-id___fr"
  }, {
    path: "/portfolio/:id",
    component: _49355caf,
    name: "portfolio-id___en"
  }, {
    path: "/",
    component: _6ae29ce4,
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
