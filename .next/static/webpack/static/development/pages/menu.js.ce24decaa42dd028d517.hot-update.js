webpackHotUpdate("static\\development\\pages\\menu.js",{

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Product */ "./components/Product.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shopify-buy */ "./node_modules/shopify-buy/index.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_product_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/product_actions */ "./redux/actions/product_actions.js");
/* harmony import */ var _components_Format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Format */ "./components/Format.jsx");





var _jsxFileName = "C:\\Users\\obafa\\Documents\\chef-femi\\pages\\menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var arr = [];
var client = shopify_buy__WEBPACK_IMPORTED_MODULE_9___default.a.buildClient({
  storefrontAccessToken: '26853603f3b67fead6e3bcf3ee602758',
  domain: 'a-very-small-store.myshopify.com'
});
client.product.fetchAll().then(function (res) {
  return res.forEach(function (i) {
    return arr.push(i);
  });
});

var Menu = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Menu);

    _this = _super.call(this, props);
    _this.state = {
      products: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getProducts();
      client.product.fetchAll().then(function (res) {
        _this2.setState({
          products: [res]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 4
        }
      }, __jsx(_components_Format__WEBPACK_IMPORTED_MODULE_12__["Title"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 5
        }
      }, "Menu"), this.props.products.map(function (product) {
        return __jsx(_components_Format__WEBPACK_IMPORTED_MODULE_12__["Item"], {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 41
          }
        }, __jsx(_components_Product__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: product.title,
          this_product: product,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 47
          }
        }));
      }));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

function mapStateToProps(state) {
  return {
    products: state.products.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: function getProducts() {
      return dispatch(Object(_redux_actions_product_actions__WEBPACK_IMPORTED_MODULE_11__["getProducts"])());
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Menu));

/***/ })

})
//# sourceMappingURL=menu.js.ce24decaa42dd028d517.hot-update.js.map