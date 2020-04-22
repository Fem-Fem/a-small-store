webpackHotUpdate("static\\development\\pages\\cart.js",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Product */ "./components/Product.js");
var _jsxFileName = "C:\\Users\\obafa\\Documents\\chef-femi\\pages\\cart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Show() {
  var this_cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.cart.cart;
  });
  var arr_prod = [];
  var arr_quant = [];
  var hash = {};

  for (var i = 0; i < this_cart.length; i++) {
    if (hash[this_cart[i]] == null) {
      hash[this_cart[i]] = 1;
      arr_prod.push(this_cart[i]);
      arr_quant.push(1);
    } else {
      hash[this_cart[i]] = hash[this_cart[i]] + 1;
      arr_quant[arr_prod.indexOf(this_cart[i])] = arr_quant[arr_prod.indexOf(this_cart[i])] + 1;
    }
  } // for (var key in hash) {
  // 	console.log(this_cart[0].title)
  // 	console.log(key)
  // 	let new_hash = {};
  // 	new_hash.product = key;
  // 	new_hash.quantity = hash[key];
  // 	arr.push(new_hash);
  // 	console.log(new_hash)
  // 	console.log(new_hash.product)
  // 	console.log(new_hash.product.title)
  // }
  // console.log(arr[0].product)
  // console.log(arr.map(product => <div>{product.title}</div>))


  console.log(arr_prod[0].title); // return arr_prod.map(product => <Product key={product} this_product={product}/>)
  // return <div>Hi</div>
}

function Cart() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, __jsx(Show, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }));
}

/***/ })

})
//# sourceMappingURL=cart.js.30168cf087757a3a2ac8.hot-update.js.map