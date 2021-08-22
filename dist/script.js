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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function (headingActive = 'accordion-heading--active', blockActive = 'accordion-block--active', paddings = 40) {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).clickEvent(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headingActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(blockActive)
      /* .fadeToggle(300) */
      ;

      if (this[i].classList.contains(headingActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
      /* можнно обойтись без уловия и двух последних аргументов, если анимацию через fadeToggle */

    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-heading').accordion();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).clickEvent(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  let scroll = calcScroll();

  for (let i = 0; i < this.length; i++) {
    const target = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).clickEvent(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.marginRight = `${scroll}px`;
      document.body.style.overflow = 'hidden';
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).clickEvent(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(300);
        setTimeout(() => {
          document.body.style.marginRight = `0px`;
          document.body.style.overflow = '';
        }, 300);
        setTimeout(() => {
          if (created) {
            document.querySelector(target).remove();
          }
        }, 300);
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).clickEvent(e => {
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(300);
        setTimeout(() => {
          document.body.style.marginRight = `0px`;
          document.body.style.overflow = '';
        }, 300);
        setTimeout(() => {
          if (created) {
            document.querySelector(target).remove();
          }
        }, 300);
      }
    });
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
} = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).addClass('modal');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).setAttr('id', Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target').slice(1)); // btns = {count: num, settings: [[text, classNames=[], close, callback]]}

    const buttons = [];
    /* в массиве будут храниться каждые отдельные кнопки (ноды) */

    for (let j = 0; j < btns.count; j++) {
      let [text, className, close, callback] = btns.settings[j];
      let btn = document.createElement('button');
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btn).addClass('btn', ...className);
      btn.textContent = text;

      if (close) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btn).setAttr('data-close', 'true');
      }

      if (callback && typeof callback === 'function') {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(btn).clickEvent(callback);
      }

      buttons.push(btn);
    }

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).html(`
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body} 
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `);
    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target')).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tabs.js":
/*!***************************************!*\
  !*** ./src/js/lib/components/tabs.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).clickEvent(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').fadeIn(500).closestEl('.tab').find('.tab-content').removeClass('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tab-panel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
  /* из функции возвращаем конструктор обращаемся к прототипу функции и запускаем метод инит (будет новый объект)*/
};

$.prototype.init = function (selector) {
  if (!selector) {
    /* если не был передан селектор */
    return this;
    /* то возвращем контекст вызова this нового объекта // {} - будет пустой объект */
  }

  if (selector.tagName) {
    /* если это тэг */
    this[0] = selector;
    /* на первую позицию помещаем селектор */

    this.length = 1;
    /* один элемент */

    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  /* в пустой объект (this) добавляем document.querySelectorAll с переданным селектором */

  this.length = document.querySelectorAll(selector).length;
  /* в главный объект добавили свойство length которое будет отвечать за количество элементов */

  return this;
  /* в этом объекте this будут храниться прототипы и те элементы с которыми будем взаимодействовать */
};

$.prototype.init.prototype = $.prototype;
/* прототип объекта из init записываем в прототип главной функции $ */

window.$ = $;
/* pв глобальный объект window записываем функцию $ */

/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs */ "./src/js/lib/components/tabs.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");











/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  /* Меняем или получаем содержимое элемента */
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  /* Метод выбора конкретного элемента */
  const swap = this[i];
  /* нужный элемент записывем в переменную */

  const objLength = Object.keys(this).length;
  /* получаем количество свойств(элементов) внутри объекта */

  for (let i = 0; i < objLength; i++) {
    delete this[i];
    /* удаляем все элементы с объекта */
  }

  this[0] = swap;
  /* в первый элемент объекта помещаем переменную */

  this.length = 1;
  /* количество */

  return this;
  /* возвращащаем объект, в котором будет одно свойство и один элемент */
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  /* Получение номера элемента по порядку у которых общий родитель */
  const parent = this[0].parentNode;
  /* получаем родителя одного элемента */

  const childs = [...parent.children];
  /* получаем детей родителя */

  const findMyIndex = item => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  /* Получаем определенный элемент среди выбранного селектора */
  let numberOfitems = 0;
  /* Количество подходящих элементов по селектору в общем */

  let counter = 0;
  /* счетчик (количество новых записанных элементов) */

  const copyObj = Object.assign({}, this);
  /* Поверхностная копия главного объекта (this) */

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    /* ищем подходящие элементы в копии по селектору и записываем в arr */

    if (arr.length == 0) {
      /* если не найдено ни одного такого элемента */
      continue;
      /* то пропускаем */
    }

    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      /* справа каждый отдельный элемент найденный по селектору, слева общий объект в который записываем по порядкус 0 */

      counter++;
    }

    numberOfitems += arr.length;
  }

  this.length = numberOfitems;
  /* если вдруг останутся какие-то неподходящие свойства, то мы их удалим */

  const objLength = Object.keys(this).length;

  for (; numberOfitems < objLength; numberOfitems++) {
    delete this[numberOfitems];
    /* удаляются остатки */
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closestEl = function (selector) {
  /* Получаем ближайший блок по заданному селектору */
  let counter = 0;
  /* какое количество элементов мы нашли */

  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) {
      /* если нет  */
      return this;
      /* то возвращаем объект */
    } else {
      this[i] = this[i].closest(selector);
      /* внутри каждого элемента при помощи closest будем находить нужный селектор */

      counter++;
    }
  }
  /* если вдруг останутся какие-то неподходящие свойства, то мы их удалим */


  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  /* метод получает все элементы, кроме выбранного элемента */
  let numberOfitems = 0;
  let counter = 0;
  const copyObj = Object.assign({}, this);
  /* Поверхностная копия главного объекта (this) */

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    /* обращаемся к детям родителя  */

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        /* если этот элемент равен тому элементу на котором произошло действие */
        continue;
        /* то мы его не добавляем в главный объект */
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfitems += arr.length - 1;
  }

  this.length = numberOfitems;
  /* если вдруг останутся какие-то неподходящие свойства, то мы их удалим */

  const objLength = Object.keys(this).length;

  for (; numberOfitems < objLength; numberOfitems++) {
    delete this[numberOfitems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (!name && !value) {
      return this;
    } else if (name && !value) {
      this[i].setAttribute(name, '');
    } else {
      this[i].setAttribute(name, value);
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(name);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(name)) {
      continue;
    }

    return this[i].getAttribute(name);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name)) {
      this[i].removeAttribute(name);
    } else if (name && !value) {
      this[i].setAttribute(name, '');
    } else {
      this[i].setAttribute(name, value);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  /* тут сможем передавать только один класс */
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  /* метод по открытию display */
  for (let i = 0; i < this.length; i++) {
    /* this.length - количество элементов */
    if (!this[i].style) {
      /* если нет свойства style у каждого элемента по порядку */
      continue;
      /* то продолжаем */
    }

    this[i].style.display = '';
    /* каждому элементу по порядку назначаем пустое свойство display */
  }

  return this;
  /* возвращаем объект */
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  /* метод по скрытию display */
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleDisplay = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, final) {
  /* техническая функция с аргументами */
  let timeStart;
  /* будет ориентир на нее */

  function _animateOverTime(time) {
    if (!timeStart) {
      /* если еще нет данных */
      timeStart = time;
      /* то присваиваем */
    }

    let timeElapsed = time - timeStart;
    /* время, которое каждый раз изменяется отнимаем время начала анимации */

    let complection = Math.min(timeElapsed / duration, 1);
    callback(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof final === 'function') {
        final();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display = 'block', final) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display;

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(duration, _fadeIn, final);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, final) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(duration, _fadeOut, final);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (duration, display, final) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(duration, display, final);
    } else {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(duration, final);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.onEvent = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
    /* возвращаем объект по цепочке */
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.offEvent = function (eventName, callback) {
  /* !!! Чтобы удалить обработчик события, коллбэк должен быть оформлен в переменную */
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.clickEvent = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback) {
      this[i].addEventListener('click', callback);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first').onEvent('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(1).fadeToggle(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').clickEvent(() => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).fadeToggle(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').eq(2).onEvent('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').fadeToggle(800);
}); // console.log($('div').find('.modal-footer'));
// $('.wrap').html(
//     `
//     <div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="droddownMenuButton">Dropdown button</button>
//         <div class="dropdown-menu" data-toggle-id="droddownMenuButton">
//             <a href="#" class="dropdown-item">Action #1</a>
//             <a href="#" class="dropdown-item">Action #2</a>
//             <a href="#" class="dropdown-item">Action #3</a>
//         </div>
//     </div>
//     `
// );
// $('.dropdown-toggle').dropdown();

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').clickEvent(() => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#trigger').createModal({
    text: {
      title: 'Modal title',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos dolorum hic labore asperiores quisquam eaque quaerat culpa minus, repudiandae totam rem molestiae sunt laboriosam cupiditate ullam et impedit. Et?'
    },
    btns: {
      count: 3,
      settings: [['Close', ['btn-danger', 'mr-10'], true], ['Save changes', ['btn-success'], false, () => {
        alert('Данные сохранены');
      }], ['Another button', ['btn-warning', 'ml-10'], false, () => {
        alert('Hello ept');
      }]]
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map