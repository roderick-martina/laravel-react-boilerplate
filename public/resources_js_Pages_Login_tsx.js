(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Login_tsx"],{

/***/ "./resources/js/Pages/Login.tsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.tsx ***!
  \**************************************/
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

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Login = function Login() {
  return React.createElement("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  }, React.createElement("div", {
    className: "max-w-md w-full space-y-8"
  }, React.createElement("div", null, React.createElement("h2", {
    className: "mt-6 text-center text-3xl font-extrabold text-gray-900"
  }, "Sign in to your account")), React.createElement("form", {
    className: "mt-8 space-y-6",
    action: "#",
    method: "POST"
  }, React.createElement("input", {
    type: "hidden",
    name: "remember",
    value: "true"
  }), React.createElement("div", {
    className: "rounded-md shadow-sm -space-y-px"
  }, React.createElement("div", null, React.createElement("label", {
    htmlFor: "email-address",
    className: "sr-only"
  }, "Email address"), React.createElement("input", {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    placeholder: "Email address"
  })), React.createElement("div", null, React.createElement("label", {
    htmlFor: "password",
    className: "sr-only"
  }, "Password"), React.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    placeholder: "Password"
  }))), React.createElement("div", {
    className: "flex items-center justify-between"
  }, React.createElement("div", {
    className: "flex items-center"
  }, React.createElement("input", {
    id: "remember_me",
    name: "remember_me",
    type: "checkbox",
    className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
  }), React.createElement("label", {
    htmlFor: "remember_me",
    className: "ml-2 block text-sm text-gray-900"
  }, "Remember me")), React.createElement("div", {
    className: "text-sm"
  }, React.createElement("a", {
    href: "/",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Forgot your password?"))), React.createElement("div", null, React.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, React.createElement("span", {
    className: "absolute left-0 inset-y-0 flex items-center pl-3"
  }, React.createElement("svg", {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
    "data-todo-x-description": "Heroicon name: lock-closed",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }))), "Sign in")))));
};

exports.default = Login;

/***/ })

}]);