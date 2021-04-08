(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ConfirmPassword_index_tsx"],{

/***/ "./resources/js/Components/ErrorBanner/index.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/Components/ErrorBanner/index.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ErrorBanner = function ErrorBanner(_a) {
  var title = _a.title,
      errors = _a.errors,
      _b = _a.withoutErrorBag,
      withoutErrorBag = _b === void 0 ? false : _b;
  var hasErrors = Object.keys(errors).length > 0;
  var resolvedErrors = [];

  if (hasErrors) {
    if (withoutErrorBag) {
      Object.values(errors).forEach(function (error) {
        return resolvedErrors.push(error);
      });
    } else {
      var errorKeys = Object.keys(errors);
      errorKeys.forEach(function (errorKey) {
        Object.values(errors[errorKey]).forEach(function (error) {
          return resolvedErrors.push(error);
        });
      });
    }
  }

  if (hasErrors) {
    var tmpErrors = Object.values(errors);
    return react_1["default"].createElement("div", {
      className: "rounded-md bg-red-50 p-4 my-4"
    }, react_1["default"].createElement("div", {
      className: "flex"
    }, react_1["default"].createElement("div", {
      className: "flex-shrink-0"
    }, react_1["default"].createElement("svg", {
      className: "h-5 w-5 text-red-400",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }, react_1["default"].createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
      clipRule: "evenodd"
    }))), react_1["default"].createElement("div", {
      className: "ml-3"
    }, react_1["default"].createElement("h3", {
      className: "text-sm font-medium text-red-800"
    }, title), react_1["default"].createElement("div", {
      className: "mt-2 text-sm text-red-700"
    }, react_1["default"].createElement("ul", {
      className: "list-disc pl-5 space-y-1"
    }, resolvedErrors.map(function (error, index) {
      return react_1["default"].createElement("li", {
        key: error + "-" + index
      }, error);
    }))))));
  }

  return null;
};

exports.default = ErrorBanner;

/***/ }),

/***/ "./resources/js/Hooks/AppContext.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Hooks/AppContext.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useAppContext = exports.AppContextProvider = exports.AppContext = void 0;

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var defaultValue = null;
exports.AppContext = React.createContext(defaultValue);

var AppContextProvider = function AppContextProvider(_a) {
  var children = _a.children,
      value = _a.value;
  return React.createElement(exports.AppContext.Provider, {
    value: value
  }, children);
};

exports.AppContextProvider = AppContextProvider;

var useAppContext = function useAppContext() {
  var context = React.useContext(exports.AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }

  return context;
};

exports.useAppContext = useAppContext;
exports.default = exports.AppContext;

/***/ }),

/***/ "./resources/js/Pages/ConfirmPassword/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/Pages/ConfirmPassword/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Layout_1 = __importDefault(__webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.tsx"));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var ErrorBanner_1 = __importDefault(__webpack_require__(/*! @/Components/ErrorBanner */ "./resources/js/Components/ErrorBanner/index.tsx"));

var ConfirmPassword = function ConfirmPassword(_a) {
  var errors = _a.errors;

  var _b = React.useState(''),
      password = _b[0],
      setPassword = _b[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    inertia_1.Inertia.post('/user/confirm-password', {
      password: password
    });
  };

  var handleOnChange = function handleOnChange(e) {
    setPassword(e.target.value);
  };

  return React.createElement(Layout_1["default"], null, React.createElement("div", {
    className: "w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  }, React.createElement("div", {
    className: "max-w-md w-full"
  }, React.createElement("div", null, React.createElement("h2", {
    className: "mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
  }, "Password Confirmation")), React.createElement(ErrorBanner_1["default"], {
    title: "There were errors while confirming your password",
    errors: errors,
    withoutErrorBag: true
  }), React.createElement("form", {
    onSubmit: handleSubmit,
    className: "mt-8"
  }, React.createElement("div", {
    className: "rounded-md shadow-sm"
  }, React.createElement("div", null, React.createElement("label", {
    htmlFor: "recoverCode",
    className: "block text-sm font-medium text-gray-700"
  }, "For your security, please confirm your password to continue."), React.createElement("div", {
    className: "mt-3"
  }, React.createElement("input", {
    onChange: handleOnChange,
    type: "password",
    name: "password",
    id: "password",
    className: "form-input",
    placeholder: "password"
  })))), React.createElement("div", {
    className: "mt-6"
  }, React.createElement("button", {
    type: "submit",
    className: "btn w-full "
  }, "Submit"))))));
};

exports.default = ConfirmPassword;

/***/ }),

/***/ "./resources/js/Shared/Layout.tsx":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AppContext_1 = __webpack_require__(/*! @/Hooks/AppContext */ "./resources/js/Hooks/AppContext.tsx");

var Layout = function Layout(_a) {
  var children = _a.children;

  var _b = react_1["default"].useState(false),
      mobileNavOpen = _b[0],
      setMobileNavOpen = _b[1];

  var handleMobileNavToggle = function handleMobileNavToggle(event) {
    setMobileNavOpen(!mobileNavOpen);
  };

  var _c = react_1["default"].useState(null),
      notificationState = _c[0],
      setNotificationState = _c[1];

  var _d = react_1["default"].useState(false),
      modalActive = _d[0],
      setModalActive = _d[1];

  var notify = function notify(data) {
    setNotificationState(data);
    setModalActive(true);
    setTimeout(function () {
      setModalActive(false);
    }, 3000);
  };

  var value = react_1["default"].useMemo(function () {
    return {
      mobileNavOpen: mobileNavOpen,
      handleMobileNavToggle: handleMobileNavToggle,
      notificationState: notificationState,
      notify: notify,
      modalActive: modalActive,
      setModalActive: setModalActive
    };
  }, [mobileNavOpen, notificationState, modalActive]);
  return react_1["default"].createElement("div", {
    className: "min-h-screen flex bg-gray-50 font-sans"
  }, react_1["default"].createElement(AppContext_1.AppContextProvider, {
    value: value
  }, children));
};

exports.default = Layout;

/***/ })

}]);