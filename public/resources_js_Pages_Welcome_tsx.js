(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Welcome_tsx"],{

/***/ "./resources/js/Pages/Welcome.tsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Welcome.tsx ***!
  \****************************************/
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

var Welcome = function Welcome() {
  return React.createElement("div", {
    className: "flex flex-col"
  }, React.createElement("h1", null, "hello"), React.createElement("p", null, "dit is een test"));
};

Welcome.layout = function (page) {
  return React.createElement(Layout_1["default"], {
    children: page
  });
};

exports.default = Welcome;

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

var Layout = function Layout(_a) {
  var children = _a.children;
  return react_1["default"].createElement("div", {
    className: "h-screen flex-col overflow-hidden bg-cool-gray-100 font-sans"
  }, children);
};

exports.default = Layout;

/***/ })

}]);