webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/productsReducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/productsReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productsReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import Client from 'shopify-buy';
// const client = Client.buildClient({
// 	storefrontAccessToken: '26853603f3b67fead6e3bcf3ee602758',
// 	domain: 'a-very-small-store.myshopify.com'
// })
function productsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    products: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_PRODUCTS':
      return _objectSpread({}, state, {
        products: action.payload
      });

    default:
      return state;
  }
}
;

/***/ })

})
//# sourceMappingURL=_app.js.d1c6d0e1bc1011106f63.hot-update.js.map