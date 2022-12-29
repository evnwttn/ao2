"use strict";
(() => {
var exports = {};
exports.id = 876;
exports.ids = [876];
exports.modules = {

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultHandler": () => (/* binding */ defaultHandler)
/* harmony export */ });
function defaultHandler(req, res) {
    res.status(200).json({
        name: "test"
    });
} // https://nextjs.org/docs/api-routes/introduction


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(133));
module.exports = __webpack_exports__;

})();