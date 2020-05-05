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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background: rgb(2,0,36);\\n  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(67,67,179,1) 45%, rgba(0,212,255,1) 100%);\\n  color: white;\\n}\\nfooter {\\n  background: white;\\n  color: black;\\n}\\n\\n.error {\\n  padding: 20px;\\n  background-color: #f44336;\\n  color: white;\\n  display: none;\\n}\\n\\n.closebtn {\\n  margin-left: 15px;\\n  color: white;\\n  font-weight: bold;\\n  float: right;\\n  font-size: 22px;\\n  line-height: 20px;\\n  cursor: pointer;\\n  transition: 0.3s;\\n}\\n\\n.closebtn:hover {\\n  color: black;\\n}\\n\\n.search {\\n  padding: 30px;\\n  text-align: center;\\n}\\n\\n.input-form {\\n  margin-top: 50px;\\n}\\n\\n.searchInput {\\n  outline: 0;\\n  border-width: 0 0 2px;\\n  border-color: white;\\n  color: white;\\n  background: none;\\n  font-size: 20px;\\n}\\n\\n.searchButton {\\n  outline: 0;\\n  border-width: 0;\\n  color: white;\\n  background: none;\\n  font-size: 25px;\\n  cursor: pointer;\\n}\\n\\n.output {\\n  margin-top: 30px;\\n  text-align: center;\\n}\\n\\n.icon {\\n  width: 200px;\\n}\\n\\n.temps {\\n  padding:  40px;\\n}\\n\\n.weatherC {\\n  font-size: 45px;\\n  padding: 10px\\n\\n}\\n\\n.weatherF {\\n  font-size: 45px;\\n  padding: 10px\\n\\n}\\n\\n.description {\\n  padding: 20px;\\n  text-transform: capitalize;\\n  font-size: 25px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/css/style.css?");

/***/ }),

/***/ "./src/formatWeather.js":
/*!******************************!*\
  !*** ./src/formatWeather.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _manageDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageDom */ \"./src/manageDom.js\");\n\n\n\nconst format = (function format() {\n  function relevantData(data) {\n    const weatherData = {};\n\n    weatherData.name = `${data.name}, ${data.sys.country}`;\n    weatherData.tempC = _helper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kelvinToCelcius(data.main.temp);\n    weatherData.tempF = _helper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kelvinToFahrenheit(data.main.temp);\n    weatherData.humidity = data.main.humidity;\n    weatherData.pressure = data.main.pressure;\n    weatherData.description = data.weather[0].description;\n    weatherData.icon = _helper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectIcon(data.weather[0].icon);\n    weatherData.don = _helper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dayOrNigth(data.weather[0].icon);\n\n    return weatherData;\n  }\n\n  function getWeather(city) {\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=436dd24bce78a2c523210e1f077bf18b`)\n      .then((response) => response.json())\n      .then((data) => {\n        if (data.cod !== 200) {\n          _manageDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errorMessage('City not found or the city was mistyped');\n        } else {\n          const relevant = relevantData(data);\n          _manageDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearErrorMessage();\n          _manageDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].data(relevant);\n        }\n      });\n  }\n\n\n  return {\n    getWeather,\n    relevantData,\n  };\n}());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (format);\n\n\n//# sourceURL=webpack:///./src/formatWeather.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst helper = (function helper() {\n  function kelvinToCelcius(temp) {\n    temp = `${(temp - 273.15).toFixed(1)} C°`;\n    return temp;\n  }\n\n  function kelvinToFahrenheit(temp) {\n    temp = `${((((temp - 273.15) * 9) / 5) + 32).toFixed(1)} F°`;\n    return temp;\n  }\n\n  function selectIcon(icon) {\n    let text = '';\n    switch (icon) {\n      case '01d':\n      case '01n':\n        text = 'https://i.ibb.co/gSsGV6w/011-sun-1.png';\n        break;\n\n      case '02d':\n      case '02n':\n        text = 'https://i.ibb.co/PM4pDPP/008-sun-4.png';\n        break;\n\n      case '03d':\n      case '04d':\n      case '03n':\n      case '04n':\n\n        text = 'https://i.ibb.co/x5KzhjH/048-clouds.png';\n        break;\n\n      case '09d':\n      case '09n':\n        text = 'https://i.ibb.co/fqCc4gS/019-rain-5.png';\n        break;\n\n      case '10d':\n      case '10n':\n        text = 'https://i.ibb.co/Xz98Jk0/021-rain-3.png';\n        break;\n\n      case '11d':\n      case '11n':\n        text = 'https://i.ibb.co/s1vm3Jn/047-storm.png';\n        break;\n\n      case '13d':\n      case '13n':\n        text = 'https://i.ibb.co/chcyYS8/023-rain-1.png';\n        break;\n\n      case '50d':\n      case '50n':\n        text = 'https://i.ibb.co/Sttsk3X/001-wind.png';\n        break;\n\n      default:\n        text = 'https://i.ibb.co/Hg8qKZc/042-earth.png';\n        break;\n    }\n    return text;\n  }\n\n  function dayOrNigth(icon) {\n    return icon[icon.length - 1];\n  }\n\n  return {\n    kelvinToCelcius,\n    kelvinToFahrenheit,\n    selectIcon,\n    dayOrNigth,\n  };\n}());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (helper);\n\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _formatWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatWeather */ \"./src/formatWeather.js\");\n\n\n\n\nconst searchInput = document.querySelector('.searchInput');\nconst searchButton = document.querySelector('.searchButton');\n\n\nsearchButton.addEventListener('click', () => {\n  _formatWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getWeather(searchInput.value);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/manageDom.js":
/*!**************************!*\
  !*** ./src/manageDom.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst display = (function display() {\n  function data(data) {\n    document.querySelector('.name').innerHTML = data.name;\n    document.querySelector('.humidity').innerHTML = `Humidity: ${data.humidity}%`;\n    document.querySelector('.weatherC').innerHTML = ` ${data.tempC} `;\n    document.querySelector('.weatherF').innerHTML = ` \\xa0 ${data.tempF} `;\n    document.querySelector('.pressure').innerHTML = `Pressure: ${data.pressure}`;\n    document.querySelector('.description').innerHTML = data.description;\n    document.querySelector('.icon').src = data.icon;\n    if (data.don === 'd') {\n      document.body.style = `background: rgb(255,0,0);\n      background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(222,144,62,1) 54%, rgba(250,255,0,1) 100%);`;\n    } else {\n      document.body.style = `background: rgb(2,0,36);\n      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(67,67,179,1) 45%, rgba(0,212,255,1) 100%);`;\n    }\n  }\n\n\n  function errorMessage(message) {\n    const element = document.querySelector('.error');\n    element.innerHTML = `${message\n    }<span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span>`;\n    element.style.display = 'block';\n  }\n\n  function clearErrorMessage() {\n    const element = document.querySelector('.error');\n    element.style.display = 'none';\n  }\n\n\n  return {\n    data,\n    errorMessage,\n    clearErrorMessage,\n  };\n}());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (display);\n\n\n//# sourceURL=webpack:///./src/manageDom.js?");

/***/ })

/******/ });