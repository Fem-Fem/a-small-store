webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/rootReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _productsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsReducer */ "./redux/reducers/productsReducer.js");
/* harmony import */ var _cartsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartsReducer */ "./redux/reducers/cartsReducer.js");



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  products: _productsReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  cart: _cartsReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=_app.js.fa151b97b8b9d9828e9d.hot-update.js.map