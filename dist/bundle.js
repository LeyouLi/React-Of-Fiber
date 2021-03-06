/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var root = document.getElementById('root');
var jsx = /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Hello React"), /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Hello Fiber")); // render(jsx, root); 
// setTimeout(() => {
//   const jsx = (
//     <div>
//       <div>Text Change</div>
//       <p>Hello Fiber</p>
//     </div>
//   );
//   render(jsx, root);
// }, 2000);

var Greating = /*#__PURE__*/function (_Component) {
  _inherits(Greating, _Component);

  var _super = _createSuper(Greating);

  function Greating(props) {
    var _this;

    _classCallCheck(this, Greating);

    _this = _super.call(this, props);
    _this.state = {
      name: '123'
    };
    return _this;
  }

  _createClass(Greating, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, this.props.title, " Class Component Test ", this.state.name, /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
        onclick: function onclick() {
          return _this2.setState({
            name: '456'
          });
        }
      }, "\u5207\u6362 Name"));
    }
  }]);

  return Greating;
}(_react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Object(_react__WEBPACK_IMPORTED_MODULE_0__["render"])( /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Greating, {
  title: "test"
}), root);

function FnComponent(props) {
  return /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, props.title, " Class FnComponent Test");
} // render(<FnComponent title='test'/>, root);

/***/ }),

/***/ "./src/react/Component/index.js":
/*!**************************************!*\
  !*** ./src/react/Component/index.js ***!
  \**************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _reconciliation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reconciliation */ "./src/react/reconciliation/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Component = /*#__PURE__*/function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = props;
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(partialState) {
      Object(_reconciliation__WEBPACK_IMPORTED_MODULE_0__["scheduleUpdate"])(this, partialState);
    }
  }]);

  return Component;
}();

/***/ }),

/***/ "./src/react/DOM/createDomElement.js":
/*!*******************************************!*\
  !*** ./src/react/DOM/createDomElement.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDomElement; });
/* harmony import */ var _updataNodeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updataNodeElement */ "./src/react/DOM/updataNodeElement.js");

function createDomElement(virtualDOM) {
  // ???????????? virtualDOM ???????????????DOM
  var newElement = null;

  if (virtualDOM.type == 'text') {
    // ????????????
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // ????????????
    newElement = document.createElement(virtualDOM.type); // ?????????????????????

    Object(_updataNodeElement__WEBPACK_IMPORTED_MODULE_0__["default"])(newElement, virtualDOM);
  }

  return newElement;
}

/***/ }),

/***/ "./src/react/DOM/index.js":
/*!********************************!*\
  !*** ./src/react/DOM/index.js ***!
  \********************************/
/*! exports provided: createDomElement, updataNodeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomElement */ "./src/react/DOM/createDomElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDomElement", function() { return _createDomElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _updataNodeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updataNodeElement */ "./src/react/DOM/updataNodeElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updataNodeElement", function() { return _updataNodeElement__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/react/DOM/updataNodeElement.js":
/*!********************************************!*\
  !*** ./src/react/DOM/updataNodeElement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updataNodeElement; });
function updataNodeElement(newElement) {
  var virtualDOM = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var oldVirtualDOM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // ?????????????????????????????????
  var newProps = virtualDOM.props || {};
  var oldProps = oldVirtualDOM.props || {}; // ???????????????????????????

  if (virtualDOM.type === 'text') {
    if (newProps.textContent !== oldProps.textContent) {
      if (virtualDOM.parent.type !== oldVirtualDOM.parent.type) {
        virtualDOM.parent.stateNode.appendChild(document.createTextNode(newProps.textContent));
      } else {
        virtualDOM.parent.stateNode.replaceChild(document.createTextNode(newProps.textContent), oldVirtualDOM.stateNode);
      }
    }

    return;
  } // ??????????????????


  Object.keys(newProps).forEach(function (propsName) {
    // ???????????????
    var newPropsvalue = newProps[propsName];
    var oldPropsvalue = oldProps[propsName]; // ??????????????????????????????

    if (newPropsvalue !== oldPropsvalue) {
      // ??????????????????????????? onClick -> click
      if (propsName.slice(0, 2) === 'on') {
        // ?????????????????????????????????????????????
        var eventName = propsName.toLocaleLowerCase().slice(2);
        newElement.addEventListener(eventName, newPropsvalue); // ???????????????????????????????????????

        if (oldPropsvalue) {
          newElement.removeEventListener(eventName, oldPropsvalue);
        }
      } else if (propsName === 'value' || propsName === 'cheched') {
        newElement[propsName] = newPropsvalue;
      } else if (propsName !== 'children') {
        // ???????????????????????????class??????
        var propsType = propsName === 'className' ? 'class' : propsName;
        newElement.setAttribute(propsType, newPropsvalue);
      }
    }
  }); // ???????????????????????????

  Object.keys(oldProps).forEach(function (propsName) {
    var newPropsValue = newProps[propsName];
    var oldPropsValue = oldProps[propsName]; // ?????????????????????

    if (!newPropsValue) {
      // ?????????????????????
      if (propsName.slice(0, 2) === 'on') {
        var eventName = propsName.toLocaleLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (propsName !== 'children') {
        // ?????????????????????children?????????
        newPropsValue.removeAttribute(propsName);
      }
    }
  });
}

/***/ }),

/***/ "./src/react/Misc/Arrified/index.js":
/*!******************************************!*\
  !*** ./src/react/Misc/Arrified/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var arrified = function arrified(arg) {
  return Array.isArray(arg) ? arg : [arg];
};

/* harmony default export */ __webpack_exports__["default"] = (arrified);

/***/ }),

/***/ "./src/react/Misc/CreateReactInstance/index.js":
/*!*****************************************************!*\
  !*** ./src/react/Misc/CreateReactInstance/index.js ***!
  \*****************************************************/
/*! exports provided: createReactInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactInstance", function() { return createReactInstance; });
var createReactInstance = function createReactInstance(fiber) {
  var instance = null;

  if (fiber.tag === 'class_component') {
    return new fiber.type(fiber.props); // ??????????????????????????????
  } else {
    instance = fiber.type; // ?????????????????????????????????
  }

  return instance;
};

/***/ }),

/***/ "./src/react/Misc/CreateStateNode/index.js":
/*!*************************************************!*\
  !*** ./src/react/Misc/CreateStateNode/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/react/DOM/index.js");
/* harmony import */ var _CreateReactInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CreateReactInstance */ "./src/react/Misc/CreateReactInstance/index.js");



var createStateNode = function createStateNode(fiber) {
  // ?????????????????? Dom ??????
  if (fiber.tag === 'host_component') {
    return Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["createDomElement"])(fiber);
  } else {
    return Object(_CreateReactInstance__WEBPACK_IMPORTED_MODULE_1__["createReactInstance"])(fiber);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (createStateNode);

/***/ }),

/***/ "./src/react/Misc/CreateTaskQueue/index.js":
/*!*************************************************!*\
  !*** ./src/react/Misc/CreateTaskQueue/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// ??????????????????
var createTaskQueue = function createTaskQueue() {
  var taskQueue = []; // ????????????

  return {
    /**
     * ??????????????????????????????
     */
    push: function push(item) {
      return taskQueue.push(item);
    },

    /**
     * ??????????????????????????????
     */
    pop: function pop() {
      return taskQueue.shift();
    },

    /**
     * ???????????????????????????????????????
     */
    isEmpty: function isEmpty() {
      return taskQueue.length === 0;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createTaskQueue);

/***/ }),

/***/ "./src/react/Misc/GetRoot/index.js":
/*!*****************************************!*\
  !*** ./src/react/Misc/GetRoot/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getRoot = function getRoot(instance) {
  var fiber = instance.__fiber;

  while (fiber.parent) {
    fiber = fiber.parent;
  }

  return fiber;
};

/* harmony default export */ __webpack_exports__["default"] = (getRoot);

/***/ }),

/***/ "./src/react/Misc/GetTag/index.js":
/*!****************************************!*\
  !*** ./src/react/Misc/GetTag/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Component */ "./src/react/Component/index.js");


var getTag = function getTag(virtualDOM) {
  // ??????????????????????????????
  if (typeof virtualDOM.type === 'string') {
    return 'host_component';
  } else if (Object.getPrototypeOf(virtualDOM.type) === _Component__WEBPACK_IMPORTED_MODULE_0__["Component"]) {
    // ????????????????????????
    return 'class_component';
  } else {
    return 'function_component';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getTag);

/***/ }),

/***/ "./src/react/Misc/index.js":
/*!*********************************!*\
  !*** ./src/react/Misc/index.js ***!
  \*********************************/
/*! exports provided: createTaskQueue, arrified, createStateNode, getTag, getRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateTaskQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTaskQueue */ "./src/react/Misc/CreateTaskQueue/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTaskQueue", function() { return _CreateTaskQueue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Arrified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arrified */ "./src/react/Misc/Arrified/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrified", function() { return _Arrified__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CreateStateNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateStateNode */ "./src/react/Misc/CreateStateNode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateNode", function() { return _CreateStateNode__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _GetTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetTag */ "./src/react/Misc/GetTag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTag", function() { return _GetTag__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _GetRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetRoot */ "./src/react/Misc/GetRoot/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRoot", function() { return _GetRoot__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/**
 * ????????????
 */
 // ????????????????????????


 // ?????? stateNode




/***/ }),

/***/ "./src/react/createElement/index.js":
/*!******************************************!*\
  !*** ./src/react/createElement/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
function createElement(type, props) {
  var _ref;

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // ?????? virtual DOM ??????
  var childrenEles = (_ref = []).concat.apply(_ref, children).reduce(function (result, child) {
    if (child !== null && child !== true && child !== false) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement("text", {
          textContent: child
        }));
      }
    }

    return result;
  }, []);

  return {
    type: type,
    props: Object.assign({
      children: childrenEles
    }, props)
  };
}

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/*! exports provided: render, Component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/react/createElement/index.js");
/* harmony import */ var _reconciliation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reconciliation */ "./src/react/reconciliation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _reconciliation__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/react/Component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _Component__WEBPACK_IMPORTED_MODULE_2__["Component"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  createElement: _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/react/reconciliation/index.js":
/*!*******************************************!*\
  !*** ./src/react/reconciliation/index.js ***!
  \*******************************************/
/*! exports provided: render, scheduleUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleUpdate", function() { return scheduleUpdate; });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/react/DOM/index.js");
/* harmony import */ var _Misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc */ "./src/react/Misc/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** 
 * ??????Fiber??????
 * 2021-07-06 21:40
 */


var taskQueue = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createTaskQueue"])();
var subTask = null; // ?????????????????????

var pendingCommit = null; // ??????????????????Fiber[]
// ???fiber[] ?????????????????? DOM ??????

var commitAllWork = function commitAllWork(fiber) {
  // ?????? effets ?????? ?????? DOM ?????????
  fiber.effects.forEach(function (item) {
    if (item.tag === 'class_component') {
      item.stateNode.__fiber = item;
    }

    if (item.effectTag === 'delete') {
      item.parent.stateNode.removeChild(item.stateNode);
    } else if (item.effectTag === 'update') {
      // ??????
      if (item.type === item.alternate.type) {
        // ????????????
        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["updataNodeElement"])(item.stateNode, item, item.alternate);
      } else {
        // ????????????
        item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode);
      }
    } else if (item.effectTag === 'placement') {
      // ???????????????????????????
      var _fiber = item; // ????????????????????????????????????

      var parentFiber = item.parent; // ?????????????????????????????????????????????
      // ?????????????????????????????????????????????DOM??????

      while (parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
        parentFiber = parentFiber.parent;
      } //??????????????????????????????????????????????????????????????????????????????


      if (_fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(_fiber.stateNode);
      }
    }
  }); // ???????????? fiber ??????

  fiber.stateNode.__rootFiberContainer = fiber;
}; // ?????????????????????????????????????????????


var getFirstTask = function getFirstTask() {
  // ??????????????????????????????
  var task = taskQueue.pop();

  if (task.from === 'class_component') {
    var root = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["getRoot"])(task.instance);
    task.instance.__fiber.partialState = task.partialState;
    return {
      props: root.props,
      stateNode: root.stateNode,
      tag: 'host_root',
      effects: [],
      child: null,
      alternate: root
    };
  }
  /** 
   * ???????????????????????? fiber ??????
   */


  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
    alternate: task.dom.__rootFiberContainer
  };
}; // ?????? fiber ??????


var reconcileChildren = function reconcileChildren(fiber, children) {
  /**
   * children ????????????????????????????????????
   * ???????????????????????????????????????
  */
  var arrifiedChildren = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["arrified"])(children);
  var index = 0; // ?????? children ???????????????

  var numberOfElements = arrifiedChildren.length; // children ????????????????????????

  var element = null; // ????????????????????????????????????????????? virtualDOM ??????

  var newFiber = null; // ?????? fiber ??????

  var prevFiber = null; // ?????????????????????

  var alternate = null;

  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child; // ?????? fiber ??????
  }

  while (index < numberOfElements || alternate) {
    element = arrifiedChildren[index]; // ??????????????? virtualDOM ??????

    if (!element && alternate) {
      // ????????????
      alternate.effectTag = 'delete';
      fiber.effects.push(alternate);
    }

    if (element && alternate) {
      // ??????????????????
      newFiber = {
        type: element.type,
        props: element.props,
        tag: Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["getTag"])(element),
        effects: [],
        effectTag: 'update',
        parent: fiber,
        alternate: alternate
      };

      if (element.type === alternate.type) {
        // ?????????????????????????????????????????????????????????
        newFiber.stateNode = alternate.stateNode;
      } else {
        // ???????????????????????????????????????????????????fiber?????????????????? DOM ???????????????????????????
        newFiber.stateNode = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createStateNode"])(newFiber);
      }
    } else if (element && !alternate) {
      // ????????????????????????
      newFiber = {
        type: element.type,
        props: element.props,
        tag: Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["getTag"])(element),
        effects: [],
        effectTag: 'placement',
        parent: fiber
      }; // ???fiber?????????????????? DOM ???????????????????????????

      newFiber.stateNode = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createStateNode"])(newFiber);
    }

    if (index == 0) {
      // ????????????????????????????????????
      fiber.child = newFiber;
    } else if (element) {
      // ????????????????????????????????????
      prevFiber.sibling = newFiber;
    }

    if (alternate && alternate.sibling) {
      alternate = alternate.sibling;
    } else {
      alternate = null;
    } // ????????????????????????


    prevFiber = newFiber;
    index++;
  }
}; // ???????????????????????????????????????


var executeTask = function executeTask(fiber) {
  // ????????????fiber??????
  if (fiber.tag === 'class_component') {
    if (fiber.stateNode.__fiber && fiber.stateNode.__fiber.partialState) {
      fiber.stateNode.state = _objectSpread(_objectSpread({}, fiber.stateNode.state), fiber.stateNode.__fiber.partialState);
    }

    reconcileChildren(fiber, fiber.stateNode.render());
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props));
  } else {
    reconcileChildren(fiber, fiber.props.children);
  } // ???????????????????????????fiber??????
  // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


  if (fiber.child) {
    return fiber.child;
  } // ?????????????????? ???????????? ?????????????????????
  // ????????????????????? ??????????????? ????????????????????????


  var currentExecutelyFiber = fiber;

  while (currentExecutelyFiber.parent) {
    // ??????????????? effects
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(currentExecutelyFiber.effects.concat([currentExecutelyFiber]));

    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling;
    }

    currentExecutelyFiber = currentExecutelyFiber.parent;
  }

  pendingCommit = currentExecutelyFiber;
}; // ?????????????????????


var workLoop = function workLoop(deadline) {
  // ????????????????????????????????????????????????
  if (!subTask) {
    subTask = getFirstTask();
  } // ????????????????????????????????????????????????


  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
}; // ?????????????????????????????????


var performTask = function performTask(deadline) {
  // ????????????
  workLoop(deadline); // ???????????????????????? || ?????????????????????????????????????????????

  if (subTask || !taskQueue.isEmpty()) {
    // ????????????????????????????????????
    requestIdleCallback(performTask);
  }
};

var render = function render(element, dom) {
  /**
   * 1. ??????????????????????????????  ??????????????????virtualDOM ?????? Fiber ?????????
   * 2. ????????????????????????????????????
   */
  taskQueue.push({
    dom: dom,
    props: {
      children: element
    }
  });
  requestIdleCallback(performTask);
};
var scheduleUpdate = function scheduleUpdate(instance, partialState) {
  taskQueue.push({
    from: 'class_component',
    instance: instance,
    partialState: partialState
  });
  requestIdleCallback(performTask);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map