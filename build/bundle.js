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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/test.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/test.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body{\\r\\n    background-color: #c0c0c0;\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n}\\r\\n#webgl{\\r\\n    background-color: #000000;\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    display: block;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://testwarte/./src/css/test.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://testwarte/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://testwarte/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/res/earth.png":
/*!***************************!*\
  !*** ./src/res/earth.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/earth.959c2528.png\");\n\n//# sourceURL=webpack://testwarte/./src/res/earth.png?");

/***/ }),

/***/ "./src/res/tiles.jpg":
/*!***************************!*\
  !*** ./src/res/tiles.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/tiles.96bb3130.jpg\");\n\n//# sourceURL=webpack://testwarte/./src/res/tiles.jpg?");

/***/ }),

/***/ "./src/res/xneg.jpg":
/*!**************************!*\
  !*** ./src/res/xneg.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/xneg.c2905378.jpg\");\n\n//# sourceURL=webpack://testwarte/./src/res/xneg.jpg?");

/***/ }),

/***/ "./src/res/xpos.jpg":
/*!**************************!*\
  !*** ./src/res/xpos.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/xpos.d0a8b434.jpg\");\n\n//# sourceURL=webpack://testwarte/./src/res/xpos.jpg?");

/***/ }),

/***/ "./src/res/ypos.jpg":
/*!**************************!*\
  !*** ./src/res/ypos.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/ypos.9892db49.jpg\");\n\n//# sourceURL=webpack://testwarte/./src/res/ypos.jpg?");

/***/ }),

/***/ "./src/res/zneg.jpg":
/*!**************************!*\
  !*** ./src/res/zneg.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/zneg.bd1ab070.jpg\");\n\n//# sourceURL=webpack://testwarte/./src/res/zneg.jpg?");

/***/ }),

/***/ "./src/res/zpos.jpg":
/*!**************************!*\
  !*** ./src/res/zpos.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/zpos.98d99d75.jpg\");\n\n//# sourceURL=webpack://testwarte/./src/res/zpos.jpg?");

/***/ }),

/***/ "./src/shader/caustics.frag":
/*!**********************************!*\
  !*** ./src/shader/caustics.frag ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#extension GL_OES_standard_derivatives : enable\\r\\nprecision highp float;\\r\\n\\r\\nvarying vec3 vOldPos;\\r\\nvarying vec3 vNewPos;\\r\\nuniform vec3 uLightDir;\\r\\nconst float IOR_AIR = 1.0;//空气的折射率\\r\\nconst float IOR_WATER = 1.333;//水的折射率\\r\\nconst float poolHeight = 1.0;//水池的高度\\r\\nuniform vec3 uSphereCenter;//圆的坐标\\r\\nuniform float uSphereRadius;//圆的半径\\r\\n\\r\\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){\\r\\n    vec3 tMin = (cubeMin - origin) / ray;\\r\\n    vec3 tMax = (cubeMax - origin) / ray;\\r\\n    vec3 t1 = min(tMin, tMax);\\r\\n    vec3 t2 = max(tMax, tMax);\\r\\n    float tNear = max(max(t1.x, t1.y), t1.z);\\r\\n    float tFar = min(min(t2.x, t2.y), t2.z);\\r\\n    return vec2(tNear, tFar);\\r\\n}\\r\\n\\r\\n\\r\\nvoid main(){\\r\\n    float oldArea = length(dFdx(vOldPos)) * length(dFdy(vOldPos));\\r\\n    float newArea = length(dFdx(vNewPos)) * length(dFdy(vNewPos));\\r\\n    gl_FragColor = vec4(oldArea/newArea*0.2, 1.0, 0.0, 0.0);\\r\\n    \\r\\n    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);\\r\\n\\r\\n    vec3 dir = (uSphereCenter - vNewPos) / uSphereRadius;\\r\\n    vec3 area = cross(dir, refractedLight);\\r\\n    float shadow = dot(area, area);\\r\\n    float dist = dot(dir, -refractedLight);\\r\\n    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);\\r\\n    shadow = clamp(1.0/(1.0+exp(-shadow)), 0.0, 1.0);\\r\\n    shadow = mix(1.0, shadow, clamp(dist*2.0, 0.0, 1.0));\\r\\n    gl_FragColor.g = shadow;\\r\\n\\r\\n    vec2 t = intersectCube(vNewPos, -refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\\r\\n    gl_FragColor.r *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (vNewPos.y - refractedLight.y * t.y - 2.0/12.0)));\\r\\n\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/caustics.frag?");

/***/ }),

/***/ "./src/shader/caustics.vert":
/*!**********************************!*\
  !*** ./src/shader/caustics.vert ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"attribute vec3 aPos;\\r\\nvarying vec3 vOldPos;\\r\\nvarying vec3 vNewPos;\\r\\nvarying vec3 vRay;\\r\\nuniform vec3 uLightDir;\\r\\nuniform sampler2D uWater;\\r\\nconst float IOR_AIR = 1.0;//空气的折射率\\r\\nconst float IOR_WATER = 1.333;//水的折射率\\r\\n  const float poolHeight = 1.0;//水池的高度\\r\\n\\r\\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){\\r\\n    vec3 tMin = (cubeMin - origin) / ray;\\r\\n    vec3 tMax = (cubeMax - origin) / ray;\\r\\n    vec3 t1 = min(tMin, tMax);\\r\\n    vec3 t2 = max(tMin, tMax);\\r\\n    float tNear  = max(max(t1.x, t1.y), t1.z);\\r\\n    float tFar = min(min(t2.x, t2.y), t2.z);\\r\\n    return vec2(tNear, tFar);\\r\\n}\\r\\n\\r\\n\\r\\nvec3 project(vec3 origin , vec3 ray, vec3 refractedLight){\\r\\n    vec2 tcube = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0,1.0));\\r\\n    origin += ray * tcube.y;\\r\\n    float tplane = (-origin.y - 1.0) / refractedLight.y;\\r\\n    return origin + refractedLight *tplane;\\r\\n}\\r\\n\\r\\nvoid main(){\\r\\n    vec4 info = texture2D(uWater, aPos.xy*0.5 + 0.5);\\r\\n    info.ba *= 0.5;\\r\\n    vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a);\\r\\n\\r\\n    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);\\r\\n    vRay = refract(-uLightDir, normal, IOR_AIR/IOR_WATER);\\r\\n    vOldPos = project(aPos.xzy, refractedLight, refractedLight);\\r\\n    vNewPos = project(aPos.xzy+vec3(0.0, info.r, 0.0), vRay, refractedLight);\\r\\n\\r\\n\\r\\n    gl_Position = vec4(0.75*(vNewPos.xz + refractedLight.xz/refractedLight.y), 0.0, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/caustics.vert?");

/***/ }),

/***/ "./src/shader/cube.frag":
/*!******************************!*\
  !*** ./src/shader/cube.frag ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\nuniform sampler2D uTiles;\\r\\nvarying vec3 vPosition;\\r\\nuniform vec3 uSphereCenter;//圆的坐标\\r\\nuniform float uSphereRadius;//圆的半径\\r\\nuniform sampler2D uWater;\\r\\nuniform vec3 uLightDir;\\r\\nconst float poolHeight = 1.0;//水池的高度\\r\\nuniform sampler2D uCaustics;\\r\\nconst float IOR_AIR = 1.0;//空气的折射率\\r\\nconst float IOR_WATER = 1.333;//水的折射率\\r\\nconst vec3 underwaterColor = vec3(0.4, 0.9, 1.0);//水下面的颜色\\r\\n\\r\\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){\\r\\n    vec3 tMin = (cubeMin - origin) / ray;\\r\\n    vec3 tMax = (cubeMax - origin) / ray;\\r\\n    vec3 t1 = min(tMin, tMax);\\r\\n    vec3 t2 = max(tMin, tMax);\\r\\n    float tNear = max(max(t1.x, t1.y), t1.z);\\r\\n    float tFar = min(min(t2.x, t2.y), t2.z);\\r\\n    return vec2(tNear, tFar);\\r\\n}\\r\\n\\r\\n\\r\\n/**获取墙体的颜色*/\\r\\nvec3 getWallColor(vec3 point){\\r\\n    float scale = 0.5;//最终的颜色变得暗点\\r\\n    vec3 wallColor;//墙体的颜色\\r\\n    vec3 noraml;//法线\\r\\n    if(abs(point.x) > 0.999){//最左边和最右边的两个面  point.yz范围[-1,1]  --> ([0.5, 1.5], [0, 1])\\r\\n        wallColor = texture2D(uTiles, point.yz*0.5+vec2(1.0, 0.5)).rgb;\\r\\n        noraml = vec3(-point.x, 0.0, 0.0);\\r\\n    }else if(abs(point.z)>0.999){//z=-1或者-1的    前面两个面  point.yx 范围[-1, 1] --> ([0.5, 1.5], [0, 1])\\r\\n        wallColor = texture2D(uTiles, point.yx*0.5 + vec2(1.0, 0.5)).rgb;\\r\\n        noraml = vec3(0.0, 0.0, -point.z);\\r\\n    }else {//上下两个面  point.xz 范围[-1, 1]  --> ([0, 1], [0, 1])\\r\\n        wallColor = texture2D(uTiles, point.xz * 0.5 + 0.5).rgb;\\r\\n        noraml = vec3(0.0, 1.0, 0.0);\\r\\n    }\\r\\n\\r\\n    scale /= length(point);//池子的遮挡\\r\\n    scale *= 1.0 - 0.9 / pow(length(point - uSphereCenter)/uSphereRadius, 4.0);//球体的遮挡\\r\\n\\r\\n    //焦散\\r\\n    vec3 refractedLight = -refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);//折射光\\r\\n    float diffuse = max(0.0, dot(refractedLight, noraml));\\r\\n    vec4 info = texture2D(uWater, point.xz*0.5+0.5);\\r\\n    if(point.y < info.r){\\r\\n        vec4 caustic = texture2D(uCaustics, 0.75 * (point.xz - point.y* refractedLight.xz/refractedLight.y) * 0.5 + 0.5);\\r\\n        scale += diffuse * caustic.r * 2.0 * caustic.g;\\r\\n    }else{\\r\\n        vec2 t = intersectCube(vPosition, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\\r\\n        diffuse *= 1.0/(1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0) ));\\r\\n        scale += diffuse * 0.5;\\r\\n    }\\r\\n    return wallColor*scale;\\r\\n}\\r\\n\\r\\nvoid main(){\\r\\n    gl_FragColor = vec4(getWallColor(vPosition), 1.0);\\r\\n    vec4 info = texture2D(uWater, vPosition.xz*0.5+0.5);\\r\\n    if(vPosition.y<info.r){\\r\\n        gl_FragColor.rgb *= underwaterColor*1.2;\\r\\n    }\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/cube.frag?");

/***/ }),

/***/ "./src/shader/cube.vert":
/*!******************************!*\
  !*** ./src/shader/cube.vert ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"attribute vec3 aPos;\\r\\nuniform mat4 uMat;\\r\\nconst float poolHeight = 1.0;//水池的高度\\r\\nvarying vec3 vPosition;\\r\\n\\r\\n\\r\\nvoid main(){\\r\\n    vPosition = aPos.xyz;\\r\\n    vPosition.y = ((1.0 - vPosition.y) * (7.0 / 12.0) - 1.0) * poolHeight;\\r\\n    gl_Position = uMat*vec4(vPosition, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/cube.vert?");

/***/ }),

/***/ "./src/shader/sphere.frag":
/*!********************************!*\
  !*** ./src/shader/sphere.frag ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\nuniform vec3 uSphereCenter;//圆的坐标\\r\\nuniform float uSphereRadius;//圆的半径\\r\\nvarying vec3 vPosition;\\r\\nuniform sampler2D uWater;\\r\\nuniform sampler2D uCaustics;\\r\\nconst vec3 underwaterColor = vec3(0.4, 0.9, 1.0);//水下面的颜色\\r\\nconst float IOR_AIR = 1.0;//空气的折射率\\r\\nconst float IOR_WATER = 1.333;//水的折射率\\r\\nuniform vec3 uLightDir;\\r\\nvarying vec2 vSphereUv;//差值后球体的uv坐标\\r\\nuniform sampler2D uSphereImg;//球体的图片\\r\\n\\r\\n/**获取圆的颜色*/\\r\\nvec3 getSphereColor(vec3 point, vec3 color){\\r\\n    // vec3 color = vec3(0.5);\\r\\n    color *= 1.0 - 0.9/pow((1.0 + uSphereRadius - abs(point.x)) / uSphereRadius, 3.0);//1-0.9/pow(1+0.25-abs(x)/0.25, 3)的形状 ╭╮\\r\\n    color *= 1.0 - 0.9/pow((1.0 + uSphereRadius - abs(point.z)) / uSphereRadius, 3.0);\\r\\n    color *= 1.0 - 0.9/pow((point.y + 1.0 + uSphereRadius) / uSphereRadius, 3.0);//1.0 - 0.9/Math.pow((x+ 1.0 + 0.25) / 0.25, 3.0) 的形状 ╭─\\r\\n\\r\\n    //caustics\\r\\n    vec3 sphereNormal = (point - uSphereCenter)/uSphereRadius;\\r\\n    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);\\r\\n    float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;\\r\\n    vec4 info = texture2D(uWater, point.xz*0.5+0.5);\\r\\n    if(point.y < info.r){\\r\\n        vec4 caustic = texture2D(uCaustics, 0.75*(point.xz - point.y * refractedLight.xz/refractedLight.y)*0.5 + 0.5);\\r\\n        diffuse *= caustic.r * 4.0;\\r\\n    }\\r\\n    color += diffuse;\\r\\n\\r\\n    return color;\\r\\n}\\r\\n\\r\\nvoid main(){\\r\\n    vec4 img = texture2D(uSphereImg, vSphereUv);\\r\\n    gl_FragColor = vec4(getSphereColor(vPosition, img.rgb), 1.0);\\r\\n    vec4 info = texture2D(uWater, vPosition.xz*0.5+0.5);\\r\\n    if(vPosition.y < info.r){\\r\\n        gl_FragColor.rgb *= underwaterColor * 1.2;\\r\\n    }\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/sphere.frag?");

/***/ }),

/***/ "./src/shader/sphere.vert":
/*!********************************!*\
  !*** ./src/shader/sphere.vert ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"attribute vec3 aPos;\\r\\nattribute vec2 aSphereUv;//球体的uv坐标\\r\\nvarying vec2 vSphereUv;//差值后球体的uv坐标\\r\\nuniform mat4 uMat;\\r\\nuniform vec3 uSphereCenter;//圆的坐标\\r\\nuniform float uSphereRadius;//圆的半径\\r\\nvarying vec3 vPosition;\\r\\n\\r\\n\\r\\nvoid main(){\\r\\n    vPosition = aPos.xyz*uSphereRadius + uSphereCenter;\\r\\n    vSphereUv = aSphereUv;\\r\\n    gl_Position = uMat*vec4(vPosition, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/sphere.vert?");

/***/ }),

/***/ "./src/shader/waterInfo.vert":
/*!***********************************!*\
  !*** ./src/shader/waterInfo.vert ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"attribute vec3 aPos;//顶点位置\\r\\nvarying vec2 vCoord;//uv坐标\\r\\n/**水面高度信息 的 顶点着色器*/\\r\\nvoid main(){\\r\\n    vCoord = aPos.xy*0.5+0.5;\\r\\n    gl_Position = vec4(aPos.xyz, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/waterInfo.vert?");

/***/ }),

/***/ "./src/shader/waterInfoDrop.frag":
/*!***************************************!*\
  !*** ./src/shader/waterInfoDrop.frag ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\n\\r\\nconst float PI = 3.141592653589793;\\r\\nuniform vec2 uCenter;//波动的中心\\r\\nuniform float uRadius;//波动的半径\\r\\nuniform float uStrength;//波动的强度\\r\\nuniform sampler2D uTexture;//水面信息的纹理图片  r表示高度\\r\\nvarying vec2 vCoord;//纹理坐标\\r\\n\\r\\n/**水面高度信息 给水面添加一个波动 */\\r\\nvoid main(){\\r\\n    vec4 info = texture2D(uTexture, vCoord); \\r\\n\\r\\n    //1-当前坐标距离中心点的距离/半径， 即中心点drop=1,>=半径的drop=0,中间线性  __r/￣center￣\\\\r__    00-1-00\\r\\n    float drop = max(0.0, 1.0-length(uCenter * 0.5 + 0.5 - vCoord)/uRadius );\\r\\n    // 表达式cos(drop*PI) 中drop取值(0 1 0)对应结果->取值范围(1 (-1) 1)  ￣∪￣\\r\\n    // 表达式0.5-cos(drop*PI)*0.5 中取值范围(0  1  0)╭⌒╮\\r\\n    drop = 0.5 - cos(drop*PI) * 0.5;\\r\\n    info.r += drop * uStrength;//将drop值进行缩放uStrength 在加到纹理图像内  获得的高度添加到水面信息r里面\\r\\n    gl_FragColor = info;\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/waterInfoDrop.frag?");

/***/ }),

/***/ "./src/shader/waterInfoNormal.frag":
/*!*****************************************!*\
  !*** ./src/shader/waterInfoNormal.frag ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\n\\r\\nuniform vec2 uSize;//x=1/screenW, y=1/screenH  可以理解为每个像素的大小 x水平， y竖直\\r\\nuniform sampler2D uTexture;//水面信息的纹理 r表示高度\\r\\nvarying vec2 vCoord;//当前的uv坐标\\r\\n\\r\\n/**水面高度信息  生成水面法线的*/\\r\\nvoid main(){\\r\\n    vec4 info = texture2D(uTexture, vCoord);//获取当前水面信息\\r\\n\\r\\n    //xy平面内的向量和yz平面内的向量叉积 的结果必定是xz平面内的向量\\r\\n    /** \\r\\n         ↘\\r\\n        ─╮\\r\\n         ┃\\r\\n        将uSize中的x及对应的y(纹理中r)的差值，放到xy平面内，得到从原点的切线\\r\\n         \\r\\n    */\\r\\n    vec3 dx = vec3(uSize.x, texture2D(uTexture, vec2(vCoord.x+uSize.x, vCoord.y)).r -info.r, 0.0);\\r\\n    //将uSize中y及对应的y(纹理中r)的差值,放到yz平面内，得到从原点的切线\\r\\n    vec3 dy = vec3(0.0, texture2D(uTexture, vec2(vCoord.x, vCoord.y+uSize.y)).r - info.r, uSize.y);\\r\\n    //两个切线的叉积 在xz平面内\\r\\n    info.ba = normalize(cross(dy, dx)).xz;\\r\\n    gl_FragColor = info;\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/waterInfoNormal.frag?");

/***/ }),

/***/ "./src/shader/waterInfoSphere.frag":
/*!*****************************************!*\
  !*** ./src/shader/waterInfoSphere.frag ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\n\\r\\nuniform sampler2D uTexture;//水面信息的纹理\\r\\nvarying vec2 vCoord;//uv坐标\\r\\nuniform vec3 uOldSphereCenter;//旧的圆心坐标\\r\\nuniform vec3 uNewSphereCenter;//新的圆心坐标\\r\\nuniform float uSphereRadius;//圆的半径\\r\\n\\r\\n/**球体的体积*/\\r\\nfloat volumeInSphere(vec3 center){\\r\\n    //当前点到先换算到[-1, 1]坐标内，xz平面内球的中心点的向量\\r\\n    vec3 toCenter = vec3(vCoord.x*2.0-1.0,   0.0,   vCoord.y*2.0-1.0) - center;\\r\\n    //toCenter向量的长度/圆的半径\\r\\n    float t = length(toCenter) / uSphereRadius;\\r\\n    //           ╭───╮\\r\\n    //函数图像  __│   ┃___  在0-1内有值， 其他的时候为0\\r\\n    float dy = exp(-pow(t*1.5, 6.0));//\\r\\n    float ymin = min(0.0, center.y - dy);\\r\\n    float ymax = min(max(0.0, center.y + dy), ymin+2.0*dy);\\r\\n    return (ymax - ymin) * 0.1;\\r\\n}\\r\\n/**水面高度信息  当水中放入球体的效果*/\\r\\nvoid main(){\\r\\n    vec4 info = texture2D(uTexture, vCoord);\\r\\n    //加上老的球的体积\\r\\n    info.r += volumeInSphere(uOldSphereCenter);\\r\\n    //减去现在的体积\\r\\n    info.r -= volumeInSphere(uNewSphereCenter);\\r\\n    gl_FragColor = info;\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/waterInfoSphere.frag?");

/***/ }),

/***/ "./src/shader/waterInfoUpdate.frag":
/*!*****************************************!*\
  !*** ./src/shader/waterInfoUpdate.frag ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\n\\r\\nuniform sampler2D uTexture;//水面信息的纹理 r表示高度  g表示速度\\r\\nuniform vec2 uSize;//x=1/screenW, y=1/screenH  可以理解为每个像素的大小 x水平， y竖直\\r\\nvarying vec2 vCoord;//当前的uv坐标\\r\\n/**水面高度信息更新 */\\r\\nvoid main() {\\r\\n    vec4 info = texture2D(uTexture, vCoord);\\r\\n    vec2 dx = vec2(uSize.x, 0.0);//相邻x方向的点距离\\r\\n    vec2 dy = vec2(0.0, uSize.y);//相邻y方向的点距离\\r\\n    //当前uv周围四个点的高度，取平均\\r\\n    float average = (\\r\\n    texture2D(uTexture, vCoord - dx).r +\\r\\n    texture2D(uTexture, vCoord - dy).r +\\r\\n    texture2D(uTexture, vCoord + dx).r +\\r\\n    texture2D(uTexture, vCoord + dy).r\\r\\n    ) * 0.25;\\r\\n    //更改水面的移动速度，向平均值移动\\r\\n    info.g += (average- info.r)*2.0; \\r\\n    //波浪每次移动衰减一点， 防止波浪一直持续下去\\r\\n    info.g *= 0.995;\\r\\n    //更新波浪的高度\\r\\n    info.r += info.g;\\r\\n\\r\\n    gl_FragColor =info;\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/waterInfoUpdate.frag?");

/***/ }),

/***/ "./src/shader/waterSurface.vert":
/*!**************************************!*\
  !*** ./src/shader/waterSurface.vert ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"attribute vec3 aPos;//水面的顶点坐标\\r\\nuniform mat4 uMat;//mvp矩阵\\r\\nuniform sampler2D uWater;//水面高度信息\\r\\nvarying vec3 vPosition;//水面的高度位置\\r\\n\\r\\n/**渲染的水面*/\\r\\nvoid main(){\\r\\n    //获取水面高度信息\\r\\n    vec4 info = texture2D(uWater, aPos.xy*0.5+0.5);\\r\\n    //获取顶点的xyz位置\\r\\n    vPosition = aPos.xzy;\\r\\n    //将水面高度信息中的 高度r加到顶点坐标y上\\r\\n    vPosition.y += info.r;\\r\\n    \\r\\n    gl_Position = uMat*vec4(vPosition, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/waterSurface.vert?");

/***/ }),

/***/ "./src/shader/waterSurfaceDown.frag":
/*!******************************************!*\
  !*** ./src/shader/waterSurfaceDown.frag ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\nvarying vec3 vPosition;\\r\\nuniform samplerCube uSky;\\r\\nuniform vec3 uEye;\\r\\nuniform sampler2D uWater;\\r\\nconst float IOR_AIR = 1.0;//空气的折射率\\r\\nconst float IOR_WATER = 1.333;//水的折射率\\r\\nconst vec3 underwaterColor = vec3(0.4, 0.9, 1.0);//水下面的颜色\\r\\nuniform sampler2D uTiles;\\r\\nuniform vec3 uLightDir;\\r\\nuniform vec3 uSphereCenter;//圆的坐标\\r\\nuniform float uSphereRadius;//圆的半径\\r\\nuniform sampler2D uCausitcs;\\r\\nconst float poolHeight = 1.0;//水池的高度\\r\\nuniform sampler2D uSphereImg;//球体的图片\\r\\n\\r\\n//判断是否与球体相交\\r\\nfloat intersectSphere(vec3 orgin, vec3 ray, vec3 sphereCenter, float sphereRadius){\\r\\n    vec3 toSphere = orgin - sphereCenter;\\r\\n    float a = dot(ray, ray);\\r\\n    float b = 2.0 * dot(toSphere, ray);\\r\\n    float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;\\r\\n    float discriminant = b*b - 4.0*a*c;//判别式\\r\\n    if(discriminant > 0.0){\\r\\n        float t = (-b - sqrt(discriminant)) / (2.0 * a);\\r\\n        if(t > 0.0)return t;\\r\\n    }\\r\\n    return 1.0e6;\\r\\n}\\r\\n//获取球体的颜色\\r\\nvec3 getSphereColor(vec3 point){\\r\\n    vec3 color = texture2D(uSphereImg, point.xz*0.5+0.5).rgb;\\r\\n    color *= 1.0 - 0.9/ pow((1.0 + uSphereRadius - abs(point.x)) / uSphereRadius, 3.0);\\r\\n    color *= 1.0 - 0.9/ pow( (1.0 + uSphereRadius - abs(point.z)) / uSphereRadius, 3.0 );\\r\\n    color *= 1.0 - 0.9/ pow((point.y + 1.0 + uSphereRadius) / uSphereRadius, 3.0);\\r\\n    //\\r\\n    vec3 sphereNormal = (point - uSphereCenter) / uSphereRadius;\\r\\n    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/ IOR_WATER);\\r\\n    float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;\\r\\n    vec4 info = texture2D(uWater, point.xz * 0.5 + 0.5);\\r\\n    if(point.y < info.r){\\r\\n        vec4 caustic = texture2D(uCausitcs, 0.75 * (point.xz - point.y * refractedLight.xz/refractedLight.y) * 0.5 + 0.5);\\r\\n        diffuse *= caustic.r * 4.0;\\r\\n    }\\r\\n    color += diffuse;\\r\\n    return color;\\r\\n}\\r\\n\\r\\n\\r\\n//\\r\\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){\\r\\n    vec3 tMin = (cubeMin - origin) / ray;\\r\\n    vec3 tMax = (cubeMax - origin) / ray;\\r\\n    vec3 t1 = min(tMin, tMax);\\r\\n    vec3 t2 = max(tMin, tMax);\\r\\n    float tNear = max(max(t1.x, t1.y), t1.z);\\r\\n    float tFar = min(min(t2.x, t2.y), t2.z);\\r\\n    return vec2(tNear, tFar);\\r\\n}\\r\\n\\r\\nvec3 getWallColor(vec3 point){\\r\\n    float scale = 0.5;\\r\\n    vec3 wallColor;\\r\\n    vec3 normal;\\r\\n    if(abs(point.x) > 0.999){\\r\\n        wallColor = texture2D(uTiles, point.yz*0.5+vec2(1.0, 0.5)).rgb;\\r\\n        normal = vec3(-point.x, 0.0, 0.0);\\r\\n    }else if(abs(point.z) > 0.999){\\r\\n        wallColor = texture2D(uTiles, point.yx*0.5 + vec2(1.0, 0.5)).rgb;\\r\\n        normal = vec3(0.0, 0.0, -point.z);\\r\\n    }else{\\r\\n        wallColor = texture2D(uTiles, point.xz*0.5+0.5).rgb;\\r\\n        normal = vec3(0.0, 1.0, 0.0);\\r\\n    }\\r\\n    scale /= length(point);\\r\\n    scale *= 1.0 - 0.9 / pow(length(point - uSphereCenter)/uSphereRadius, 4.0);\\r\\n    //\\r\\n    vec3 refractedLight = -refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);\\r\\n    float diffuse = max(0.0, dot(refractedLight, normal));\\r\\n    vec4 info = texture2D(uWater, point.xz * 0.5 + 0.5);\\r\\n    if(point.y < info.r){\\r\\n        vec4 caustic = texture2D(uCausitcs, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);\\r\\n        scale += diffuse * caustic.r * 2.0 * caustic.g;\\r\\n    }else{\\r\\n        vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\\r\\n        diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0/12.0)));\\r\\n        scale += diffuse * 0.5;\\r\\n    }\\r\\n    return wallColor * scale;\\r\\n}\\r\\n\\r\\n\\r\\nvec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor){\\r\\n    vec3 color;\\r\\n    float q = intersectSphere(origin, ray, uSphereCenter, uSphereRadius);\\r\\n    if(q < 1.0e6){\\r\\n        color = getSphereColor(origin+ray*q);\\r\\n    }else if(ray.y < 0.0){\\r\\n        vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\\r\\n        color = getWallColor(origin + ray * t.y);\\r\\n    }else{\\r\\n        vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0 ,1.0) );\\r\\n        vec3 hit = origin + ray * t.y;\\r\\n        if(hit.y < 2.0 /12.0){\\r\\n            color = getWallColor(hit);\\r\\n        }else{\\r\\n            color = textureCube(uSky, ray).rgb;\\r\\n            color += vec3(pow(max(0.0, dot(uLightDir, ray) ), 5000.0  )) * vec3(10.0, 8.0, 6.0);\\r\\n        }\\r\\n    }\\r\\n    if(ray.y < 0.0) color *= waterColor;\\r\\n    return color;\\r\\n}\\r\\n\\r\\n/**水面下方 */\\r\\nvoid main(){\\r\\n    //将vposition中 xz（水平面）平面内的坐标转化为[0-1]uv坐标\\r\\n    vec2 coord = vPosition.xz*0.5+0.5;\\r\\n    //将平面内对应的水面信息取出来\\r\\n    vec4 info = texture2D(uWater, coord);\\r\\n    //让水面看起来更尖\\r\\n    \\r\\n    for(int i=0; i<5; i++){\\r\\n        coord += info.ba * 0.005;\\r\\n        info = texture2D(uWater, coord);\\r\\n    }\\r\\n    vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a  );\\r\\n    vec3 incomingRay = normalize(vPosition - uEye);\\r\\n    normal = -normal;\\r\\n\\r\\n    vec3 reflectedRay = reflect(incomingRay, normal);//发射光\\r\\n    vec3 refractedRay = refract(incomingRay, normal, IOR_WATER/IOR_AIR);//折射光\\r\\n\\r\\n    float fresnel = mix(0.5, 1.0, pow(1.0-dot(normal , -incomingRay), 3.0));\\r\\n\\r\\n    vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, underwaterColor);\\r\\n    vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, vec3(1.0)) * vec3(0.8, 1.0, 1.1);\\r\\n\\r\\n    gl_FragColor = vec4(mix(reflectedColor, refractedColor, (1.0-fresnel)*length(refractedRay)), 1.0);\\r\\n    // gl_FragColor = info;//vec4(0.25, 1.0, 1.25, 1.0);\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/waterSurfaceDown.frag?");

/***/ }),

/***/ "./src/shader/waterSurfaceUp.frag":
/*!****************************************!*\
  !*** ./src/shader/waterSurfaceUp.frag ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"precision highp float;\\r\\nuniform samplerCube uSky;\\r\\nvarying vec3 vPosition;\\r\\nuniform vec3 uEye;\\r\\nuniform sampler2D uWater;\\r\\nconst float IOR_AIR = 1.0;//空气的折射率\\r\\nconst float IOR_WATER = 1.333;//水的折射率\\r\\nconst vec3 abovewaterColor = vec3(0.25, 1.0, 1.25);//水上面的颜色\\r\\nuniform sampler2D uTiles;\\r\\nuniform vec3 uLightDir;\\r\\nuniform vec3 uSphereCenter;//圆的坐标\\r\\nuniform float uSphereRadius;//圆的半径\\r\\nuniform sampler2D uCausitcs;\\r\\nconst float poolHeight = 1.0;//水池的高度\\r\\nuniform sampler2D uSphereImg;//球体的图片\\r\\n\\r\\n\\r\\n//判断是否与球体相交\\r\\nfloat intersectSphere(vec3 orgin, vec3 ray, vec3 sphereCenter, float sphereRadius){\\r\\n    vec3 toSphere = orgin - sphereCenter;\\r\\n    float a = dot(ray, ray);\\r\\n    float b = 2.0 * dot(toSphere, ray);\\r\\n    float c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;\\r\\n    float discriminant = b*b - 4.0*a*c;//判别式\\r\\n    if(discriminant > 0.0){\\r\\n        float t = (-b - sqrt(discriminant)) / (2.0 * a);\\r\\n        if(t > 0.0)return t;\\r\\n    }\\r\\n    return 1.0e6;\\r\\n}\\r\\n//获取球体的颜色\\r\\nvec3 getSphereColor(vec3 point){\\r\\n    vec3 color = texture2D(uSphereImg, point.xz*0.5+0.5).rgb;//vec3(0.5);\\r\\n    color *= 1.0 - 0.9/ pow((1.0 + uSphereRadius - abs(point.x)) / uSphereRadius, 3.0);\\r\\n    color *= 1.0 - 0.9/ pow( (1.0 + uSphereRadius - abs(point.z)) / uSphereRadius, 3.0 );\\r\\n    color *= 1.0 - 0.9/ pow((point.y + 1.0 + uSphereRadius) / uSphereRadius, 3.0);\\r\\n    //\\r\\n    vec3 sphereNormal = (point - uSphereCenter) / uSphereRadius;\\r\\n    vec3 refractedLight = refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/ IOR_WATER);\\r\\n    float diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;\\r\\n    vec4 info = texture2D(uWater, point.xz * 0.5 + 0.5);\\r\\n    if(point.y < info.r){\\r\\n        vec4 caustic = texture2D(uCausitcs, 0.75 * (point.xz - point.y * refractedLight.xz/refractedLight.y) * 0.5 + 0.5);\\r\\n        diffuse *= caustic.r * 4.0;\\r\\n    }\\r\\n    color += diffuse;\\r\\n    return color;\\r\\n}\\r\\n\\r\\n\\r\\n//\\r\\nvec2 intersectCube(vec3 origin, vec3 ray, vec3 cubeMin, vec3 cubeMax){\\r\\n    vec3 tMin = (cubeMin - origin) / ray;\\r\\n    vec3 tMax = (cubeMax - origin) / ray;\\r\\n    vec3 t1 = min(tMin, tMax);\\r\\n    vec3 t2 = max(tMin, tMax);\\r\\n    float tNear = max(max(t1.x, t1.y), t1.z);\\r\\n    float tFar = min(min(t2.x, t2.y), t2.z);\\r\\n    return vec2(tNear, tFar);\\r\\n}\\r\\n\\r\\nvec3 getWallColor(vec3 point){\\r\\n    float scale = 0.5;\\r\\n    vec3 wallColor;\\r\\n    vec3 normal;\\r\\n    if(abs(point.x) > 0.999){\\r\\n        wallColor = texture2D(uTiles, point.yz*0.5+vec2(1.0, 0.5)).rgb;\\r\\n        normal = vec3(-point.x, 0.0, 0.0);\\r\\n    }else if(abs(point.z) > 0.999){\\r\\n        wallColor = texture2D(uTiles, point.yx*0.5 + vec2(1.0, 0.5)).rgb;\\r\\n        normal = vec3(0.0, 0.0, -point.z);\\r\\n    }else{\\r\\n        wallColor = texture2D(uTiles, point.xz*0.5+0.5).rgb;\\r\\n        normal = vec3(0.0, 1.0, 0.0);\\r\\n    }\\r\\n    scale /= length(point);\\r\\n    scale *= 1.0 - 0.9 / pow(length(point - uSphereCenter)/uSphereRadius, 4.0);\\r\\n    //\\r\\n    vec3 refractedLight = -refract(-uLightDir, vec3(0.0, 1.0, 0.0), IOR_AIR/IOR_WATER);\\r\\n    float diffuse = max(0.0, dot(refractedLight, normal));\\r\\n    vec4 info = texture2D(uWater, point.xz * 0.5 + 0.5);\\r\\n    if(point.y < info.r){\\r\\n        vec4 caustic = texture2D(uCausitcs, 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5);\\r\\n        scale += diffuse * caustic.r * 2.0 * caustic.g;\\r\\n    }else{\\r\\n        vec2 t = intersectCube(point, refractedLight, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\\r\\n        diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0/12.0)));\\r\\n        scale += diffuse * 0.5;\\r\\n    }\\r\\n    return wallColor * scale;\\r\\n}\\r\\n\\r\\n\\r\\nvec3 getSurfaceRayColor(vec3 origin, vec3 ray, vec3 waterColor){\\r\\n    vec3 color;\\r\\n    float q = intersectSphere(origin, ray, uSphereCenter, uSphereRadius);\\r\\n    if(q < 1.0e6){//球体颜色\\r\\n        color = getSphereColor(origin+ray*q);\\r\\n    }else if(ray.y < 0.0){//墙的颜色\\r\\n        vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0, 1.0));\\r\\n        color = getWallColor(origin + ray * t.y);\\r\\n    }else{//水面颜色\\r\\n        vec2 t = intersectCube(origin, ray, vec3(-1.0, -poolHeight, -1.0), vec3(1.0, 2.0 ,1.0) );\\r\\n        vec3 hit = origin + ray * t.y;\\r\\n        if(hit.y < 2.0 /12.0){//墙的颜色\\r\\n            color = getWallColor(hit);\\r\\n        }else{\\r\\n            color = textureCube(uSky, ray).rgb;\\r\\n            color += vec3(pow(max(0.0, dot(uLightDir, ray) ), 5000.0  )) * vec3(10.0, 8.0, 6.0);\\r\\n        }\\r\\n    }\\r\\n    if(ray.y < 0.0) color *= waterColor;\\r\\n    return color;\\r\\n}\\r\\n\\r\\nvoid main(){\\r\\n    vec2 coord = vPosition.xz*0.5+0.5;\\r\\n    vec4 info = texture2D(uWater, coord);\\r\\n    for(int i=0; i<5; i++){\\r\\n        coord += info.ba * 0.005;\\r\\n        info = texture2D(uWater, coord);\\r\\n    }\\r\\n    vec3 normal = vec3(info.b, sqrt(1.0 - dot(info.ba, info.ba)), info.a  );\\r\\n    vec3 incomingRay = normalize(vPosition - uEye);\\r\\n    //水面上方\\r\\n\\r\\n    vec3 reflectedRay = reflect(incomingRay, normal);//发射光\\r\\n    vec3 refractedRay = refract(incomingRay, normal, IOR_AIR/IOR_WATER);//折射光\\r\\n\\r\\n    float fresnel = mix(0.25, 1.0, pow(1.0-dot(normal , -incomingRay), 3.0));\\r\\n\\r\\n    vec3 reflectedColor = getSurfaceRayColor(vPosition, reflectedRay, abovewaterColor);\\r\\n    vec3 refractedColor = getSurfaceRayColor(vPosition, refractedRay, abovewaterColor);\\r\\n\\r\\n    gl_FragColor = vec4(mix(reflectedColor, refractedColor, fresnel), 1.0);\\r\\n}\");\n\n//# sourceURL=webpack://testwarte/./src/shader/waterSurfaceUp.frag?");

/***/ }),

/***/ "./src/css/test.css":
/*!**************************!*\
  !*** ./src/css/test.css ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./test.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/test.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!./test.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/test.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./test.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/test.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_test_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://testwarte/./src/css/test.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://testwarte/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://testwarte/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://testwarte/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://testwarte/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://testwarte/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://testwarte/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/GLArray */ \"./src/utils/GLArray.ts\");\n/* harmony import */ var _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/WebGL */ \"./src/webgl/WebGL.ts\");\n/* harmony import */ var _shader_cube_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader/cube.frag */ \"./src/shader/cube.frag\");\n/* harmony import */ var _shader_cube_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shader/cube.vert */ \"./src/shader/cube.vert\");\n/* harmony import */ var _shader_caustics_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shader/caustics.frag */ \"./src/shader/caustics.frag\");\n/* harmony import */ var _shader_caustics_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shader/caustics.vert */ \"./src/shader/caustics.vert\");\n/* harmony import */ var _shader_sphere_frag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shader/sphere.frag */ \"./src/shader/sphere.frag\");\n/* harmony import */ var _shader_sphere_vert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shader/sphere.vert */ \"./src/shader/sphere.vert\");\n/* harmony import */ var _shader_waterSurfaceDown_frag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shader/waterSurfaceDown.frag */ \"./src/shader/waterSurfaceDown.frag\");\n/* harmony import */ var _shader_waterSurfaceUp_frag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shader/waterSurfaceUp.frag */ \"./src/shader/waterSurfaceUp.frag\");\n/* harmony import */ var _shader_waterSurface_vert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shader/waterSurface.vert */ \"./src/shader/waterSurface.vert\");\n/* harmony import */ var _shader_waterInfoDrop_frag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shader/waterInfoDrop.frag */ \"./src/shader/waterInfoDrop.frag\");\n/* harmony import */ var _shader_waterInfoUpdate_frag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shader/waterInfoUpdate.frag */ \"./src/shader/waterInfoUpdate.frag\");\n/* harmony import */ var _shader_waterInfoNormal_frag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shader/waterInfoNormal.frag */ \"./src/shader/waterInfoNormal.frag\");\n/* harmony import */ var _shader_waterInfoSphere_frag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shader/waterInfoSphere.frag */ \"./src/shader/waterInfoSphere.frag\");\n/* harmony import */ var _shader_waterInfo_vert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shader/waterInfo.vert */ \"./src/shader/waterInfo.vert\");\n/* harmony import */ var _res_xneg_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./res/xneg.jpg */ \"./src/res/xneg.jpg\");\n/* harmony import */ var _res_zneg_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./res/zneg.jpg */ \"./src/res/zneg.jpg\");\n/* harmony import */ var _res_xpos_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./res/xpos.jpg */ \"./src/res/xpos.jpg\");\n/* harmony import */ var _res_ypos_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./res/ypos.jpg */ \"./src/res/ypos.jpg\");\n/* harmony import */ var _res_zpos_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./res/zpos.jpg */ \"./src/res/zpos.jpg\");\n/* harmony import */ var _res_earth_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./res/earth.png */ \"./src/res/earth.png\");\n/* harmony import */ var _res_tiles_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./res/tiles.jpg */ \"./src/res/tiles.jpg\");\n/* harmony import */ var _utils_ComUtils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/ComUtils */ \"./src/utils/ComUtils.ts\");\n/* harmony import */ var _webgl_CubeMap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./webgl/CubeMap */ \"./src/webgl/CubeMap.ts\");\n/* harmony import */ var _swaming_MartixContext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./swaming/MartixContext */ \"./src/swaming/MartixContext.ts\");\n/* harmony import */ var _swaming_mesh_PlaneMesh__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./swaming/mesh/PlaneMesh */ \"./src/swaming/mesh/PlaneMesh.ts\");\n/* harmony import */ var _swaming_mesh_SphereMesh__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./swaming/mesh/SphereMesh */ \"./src/swaming/mesh/SphereMesh.ts\");\n/* harmony import */ var _swaming_mesh_CubeMesh__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./swaming/mesh/CubeMesh */ \"./src/swaming/mesh/CubeMesh.ts\");\n/* harmony import */ var _math_Vec3__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./math/Vec3 */ \"./src/math/Vec3.ts\");\n/* harmony import */ var _webgl_Texture__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./webgl/Texture */ \"./src/webgl/Texture.ts\");\n/* harmony import */ var _math_Vec2__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./math/Vec2 */ \"./src/math/Vec2.ts\");\n/* harmony import */ var _swaming_Raytracer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./swaming/Raytracer */ \"./src/swaming/Raytracer.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar App = /** @class */ (function () {\r\n    function App(mainCanvas, width, height, ratio) {\r\n        this._programs = [];\r\n        this._programsFrameBuff = [];\r\n        this._images = {};\r\n        this.ratio = 1;\r\n        this._angleX = -45;\r\n        this._angleY = 45;\r\n        this._oldTouchX = 0;\r\n        this._oldTouchY = 0;\r\n        var s = this;\r\n        s._mainCanvas = mainCanvas;\r\n        s.ratio = ratio || 1;\r\n        s._gl = s._mainCanvas.getContext(\"webgl\");\r\n        s.matrixContext = new _swaming_MartixContext__WEBPACK_IMPORTED_MODULE_25__.MatrixContext(s._gl);\r\n        s.resize(width, height);\r\n    }\r\n    App.prototype.statr = function () {\r\n        var _this = this;\r\n        _utils_ComUtils__WEBPACK_IMPORTED_MODULE_23__.ComUtils.loadImages([\r\n            { name: \"xpos\", src: _res_xpos_jpg__WEBPACK_IMPORTED_MODULE_18__[\"default\"] }, { name: \"ypos\", src: _res_ypos_jpg__WEBPACK_IMPORTED_MODULE_19__[\"default\"] }, { name: \"zpos\", src: _res_zpos_jpg__WEBPACK_IMPORTED_MODULE_20__[\"default\"] },\r\n            { name: \"xneg\", src: _res_xneg_jpg__WEBPACK_IMPORTED_MODULE_16__[\"default\"] }, { name: \"zneg\", src: _res_zneg_jpg__WEBPACK_IMPORTED_MODULE_17__[\"default\"] }, { name: \"earth\", src: _res_earth_png__WEBPACK_IMPORTED_MODULE_21__[\"default\"] },\r\n            { name: \"tiles\", src: _res_tiles_jpg__WEBPACK_IMPORTED_MODULE_22__[\"default\"] }\r\n        ]).then(function (imgs) {\r\n            for (var i = 0; i < imgs.length; i++)\r\n                _this._images[imgs[i].name] = imgs[i].img;\r\n            _this.init();\r\n        });\r\n    };\r\n    App.prototype.init = function () {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        gl.clearColor(0, 0, 0, 1);\r\n        s.matrixContext.status = 1 /* Project */;\r\n        s.matrixContext.indentity();\r\n        s.matrixContext.perspective(45, s.width / s.height, 0.01, 100);\r\n        s.matrixContext.status = 0 /* ModelView */;\r\n        s.matrixContext.indentity();\r\n        s.matrixContext.translate(0, 0, -4);\r\n        s.matrixContext.rotate(-s._angleX, 1, 0, 0);\r\n        s.matrixContext.rotate(-s._angleY, 0, 1, 0);\r\n        s.matrixContext.translate(0, 0.5, 0);\r\n        //全局变量\r\n        s._sphereCenter = new _math_Vec3__WEBPACK_IMPORTED_MODULE_29__.Vec3(-0.4, -0.75, 0.2);\r\n        s._sphereOldCenter = s._sphereCenter.clone();\r\n        s._sphereRadius = 0.25;\r\n        s._eye = new _math_Vec3__WEBPACK_IMPORTED_MODULE_29__.Vec3(0, 0, 1);\r\n        var lightDir = new _math_Vec3__WEBPACK_IMPORTED_MODULE_29__.Vec3(2.0, 2.0, -1.0).unit();\r\n        s._mvpMatrix = s.matrixContext.projectionMatrix.multiply(s.matrixContext.modelViewMatrix);\r\n        s._mvpMatrix.transpose(); //需要转置下 \r\n        //球体\r\n        var sphereMesh = new _swaming_mesh_SphereMesh__WEBPACK_IMPORTED_MODULE_27__.SphereMesh(30);\r\n        //水的信息（包含位置，速度， 法向量）waterInfo\r\n        var waterInfoPlan = new _swaming_mesh_PlaneMesh__WEBPACK_IMPORTED_MODULE_26__.PlaneMesh();\r\n        var hasDerivatives = !!gl.getExtension(\"OES_standard_derivatives\");\r\n        //Texure的Float 和 LINEAR 要设置下，否则显示效果有问题\r\n        var filter = !!gl.getExtension('OES_texture_float_linear') ? 9729 /* LINEAR */ : 9728 /* NEAREST */;\r\n        var waterInfoTexure1 = new _webgl_Texture__WEBPACK_IMPORTED_MODULE_30__.Texture(s._gl, 256, 256, { type: 5126 /* FLOAT */, filter: filter });\r\n        var waterInfoTexure2 = new _webgl_Texture__WEBPACK_IMPORTED_MODULE_30__.Texture(s._gl, 256, 256, { type: 5126 /* FLOAT */, filter: filter });\r\n        var causticTexure = new _webgl_Texture__WEBPACK_IMPORTED_MODULE_30__.Texture(gl, 1024, 1024);\r\n        var waterSurfaceMesh = new _swaming_mesh_PlaneMesh__WEBPACK_IMPORTED_MODULE_26__.PlaneMesh(100, 100);\r\n        var tiles = new _webgl_Texture__WEBPACK_IMPORTED_MODULE_30__.Texture(gl, _res_tiles_jpg__WEBPACK_IMPORTED_MODULE_22__[\"default\"], { wrap: 10497 /* REPEAT */, filterMig: 9729 /* LINEAR */, format: 6407 /* RGB */ });\r\n        var cube = new _webgl_CubeMap__WEBPACK_IMPORTED_MODULE_24__.CubeMap(gl, s._images[\"xpos\"], s._images[\"xneg\"], s._images[\"ypos\"], s._images[\"ypos\"], s._images[\"zpos\"], s._images[\"zneg\"], {\r\n            filter: 9729 /* LINEAR */, wrap: 33071 /* CLAMP_TO_EDGE */, format: 6407 /* RGB */\r\n        });\r\n        /** */\r\n        //添加水面的波纹\r\n        s._waterDropData = {\r\n            aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterInfoPlan.vertext),\r\n            indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterInfoPlan.indexs),\r\n            uTexture: waterInfoTexure1,\r\n            uStrength: 0.01,\r\n            uRadius: 0.03,\r\n            uCenter: new _math_Vec2__WEBPACK_IMPORTED_MODULE_31__.Vec2(0, 0), //x, z\r\n        };\r\n        s._waterDropProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_waterInfo_vert__WEBPACK_IMPORTED_MODULE_15__[\"default\"], _shader_waterInfoDrop_frag__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\r\n        s._waterDropProgram.resize(s.width, s.height);\r\n        s._waterDropProgram.bindData(s._waterDropData);\r\n        s._waterDropProgram.enableUseFrameBuffer(waterInfoTexure2);\r\n        s._waterDropProgram.onRenderFun(function () {\r\n            waterInfoTexure1.swapTexture(waterInfoTexure2);\r\n        });\r\n        for (var i = 0; i < 20; i++) {\r\n            s.addDrop(Math.random() * 2 - 1, Math.random() * 2 - 1, 0.03, 0.01);\r\n        }\r\n        //更新水面的信息\r\n        var waterUpdateData = {\r\n            aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterInfoPlan.vertext),\r\n            uTexture: waterInfoTexure1,\r\n            uSize: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray([1 / waterInfoTexure1.width, 1 / waterInfoTexure1.height]),\r\n            indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterInfoPlan.indexs)\r\n        };\r\n        var waterUpdateProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_waterInfo_vert__WEBPACK_IMPORTED_MODULE_15__[\"default\"], _shader_waterInfoUpdate_frag__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\r\n        waterUpdateProgram.resize(s.width, s.height);\r\n        waterUpdateProgram.bindData(waterUpdateData);\r\n        waterUpdateProgram.enableUseFrameBuffer(waterInfoTexure2);\r\n        waterUpdateProgram.onRenderFun(function () {\r\n            waterInfoTexure1.swapTexture(waterInfoTexure2);\r\n        });\r\n        s._programsFrameBuff.push(waterUpdateProgram);\r\n        //更新水面的法线\r\n        var waterNormalData = {\r\n            aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterInfoPlan.vertext),\r\n            uTexture: waterInfoTexure1,\r\n            uSize: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray([1 / waterInfoTexure1.width, 1 / waterInfoTexure1.height]),\r\n            indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterInfoPlan.indexs)\r\n        };\r\n        var waterNormalProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_waterInfo_vert__WEBPACK_IMPORTED_MODULE_15__[\"default\"], _shader_waterInfoNormal_frag__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\r\n        waterNormalProgram.resize(s.width, s.height);\r\n        waterNormalProgram.bindData(waterNormalData);\r\n        waterNormalProgram.enableUseFrameBuffer(waterInfoTexure2);\r\n        waterNormalProgram.onRenderFun(function () {\r\n            waterInfoTexure1.swapTexture(waterInfoTexure2);\r\n        });\r\n        s._programsFrameBuff.push(waterNormalProgram);\r\n        //更新水面中球体的信息\r\n        var waterSphereData = {\r\n            aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterInfoPlan.vertext),\r\n            indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterInfoPlan.indexs),\r\n            uTexture: waterInfoTexure1,\r\n            uOldSphereCenter: s._sphereOldCenter,\r\n            uNewSphereCenter: s._sphereCenter,\r\n            uSphereRadius: s._sphereRadius, //圆的半径\r\n        };\r\n        var waterSphereProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_waterInfo_vert__WEBPACK_IMPORTED_MODULE_15__[\"default\"], _shader_waterInfoSphere_frag__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\r\n        waterSphereProgram.resize(s.width, s.height);\r\n        waterSphereProgram.bindData(waterSphereData);\r\n        waterSphereProgram.enableUseFrameBuffer(waterInfoTexure2);\r\n        waterSphereProgram.onRenderFun(function () {\r\n            waterInfoTexure1.swapTexture(waterInfoTexure2);\r\n            s._sphereOldCenter.copy(s._sphereCenter);\r\n        });\r\n        s._programsFrameBuff.push(waterSphereProgram);\r\n        //焦散\r\n        if (hasDerivatives) {\r\n            var causticData = {\r\n                aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterSurfaceMesh.vertext),\r\n                indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterSurfaceMesh.indexs),\r\n                uWater: waterInfoTexure1,\r\n                uLightDir: lightDir,\r\n                uSphereCenter: s._sphereCenter,\r\n                uSphereRadius: s._sphereRadius,\r\n                clearn: [16384 /* COLOR_BUFFER_BIT */]\r\n            };\r\n            var causticsProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_caustics_vert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _shader_caustics_frag__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n            causticsProgram.resize(s.width, s.height);\r\n            causticsProgram.bindData(causticData);\r\n            causticsProgram.enableUseFrameBuffer(causticTexure);\r\n            s._programsFrameBuff.push(causticsProgram);\r\n        }\r\n        //test 测试显示\r\n        // let waterTestlData:ShaderParamData = {\r\n        //     aPos:new GLArray(waterSurfaceMesh.vertext),\r\n        //     indexs:new GLArray(waterSurfaceMesh.indexs),\r\n        //     uTexture:causticTexure,\r\n        //     uMat:s._mvpMatrix,\r\n        //     uSize:new GLArray([1/causticTexure.width, 1/causticTexure.height]),\r\n        //     // drawType:DrawType.LINES\r\n        // }\r\n        // let waterTestlProgram = new WebGL(s._gl, testVert, testFrag);\r\n        // waterTestlProgram.resize(s.width, s.height);\r\n        // waterTestlProgram.bindData(waterTestlData);\r\n        // s._programs.push(waterTestlProgram)\r\n        //水池\r\n        var cubeMesh = new _swaming_mesh_CubeMesh__WEBPACK_IMPORTED_MODULE_28__.CubeMesh();\r\n        cubeMesh.indexs.splice(12, 6); //去掉顶部的顶点索引\r\n        var cubeData = {\r\n            aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(cubeMesh.vertext),\r\n            uMat: s._mvpMatrix,\r\n            uSphereCenter: s._sphereCenter,\r\n            uSphereRadius: s._sphereRadius,\r\n            uWater: waterInfoTexure1,\r\n            uTiles: tiles,\r\n            uLightDir: lightDir,\r\n            uCaustics: causticTexure,\r\n            indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(cubeMesh.indexs),\r\n            enable: [2884 /* CULL_FACE */]\r\n        };\r\n        var cubeProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_cube_vert__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _shader_cube_frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n        cubeProgram.resize(s.width, s.height);\r\n        cubeProgram.bindData(cubeData);\r\n        s._programs.push(cubeProgram);\r\n        //水平面  上方\r\n        var waterSurfaceUpData = {\r\n            aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterSurfaceMesh.vertext),\r\n            uMat: s._mvpMatrix,\r\n            uWater: waterInfoTexure1,\r\n            aSphereUv: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(sphereMesh.uv),\r\n            uSphereImg: _res_earth_png__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\r\n            uEye: s._eye,\r\n            uLightDir: lightDir,\r\n            uTiles: tiles,\r\n            uCausitcs: causticTexure,\r\n            uSphereCenter: s._sphereCenter,\r\n            uSphereRadius: s._sphereRadius,\r\n            uSky: cube,\r\n            indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterSurfaceMesh.indexs),\r\n            enable: [2884 /* CULL_FACE */],\r\n            cullFace: 1028 /* FRONT */,\r\n        };\r\n        var waterSurfaceUpProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_waterSurface_vert__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _shader_waterSurfaceUp_frag__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\r\n        waterSurfaceUpProgram.resize(s.width, s.height);\r\n        waterSurfaceUpProgram.bindData(waterSurfaceUpData);\r\n        s._programs.push(waterSurfaceUpProgram);\r\n        //水平面  下方\r\n        var waterSurfaceDownData = {\r\n            aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterSurfaceMesh.vertext),\r\n            uMat: s._mvpMatrix,\r\n            uWater: waterInfoTexure1,\r\n            uSphereImg: _res_earth_png__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\r\n            uEye: s._eye,\r\n            uLightDir: lightDir,\r\n            uTiles: tiles,\r\n            uCausitcs: causticTexure,\r\n            uSphereCenter: s._sphereCenter,\r\n            uSphereRadius: s._sphereRadius,\r\n            uSky: cube,\r\n            indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(waterSurfaceMesh.indexs),\r\n            enable: [2884 /* CULL_FACE */],\r\n            cullFace: 1029 /* BACK */,\r\n        };\r\n        var waterSurfaceDownProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_waterSurface_vert__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _shader_waterSurfaceDown_frag__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n        waterSurfaceDownProgram.resize(s.width, s.height);\r\n        waterSurfaceDownProgram.bindData(waterSurfaceDownData);\r\n        s._programs.push(waterSurfaceDownProgram);\r\n        //球体\r\n        var sphereData = {\r\n            aPos: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(sphereMesh.vertext),\r\n            indexs: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(sphereMesh.indexs),\r\n            aSphereUv: new _utils_GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray(sphereMesh.uv),\r\n            uSphereImg: _res_earth_png__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\r\n            uMat: s._mvpMatrix,\r\n            uSphereCenter: s._sphereCenter,\r\n            uSphereRadius: s._sphereRadius,\r\n            uLightDir: lightDir,\r\n            uCaustics: causticTexure,\r\n            uWater: waterInfoTexure1,\r\n            drawType: 5 /* TRIANGLE_STRIP */,\r\n        };\r\n        var sphereProgram = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_1__.WebGL(s._gl, _shader_sphere_vert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _shader_sphere_frag__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\n        sphereProgram.resize(s.width, s.height);\r\n        sphereProgram.bindData(sphereData);\r\n        s._programs.push(sphereProgram);\r\n        var tracer = new _swaming_Raytracer__WEBPACK_IMPORTED_MODULE_32__.Raytracer(s._gl, s.matrixContext);\r\n        s._eye.copy(tracer.eye);\r\n        s.update();\r\n    };\r\n    /**给水面添加一个波动 */\r\n    App.prototype.addDrop = function (x, y, streng, radius) {\r\n        var s = this;\r\n        var pos = s._waterDropData.uCenter;\r\n        pos.set(0, x);\r\n        pos.set(1, y);\r\n        s._waterDropData.uStrength = streng;\r\n        s._waterDropData.uRadius = radius;\r\n        s._waterDropProgram.render();\r\n    };\r\n    /**更新界面 */\r\n    App.prototype.update = function () {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        for (var i = 0; i < s._programsFrameBuff.length; i++) {\r\n            s._programsFrameBuff[i].render();\r\n        }\r\n        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\r\n        gl.enable(gl.DEPTH_TEST);\r\n        s.matrixContext.indentity();\r\n        s.matrixContext.translate(0, 0, -4);\r\n        s.matrixContext.rotate(-s._angleX, 1, 0, 0);\r\n        s.matrixContext.rotate(-s._angleY, 0, 1, 0);\r\n        s.matrixContext.translate(0, 0.5, 0);\r\n        var mvp = s.matrixContext.projectionMatrix.multiply(s.matrixContext.modelViewMatrix);\r\n        mvp.transpose(); //需要转置下 \r\n        s._mvpMatrix.copy(mvp);\r\n        // console.log(\"angleX: \"+s._angleX+\" angleY: \"+s._angleY);\r\n        // console.log(mvp.toString())\r\n        for (var i = 0; i < s._programs.length; i++) {\r\n            // if(s._programs[i].renderData[\"uMat\"])s._programs[i].renderData[\"uMat\"] = mvp;\r\n            s._programs[i].render();\r\n        }\r\n        gl.disable(gl.DEPTH_TEST);\r\n        requestAnimationFrame(this.update.bind(s));\r\n    };\r\n    App.prototype.resize = function (width, height) {\r\n        var s = this;\r\n        // width = 800;\r\n        // height = 800;\r\n        // width =height = Math.min(width, height);//等比例缩放\r\n        var styleWidth = width / s.ratio;\r\n        var styleHeight = height / s.ratio;\r\n        // if(s.ratio>1){\r\n        styleWidth = width;\r\n        styleHeight = height;\r\n        width = width * s.ratio;\r\n        height = height * s.ratio;\r\n        // }\r\n        s.width = width; //width; \r\n        s.height = height; //height;\r\n        s._mainCanvas.width = s.width;\r\n        s._mainCanvas.height = s.height;\r\n        s._mainCanvas.style.width = styleWidth + \"px\";\r\n        s._mainCanvas.style.height = styleHeight + \"px\";\r\n        s._gl.viewport(0, 0, s.width / s.ratio, s.height / s.ratio);\r\n        for (var i = 0; i < s._programs.length; i++) {\r\n            s._programs[i].resize(s.width, s.height);\r\n        }\r\n    };\r\n    App.prototype.onTouchStart = function (mouseX, mouseY) {\r\n        var s = this;\r\n        ;\r\n        s._oldTouchX = mouseX;\r\n        s._oldTouchY = mouseY;\r\n        var tracer = new _swaming_Raytracer__WEBPACK_IMPORTED_MODULE_32__.Raytracer(s._gl, s.matrixContext);\r\n        s._eye.copy(tracer.eye);\r\n        var ray = tracer.getRayForPixel(mouseX * s.ratio, mouseY * s.ratio);\r\n        var pointOnPlane = tracer.eye.clone().add(ray.clone().multiply(-tracer.eye.get(1) / ray.get(1)));\r\n        var sphereHitTest = _swaming_Raytracer__WEBPACK_IMPORTED_MODULE_32__.Raytracer.hitTestSphere(tracer.eye, ray, s._sphereCenter, s._sphereRadius);\r\n        if (sphereHitTest) {\r\n            s._touchTarget = 3 /* Sphere */;\r\n            s._prevHit = sphereHitTest.hit;\r\n            s._planeNormal = tracer.getRayForPixel(s.width / 2, s.height / 2).negative();\r\n            console.log(\"点击球\");\r\n        }\r\n        else if (Math.abs(pointOnPlane.get(0)) < 1 && Math.abs(pointOnPlane.get(2)) < 1) {\r\n            s._touchTarget = 2 /* Water */;\r\n            s.onToucheMove(mouseX, mouseY);\r\n            console.log(\"点击水面\");\r\n        }\r\n        else {\r\n            console.log(\"点击cube\");\r\n            s._touchTarget = 1 /* Cube */;\r\n        }\r\n    };\r\n    App.prototype.onToucheMove = function (mouseX, mouseY) {\r\n        var s = this;\r\n        var tracer;\r\n        var ray;\r\n        switch (s._touchTarget) {\r\n            case 2 /* Water */:\r\n                tracer = new _swaming_Raytracer__WEBPACK_IMPORTED_MODULE_32__.Raytracer(s._gl, s.matrixContext);\r\n                ray = tracer.getRayForPixel(mouseX * s.ratio, mouseY * s.ratio);\r\n                var pointOnPlane = tracer.eye.clone().add(ray.clone().multiply(-tracer.eye.get(1) / ray.get(1)));\r\n                s.addDrop(pointOnPlane.get(0), pointOnPlane.get(2), 0.03, 0.01);\r\n                break;\r\n            case 3 /* Sphere */:\r\n                tracer = new _swaming_Raytracer__WEBPACK_IMPORTED_MODULE_32__.Raytracer(s._gl, s.matrixContext);\r\n                ray = tracer.getRayForPixel(mouseX * s.ratio, mouseY * s.ratio);\r\n                var t = -s._planeNormal.clone().dot(tracer.eye.clone().subtract(s._prevHit)) / s._planeNormal.clone().dot(ray);\r\n                var nextHit = tracer.eye.clone().add(ray.clone().multiply(t));\r\n                s._sphereCenter.add(nextHit.clone().subtract(s._prevHit));\r\n                s._sphereCenter.set(0, Math.max(s._sphereRadius - 1, Math.min(1 - s._sphereRadius, s._sphereCenter.get(0))));\r\n                s._sphereCenter.set(1, Math.max(s._sphereRadius - 1, Math.min(10, s._sphereCenter.get(1))));\r\n                s._sphereCenter.set(2, Math.max(s._sphereRadius - 1, Math.min(1 - s._sphereRadius, s._sphereCenter.get(2))));\r\n                console.log(s._sphereCenter + \"\");\r\n                s._prevHit = nextHit;\r\n                break;\r\n            case 1 /* Cube */:\r\n                tracer = new _swaming_Raytracer__WEBPACK_IMPORTED_MODULE_32__.Raytracer(s._gl, s.matrixContext);\r\n                s._eye.copy(tracer.eye);\r\n                s._angleY -= mouseX - s._oldTouchX;\r\n                s._angleX -= mouseY - s._oldTouchY;\r\n                s._angleX = Math.max(-89.999, Math.min(89.9999, s._angleX));\r\n                break;\r\n        }\r\n        s._oldTouchX = mouseX;\r\n        s._oldTouchY = mouseY;\r\n    };\r\n    App.prototype.onToucheEnd = function () {\r\n        var s = this;\r\n        var tracer = new _swaming_Raytracer__WEBPACK_IMPORTED_MODULE_32__.Raytracer(s._gl, s.matrixContext);\r\n        s._eye.copy(tracer.eye);\r\n        s._touchTarget = 0 /* None */;\r\n    };\r\n    return App;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/App.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app)\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.ts\");\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/test.css */ \"./src/css/test.css\");\n\r\n\r\nvar app;\r\nwindow.onload = function () {\r\n    var canvs = document.getElementById(\"webgl\");\r\n    app = new _App__WEBPACK_IMPORTED_MODULE_0__.App(canvs, window.innerWidth, window.innerHeight, window.devicePixelRatio);\r\n    app.statr();\r\n};\r\nfunction debounce(callFun, waitTime) {\r\n    var timer = null;\r\n    return function () {\r\n        if (timer != null) {\r\n            clearTimeout(timer);\r\n        }\r\n        timer = setTimeout(callFun, waitTime);\r\n    };\r\n}\r\nfunction resize() {\r\n    if (app)\r\n        app.resize(window.innerWidth, window.innerHeight);\r\n}\r\nwindow.onresize = debounce(resize, 100);\r\n//手机上的touch事件\r\ndocument.ontouchstart = function (e) {\r\n    e.preventDefault();\r\n    e.stopImmediatePropagation();\r\n    if (app && e.touches.length > 0)\r\n        app.onTouchStart(e.touches[0].pageX, e.touches[0].pageY);\r\n};\r\ndocument.ontouchmove = function (e) {\r\n    e.preventDefault();\r\n    e.stopImmediatePropagation();\r\n    if (app && e.touches.length > 0)\r\n        app.onToucheMove(e.touches[0].pageX, e.touches[0].pageY);\r\n};\r\ndocument.ontouchend = function (e) {\r\n    e.preventDefault();\r\n    e.stopImmediatePropagation();\r\n    if (app && e.touches.length > 0)\r\n        app.onToucheEnd();\r\n};\r\n//网页上的event\r\ndocument.onmouseup = function (e) {\r\n    if (app)\r\n        app.onToucheEnd();\r\n};\r\ndocument.onmousemove = function (e) {\r\n    if (app)\r\n        app.onToucheMove(e.pageX, e.pageY);\r\n};\r\ndocument.onmousedown = function (e) {\r\n    e.preventDefault();\r\n    if (app)\r\n        app.onTouchStart(e.pageX, e.pageY);\r\n};\r\n\n\n//# sourceURL=webpack://testwarte/./src/Main.ts?");

/***/ }),

/***/ "./src/math/Matrix.ts":
/*!****************************!*\
  !*** ./src/math/Matrix.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Matrix\": () => (/* binding */ Matrix)\n/* harmony export */ });\n/* harmony import */ var _utils_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Log */ \"./src/utils/Log.ts\");\n/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec */ \"./src/math/Vec.ts\");\n\r\n\r\nvar Matrix = /** @class */ (function () {\r\n    function Matrix(size) {\r\n        this._size = 0;\r\n        this._data = [];\r\n        this._size = size;\r\n        this.identity();\r\n    }\r\n    /**\r\n     * 重置矩阵， 对角线为1， 其他为0\r\n     */\r\n    Matrix.prototype.identity = function () {\r\n        var s = this;\r\n        var idx = 0;\r\n        for (var row = 0; row < s._size; row++) {\r\n            for (var col = 0; col < s._size; col++) {\r\n                if (row == col) {\r\n                    s._data[idx] = 1;\r\n                }\r\n                else {\r\n                    s._data[idx] = 0;\r\n                }\r\n                idx++;\r\n            }\r\n        }\r\n        return s;\r\n    };\r\n    /**\r\n     * 矩阵转置\r\n     * 行和列互换\r\n     */\r\n    Matrix.prototype.transpose = function () {\r\n        var s = this;\r\n        var data = s._data;\r\n        var idx1;\r\n        var idx2;\r\n        var temp;\r\n        for (var row = 0; row < s._size; row++) {\r\n            for (var col = row + 1; col < s._size; col++) {\r\n                idx1 = row * s._size + col;\r\n                idx2 = col * s._size + row;\r\n                temp = data[idx1];\r\n                data[idx1] = data[idx2];\r\n                data[idx2] = temp;\r\n            }\r\n        }\r\n        return s;\r\n    };\r\n    /**\r\n     * 矩阵相乘\r\n     * @param matrix\r\n     */\r\n    Matrix.prototype.multiply = function (matrix, result) {\r\n        var s = this;\r\n        result = result || Matrix.get(s._size);\r\n        var left = s.data;\r\n        var right = matrix.data;\r\n        var idxLeft;\r\n        var value = 0;\r\n        var resultIdx = 0;\r\n        for (var row = 0; row < s._size; row++) {\r\n            idxLeft = row * s._size;\r\n            for (var col = 0; col < s._size; col++) {\r\n                value = 0;\r\n                for (var m = 0; m < s._size; m++) {\r\n                    value += left[idxLeft + m] * right[col + s._size * m];\r\n                }\r\n                result.data[resultIdx] = value;\r\n                resultIdx++;\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    /**\r\n     * 将点转换   vec2 = Mat*vec 并将vec2的最后一行化为1即向量的w为1\r\n     * @param vec\r\n     * @returns\r\n     */\r\n    Matrix.prototype.transformPoint = function (vec) {\r\n        var s = this;\r\n        if (s.size - 1 != vec.size) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"矩阵与向量不同size 不能相乘 matrix.size:\" + s.size + \" vec.size:\" + vec.size + \"(需要vec的size:\" + (s.size - 1) + \")\");\r\n            return;\r\n        }\r\n        var result = _Vec__WEBPACK_IMPORTED_MODULE_1__.Vec.get(s.size - 1);\r\n        var idx = 0;\r\n        for (var i = 0; i < s._size; i++) {\r\n            var vecValue = 0;\r\n            for (var j = 0; j < s._size; j++) {\r\n                if (j == s._size - 1) {\r\n                    vecValue += s._data[idx];\r\n                }\r\n                else {\r\n                    vecValue += s._data[idx] * vec.get(j);\r\n                }\r\n                idx++;\r\n            }\r\n            if (i == s._size - 1) { //最后一行\r\n                result.divide(vecValue);\r\n            }\r\n            else {\r\n                result.set(i, vecValue);\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    /**\r\n     * 转换一个向量  向量的w=0\r\n     * @param vec\r\n     */\r\n    Matrix.prototype.transformVector = function (vec) {\r\n        var s = this;\r\n        if (s.size != vec.size) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"矩阵与向量不同size 不能相乘 matrix.size:\" + s.size + \" vec.size:\" + vec.size);\r\n            return;\r\n        }\r\n        var result = _Vec__WEBPACK_IMPORTED_MODULE_1__.Vec.get(s.size);\r\n        var idx = 0;\r\n        for (var i = 0; i < s._size; i++) {\r\n            if (i == s._size - 1) { //最后一行为0\r\n                result.set(i, 0);\r\n            }\r\n            else {\r\n                var vecValue = 0;\r\n                for (var j = 0; j < s._size; j++) {\r\n                    vecValue += s._data[idx] * vec.get(j);\r\n                    idx++;\r\n                }\r\n                result.set(i, vecValue);\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    /**\r\n     * 求矩阵的逆\r\n     */\r\n    Matrix.prototype.invert = function (result) {\r\n        var s = this;\r\n        result = result || Matrix.get(s.size);\r\n        var adjointMat = s.adjoint(result);\r\n        var det = s.det(s._data, s._size);\r\n        var idx = 0;\r\n        for (var row = 0; row < s._size; row++) {\r\n            for (var col = 0; col < s._size; col++) {\r\n                result.data[idx] = adjointMat.data[idx] / det;\r\n                idx++;\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    /**测试用，后面要删掉 */\r\n    Matrix.prototype.test = function () {\r\n        var s = this;\r\n        return s.adjoint();\r\n    };\r\n    /**求行列式的值 */\r\n    Matrix.prototype.det = function (data, size) {\r\n        if (size > 3) {\r\n            var result = 0;\r\n            var tempArr = [];\r\n            //取第0行的col列计算行列式的值\r\n            for (var col = 0; col < size; col++) {\r\n                tempArr.length = 0;\r\n                var idx = 0;\r\n                for (var i = 0; i < data.length; i++) {\r\n                    if (i % size == col || Math.floor(i / size) == 0)\r\n                        continue;\r\n                    tempArr[idx] = data[i];\r\n                    idx++;\r\n                }\r\n                result += data[col] * Math.pow(-1, col) * this.det(tempArr, size - 1);\r\n            }\r\n            return result;\r\n        }\r\n        else if (size == 3) {\r\n            return data[0] * data[4] * data[8]\r\n                + data[1] * data[5] * data[6]\r\n                + data[2] * data[3] * data[7]\r\n                - data[2] * data[4] * data[6]\r\n                - data[0] * data[5] * data[7]\r\n                - data[1] * data[3] * data[8];\r\n        }\r\n        else if (size == 2) {\r\n            return data[0] * data[3] - data[1] * data[2];\r\n        }\r\n        else if (size == 1) {\r\n            return data[0];\r\n        }\r\n        return 0;\r\n    };\r\n    /**\r\n     * 伴随矩阵\r\n     */\r\n    Matrix.prototype.adjoint = function (result) {\r\n        var s = this;\r\n        result = result || Matrix.get(s._size);\r\n        if (result.size != result.size) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"计算伴随矩阵是 保存结果的矩阵大小不一致\");\r\n            return;\r\n        }\r\n        for (var row = 0; row < s._size; row++) {\r\n            for (var col = 0; col < s._size; col++) {\r\n                var tempArr = [];\r\n                for (var i = 0; i < s._data.length; i++) {\r\n                    if (i % s._size == col || Math.floor(i / s._size) == row)\r\n                        continue;\r\n                    tempArr.push(s._data[i]);\r\n                }\r\n                result.data[col * s._size + row] = Math.pow(-1, row + col) * this.det(tempArr, s._size - 1);\r\n            }\r\n        }\r\n        return result;\r\n    };\r\n    Matrix.prototype.copy = function (mat) {\r\n        var s = this;\r\n        if (s.size != mat.size) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"计算伴随矩阵是 保存结果的矩阵大小不一致\");\r\n            return;\r\n        }\r\n        for (var i = 0; i < s._data.length; i++) {\r\n            s._data[i] = mat.data[i];\r\n        }\r\n        return s;\r\n    };\r\n    /**\r\n     * 设置矩阵中的数据\r\n     * @param row 索引从1开始\r\n     * @param col 索引从1开始\r\n     * @param value\r\n     * @returns\r\n     */\r\n    Matrix.prototype.set = function (row, col, value) {\r\n        var s = this;\r\n        if (row > s._size || col > s._size)\r\n            return;\r\n        var idx = (row - 1) * s._size + (col - 1);\r\n        this._data[idx] = value;\r\n    };\r\n    /**\r\n     * 获取矩阵中的数据\r\n     * @param row 索引从1开始\r\n     * @param col 索引从1开始\r\n     * @returns\r\n     */\r\n    Matrix.prototype.get = function (row, col) {\r\n        var s = this;\r\n        if (row > s._size || col > s._size)\r\n            return;\r\n        var idx = (row - 1) * s._size + (col - 1);\r\n        return this._data[idx];\r\n    };\r\n    /**\r\n     * 将矩阵转换成字符串的形式\r\n     * @returns\r\n     */\r\n    Matrix.prototype.toString = function () {\r\n        var s = this;\r\n        var str = \"\";\r\n        var fillLen = 0; //非最后一行的最长长度\r\n        var lastLine = 0; //最后一行的最长长度\r\n        var col = 0;\r\n        for (var i = 0; i < s._data.length; i++) {\r\n            var strLen = (s._data[i] + \"\").length;\r\n            if (i % s._size - 1)\r\n                lastLine = Math.max(lastLine, strLen);\r\n            else\r\n                fillLen = Math.max(fillLen, strLen);\r\n        }\r\n        fillLen += 1;\r\n        for (var i = 0; i < s._data.length; i++) {\r\n            col = i % s._size;\r\n            if (col == 0) {\r\n                str += \"|\" + s.fillStr(s._data[i], fillLen);\r\n            }\r\n            else if (col == s._size - 1) {\r\n                str += s.fillStr(s._data[i], lastLine) + \"|\";\r\n                if (i != s._data.length - 1)\r\n                    str += \"\\n\";\r\n            }\r\n            else {\r\n                str += s.fillStr(s._data[i], fillLen);\r\n            }\r\n        }\r\n        return str;\r\n    };\r\n    /**用空格填充文本长度 */\r\n    Matrix.prototype.fillStr = function (str, size) {\r\n        str = str + \"\";\r\n        for (var i = str.length; i < size; i++) {\r\n            str += \" \";\r\n        }\r\n        return str;\r\n    };\r\n    Object.defineProperty(Matrix.prototype, \"data\", {\r\n        /**矩阵的原始数据 */\r\n        get: function () {\r\n            return this._data;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Matrix.prototype, \"size\", {\r\n        /**矩阵的大小 */\r\n        get: function () {\r\n            return this._size;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * 获取一个矩阵\r\n     * @param size\r\n     * @returns\r\n     */\r\n    Matrix.get = function (size) {\r\n        return new Matrix._matrixDic[size];\r\n    };\r\n    Matrix.regist = function (size, matCls) {\r\n        Matrix._matrixDic[size] = matCls;\r\n    };\r\n    Matrix._matrixDic = {};\r\n    return Matrix;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/math/Matrix.ts?");

/***/ }),

/***/ "./src/math/Matrix4.ts":
/*!*****************************!*\
  !*** ./src/math/Matrix4.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Matrix4\": () => (/* binding */ Matrix4)\n/* harmony export */ });\n/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ \"./src/math/Matrix.ts\");\n/* harmony import */ var _Vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec3 */ \"./src/math/Vec3.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Matrix4 = /** @class */ (function (_super) {\r\n    __extends(Matrix4, _super);\r\n    function Matrix4() {\r\n        return _super.call(this, 4) || this;\r\n    }\r\n    /**\r\n     * 透视投影\r\n     * @param fov 透视角 (角度0-360)\r\n     * @param aspect 宽/高  宽高比\r\n     * @param near 近界面z值\r\n     * @param far 远截面z值\r\n     * @param result 返回结果的matrix 如果为空则用新的\r\n     */\r\n    Matrix4.prototype.perspective = function (fov, aspect, near, far, result) {\r\n        var s = this;\r\n        result = result || new Matrix4();\r\n        var y = Math.tan(fov * Math.PI / 360) * near; //tan(θ/2)*n;\r\n        var x = y * aspect; //aspet = w/h\r\n        var left = -x;\r\n        var right = x;\r\n        var top = y;\r\n        var bottom = -y;\r\n        result.data[0] = 2 * near / (right - left);\r\n        result.data[1] = 0;\r\n        result.data[2] = (right + left) / (right - left);\r\n        result.data[3] = 0;\r\n        result.data[4] = 0;\r\n        result.data[5] = 2 * near / (top - bottom);\r\n        result.data[6] = (top + bottom) / (top - bottom);\r\n        result.data[7] = 0;\r\n        result.data[8] = 0;\r\n        result.data[9] = 0;\r\n        result.data[10] = -(far + near) / (far - near);\r\n        result.data[11] = -2 * far * near / (far - near);\r\n        result.data[12] = 0;\r\n        result.data[13] = 0;\r\n        result.data[14] = -1;\r\n        result.data[15] = 0;\r\n        return result;\r\n    };\r\n    Matrix4.prototype.ortho = function (left, right, bottom, top, near, far, result) {\r\n        result = result || new Matrix4();\r\n        result.data[0] = 2 / (right - left);\r\n        result.data[1] = 0;\r\n        result.data[2] = 0;\r\n        result.data[3] = -(right + left) / (right - left);\r\n        result.data[4] = 0;\r\n        result.data[5] = 2 / (top - bottom);\r\n        result.data[6] = 0;\r\n        result.data[7] = -(top + bottom) / (top - bottom);\r\n        result.data[8] = 0;\r\n        result.data[9] = 0;\r\n        result.data[10] = -2 / (far - near);\r\n        result.data[11] = -(far + near) / (far - near);\r\n        result.data[12] = 0;\r\n        result.data[13] = 0;\r\n        result.data[14] = 0;\r\n        result.data[15] = 1;\r\n        return result;\r\n    };\r\n    Matrix4.prototype.scale = function (scaleX, scaleY, scaleZ) {\r\n        var s = this;\r\n        s.identity();\r\n        if (scaleX != undefined)\r\n            s._data[0] = scaleX;\r\n        if (scaleY != undefined)\r\n            s._data[5] = scaleY;\r\n        if (scaleZ != undefined)\r\n            s._data[10] = scaleZ;\r\n        return s;\r\n    };\r\n    /**移动 */\r\n    Matrix4.prototype.translate = function (x, y, z) {\r\n        var s = this;\r\n        s.identity();\r\n        if (x != undefined)\r\n            s._data[3] = x;\r\n        if (y != undefined)\r\n            s._data[7] = y;\r\n        if (z != undefined)\r\n            s._data[11] = z;\r\n        return s;\r\n    };\r\n    /**\r\n     * 绕着fromX, fromY, fromZ 旋转多少度\r\n     * 将原来的矩阵重置掉\r\n     * @param angle 旋转的角度，0-360\r\n     * @param fromX\r\n     * @param fromY\r\n     * @param fromZ\r\n     */\r\n    Matrix4.prototype.roate = function (angle, fromX, fromY, fromZ, result) {\r\n        var s = this;\r\n        result = result || new Matrix4();\r\n        s.identity();\r\n        var dis = Math.sqrt(fromX * fromX + fromY * fromY + fromZ * fromZ);\r\n        angle = angle * Math.PI / 180; //转换成弧度\r\n        var x = fromX / dis;\r\n        var y = fromY / dis;\r\n        var z = fromZ / dis;\r\n        var cos = Math.cos(angle);\r\n        var sin = Math.sin(angle);\r\n        var t = 1 - cos;\r\n        result.data[0] = x * x * t + cos;\r\n        result.data[1] = x * y * t - z * sin;\r\n        result.data[2] = x * z * t + y * sin;\r\n        result.data[3] = 0;\r\n        result.data[4] = y * x * t + z * sin;\r\n        result.data[5] = y * y * t + cos;\r\n        result.data[6] = y * z * t - x * sin;\r\n        result.data[7] = 0;\r\n        result.data[8] = z * x * t - y * sin;\r\n        result.data[9] = z * y * t + x * sin;\r\n        result.data[10] = z * z * t + cos;\r\n        result.data[11] = 0;\r\n        result.data[12] = 0;\r\n        result.data[13] = 0;\r\n        result.data[14] = 0;\r\n        result.data[15] = 1;\r\n        return s;\r\n    };\r\n    /**\r\n     * 观察矩阵 ex,ey,ez 眼睛的位置， cx,cy,cz中心点的位置， ux,uy,uz向上的方向\r\n     * @param ex\r\n     * @param ey\r\n     * @param ez\r\n     * @param cx\r\n     * @param cy\r\n     * @param cz\r\n     * @param ux\r\n     * @param uy\r\n     * @param uz\r\n     */\r\n    Matrix4.prototype.lookAt = function (ex, ey, ez, cx, cy, cz, ux, uy, uz) {\r\n        var ts = this;\r\n        var e = new _Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3(ex, ey, ez);\r\n        var c = new _Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3(cx, cy, cz);\r\n        var u = new _Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3(ux, uy, uz);\r\n        var f = e.subtract(c).unit();\r\n        var s = u.cross(f).unit();\r\n        var t = f.cross(s).unit();\r\n        ts._data[0] = s.data[0];\r\n        ts._data[1] = s.data[1];\r\n        ts._data[2] = s.data[2];\r\n        ts._data[3] = -s.dot(e);\r\n        ts._data[4] = t.data[0];\r\n        ts._data[5] = t.data[1];\r\n        ts._data[6] = t.data[2];\r\n        ts._data[7] = -t.dot(e);\r\n        ts._data[8] = f.data[0];\r\n        ts._data[9] = f.data[1];\r\n        ts._data[10] = f.data[2];\r\n        ts._data[11] = -f.dot(e);\r\n        ts._data[12] = 0;\r\n        ts._data[13] = 0;\r\n        ts._data[14] = 0;\r\n        ts._data[15] = 1;\r\n        return ts;\r\n    };\r\n    return Matrix4;\r\n}(_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix));\r\n\r\n_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix.regist(4, Matrix4);\r\n\n\n//# sourceURL=webpack://testwarte/./src/math/Matrix4.ts?");

/***/ }),

/***/ "./src/math/Vec.ts":
/*!*************************!*\
  !*** ./src/math/Vec.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vec\": () => (/* binding */ Vec)\n/* harmony export */ });\n/* harmony import */ var _utils_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Log */ \"./src/utils/Log.ts\");\n\r\nvar Vec = /** @class */ (function () {\r\n    function Vec(size) {\r\n        this._size = 0;\r\n        this._data = [];\r\n        this.key = 0;\r\n        this._size = size;\r\n        this.key = Vec.KEY;\r\n        Vec.KEY++;\r\n    }\r\n    /**\r\n     * 加上负号\r\n     */\r\n    Vec.prototype.negative = function () {\r\n        var s = this;\r\n        for (var i = 0; i < s._size; i++) {\r\n            s._data[i] = -s._data[i];\r\n        }\r\n        return s;\r\n    };\r\n    /**\r\n     * 向量相加\r\n     * @param vec\r\n     */\r\n    Vec.prototype.add = function (vec) {\r\n        var s = this;\r\n        if (typeof vec == \"number\") {\r\n            for (var i = 0; i < s._size; i++) {\r\n                s._data[i] += vec;\r\n            }\r\n        }\r\n        else {\r\n            if (vec.size != s._size) {\r\n                _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"不同大小的向量不能相互运算\");\r\n                return;\r\n            }\r\n            for (var i = 0; i < s._size; i++) {\r\n                s._data[i] += vec.data[i];\r\n            }\r\n        }\r\n        return s;\r\n    };\r\n    /**\r\n     * 向量相减\r\n     * @param vec\r\n     */\r\n    Vec.prototype.subtract = function (vec) {\r\n        var s = this;\r\n        if (typeof vec == \"number\") {\r\n            for (var i = 0; i < s._size; i++) {\r\n                s._data[i] -= vec;\r\n            }\r\n        }\r\n        else {\r\n            if (vec.size != s._size) {\r\n                _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"不同大小的向量不能相互运算\");\r\n                return;\r\n            }\r\n            for (var i = 0; i < s._size; i++) {\r\n                s._data[i] -= vec.data[i];\r\n            }\r\n        }\r\n        return s;\r\n    };\r\n    /**\r\n     * 向量相乘\r\n     * @param vec\r\n     * @returns\r\n     */\r\n    Vec.prototype.multiply = function (vec) {\r\n        var s = this;\r\n        if (typeof vec == \"number\") {\r\n            for (var i = 0; i < s._size; i++) {\r\n                s._data[i] *= vec;\r\n            }\r\n        }\r\n        else {\r\n            if (vec.size != s._size) {\r\n                _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"不同大小的向量不能相互运算\");\r\n                return;\r\n            }\r\n            for (var i = 0; i < s._size; i++) {\r\n                s._data[i] *= vec.data[i];\r\n            }\r\n        }\r\n        return s;\r\n    };\r\n    /**\r\n     * 向量除以某个值或者某个同size的向量\r\n     * @param vec\r\n     */\r\n    Vec.prototype.divide = function (vec) {\r\n        var s = this;\r\n        if (typeof vec == \"number\") {\r\n            for (var i = 0; i < s._size; i++) {\r\n                s._data[i] = s._data[i] / vec;\r\n            }\r\n        }\r\n        else {\r\n            if (vec.size != s._size) {\r\n                _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"两个不同的向量不能相除 \");\r\n                return;\r\n            }\r\n            for (var i = 0; i < s._size; i++) {\r\n                s._data[i] = s._data[i] / vec.get(i);\r\n            }\r\n        }\r\n        return s;\r\n    };\r\n    /**\r\n     * 判断两个向量是否相等\r\n     * @param vec\r\n     * @returns\r\n     */\r\n    Vec.prototype.equals = function (vec) {\r\n        var s = this;\r\n        if (vec.size != s._size) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"两个不同的向量不能相除 \");\r\n            return;\r\n        }\r\n        for (var i = 0; i < s._size; i++) {\r\n            if (s._data[i] != vec.data[i])\r\n                return false;\r\n        }\r\n        return true;\r\n    };\r\n    /**\r\n     * 点乘\r\n     * @param vec\r\n     */\r\n    Vec.prototype.dot = function (vec) {\r\n        var s = this;\r\n        if (vec.size != s._size) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"两个不同的向量不能相除 \");\r\n            return;\r\n        }\r\n        var result = 0;\r\n        for (var i = 0; i < s._size; i++) {\r\n            result += s._data[i] * vec.data[i];\r\n        }\r\n        return result;\r\n    };\r\n    /**向量的长度 */\r\n    Vec.prototype.length = function () {\r\n        var s = this;\r\n        var result = 0;\r\n        for (var i = 0; i < s._size; i++) {\r\n            result += s._data[i] * s._data[i];\r\n        }\r\n        return Math.sqrt(result);\r\n    };\r\n    /**向量归一化 */\r\n    Vec.prototype.unit = function () {\r\n        var s = this;\r\n        return s.divide(s.length());\r\n    };\r\n    /**向量中最小的一个值 */\r\n    Vec.prototype.min = function () {\r\n        var s = this;\r\n        var result = s._data[0];\r\n        for (var i = 1; i < s._size; i++) {\r\n            if (result > s._data[i])\r\n                result = s._data[i];\r\n        }\r\n        return result;\r\n    };\r\n    /**向量中最大的一个值 */\r\n    Vec.prototype.max = function () {\r\n        var s = this;\r\n        var result = s._data[0];\r\n        for (var i = 1; i < s._size; i++) {\r\n            if (result < s._data[i])\r\n                result = s._data[i];\r\n        }\r\n        return result;\r\n    };\r\n    /**克隆一个vec */\r\n    Vec.prototype.clone = function () {\r\n        var s = this;\r\n        var result = Vec.get(s._size);\r\n        for (var i = 0; i < s._size; i++)\r\n            result.data[i] = s._data[i];\r\n        return result;\r\n    };\r\n    /**拷贝一个vec */\r\n    Vec.prototype.copy = function (vec) {\r\n        var s = this;\r\n        if (vec.size != s._size) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"两个不同的向量不能相除 \");\r\n            return;\r\n        }\r\n        for (var i = 0; i < s._size; i++)\r\n            s._data[i] = vec.data[i];\r\n        return s;\r\n    };\r\n    Vec.prototype.set = function (index, value) {\r\n        var s = this;\r\n        if (index >= s._size)\r\n            return;\r\n        s._data[index] = value;\r\n    };\r\n    Vec.prototype.get = function (index) {\r\n        var s = this;\r\n        if (index >= s._size)\r\n            return null;\r\n        return s._data[index];\r\n    };\r\n    Object.defineProperty(Vec.prototype, \"data\", {\r\n        /**向量的原始数据 */\r\n        get: function () {\r\n            return this._data;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Vec.prototype, \"size\", {\r\n        /**向量的大小 */\r\n        get: function () {\r\n            return this._size;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Vec.prototype.toString = function () {\r\n        var str = \"[\";\r\n        str += this._data.join(\" , \");\r\n        str += \"]\";\r\n        return str;\r\n    };\r\n    /**\r\n     * 获取对应维度的向量\r\n     * @param size\r\n     * @returns\r\n     */\r\n    Vec.get = function (size) {\r\n        var cls = Vec._vecDic[size];\r\n        return new cls();\r\n    };\r\n    Vec.regist = function (size, cls) {\r\n        Vec._vecDic[size] = cls;\r\n    };\r\n    Vec.lerp = function (a, b, fraction) {\r\n        return b.clone().subtract(a).multiply(fraction).add(a);\r\n    };\r\n    Vec.min = function (a, b) {\r\n        var size = a.size;\r\n        var result = Vec.get(size);\r\n        for (var i = 0; i < size; i++) {\r\n            result.data[i] = Math.min(a.data[i], b.data[i]);\r\n        }\r\n        return result;\r\n    };\r\n    Vec.max = function (a, b) {\r\n        var size = a.size;\r\n        var result = Vec.get(size);\r\n        for (var i = 0; i < size; i++) {\r\n            result.data[i] = Math.max(a.data[i], b.data[i]);\r\n        }\r\n        return result;\r\n    };\r\n    Vec.KEY = 0;\r\n    Vec._vecDic = {};\r\n    return Vec;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/math/Vec.ts?");

/***/ }),

/***/ "./src/math/Vec2.ts":
/*!**************************!*\
  !*** ./src/math/Vec2.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vec2\": () => (/* binding */ Vec2)\n/* harmony export */ });\n/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ \"./src/math/Vec.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Vec2 = /** @class */ (function (_super) {\r\n    __extends(Vec2, _super);\r\n    function Vec2(x, y) {\r\n        var _this = _super.call(this, 2) || this;\r\n        var s = _this;\r\n        s._data[0] = x;\r\n        s._data[1] = y;\r\n        return _this;\r\n    }\r\n    return Vec2;\r\n}(_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec));\r\n\r\n_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec.regist(2, Vec2);\r\n\n\n//# sourceURL=webpack://testwarte/./src/math/Vec2.ts?");

/***/ }),

/***/ "./src/math/Vec3.ts":
/*!**************************!*\
  !*** ./src/math/Vec3.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vec3\": () => (/* binding */ Vec3)\n/* harmony export */ });\n/* harmony import */ var _Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec */ \"./src/math/Vec.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Vec3 = /** @class */ (function (_super) {\r\n    __extends(Vec3, _super);\r\n    function Vec3(x, y, z) {\r\n        var _this = _super.call(this, 3) || this;\r\n        var s = _this;\r\n        s._data[0] = x;\r\n        s._data[1] = y;\r\n        s._data[2] = z;\r\n        return _this;\r\n    }\r\n    /**\r\n     * 叉乘\r\n     * @param vec\r\n     * @returns\r\n     */\r\n    Vec3.prototype.cross = function (vec, result) {\r\n        var s = this;\r\n        result = result || new Vec3(0, 0, 0);\r\n        result.data[0] = s._data[1] * vec.data[2] - s._data[2] * vec.data[1];\r\n        result.data[1] = s._data[2] * vec.data[0] - s._data[0] * vec.data[2];\r\n        result.data[2] = s._data[0] * vec.data[1] - s._data[1] * vec.data[0];\r\n        return result;\r\n    };\r\n    return Vec3;\r\n}(_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec));\r\n\r\n_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec.regist(3, Vec3);\r\n\n\n//# sourceURL=webpack://testwarte/./src/math/Vec3.ts?");

/***/ }),

/***/ "./src/swaming/HitTest.ts":
/*!********************************!*\
  !*** ./src/swaming/HitTest.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HitTest\": () => (/* binding */ HitTest)\n/* harmony export */ });\nvar HitTest = /** @class */ (function () {\r\n    function HitTest(t, hit, normal) {\r\n        var s = this;\r\n        if (t == undefined)\r\n            t = Number.MAX_VALUE;\r\n        s.hit = hit;\r\n        s.normal = normal;\r\n    }\r\n    HitTest.prototype.mergeWith = function (other) {\r\n        var s = this;\r\n        if (other.t > 0 && other.t < s.t) {\r\n            s.t = other.t;\r\n            s.hit = other.hit;\r\n            s.normal = other.normal;\r\n        }\r\n    };\r\n    return HitTest;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/swaming/HitTest.ts?");

/***/ }),

/***/ "./src/swaming/MartixContext.ts":
/*!**************************************!*\
  !*** ./src/swaming/MartixContext.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MatrixContext\": () => (/* binding */ MatrixContext)\n/* harmony export */ });\n/* harmony import */ var _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Matrix4 */ \"./src/math/Matrix4.ts\");\n/* harmony import */ var _math_Vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3 */ \"./src/math/Vec3.ts\");\n/* harmony import */ var _utils_Log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Log */ \"./src/utils/Log.ts\");\n\r\n\r\n\r\n/**\r\n * 矩阵的状态机\r\n */\r\nvar MatrixContext = /** @class */ (function () {\r\n    function MatrixContext(gl) {\r\n        var s = this;\r\n        s._gl = gl;\r\n        s._tempMatrix = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\r\n        s._resultMatrix = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\r\n        s.modelViewMatrix = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\r\n        s.projectionMatrix = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\r\n        s.status = 0 /* ModelView */;\r\n    }\r\n    /**\r\n     * 初始化矩阵\r\n     */\r\n    MatrixContext.prototype.indentity = function () {\r\n        var s = this;\r\n        s._curMatrix.identity();\r\n    };\r\n    /**矩阵相乘 */\r\n    MatrixContext.prototype.mult = function (matrix) {\r\n        var s = this;\r\n        s._curMatrix.copy(s._curMatrix.multiply(matrix, s._resultMatrix));\r\n    };\r\n    MatrixContext.prototype.perspective = function (fov, aspect, near, far) {\r\n        var s = this;\r\n        var mat = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\r\n        mat.perspective(fov, aspect, near, far, s._tempMatrix);\r\n        s.mult(s._tempMatrix);\r\n    };\r\n    MatrixContext.prototype.translate = function (x, y, z) {\r\n        var s = this;\r\n        s._tempMatrix.identity();\r\n        s._tempMatrix.translate(x, y, z);\r\n        s.mult(s._tempMatrix);\r\n    };\r\n    MatrixContext.prototype.rotate = function (angle, x, y, z) {\r\n        var s = this;\r\n        var mat = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\r\n        mat.roate(angle, x, y, z, s._tempMatrix);\r\n        s.mult(s._tempMatrix);\r\n    };\r\n    MatrixContext.prototype.lookAt = function (ex, ey, ez, cx, cy, cz, ux, uy, uz) {\r\n        var s = this;\r\n        var mat = new _math_Matrix4__WEBPACK_IMPORTED_MODULE_0__.Matrix4();\r\n        mat.lookAt(ex, ey, ez, cx, cy, cz, ux, uy, uz);\r\n        s.mult(mat);\r\n    };\r\n    MatrixContext.prototype.unProject = function (winX, winY, winZ, modelViewMatrix, projectMatrix, viewPort) {\r\n        var s = this;\r\n        modelViewMatrix = modelViewMatrix || s.modelViewMatrix;\r\n        projectMatrix = projectMatrix || s.projectionMatrix;\r\n        viewPort = viewPort || s._gl.getParameter(s._gl.VIEWPORT);\r\n        var point = new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3((winX - viewPort[0]) / viewPort[2] * 2 - 1, (winY - viewPort[1]) / viewPort[3] * 2 - 1, winZ * 2 - 1);\r\n        var tempMatrix = s._tempMatrix;\r\n        projectMatrix.multiply(modelViewMatrix, tempMatrix);\r\n        return tempMatrix.invert().transformPoint(point);\r\n    };\r\n    Object.defineProperty(MatrixContext.prototype, \"status\", {\r\n        /**矩阵状态 */\r\n        get: function () {\r\n            return this._status;\r\n        },\r\n        /**矩阵状态 */\r\n        set: function (value) {\r\n            var s = this;\r\n            s._status = value;\r\n            switch (s._status) {\r\n                case 0 /* ModelView */:\r\n                    s._curMatrix = s.modelViewMatrix;\r\n                    break;\r\n                case 1 /* Project */:\r\n                    s._curMatrix = s.projectionMatrix;\r\n                    break;\r\n                default:\r\n                    _utils_Log__WEBPACK_IMPORTED_MODULE_2__.Log.error(\"没有找到对应的矩阵状态\");\r\n                    return;\r\n            }\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return MatrixContext;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/swaming/MartixContext.ts?");

/***/ }),

/***/ "./src/swaming/Raytracer.ts":
/*!**********************************!*\
  !*** ./src/swaming/Raytracer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Raytracer\": () => (/* binding */ Raytracer)\n/* harmony export */ });\n/* harmony import */ var _math_Vec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vec */ \"./src/math/Vec.ts\");\n/* harmony import */ var _math_Vec3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec3 */ \"./src/math/Vec3.ts\");\n/* harmony import */ var _HitTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HitTest */ \"./src/swaming/HitTest.ts\");\n\r\n\r\n\r\nvar Raytracer = /** @class */ (function () {\r\n    function Raytracer(gl, matrixContex) {\r\n        var s = this;\r\n        s._matrixContex = matrixContex;\r\n        var viewport = gl.getParameter(gl.VIEWPORT);\r\n        var modelMatrix = s._matrixContex.modelViewMatrix;\r\n        var axisX = new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3(modelMatrix.data[0], modelMatrix.data[4], modelMatrix.data[8]);\r\n        var axisY = new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3(modelMatrix.data[1], modelMatrix.data[5], modelMatrix.data[9]);\r\n        var axisZ = new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3(modelMatrix.data[2], modelMatrix.data[6], modelMatrix.data[10]);\r\n        var offset = new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3(modelMatrix.data[3], modelMatrix.data[7], modelMatrix.data[11]);\r\n        s.eye = new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3(-offset.clone().dot(axisX), -offset.clone().dot(axisY), -offset.clone().dot(axisZ));\r\n        var minX = viewport[0];\r\n        var maxX = minX + viewport[2];\r\n        var minY = viewport[1];\r\n        var maxY = minY + viewport[3];\r\n        s._ray00 = s._matrixContex.unProject(minX, minY, 1).subtract(s.eye);\r\n        s._ray10 = s._matrixContex.unProject(maxX, minY, 1).subtract(s.eye);\r\n        s._ray01 = s._matrixContex.unProject(minX, maxY, 1).subtract(s.eye);\r\n        s._ray11 = s._matrixContex.unProject(maxX, maxY, 1).subtract(s.eye);\r\n        s._viewport = viewport;\r\n    }\r\n    Raytracer.prototype.getRayForPixel = function (x, y) {\r\n        var s = this;\r\n        x = (x - s._viewport[0]) / s._viewport[2];\r\n        y = 1 - (y - this._viewport[1]) / s._viewport[3];\r\n        var ray0 = _math_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec.lerp(s._ray00, s._ray10, x);\r\n        var ray1 = _math_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec.lerp(s._ray01, s._ray11, x);\r\n        return _math_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec.lerp(ray0, ray1, y).unit();\r\n    };\r\n    Raytracer.hitTextBox = function (origin, ray, min, max) {\r\n        var tMin = min.clone().subtract(origin).divide(ray);\r\n        var tMax = max.clone().subtract(origin).divide(ray);\r\n        var t1 = _math_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec.min(tMin, tMax);\r\n        var t2 = _math_Vec__WEBPACK_IMPORTED_MODULE_0__.Vec.max(tMin, tMax);\r\n        var tNear = t1.max();\r\n        var tFar = t2.min();\r\n        if (tNear > 0 && tNear < tFar) {\r\n            var epsilon = 1.0e-6;\r\n            var hit = origin.clone().add(ray.clone().multiply(tNear));\r\n            min.add(epsilon);\r\n            max.subtract(epsilon);\r\n            return new _HitTest__WEBPACK_IMPORTED_MODULE_2__.HitTest(tNear, hit, new _math_Vec3__WEBPACK_IMPORTED_MODULE_1__.Vec3((hit.get(0) > max.get(0) ? 1 : 0) - (hit.get(0) < min.get(0) ? 1 : 0), (hit.get(1) > max.get(1) ? 1 : 0) - (hit.get(1) < min.get(1) ? 1 : 0), (hit.get(2) > max.get(2) ? 1 : 0) - (hit.get(2) < min.get(2) ? 1 : 0)));\r\n        }\r\n        return null;\r\n    };\r\n    Raytracer.hitTestSphere = function (origin, ray, center, radius) {\r\n        var offset = origin.clone().subtract(center);\r\n        var a = ray.clone().dot(ray);\r\n        var b = 2 * ray.clone().dot(offset);\r\n        var c = offset.clone().dot(offset) - radius * radius;\r\n        var discriminant = b * b - 4 * a * c;\r\n        if (discriminant > 0) {\r\n            var t = (-b - Math.sqrt(discriminant) / (2 * a));\r\n            var hit = origin.clone().add(ray.clone().multiply(t));\r\n            return new _HitTest__WEBPACK_IMPORTED_MODULE_2__.HitTest(t, hit, hit.clone().subtract(center).divide(radius));\r\n        }\r\n        return null;\r\n    };\r\n    Raytracer.hitTestTriangle = function (origin, ray, a, b, c) {\r\n        var ab = b.clone().subtract(a);\r\n        var ac = c.clone().subtract(a);\r\n        var normal = ab.clone().cross(ac).unit();\r\n        var t = normal.clone().dot(a.clone().subtract(origin)) / normal.clone().dot(ray);\r\n        if (t > 0) {\r\n            var hit = origin.clone().add(ray.clone().multiply(t));\r\n            var toHit = hit.clone().subtract(a);\r\n            var dot00 = ac.clone().dot(ac);\r\n            var dot01 = ac.clone().dot(ab);\r\n            var dot02 = ac.clone().dot(toHit);\r\n            var dot11 = ab.clone().dot(ab);\r\n            var dot12 = ab.clone().dot(toHit);\r\n            var divide = dot00 * dot11 - dot01 * dot01;\r\n            var u = (dot11 * dot02 - dot01 * dot12) / divide;\r\n            var v = (dot00 * dot12 - dot01 * dot02) / divide;\r\n            if (u >= 0 && v >= 0 && u + v > 1)\r\n                return new _HitTest__WEBPACK_IMPORTED_MODULE_2__.HitTest(t, hit, normal);\r\n        }\r\n        return null;\r\n    };\r\n    return Raytracer;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/swaming/Raytracer.ts?");

/***/ }),

/***/ "./src/swaming/mesh/CubeMesh.ts":
/*!**************************************!*\
  !*** ./src/swaming/mesh/CubeMesh.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CubeMesh\": () => (/* binding */ CubeMesh)\n/* harmony export */ });\n/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mesh */ \"./src/swaming/mesh/Mesh.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar CubeMesh = /** @class */ (function (_super) {\r\n    __extends(CubeMesh, _super);\r\n    function CubeMesh() {\r\n        var _this = _super.call(this) || this;\r\n        var s = _this;\r\n        s.vertext = [];\r\n        s.indexs = [];\r\n        var cubeData = CubeMesh.CubeData;\r\n        for (var i = 0; i < cubeData.length; i++) {\r\n            var data = cubeData[i];\r\n            var idx = i * 4;\r\n            for (var j = 0; j < 4; j++) {\r\n                var vdata = data[j];\r\n                s.splitOneNum(vdata, s.vertext);\r\n            }\r\n            /*\r\n                idx---idx+1\r\n                 |    /  |\r\n                 |   /   |\r\n                idx+2--idx+3\r\n            */\r\n            s.indexs.push(idx, idx + 1, idx + 2);\r\n            s.indexs.push(idx + 2, idx + 1, idx + 3);\r\n        }\r\n        return _this;\r\n    }\r\n    /**\r\n     * 将一个num(0-7范围内)数，分解成三个-1,1范围的内数，填充到fillArr数组中\r\n     * num 二进制的从右到左的第1位表示x  0表示-1， 1表示1\r\n     * num 二进制的从右到左的第2位表示y  0表示-1， 1表示1\r\n     * num 二进制的从右到左的第3位表示z  0表示-1， 1表示1\r\n     * @param num\r\n     * @param fillArr\r\n     */\r\n    CubeMesh.prototype.splitOneNum = function (num, fillArr) {\r\n        fillArr.push((num & 1) * 2 - 1, (num & 2) - 1, (num & 4) / 2 - 1);\r\n    };\r\n    CubeMesh.CubeData = [\r\n        //0, 1, 2, 3  四个顶点 组成一个面\r\n        //4，5，6  前面四个点组成面的法线\r\n        [0, 4, 2, 6, -1, 0, 0],\r\n        [1, 3, 5, 7, +1, 0, 0],\r\n        [0, 1, 4, 5, 0, -1, 0],\r\n        [2, 6, 3, 7, 0, +1, 0],\r\n        [0, 2, 1, 3, 0, 0, -1],\r\n        [4, 5, 6, 7, 0, 0, +1] // +z\r\n    ];\r\n    return CubeMesh;\r\n}(_Mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh));\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/swaming/mesh/CubeMesh.ts?");

/***/ }),

/***/ "./src/swaming/mesh/Mesh.ts":
/*!**********************************!*\
  !*** ./src/swaming/mesh/Mesh.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mesh\": () => (/* binding */ Mesh)\n/* harmony export */ });\nvar Mesh = /** @class */ (function () {\r\n    function Mesh() {\r\n    }\r\n    /**\r\n     * 根据二进制位上的数返回坐标\r\n     * 将一个数二进制的后三位分别表示z,y,x,如果二进制位上有值则对应的位置为1，没有值则对应为为-1\r\n     *   z    y    x\r\n     *   0    0    0\r\n     * @param v\r\n     * @returns\r\n     */\r\n    Mesh.prototype.getPosByBinaryValue = function (v) {\r\n        return [(v & 1) * 2 - 1, (v & 2) - 1, (v & 4) / 2 - 1];\r\n    };\r\n    return Mesh;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/swaming/mesh/Mesh.ts?");

/***/ }),

/***/ "./src/swaming/mesh/PlaneMesh.ts":
/*!***************************************!*\
  !*** ./src/swaming/mesh/PlaneMesh.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlaneMesh\": () => (/* binding */ PlaneMesh)\n/* harmony export */ });\n/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mesh */ \"./src/swaming/mesh/Mesh.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n/**\r\n * 平面网格\r\n */\r\nvar PlaneMesh = /** @class */ (function (_super) {\r\n    __extends(PlaneMesh, _super);\r\n    function PlaneMesh(detailX, detailY) {\r\n        if (detailX === void 0) { detailX = 1; }\r\n        if (detailY === void 0) { detailY = 1; }\r\n        var _this = _super.call(this) || this;\r\n        var s = _this;\r\n        s.vertext = [];\r\n        s.indexs = [];\r\n        // let idx = 0;\r\n        // for(let y=0; y<=detailY; y++){\r\n        //     let yRatio = y/detailY;//0-1\r\n        //     for(let x=0; x<=detailX; x++){\r\n        //         let xRatio = x/detailX;//0-1\r\n        //         s.vertext.push(2*xRatio-1, 2*yRatio-1, 0);//将xRatio,yRatio的0-1范围放到-1,1范围内\r\n        //         if(x<detailX && y<detailY){//最上面的一行以下，开始拼接三角形的索引\r\n        //             // let idx = x + (y*detailY);//当前第几个\r\n        //             s.indexs.push(idx, idx+1, idx+detailX+1);\r\n        //             s.indexs.push(idx+detailX+1, idx+1, idx+detailX+2);\r\n        //         }\r\n        //         idx++;\r\n        //     }\r\n        // }\r\n        for (var y = 0; y <= detailY; y++) {\r\n            var t = y / detailY;\r\n            for (var x = 0; x <= detailX; x++) {\r\n                var s2 = x / detailX;\r\n                s.vertext.push(2 * s2 - 1, 2 * t - 1, 0);\r\n                //   if (mesh.coords) mesh.coords.push([s2, t]);\r\n                //   if (mesh.normals) mesh.normals.push([0, 0, 1]);\r\n                if (x < detailX && y < detailY) {\r\n                    var i = x + y * (detailX + 1);\r\n                    s.indexs.push(i, i + 1, i + detailX + 1);\r\n                    s.indexs.push(i + detailX + 1, i + 1, i + detailX + 2);\r\n                }\r\n            }\r\n        }\r\n        return _this;\r\n    }\r\n    return PlaneMesh;\r\n}(_Mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh));\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/swaming/mesh/PlaneMesh.ts?");

/***/ }),

/***/ "./src/swaming/mesh/SphereMesh.ts":
/*!****************************************!*\
  !*** ./src/swaming/mesh/SphereMesh.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SphereMesh\": () => (/* binding */ SphereMesh)\n/* harmony export */ });\n/* harmony import */ var _Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mesh */ \"./src/swaming/mesh/Mesh.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n/**\r\n * 球型的顶点坐标\r\n */\r\nvar SphereMesh = /** @class */ (function (_super) {\r\n    __extends(SphereMesh, _super);\r\n    function SphereMesh(detail) {\r\n        if (detail === void 0) { detail = 6; }\r\n        var _this = _super.call(this) || this;\r\n        var s = _this;\r\n        s.vertext = []; //存储x，y，z坐标\r\n        s.indexs = []; //三角形列表（索引值）\r\n        s.uv = []; //存储纹理坐标u，v，纹理坐标与顶点坐标一一对应\r\n        var colNum = detail; //纬度带  竖直线条个数\r\n        var rowNum = detail; //经度带 水平线条个数\r\n        for (var col = 0; col <= colNum; col++) {\r\n            var lat = col * Math.PI / colNum - Math.PI / 2; //纬度范围从-π/2到π/2\r\n            var sinLat = Math.sin(lat);\r\n            var cosLat = Math.cos(lat);\r\n            for (var row = 0; row <= rowNum; row++) {\r\n                var lon = row * 2 * Math.PI / rowNum - Math.PI; //经度范围从-π到π\r\n                var sinLon = Math.sin(lon);\r\n                var cosLon = Math.cos(lon);\r\n                var x = cosLat * cosLon;\r\n                var y = cosLat * sinLon;\r\n                var z = sinLat;\r\n                var u = (row / rowNum);\r\n                var v = (col / colNum);\r\n                s.vertext.push(x, y, z);\r\n                s.uv.push(u, v);\r\n            }\r\n        }\r\n        for (var col = 0; col < colNum; col++) {\r\n            for (var row = 0; row < rowNum; row++) {\r\n                var first = col * (rowNum + 1) + row;\r\n                var second = first + rowNum + 1;\r\n                s.indexs.push(first, first + 1, second);\r\n                s.indexs.push(second, second + 1, first + 1);\r\n            }\r\n        }\r\n        return _this;\r\n    }\r\n    return SphereMesh;\r\n}(_Mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh));\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/swaming/mesh/SphereMesh.ts?");

/***/ }),

/***/ "./src/utils/ComUtils.ts":
/*!*******************************!*\
  !*** ./src/utils/ComUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ComUtils\": () => (/* binding */ ComUtils)\n/* harmony export */ });\n/* harmony import */ var _GLArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GLArray */ \"./src/utils/GLArray.ts\");\n\r\nvar ComUtils = /** @class */ (function () {\r\n    function ComUtils() {\r\n    }\r\n    /**绑定数据 */\r\n    ComUtils.bindData = function (orginData, prop, listener, listenerThis) {\r\n        var hideKey = \"_$_\" + prop;\r\n        var data = orginData[prop];\r\n        if (data instanceof _GLArray__WEBPACK_IMPORTED_MODULE_0__.GLArray) //数组的每一项发生改变\r\n         {\r\n            data.addChangeListener(function () {\r\n                var old = orginData[hideKey];\r\n                orginData[hideKey] = data;\r\n                listener.call(listenerThis, prop, orginData[hideKey], old);\r\n            }, listenerThis);\r\n        }\r\n        orginData[hideKey] = data;\r\n        orginData.__defineSetter__(prop, function (value) {\r\n            var old = orginData[hideKey];\r\n            orginData[hideKey] = value;\r\n            listener.call(listenerThis, prop, orginData[hideKey], old);\r\n        });\r\n        orginData.__defineGetter__(prop, function () {\r\n            var hideKey = \"_$_\" + prop;\r\n            return orginData[hideKey];\r\n        });\r\n    };\r\n    /**\r\n     * 创建一个canvas\r\n     * @param width\r\n     * @param height\r\n     */\r\n    ComUtils.createCanvas = function (width, height) {\r\n        var canvas = document.createElement(\"canvas\");\r\n        canvas.width = width;\r\n        canvas.height = height;\r\n        return canvas;\r\n    };\r\n    /**\r\n     * 加载图片\r\n     * @param images\r\n     * @returns\r\n     */\r\n    ComUtils.loadImages = function (images) {\r\n        return Promise.all(images.map(function (src, i) {\r\n            return ComUtils.loadOneImg(images[i]);\r\n        }));\r\n    };\r\n    ComUtils.loadOneImg = function (info) {\r\n        var s = this;\r\n        return new Promise(function (resolve, reject) {\r\n            var img = new Image();\r\n            img.onload = function () {\r\n                // s.imgDic[info.name] = img;\r\n                resolve({ name: info.name, img: img });\r\n            };\r\n            img.onerror = function () {\r\n                reject(\"加载错误\" + info.src);\r\n            };\r\n            img.src = info.src;\r\n        });\r\n    };\r\n    /**\r\n     * 在from 到 to之间随机一个值， randomFun是随机值的中间处理过程\r\n     * @param from\r\n     * @param to\r\n     * @param randomFun\r\n     * @returns\r\n     */\r\n    ComUtils.random = function (from, to, randomFun) {\r\n        if (from === void 0) { from = null; }\r\n        if (to === void 0) { to = null; }\r\n        if (from == null) {\r\n            from = 0;\r\n            to = 1;\r\n        }\r\n        else if (to == null) {\r\n            to = from;\r\n            from = 0; //如果只设置了from，没有设置to, 则认为随机值从0-from\r\n        }\r\n        var delt = to - from;\r\n        if (!randomFun) {\r\n            randomFun = function (n) { return n; };\r\n        }\r\n        return from + randomFun(Math.random()) * delt;\r\n    };\r\n    /**\r\n     * 将value取值在from与to之间\r\n     * @param value\r\n     * @param from\r\n     * @param to\r\n     * @returns\r\n     */\r\n    ComUtils.range = function (value, from, to) {\r\n        if (value < from)\r\n            return from;\r\n        if (value > to)\r\n            return to;\r\n        return value;\r\n    };\r\n    /**\r\n     * 0-1范围内   随机值是否小于value\r\n     * @param value\r\n     * @returns\r\n     */\r\n    ComUtils.chance = function (value) {\r\n        return Math.random() <= value;\r\n    };\r\n    /**\r\n     * 求亮点的距离\r\n     * @param r1\r\n     * @param r2\r\n     * @returns\r\n     */\r\n    ComUtils.distance = function (r1, r2) {\r\n        return Math.sqrt((r2.x - r1.x) * (r2.x - r1.x) + (r2.y - r1.y) * (r2.y - r1.y));\r\n    };\r\n    return ComUtils;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/utils/ComUtils.ts?");

/***/ }),

/***/ "./src/utils/GLArray.ts":
/*!******************************!*\
  !*** ./src/utils/GLArray.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GLArray\": () => (/* binding */ GLArray)\n/* harmony export */ });\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log */ \"./src/utils/Log.ts\");\n\r\nvar GLArray = /** @class */ (function () {\r\n    function GLArray(data) {\r\n        this._listener = [];\r\n        var s = this;\r\n        s._data = data || [];\r\n    }\r\n    GLArray.prototype.addChangeListener = function (listener, listenerThis) {\r\n        var s = this;\r\n        if (s._listener.length > 0) {\r\n            for (var i = 0; i < s._listener.length; i++) {\r\n                if (s._listener[i].fun == listener) {\r\n                    _Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"监听重复注册\");\r\n                    return;\r\n                }\r\n            }\r\n        }\r\n        s._listener.push({ fun: listener, listenerThis: listenerThis });\r\n    };\r\n    GLArray.prototype.notify = function (prop, newValue, oldValue) {\r\n        var s = this;\r\n        var len = s._listener.length;\r\n        if (len == 0)\r\n            return;\r\n        for (var i = len - 1; i >= 0; i--) {\r\n            var listener = s._listener[i];\r\n            listener.fun.call(listener.listenerThis, prop, newValue, oldValue);\r\n        }\r\n    };\r\n    GLArray.prototype.add = function (value) {\r\n        var s = this;\r\n        s.setValue(s._data.length, value);\r\n    };\r\n    GLArray.prototype.setValue = function (index, value) {\r\n        var s = this;\r\n        var old = s._data[index];\r\n        s._data[index] = value;\r\n        s.notify(index, value, old);\r\n    };\r\n    GLArray.prototype.getValue = function (index) {\r\n        return this._data[index];\r\n    };\r\n    Object.defineProperty(GLArray.prototype, \"length\", {\r\n        get: function () {\r\n            return this._data.length;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(GLArray.prototype, \"orginData\", {\r\n        get: function () {\r\n            return this._data;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    GLArray.prototype.getFloat32Array = function () {\r\n        var s = this;\r\n        return new Float32Array(s._data);\r\n    };\r\n    GLArray.prototype.getUnit8Array = function () {\r\n        return new Uint8Array(this._data);\r\n    };\r\n    GLArray.prototype.getUnit16Array = function () {\r\n        return new Uint16Array(this._data);\r\n    };\r\n    return GLArray;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/utils/GLArray.ts?");

/***/ }),

/***/ "./src/utils/Log.ts":
/*!**************************!*\
  !*** ./src/utils/Log.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Log\": () => (/* binding */ Log)\n/* harmony export */ });\nvar Log = /** @class */ (function () {\r\n    function Log() {\r\n    }\r\n    /**普通日志 */\r\n    Log.log = function (msg) {\r\n        console.log(msg);\r\n    };\r\n    /**错误日志 */\r\n    Log.error = function (msg) {\r\n        console.error(msg);\r\n    };\r\n    /**警告日志 */\r\n    Log.warn = function (msg) {\r\n        console.warn(msg);\r\n    };\r\n    return Log;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/utils/Log.ts?");

/***/ }),

/***/ "./src/webgl/CubeMap.ts":
/*!******************************!*\
  !*** ./src/webgl/CubeMap.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CubeMap\": () => (/* binding */ CubeMap)\n/* harmony export */ });\n/* harmony import */ var _utils_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Log */ \"./src/utils/Log.ts\");\n\r\nvar CubeMap = /** @class */ (function () {\r\n    function CubeMap(gl, posX, negX, posY, negY, posZ, negZ, cubeParam) {\r\n        this._textureChange = false;\r\n        this._textureIdx = -1;\r\n        var s = this;\r\n        s._gl = gl;\r\n        s._cubeParam = cubeParam || {};\r\n        s._texture = gl.createTexture();\r\n        if (!s._texture) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"Frame Buffer 创建纹理失败\");\r\n            return;\r\n        }\r\n        s._cubeList = [\r\n            s.getCubeItem(34069 /* TEXTURE_CUBE_MAP_POSITIVE_X */, posX, s._cubeParam.fromatPosX || s._cubeParam.format || 6408 /* RGBA */),\r\n            s.getCubeItem(34070 /* TEXTURE_CUBE_MAP_NEGATIVE_X */, negX, s._cubeParam.fromatNegX || s._cubeParam.format || 6408 /* RGBA */),\r\n            s.getCubeItem(34071 /* TEXTURE_CUBE_MAP_POSITIVE_Y */, posY, s._cubeParam.fromatPosY || s._cubeParam.format || 6408 /* RGBA */),\r\n            s.getCubeItem(34072 /* TEXTURE_CUBE_MAP_NEGATIVE_Y */, negY, s._cubeParam.fromatNegY || s._cubeParam.format || 6408 /* RGBA */),\r\n            s.getCubeItem(34073 /* TEXTURE_CUBE_MAP_POSITIVE_Z */, posZ, s._cubeParam.fromatPosZ || s._cubeParam.format || 6408 /* RGBA */),\r\n            s.getCubeItem(34074 /* TEXTURE_CUBE_MAP_NEGATIVE_Z */, negZ, s._cubeParam.fromatNegZ || s._cubeParam.format || 6408 /* RGBA */),\r\n        ];\r\n        s._textureChange = true;\r\n    }\r\n    Object.defineProperty(CubeMap.prototype, \"textureIndex\", {\r\n        get: function () {\r\n            return this._textureIdx;\r\n        },\r\n        set: function (value) {\r\n            var s = this;\r\n            if (s._textureIdx != value) {\r\n                s._textureIdx = value;\r\n                s._textureChange = true;\r\n            }\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    CubeMap.prototype.getCubeItem = function (pos, cubeItem, fromat) {\r\n        if (!cubeItem) {\r\n            return { pos: pos, img: null, fromat: fromat };\r\n        }\r\n        else if (typeof cubeItem == \"string\") {\r\n            var img = new Image();\r\n            img.src = cubeItem;\r\n            return { pos: pos, img: img, fromat: fromat };\r\n        }\r\n        else {\r\n            return { pos: pos, img: cubeItem, fromat: fromat };\r\n        }\r\n    };\r\n    Object.defineProperty(CubeMap.prototype, \"texture\", {\r\n        get: function () { return this._texture; },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    ;\r\n    CubeMap.prototype.bindTexture = function (gl, target) {\r\n        var s = this;\r\n        if (gl != s._gl) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"CubeMap 中bindTexture 的gl 与传过来的gl不是同一个\");\r\n        }\r\n        if (s._textureIdx < 0) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.error(\"CubeMap 需要先初始化 textureIndex\");\r\n            return null;\r\n        }\r\n        gl.bindTexture(target, s._texture);\r\n        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);\r\n        if (s._textureChange) {\r\n            // let gl = s._gl;\r\n            var mag = s._cubeParam.filterMag || s._cubeParam.filter || gl.LINEAR;\r\n            var mig = s._cubeParam.filterMig || s._cubeParam.filter || gl.LINEAR;\r\n            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, mag);\r\n            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, mig);\r\n            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, s._cubeParam.wrapS || s._cubeParam.wrap || gl.CLAMP_TO_EDGE);\r\n            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, s._cubeParam.wrapT || s._cubeParam.wrap || gl.CLAMP_TO_EDGE);\r\n            for (var i = 0; i < s._cubeList.length; i++) {\r\n                gl.texImage2D(s._cubeList[i].pos, 0, s._cubeList[i].format || gl.RGBA, s._cubeList[i].format || gl.RGBA, gl.UNSIGNED_BYTE, s._cubeList[i].img);\r\n            }\r\n            s._textureChange = false;\r\n        }\r\n        return s._texture;\r\n    };\r\n    return CubeMap;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/webgl/CubeMap.ts?");

/***/ }),

/***/ "./src/webgl/Texture.ts":
/*!******************************!*\
  !*** ./src/webgl/Texture.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Texture\": () => (/* binding */ Texture)\n/* harmony export */ });\n/* harmony import */ var _utils_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Log */ \"./src/utils/Log.ts\");\n\r\nvar Texture = /** @class */ (function () {\r\n    function Texture(gl, srcOrWidth, textureParamOrheight, textureParam) {\r\n        this._textureChange = false;\r\n        this._imgSourceChange = false;\r\n        var s = this;\r\n        s._texture = gl.createTexture();\r\n        if (!s._texture) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"Frame Buffer 创建纹理失败\");\r\n            return;\r\n        }\r\n        s._params = textureParam;\r\n        s._gl = gl;\r\n        if (typeof srcOrWidth == \"number\") {\r\n            s._width = srcOrWidth;\r\n        }\r\n        else {\r\n            s.src = srcOrWidth;\r\n        }\r\n        if (typeof textureParamOrheight == \"number\") {\r\n            s._height = textureParamOrheight;\r\n        }\r\n        else {\r\n            s._params = textureParamOrheight;\r\n        }\r\n        if (textureParam) {\r\n            s._params = textureParam;\r\n        }\r\n        if (!s._params)\r\n            s._params = {};\r\n        s._textureChange = true;\r\n        s._imgSourceChange = true;\r\n    }\r\n    Texture.prototype.resize = function (width, height) {\r\n        var s = this;\r\n        s._width = width;\r\n        s._height = height;\r\n        s._textureChange = true;\r\n    };\r\n    Texture.prototype.refush = function (textureParam) {\r\n        var s = this;\r\n        if (textureParam)\r\n            s._params = textureParam;\r\n        s._textureChange = true;\r\n    };\r\n    Object.defineProperty(Texture.prototype, \"src\", {\r\n        get: function () {\r\n            return this._src;\r\n        },\r\n        set: function (value) {\r\n            var s = this;\r\n            s._src = value;\r\n            if (!s._src) {\r\n                s._imgSource = null;\r\n            }\r\n            else if (typeof s._src == \"string\") {\r\n                s._imgSource = new Image(s._width, s._height);\r\n                s._imgSource.src = s._src;\r\n            }\r\n            else {\r\n                s._imgSource = s._src;\r\n                ;\r\n            }\r\n            s._imgSourceChange = true;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Texture.prototype, \"width\", {\r\n        get: function () { return this._width; },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Texture.prototype, \"height\", {\r\n        get: function () { return this._height; },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Texture.prototype, \"texture\", {\r\n        get: function () { return this._texture; },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    ;\r\n    Texture.prototype.swapTexture = function (texture) {\r\n        var s = this;\r\n        var temp = s._texture;\r\n        var oldW = s.width;\r\n        var oldH = s.height;\r\n        s._texture = texture._texture;\r\n        // s._textureChange = true;\r\n        s._width = texture.width;\r\n        s._height = texture.height;\r\n        texture._texture = temp;\r\n        texture._width = oldW;\r\n        texture._height = oldH;\r\n        // texture._textureChange = true;\r\n    };\r\n    /**\r\n     * 获取当前的texture\r\n     * 注意：执行前先gl.bindTexture(xxx,xxxx)\r\n     */\r\n    Texture.prototype.bindTexture = function (gl, target) {\r\n        var s = this;\r\n        if (gl != s._gl) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.warn(\"Texture 中bindTexture 的gl 与传过来的gl不是同一个\");\r\n        }\r\n        gl.bindTexture(target, s._texture);\r\n        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);\r\n        if (s._textureChange) {\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, s._params.filterMag || s._params.filter || gl.LINEAR);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, s._params.filterMig || s._params.filter || gl.LINEAR);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, s._params.wrapS || s._params.wrap || gl.CLAMP_TO_EDGE);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, s._params.wrapT || s._params.wrap || gl.CLAMP_TO_EDGE);\r\n            s._textureChange = false;\r\n        }\r\n        if (s._imgSourceChange) {\r\n            var format = s._params.format || gl.RGBA;\r\n            var type = s._params.type || gl.UNSIGNED_BYTE;\r\n            if (type == 5126 /* FLOAT */) {\r\n                if (!gl.getExtension('OES_texture_float')) {\r\n                    _utils_Log__WEBPACK_IMPORTED_MODULE_0__.Log.error(\"Texture 不支持Float类型\");\r\n                }\r\n            }\r\n            if (s._imgSource) {\r\n                gl.texImage2D(gl.TEXTURE_2D, 0, format, format, type, s._imgSource);\r\n            }\r\n            else {\r\n                gl.texImage2D(gl.TEXTURE_2D, 0, format, s._width, s._height, 0, format, type, null);\r\n            }\r\n            s._imgSourceChange = false;\r\n        }\r\n        return s._texture;\r\n    };\r\n    return Texture;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/webgl/Texture.ts?");

/***/ }),

/***/ "./src/webgl/WebGL.ts":
/*!****************************!*\
  !*** ./src/webgl/WebGL.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebGL\": () => (/* binding */ WebGL)\n/* harmony export */ });\n/* harmony import */ var _math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Matrix */ \"./src/math/Matrix.ts\");\n/* harmony import */ var _math_Vec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vec */ \"./src/math/Vec.ts\");\n/* harmony import */ var _utils_GLArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GLArray */ \"./src/utils/GLArray.ts\");\n/* harmony import */ var _utils_Log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Log */ \"./src/utils/Log.ts\");\n/* harmony import */ var _CubeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CubeMap */ \"./src/webgl/CubeMap.ts\");\n/* harmony import */ var _Texture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Texture */ \"./src/webgl/Texture.ts\");\n// import { Log } from \"./../utils/Log\";\r\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar WebGL = /** @class */ (function () {\r\n    function WebGL(gl, vertexShader, fragmentShader) {\r\n        /**shader中用到的attribute属性  name需要和bindData中的数据对应 */\r\n        this._attribute = {};\r\n        /**索引数组数据 */\r\n        this._indexs = { data: null, count: 0, buff: null };\r\n        /**shader 中用到的uniform 属性 */\r\n        this._unifrom = {};\r\n        // ---帧缓存相关\r\n        /**是否使用帧缓存 */\r\n        this._useFrameBuffer = false;\r\n        /**frame的宽度 */\r\n        this._frameWidth = 0;\r\n        /**frame的高度 */\r\n        this._frameHeight = 0;\r\n        this._width = 800;\r\n        this._height = 800;\r\n        var s = this;\r\n        s._gl = gl;\r\n        this.initProgram(vertexShader, fragmentShader);\r\n    }\r\n    /**初始化程序 */\r\n    WebGL.prototype.initProgram = function (vertexShaderStr, fragmentShaderStr) {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        s._program = gl.createProgram();\r\n        var vertexShader = s.compileShader(35633 /* VERTEX */, vertexShaderStr);\r\n        var fragmentShader = s.compileShader(35632 /* FRAGMENT */, fragmentShaderStr);\r\n        if (!vertexShader || !fragmentShader) {\r\n            gl.deleteShader(vertexShader);\r\n            gl.deleteShader(fragmentShader);\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"ShaderProgram 初始化失败\");\r\n            return;\r\n        }\r\n        gl.attachShader(s._program, vertexShader);\r\n        gl.attachShader(s._program, fragmentShader);\r\n        gl.linkProgram(s._program);\r\n        var status = gl.getProgramParameter(s._program, gl.LINK_STATUS);\r\n        if (!status) {\r\n            var err = gl.getProgramInfoLog(s._program);\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"Shader 链接错误 \" + err);\r\n            return;\r\n        }\r\n    };\r\n    /**编译代码 */\r\n    WebGL.prototype.compileShader = function (type, source) {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        var shader = gl.createShader(type);\r\n        if (!shader) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"Shader 创建失败\");\r\n            return;\r\n        }\r\n        gl.shaderSource(shader, source);\r\n        gl.compileShader(shader);\r\n        var status = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\r\n        if (!status) {\r\n            var err = gl.getShaderInfoLog(shader);\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"Shader 编译失败\" + err);\r\n            gl.deleteShader(shader);\r\n            return;\r\n        }\r\n        return shader;\r\n    };\r\n    /**绑定数据 */\r\n    WebGL.prototype.bindData = function (renderData) {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        s._renderData = renderData;\r\n        var activeAttribute = gl.getProgramParameter(s._program, gl.ACTIVE_ATTRIBUTES);\r\n        s._attribute = {};\r\n        for (var i = 0; i < activeAttribute; i++) {\r\n            var attribData = gl.getActiveAttrib(s._program, i);\r\n            var name_1 = attribData.name;\r\n            if (!renderData[name_1]) {\r\n                _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"bindData 没有找到Attribute: \" + attribData.name + \" 对应的数组\");\r\n                continue;\r\n            }\r\n            var data = renderData[name_1];\r\n            var arr = void 0;\r\n            if (data instanceof _utils_GLArray__WEBPACK_IMPORTED_MODULE_2__.GLArray) {\r\n                arr = data.getFloat32Array();\r\n            }\r\n            else {\r\n                _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"顶点着色器中 \" + name_1 + \" 必须使用GLArray\");\r\n            }\r\n            var buff = s.createBuffer(arr);\r\n            if (!buff)\r\n                continue;\r\n            var idx = gl.getAttribLocation(s._program, name_1);\r\n            var count = s.getAttributeSize(attribData.type);\r\n            s._attribute[name_1] = { location: idx, buff: buff, count: count };\r\n            console.log(attribData);\r\n        }\r\n        var unifromNum = gl.getProgramParameter(s._program, gl.ACTIVE_UNIFORMS);\r\n        for (var i = 0; i < unifromNum; i++) {\r\n            var unifromData = gl.getActiveUniform(s._program, i);\r\n            var name_2 = unifromData.name;\r\n            var data = renderData[name_2];\r\n            if (!data) {\r\n                _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"bindData 没有找到Unifrom: \" + name_2 + \" 对应的数据\");\r\n                continue;\r\n            }\r\n            var idx = gl.getUniformLocation(s._program, name_2);\r\n            s._unifrom[name_2] = s.getUnifromInfo(unifromData, idx, data);\r\n            if (unifromData.type == gl.SAMPLER_2D) {\r\n                if (data instanceof _Texture__WEBPACK_IMPORTED_MODULE_5__.Texture || data instanceof WebGL) {\r\n                    s._unifrom[name_2].texure = data;\r\n                }\r\n                else {\r\n                    s._unifrom[name_2].texure = new _Texture__WEBPACK_IMPORTED_MODULE_5__.Texture(gl, data);\r\n                }\r\n            }\r\n            else if (unifromData.type == gl.SAMPLER_CUBE) {\r\n                if (data instanceof _CubeMap__WEBPACK_IMPORTED_MODULE_4__.CubeMap || data instanceof WebGL) {\r\n                    s._unifrom[name_2].texure = data;\r\n                }\r\n                else {\r\n                    s._unifrom[name_2].texure = new _CubeMap__WEBPACK_IMPORTED_MODULE_4__.CubeMap(gl, data, data, data, data, data, data);\r\n                }\r\n            }\r\n        }\r\n        if (renderData.indexs) {\r\n            var data = renderData.indexs.getUnit16Array();\r\n            ;\r\n            var buff = s.createIndexBuffer(data);\r\n            s._indexs.buff = buff;\r\n            s._indexs.data = buff;\r\n            s._indexs.count = data.length;\r\n            // ComUtils.bindData(renderData, \"indexs\", s.handleIndexChange, s);\r\n        }\r\n    };\r\n    Object.defineProperty(WebGL.prototype, \"renderData\", {\r\n        get: function () {\r\n            return this._renderData;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    /**刷新数据 */\r\n    WebGL.prototype.render = function () {\r\n        var _a, _b, _c, _d;\r\n        var s = this;\r\n        // if(!s._dirty)return;\r\n        var gl = s._gl;\r\n        gl.useProgram(s._program);\r\n        if (s._renderData.enable) {\r\n            for (var i = 0; i < s._renderData.enable.length; i++)\r\n                gl.enable(s._renderData.enable[i]);\r\n        }\r\n        if (s._renderData.cullFace) {\r\n            gl.cullFace(s._renderData.cullFace);\r\n        }\r\n        var textureIdx = 0;\r\n        if (s._useFrameBuffer) { //使用帧缓存\r\n            if (!s._frameBuffer) {\r\n                s.initFrameBuffer();\r\n            }\r\n            gl.bindFramebuffer(gl.FRAMEBUFFER, s._frameBuffer);\r\n            gl.bindRenderbuffer(gl.RENDERBUFFER, s._frameRenderBuffer);\r\n            if (s._frameTexture.width != s._frameWidth || s._frameTexture.height != s._frameHeight) {\r\n                s._frameWidth = s._frameTexture.width;\r\n                s._frameHeight = s._frameTexture.height;\r\n                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, s._frameWidth, s._frameHeight);\r\n            }\r\n            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, s._frameTexture.texture, 0);\r\n            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, s._frameRenderBuffer);\r\n            // textureIdx ++;\r\n            gl.viewport(0, 0, s._frameWidth, s._frameHeight);\r\n        }\r\n        else {\r\n            gl.viewport(0, 0, s._width, s._height);\r\n        }\r\n        if (s._renderData.clearn) {\r\n            var data = 0;\r\n            for (var i = 0; i < s._renderData.clearn.length; i++)\r\n                data = data | s._renderData.clearn[i];\r\n            gl.clear(data);\r\n        }\r\n        var activeAttribute = gl.getProgramParameter(s._program, gl.ACTIVE_ATTRIBUTES);\r\n        for (var i = 0; i < activeAttribute; i++) {\r\n            var attribData = gl.getActiveAttrib(s._program, i);\r\n            var name_3 = attribData.name;\r\n            var data = s._attribute[name_3];\r\n            gl.bindBuffer(gl.ARRAY_BUFFER, data.buff);\r\n            gl.vertexAttribPointer(data.location, data.count, gl.FLOAT, false, 0, 0);\r\n            gl.enableVertexAttribArray(data.location);\r\n        }\r\n        var unifromNum = gl.getProgramParameter(s._program, gl.ACTIVE_UNIFORMS);\r\n        for (var i = 0; i < unifromNum; i++) {\r\n            var unifromData = gl.getActiveUniform(s._program, i);\r\n            var data = s._unifrom[unifromData.name];\r\n            if (unifromData.type == gl.SAMPLER_2D) {\r\n                gl.activeTexture(gl.TEXTURE0 + textureIdx);\r\n                data.texure.bindTexture(gl, 3553 /* TEXTURE_2D */);\r\n                data.fun.call(gl, data.location, textureIdx);\r\n                textureIdx++;\r\n            }\r\n            else if (unifromData.type == gl.SAMPLER_CUBE) {\r\n                gl.activeTexture(gl.TEXTURE0 + textureIdx);\r\n                if (data.texure instanceof _CubeMap__WEBPACK_IMPORTED_MODULE_4__.CubeMap) {\r\n                    data.texure.textureIndex = textureIdx;\r\n                }\r\n                data.texure.bindTexture(gl, 34067 /* TEXTURE_CUBE_MAP */);\r\n                data.fun.call(gl, data.location, textureIdx);\r\n                textureIdx++;\r\n            }\r\n            else {\r\n                var udata = data.data;\r\n                if (data.openParam) {\r\n                    if (udata instanceof _utils_GLArray__WEBPACK_IMPORTED_MODULE_2__.GLArray) {\r\n                        (_a = data.fun).call.apply(_a, __spreadArray([gl, data.location], udata.orginData, false));\r\n                    }\r\n                    else if (udata instanceof _math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix) {\r\n                        (_b = data.fun).call.apply(_b, __spreadArray([gl, data.location], udata.data, false));\r\n                    }\r\n                    else if (udata instanceof _math_Vec__WEBPACK_IMPORTED_MODULE_1__.Vec) {\r\n                        (_c = data.fun).call.apply(_c, __spreadArray([gl, data.location], udata.data, false));\r\n                    }\r\n                    else {\r\n                        _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.warn(\"请检查 unfirom 数据类型是否正确\");\r\n                        data.fun.call(gl, data.location, udata);\r\n                    }\r\n                }\r\n                else {\r\n                    if (udata instanceof _utils_GLArray__WEBPACK_IMPORTED_MODULE_2__.GLArray) {\r\n                        (_d = data.fun).call.apply(_d, __spreadArray([gl, data.location], udata.orginData, false));\r\n                    }\r\n                    else if (udata instanceof _math_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix) {\r\n                        data.fun.call(gl, data.location, new Float32Array(udata.data));\r\n                    }\r\n                    else if (udata instanceof _math_Vec__WEBPACK_IMPORTED_MODULE_1__.Vec) {\r\n                        data.fun.call(gl, data.location, new Float32Array(udata.data));\r\n                    }\r\n                    else {\r\n                        // Log.warn(\"请检查 unfirom 数据类型是否正确\");\r\n                        data.fun.call(gl, data.location, udata);\r\n                    }\r\n                    // data.fun.call(gl, data.location, data.data);\r\n                }\r\n            }\r\n        }\r\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, s._indexs.buff);\r\n        if (s._indexs.changeData) {\r\n            var data = s._indexs.changeData.getUnit16Array();\r\n            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);\r\n            s._indexs.changeData = null;\r\n        }\r\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, s._indexs.data);\r\n        var drawType = s._renderData.drawType == undefined ? 4 /* TRIANGLES */ : s._renderData.drawType;\r\n        gl.drawElements(drawType, s._indexs.count, gl.UNSIGNED_SHORT, 0);\r\n        if (s._renderData.enable) {\r\n            for (var i = 0; i < s._renderData.enable.length; i++)\r\n                gl.disable(s._renderData.enable[i]);\r\n        }\r\n        gl.bindTexture(gl.TEXTURE_2D, null);\r\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, null);\r\n        gl.bindFramebuffer(gl.FRAMEBUFFER, null);\r\n        gl.bindRenderbuffer(gl.RENDERBUFFER, null);\r\n        gl.useProgram(null);\r\n        if (s._onRenderEndFun) {\r\n            s._onRenderEndFun();\r\n        }\r\n    };\r\n    /**\r\n     * 再后台渲染到一张图片上\r\n     */\r\n    WebGL.prototype.initFrameBuffer = function () {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        s._frameBuffer = gl.createFramebuffer();\r\n        if (!s._frameBuffer) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.warn(\"Frame Buffer 创建失败\");\r\n            return;\r\n        }\r\n        if (!s._frameTexture) {\r\n            s._frameTexture = new _Texture__WEBPACK_IMPORTED_MODULE_5__.Texture(gl, 1024, 1024);\r\n        }\r\n        s._frameTexture.bindTexture(gl, gl.TEXTURE_2D);\r\n        //缓冲区\r\n        s._frameRenderBuffer = gl.createRenderbuffer();\r\n        if (!s._frameRenderBuffer) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.warn(\"渲染缓冲区创建失败\");\r\n            return;\r\n        }\r\n        gl.bindRenderbuffer(gl.RENDERBUFFER, s._frameRenderBuffer);\r\n        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, s._frameTexture.width, s._frameTexture.height);\r\n        s._frameWidth = s._frameTexture.width;\r\n        s._frameHeight = s._frameTexture.height;\r\n        gl.bindFramebuffer(gl.FRAMEBUFFER, s._frameBuffer);\r\n        //将纹理指定为镇缓冲区的颜色关联对象\r\n        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, s._frameTexture.texture, 0);\r\n        //将渲染缓冲区指定为帧的深度关联对象\r\n        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, s._frameRenderBuffer);\r\n        //检查\r\n        var frameStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);\r\n        if (frameStatus != gl.FRAMEBUFFER_COMPLETE) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.warn(\"Frame Buffer is Complete \" + frameStatus.toString());\r\n            return;\r\n        }\r\n        gl.bindFramebuffer(gl.FRAMEBUFFER, null);\r\n        gl.bindTexture(gl.TEXTURE_2D, null);\r\n        gl.bindRenderbuffer(gl.RENDERBUFFER, null);\r\n    };\r\n    /**\r\n     * 启用frameBuffer\r\n     * @param bufferWidth\r\n     * @param bufferHeight\r\n     */\r\n    WebGL.prototype.enableUseFrameBuffer = function (frameTexture) {\r\n        var s = this;\r\n        s._useFrameBuffer = true;\r\n        s._frameTexture = frameTexture || s._frameTexture;\r\n        // s._sizeChange = true;\r\n    };\r\n    /**\r\n     * 禁用framebuffer\r\n     */\r\n    WebGL.prototype.disbaleFrameBuffer = function () {\r\n        var s = this;\r\n        s._useFrameBuffer = false;\r\n    };\r\n    WebGL.prototype.onRenderFun = function (value) {\r\n        var s = this;\r\n        s._onRenderEndFun = value;\r\n    };\r\n    Object.defineProperty(WebGL.prototype, \"frameTexture\", {\r\n        /**\r\n         * 启用framebuffer后的图片纹理\r\n         * @returns\r\n         */\r\n        get: function () {\r\n            return this._frameTexture;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    WebGL.prototype.bindTexture = function (gl, target) {\r\n        var s = this;\r\n        if (!s._frameTexture)\r\n            return;\r\n        if (gl != s._gl) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.warn(\"WebGL 中bindTexture 的gl 与传过来的gl不是同一个\");\r\n        }\r\n        gl.bindTexture(target, s._frameTexture.texture);\r\n    };\r\n    /**重新设置大小 */\r\n    WebGL.prototype.resize = function (width, height) {\r\n        var s = this;\r\n        s._width = width;\r\n        s._height = height;\r\n        // s._frameTexture.resize(s._width, s._height);\r\n        // s._sizeChange = true;\r\n    };\r\n    // private handleSizeChange(){\r\n    //     let s = this;\r\n    //     let gl = s._gl;\r\n    //     if(s._useFrameBuffer){\r\n    //         s._frameTexture.bindTexture(gl, TextureTarget.TEXTURE_2D);\r\n    //         gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, s._frameTexture.width, s._frameTexture.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);\r\n    //         gl.bindRenderbuffer(gl.RENDERBUFFER, s._frameRenderBuffer);\r\n    //         gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, s._frameTexture.width, s._frameTexture.height);\r\n    //     }\r\n    //     s._sizeChange = false;\r\n    // }\r\n    /**创建Buffer */\r\n    WebGL.prototype.createBuffer = function (data) {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        var buff = gl.createBuffer();\r\n        if (!buff) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"Buffer 创建失败\");\r\n            return;\r\n        }\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, buff);\r\n        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);\r\n        return buff;\r\n    };\r\n    /**创建索引Buffer */\r\n    WebGL.prototype.createIndexBuffer = function (data) {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        var buff = gl.createBuffer();\r\n        if (!buff) {\r\n            _utils_Log__WEBPACK_IMPORTED_MODULE_3__.Log.error(\"Index Buffer 创建失败\");\r\n            return;\r\n        }\r\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buff);\r\n        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);\r\n        return buff;\r\n    };\r\n    /**获取Attribute的大小 */\r\n    WebGL.prototype.getAttributeSize = function (type) {\r\n        var gl = this._gl;\r\n        switch (type) {\r\n            case gl.FLOAT_VEC2: return 2;\r\n            case gl.FLOAT_VEC3: return 3;\r\n            case gl.FLOAT_VEC4: return 4;\r\n        }\r\n        return 1;\r\n    };\r\n    /**获取Uniform信息 */\r\n    WebGL.prototype.getUnifromInfo = function (uniformInfo, location, data) {\r\n        var s = this;\r\n        var gl = s._gl;\r\n        var fun;\r\n        var openParam = true;\r\n        switch (uniformInfo.type) {\r\n            case gl.FLOAT:\r\n                fun = gl.uniform1f;\r\n                openParam = false;\r\n                break;\r\n            case gl.FLOAT_VEC2:\r\n                fun = gl.uniform2f;\r\n                break;\r\n            case gl.FLOAT_VEC3:\r\n                fun = gl.uniform3f;\r\n                break;\r\n            case gl.FLOAT_VEC4:\r\n                fun = gl.uniform4f;\r\n                break;\r\n            case gl.INT:\r\n            case gl.BOOL:\r\n            case gl.SAMPLER_2D:\r\n            case gl.SAMPLER_CUBE:\r\n                fun = gl.uniform1i;\r\n                openParam = false;\r\n                break;\r\n            case gl.INT_VEC2:\r\n            case gl.BOOL_VEC2:\r\n                fun = gl.uniform2i;\r\n                break;\r\n            case gl.INT_VEC3:\r\n            case gl.BOOL_VEC3:\r\n                fun = gl.uniform3i;\r\n                break;\r\n            case gl.INT_VEC4:\r\n            case gl.BOOL_VEC4:\r\n                fun = gl.uniform4i;\r\n                break;\r\n            case gl.FLOAT_MAT2:\r\n                fun = s.uniformMatrix2fv.bind(s);\r\n                openParam = false;\r\n                break;\r\n            case gl.FLOAT_MAT3:\r\n                fun = s.uniformMatrix3fv.bind(s);\r\n                openParam = false;\r\n                break;\r\n            case gl.FLOAT_MAT4:\r\n                fun = s.uniformMatrix4fv.bind(s);\r\n                openParam = false;\r\n                break;\r\n        }\r\n        return { fun: fun, openParam: openParam, location: location, data: data };\r\n    };\r\n    /**包装的unifromMatrix2fv 使其参数成为(location, data)*/\r\n    WebGL.prototype.uniformMatrix2fv = function (index, data) {\r\n        this._gl.uniformMatrix2fv(index, false, data);\r\n    };\r\n    /**包装的unifromMatrix3fv 使其参数成为(location, data)*/\r\n    WebGL.prototype.uniformMatrix3fv = function (index, data) {\r\n        this._gl.uniformMatrix3fv(index, false, data);\r\n    };\r\n    /**包装的unifromMatrix4fv 使其参数成为(location, data)*/\r\n    WebGL.prototype.uniformMatrix4fv = function (index, data) {\r\n        this._gl.uniformMatrix4fv(index, false, data);\r\n    };\r\n    return WebGL;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://testwarte/./src/webgl/WebGL.ts?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3c9bff943a15ece8e41b")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "testwarte:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatetestwarte"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Main.ts");
/******/ 	
/******/ })()
;