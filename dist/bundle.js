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

var root = document.getElementById('root');
var jsx = /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Hello React"), /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Hello Fiber"));
Object(_react__WEBPACK_IMPORTED_MODULE_0__["render"])(jsx, root);

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
  var oldProps = oldVirtualDOM.props || {};
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

/***/ "./src/react/Misc/CreateStateNode/index.js":
/*!*************************************************!*\
  !*** ./src/react/Misc/CreateStateNode/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/react/DOM/index.js");


var createStateNode = function createStateNode(fiber) {
  // 创建普通节点 Dom 对象
  if (fiber.tag === 'host_component') {
    return Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["createDomElement"])(fiber);
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

/***/ "./src/react/Misc/GetTag/index.js":
/*!****************************************!*\
  !*** ./src/react/Misc/GetTag/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getTag = function getTag(virtualDOM) {
  // 校验是否是普通的节点
  if (typeof virtualDOM.type === 'string') {
    return 'host_component';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getTag);

/***/ }),

/***/ "./src/react/Misc/index.js":
/*!*********************************!*\
  !*** ./src/react/Misc/index.js ***!
  \*********************************/
/*! exports provided: createTaskQueue, arrified, createStateNode, getTag */
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
/*! exports provided: render, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/react/createElement/index.js");
/* harmony import */ var _reconciliation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reconciliation */ "./src/react/reconciliation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _reconciliation__WEBPACK_IMPORTED_MODULE_1__["render"]; });



/* harmony default export */ __webpack_exports__["default"] = ({
  createElement: _createElement__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/react/reconciliation/index.js":
/*!*******************************************!*\
  !*** ./src/react/reconciliation/index.js ***!
  \*******************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _Misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc */ "./src/react/Misc/index.js");
/** 
 * 核心Fiber算法
 * 2021-07-06 21:40
 */

var taskQueue = Object(_Misc__WEBPACK_IMPORTED_MODULE_0__["createTaskQueue"])();
var subTask = null; // 需要执行的任务

var pendingCommit = null; // 等待被提交的Fiber[]
// 将fiber[] 转换成真实的 DOM 对象

var commitAllWork = function commitAllWork(fiber) {
  // 循环 effets 数组 构建 DOM 节点树
  fiber.effects.forEach(function (item) {
    if (item.effectsTag === 'placement') {
      item.parent.stateNode.appendChild(item.stateNode);
    }
  });
}; // 获取任务队列中第一个（小）任务


var getFirstTask = function getFirstTask() {
  // 从任务队列中获取任务
  var task = taskQueue.pop();
  /** 
   * 返回最外层节点的 fiber 对象
   */

  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null
  };
}; // 构建 fiber 对象


var reconcileChildren = function reconcileChildren(fiber, children) {
  /**
   * children 可以能为对象也可能为数组
   * 当为对象时需要转成数组返回
  */
  var arrifiedChildren = Object(_Misc__WEBPACK_IMPORTED_MODULE_0__["arrified"])(children);
  var index = 0;
  var numberOfElements = arrifiedChildren.length;
  var element = null;
  var newFiber = null;
  var prevFiber = null;

  while (index < numberOfElements) {
    element = arrifiedChildren[index]; // 当前节点的 virtualDOM 对象

    newFiber = {
      type: element.type,
      props: element.props,
      tag: Object(_Misc__WEBPACK_IMPORTED_MODULE_0__["getTag"])(element),
      effects: [],
      effectsTag: 'placement',
      parent: fiber
    }; // 为fiber节点添加节点 DOM 对象或组件实例对象

    newFiber.stateNode = Object(_Misc__WEBPACK_IMPORTED_MODULE_0__["createStateNode"])(newFiber);

    if (index == 0) {
      // 设置根结点的第一个子节点
      fiber.child = newFiber;
    } else {
      // 设置子结点的其他兄弟节点
      prevFiber.sibling = newFiber;
    } // 保存第一个子节点


    prevFiber = newFiber;
    index++;
  }
}; // 执行任务（会返回新的任务）


var executeTask = function executeTask(fiber) {
  // 构建子级fiber对象
  reconcileChildren(fiber, fiber.props.children); // 构建左子树中的子级fiber对象
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map