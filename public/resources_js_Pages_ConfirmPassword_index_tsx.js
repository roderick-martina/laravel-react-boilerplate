(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ConfirmPassword_index_tsx"],{

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

var ConfirmPassword = function ConfirmPassword() {
  var handleSubmit = function handleSubmit() {// '/user/confirm-password'
  };

  var handleOnChange = function handleOnChange(e) {};

  return React.createElement(Layout_1["default"], null, React.createElement("div", {
    className: "w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  }, React.createElement("div", {
    className: "max-w-md w-full"
  }, React.createElement("div", null, React.createElement("h2", {
    className: "mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
  }, "Password Confirmation")), React.createElement("form", {
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
    type: "text",
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

  var value = react_1["default"].useMemo(function () {
    return {
      mobileNavOpen: mobileNavOpen,
      handleMobileNavToggle: handleMobileNavToggle
    };
  }, [mobileNavOpen]);
  return react_1["default"].createElement("div", {
    className: "min-h-screen flex bg-gray-50 font-sans"
  }, react_1["default"].createElement(AppContext_1.AppContextProvider, {
    value: value
  }, children));
};

exports.default = Layout;

/***/ })

}]);