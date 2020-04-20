webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./redux/actions/product_actions.js":
/*!******************************************!*\
  !*** ./redux/actions/product_actions.js ***!
  \******************************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony import */ var _action_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types.js */ "./redux/action-types.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shopify-buy */ "./node_modules/shopify-buy/index.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_1__);



var client = shopify_buy__WEBPACK_IMPORTED_MODULE_1___default.a.buildClient({
  storefrontAccessToken: '26853603f3b67fead6e3bcf3ee602758',
  domain: 'a-very-small-store.myshopify.com'
}); // export function productIs1() {
// 	return {type: PRODUCT_IS_1};
// }

var getProducts = function getProducts() {
  return function (dispatch) {
    client.product.fetchAll().then(function (product) {
      return dispatch({
        type: _action_types_js__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"],
        payload: product
      });
    });
  };
};

/***/ })

})
//# sourceMappingURL=menu.js.34a4eb7c5bb1e7e077fd.hot-update.js.map