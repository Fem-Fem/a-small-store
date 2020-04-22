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
  var _this = this;

  var this_cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.cart.cart;
  });
  var arr = [];
  var hash = {};

  for (var i = 0; i < this_cart.length; i++) {
    console.log(this_cart[i]);
    console.log(hash[this_cart[i]] == null);

    if (hash[this_cart[i]] == null) {
      console.log('isnull');
      hash[this_cart[i]] = 1;
    } else {
      hash[this_cart[i]] = hash[this_cart[i]] + 1;
    }

    console.log('HASH');
    console.log(hash);
  }

  for (var key in hash) {
    arr.push({
      key: hash[key]
    }); // console.log(key);
    // console.log(hash[key])
  }

  console.log(arr[0].title); // console.log(arr.map(product => <div>{product.title}</div>))

  return arr.map(function (product) {
    return __jsx(_components_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: product.title,
      this_product: product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    });
  }); // return <div>Hi</div>
}

function Cart() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx(Show, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }));
}

/***/ })

})
//# sourceMappingURL=cart.js.b7b003c6f659130b65a8.hot-update.js.map