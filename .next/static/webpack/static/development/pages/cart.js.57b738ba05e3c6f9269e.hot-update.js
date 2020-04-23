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
/* harmony import */ var _components_Format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Format */ "./components/Format.jsx");
var _jsxFileName = "C:\\Users\\obafa\\Documents\\chef-femi\\pages\\cart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Show() {
  var _this = this;

  var this_cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.cart.cart;
  });
  var arr_prod = [];
  var arr_quant = [];
  var hash = {};

  for (var i = 0; i < this_cart.length; i++) {
    console.log(this_cart[i]);
    console.log(this_cart[i].title);
    console.log(hash[this_cart[i]]);

    if (hash[this_cart[i].title] == null) {
      hash[this_cart[i].title] = 1;
      arr_prod.push(this_cart[i]);
      arr_quant.push(1);
    } else {
      hash[this_cart[i]] = hash[this_cart[i]] + 1;
      arr_quant[arr_prod.indexOf(this_cart[i])] = arr_quant[arr_prod.indexOf(this_cart[i])] + 1;
    }
  }

  console.log(arr_prod);
  return arr_prod.map(function (product) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 34
      }
    }, __jsx(_components_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: product,
      this_product: product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 39
      }
    }), " ", arr_quant[arr_prod.indexOf(product)]);
  }); // return <div>Hi</div>
}

function Cart() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, __jsx(Show, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }));
}

/***/ })

})
//# sourceMappingURL=cart.js.57b738ba05e3c6f9269e.hot-update.js.map