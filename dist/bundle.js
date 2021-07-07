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
  // 渲染普通 virtualDOM 对象为真实DOM
  var newElement = null;

  if (virtualDOM.type == 'text') {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type); // 为元素添加属性

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
  // 获取节点的对应属性对象
  var newProps = virtualDOM.props || {};
  var oldProps = oldVirtualDOM.props || {}; // 判断是否是文本节点

  if (virtualDOM.type === 'text') {
    if (newProps.textContent !== oldProps.textContent) {
      if (virtualDOM.parent.type !== oldVirtualDOM.parent.type) {
        virtualDOM.parent.stateNode.appendChild(document.createTextNode(newProps.textContent));
      } else {
        virtualDOM.parent.stateNode.replaceChild(document.createTextNode(newProps.textContent), oldVirtualDOM.stateNode);
      }
    }

    return;
  } // 处理元素节点


  Object.keys(newProps).forEach(function (propsName) {
    // 获取属性值
    var newPropsvalue = newProps[propsName];
    var oldPropsvalue = oldProps[propsName]; // 判断新旧属性是否一致

    if (newPropsvalue !== oldPropsvalue) {
      // 判断是否是事件属性 onClick -> click
      if (propsName.slice(0, 2) === 'on') {
        // 处理需要绑定到元素上的事件名称
        var eventName = propsName.toLocaleLowerCase().slice(2);
        newElement.addEventListener(eventName, newPropsvalue); // 删除原有事件的事件处理函数

        if (oldPropsvalue) {
          newElement.removeEventListener(eventName, oldPropsvalue);
        }
      } else if (propsName === 'value' || propsName === 'cheched') {
        newElement[propsName] = newPropsvalue;
      } else if (propsName !== 'children') {
        // 判断是普通属性还是class属性
        var propsType = propsName === 'className' ? 'class' : propsName;
        newElement.setAttribute(propsType, newPropsvalue);
      }
    }
  }); // 判断属性被删除情况

  Object.keys(oldProps).forEach(function (propsName) {
    var newPropsValue = newProps[propsName];
    var oldPropsValue = oldProps[propsName]; // 属性是否被删除

    if (!newPropsValue) {
      // 判断是否是事件
      if (propsName.slice(0, 2) === 'on') {
        var eventName = propsName.toLocaleLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (propsName !== 'children') {
        // 删除普通属性（children除外）
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
    return new fiber.type(fiber.props); // 返回类组件的实例对象
  } else {
    instance = fiber.type; // 返回函数组件的实例对象
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
  // 创建普通节点 Dom 对象
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
// 创建任务队列
var createTaskQueue = function createTaskQueue() {
  var taskQueue = []; // 任务队列

  return {
    /**
     * 向任务队列中添加任务
     */
    push: function push(item) {
      return taskQueue.push(item);
    },

    /**
     * 从任务队列中获取任务
     */
    pop: function pop() {
      return taskQueue.shift();
    },

    /**
     * 判断任务队列中是否还有任务
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
  // 校验是否是普通的节点
  if (typeof virtualDOM.type === 'string') {
    return 'host_component';
  } else if (Object.getPrototypeOf(virtualDOM.type) === _Component__WEBPACK_IMPORTED_MODULE_0__["Component"]) {
    // 校验是否是类组件
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
 * 辅助方法
 */
 // 创建任务队列方法


 // 校验 stateNode




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

  // 创建 virtual DOM 方法
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
 * 核心Fiber算法
 * 2021-07-06 21:40
 */


var taskQueue = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createTaskQueue"])();
var subTask = null; // 需要执行的任务

var pendingCommit = null; // 等待被提交的Fiber[]
// 将fiber[] 转换成真实的 DOM 对象

var commitAllWork = function commitAllWork(fiber) {
  // 循环 effets 数组 构建 DOM 节点树
  fiber.effects.forEach(function (item) {
    if (item.tag === 'class_component') {
      item.stateNode.__fiber = item;
    }

    if (item.effectTag === 'delete') {
      item.parent.stateNode.removeChild(item.stateNode);
    } else if (item.effectTag === 'update') {
      // 更新
      if (item.type === item.alternate.type) {
        // 节点相同
        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["updataNodeElement"])(item.stateNode, item, item.alternate);
      } else {
        // 节点不同
        item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode);
      }
    } else if (item.effectTag === 'placement') {
      // 当前要追加的子节点
      var _fiber = item; // 当前要追加的子节点的父级

      var parentFiber = item.parent; // 找到普通节点父级，排除组件父级
      // 因为组件父级不能直接追加真实的DOM节点

      while (parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
        parentFiber = parentFiber.parent;
      } //如果子节点是普通节点，找到父级，将子节点追加到父级中


      if (_fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(_fiber.stateNode);
      }
    }
  }); // 备份旧的 fiber 对象

  fiber.stateNode.__rootFiberContainer = fiber;
}; // 获取任务队列中第一个（小）任务


var getFirstTask = function getFirstTask() {
  // 从任务队列中获取任务
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
   * 返回最外层节点的 fiber 对象
   */


  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
    alternate: task.dom.__rootFiberContainer
  };
}; // 构建 fiber 对象


var reconcileChildren = function reconcileChildren(fiber, children) {
  /**
   * children 可以能为对象也可能为数组
   * 当为对象时需要转成数组返回
  */
  var arrifiedChildren = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["arrified"])(children);
  var index = 0; // 循环 children 使用的索引

  var numberOfElements = arrifiedChildren.length; // children 数组中元素的个数

  var element = null; // 循环过程中的循环项，即子节点的 virtualDOM 对象

  var newFiber = null; // 子级 fiber 对象

  var prevFiber = null; // 上一个兄弟对象

  var alternate = null;

  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child; // 备份 fiber 节点
  }

  while (index < numberOfElements || alternate) {
    element = arrifiedChildren[index]; // 当前节点的 virtualDOM 对象

    if (!element && alternate) {
      // 删除操作
      alternate.effectTag = 'delete';
      fiber.effects.push(alternate);
    }

    if (element && alternate) {
      // 执行更新操作
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
        // 类型相同的节点，旧节点直接赋值给新节点
        newFiber.stateNode = alternate.stateNode;
      } else {
        // 类型不相同的节点，创建新的节点，为fiber节点添加节点 DOM 对象或组件实例对象
        newFiber.stateNode = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createStateNode"])(newFiber);
      }
    } else if (element && !alternate) {
      // 执行新增渲染操作
      newFiber = {
        type: element.type,
        props: element.props,
        tag: Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["getTag"])(element),
        effects: [],
        effectTag: 'placement',
        parent: fiber
      }; // 为fiber节点添加节点 DOM 对象或组件实例对象

      newFiber.stateNode = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createStateNode"])(newFiber);
    }

    if (index == 0) {
      // 设置根结点的第一个子节点
      fiber.child = newFiber;
    } else if (element) {
      // 设置子结点的其他兄弟节点
      prevFiber.sibling = newFiber;
    }

    if (alternate && alternate.sibling) {
      alternate = alternate.sibling;
    } else {
      alternate = null;
    } // 保存第一个子节点


    prevFiber = newFiber;
    index++;
  }
}; // 执行任务（会返回新的任务）


var executeTask = function executeTask(fiber) {
  // 构建子级fiber对象
  if (fiber.tag === 'class_component') {
    if (fiber.stateNode.__fiber && fiber.stateNode.__fiber.partialState) {
      fiber.stateNode.state = _objectSpread(_objectSpread({}, fiber.stateNode.state), fiber.stateNode.__fiber.partialState);
    }

    reconcileChildren(fiber, fiber.stateNode.render());
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props));
  } else {
    reconcileChildren(fiber, fiber.props.children);
  } // 构建左子树中的子级fiber对象
  // 如果子级存在则返回子级，并将这个子级作为父级传入构建方法，构建这个父级（传入的子级）下的子级


  if (fiber.child) {
    return fiber.child;
  } // 如果存在同级 返回同级 构建同级的子级
  // 如果同级不存在 返回到父级 看父级是否有同级


  var currentExecutelyFiber = fiber;

  while (currentExecutelyFiber.parent) {
    // 合并所有的 effects
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(currentExecutelyFiber.effects.concat([currentExecutelyFiber]));

    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling;
    }

    currentExecutelyFiber = currentExecutelyFiber.parent;
  }

  pendingCommit = currentExecutelyFiber;
}; // 循环执行的任务


var workLoop = function workLoop(deadline) {
  // 任务不存在则获取任务队列中的任务
  if (!subTask) {
    subTask = getFirstTask();
  } // 任务存在，并且浏览器存在空闲时间


  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
}; // 浏览器空闲时执行的任务


var performTask = function performTask(deadline) {
  // 执行任务
  workLoop(deadline); // 判断是否还有任务 || 任务队列中是否还有任务未执行完

  if (subTask || !taskQueue.isEmpty()) {
    // 浏览器空闲时继续执行任务
    requestIdleCallback(performTask);
  }
};

var render = function render(element, dom) {
  /**
   * 1. 向任务队列中添加任务  （任务：通过virtualDOM 构建 Fiber 对象）
   * 2. 指定浏览器空闲时执行任务
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