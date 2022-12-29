"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "defaultHandler": () => (/* reexport */ defaultHandler)
});

;// CONCATENATED MODULE: ./pages/api/defaultHandler.ts
function defaultHandler(req, res) {
    res.status(200).json({
        name: "test"
    });
} // https://nextjs.org/docs/api-routes/introduction

;// CONCATENATED MODULE: ./pages/api/index.ts



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(869));
module.exports = __webpack_exports__;

})();