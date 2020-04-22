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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  function Verify(email, password) {
    var usernames = Object.keys(users);

    if (usernames.includes(email)) {
      if (users[email] == password) {
        return true;
      }
    }

    return false;
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
    onSubmit: function onSubmit(values, _ref) {
      var actions = _ref.actions;
      actions.setSubmitting(false);
      actions.resetForm(); // () => dispatch({type: 'LOG_IN', username: values.email, password: values.password})

      setTimeout(function () {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting;
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 61,
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
        lineNumber: 68,
        columnNumber: 7
      }
    }), __jsx("button", {
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, "Log In"));
  })));
}

/***/ })

})
//# sourceMappingURL=login.js.b61bd424523174cf85d8.hot-update.js.map