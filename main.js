/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bahiana&family=Open+Sans:wght@600&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n  margin: 0;\n  padding: 0;\n}\n\nhtml{\n  height: 100%;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif, system-ui, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  background-image: linear-gradient(to bottom, #548ab9, #283e51);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nnav{\n  padding: 0.5em;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 4px solid black;\n  padding-left: 0%;\n  background-color: rgb(90, 90, 90);\n}\n\n/*TITULO ARRIBA A LA IZQ*/\n\n.contenedor-titulo{\n  padding: 1em;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  gap: 10px;\n  font-weight: bold;\n  color: rgb(233, 230, 230);\n  transition: background-color 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n.contenedor-titulo h1{\n  margin-right: -18px;\n  font-size: 50px;\n  font-family: 'Open Sans';\n}\n\n.contenedor-titulo:hover{\n  background-color: #ffffff25;\n  border-radius: 8px;\n}\n\n#logo-web{\n  width: 40px;\n  height: 40px;\n}\n\n/*BARRA BUSCADORA*/\n\n.barra-buscadora{\n  padding: 0.3em;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n  border: 2px solid rgba(255, 255, 255, 0.678);\n  border-radius: 10px;\n  -webkit-box-shadow: 3px 3px 10px 2px #000000; \n  box-shadow: 3px 3px 10px 2px #000000;\n}\n\n.barra-buscadora input{\n  padding: 0.3em;\n  font-size: 20px;\n  border-style: none;\n  color: rgb(255, 255, 255);\n  font-style: bold;\n  background-color: #47749800;\n  outline: none;\n}\n\n#buscar-ciudad{\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n\n/*GRADOS*/\n\n.cambiar-unidades{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 5px;\n}\n\n.grados, .grados-inactivo{\n  padding: 0.3em;\n  cursor: pointer;\n  background-color: rgb(53, 53, 53);\n  color: white;\n  font-weight: bold;\n  border-style: none;\n  border-radius: 4px;\n  width: 50px;\n  font-size: 25px;\n}\n\n.grados-activo {\n  padding: 0.3em;\n  cursor: pointer;\n  font-weight: bold;\n  border-style: none;\n  border-radius: 4px;\n  width: 50px;\n  background-color: #ffffff; \n  color: rgb(0, 0, 0);\n  font-size: 25px;\n}\n\n/*INFO TIEMPO*/\n\n.contenedor-info-tiempo{\n  margin-top: 70px;\n  padding: 0.5em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.info-tiempo{\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  -webkit-box-shadow: 5px 4px 5px 1px #000000; \n  box-shadow: 5px 4px 5px 1px #000000;\n  border-radius: 10px;\n  align-items: center;\n}\n\n.info-localizacion{\n  padding: 0.5em;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background-color: rgb(61, 61, 61);\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.contenedor-ciudad, .contenedor-dia{\n  padding: 0.5em;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  gap: 150px;\n}\n\n.contenedor-ciudad img{\n  width: 100px;\n  height: 100px;\n}\n\n.nombre-ciudad{\n  font-size: 55px;\n  font-family: 'Open Sans';\n  color: white;\n}\n\n.dia-semana, .estado-tiempo{\n  font-size: 35px;\n  font-family: 'Open Sans';\n  color: white;\n}\n\n.datos-clima{\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  padding: 0.7em;\n  background-color: rgba(132, 61, 226, 0.514);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n  width: 95.5%;\n}\n\n.temp-actual{\n  font-size: 70px;\n  font-family: 'Open Sans';\n  color: rgb(26, 26, 26);\n}\n\n.contenedor-minima-maxima{\n  padding: 0.5em;\n  color: rgb(255, 255, 255);\n  background-color: rgb(61, 61, 61);\n  border-radius: 6px;\n}\n\n.temp-minima, .temp-maxima{\n  display: flex;\n  font-size: 35px;\n  font-family: 'Open Sans';\n  color: rgb(255, 255, 255);\n}\n\n.hora-actual{\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n  font-family: 'Open Sans';\n  color: rgb(19, 19, 19);\n  background-color: rgba(132, 61, 226, 0.514);background-color: rgba(132, 61, 226, 0.514);\n  width: 100%;\n  border-bottom-right-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n/*FOOTER*/\n\nfooter{\n  padding: 0.3em;\n  margin-top: 20px;\n  background-color: rgb(1, 38, 71);\n  height: fit-content;\n  display: flex;\n  padding: 0.3em;\n  flex-direction: column;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  font-size: 25px;\n}\n\nfooter img{\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n\n@media screen and (max-width: 767px) {\n  *{\n    margin: 0;\n    padding: 0;\n  }\n  \n  body{\n    background-color: aqua;\n  }\n  \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   obtenerTiempo: () => (/* binding */ obtenerTiempo)\n/* harmony export */ });\n/* harmony import */ var _eventos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventos */ \"./src/scripts/eventos.js\");\n/* harmony import */ var _elementosDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementosDOM */ \"./src/scripts/elementosDOM.js\");\n\n\n\nconst claveAPI = \"b819efaed2101d40c74f6cb81dd7e293\";\nconst idiomaUsuario = navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2);\nlet city, estadoClima, icono, descripcionClima, temperaturaActual, temperaturaMinima, temperaturaMaxima;\n\nasync function obtenerTiempo(ciudad){\n    const url = \"https://api.openweathermap.org/geo/1.0/direct?q=\" + ciudad + \"&limit=1&appid=\" + claveAPI + \"\";\n    \n    const ciudadObtenida = await fetch(url, {mode: 'cors'});\n    \n    if(ciudadObtenida.ok){\n        \n        const ciudadJson = await ciudadObtenida.json();\n        \n        //ya tenemos los datos, comprobamos si hay ciudad\n        if(ciudadJson.length > 0){\n            const lat = ciudadJson[0].lat;\n            const lon = ciudadJson[0].lon;\n            \n            const tiempo = await obtenerDatos(lat, lon);\n            let misDatos = [];\n            \n            city = tiempo.name; \n            misDatos.push(city);\n\n            estadoClima = tiempo.weather[0].main;\n            misDatos.push(estadoClima);\n\n            icono = await obtenerIcono(tiempo.weather[0].icon);\n            misDatos.push(icono);\n\n            descripcionClima = tiempo.weather[0].description;\n            misDatos.push(descripcionClima);\n\n            temperaturaActual = tiempo.main.temp;\n            misDatos.push(temperaturaActual);\n\n            temperaturaMinima = tiempo.main.temp_min;\n            misDatos.push(temperaturaMinima);\n\n            temperaturaMaxima = tiempo.main.temp_max;\n            misDatos.push(temperaturaMaxima);\n\n            (0,_elementosDOM__WEBPACK_IMPORTED_MODULE_1__.crearTarjetaTiempo)(misDatos);\n        } \n        else {\n            console.log(\"ciudad no encontrada\");\n        }\n        \n    } \n    //MANEJO DE ERRORES, ALGO HA IDO MAL CON LA REQUEST\n    else{\n        if(ciudadObtenida.status == \"401\"){\n            console.log(\"Fallo en la clave API\")\n        }\n        if(ciudadObtenida.status == \"429\"){\n            console.log(\"Límite de solicitudes a la API excedido\")\n        }\n        if(ciudadObtenida.status == \"500\" || ciudadObtenida.status == \"502\" || ciudadObtenida.status == \"503\" || ciudadObtenida.status == \"504\"){\n            console.log(\"Problema con openweathermap.org\")\n        }\n        \n    }\n}\n\nasync function obtenerDatos(latitud, longitud){\n    const url = \"https://api.openweathermap.org/data/2.5/weather?lat=\" + latitud + \"&lon=\" + longitud + \"&appid=\" + claveAPI + \"&lang=\" + idiomaUsuario + \"&units=\" + _eventos__WEBPACK_IMPORTED_MODULE_0__.gradosSeleccionados + \"\";\n    const datosTiempo = await fetch(url, {mode: 'cors'});\n    const datosTiempoJson = await datosTiempo.json();\n    return datosTiempoJson;\n}\n\nasync function obtenerIcono(codigoIcono){\n    const url = \"https://openweathermap.org/img/wn/\" + codigoIcono + \"@2x.png\";\n    return url;\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/api.js?");

/***/ }),

/***/ "./src/scripts/cargarImagenes.js":
/*!***************************************!*\
  !*** ./src/scripts/cargarImagenes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cargarImagenes: () => (/* binding */ cargarImagenes)\n/* harmony export */ });\n/* harmony import */ var _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/github-logo.png */ \"./src/assets/github-logo.png\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _assets_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/search.png */ \"./src/assets/search.png\");\n\n\n\n\nfunction cargarImagenes(){\n    const gitLogo = document.querySelector(\".git-logo\");\n    gitLogo.src = _assets_github_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    const webLogo = document.querySelector(\"#logo-web\");\n    webLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    const buscarCiudad = document.querySelector(\"#buscar-ciudad\");\n    buscarCiudad.src = _assets_search_png__WEBPACK_IMPORTED_MODULE_2__;\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/cargarImagenes.js?");

/***/ }),

/***/ "./src/scripts/elementosDOM.js":
/*!*************************************!*\
  !*** ./src/scripts/elementosDOM.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   crearTarjetaTiempo: () => (/* binding */ crearTarjetaTiempo)\n/* harmony export */ });\nfunction crearTarjetaTiempo(misDatosTiempo){\n    console.log(misDatosTiempo);\n    const iconoTiempo = document.querySelector(\".icono-tiempo\");\n    iconoTiempo.src = misDatosTiempo[2];\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/elementosDOM.js?");

/***/ }),

/***/ "./src/scripts/eventos.js":
/*!********************************!*\
  !*** ./src/scripts/eventos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"añadirEventos\": () => (/* binding */ añadirEventos),\n/* harmony export */   gradosSeleccionados: () => (/* binding */ unidadesSeleccionadas)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/scripts/api.js\");\n\n\nconst inputCiudad = document.querySelector(\"#input-ciudad\");\nconst imgBuscarCiudad = document.querySelector(\"#buscar-ciudad\");\nconst contenedorTitulo = document.querySelector(\".contenedor-titulo\");\nconst btnCelsius = document.querySelector(\"#celsius\");\nconst btnFahrenheit = document.querySelector(\"#fahrenheit\");\n\nlet unidadesSeleccionadas = \"metric\"; //por defecto en Celsius\nlet clicable = true;\n\nfunction añadirEventos(){\n\n    //buscar mediante click en la lupa\n    imgBuscarCiudad.addEventListener(\"click\", () => {\n        const ciudadComprobada = comprobarCiudadIntroducida();\n\n        if(ciudadComprobada.valido){\n            (0,_api__WEBPACK_IMPORTED_MODULE_0__.obtenerTiempo)(ciudadComprobada.ciudad);\n        }\n    });\n\n    //buscar mediante tecla enter\n    inputCiudad.addEventListener(\"keypress\", function(e){\n        if(e.code === \"Enter\"){\n            imgBuscarCiudad.click();\n        }\n     });\n\n     contenedorTitulo.addEventListener(\"click\", () => {\n        location.reload();\n     });\n\n     btnCelsius.addEventListener(\"click\", () => {\n            if (!btnCelsius.classList.contains(\"grados-activo\")) {\n                if(clicable){\n                    btnCelsius.classList.remove(\"grados\");\n                    btnCelsius.classList.add(\"grados-activo\");\n                    unidadesSeleccionadas = \"metric\";\n                    clicable = false;\n                }\n              } else{\n                if(!clicable){\n                    btnCelsius.classList.remove(\"grados-activo\");\n                btnCelsius.classList.add(\"grados-inactivo\");\n                unidadesSeleccionadas = \"\";\n                clicable = true;\n                }\n              }\n     });\n\n     btnFahrenheit.addEventListener(\"click\", () => {\n        if (!btnFahrenheit.classList.contains(\"grados-activo\")) {\n            if(clicable){\n                btnFahrenheit.classList.remove(\"grados\");\n                btnFahrenheit.classList.add(\"grados-activo\");\n                unidadesSeleccionadas = \"imperial\";\n                clicable = false;\n            }\n          } else{\n            if(!clicable){\n                btnFahrenheit.classList.remove(\"grados-activo\");\n                btnFahrenheit.classList.add(\"grados-inactivo\");\n            unidadesSeleccionadas = \"\";\n            clicable = true;\n            }\n          }\n     });\n}\n\nfunction comprobarCiudadIntroducida(){\n    const ciudad = inputCiudad.value.trim();\n    if(ciudad === \"\"){\n        console.log(\"vacio\");\n        return {ciudad: null, valido: false};\n    } else{\n        console.log(\"ciudad introducida: \" + ciudad);\n        return {ciudad: ciudad, valido: true};\n    }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/eventos.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _cargarImagenes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cargarImagenes.js */ \"./src/scripts/cargarImagenes.js\");\n/* harmony import */ var _eventos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventos */ \"./src/scripts/eventos.js\");\n\n\n\n\n(0,_cargarImagenes_js__WEBPACK_IMPORTED_MODULE_1__.cargarImagenes)();\n(0,_eventos__WEBPACK_IMPORTED_MODULE_2__[\"añadirEventos\"])();\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/index.js?");

/***/ }),

/***/ "./src/assets/github-logo.png":
/*!************************************!*\
  !*** ./src/assets/github-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7615be16eed41f806def.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/github-logo.png?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b79518565ef39a6b30d9.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/search.png":
/*!*******************************!*\
  !*** ./src/assets/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d336961a057b4b87ad19.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/search.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;