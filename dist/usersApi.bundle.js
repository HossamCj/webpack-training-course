"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_training_course"] = self["webpackChunkwebpack_training_course"] || []).push([["usersApi"],{

/***/ "./src/common/usersAPI.js":
/*!********************************!*\
  !*** ./src/common/usersAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\nconst ENDPOINT = \"https://jsonplaceholder.typicode.com/users/\"\r\n\r\nfunction getUsers() {\r\n    return fetch(ENDPOINT).then((response) => {\r\n        if (!response.ok) throw Error(response.statusText)\r\n        return response.json()\r\n    }).then((json) => json)\r\n}\n\n//# sourceURL=webpack://webpack-training-course/./src/common/usersAPI.js?");

/***/ })

}]);