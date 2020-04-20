(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
/*!******************************************************!*\
  !*** ./node_modules/next-redux-wrapper/es6/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var defaultConfig = {
    storeKey: '__NEXT_REDUX_STORE__',
    debug: false,
    serializeState: function (state) { return state; },
    deserializeState: function (state) { return state; },
};
/* harmony default export */ __webpack_exports__["default"] = (function (makeStore, config) {
    var defaultedConfig = __assign(__assign({}, defaultConfig), config);
    var isServer = typeof window === 'undefined';
    var initStore = function (_a) {
        var initialState = _a.initialState, ctx = _a.ctx;
        var storeKey = defaultedConfig.storeKey;
        var createStore = function () {
            return makeStore(defaultedConfig.deserializeState(initialState), __assign(__assign(__assign({}, ctx), config), { isServer: isServer }));
        };
        if (isServer)
            return createStore();
        // Memoize store if client
        if (!(storeKey in window)) {
            window[storeKey] = createStore();
        }
        return window[storeKey];
    };
    return function (App) { var _a; return _a = /** @class */ (function (_super) {
            __extends(WrappedApp, _super);
            function WrappedApp(props, context) {
                var _this = _super.call(this, props, context) || this;
                var initialState = props.initialState;
                if (defaultedConfig.debug)
                    console.log('4. WrappedApp.render created new store with initialState', initialState);
                _this.store = initStore({
                    ctx: context.ctx,
                    initialState: initialState,
                });
                return _this;
            }
            WrappedApp.prototype.render = function () {
                var _a = this.props, initialProps = _a.initialProps, initialState = _a.initialState, props = __rest(_a, ["initialProps", "initialState"]);
                // Cmp render must return something like <Provider><Component/></Provider>
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, __assign({}, props, initialProps, { store: this.store }));
            };
            return WrappedApp;
        }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])),
        /* istanbul ignore next */
        _a.displayName = "withRedux(" + (App.displayName || App.name || 'App') + ")",
        _a.getInitialProps = function (appCtx) { return __awaiter(void 0, void 0, void 0, function () {
            var store, initialProps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        /* istanbul ignore next */
                        if (!appCtx)
                            throw new Error('No app context');
                        /* istanbul ignore next */
                        if (!appCtx.ctx)
                            throw new Error('No page context');
                        store = initStore({
                            ctx: appCtx.ctx,
                        });
                        if (defaultedConfig.debug)
                            console.log('1. WrappedApp.getInitialProps wrapper got the store with state', store.getState());
                        appCtx.ctx.store = store;
                        appCtx.ctx.isServer = isServer;
                        initialProps = {};
                        if (!('getInitialProps' in App)) return [3 /*break*/, 2];
                        return [4 /*yield*/, App.getInitialProps.call(App, appCtx)];
                    case 1:
                        initialProps = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (defaultedConfig.debug)
                            console.log('3. WrappedApp.getInitialProps has store state', store.getState());
                        return [2 /*return*/, {
                                isServer: isServer,
                                initialState: isServer ? defaultedConfig.serializeState(store.getState()) : store.getState(),
                                initialProps: initialProps,
                            }];
                }
            });
        }); },
        _a; };
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_ref) {
  var Component, ctx, pageProps;
  return _regeneratorRuntime.async(function appGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, ctx = _ref.ctx;
          _context.next = 3;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(Component, ctx));

        case 3:
          pageProps = _context.sent;
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidCatch",
    // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          __N_SSG = _this$props.__N_SSG,
          __N_SSP = _this$props.__N_SSP;
      return _react["default"].createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
      // methods like getStaticProps and getServerSideProps
      !(__N_SSG || __N_SSP) ? {
        url: createUrl(router)
      } : {}));
    }
  }]);

  return App;
}(_react["default"].Component);

exports["default"] = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(function () {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(function () {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: function back() {
      if (true) warnUrl();
      router.back();
    },
    push: function push(url, as) {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__["default"](store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }),
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-redux/node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["useIsomorphicLayoutEffect"])(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isContextConsumer"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__["default"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Connect, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"];
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__["ReactReduxContext"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__["useStore"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__["createStoreHook"])(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReduxContext", function() { return useReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"]);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__["default"](store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["useIsomorphicLayoutEffect"])(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if ( true && !selector) {
      throw new Error("You must pass a selector to useSelectors");
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"];
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__["ReactReduxContext"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__["useReduxContext"] : function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore =
/*#__PURE__*/
createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDispatch", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__["createDispatchHook"]; });

/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelector", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["useSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__["createSelectorHook"]; });

/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["createStoreHook"]; });

/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "batch", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]; });

/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__["default"]; });











Object(_utils_batch__WEBPACK_IMPORTED_MODULE_7__["setBatch"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__["unstable_batchedUpdates"]);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscription; });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__["getBatch"])();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBatch", function() { return setBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatch", function() { return getBatch; });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });

/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return useIsomorphicLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/shopify-buy/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shopify-buy/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
      The MIT License (MIT)

Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

      */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};









const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");


var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits$1 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/*
The MIT License (MIT)
Copyright (c) 2016 Shopify Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.


*/
function join() {
  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
    fields[_key] = arguments[_key];
  }

  return fields.join(' ');
}

function isObject(value) {
  return Boolean(value) && Object.prototype.toString.call(value.valueOf()) === '[object Object]';
}

function deepFreezeCopyExcept(predicate, structure) {
  if (predicate(structure)) {
    return structure;
  } else if (isObject(structure)) {
    return Object.freeze(Object.keys(structure).reduce(function (copy, key) {
      copy[key] = deepFreezeCopyExcept(predicate, structure[key]);

      return copy;
    }, {}));
  } else if (Array.isArray(structure)) {
    return Object.freeze(structure.map(function (item) {
      return deepFreezeCopyExcept(predicate, item);
    }));
  } else {
    return structure;
  }
}

function schemaForType(typeBundle, typeName) {
  var typeSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var type = typeBundle.types[typeName];

  if (type) {
    return type;
  } else if (typeSchema && typeSchema.kind === 'INTERFACE') {
    return typeSchema;
  }

  throw new Error('No type of ' + typeName + ' found in schema');
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
};

var VariableDefinition = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#variable} to create a VariableDefinition.
   *
   * @param {String} name The name of the variable.
   * @param {String} type The GraphQL type of the variable.
   * @param {*} [defaultValue] The default value of the variable.
   */
  function VariableDefinition(name, type, defaultValue) {
    classCallCheck(this, VariableDefinition);

    this.name = name;
    this.type = type;
    this.defaultValue = defaultValue;
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the variable as an input value (e.g. `$variableName`).
   *
   * @return {String} The GraphQL query string for the variable as an input value.
   */

  createClass(VariableDefinition, [{
    key: 'toInputValueString',
    value: function toInputValueString() {
      return '$' + this.name;
    }

    /**
     * Returns the GraphQL query string for the variable (e.g. `$variableName:VariableType = defaultValue`).
     *
     * @return {String} The GraphQL query string for the variable.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var defaultValueString = this.defaultValue ? ' = ' + formatInputValue(this.defaultValue) : '';

      return '$' + this.name + ':' + this.type + defaultValueString;
    }
  }]);
  return VariableDefinition;
}();

function isVariable(value) {
  return VariableDefinition.prototype.isPrototypeOf(value);
}

function variable(name, type, defaultValue) {
  return new VariableDefinition(name, type, defaultValue);
}

var Enum = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#enum} to create an Enum.
   *
   * @param {String} key The key of the enum.
   */
  function Enum(key) {
    classCallCheck(this, Enum);

    this.key = key;
  }

  /**
   * Returns the GraphQL query string for the enum (e.g. `enumKey`).
   *
   * @return {String} The GraphQL query string for the enum.
   */

  createClass(Enum, [{
    key: "toString",
    value: function toString() {
      return this.key;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.key.valueOf();
    }
  }]);
  return Enum;
}();

var enumFunction = function enumFunction(key) {
  return new Enum(key);
};

var Scalar = function () {
  function Scalar(value) {
    classCallCheck(this, Scalar);

    this.value = value;
  }

  createClass(Scalar, [{
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value.valueOf();
    }
  }, {
    key: "unwrapped",
    get: function get$$1() {
      return this.value;
    }
  }]);
  return Scalar;
}();

function formatInputValue(value) {
  if (VariableDefinition.prototype.isPrototypeOf(value)) {
    return value.toInputValueString();
  } else if (Enum.prototype.isPrototypeOf(value)) {
    return String(value);
  } else if (Scalar.prototype.isPrototypeOf(value)) {
    return JSON.stringify(value.valueOf());
  } else if (Array.isArray(value)) {
    return '[' + join.apply(undefined, toConsumableArray(value.map(formatInputValue))) + ']';
  } else if (isObject(value)) {
    return formatObject(value, '{', '}');
  } else {
    return JSON.stringify(value);
  }
}

function formatObject(value) {
  var openChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var closeChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var argPairs = Object.keys(value).map(function (key) {
    return key + ': ' + formatInputValue(value[key]);
  });

  return '' + openChar + join.apply(undefined, toConsumableArray(argPairs)) + closeChar;
}

function formatArgs(args) {
  if (!Object.keys(args).length) {
    return '';
  }

  return ' (' + formatObject(args) + ')';
}

function formatDirectives(directives) {
  if (!Object.keys(directives).length) {
    return '';
  }

  var directiveStrings = Object.keys(directives).map(function (key) {
    var directiveArgs = directives[key];
    var arg = directiveArgs && Object.keys(directiveArgs).length ? '(' + formatObject(directiveArgs) + ')' : '';

    return '@' + key + arg;
  });

  return ' ' + join.apply(undefined, toConsumableArray(directiveStrings));
}

// eslint-disable-next-line no-empty-function
var noop = function noop() {};

var Profiler = {
  trackTypeDependency: noop,
  trackFieldDependency: noop
};

var trackTypeDependency = Profiler.trackTypeDependency;
var trackFieldDependency = Profiler.trackFieldDependency;

function parseFieldCreationArgs(creationArgs) {
  var callback = noop;
  var options = {};
  var selectionSet = null;

  if (creationArgs.length === 2) {
    if (typeof creationArgs[1] === 'function') {
      var _creationArgs = slicedToArray(creationArgs, 2);

      options = _creationArgs[0];
      callback = _creationArgs[1];
    } else {
      var _creationArgs2 = slicedToArray(creationArgs, 2);

      options = _creationArgs2[0];
      selectionSet = _creationArgs2[1];
    }
  } else if (creationArgs.length === 1) {
    // SelectionSet is defined before this function is called since it's
    // called by SelectionSet
    // eslint-disable-next-line no-use-before-define
    if (SelectionSet.prototype.isPrototypeOf(creationArgs[0])) {
      selectionSet = creationArgs[0];
    } else if (typeof creationArgs[0] === 'function') {
      callback = creationArgs[0];
    } else {
      options = creationArgs[0];
    }
  }

  return { options: options, selectionSet: selectionSet, callback: callback };
}

var emptyArgs = Object.freeze({});
var emptyDirectives = Object.freeze({});

var Field = function () {

  /**
   * This constructor should not be invoked directly.
   * Fields are added to a selection by {@link SelectionSetBuilder#add}, {@link SelectionSetBuilder#addConnection}
   * and {@link SelectionSetBuilder#addInlineFragmentOn}.
   *
   * @param {String} name The name of the field.
   * @param {Object} [options] An options object containing:
   *   @param {Object} [options.args] Arguments for the field.
   *   @param {String} [options.alias] An alias for the field.
   *   @param {Object} [options.directives] Directives for the field.
   * @param {SelectionSet} selectionSet The selection set on the field.
   */
  function Field(name, options, selectionSet) {
    classCallCheck(this, Field);

    this.name = name;
    this.alias = options.alias || null;
    this.responseKey = this.alias || this.name;
    this.args = options.args ? deepFreezeCopyExcept(isVariable, options.args) : emptyArgs;
    this.directives = options.directives ? deepFreezeCopyExcept(isVariable, options.directives) : emptyDirectives;
    this.selectionSet = selectionSet;
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the Field (e.g. `catAlias: cat(size: 'small') { name }` or `name`).
   *
   * @return {String} The GraphQL query string for the Field.
   */

  createClass(Field, [{
    key: 'toString',
    value: function toString() {
      var aliasPrefix = this.alias ? this.alias + ': ' : '';

      return '' + aliasPrefix + this.name + formatArgs(this.args) + formatDirectives(this.directives) + this.selectionSet;
    }
  }]);
  return Field;
}();

// This is an interface that defines a usage, and simplifies type checking
var Spread = function Spread() {
  classCallCheck(this, Spread);
};

var InlineFragment = function (_Spread) {
  inherits(InlineFragment, _Spread);

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link SelectionSetBuilder#addInlineFragmentOn} to create an InlineFragment.
   *
   * @param {String} typeName The type of the fragment.
   * @param {SelectionSet} selectionSet The selection set on the fragment.
   */
  function InlineFragment(typeName, selectionSet) {
    classCallCheck(this, InlineFragment);

    var _this = possibleConstructorReturn(this, (InlineFragment.__proto__ || Object.getPrototypeOf(InlineFragment)).call(this));

    _this.typeName = typeName;
    _this.selectionSet = selectionSet;
    Object.freeze(_this);
    return _this;
  }

  /**
   * Returns the GraphQL query string for the InlineFragment (e.g. `... on Cat { name }`).
   *
   * @return {String} The GraphQL query string for the InlineFragment.
   */

  createClass(InlineFragment, [{
    key: 'toString',
    value: function toString() {
      return '... on ' + this.typeName + this.selectionSet;
    }
  }]);
  return InlineFragment;
}(Spread);

var FragmentSpread = function (_Spread2) {
  inherits(FragmentSpread, _Spread2);

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Document#defineFragment} to create a FragmentSpread.
   *
   * @param {FragmentDefinition} fragmentDefinition The corresponding fragment definition.
   */
  function FragmentSpread(fragmentDefinition) {
    classCallCheck(this, FragmentSpread);

    var _this2 = possibleConstructorReturn(this, (FragmentSpread.__proto__ || Object.getPrototypeOf(FragmentSpread)).call(this));

    _this2.name = fragmentDefinition.name;
    _this2.selectionSet = fragmentDefinition.selectionSet;
    Object.freeze(_this2);
    return _this2;
  }

  /**
   * Returns the GraphQL query string for the FragmentSpread (e.g. `...catName`).
   *
   * @return {String} The GraphQL query string for the FragmentSpread.
   */

  createClass(FragmentSpread, [{
    key: 'toString',
    value: function toString() {
      return '...' + this.name;
    }
  }, {
    key: 'toDefinition',
    value: function toDefinition() {
      // eslint-disable-next-line no-use-before-define
      return new FragmentDefinition(this.name, this.selectionSet.typeSchema.name, this.selectionSet);
    }
  }]);
  return FragmentSpread;
}(Spread);

var FragmentDefinition = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Document#defineFragment} to create a FragmentDefinition on a {@link Document}.
   *
   * @param {String} name The name of the fragment definition.
   * @param {String} typeName The type of the fragment.
   */
  function FragmentDefinition(name, typeName, selectionSet) {
    classCallCheck(this, FragmentDefinition);

    this.name = name;
    this.typeName = typeName;
    this.selectionSet = selectionSet;
    this.spread = new FragmentSpread(this);
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the FragmentDefinition (e.g. `fragment catName on Cat { name }`).
   *
   * @return {String} The GraphQL query string for the FragmentDefinition.
   */

  createClass(FragmentDefinition, [{
    key: 'toString',
    value: function toString() {
      return 'fragment ' + this.name + ' on ' + this.typeName + ' ' + this.selectionSet;
    }
  }]);
  return FragmentDefinition;
}();

function selectionsHaveIdField(selections) {
  return selections.some(function (fieldOrFragment) {
    if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
      return fieldOrFragment.name === 'id';
    } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
      return selectionsHaveIdField(fieldOrFragment.selectionSet.selections);
    }

    return false;
  });
}

function selectionsHaveTypenameField(selections) {
  return selections.some(function (fieldOrFragment) {
    if (Field.prototype.isPrototypeOf(fieldOrFragment)) {
      return fieldOrFragment.name === '__typename';
    } else if (Spread.prototype.isPrototypeOf(fieldOrFragment) && fieldOrFragment.selectionSet.typeSchema.implementsNode) {
      return selectionsHaveTypenameField(fieldOrFragment.selectionSet.selections);
    }

    return false;
  });
}

function indexSelectionsByResponseKey(selections) {
  function assignOrPush(obj, key, value) {
    if (Array.isArray(obj[key])) {
      obj[key].push(value);
    } else {
      obj[key] = [value];
    }
  }
  var unfrozenObject = selections.reduce(function (acc, selection) {
    if (selection.responseKey) {
      assignOrPush(acc, selection.responseKey, selection);
    } else {
      var responseKeys = Object.keys(selection.selectionSet.selectionsByResponseKey);

      responseKeys.forEach(function (responseKey) {
        assignOrPush(acc, responseKey, selection);
      });
    }

    return acc;
  }, {});

  Object.keys(unfrozenObject).forEach(function (key) {
    Object.freeze(unfrozenObject[key]);
  });

  return Object.freeze(unfrozenObject);
}

/**
 * Class that specifies the full selection of data to query.
 */

var SelectionSet = function () {

  /**
   * This constructor should not be invoked directly. SelectionSets are created when building queries/mutations.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {(Object|String)} type The type of the current selection.
   * @param {Function} builderFunction Callback function used to build the SelectionSet.
   *   The callback takes a {@link SelectionSetBuilder} as its argument.
   */
  function SelectionSet(typeBundle, type, builderFunction) {
    classCallCheck(this, SelectionSet);

    if (typeof type === 'string') {
      this.typeSchema = schemaForType(typeBundle, type);
    } else {
      this.typeSchema = type;
    }

    trackTypeDependency(this.typeSchema.name);

    this.typeBundle = typeBundle;
    this.selections = [];
    if (builderFunction) {
      // eslint-disable-next-line no-use-before-define
      builderFunction(new SelectionSetBuilder(this.typeBundle, this.typeSchema, this.selections));
    }

    if (this.typeSchema.implementsNode || this.typeSchema.name === 'Node') {
      if (!selectionsHaveIdField(this.selections)) {
        this.selections.unshift(new Field('id', {}, new SelectionSet(typeBundle, 'ID')));
      }
    }

    if (this.typeSchema.kind === 'INTERFACE') {
      if (!selectionsHaveTypenameField(this.selections)) {
        this.selections.unshift(new Field('__typename', {}, new SelectionSet(typeBundle, 'String')));
      }
    }

    this.selectionsByResponseKey = indexSelectionsByResponseKey(this.selections);
    Object.freeze(this.selections);
    Object.freeze(this);
  }

  /**
   * Returns the GraphQL query string for the SelectionSet (e.g. `{ cat { name } }`).
   *
   * @return {String} The GraphQL query string for the SelectionSet.
   */

  createClass(SelectionSet, [{
    key: 'toString',
    value: function toString() {
      if (this.typeSchema.kind === 'SCALAR' || this.typeSchema.kind === 'ENUM') {
        return '';
      } else {
        return ' { ' + join(this.selections) + ' }';
      }
    }
  }]);
  return SelectionSet;
}();

var SelectionSetBuilder = function () {

  /**
   * This constructor should not be invoked directly. SelectionSetBuilders are created when building queries/mutations.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {Object} typeSchema The schema object for the type of the current selection.
   * @param {Field[]} selections The fields on the current selection.
   */
  function SelectionSetBuilder(typeBundle, typeSchema, selections) {
    classCallCheck(this, SelectionSetBuilder);

    this.typeBundle = typeBundle;
    this.typeSchema = typeSchema;
    this.selections = selections;
  }

  createClass(SelectionSetBuilder, [{
    key: 'hasSelectionWithResponseKey',
    value: function hasSelectionWithResponseKey(responseKey) {
      return this.selections.some(function (field) {
        return field.responseKey === responseKey;
      });
    }

    /**
     * Adds a field to be queried on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.add('cat', {args: {id: '123456'}, alias: 'meow'}, (cat) => {
     *     cat.add('name');
     *   });
     * });
     *
     * @param {SelectionSet|String} selectionOrFieldName The selection or name of the field to add.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{id: '123456'}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function|SelectionSet} [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'add',
    value: function add(selectionOrFieldName) {
      var selection = void 0;

      if (Object.prototype.toString.call(selectionOrFieldName) === '[object String]') {
        trackFieldDependency(this.typeSchema.name, selectionOrFieldName);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        selection = this.field.apply(this, [selectionOrFieldName].concat(rest));
      } else {
        if (Field.prototype.isPrototypeOf(selectionOrFieldName)) {
          trackFieldDependency(this.typeSchema.name, selectionOrFieldName.name);
        }

        selection = selectionOrFieldName;
      }

      if (selection.responseKey && this.hasSelectionWithResponseKey(selection.responseKey)) {
        throw new Error('The field name or alias \'' + selection.responseKey + '\' has already been added.');
      }
      this.selections.push(selection);
    }
  }, {
    key: 'field',
    value: function field(name) {
      for (var _len2 = arguments.length, creationArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        creationArgs[_key2 - 1] = arguments[_key2];
      }

      var parsedArgs = parseFieldCreationArgs(creationArgs);
      var options = parsedArgs.options,
          callback = parsedArgs.callback;
      var selectionSet = parsedArgs.selectionSet;

      if (!selectionSet) {
        if (!this.typeSchema.fieldBaseTypes[name]) {
          throw new Error('No field of name "' + name + '" found on type "' + this.typeSchema.name + '" in schema');
        }

        var fieldBaseType = schemaForType(this.typeBundle, this.typeSchema.fieldBaseTypes[name]);

        selectionSet = new SelectionSet(this.typeBundle, fieldBaseType, callback);
      }

      return new Field(name, options, selectionSet);
    }

    /**
     * Creates an inline fragment.
     *
     * @access private
     * @param {String} typeName The type  the inline fragment.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     * @return {InlineFragment} An inline fragment.
     */

  }, {
    key: 'inlineFragmentOn',
    value: function inlineFragmentOn(typeName) {
      var builderFunctionOrSelectionSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var selectionSet = void 0;

      if (SelectionSet.prototype.isPrototypeOf(builderFunctionOrSelectionSet)) {
        selectionSet = builderFunctionOrSelectionSet;
      } else {
        selectionSet = new SelectionSet(this.typeBundle, schemaForType(this.typeBundle, typeName), builderFunctionOrSelectionSet);
      }

      return new InlineFragment(typeName, selectionSet);
    }

    /**
     * Adds a field to be queried on the current selection.
     *
     * @access private
     * @param {String}    name The name of the field to add to the query.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{id: '123456'}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function}  [callback] Callback which will be used to create a new {@link SelectionSet} for the field added.
     */

  }, {
    key: 'addField',
    value: function addField(name) {
      for (var _len3 = arguments.length, creationArgs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        creationArgs[_key3 - 1] = arguments[_key3];
      }

      this.add.apply(this, [name].concat(creationArgs));
    }

    /**
     * Adds a connection to be queried on the current selection.
     * This adds all the fields necessary for pagination.
     *
     * @example
     * client.query((root) => {
     *   root.add('cat', (cat) => {
     *     cat.addConnection('friends', {args: {first: 10}, alias: 'coolCats'}, (friends) => {
     *       friends.add('name');
     *     });
     *   });
     * });
     *
     * @param {String}    name The name of the connection to add to the query.
     * @param {Object} [options] Options on the query including:
     *   @param {Object} [options.args] Arguments on the query (e.g. `{first: 10}`).
     *   @param {String} [options.alias] Alias for the field being added.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'addConnection',
    value: function addConnection(name) {
      for (var _len4 = arguments.length, creationArgs = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        creationArgs[_key4 - 1] = arguments[_key4];
      }

      var _parseFieldCreationAr = parseFieldCreationArgs(creationArgs),
          options = _parseFieldCreationAr.options,
          callback = _parseFieldCreationAr.callback,
          selectionSet = _parseFieldCreationAr.selectionSet;

      this.add(name, options, function (connection) {
        connection.add('pageInfo', {}, function (pageInfo) {
          pageInfo.add('hasNextPage');
          pageInfo.add('hasPreviousPage');
        });
        connection.add('edges', {}, function (edges) {
          edges.add('cursor');
          edges.addField('node', {}, selectionSet || callback); // This is bad. Don't do this
        });
      });
    }

    /**
     * Adds an inline fragment on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.add('animal', (animal) => {
     *     animal.addInlineFragmentOn('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {String} typeName The name of the type of the inline fragment.
     * @param {Function|SelectionSet}  [callbackOrSelectionSet] Either a callback which will be used to create a new {@link SelectionSet}, or an existing {@link SelectionSet}.
     */

  }, {
    key: 'addInlineFragmentOn',
    value: function addInlineFragmentOn(typeName) {
      var fieldTypeCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      this.add(this.inlineFragmentOn(typeName, fieldTypeCb));
    }

    /**
     * Adds a fragment spread on the current selection.
     *
     * @example
     * client.query((root) => {
     *   root.addFragment(catFragmentSpread);
     * });
     *
     * @param {FragmentSpread} fragmentSpread The fragment spread to add.
     */

  }, {
    key: 'addFragment',
    value: function addFragment(fragmentSpread) {
      this.add(fragmentSpread);
    }
  }]);
  return SelectionSetBuilder;
}();

function parseArgs(args) {
  var name = void 0;
  var variables = void 0;
  var selectionSetCallback = void 0;

  if (args.length === 3) {
    var _args = slicedToArray(args, 3);

    name = _args[0];
    variables = _args[1];
    selectionSetCallback = _args[2];
  } else if (args.length === 2) {
    if (Object.prototype.toString.call(args[0]) === '[object String]') {
      name = args[0];
      variables = null;
    } else if (Array.isArray(args[0])) {
      variables = args[0];
      name = null;
    }

    selectionSetCallback = args[1];
  } else {
    selectionSetCallback = args[0];
    name = null;
  }

  return { name: name, variables: variables, selectionSetCallback: selectionSetCallback };
}

var VariableDefinitions = function () {
  function VariableDefinitions(variableDefinitions) {
    classCallCheck(this, VariableDefinitions);

    this.variableDefinitions = variableDefinitions ? [].concat(toConsumableArray(variableDefinitions)) : [];
    Object.freeze(this.variableDefinitions);
    Object.freeze(this);
  }

  createClass(VariableDefinitions, [{
    key: 'toString',
    value: function toString() {
      if (this.variableDefinitions.length === 0) {
        return '';
      }

      return ' (' + join(this.variableDefinitions) + ') ';
    }
  }]);
  return VariableDefinitions;
}();

/**
 * Base class for {@link Query} and {@link Mutation}.
 * @abstract
 */

var Operation = function () {

  /**
   * This constructor should not be invoked. The subclasses {@link Query} and {@link Mutation} should be used instead.
   */
  function Operation(typeBundle, operationType) {
    classCallCheck(this, Operation);

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var _parseArgs = parseArgs(args),
        name = _parseArgs.name,
        variables = _parseArgs.variables,
        selectionSetCallback = _parseArgs.selectionSetCallback;

    this.typeBundle = typeBundle;
    this.name = name;
    this.variableDefinitions = new VariableDefinitions(variables);
    this.operationType = operationType;
    if (operationType === 'query') {
      this.selectionSet = new SelectionSet(typeBundle, typeBundle.queryType, selectionSetCallback);
      this.typeSchema = schemaForType(typeBundle, typeBundle.queryType);
    } else {
      this.selectionSet = new SelectionSet(typeBundle, typeBundle.mutationType, selectionSetCallback);
      this.typeSchema = schemaForType(typeBundle, typeBundle.mutationType);
    }
    Object.freeze(this);
  }

  /**
   * Whether the operation is anonymous (i.e. has no name).
   */

  createClass(Operation, [{
    key: 'toString',

    /**
     * Returns the GraphQL query or mutation string (e.g. `query myQuery { cat { name } }`).
     *
     * @return {String} The GraphQL query or mutation string.
     */
    value: function toString() {
      var nameString = this.name ? ' ' + this.name : '';

      return '' + this.operationType + nameString + this.variableDefinitions + this.selectionSet;
    }
  }, {
    key: 'isAnonymous',
    get: function get$$1() {
      return !this.name;
    }
  }]);
  return Operation;
}();

/**
 * GraphQL Query class.
 * @extends Operation
 */

var Query = function (_Operation) {
  inherits(Query, _Operation);

  /**
   * This constructor should not be invoked directly.
   * Use the factory functions {@link Client#query} or {@link Document#addQuery} to create a Query.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {String} [name] A name for the query.
   * @param {Object[]} [variables] A list of variables in the query. See {@link Client#variable}.
   * @param {Function} selectionSetCallback The query builder callback.
   *   A {@link SelectionSet} is created using this callback.
   */
  function Query(typeBundle) {
    var _ref;

    classCallCheck(this, Query);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn(this, (_ref = Query.__proto__ || Object.getPrototypeOf(Query)).call.apply(_ref, [this, typeBundle, 'query'].concat(args)));
  }

  return Query;
}(Operation);

/**
 * GraphQL Mutation class.
 * @extends Operation
 */

var Mutation = function (_Operation) {
  inherits(Mutation, _Operation);

  /**
   * This constructor should not be invoked directly.
   * Use the factory functions {@link Client#mutation} or {@link Document#addMutation} to create a Mutation.
   *
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {String} [name] A name for the mutation.
   * @param {Object[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
   * @param {Function} selectionSetCallback The mutation builder callback.
   *   A {@link SelectionSet} is created using this callback.
   */
  function Mutation(typeBundle) {
    var _ref;

    classCallCheck(this, Mutation);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return possibleConstructorReturn(this, (_ref = Mutation.__proto__ || Object.getPrototypeOf(Mutation)).call.apply(_ref, [this, typeBundle, 'mutation'].concat(args)));
  }

  return Mutation;
}(Operation);

function isAnonymous(operation) {
  return operation.isAnonymous;
}

function hasAnonymousOperations(operations) {
  return operations.some(isAnonymous);
}

function hasDuplicateOperationNames(operations) {
  var names = operations.map(function (operation) {
    return operation.name;
  });

  return names.reduce(function (hasDuplicates, name, index) {
    return hasDuplicates || names.indexOf(name) !== index;
  }, false);
}

function extractOperation(typeBundle, operationType) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (Operation.prototype.isPrototypeOf(args[0])) {
    return args[0];
  }

  if (operationType === 'query') {
    return new (Function.prototype.bind.apply(Query, [null].concat([typeBundle], args)))();
  } else {
    return new (Function.prototype.bind.apply(Mutation, [null].concat([typeBundle], args)))();
  }
}

function isInvalidOperationCombination(operations) {
  if (operations.length === 1) {
    return false;
  }

  return hasAnonymousOperations(operations) || hasDuplicateOperationNames(operations);
}

function fragmentNameIsNotUnique(existingDefinitions, name) {
  return existingDefinitions.some(function (definition) {
    return definition.name === name;
  });
}

var Document = function () {

  /**
   * This constructor should not be invoked directly.
   * Use the factory function {@link Client#document} to create a Document.
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   */
  function Document(typeBundle) {
    classCallCheck(this, Document);

    this.typeBundle = typeBundle;
    this.definitions = [];
  }

  /**
   * Returns the GraphQL query string for the Document (e.g. `query queryOne { ... } query queryTwo { ... }`).
   *
   * @return {String} The GraphQL query string for the Document.
   */

  createClass(Document, [{
    key: 'toString',
    value: function toString() {
      return join(this.definitions);
    }

    /**
     * Adds an operation to the Document.
     *
     * @private
     * @param {String} operationType The type of the operation. Either 'query' or 'mutation'.
     * @param {(Operation|String)} [query|queryName] Either an instance of an operation
     *   object, or the name of an operation. Both are optional.
     * @param {Object[]} [variables] A list of variables in the operation. See {@link Client#variable}.
     * @param {Function} [callback] The query builder callback. If an operation
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
      */

  }, {
    key: 'addOperation',
    value: function addOperation(operationType) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var operation = extractOperation.apply(undefined, [this.typeBundle, operationType].concat(args));

      if (isInvalidOperationCombination(this.operations.concat(operation))) {
        throw new Error('All operations must be uniquely named on a multi-operation document');
      }

      this.definitions.push(operation);
    }

    /**
     * Adds a query to the Document.
     *
     * @example
     * document.addQuery('myQuery', (root) => {
     *   root.add('cat', (cat) => {
     *    cat.add('name');
     *   });
     * });
     *
     * @param {(Query|String)} [query|queryName] Either an instance of a query
     *   object, or the name of a query. Both are optional.
     * @param {Object[]} [variables] A list of variables in the query. See {@link Client#variable}.
     * @param {Function} [callback] The query builder callback. If a query
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
     */

  }, {
    key: 'addQuery',
    value: function addQuery() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.addOperation.apply(this, ['query'].concat(args));
    }

    /**
     * Adds a mutation to the Document.
     *
     * @example
     * const input = client.variable('input', 'CatCreateInput!');
     *
     * document.addMutation('myMutation', [input], (root) => {
     *   root.add('catCreate', {args: {input}}, (catCreate) => {
     *     catCreate.add('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {(Mutation|String)} [mutation|mutationName] Either an instance of a mutation
     *   object, or the name of a mutation. Both are optional.
     * @param {Object[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
     * @param {Function} [callback] The mutation builder callback. If a mutation
     *   instance is passed, this callback will be ignored.
     *   A {@link SelectionSet} is created using this callback.
     */

  }, {
    key: 'addMutation',
    value: function addMutation() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.addOperation.apply(this, ['mutation'].concat(args));
    }

    /**
     * Defines a fragment on the Document.
     *
     * @param {String} name The name of the fragment.
     * @param {String} onType The type the fragment is on.
     * @param {Function} [builderFunction] The query builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {FragmentSpread} A {@link FragmentSpread} to be used with {@link SelectionSetBuilder#addFragment}.
     */

  }, {
    key: 'defineFragment',
    value: function defineFragment(name, onType, builderFunction) {
      if (fragmentNameIsNotUnique(this.fragmentDefinitions, name)) {
        throw new Error('All fragments must be uniquely named on a multi-fragment document');
      }

      var selectionSet = new SelectionSet(this.typeBundle, onType, builderFunction);
      var fragment = new FragmentDefinition(name, onType, selectionSet);

      this.definitions.push(fragment);

      return fragment.spread;
    }

    /**
     * All operations ({@link Query} and {@link Mutation}) on the Document.
     */

  }, {
    key: 'operations',
    get: function get$$1() {
      return this.definitions.filter(function (definition) {
        return Operation.prototype.isPrototypeOf(definition);
      });
    }

    /**
     * All {@link FragmentDefinition}s on the Document.
     */

  }, {
    key: 'fragmentDefinitions',
    get: function get$$1() {
      return this.definitions.filter(function (definition) {
        return FragmentDefinition.prototype.isPrototypeOf(definition);
      });
    }
  }]);
  return Document;
}();

/**
 * The base class used when deserializing response data.
 * Provides rich features, like functions to generate queries to refetch a node or fetch the next page.
 *
 * @class
 */
var GraphModel =

/**
 * @param {Object} attrs Attributes on the GraphModel.
 */
function GraphModel(attrs) {
  var _this = this;

  classCallCheck(this, GraphModel);

  Object.defineProperty(this, 'attrs', { value: attrs, enumerable: false });

  Object.keys(this.attrs).filter(function (key) {
    return !(key in _this);
  }).forEach(function (key) {
    var descriptor = void 0;

    if (attrs[key] === null) {
      descriptor = {
        enumerable: true,
        get: function get$$1() {
          return null;
        }
      };
    } else {
      descriptor = {
        enumerable: true,
        get: function get$$1() {
          return this.attrs[key].valueOf();
        }
      };
    }
    Object.defineProperty(_this, key, descriptor);
  });
};

/**
 * A registry of classes used to deserialize the response data. Uses {@link GraphModel} by default.
 */

var ClassRegistry = function () {
  function ClassRegistry() {
    classCallCheck(this, ClassRegistry);

    this.classStore = {};
  }

  /**
   * Registers a class for a GraphQL type in the registry.
   *
   * @param {Class} constructor The constructor of the class.
   * @param {String} type The GraphQL type of the object to deserialize into the class.
   */

  createClass(ClassRegistry, [{
    key: 'registerClassForType',
    value: function registerClassForType(constructor, type) {
      this.classStore[type] = constructor;
    }

    /**
     * Unregisters a class for a GraphQL type in the registry.
     *
     * @param {String} type The GraphQL type to unregister.
     */

  }, {
    key: 'unregisterClassForType',
    value: function unregisterClassForType(type) {
      delete this.classStore[type];
    }

    /**
     * Returns the class for the given GraphQL type.
     *
     * @param {String} type The GraphQL type to look up.
     * @return {Class|GraphModel} The class for the given GraphQL type. Defaults to {@link GraphModel} if no class is registered for the GraphQL type.
     */

  }, {
    key: 'classForType',
    value: function classForType(type) {
      return this.classStore[type] || GraphModel;
    }
  }]);
  return ClassRegistry;
}();

function isValue(arg) {
  return Object.prototype.toString.call(arg) !== '[object Null]' && Object.prototype.toString.call(arg) !== '[object Undefined]';
}

function isNodeContext(context) {
  return context.selection.selectionSet.typeSchema.implementsNode;
}

function isConnection(context) {
  return context.selection.selectionSet.typeSchema.name.endsWith('Connection');
}

function nearestNode(context) {
  if (context == null) {
    return null;
  } else if (isNodeContext(context)) {
    return context;
  } else {
    return nearestNode(context.parent);
  }
}

function contextsFromRoot(context) {
  if (context.parent) {
    return contextsFromRoot(context.parent).concat(context);
  } else {
    return [context];
  }
}

function contextsFromNearestNode(context) {
  if (context.selection.selectionSet.typeSchema.implementsNode) {
    return [context];
  } else {
    return contextsFromNearestNode(context.parent).concat(context);
  }
}

function initializeDocumentAndVars(currentContext, contextChain) {
  var lastInChain = contextChain[contextChain.length - 1];
  var first = lastInChain.selection.args.first;
  var variableDefinitions = Object.keys(lastInChain.selection.args).filter(function (key) {
    return isVariable(lastInChain.selection.args[key]);
  }).map(function (key) {
    return lastInChain.selection.args[key];
  });

  var firstVar = variableDefinitions.find(function (definition) {
    return definition.name === 'first';
  });

  if (!firstVar) {
    if (isVariable(first)) {
      firstVar = first;
    } else {
      firstVar = variable('first', 'Int', first);
      variableDefinitions.push(firstVar);
    }
  }

  var document = new Document(currentContext.selection.selectionSet.typeBundle);

  return [document, variableDefinitions, firstVar];
}

function addNextFieldTo(currentSelection, contextChain, path, cursor) {
  // There are always at least two. When we start, it's the root context, and the first set
  var nextContext = contextChain.shift();

  path.push(nextContext.selection.responseKey);

  if (contextChain.length) {
    currentSelection.add(nextContext.selection.name, { alias: nextContext.selection.alias, args: nextContext.selection.args }, function (newSelection) {
      addNextFieldTo(newSelection, contextChain, path, cursor);
    });
  } else {
    var edgesField = nextContext.selection.selectionSet.selections.find(function (field) {
      return field.name === 'edges';
    });
    var nodeField = edgesField.selectionSet.selections.find(function (field) {
      return field.name === 'node';
    });
    var first = void 0;

    if (isVariable(nextContext.selection.args.first)) {
      first = nextContext.selection.args.first;
    } else {
      first = variable('first', 'Int', nextContext.selection.args.first);
    }

    var options = {
      alias: nextContext.selection.alias,
      args: Object.assign({}, nextContext.selection.args, { after: cursor, first: first })
    };

    currentSelection.addConnection(nextContext.selection.name, options, nodeField.selectionSet);
  }
}

function collectFragments(selections) {
  return selections.reduce(function (fragmentDefinitions, field) {
    if (FragmentSpread.prototype.isPrototypeOf(field)) {
      fragmentDefinitions.push(field.toDefinition());
    }

    fragmentDefinitions.push.apply(fragmentDefinitions, toConsumableArray(collectFragments(field.selectionSet.selections)));

    return fragmentDefinitions;
  }, []);
}

function nextPageQueryAndPath(context, cursor) {
  var nearestNodeContext = nearestNode(context);

  if (nearestNodeContext) {
    return function () {
      var _document$definitions;

      var path = [];
      var nodeType = nearestNodeContext.selection.selectionSet.typeSchema;
      var nodeId = nearestNodeContext.responseData.id;
      var contextChain = contextsFromNearestNode(context);

      var _initializeDocumentAn = initializeDocumentAndVars(context, contextChain),
          _initializeDocumentAn2 = slicedToArray(_initializeDocumentAn, 2),
          document = _initializeDocumentAn2[0],
          variableDefinitions = _initializeDocumentAn2[1];

      document.addQuery(variableDefinitions, function (root) {
        path.push('node');
        root.add('node', { args: { id: nodeId } }, function (node) {
          node.addInlineFragmentOn(nodeType.name, function (fragment) {
            addNextFieldTo(fragment, contextChain.slice(1), path, cursor);
          });
        });
      });

      var fragments = collectFragments(document.operations[0].selectionSet.selections);

      (_document$definitions = document.definitions).unshift.apply(_document$definitions, toConsumableArray(fragments));

      return [document, path];
    };
  } else {
    return function () {
      var _document$definitions2;

      var path = [];
      var contextChain = contextsFromRoot(context);

      var _initializeDocumentAn3 = initializeDocumentAndVars(context, contextChain),
          _initializeDocumentAn4 = slicedToArray(_initializeDocumentAn3, 2),
          document = _initializeDocumentAn4[0],
          variableDefinitions = _initializeDocumentAn4[1];

      document.addQuery(variableDefinitions, function (root) {
        addNextFieldTo(root, contextChain.slice(1), path, cursor);
      });

      var fragments = collectFragments(document.operations[0].selectionSet.selections);

      (_document$definitions2 = document.definitions).unshift.apply(_document$definitions2, toConsumableArray(fragments));

      return [document, path];
    };
  }
}

function hasNextPage$1(connection, edge) {
  if (edge !== connection.edges[connection.edges.length - 1]) {
    return new Scalar(true);
  }

  return connection.pageInfo.hasNextPage;
}

function hasPreviousPage(connection, edge) {
  if (edge !== connection.edges[0]) {
    return new Scalar(true);
  }

  return connection.pageInfo.hasPreviousPage;
}

function transformConnections(variableValues) {
  return function (context, value) {
    if (isConnection(context)) {
      if (!(value.pageInfo && value.pageInfo.hasOwnProperty('hasNextPage') && value.pageInfo.hasOwnProperty('hasPreviousPage'))) {
        throw new Error('Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".');
      }

      return value.edges.map(function (edge) {
        return Object.assign(edge.node, {
          nextPageQueryAndPath: nextPageQueryAndPath(context, edge.cursor),
          hasNextPage: hasNextPage$1(value, edge),
          hasPreviousPage: hasPreviousPage(value, edge),
          variableValues: variableValues
        });
      });
    } else {
      return value;
    }
  };
}

/* eslint-disable no-warning-comments */
var DecodingContext = function () {
  function DecodingContext(selection, responseData) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    classCallCheck(this, DecodingContext);

    this.selection = selection;
    this.responseData = responseData;
    this.parent = parent;
    Object.freeze(this);
  }

  createClass(DecodingContext, [{
    key: 'contextForObjectProperty',
    value: function contextForObjectProperty(responseKey) {
      var nestedSelections = this.selection.selectionSet.selectionsByResponseKey[responseKey];
      var nextSelection = nestedSelections && nestedSelections[0];
      var nextContext = void 0;

      // fragment spreads operate inside the current context, so we recurse to get the proper
      // selection set, but retain the current response context
      if (Spread.prototype.isPrototypeOf(nextSelection)) {
        nextContext = new DecodingContext(nextSelection, this.responseData, this.parent);
      } else {
        nextContext = new DecodingContext(nextSelection, this.responseData[responseKey], this);
      }

      if (!nextSelection) {
        throw new Error('Unexpected response key "' + responseKey + '", not found in selection set: ' + this.selection.selectionSet);
      }

      if (Field.prototype.isPrototypeOf(nextSelection)) {
        return nextContext;
      } else {
        return nextContext.contextForObjectProperty(responseKey);
      }
    }
  }, {
    key: 'contextForArrayItem',
    value: function contextForArrayItem(item) {
      return new DecodingContext(this.selection, item, this.parent);
    }
  }]);
  return DecodingContext;
}();

function decodeArrayItems(context, transformers) {
  return context.responseData.map(function (item) {
    return decodeContext(context.contextForArrayItem(item), transformers);
  });
}

function decodeObjectValues(context, transformers) {
  return Object.keys(context.responseData).reduce(function (acc, responseKey) {
    acc[responseKey] = decodeContext(context.contextForObjectProperty(responseKey), transformers);

    return acc;
  }, {});
}

function runTransformers(transformers, context, value) {
  return transformers.reduce(function (acc, transformer) {
    return transformer(context, acc);
  }, value);
}

function decodeContext(context, transformers) {
  var value = context.responseData;

  if (Array.isArray(value)) {
    value = decodeArrayItems(context, transformers);
  } else if (isObject(value)) {
    value = decodeObjectValues(context, transformers);
  }

  return runTransformers(transformers, context, value);
}

function generateRefetchQueries(context, value) {
  if (isValue(value) && isNodeContext(context)) {
    value.refetchQuery = function () {
      return new Query(context.selection.selectionSet.typeBundle, function (root) {
        root.add('node', { args: { id: context.responseData.id } }, function (node) {
          node.addInlineFragmentOn(context.selection.selectionSet.typeSchema.name, context.selection.selectionSet);
        });
      });
    };
  }

  return value;
}

function transformPojosToClassesWithRegistry(classRegistry) {
  return function transformPojosToClasses(context, value) {
    if (isObject(value)) {
      var Klass = classRegistry.classForType(context.selection.selectionSet.typeSchema.name);

      return new Klass(value);
    } else {
      return value;
    }
  };
}

function transformScalars(context, value) {
  if (isValue(value)) {
    if (context.selection.selectionSet.typeSchema.kind === 'SCALAR') {
      return new Scalar(value);
    } else if (context.selection.selectionSet.typeSchema.kind === 'ENUM') {
      return new Enum(value);
    }
  }

  return value;
}

function recordTypeInformation(context, value) {
  var _context$selection$se = context.selection.selectionSet,
      typeBundle = _context$selection$se.typeBundle,
      typeSchema = _context$selection$se.typeSchema;

  if (isValue(value)) {
    if (value.__typename) {
      value.type = schemaForType(typeBundle, value.__typename, typeSchema);
    } else {
      value.type = typeSchema;
    }
  }

  return value;
}

function defaultTransformers(_ref) {
  var _ref$classRegistry = _ref.classRegistry,
      classRegistry = _ref$classRegistry === undefined ? new ClassRegistry() : _ref$classRegistry,
      variableValues = _ref.variableValues;

  return [transformScalars, generateRefetchQueries, transformConnections(variableValues), recordTypeInformation, transformPojosToClassesWithRegistry(classRegistry)];
}

/**
 * A function used to decode the response data.
 *
 * @function decode
 * @param {SelectionSet} selection The selection set used to query the response data.
 * @param {Object} responseData The response data returned.
 * @param {Object} [options] Options to use when decoding including:
 *   @param {ClassRegistry} [options.classRegistry] A class registry to use when deserializing the data into classes.
 * @return {GraphModel} The decoded response data.
 */
function decode(selection, responseData) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var transformers = options.transformers || defaultTransformers(options);
  var context = new DecodingContext(selection, responseData);

  return decodeContext(context, transformers);
}

function httpFetcher(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function fetcher(graphQLParams, headers) {
    return fetch(url, _extends({
      body: JSON.stringify(graphQLParams),
      method: 'POST',
      mode: 'cors'
    }, options, {
      headers: _extends({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }, options.headers, headers)
    })).then(function (response) {
      var contentType = response.headers.get('content-type');

      if (contentType.indexOf('application/json') > -1) {
        return response.json();
      }

      return response.text().then(function (text) {
        return { text: text };
      });
    });
  };
}

function hasNextPage(paginatedModels) {
  return paginatedModels && paginatedModels.length && paginatedModels[paginatedModels.length - 1].hasNextPage;
}

/**
 * The Client class used to create and send GraphQL documents, fragments, queries and mutations.
 */

var Client$2 = function () {

  /**
   * @param {Object} typeBundle A set of ES6 modules generated by {@link https://github.com/Shopify/graphql-js-schema|graphql-js-schema}.
   * @param {Object} options An options object. Must include either `url` and optional `fetcherOptions` OR a `fetcher` function.
   *   @param {(String|Function)} options.url|fetcher Either the URL of the GraphQL API endpoint, or a custom fetcher function for further customization.
   *   @param {Object} [options.fetcherOptions] Additional options to use with `fetch`, like headers. Do not specify this argument if `fetcher` is specified.
   *   @param {ClassRegistry} [options.registry=new ClassRegistry()] A {@link ClassRegistry} used to decode the response data.
   */
  function Client(typeBundle, _ref) {
    var url = _ref.url,
        fetcherOptions = _ref.fetcherOptions,
        fetcher = _ref.fetcher,
        _ref$registry = _ref.registry,
        registry = _ref$registry === undefined ? new ClassRegistry() : _ref$registry;
    classCallCheck(this, Client);

    this.typeBundle = typeBundle;
    this.classRegistry = registry;

    if (url && fetcher) {
      throw new Error('Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.');
    }

    if (url) {
      this.fetcher = httpFetcher(url, fetcherOptions);
    } else if (fetcher) {
      if (fetcherOptions) {
        throw new Error('Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`');
      }

      this.fetcher = fetcher;
    } else {
      throw new Error('Invalid arguments: one of `url` or `fetcher` is needed.');
    }
  }

  /**
   * Creates a GraphQL document.
   *
   * @example
   * const document = client.document();
   *
   * @return {Document} A GraphQL document.
   */

  createClass(Client, [{
    key: 'document',
    value: function document() {
      return new Document(this.typeBundle);
    }

    /**
     * Creates a GraphQL query.
     *
     * @example
     * const query = client.query('myQuery', (root) => {
     *   root.add('cat', (cat) => {
     *    cat.add('name');
     *   });
     * });
     *
     * @param {String} [name] A name for the query.
     * @param {VariableDefinition[]} [variables] A list of variables in the query. See {@link Client#variable}.
     * @param {Function} selectionSetCallback The query builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {Query} A GraphQL query.
     */

  }, {
    key: 'query',
    value: function query() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Query, [null].concat([this.typeBundle], args)))();
    }

    /**
     * Creates a GraphQL mutation.
     *
     * @example
     * const input = client.variable('input', 'CatCreateInput!');
     *
     * const mutation = client.mutation('myMutation', [input], (root) => {
     *   root.add('catCreate', {args: {input}}, (catCreate) => {
     *     catCreate.add('cat', (cat) => {
     *       cat.add('name');
     *     });
     *   });
     * });
     *
     * @param {String} [name] A name for the mutation.
     * @param {VariableDefinition[]} [variables] A list of variables in the mutation. See {@link Client#variable}.
     * @param {Function} selectionSetCallback The mutation builder callback.
     *   A {@link SelectionSet} is created using this callback.
     * @return {Mutation} A GraphQL mutation.
     */

  }, {
    key: 'mutation',
    value: function mutation() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return new (Function.prototype.bind.apply(Mutation, [null].concat([this.typeBundle], args)))();
    }

    /**
     * Sends a GraphQL operation (query or mutation) or a document.
     *
     * @example
     * client.send(query, {id: '12345'}).then((result) => {
     *   // Do something with the returned result
     *   console.log(result);
     * });
     *
     * @param {(Query|Mutation|Document|Function)} request The operation or document to send. If represented
     * as a function, it must return `Query`, `Mutation`, or `Document` and recieve the client as the only param.
     * @param {Object} [variableValues] The values for variables in the operation or document.
     * @param {Object} [otherProperties] Other properties to send with the query. For example, a custom operation name.
     * @param {Object} [headers] Additional headers to be applied on a request by request basis.
     * @return {Promise.<Object>} A promise resolving to an object containing the response data.
     */

  }, {
    key: 'send',
    value: function send(request) {
      var variableValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _this = this;

      var otherProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var operationOrDocument = void 0;

      if (Function.prototype.isPrototypeOf(request)) {
        operationOrDocument = request(this);
      } else {
        operationOrDocument = request;
      }

      var graphQLParams = { query: operationOrDocument.toString() };

      if (variableValues) {
        graphQLParams.variables = variableValues;
      }

      Object.assign(graphQLParams, otherProperties);

      var operation = void 0;

      if (Operation.prototype.isPrototypeOf(operationOrDocument)) {
        operation = operationOrDocument;
      } else {
        var document = operationOrDocument;

        if (document.operations.length === 1) {
          operation = document.operations[0];
        } else if (otherProperties.operationName) {
          operation = document.operations.find(function (documentOperation) {
            return documentOperation.name === otherProperties.operationName;
          });
        } else {
          throw new Error('\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: \'myFancyQuery\'});\n        ');
        }
      }

      return this.fetcher(graphQLParams, headers).then(function (response) {
        if (response.data) {
          response.model = decode(operation, response.data, {
            classRegistry: _this.classRegistry,
            variableValues: variableValues
          });
        }

        return response;
      });
    }

    /**
     * Fetches the next page of a paginated node or array of nodes.
     *
     * @example
     * client.fetchNextPage(node, {first: 10}).then((result) => {
     *   // Do something with the next page
     *   console.log(result);
     * });
     *
     * @param {(GraphModel|GraphModel[])} nodeOrNodes The node or list of nodes on which to fetch the next page.
     * @param {Object} [options] Options object containing:
     *   @param {Integer} [options.first] The number of nodes to query on the next page. Defaults to the page size of the previous query.
     * @return {Promise.<GraphModel[]>} A promise resolving with the next page of {@link GraphModel}s.
     */

  }, {
    key: 'fetchNextPage',
    value: function fetchNextPage(nodeOrNodes, options) {
      var node = void 0;

      if (Array.isArray(nodeOrNodes)) {
        node = nodeOrNodes[nodeOrNodes.length - 1];
      } else {
        node = nodeOrNodes;
      }

      var _node$nextPageQueryAn = node.nextPageQueryAndPath(),
          _node$nextPageQueryAn2 = slicedToArray(_node$nextPageQueryAn, 2),
          query = _node$nextPageQueryAn2[0],
          path = _node$nextPageQueryAn2[1];

      var variableValues = void 0;

      if (node.variableValues || options) {
        variableValues = Object.assign({}, node.variableValues, options);
      }

      return this.send(query, variableValues).then(function (response) {
        response.model = path.reduce(function (object, key) {
          return object[key];
        }, response.model);

        return response;
      });
    }

    /**
     * Fetches all subsequent pages of a paginated array of nodes.
     *
     * @example
     * client.fetchAllPages(nodes, {pageSize: 20}).then((result) => {
     *   // Do something with all the models
     *   console.log(result);
     * });
     *
     * @param {GraphModel[]} paginatedModels The list of nodes on which to fetch all pages.
     * @param {Object} options Options object containing:
     *   @param {Integer} options.pageSize The number of nodes to query on each page.
     * @return {Promise.<GraphModel[]>} A promise resolving with all pages of {@link GraphModel}s, including the original list.
     */

  }, {
    key: 'fetchAllPages',
    value: function fetchAllPages(paginatedModels, _ref2) {
      var _this2 = this;

      var pageSize = _ref2.pageSize;

      if (hasNextPage(paginatedModels)) {
        return this.fetchNextPage(paginatedModels, { first: pageSize }).then(function (_ref3) {
          var model = _ref3.model;

          var pages = paginatedModels.concat(model);

          return _this2.fetchAllPages(pages, { pageSize: pageSize });
        });
      }

      return Promise.resolve(paginatedModels);
    }

    /**
     * Refetches a {@link GraphModel} whose type implements `Node`.
     *
     * @example
     * client.refetch(node).then((result) => {
     *   // Do something with the refetched node
     *   console.log(result);
     * });
     *
     * @param {GraphModel} nodeType A {@link GraphModel} whose type implements `Node`.
     * @return {Promise.<GraphModel>} The refetched {@link GraphModel}.
     */

  }, {
    key: 'refetch',
    value: function refetch(nodeType) {
      if (!nodeType) {
        throw new Error('\'client#refetch\' must be called with a non-null instance of a Node.');
      } else if (!nodeType.type.implementsNode) {
        throw new Error('\'client#refetch\' must be called with a type that implements Node. Received ' + nodeType.type.name + '.');
      }

      return this.send(nodeType.refetchQuery()).then(function (_ref4) {
        var model = _ref4.model;
        return model.node;
      });
    }

    /**
     * Creates a variable to be used in a {@link Query} or {@link Mutation}.
     *
     * @example
     * const idVariable = client.variable('id', 'ID!', '12345');
     *
     * @param {String} name The name of the variable.
     * @param {String} type The GraphQL type of the variable.
     * @param {*} [defaultValue] The default value of the variable.
     * @return {VariableDefinition} A variable object that can be used in a {@link Query} or {@link Mutation}.
     */

  }, {
    key: 'variable',
    value: function variable$$1(name, type, defaultValue) {
      return variable(name, type, defaultValue);
    }

    /**
     * Creates an enum to be used in a {@link Query} or {@link Mutation}.
     *
     * @example
     * const titleEnum = client.enum('TITLE');
     *
     * @param {String} key The key of the enum.
     * @return {Enum} An enum object that can be used in a {@link Query} or {@link Mutation}.
     */

  }, {
    key: 'enum',
    value: function _enum(key) {
      return enumFunction(key);
    }
  }]);
  return Client;
}();

/**
 * The class used to configure the JS Buy SDK Client.
 * @class
 */
var Config = function () {
  createClass$1(Config, [{
    key: 'requiredProperties',


    /**
     * Properties that must be set on initializations
     * @attribute requiredProperties
     * @default ['storefrontAccessToken', 'domain']
     * @type Array
     * @private
     */
    get: function get$$1() {
      return ['storefrontAccessToken', 'domain'];
    }

    /**
     * Deprecated properties that map directly to required properties
     * @attribute deprecatedProperties
     * @default {'accessToken': 'storefrontAccessToken', 'apiKey': 'storefrontAccessToken'}
     * @type Object
     * @private
     */

  }, {
    key: 'deprecatedProperties',
    get: function get$$1() {
      return {
        accessToken: 'storefrontAccessToken',
        apiKey: 'storefrontAccessToken'
      };
    }

    /**
     * @constructs Config
     * @param {Object} attrs An object specifying the configuration. Requires the following properties:
     *   @param {String} attrs.storefrontAccessToken The {@link https://help.shopify.com/api/reference/storefront_access_token|Storefront access token} for the shop.
     *   @param {String} attrs.domain The `myshopify` domain for the shop (e.g. `graphql.myshopify.com`).
     */

  }]);

  function Config(attrs) {
    var _this = this;

    classCallCheck$1(this, Config);

    Object.keys(this.deprecatedProperties).forEach(function (key) {
      if (!attrs.hasOwnProperty(key)) {
        return;
      }
      // eslint-disable-next-line no-console
      console.warn('[ShopifyBuy] Config property ' + key + ' is deprecated as of v1.0, please use ' + _this.deprecatedProperties[key] + ' instead.');
      attrs[_this.deprecatedProperties[key]] = attrs[key];
    });

    this.requiredProperties.forEach(function (key) {
      if (attrs.hasOwnProperty(key)) {
        _this[key] = attrs[key];
      } else {
        throw new Error('new Config() requires the option \'' + key + '\'');
      }
    });

    if (attrs.hasOwnProperty('apiVersion')) {
      this.apiVersion = attrs.apiVersion;
    } else {
      this.apiVersion = '2020-01';
    }

    if (attrs.hasOwnProperty('source')) {
      this.source = attrs.source;
    }

    if (attrs.hasOwnProperty('language')) {
      this.language = attrs.language;
    }
  }

  return Config;
}();

var Resource = function Resource(client) {
  classCallCheck$1(this, Resource);

  this.graphQLClient = client;
};

var defaultErrors = [{ message: 'an unknown error has occured.' }];

function defaultResolver(path) {
  var keys = path.split('.');

  return function (_ref) {
    var model = _ref.model,
        errors = _ref.errors;

    return new Promise(function (resolve, reject) {
      try {
        var result = keys.reduce(function (ref, key) {
          return ref[key];
        }, model);

        resolve(result);
      } catch (_) {
        if (errors) {
          reject(errors);
        } else {
          reject(defaultErrors);
        }
      }
    });
  };
}

function fetchResourcesForProducts(productOrProduct, client) {
  var products = [].concat(productOrProduct);

  return Promise.all(products.reduce(function (promiseAcc, product) {

    // If the graphql query doesn't find a match, skip fetching variants and images.
    if (product === null) {
      return promiseAcc;
    }

    // Fetch the rest of the images and variants for this product
    promiseAcc.push(client.fetchAllPages(product.images, { pageSize: 250 }).then(function (images) {
      product.attrs.images = images;
    }));

    promiseAcc.push(client.fetchAllPages(product.variants, { pageSize: 250 }).then(function (variants) {
      product.attrs.variants = variants;
    }));

    return promiseAcc;
  }, []));
}

function paginateProductConnectionsAndResolve(client) {
  return function (products) {
    return fetchResourcesForProducts(products, client).then(function () {
      return products;
    });
  };
}

function paginateCollectionsProductConnectionsAndResolve(client) {
  return function (collectionOrCollections) {
    var collections = [].concat(collectionOrCollections);

    return Promise.all(collections.reduce(function (promiseAcc, collection) {
      return promiseAcc.concat(fetchResourcesForProducts(collection.products, client));
    }, [])).then(function () {
      return collectionOrCollections;
    });
  };
}

/**
 * @namespace ProductHelpers
 */
var productHelpers = {

  /**
   * Returns the variant of a product corresponding to the options given.
   *
   * @example
   * const selectedVariant = client.product.helpers.variantForOptions(product, {
   *   size: "Small",
   *   color: "Red"
   * });
   *
   * @memberof ProductHelpers
   * @method variantForOptions
   * @param {GraphModel} product The product to find the variant on. Must include `variants`.
   * @param {Object} options An object containing the options for the variant.
   * @return {GraphModel} The variant corresponding to the options given.
   */
  variantForOptions: function variantForOptions(product, options) {
    return product.variants.find(function (variant) {
      return variant.selectedOptions.every(function (selectedOption) {
        return options[selectedOption.name] === selectedOption.value.valueOf();
      });
    });
  }
};

function query(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.id], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.ProductFragment);
    });
  });
  return document;
}

function query$1(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.ids = client.variable("ids", "[ID!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.ids], function (root) {
    root.add("nodes", {
      args: {
        ids: variables.__defaultOperation__.ids
      }
    }, function (nodes) {
      nodes.addFragment(spreads.ProductFragment);
    });
  });
  return document;
}

function query$2(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "ProductSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function (root) {
    root.add("products", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (products) {
      products.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      products.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.ProductFragment);
        });
      });
    });
  });
  return document;
}

function query$3(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.handle = client.variable("handle", "String!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.handle], function (root) {
    root.add("productByHandle", {
      args: {
        handle: variables.__defaultOperation__.handle
      }
    }, function (productByHandle) {
      productByHandle.addFragment(spreads.ProductFragment);
    });
  });
  return document;
}

// GraphQL
/**
 * The JS Buy SDK product resource
 * @class
 */

var ProductResource = function (_Resource) {
  inherits$1(ProductResource, _Resource);

  function ProductResource() {
    classCallCheck$1(this, ProductResource);
    return possibleConstructorReturn$1(this, (ProductResource.__proto__ || Object.getPrototypeOf(ProductResource)).apply(this, arguments));
  }

  createClass$1(ProductResource, [{
    key: 'fetchAll',


    /**
     * Fetches all products on the shop.
     *
     * @example
     * client.product.fetchAll().then((products) => {
     *   // Do something with the products
     * });
     *
     * @param {Int} [pageSize] The number of products to fetch per page
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
     */
    value: function fetchAll() {
      var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      return this.graphQLClient.send(query$2, { first: first }).then(defaultResolver('products')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single product by ID on the shop.
     *
     * @example
     * client.product.fetch('Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==').then((product) => {
     *   // Do something with the product
     * });
     *
     * @param {String} id The id of the product to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetch',
    value: function fetch(id) {
      return this.graphQLClient.send(query, { id: id }).then(defaultResolver('node')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches multiple products by ID on the shop.
     *
     * @example
     * const ids = ['Xk9lM2JkNzFmNzIQ4NTIY4ZDFi9DaGVja291dC9lM2JkN==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ='];
     * client.product.fetchMultiple(ids).then((products) => {
     *   // Do something with the products
     * });
     *
     * @param {String[]} ids The ids of the products to fetch
     * @return {Promise|GraphModel[]} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetchMultiple',
    value: function fetchMultiple(ids) {
      return this.graphQLClient.send(query$1, { ids: ids }).then(defaultResolver('nodes')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single product by handle on the shop.
     *
     * @example
     * client.product.fetchByHandle('my-product').then((product) => {
     *   // Do something with the product
     * });
     *
     * @param {String} handle The handle of the product to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the product.
     */

  }, {
    key: 'fetchByHandle',
    value: function fetchByHandle(handle) {
      return this.graphQLClient.send(query$3, { handle: handle }).then(defaultResolver('productByHandle')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches all products on the shop that match the query.
     *
     * @example
     * client.product.fetchQuery({first: 20, sortKey: 'CREATED_AT', reverse: true}).then((products) => {
     *   // Do something with the first 10 products sorted by title in ascending order
     * });
     *
     * @param {Object} [args] An object specifying the query data containing zero or more of:
     *   @param {Int} [args.first=20] The relay `first` param. This specifies page size.
     *   @param {String} [args.sortKey=ID] The key to sort results by. Available values are
     *   documented as {@link https://help.shopify.com/api/storefront-api/reference/enum/productsortkeys|Product Sort Keys}.
     *   @param {String} [args.query] A query string. See full documentation {@link https://help.shopify.com/api/storefront-api/reference/object/shop#products|here}
     *   @param {Boolean} [args.reverse] Whether or not to reverse the sort order of the results
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the products.
     */

  }, {
    key: 'fetchQuery',
    value: function fetchQuery() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$first = _ref.first,
          first = _ref$first === undefined ? 20 : _ref$first,
          _ref$sortKey = _ref.sortKey,
          sortKey = _ref$sortKey === undefined ? 'ID' : _ref$sortKey,
          query$$1 = _ref.query,
          reverse = _ref.reverse;

      return this.graphQLClient.send(query$2, {
        first: first,
        sortKey: sortKey,
        query: query$$1,
        reverse: reverse
      }).then(defaultResolver('products')).then(paginateProductConnectionsAndResolve(this.graphQLClient));
    }
  }, {
    key: 'helpers',
    get: function get$$1() {
      return productHelpers;
    }
  }]);
  return ProductResource;
}(Resource);

function query$4(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  document.addQuery([variables.__defaultOperation__.id], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.CollectionFragment);
    });
  });
  return document;
}

function query$5(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.id, variables.__defaultOperation__.productsFirst], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.CollectionFragment);
      node.addInlineFragmentOn("Collection", function (Collection) {
        Collection.add("products", {
          args: {
            first: variables.__defaultOperation__.productsFirst
          }
        }, function (products) {
          products.add("pageInfo", function (pageInfo) {
            pageInfo.add("hasNextPage");
            pageInfo.add("hasPreviousPage");
          });
          products.add("edges", function (edges) {
            edges.add("cursor");
            edges.add("node", function (node) {
              node.addFragment(spreads.ProductFragment);
            });
          });
        });
      });
    });
  });
  return document;
}

function query$6(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse], function (root) {
    root.add("collections", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (collections) {
      collections.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      collections.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CollectionFragment);
        });
      });
    });
  });
  return document;
}

function query$7(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.first = client.variable("first", "Int!");
  variables.__defaultOperation__.query = client.variable("query", "String");
  variables.__defaultOperation__.sortKey = client.variable("sortKey", "CollectionSortKeys");
  variables.__defaultOperation__.reverse = client.variable("reverse", "Boolean");
  variables.__defaultOperation__.productsFirst = client.variable("productsFirst", "Int!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.first, variables.__defaultOperation__.query, variables.__defaultOperation__.sortKey, variables.__defaultOperation__.reverse, variables.__defaultOperation__.productsFirst], function (root) {
    root.add("collections", {
      args: {
        first: variables.__defaultOperation__.first,
        query: variables.__defaultOperation__.query,
        sortKey: variables.__defaultOperation__.sortKey,
        reverse: variables.__defaultOperation__.reverse
      }
    }, function (collections) {
      collections.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      collections.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.CollectionFragment);
          node.add("products", {
            args: {
              first: variables.__defaultOperation__.productsFirst
            }
          }, function (products) {
            products.add("pageInfo", function (pageInfo) {
              pageInfo.add("hasNextPage");
              pageInfo.add("hasPreviousPage");
            });
            products.add("edges", function (edges) {
              edges.add("cursor");
              edges.add("node", function (node) {
                node.addFragment(spreads.ProductFragment);
              });
            });
          });
        });
      });
    });
  });
  return document;
}

function query$8(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.handle = client.variable("handle", "String!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.ProductFragment = document.defineFragment("ProductFragment", "Product", function (root) {
    root.add("id");
    root.add("availableForSale");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("descriptionHtml");
    root.add("description");
    root.add("handle");
    root.add("productType");
    root.add("title");
    root.add("vendor");
    root.add("publishedAt");
    root.add("onlineStoreUrl");
    root.add("options", function (options) {
      options.add("name");
      options.add("values");
    });
    root.add("images", {
      args: {
        first: 250
      }
    }, function (images) {
      images.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      images.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("src");
          node.add("altText");
        });
      });
    });
    root.add("variants", {
      args: {
        first: 250
      }
    }, function (variants) {
      variants.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      variants.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.VariantFragment);
        });
      });
    });
  });
  spreads.CollectionFragment = document.defineFragment("CollectionFragment", "Collection", function (root) {
    root.add("id");
    root.add("handle");
    root.add("description");
    root.add("descriptionHtml");
    root.add("updatedAt");
    root.add("title");
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
  });
  spreads.CollectionsProductsFragment = document.defineFragment("CollectionsProductsFragment", "Collection", function (root) {
    root.add("products", {
      args: {
        first: 20
      }
    }, function (products) {
      products.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      products.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.addFragment(spreads.ProductFragment);
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.handle], function (root) {
    root.add("collectionByHandle", {
      args: {
        handle: variables.__defaultOperation__.handle
      }
    }, function (collectionByHandle) {
      collectionByHandle.addFragment(spreads.CollectionFragment);
      collectionByHandle.addFragment(spreads.CollectionsProductsFragment);
    });
  });
  return document;
}

// GraphQL
/**
 * The JS Buy SDK collection resource
 * @class
 */

var CollectionResource = function (_Resource) {
  inherits$1(CollectionResource, _Resource);

  function CollectionResource() {
    classCallCheck$1(this, CollectionResource);
    return possibleConstructorReturn$1(this, (CollectionResource.__proto__ || Object.getPrototypeOf(CollectionResource)).apply(this, arguments));
  }

  createClass$1(CollectionResource, [{
    key: 'fetchAll',


    /**
     * Fetches all collections on the shop, not including products.
     * To fetch collections with products use [fetchAllsWithProducts]{@link Client#fetchAllsWithProducts}.
     *
     * @example
     * client.collection.fetchAll().then((collections) => {
     *   // Do something with the collections
     * });
     *
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */
    value: function fetchAll() {
      var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      return this.graphQLClient.send(query$6, { first: first }).then(defaultResolver('collections'));
    }

    /**
     * Fetches all collections on the shop, including products.
     *
     * @example
     * client.collection.fetchAllWithProducts().then((collections) => {
     *   // Do something with the collections
     * });
     *
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */

  }, {
    key: 'fetchAllWithProducts',
    value: function fetchAllWithProducts() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$first = _ref.first,
          first = _ref$first === undefined ? 20 : _ref$first,
          _ref$productsFirst = _ref.productsFirst,
          productsFirst = _ref$productsFirst === undefined ? 20 : _ref$productsFirst;

      return this.graphQLClient.send(query$7, { first: first, productsFirst: productsFirst }).then(defaultResolver('collections')).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a single collection by ID on the shop, not including products.
     * To fetch the collection with products use [fetchWithProducts]{@link Client#fetchWithProducts}.
     *
     * @example
     * client.collection.fetch('Xk9lM2JkNzFmNzIQ4NTIY4ZDFiZTUyZTUwNTE2MDNhZjg==').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} id The id of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetch',
    value: function fetch(id) {
      return this.graphQLClient.send(query$4, { id: id }).then(defaultResolver('node'));
    }

    /**
     * Fetches a single collection by ID on the shop, including products.
     *
     * @example
     * client.collection.fetchWithProducts('Xk9lM2JkNzFmNzIQ4NTIY4ZDFiZTUyZTUwNTE2MDNhZjg==').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} id The id of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetchWithProducts',
    value: function fetchWithProducts(id) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$productsFirst = _ref2.productsFirst,
          productsFirst = _ref2$productsFirst === undefined ? 20 : _ref2$productsFirst;

      return this.graphQLClient.send(query$5, { id: id, productsFirst: productsFirst }).then(defaultResolver('node')).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient));
    }

    /**
     * Fetches a collection by handle on the shop.
     *
     * @example
     * client.collection.fetchByHandle('my-collection').then((collection) => {
     *   // Do something with the collection
     * });
     *
     * @param {String} handle The handle of the collection to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the collection.
     */

  }, {
    key: 'fetchByHandle',
    value: function fetchByHandle(handle) {
      return this.graphQLClient.send(query$8, { handle: handle }).then(defaultResolver('collectionByHandle'));
    }

    /**
     * Fetches all collections on the shop that match the query.
     *
     * @example
     * client.collection.fetchQuery({first: 20, sortKey: 'CREATED_AT', reverse: true}).then((collections) => {
     *   // Do something with the first 10 collections sorted by title in ascending order
     * });
     *
     * @param {Object} [args] An object specifying the query data containing zero or more of:
     *   @param {Int} [args.first=20] The relay `first` param. This specifies page size.
     *   @param {String} [args.sortKey=ID] The key to sort results by. Available values are
     *   documented as {@link https://help.shopify.com/api/storefront-api/reference/enum/collectionsortkeys|Collection Sort Keys}.
     *   @param {String} [args.query] A query string. See full documentation {@link https://help.shopify.com/api/storefront-api/reference/object/shop#collections|here}
     *   @param {Boolean} [args.reverse] Whether or not to reverse the sort order of the results
     * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the collections.
     */

  }, {
    key: 'fetchQuery',
    value: function fetchQuery() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$first = _ref3.first,
          first = _ref3$first === undefined ? 20 : _ref3$first,
          _ref3$sortKey = _ref3.sortKey,
          sortKey = _ref3$sortKey === undefined ? 'ID' : _ref3$sortKey,
          query = _ref3.query,
          reverse = _ref3.reverse;

      return this.graphQLClient.send(query$6, {
        first: first,
        sortKey: sortKey,
        query: query,
        reverse: reverse
      }).then(defaultResolver('collections'));
    }
  }]);
  return CollectionResource;
}(Resource);

function query$9(client) {
  var document = client.document();
  document.addQuery(function (root) {
    root.add("shop", function (shop) {
      shop.add("currencyCode");
      shop.add("paymentSettings", function (paymentSettings) {
        paymentSettings.add("enabledPresentmentCurrencies");
      });
      shop.add("description");
      shop.add("moneyFormat");
      shop.add("name");
      shop.add("primaryDomain", function (primaryDomain) {
        primaryDomain.add("host");
        primaryDomain.add("sslEnabled");
        primaryDomain.add("url");
      });
    });
  });
  return document;
}

function query$10(client) {
  var document = client.document();
  var spreads = {};
  spreads.PolicyFragment = document.defineFragment("PolicyFragment", "ShopPolicy", function (root) {
    root.add("id");
    root.add("title");
    root.add("url");
    root.add("body");
  });
  document.addQuery(function (root) {
    root.add("shop", function (shop) {
      shop.add("privacyPolicy", function (privacyPolicy) {
        privacyPolicy.addFragment(spreads.PolicyFragment);
      });
      shop.add("termsOfService", function (termsOfService) {
        termsOfService.addFragment(spreads.PolicyFragment);
      });
      shop.add("refundPolicy", function (refundPolicy) {
        refundPolicy.addFragment(spreads.PolicyFragment);
      });
    });
  });
  return document;
}

// GraphQL
/**
 * The JS Buy SDK shop resource
 * @class
 */

var ShopResource = function (_Resource) {
  inherits$1(ShopResource, _Resource);

  function ShopResource() {
    classCallCheck$1(this, ShopResource);
    return possibleConstructorReturn$1(this, (ShopResource.__proto__ || Object.getPrototypeOf(ShopResource)).apply(this, arguments));
  }

  createClass$1(ShopResource, [{
    key: 'fetchInfo',


    /**
     * Fetches shop information (`currencyCode`, `description`, `moneyFormat`, `name`, and `primaryDomain`).
     * See the {@link https://help.shopify.com/api/storefront-api/reference/object/shop|Storefront API reference} for more information.
     *
     * @example
     * client.shop.fetchInfo().then((shop) => {
     *   // Do something with the shop
     * });
     *
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
     */
    value: function fetchInfo() {
      return this.graphQLClient.send(query$9).then(defaultResolver('shop'));
    }

    /**
     * Fetches shop policies (privacy policy, terms of service and refund policy).
     *
     * @example
     * client.shop.fetchPolicies().then((shop) => {
     *   // Do something with the shop
     * });
     *
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the shop.
     */

  }, {
    key: 'fetchPolicies',
    value: function fetchPolicies() {
      return this.graphQLClient.send(query$10).then(defaultResolver('shop'));
    }
  }]);
  return ShopResource;
}(Resource);

function handleCheckoutMutation(mutationRootKey, client) {
  return function (_ref) {
    var _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        errors = _ref.errors,
        _ref$model = _ref.model,
        model = _ref$model === undefined ? {} : _ref$model;

    var rootData = data[mutationRootKey];
    var rootModel = model[mutationRootKey];

    if (rootData && rootData.checkout) {
      return client.fetchAllPages(rootModel.checkout.lineItems, { pageSize: 250 }).then(function (lineItems) {
        rootModel.checkout.attrs.lineItems = lineItems;
        rootModel.checkout.errors = errors;
        rootModel.checkout.userErrors = rootModel.userErrors;

        return rootModel.checkout;
      });
    }

    if (errors && errors.length) {
      return Promise.reject(new Error(JSON.stringify(errors)));
    }

    if (rootData && rootData.checkoutUserErrors && rootData.checkoutUserErrors.length) {
      return Promise.reject(new Error(JSON.stringify(rootData.checkoutUserErrors)));
    }

    if (rootData && rootData.userErrors && rootData.userErrors.length) {
      return Promise.reject(new Error(JSON.stringify(rootData.userErrors)));
    }

    return Promise.reject(new Error("The " + mutationRootKey + " mutation failed due to an unknown error."));
  };
}

function query$11(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.id = client.variable("id", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addQuery([variables.__defaultOperation__.id], function (root) {
    root.add("node", {
      args: {
        id: variables.__defaultOperation__.id
      }
    }, function (node) {
      node.addFragment(spreads.CheckoutFragment);
    });
  });
  return document;
}

function query$12(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.input = client.variable("input", "CheckoutCreateInput!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.input], function (root) {
    root.add("checkoutCreate", {
      args: {
        input: variables.__defaultOperation__.input
      }
    }, function (checkoutCreate) {
      checkoutCreate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutCreate.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutCreate.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$13(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
  variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemInput!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
    root.add("checkoutLineItemsAdd", {
      args: {
        checkoutId: variables.__defaultOperation__.checkoutId,
        lineItems: variables.__defaultOperation__.lineItems
      }
    }, function (checkoutLineItemsAdd) {
      checkoutLineItemsAdd.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutLineItemsAdd.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutLineItemsAdd.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$14(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
  variables.__defaultOperation__.lineItemIds = client.variable("lineItemIds", "[ID!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItemIds], function (root) {
    root.add("checkoutLineItemsRemove", {
      args: {
        checkoutId: variables.__defaultOperation__.checkoutId,
        lineItemIds: variables.__defaultOperation__.lineItemIds
      }
    }, function (checkoutLineItemsRemove) {
      checkoutLineItemsRemove.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutLineItemsRemove.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutLineItemsRemove.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$15(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
  variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemInput!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
    root.add("checkoutLineItemsReplace", {
      args: {
        checkoutId: variables.__defaultOperation__.checkoutId,
        lineItems: variables.__defaultOperation__.lineItems
      }
    }, function (checkoutLineItemsReplace) {
      checkoutLineItemsReplace.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutLineItemsReplace.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$16(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.__defaultOperation__ = {};
  variables.__defaultOperation__.checkoutId = client.variable("checkoutId", "ID!");
  variables.__defaultOperation__.lineItems = client.variable("lineItems", "[CheckoutLineItemUpdateInput!]!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation([variables.__defaultOperation__.checkoutId, variables.__defaultOperation__.lineItems], function (root) {
    root.add("checkoutLineItemsUpdate", {
      args: {
        checkoutId: variables.__defaultOperation__.checkoutId,
        lineItems: variables.__defaultOperation__.lineItems
      }
    }, function (checkoutLineItemsUpdate) {
      checkoutLineItemsUpdate.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutLineItemsUpdate.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutLineItemsUpdate.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$17(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutAttributesUpdateV2 = {};
  variables.checkoutAttributesUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
  variables.checkoutAttributesUpdateV2.input = client.variable("input", "CheckoutAttributesUpdateV2Input!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutAttributesUpdateV2", [variables.checkoutAttributesUpdateV2.checkoutId, variables.checkoutAttributesUpdateV2.input], function (root) {
    root.add("checkoutAttributesUpdateV2", {
      args: {
        checkoutId: variables.checkoutAttributesUpdateV2.checkoutId,
        input: variables.checkoutAttributesUpdateV2.input
      }
    }, function (checkoutAttributesUpdateV2) {
      checkoutAttributesUpdateV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutAttributesUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutAttributesUpdateV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$18(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutDiscountCodeApplyV2 = {};
  variables.checkoutDiscountCodeApplyV2.discountCode = client.variable("discountCode", "String!");
  variables.checkoutDiscountCodeApplyV2.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutDiscountCodeApplyV2", [variables.checkoutDiscountCodeApplyV2.discountCode, variables.checkoutDiscountCodeApplyV2.checkoutId], function (root) {
    root.add("checkoutDiscountCodeApplyV2", {
      args: {
        discountCode: variables.checkoutDiscountCodeApplyV2.discountCode,
        checkoutId: variables.checkoutDiscountCodeApplyV2.checkoutId
      }
    }, function (checkoutDiscountCodeApplyV2) {
      checkoutDiscountCodeApplyV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutDiscountCodeApplyV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutDiscountCodeApplyV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$19(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutDiscountCodeRemove = {};
  variables.checkoutDiscountCodeRemove.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutDiscountCodeRemove", [variables.checkoutDiscountCodeRemove.checkoutId], function (root) {
    root.add("checkoutDiscountCodeRemove", {
      args: {
        checkoutId: variables.checkoutDiscountCodeRemove.checkoutId
      }
    }, function (checkoutDiscountCodeRemove) {
      checkoutDiscountCodeRemove.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutDiscountCodeRemove.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutDiscountCodeRemove.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$20(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutGiftCardsAppend = {};
  variables.checkoutGiftCardsAppend.giftCardCodes = client.variable("giftCardCodes", "[String!]!");
  variables.checkoutGiftCardsAppend.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutGiftCardsAppend", [variables.checkoutGiftCardsAppend.giftCardCodes, variables.checkoutGiftCardsAppend.checkoutId], function (root) {
    root.add("checkoutGiftCardsAppend", {
      args: {
        giftCardCodes: variables.checkoutGiftCardsAppend.giftCardCodes,
        checkoutId: variables.checkoutGiftCardsAppend.checkoutId
      }
    }, function (checkoutGiftCardsAppend) {
      checkoutGiftCardsAppend.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutGiftCardsAppend.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutGiftCardsAppend.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$21(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutGiftCardRemoveV2 = {};
  variables.checkoutGiftCardRemoveV2.appliedGiftCardId = client.variable("appliedGiftCardId", "ID!");
  variables.checkoutGiftCardRemoveV2.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutGiftCardRemoveV2", [variables.checkoutGiftCardRemoveV2.appliedGiftCardId, variables.checkoutGiftCardRemoveV2.checkoutId], function (root) {
    root.add("checkoutGiftCardRemoveV2", {
      args: {
        appliedGiftCardId: variables.checkoutGiftCardRemoveV2.appliedGiftCardId,
        checkoutId: variables.checkoutGiftCardRemoveV2.checkoutId
      }
    }, function (checkoutGiftCardRemoveV2) {
      checkoutGiftCardRemoveV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutGiftCardRemoveV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutGiftCardRemoveV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$22(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutEmailUpdateV2 = {};
  variables.checkoutEmailUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
  variables.checkoutEmailUpdateV2.email = client.variable("email", "String!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutEmailUpdateV2", [variables.checkoutEmailUpdateV2.checkoutId, variables.checkoutEmailUpdateV2.email], function (root) {
    root.add("checkoutEmailUpdateV2", {
      args: {
        checkoutId: variables.checkoutEmailUpdateV2.checkoutId,
        email: variables.checkoutEmailUpdateV2.email
      }
    }, function (checkoutEmailUpdateV2) {
      checkoutEmailUpdateV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutEmailUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutEmailUpdateV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

function query$23(client) {
  var document = client.document();
  var spreads = {};
  var variables = {};
  variables.checkoutShippingAddressUpdateV2 = {};
  variables.checkoutShippingAddressUpdateV2.shippingAddress = client.variable("shippingAddress", "MailingAddressInput!");
  variables.checkoutShippingAddressUpdateV2.checkoutId = client.variable("checkoutId", "ID!");
  spreads.VariantFragment = document.defineFragment("VariantFragment", "ProductVariant", function (root) {
    root.add("id");
    root.add("title");
    root.add("price");
    root.add("priceV2", function (priceV2) {
      priceV2.add("amount");
      priceV2.add("currencyCode");
    });
    root.add("presentmentPrices", {
      args: {
        first: 20
      }
    }, function (presentmentPrices) {
      presentmentPrices.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      presentmentPrices.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.add("price", function (price) {
            price.add("amount");
            price.add("currencyCode");
          });
          node.add("compareAtPrice", function (compareAtPrice) {
            compareAtPrice.add("amount");
            compareAtPrice.add("currencyCode");
          });
        });
      });
    });
    root.add("weight");
    root.add("availableForSale", {
      alias: "available"
    });
    root.add("sku");
    root.add("compareAtPrice");
    root.add("compareAtPriceV2", function (compareAtPriceV2) {
      compareAtPriceV2.add("amount");
      compareAtPriceV2.add("currencyCode");
    });
    root.add("image", function (image) {
      image.add("id");
      image.add("originalSrc", {
        alias: "src"
      });
      image.add("altText");
    });
    root.add("selectedOptions", function (selectedOptions) {
      selectedOptions.add("name");
      selectedOptions.add("value");
    });
    root.add("unitPrice", function (unitPrice) {
      unitPrice.add("amount");
      unitPrice.add("currencyCode");
    });
    root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
      unitPriceMeasurement.add("measuredType");
      unitPriceMeasurement.add("quantityUnit");
      unitPriceMeasurement.add("quantityValue");
      unitPriceMeasurement.add("referenceUnit");
      unitPriceMeasurement.add("referenceValue");
    });
  });
  spreads.DiscountApplicationFragment = document.defineFragment("DiscountApplicationFragment", "DiscountApplication", function (root) {
    root.add("targetSelection");
    root.add("allocationMethod");
    root.add("targetType");
    root.add("value", function (value) {
      value.addInlineFragmentOn("MoneyV2", function (MoneyV2) {
        MoneyV2.add("amount");
        MoneyV2.add("currencyCode");
      });
      value.addInlineFragmentOn("PricingPercentageValue", function (PricingPercentageValue) {
        PricingPercentageValue.add("percentage");
      });
    });
    root.addInlineFragmentOn("ManualDiscountApplication", function (ManualDiscountApplication) {
      ManualDiscountApplication.add("title");
      ManualDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("DiscountCodeApplication", function (DiscountCodeApplication) {
      DiscountCodeApplication.add("code");
      DiscountCodeApplication.add("applicable");
    });
    root.addInlineFragmentOn("ScriptDiscountApplication", function (ScriptDiscountApplication) {
      ScriptDiscountApplication.add("description");
    });
    root.addInlineFragmentOn("AutomaticDiscountApplication", function (AutomaticDiscountApplication) {
      AutomaticDiscountApplication.add("title");
    });
  });
  spreads.AppliedGiftCardFragment = document.defineFragment("AppliedGiftCardFragment", "AppliedGiftCard", function (root) {
    root.add("amountUsedV2", function (amountUsedV2) {
      amountUsedV2.add("amount");
      amountUsedV2.add("currencyCode");
    });
    root.add("balanceV2", function (balanceV2) {
      balanceV2.add("amount");
      balanceV2.add("currencyCode");
    });
    root.add("presentmentAmountUsed", function (presentmentAmountUsed) {
      presentmentAmountUsed.add("amount");
      presentmentAmountUsed.add("currencyCode");
    });
    root.add("id");
    root.add("lastCharacters");
  });
  spreads.VariantWithProductFragment = document.defineFragment("VariantWithProductFragment", "ProductVariant", function (root) {
    root.addFragment(spreads.VariantFragment);
    root.add("product", function (product) {
      product.add("id");
      product.add("handle");
    });
  });
  spreads.UserErrorFragment = document.defineFragment("UserErrorFragment", "UserError", function (root) {
    root.add("field");
    root.add("message");
  });
  spreads.CheckoutUserErrorFragment = document.defineFragment("CheckoutUserErrorFragment", "CheckoutUserError", function (root) {
    root.add("field");
    root.add("message");
    root.add("code");
  });
  spreads.MailingAddressFragment = document.defineFragment("MailingAddressFragment", "MailingAddress", function (root) {
    root.add("id");
    root.add("address1");
    root.add("address2");
    root.add("city");
    root.add("company");
    root.add("country");
    root.add("firstName");
    root.add("formatted");
    root.add("lastName");
    root.add("latitude");
    root.add("longitude");
    root.add("phone");
    root.add("province");
    root.add("zip");
    root.add("name");
    root.add("countryCodeV2", {
      alias: "countryCode"
    });
    root.add("provinceCode");
  });
  spreads.CheckoutFragment = document.defineFragment("CheckoutFragment", "Checkout", function (root) {
    root.add("id");
    root.add("ready");
    root.add("requiresShipping");
    root.add("note");
    root.add("paymentDue");
    root.add("paymentDueV2", function (paymentDueV2) {
      paymentDueV2.add("amount");
      paymentDueV2.add("currencyCode");
    });
    root.add("webUrl");
    root.add("orderStatusUrl");
    root.add("taxExempt");
    root.add("taxesIncluded");
    root.add("currencyCode");
    root.add("totalTax");
    root.add("totalTaxV2", function (totalTaxV2) {
      totalTaxV2.add("amount");
      totalTaxV2.add("currencyCode");
    });
    root.add("lineItemsSubtotalPrice", function (lineItemsSubtotalPrice) {
      lineItemsSubtotalPrice.add("amount");
      lineItemsSubtotalPrice.add("currencyCode");
    });
    root.add("subtotalPrice");
    root.add("subtotalPriceV2", function (subtotalPriceV2) {
      subtotalPriceV2.add("amount");
      subtotalPriceV2.add("currencyCode");
    });
    root.add("totalPrice");
    root.add("totalPriceV2", function (totalPriceV2) {
      totalPriceV2.add("amount");
      totalPriceV2.add("currencyCode");
    });
    root.add("completedAt");
    root.add("createdAt");
    root.add("updatedAt");
    root.add("email");
    root.add("discountApplications", {
      args: {
        first: 10
      }
    }, function (discountApplications) {
      discountApplications.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      discountApplications.add("edges", function (edges) {
        edges.add("node", function (node) {
          node.addFragment(spreads.DiscountApplicationFragment);
        });
      });
    });
    root.add("appliedGiftCards", function (appliedGiftCards) {
      appliedGiftCards.addFragment(spreads.AppliedGiftCardFragment);
    });
    root.add("shippingAddress", function (shippingAddress) {
      shippingAddress.addFragment(spreads.MailingAddressFragment);
    });
    root.add("shippingLine", function (shippingLine) {
      shippingLine.add("handle");
      shippingLine.add("price");
      shippingLine.add("priceV2", function (priceV2) {
        priceV2.add("amount");
        priceV2.add("currencyCode");
      });
      shippingLine.add("title");
    });
    root.add("customAttributes", function (customAttributes) {
      customAttributes.add("key");
      customAttributes.add("value");
    });
    root.add("order", function (order) {
      order.add("id");
      order.add("processedAt");
      order.add("orderNumber");
      order.add("subtotalPrice");
      order.add("subtotalPriceV2", function (subtotalPriceV2) {
        subtotalPriceV2.add("amount");
        subtotalPriceV2.add("currencyCode");
      });
      order.add("totalShippingPrice");
      order.add("totalShippingPriceV2", function (totalShippingPriceV2) {
        totalShippingPriceV2.add("amount");
        totalShippingPriceV2.add("currencyCode");
      });
      order.add("totalTax");
      order.add("totalTaxV2", function (totalTaxV2) {
        totalTaxV2.add("amount");
        totalTaxV2.add("currencyCode");
      });
      order.add("totalPrice");
      order.add("totalPriceV2", function (totalPriceV2) {
        totalPriceV2.add("amount");
        totalPriceV2.add("currencyCode");
      });
      order.add("currencyCode");
      order.add("totalRefunded");
      order.add("totalRefundedV2", function (totalRefundedV2) {
        totalRefundedV2.add("amount");
        totalRefundedV2.add("currencyCode");
      });
      order.add("customerUrl");
      order.add("shippingAddress", function (shippingAddress) {
        shippingAddress.addFragment(spreads.MailingAddressFragment);
      });
      order.add("lineItems", {
        args: {
          first: 250
        }
      }, function (lineItems) {
        lineItems.add("pageInfo", function (pageInfo) {
          pageInfo.add("hasNextPage");
          pageInfo.add("hasPreviousPage");
        });
        lineItems.add("edges", function (edges) {
          edges.add("cursor");
          edges.add("node", function (node) {
            node.add("title");
            node.add("variant", function (variant) {
              variant.addFragment(spreads.VariantWithProductFragment);
            });
            node.add("quantity");
            node.add("customAttributes", function (customAttributes) {
              customAttributes.add("key");
              customAttributes.add("value");
            });
          });
        });
      });
    });
    root.add("lineItems", {
      args: {
        first: 250
      }
    }, function (lineItems) {
      lineItems.add("pageInfo", function (pageInfo) {
        pageInfo.add("hasNextPage");
        pageInfo.add("hasPreviousPage");
      });
      lineItems.add("edges", function (edges) {
        edges.add("cursor");
        edges.add("node", function (node) {
          node.add("id");
          node.add("title");
          node.add("variant", function (variant) {
            variant.addFragment(spreads.VariantWithProductFragment);
          });
          node.add("quantity");
          node.add("customAttributes", function (customAttributes) {
            customAttributes.add("key");
            customAttributes.add("value");
          });
          node.add("discountAllocations", function (discountAllocations) {
            discountAllocations.add("allocatedAmount", function (allocatedAmount) {
              allocatedAmount.add("amount");
              allocatedAmount.add("currencyCode");
            });
            discountAllocations.add("discountApplication", function (discountApplication) {
              discountApplication.addFragment(spreads.DiscountApplicationFragment);
            });
          });
        });
      });
    });
  });
  document.addMutation("checkoutShippingAddressUpdateV2", [variables.checkoutShippingAddressUpdateV2.shippingAddress, variables.checkoutShippingAddressUpdateV2.checkoutId], function (root) {
    root.add("checkoutShippingAddressUpdateV2", {
      args: {
        shippingAddress: variables.checkoutShippingAddressUpdateV2.shippingAddress,
        checkoutId: variables.checkoutShippingAddressUpdateV2.checkoutId
      }
    }, function (checkoutShippingAddressUpdateV2) {
      checkoutShippingAddressUpdateV2.add("userErrors", function (userErrors) {
        userErrors.addFragment(spreads.UserErrorFragment);
      });
      checkoutShippingAddressUpdateV2.add("checkoutUserErrors", function (checkoutUserErrors) {
        checkoutUserErrors.addFragment(spreads.CheckoutUserErrorFragment);
      });
      checkoutShippingAddressUpdateV2.add("checkout", function (checkout) {
        checkout.addFragment(spreads.CheckoutFragment);
      });
    });
  });
  return document;
}

// GraphQL
/**
 * The JS Buy SDK checkout resource
 * @class
 */

var CheckoutResource = function (_Resource) {
  inherits$1(CheckoutResource, _Resource);

  function CheckoutResource() {
    classCallCheck$1(this, CheckoutResource);
    return possibleConstructorReturn$1(this, (CheckoutResource.__proto__ || Object.getPrototypeOf(CheckoutResource)).apply(this, arguments));
  }

  createClass$1(CheckoutResource, [{
    key: 'fetch',


    /**
     * Fetches a checkout by ID.
     *
     * @example
     * client.checkout.fetch('FlZj9rZXlN5MDY4ZDFiZTUyZTUwNTE2MDNhZjg=').then((checkout) => {
     *   // Do something with the checkout
     * });
     *
     * @param {String} id The id of the checkout to fetch.
     * @return {Promise|GraphModel} A promise resolving with a `GraphModel` of the checkout.
     */
    value: function fetch(id) {
      var _this2 = this;

      return this.graphQLClient.send(query$11, { id: id }).then(defaultResolver('node')).then(function (checkout) {
        if (!checkout) {
          return null;
        }

        return _this2.graphQLClient.fetchAllPages(checkout.lineItems, { pageSize: 250 }).then(function (lineItems) {
          checkout.attrs.lineItems = lineItems;

          return checkout;
        });
      });
    }

    /**
     * Creates a checkout.
     *
     * @example
     * const input = {
     *   lineItems: [
     *     {variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}
     *   ]
     * };
     *
     * client.checkout.create(input).then((checkout) => {
     *   // Do something with the newly created checkout
     * });
     *
     * @param {Object} [input] An input object containing zero or more of:
     *   @param {String} [input.email] An email connected to the checkout.
     *   @param {Object[]} [input.lineItems] A list of line items in the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     *   @param {Object} [input.shippingAddress] A shipping address. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/mailingaddressinput|Storefront API reference} for valid input fields.
     *   @param {String} [input.note] A note for the checkout.
     *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
     *   @param {String} [input.presentmentCurrencyCode ] A presentment currency code. See the {@link https://help.shopify.com/en/api/storefront-api/reference/enum/currencycode|Storefront API reference} for valid currency code values.
     * @return {Promise|GraphModel} A promise resolving with the created checkout.
     */

  }, {
    key: 'create',
    value: function create() {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.graphQLClient.send(query$12, { input: input }).then(handleCheckoutMutation('checkoutCreate', this.graphQLClient));
    }

    /**
     * Replaces the value of checkout's custom attributes and/or note with values defined in the input
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const input = {customAttributes: [{key: "MyKey", value: "MyValue"}]};
     *
     * client.checkout.updateAttributes(checkoutId, input).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update.
     * @param {Object} [input] An input object containing zero or more of:
     *   @param {Boolean} [input.allowPartialAddresses] An email connected to the checkout.
     *   @param {Object[]} [input.customAttributes] A list of custom attributes for the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/attributeinput|Storefront API reference} for valid input fields.
     *   @param {String} [input.note] A note for the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateAttributes',
    value: function updateAttributes(checkoutId) {
      var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.graphQLClient.send(query$17, { checkoutId: checkoutId, input: input }).then(handleCheckoutMutation('checkoutAttributesUpdateV2', this.graphQLClient));
    }

    /**
     * Replaces the value of checkout's email address
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const email = 'user@example.com';
     *
     * client.checkout.updateEmail(checkoutId, email).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update.
     * @param {String} email The email address to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateEmail',
    value: function updateEmail(checkoutId, email) {
      return this.graphQLClient.send(query$22, { checkoutId: checkoutId, email: email }).then(handleCheckoutMutation('checkoutEmailUpdateV2', this.graphQLClient));
    }

    /**
     * Adds line items to an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [{variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}];
     *
     * client.checkout.addLineItems(checkoutId, lineItems).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add line items to.
     * @param {Object[]} lineItems A list of line items to add to the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addLineItems',
    value: function addLineItems(checkoutId, lineItems) {
      return this.graphQLClient.send(query$13, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsAdd', this.graphQLClient));
    }

    /**
     * Applies a discount to an existing checkout using a discount code.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const discountCode = 'best-discount-ever';
     *
     * client.checkout.addDiscount(checkoutId, discountCode).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add discount to.
     * @param {String} discountCode The discount code to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addDiscount',
    value: function addDiscount(checkoutId, discountCode) {
      return this.graphQLClient.send(query$18, { checkoutId: checkoutId, discountCode: discountCode }).then(handleCheckoutMutation('checkoutDiscountCodeApplyV2', this.graphQLClient));
    }

    /**
     * Removes the applied discount from an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     *
     * client.checkout.removeDiscount(checkoutId).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to remove the discount from.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeDiscount',
    value: function removeDiscount(checkoutId) {
      return this.graphQLClient.send(query$19, { checkoutId: checkoutId }).then(handleCheckoutMutation('checkoutDiscountCodeRemove', this.graphQLClient));
    }

    /**
     * Applies gift cards to an existing checkout using a list of gift card codes
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const giftCardCodes = ['6FD8853DAGAA949F'];
     *
     * client.checkout.addGiftCards(checkoutId, giftCardCodes).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add gift cards to.
     * @param {String[]} giftCardCodes The gift card codes to apply to the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'addGiftCards',
    value: function addGiftCards(checkoutId, giftCardCodes) {
      return this.graphQLClient.send(query$20, { checkoutId: checkoutId, giftCardCodes: giftCardCodes }).then(handleCheckoutMutation('checkoutGiftCardsAppend', this.graphQLClient));
    }

    /**
     * Remove a gift card from an existing checkout
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const appliedGiftCardId = 'Z2lkOi8vc2hvcGlmeS9BcHBsaWVkR2lmdENhcmQvNDI4NTQ1ODAzMTI=';
     *
     * client.checkout.removeGiftCard(checkoutId, appliedGiftCardId).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add gift cards to.
     * @param {String} appliedGiftCardId The gift card id to remove from the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeGiftCard',
    value: function removeGiftCard(checkoutId, appliedGiftCardId) {
      return this.graphQLClient.send(query$21, { checkoutId: checkoutId, appliedGiftCardId: appliedGiftCardId }).then(handleCheckoutMutation('checkoutGiftCardRemoveV2', this.graphQLClient));
    }

    /**
     * Removes line items from an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItemIds = ['TViZGE5Y2U1ZDFhY2FiMmM2YT9rZXk9NTc2YjBhODcwNWIxYzg0YjE5ZjRmZGQ5NjczNGVkZGU='];
     *
     * client.checkout.removeLineItems(checkoutId, lineItemIds).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to remove line items from.
     * @param {String[]} lineItemIds A list of the ids of line items to remove from the checkout.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'removeLineItems',
    value: function removeLineItems(checkoutId, lineItemIds) {
      return this.graphQLClient.send(query$14, { checkoutId: checkoutId, lineItemIds: lineItemIds }).then(handleCheckoutMutation('checkoutLineItemsRemove', this.graphQLClient));
    }

    /**
     * Replace line items on an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [{variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg==', quantity: 5}];
     *
     * client.checkout.replaceLineItems(checkoutId, lineItems).then((checkout) => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to add line items to.
     * @param {Object[]} lineItems A list of line items to set on the checkout. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineiteminput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'replaceLineItems',
    value: function replaceLineItems(checkoutId, lineItems) {
      return this.graphQLClient.send(query$15, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsReplace', this.graphQLClient));
    }

    /**
     * Updates line items on an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const lineItems = [
     *   {
     *     id: 'TViZGE5Y2U1ZDFhY2FiMmM2YT9rZXk9NTc2YjBhODcwNWIxYzg0YjE5ZjRmZGQ5NjczNGVkZGU=',
     *     quantity: 5,
     *     variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTEwNjAyMjc5Mg=='
     *   }
     * ];
     *
     * client.checkout.updateLineItems(checkoutId, lineItems).then(checkout => {
     *   // Do something with the updated checkout
     * });
     *
     * @param {String} checkoutId The ID of the checkout to update a line item on.
     * @param {Object[]} lineItems A list of line item information to update. See the {@link https://help.shopify.com/api/storefront-api/reference/input-object/checkoutlineitemupdateinput|Storefront API reference} for valid input fields for each line item.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateLineItems',
    value: function updateLineItems(checkoutId, lineItems) {
      return this.graphQLClient.send(query$16, { checkoutId: checkoutId, lineItems: lineItems }).then(handleCheckoutMutation('checkoutLineItemsUpdate', this.graphQLClient));
    }

    /**
     * Updates shipping address on an existing checkout.
     *
     * @example
     * const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N=';
     * const shippingAddress = {
     *    address1: 'Chestnut Street 92',
     *    address2: 'Apartment 2',
     *    city: 'Louisville',
     *    company: null,
     *    country: 'United States',
     *    firstName: 'Bob',
     *    lastName: 'Norman',
     *    phone: '555-625-1199',
     *    province: 'Kentucky',
     *    zip: '40202'
     *  };
     *
     * client.checkout.updateShippingAddress(checkoutId, shippingAddress).then(checkout => {
     *   // Do something with the updated checkout
     * });
     *
     * @param  {String} checkoutId The ID of the checkout to update shipping address.
     * @param  {Object} shippingAddress A shipping address.
     * @return {Promise|GraphModel} A promise resolving with the updated checkout.
     */

  }, {
    key: 'updateShippingAddress',
    value: function updateShippingAddress(checkoutId, shippingAddress) {
      return this.graphQLClient.send(query$23, { checkoutId: checkoutId, shippingAddress: shippingAddress }).then(handleCheckoutMutation('checkoutShippingAddressUpdateV2', this.graphQLClient));
    }
  }]);
  return CheckoutResource;
}(Resource);

/**
 * @namespace ImageHelpers
 */
var imageHelpers = {

  /**
   * Generates the image src for a resized image with maximum dimensions `maxWidth` and `maxHeight`.
   * Images do not scale up.
   *
   * @example
   * const url = client.image.helpers.imageForSize(product.variants[0].image, {maxWidth: 50, maxHeight: 50});
   *
   * @memberof ImageHelpers
   * @method imageForSize
   * @param {Object} image The original image model to generate the image src for.
   * @param {Object} options An options object containing:
   *  @param {Integer} options.maxWidth The maximum width for the image.
   *  @param {Integer} options.maxHeight The maximum height for the image.
   * @return {String} The image src for the resized image.
   */
  imageForSize: function imageForSize(image, _ref) {
    var maxWidth = _ref.maxWidth,
        maxHeight = _ref.maxHeight;

    var splitUrl = image.src.split('?');
    var notQuery = splitUrl[0];
    var query = splitUrl[1] ? '?' + splitUrl[1] : '';

    // Use the section before the query
    var imageTokens = notQuery.split('.');

    // Take the token before the file extension and append the dimensions
    var imagePathIndex = imageTokens.length - 2;

    imageTokens[imagePathIndex] = imageTokens[imagePathIndex] + '_' + maxWidth + 'x' + maxHeight;

    return '' + imageTokens.join('.') + query;
  }
};

/**
 * The JS Buy SDK image resource
 * @class
 */

var ImageResource = function (_Resource) {
  inherits$1(ImageResource, _Resource);

  function ImageResource() {
    classCallCheck$1(this, ImageResource);
    return possibleConstructorReturn$1(this, (ImageResource.__proto__ || Object.getPrototypeOf(ImageResource)).apply(this, arguments));
  }

  createClass$1(ImageResource, [{
    key: 'helpers',
    get: function get$$1() {
      return imageHelpers;
    }
  }]);
  return ImageResource;
}(Resource);

var version = "2.9.3";

var Boolean$1 = {
  "name": "Boolean",
  "kind": "SCALAR"
};

var String$1 = {
  "name": "String",
  "kind": "SCALAR"
};

var QueryRoot = {
  "name": "QueryRoot",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "collectionByHandle": "Collection",
    "collections": "CollectionConnection",
    "node": "Node",
    "nodes": "Node",
    "productByHandle": "Product",
    "products": "ProductConnection",
    "shop": "Shop"
  },
  "implementsNode": false
};

var Node = {
  "name": "Node",
  "kind": "INTERFACE",
  "fieldBaseTypes": {},
  "possibleTypes": ["AppliedGiftCard", "Article", "Blog", "Checkout", "CheckoutLineItem", "Collection", "Comment", "ExternalVideo", "MailingAddress", "MediaImage", "Metafield", "Model3d", "Order", "Page", "Payment", "Product", "ProductOption", "ProductVariant", "ShopPolicy", "Video"]
};

var ID = {
  "name": "ID",
  "kind": "SCALAR"
};

var DateTime = {
  "name": "DateTime",
  "kind": "SCALAR"
};

var MailingAddress = {
  "name": "MailingAddress",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "address1": "String",
    "address2": "String",
    "city": "String",
    "company": "String",
    "country": "String",
    "countryCodeV2": "CountryCode",
    "firstName": "String",
    "formatted": "String",
    "id": "ID",
    "lastName": "String",
    "latitude": "Float",
    "longitude": "Float",
    "name": "String",
    "phone": "String",
    "province": "String",
    "provinceCode": "String",
    "zip": "String"
  },
  "implementsNode": true
};

var Float = {
  "name": "Float",
  "kind": "SCALAR"
};

var CountryCode = {
  "name": "CountryCode",
  "kind": "ENUM"
};

var PageInfo = {
  "name": "PageInfo",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "hasNextPage": "Boolean",
    "hasPreviousPage": "Boolean"
  },
  "implementsNode": false
};

var Int = {
  "name": "Int",
  "kind": "SCALAR"
};

var Order = {
  "name": "Order",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "currencyCode": "CurrencyCode",
    "customerUrl": "URL",
    "id": "ID",
    "lineItems": "OrderLineItemConnection",
    "orderNumber": "Int",
    "processedAt": "DateTime",
    "shippingAddress": "MailingAddress",
    "subtotalPrice": "Money",
    "subtotalPriceV2": "MoneyV2",
    "totalPrice": "Money",
    "totalPriceV2": "MoneyV2",
    "totalRefunded": "Money",
    "totalRefundedV2": "MoneyV2",
    "totalShippingPrice": "Money",
    "totalShippingPriceV2": "MoneyV2",
    "totalTax": "Money",
    "totalTaxV2": "MoneyV2"
  },
  "implementsNode": true
};

var Money = {
  "name": "Money",
  "kind": "SCALAR"
};

var MoneyV2 = {
  "name": "MoneyV2",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amount": "Decimal",
    "currencyCode": "CurrencyCode"
  },
  "implementsNode": false
};

var Decimal = {
  "name": "Decimal",
  "kind": "SCALAR"
};

var CurrencyCode = {
  "name": "CurrencyCode",
  "kind": "ENUM"
};

var URL = {
  "name": "URL",
  "kind": "SCALAR"
};

var DiscountAllocation = {
  "name": "DiscountAllocation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "allocatedAmount": "MoneyV2",
    "discountApplication": "DiscountApplication"
  },
  "implementsNode": false
};

var DiscountApplication = {
  "name": "DiscountApplication",
  "kind": "INTERFACE",
  "fieldBaseTypes": {
    "allocationMethod": "DiscountApplicationAllocationMethod",
    "targetSelection": "DiscountApplicationTargetSelection",
    "targetType": "DiscountApplicationTargetType",
    "value": "PricingValue"
  },
  "possibleTypes": ["AutomaticDiscountApplication", "DiscountCodeApplication", "ManualDiscountApplication", "ScriptDiscountApplication"]
};

var DiscountApplicationAllocationMethod = {
  "name": "DiscountApplicationAllocationMethod",
  "kind": "ENUM"
};

var DiscountApplicationTargetSelection = {
  "name": "DiscountApplicationTargetSelection",
  "kind": "ENUM"
};

var DiscountApplicationTargetType = {
  "name": "DiscountApplicationTargetType",
  "kind": "ENUM"
};

var PricingValue = {
  "name": "PricingValue",
  "kind": "UNION"
};

var PricingPercentageValue = {
  "name": "PricingPercentageValue",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "percentage": "Float"
  },
  "implementsNode": false
};

var OrderLineItemConnection = {
  "name": "OrderLineItemConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "OrderLineItemEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var OrderLineItemEdge = {
  "name": "OrderLineItemEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "OrderLineItem"
  },
  "implementsNode": false
};

var OrderLineItem = {
  "name": "OrderLineItem",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customAttributes": "Attribute",
    "quantity": "Int",
    "title": "String",
    "variant": "ProductVariant"
  },
  "implementsNode": false
};

var ProductVariant = {
  "name": "ProductVariant",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "availableForSale": "Boolean",
    "compareAtPrice": "Money",
    "compareAtPriceV2": "MoneyV2",
    "id": "ID",
    "image": "Image",
    "presentmentPrices": "ProductVariantPricePairConnection",
    "price": "Money",
    "priceV2": "MoneyV2",
    "product": "Product",
    "selectedOptions": "SelectedOption",
    "sku": "String",
    "title": "String",
    "unitPrice": "MoneyV2",
    "unitPriceMeasurement": "UnitPriceMeasurement",
    "weight": "Float"
  },
  "implementsNode": true
};

var Product = {
  "name": "Product",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "availableForSale": "Boolean",
    "createdAt": "DateTime",
    "description": "String",
    "descriptionHtml": "HTML",
    "handle": "String",
    "id": "ID",
    "images": "ImageConnection",
    "onlineStoreUrl": "URL",
    "options": "ProductOption",
    "productType": "String",
    "publishedAt": "DateTime",
    "title": "String",
    "updatedAt": "DateTime",
    "variants": "ProductVariantConnection",
    "vendor": "String"
  },
  "implementsNode": true
};

var CollectionConnection = {
  "name": "CollectionConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CollectionEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var CollectionEdge = {
  "name": "CollectionEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Collection"
  },
  "implementsNode": false
};

var Collection = {
  "name": "Collection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "descriptionHtml": "HTML",
    "handle": "String",
    "id": "ID",
    "image": "Image",
    "products": "ProductConnection",
    "title": "String",
    "updatedAt": "DateTime"
  },
  "implementsNode": true
};

var HTML = {
  "name": "HTML",
  "kind": "SCALAR"
};

var Image = {
  "name": "Image",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "altText": "String",
    "id": "ID",
    "originalSrc": "URL",
    "src": "URL"
  },
  "implementsNode": false
};

var ProductConnection = {
  "name": "ProductConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ProductEdge = {
  "name": "ProductEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Product"
  },
  "implementsNode": false
};

var ImageConnection = {
  "name": "ImageConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ImageEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ImageEdge = {
  "name": "ImageEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "Image"
  },
  "implementsNode": false
};

var ProductOption = {
  "name": "ProductOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "values": "String"
  },
  "implementsNode": true
};

var ProductVariantConnection = {
  "name": "ProductVariantConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductVariantEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ProductVariantEdge = {
  "name": "ProductVariantEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "ProductVariant"
  },
  "implementsNode": false
};

var ProductVariantPricePairConnection = {
  "name": "ProductVariantPricePairConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "ProductVariantPricePairEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var ProductVariantPricePairEdge = {
  "name": "ProductVariantPricePairEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "node": "ProductVariantPricePair"
  },
  "implementsNode": false
};

var ProductVariantPricePair = {
  "name": "ProductVariantPricePair",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "compareAtPrice": "MoneyV2",
    "price": "MoneyV2"
  },
  "implementsNode": false
};

var SelectedOption = {
  "name": "SelectedOption",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "name": "String",
    "value": "String"
  },
  "implementsNode": false
};

var UnitPriceMeasurement = {
  "name": "UnitPriceMeasurement",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "measuredType": "UnitPriceMeasurementMeasuredType",
    "quantityUnit": "UnitPriceMeasurementMeasuredUnit",
    "quantityValue": "Float",
    "referenceUnit": "UnitPriceMeasurementMeasuredUnit",
    "referenceValue": "Int"
  },
  "implementsNode": false
};

var UnitPriceMeasurementMeasuredType = {
  "name": "UnitPriceMeasurementMeasuredType",
  "kind": "ENUM"
};

var UnitPriceMeasurementMeasuredUnit = {
  "name": "UnitPriceMeasurementMeasuredUnit",
  "kind": "ENUM"
};

var Attribute = {
  "name": "Attribute",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "key": "String",
    "value": "String"
  },
  "implementsNode": false
};

var DiscountApplicationConnection = {
  "name": "DiscountApplicationConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "DiscountApplicationEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var DiscountApplicationEdge = {
  "name": "DiscountApplicationEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "node": "DiscountApplication"
  },
  "implementsNode": false
};

var Checkout = {
  "name": "Checkout",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "appliedGiftCards": "AppliedGiftCard",
    "completedAt": "DateTime",
    "createdAt": "DateTime",
    "currencyCode": "CurrencyCode",
    "customAttributes": "Attribute",
    "discountApplications": "DiscountApplicationConnection",
    "email": "String",
    "id": "ID",
    "lineItems": "CheckoutLineItemConnection",
    "lineItemsSubtotalPrice": "MoneyV2",
    "note": "String",
    "order": "Order",
    "orderStatusUrl": "URL",
    "paymentDue": "Money",
    "paymentDueV2": "MoneyV2",
    "ready": "Boolean",
    "requiresShipping": "Boolean",
    "shippingAddress": "MailingAddress",
    "shippingLine": "ShippingRate",
    "subtotalPrice": "Money",
    "subtotalPriceV2": "MoneyV2",
    "taxExempt": "Boolean",
    "taxesIncluded": "Boolean",
    "totalPrice": "Money",
    "totalPriceV2": "MoneyV2",
    "totalTax": "Money",
    "totalTaxV2": "MoneyV2",
    "updatedAt": "DateTime",
    "webUrl": "URL"
  },
  "implementsNode": true
};

var CheckoutLineItemConnection = {
  "name": "CheckoutLineItemConnection",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "edges": "CheckoutLineItemEdge",
    "pageInfo": "PageInfo"
  },
  "implementsNode": false
};

var CheckoutLineItemEdge = {
  "name": "CheckoutLineItemEdge",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "cursor": "String",
    "node": "CheckoutLineItem"
  },
  "implementsNode": false
};

var CheckoutLineItem = {
  "name": "CheckoutLineItem",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "customAttributes": "Attribute",
    "discountAllocations": "DiscountAllocation",
    "id": "ID",
    "quantity": "Int",
    "title": "String",
    "variant": "ProductVariant"
  },
  "implementsNode": true
};

var ShippingRate = {
  "name": "ShippingRate",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "handle": "String",
    "price": "Money",
    "priceV2": "MoneyV2",
    "title": "String"
  },
  "implementsNode": false
};

var AppliedGiftCard = {
  "name": "AppliedGiftCard",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "amountUsedV2": "MoneyV2",
    "balanceV2": "MoneyV2",
    "id": "ID",
    "lastCharacters": "String",
    "presentmentAmountUsed": "MoneyV2"
  },
  "implementsNode": true
};

var Shop = {
  "name": "Shop",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "currencyCode": "CurrencyCode",
    "description": "String",
    "moneyFormat": "String",
    "name": "String",
    "paymentSettings": "PaymentSettings",
    "primaryDomain": "Domain",
    "privacyPolicy": "ShopPolicy",
    "refundPolicy": "ShopPolicy",
    "termsOfService": "ShopPolicy"
  },
  "implementsNode": false
};

var PaymentSettings = {
  "name": "PaymentSettings",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "enabledPresentmentCurrencies": "CurrencyCode"
  },
  "implementsNode": false
};

var Domain = {
  "name": "Domain",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "host": "String",
    "sslEnabled": "Boolean",
    "url": "URL"
  },
  "implementsNode": false
};

var ShopPolicy = {
  "name": "ShopPolicy",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "body": "String",
    "id": "ID",
    "title": "String",
    "url": "URL"
  },
  "implementsNode": true
};

var Mutation$1 = {
  "name": "Mutation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkoutAttributesUpdateV2": "CheckoutAttributesUpdateV2Payload",
    "checkoutCreate": "CheckoutCreatePayload",
    "checkoutDiscountCodeApplyV2": "CheckoutDiscountCodeApplyV2Payload",
    "checkoutDiscountCodeRemove": "CheckoutDiscountCodeRemovePayload",
    "checkoutEmailUpdateV2": "CheckoutEmailUpdateV2Payload",
    "checkoutGiftCardRemoveV2": "CheckoutGiftCardRemoveV2Payload",
    "checkoutGiftCardsAppend": "CheckoutGiftCardsAppendPayload",
    "checkoutLineItemsAdd": "CheckoutLineItemsAddPayload",
    "checkoutLineItemsRemove": "CheckoutLineItemsRemovePayload",
    "checkoutLineItemsReplace": "CheckoutLineItemsReplacePayload",
    "checkoutLineItemsUpdate": "CheckoutLineItemsUpdatePayload",
    "checkoutShippingAddressUpdateV2": "CheckoutShippingAddressUpdateV2Payload"
  },
  "implementsNode": false,
  "relayInputObjectBaseTypes": {
    "checkoutAttributesUpdate": "CheckoutAttributesUpdateInput",
    "checkoutAttributesUpdateV2": "CheckoutAttributesUpdateV2Input",
    "checkoutCreate": "CheckoutCreateInput",
    "customerAccessTokenCreate": "CustomerAccessTokenCreateInput",
    "customerActivate": "CustomerActivateInput",
    "customerCreate": "CustomerCreateInput",
    "customerReset": "CustomerResetInput"
  }
};

var UserError = {
  "name": "UserError",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "field": "String",
    "message": "String"
  },
  "implementsNode": false
};

var CheckoutUserError = {
  "name": "CheckoutUserError",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "code": "CheckoutErrorCode",
    "field": "String",
    "message": "String"
  },
  "implementsNode": false
};

var CheckoutErrorCode = {
  "name": "CheckoutErrorCode",
  "kind": "ENUM"
};

var CheckoutAttributesUpdateV2Payload = {
  "name": "CheckoutAttributesUpdateV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutDiscountCodeApplyV2Payload = {
  "name": "CheckoutDiscountCodeApplyV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutCreatePayload = {
  "name": "CheckoutCreatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutEmailUpdateV2Payload = {
  "name": "CheckoutEmailUpdateV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutDiscountCodeRemovePayload = {
  "name": "CheckoutDiscountCodeRemovePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutGiftCardsAppendPayload = {
  "name": "CheckoutGiftCardsAppendPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutGiftCardRemoveV2Payload = {
  "name": "CheckoutGiftCardRemoveV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutLineItemsAddPayload = {
  "name": "CheckoutLineItemsAddPayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutLineItemsRemovePayload = {
  "name": "CheckoutLineItemsRemovePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutLineItemsUpdatePayload = {
  "name": "CheckoutLineItemsUpdatePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var CheckoutLineItemsReplacePayload = {
  "name": "CheckoutLineItemsReplacePayload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "userErrors": "CheckoutUserError"
  },
  "implementsNode": false
};

var CheckoutShippingAddressUpdateV2Payload = {
  "name": "CheckoutShippingAddressUpdateV2Payload",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkout": "Checkout",
    "checkoutUserErrors": "CheckoutUserError",
    "userErrors": "UserError"
  },
  "implementsNode": false
};

var DiscountCodeApplication = {
  "name": "DiscountCodeApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "applicable": "Boolean",
    "code": "String"
  },
  "implementsNode": false
};

var ManualDiscountApplication = {
  "name": "ManualDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String",
    "title": "String"
  },
  "implementsNode": false
};

var ScriptDiscountApplication = {
  "name": "ScriptDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "description": "String"
  },
  "implementsNode": false
};

var AutomaticDiscountApplication = {
  "name": "AutomaticDiscountApplication",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "title": "String"
  },
  "implementsNode": false
};

var Types = {
  types: {}
};
Types.types["Boolean"] = Boolean$1;
Types.types["String"] = String$1;
Types.types["QueryRoot"] = QueryRoot;
Types.types["Node"] = Node;
Types.types["ID"] = ID;
Types.types["DateTime"] = DateTime;
Types.types["MailingAddress"] = MailingAddress;
Types.types["Float"] = Float;
Types.types["CountryCode"] = CountryCode;
Types.types["PageInfo"] = PageInfo;
Types.types["Int"] = Int;
Types.types["Order"] = Order;
Types.types["Money"] = Money;
Types.types["MoneyV2"] = MoneyV2;
Types.types["Decimal"] = Decimal;
Types.types["CurrencyCode"] = CurrencyCode;
Types.types["URL"] = URL;
Types.types["DiscountAllocation"] = DiscountAllocation;
Types.types["DiscountApplication"] = DiscountApplication;
Types.types["DiscountApplicationAllocationMethod"] = DiscountApplicationAllocationMethod;
Types.types["DiscountApplicationTargetSelection"] = DiscountApplicationTargetSelection;
Types.types["DiscountApplicationTargetType"] = DiscountApplicationTargetType;
Types.types["PricingValue"] = PricingValue;
Types.types["PricingPercentageValue"] = PricingPercentageValue;
Types.types["OrderLineItemConnection"] = OrderLineItemConnection;
Types.types["OrderLineItemEdge"] = OrderLineItemEdge;
Types.types["OrderLineItem"] = OrderLineItem;
Types.types["ProductVariant"] = ProductVariant;
Types.types["Product"] = Product;
Types.types["CollectionConnection"] = CollectionConnection;
Types.types["CollectionEdge"] = CollectionEdge;
Types.types["Collection"] = Collection;
Types.types["HTML"] = HTML;
Types.types["Image"] = Image;
Types.types["ProductConnection"] = ProductConnection;
Types.types["ProductEdge"] = ProductEdge;
Types.types["ImageConnection"] = ImageConnection;
Types.types["ImageEdge"] = ImageEdge;
Types.types["ProductOption"] = ProductOption;
Types.types["ProductVariantConnection"] = ProductVariantConnection;
Types.types["ProductVariantEdge"] = ProductVariantEdge;
Types.types["ProductVariantPricePairConnection"] = ProductVariantPricePairConnection;
Types.types["ProductVariantPricePairEdge"] = ProductVariantPricePairEdge;
Types.types["ProductVariantPricePair"] = ProductVariantPricePair;
Types.types["SelectedOption"] = SelectedOption;
Types.types["UnitPriceMeasurement"] = UnitPriceMeasurement;
Types.types["UnitPriceMeasurementMeasuredType"] = UnitPriceMeasurementMeasuredType;
Types.types["UnitPriceMeasurementMeasuredUnit"] = UnitPriceMeasurementMeasuredUnit;
Types.types["Attribute"] = Attribute;
Types.types["DiscountApplicationConnection"] = DiscountApplicationConnection;
Types.types["DiscountApplicationEdge"] = DiscountApplicationEdge;
Types.types["Checkout"] = Checkout;
Types.types["CheckoutLineItemConnection"] = CheckoutLineItemConnection;
Types.types["CheckoutLineItemEdge"] = CheckoutLineItemEdge;
Types.types["CheckoutLineItem"] = CheckoutLineItem;
Types.types["ShippingRate"] = ShippingRate;
Types.types["AppliedGiftCard"] = AppliedGiftCard;
Types.types["Shop"] = Shop;
Types.types["PaymentSettings"] = PaymentSettings;
Types.types["Domain"] = Domain;
Types.types["ShopPolicy"] = ShopPolicy;
Types.types["Mutation"] = Mutation$1;
Types.types["UserError"] = UserError;
Types.types["CheckoutUserError"] = CheckoutUserError;
Types.types["CheckoutErrorCode"] = CheckoutErrorCode;
Types.types["CheckoutAttributesUpdateV2Payload"] = CheckoutAttributesUpdateV2Payload;
Types.types["CheckoutDiscountCodeApplyV2Payload"] = CheckoutDiscountCodeApplyV2Payload;
Types.types["CheckoutCreatePayload"] = CheckoutCreatePayload;
Types.types["CheckoutEmailUpdateV2Payload"] = CheckoutEmailUpdateV2Payload;
Types.types["CheckoutDiscountCodeRemovePayload"] = CheckoutDiscountCodeRemovePayload;
Types.types["CheckoutGiftCardsAppendPayload"] = CheckoutGiftCardsAppendPayload;
Types.types["CheckoutGiftCardRemoveV2Payload"] = CheckoutGiftCardRemoveV2Payload;
Types.types["CheckoutLineItemsAddPayload"] = CheckoutLineItemsAddPayload;
Types.types["CheckoutLineItemsRemovePayload"] = CheckoutLineItemsRemovePayload;
Types.types["CheckoutLineItemsUpdatePayload"] = CheckoutLineItemsUpdatePayload;
Types.types["CheckoutLineItemsReplacePayload"] = CheckoutLineItemsReplacePayload;
Types.types["CheckoutShippingAddressUpdateV2Payload"] = CheckoutShippingAddressUpdateV2Payload;
Types.types["DiscountCodeApplication"] = DiscountCodeApplication;
Types.types["ManualDiscountApplication"] = ManualDiscountApplication;
Types.types["ScriptDiscountApplication"] = ScriptDiscountApplication;
Types.types["AutomaticDiscountApplication"] = AutomaticDiscountApplication;
Types.queryType = "QueryRoot";
Types.mutationType = "Mutation";
Types.subscriptionType = null;

function recursivelyFreezeObject(structure) {
  Object.getOwnPropertyNames(structure).forEach(function (key) {
    var value = structure[key];
    if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
      recursivelyFreezeObject(value);
    }
  });
  Object.freeze(structure);
  return structure;
}

var types = recursivelyFreezeObject(Types);

// GraphQL
/**
 * The JS Buy SDK Client.
 * @class
 *
 * @property {ProductResource} product The property under which product fetching methods live.
 * @property {CollectionResource} collection The property under which collection fetching methods live.
 * @property {ShopResource} shop The property under which shop fetching methods live.
 * @property {CheckoutResource} checkout The property under which shop fetching and mutating methods live.
 * @property {ImageResource} image The property under which image helper methods live.
 */

var Client = function () {
  createClass$1(Client, null, [{
    key: 'buildClient',


    /**
     * Primary entry point for building a new Client.
     */
    value: function buildClient(config, fetchFunction) {
      var newConfig = new Config(config);
      var client = new Client(newConfig, Client$2, fetchFunction);

      client.config = newConfig;

      return client;
    }

    /**
     * @constructs Client
     * @param {Config} config An instance of {@link Config} used to configure the Client.
     */

  }]);

  function Client(config) {
    var GraphQLClientClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Client$2;
    var fetchFunction = arguments[2];
    classCallCheck$1(this, Client);

    var url = 'https://' + config.domain + '/api/' + config.apiVersion + '/graphql';

    var headers = {
      'X-SDK-Variant': 'javascript',
      'X-SDK-Version': version,
      'X-Shopify-Storefront-Access-Token': config.storefrontAccessToken
    };

    if (config.source) {
      headers['X-SDK-Variant-Source'] = config.source;
    }

    var languageHeader = config.language ? config.language : '*';

    headers['Accept-Language'] = languageHeader;

    if (fetchFunction) {
      headers['Content-Type'] = 'application/json';
      headers.Accept = 'application/json';

      this.graphQLClient = new GraphQLClientClass(types, {
        fetcher: function fetcher(graphQLParams) {
          return fetchFunction(url, {
            body: JSON.stringify(graphQLParams),
            method: 'POST',
            mode: 'cors',
            headers: headers
          }).then(function (response) {
            return response.json();
          });
        }
      });
    } else {
      this.graphQLClient = new GraphQLClientClass(types, {
        url: url,
        fetcherOptions: { headers: headers }
      });
    }

    this.product = new ProductResource(this.graphQLClient);
    this.collection = new CollectionResource(this.graphQLClient);
    this.shop = new ShopResource(this.graphQLClient);
    this.checkout = new CheckoutResource(this.graphQLClient);
    this.image = new ImageResource(this.graphQLClient);
  }

  /**
   * Fetches the next page of models
   *
   * @example
   * client.fetchNextPage(products).then((nextProducts) => {
   *   // Do something with the products
   * });
   *
   * @param {models} [Array] The paginated set to fetch the next page of
   * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the type provided.
   */


  createClass$1(Client, [{
    key: 'fetchNextPage',
    value: function fetchNextPage(models) {
      return this.graphQLClient.fetchNextPage(models);
    }
  }]);
  return Client;
}();

module.exports = Client;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shopify-buy */ "./node_modules/shopify-buy/index.js");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\obafa\\Documents\\chef-femi\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

var client = shopify_buy__WEBPACK_IMPORTED_MODULE_13___default.a.buildClient({
  storefrontAccessToken: '26853603f3b67fead6e3bcf3ee602758',
  domain: 'a-very-small-store.myshopify.com'
}); // store.dispatch({type: 'ADD_CLIENT', payload: client});
// client.product.fetchAll().then(console.log());

client.product.fetchAll().then(function (res) {
  _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"].dispatch({
    type: 'ADD_PRODUCTS',
    payload: res
  });
});

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
        store: store,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 4
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var Component, ctx, pageProps;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Component = _ref.Component, ctx = _ref.ctx;

              if (!Component.getInitialProps) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

            case 4:
              _context.t0 = _context.sent;
              _context.next = 8;
              break;

            case 7:
              _context.t0 = {};

            case 8:
              pageProps = _context.t0;
              return _context.abrupt("return", {
                pageProps: pageProps
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

var makeStore = function makeStore() {
  return _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"];
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__["default"])(makeStore)(MyApp));

/***/ }),

/***/ "./redux/reducers/cartsReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/cartsReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartsReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cartsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    cart: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_CART':
      return _objectSpread({}, state, {
        cart: action.payload
      });

    case 'ADD_TO_CART':
      return _objectSpread({}, state, {
        cart: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cart), [action.payload])
      });

    case 'DELETE_FROM_CART':
      // const items = state.posts.filter(product => )
      return _objectSpread({}, state, {
        cart: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cart), [action.payload])
      });

    default:
      return state;
  }
}
;

/***/ }),

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
    products: ['this is a product', 'this too']
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_PRODUCTS':
      return _objectSpread({}, state, {
        products: action.payload
      });

    case 'PRODUCT_IS_1':
      return _objectSpread({}, state, {
        products: [1]
      });

    default:
      return state;
  }
}
;

/***/ }),

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

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/rootReducer */ "./redux/reducers/rootReducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");




var windowExist = true;
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! C:\Users\obafa\Documents\chef-femi\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map