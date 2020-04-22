webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/usersReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/usersReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usersReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    users: {
      'obafad94@gmail.com': 'obafad94@gmail.com'
    },
    current_user: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_USERS':
      return {
        state: state
      };

    case 'ADD_USER':
      return _objectSpread({}, state, {
        users: _objectSpread({}, state.users, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.username, action.password))
      });

    case 'LOG_IN':
      return _objectSpread({}, state, {
        current_user: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.username, action.password)
      });

    case 'LOG_OUT':
      return _objectSpread({}, state, {
        current_user: {}
      });

    default:
      return state;
  }
}
;

/***/ })

})
//# sourceMappingURL=_app.js.06ec6e097a382ac530aa.hot-update.js.map