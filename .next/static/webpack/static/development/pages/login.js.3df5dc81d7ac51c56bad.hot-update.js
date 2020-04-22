webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "C:\\Users\\obafa\\Documents\\chef-femi\\pages\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Login() {
  var _this = this;

  var users = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.users.users;
  });

  function Verify(email, password) {
    var usernames = Object.keys(users);

    for (var i in users) {}

    if (usernames.includes(email)) {
      if (users[email] == password) {
        console.log(users[email]);
        return true;
      }
    }

    return false;
  }

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      email: '',
      password: ''
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!values.password) {
        errors.password = 'Required';
      } else if (!Verify(values.email, values.password)) {
        errors.verify = "Not a user";
      }

      console.log(errors);
      return errors;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, function (_ref) {
    var values = _ref.values,
        errors = _ref.errors,
        touched = _ref.touched,
        handleChange = _ref.handleChange,
        handleBlur = _ref.handleBlur,
        handleSubmit = _ref.handleSubmit,
        isSubmitting = _ref.isSubmitting;
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 6
      }
    }, __jsx("input", {
      type: "email",
      name: "email",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.email,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }), __jsx("input", {
      type: "password",
      name: "password",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.password,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }), __jsx("button", {
      type: "submit",
      onSubmit: function onSubmit() {
        return dispatch({
          type: 'LOG_IN',
          payload: [values.email, values.password]
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, "Log In"));
  })));
}

/***/ })

})
//# sourceMappingURL=login.js.3df5dc81d7ac51c56bad.hot-update.js.map