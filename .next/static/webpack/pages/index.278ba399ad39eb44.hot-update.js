"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar CampaignIndex = function(param) {\n    var campaigns = param.campaigns;\n    var renderCampaign = function() {\n        if (!campaigns) return;\n        var items = campaigns.map(function(address) {\n            return {\n                header: address,\n                description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"View Campaign\"\n                }, void 0, false, {\n                    fileName: \"/Users/cts_admin/Work/web3/kickstart/pages/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 18\n                }, _this),\n                fluid: true\n            };\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n            items: items\n        }, void 0, false, {\n            fileName: \"/Users/cts_admin/Work/web3/kickstart/pages/index.js\",\n            lineNumber: 17,\n            columnNumber: 10\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                type: \"text/css\",\n                href: \"semantic/dist/semantic.min.css\"\n            }, void 0, false, {\n                fileName: \"/Users/cts_admin/Work/web3/kickstart/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, _this),\n            renderCampaign()\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cts_admin/Work/web3/kickstart/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, _this);\n};\n_c = CampaignIndex;\nCampaignIndex.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(ctx) {\n        var campaigns;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedCampaigns().call()\n                    ];\n                case 1:\n                    campaigns = _state.sent();\n                    return [\n                        2,\n                        {\n                            campaigns: campaigns\n                        }\n                    ];\n            }\n        });\n    });\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\nvar _c;\n$RefreshReg$(_c, \"CampaignIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQTBDO0FBQ2hCO0FBQ2dCO0FBQ087QUFFakQsSUFBTUksYUFBYSxHQUFHLGdCQUFtQjtRQUFoQkMsU0FBUyxTQUFUQSxTQUFTO0lBQ2pDLElBQU1DLGNBQWMsR0FBRyxXQUFNO1FBQzVCLElBQUksQ0FBQ0QsU0FBUyxFQUFFLE9BQU87UUFDdkIsSUFBTUUsS0FBSyxHQUFHRixTQUFTLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUs7WUFDeEMsT0FBTztnQkFDTkMsTUFBTSxFQUFFRCxPQUFPO2dCQUNmRSxXQUFXLGdCQUFFLDhEQUFDQyxHQUFDOzhCQUFDLGVBQWE7Ozs7O3lCQUFJO2dCQUNqQ0MsS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYscUJBQU8sOERBQUNYLHlEQUFVO1lBQUNLLEtBQUssRUFBRUEsS0FBSzs7Ozs7aUJBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQscUJBQ0MsOERBQUNRLEtBQUc7OzBCQUNILDhEQUFDQyxNQUFJO2dCQUNKQyxHQUFHLEVBQUMsWUFBWTtnQkFDaEJDLElBQUksRUFBQyxVQUFVO2dCQUNmQyxJQUFJLEVBQUMsZ0NBQWdDOzs7OztxQkFDOUI7WUFDUGIsY0FBYyxFQUFFOzs7Ozs7YUFDWixDQUNMO0FBQ0gsQ0FBQztBQXhCS0YsS0FBQUEsYUFBYTtBQTBCbkJBLGFBQWEsQ0FBQ2dCLGVBQWU7ZUFBRyw2RkFBT0MsR0FBRyxFQUFLO1lBQ3hDaEIsU0FBUzs7OztvQkFBRzs7d0JBQU1KLHNGQUFvQyxFQUFFLENBQUN1QixJQUFJLEVBQUU7c0JBQUE7O29CQUEvRG5CLFNBQVMsR0FBRyxhQUFtRDtvQkFDckU7O3dCQUFPOzRCQUFFQSxTQUFTLEVBQVRBLFNBQVM7eUJBQUU7c0JBQUM7OztJQUN0QixDQUFDO29CQUhzQ2dCLEdBQUc7OztHQUd6QyxDQUFDO0FBRUYsK0RBQWVqQixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5jb25zdCBDYW1wYWlnbkluZGV4ID0gKHsgY2FtcGFpZ25zIH0pID0+IHtcblx0Y29uc3QgcmVuZGVyQ2FtcGFpZ24gPSAoKSA9PiB7XG5cdFx0aWYgKCFjYW1wYWlnbnMpIHJldHVybjtcblx0XHRjb25zdCBpdGVtcyA9IGNhbXBhaWducy5tYXAoKGFkZHJlc3MpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGhlYWRlcjogYWRkcmVzcyxcblx0XHRcdFx0ZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxuXHRcdFx0XHRmbHVpZDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8bGlua1xuXHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0dHlwZT1cInRleHQvY3NzXCJcblx0XHRcdFx0aHJlZj1cInNlbWFudGljL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG5cdFx0XHQ+PC9saW5rPlxuXHRcdFx0e3JlbmRlckNhbXBhaWduKCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5DYW1wYWlnbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcblx0Y29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXHRyZXR1cm4geyBjYW1wYWlnbnMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJmYWN0b3J5IiwiQ2FyZCIsIkJ1dHRvbiIsIkNhbXBhaWduSW5kZXgiLCJjYW1wYWlnbnMiLCJyZW5kZXJDYW1wYWlnbiIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiYSIsImZsdWlkIiwiR3JvdXAiLCJkaXYiLCJsaW5rIiwicmVsIiwidHlwZSIsImhyZWYiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});