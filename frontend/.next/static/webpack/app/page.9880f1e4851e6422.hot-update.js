"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Recently.tsx":
/*!*************************************!*\
  !*** ./app/components/Recently.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecentlyAdded; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst recentProducts = [\n    {\n        id: 1,\n        name: \"Square Sunglass\",\n        image: \"/assets/images/browserByShoap/image (1).png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    },\n    {\n        id: 2,\n        name: \"Rectangle Sunglass\",\n        image: \"/assets/images/browserByShoap/image (2).png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    },\n    {\n        id: 3,\n        name: \"Round Sunglass\",\n        image: \"/assets/images/browserByShoap/image (3).png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    },\n    {\n        id: 4,\n        name: \"Geometric Sunglass\",\n        image: \"/assets/images/browserByShoap/image (4).png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    },\n    {\n        id: 5,\n        name: \"Cats Eye Sunglass\",\n        image: \"/assets/images/browserByShoap/image (5).png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    },\n    {\n        id: 6,\n        name: \"Aviator Sunglass\",\n        image: \"/assets/images/browserByShoap/image (6).png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    },\n    {\n        id: 7,\n        name: \"Wayfarer Sunglass\",\n        image: \"/assets/images/browserByShoap/image (7).png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    },\n    {\n        id: 8,\n        name: \"Rimless Sunglass\",\n        image: \"/assets/images/browserByShoap/image (8).png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    },\n    {\n        id: 9,\n        name: \"Half Rim Sunglass\",\n        image: \"/assets/images/browserByShoap/rec.png\",\n        originalPrice: 2000,\n        discountPercentage: 50,\n        finalPrice: 1000,\n        rating: 4.2,\n        isFavorite: false\n    }\n];\n// Create a triple-length array for truly seamless infinite scrolling\nconst infiniteProducts = [\n    ...recentProducts,\n    ...recentProducts,\n    ...recentProducts\n];\nfunction RecentlyAdded() {\n    _s();\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const scrollContainer = scrollRef.current;\n        if (!scrollContainer) return;\n        let animationFrameId;\n        const scrollSpeed = 0.5; // pixels per frame - adjust for slower/faster scrolling\n        const infiniteScroll = ()=>{\n            setScrollPosition((prevPosition)=>{\n                const newPosition = prevPosition + scrollSpeed;\n                // If we've scrolled far enough, reset to beginning of second set\n                // This creates the illusion of infinite scrolling\n                if (newPosition >= scrollContainer.scrollWidth / 3) {\n                    return newPosition - scrollContainer.scrollWidth / 3;\n                }\n                return newPosition;\n            });\n            animationFrameId = requestAnimationFrame(infiniteScroll);\n        };\n        // Set initial scroll position to the start of the middle set of products\n        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;\n        setScrollPosition(scrollContainer.scrollWidth / 3);\n        animationFrameId = requestAnimationFrame(infiniteScroll);\n        return ()=>{\n            cancelAnimationFrame(animationFrameId);\n        };\n    }, []);\n    // Apply scroll position whenever it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (scrollRef.current) {\n            scrollRef.current.scrollLeft = scrollPosition;\n        }\n    }, [\n        scrollPosition\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex flex-nowrap\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[468px] bg-[#0A0A23] p-16 flex flex-col justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white text-[32px] font-bold leading-[39px] font-['Century_Gothic'] mb-4\",\n                        children: [\n                            \"Recently\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 19\n                            }, this),\n                            \"Added\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"text-[#6053FB] text-base font-['Century_Gothic'] font-bold\",\n                        children: \"Browse All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: scrollRef,\n                className: \"flex-1 bg-black flex overflow-x-auto scrollbar-hide\",\n                style: {\n                    scrollBehavior: \"auto\",\n                    WebkitOverflowScrolling: \"touch\",\n                    scrollbarWidth: \"none\",\n                    msOverflowStyle: \"none\"\n                },\n                children: infiniteProducts.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-[280px] m-3 bg-white rounded-xl p-4 shadow-md flex flex-col relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute top-3 right-3 w-8 h-8 flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"24\",\n                                    height: \"24\",\n                                    viewBox: \"0 0 24 24\",\n                                    fill: \"none\",\n                                    stroke: \"currentColor\",\n                                    strokeWidth: \"2\",\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    className: \"text-blue-700\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                        lineNumber: 182,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 px-4 py-6 flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.image,\n                                    alt: product.name,\n                                    className: \"max-h-[120px] object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                    lineNumber: 188,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                lineNumber: 187,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center bg-gray-100 self-start rounded-full px-2 py-1 mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        viewBox: \"0 0 24 24\",\n                                        fill: \"currentColor\",\n                                        className: \"w-4 h-4 text-blue-500 mr-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z\",\n                                            clipRule: \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                            lineNumber: 203,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                        lineNumber: 197,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm\",\n                                        children: product.rating\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                        lineNumber: 205,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                lineNumber: 196,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg font-medium text-gray-900 mb-1\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                lineNumber: 209,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2 mb-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-500 line-through\",\n                                        children: [\n                                            \"₹\",\n                                            product.originalPrice.toLocaleString()\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                        lineNumber: 213,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-red-500 text-white text-xs px-2 py-1 rounded\",\n                                        children: [\n                                            product.discountPercentage,\n                                            \"% Off\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                        lineNumber: 214,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                lineNumber: 212,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl font-bold\",\n                                children: [\n                                    \"₹\",\n                                    product.finalPrice.toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                                lineNumber: 220,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, \"\".concat(product.id, \"-\").concat(index), true, {\n                        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tarunkumar/Desktop/indieeyes/frontend/app/components/Recently.tsx\",\n        lineNumber: 146,\n        columnNumber: 5\n    }, this);\n}\n_s(RecentlyAdded, \"ayQKRaJNxsncX1Af0ZvMB7qXdn4=\");\n_c = RecentlyAdded;\nvar _c;\n$RefreshReg$(_c, \"RecentlyAdded\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1JlY2VudGx5LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMkQ7QUFFM0QsTUFBTUksaUJBQWlCO0lBQ3JCO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGVBQWU7UUFDZkMsb0JBQW9CO1FBQ3BCQyxZQUFZO1FBQ1pDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsZUFBZTtRQUNmQyxvQkFBb0I7UUFDcEJDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFUCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxlQUFlO1FBQ2ZDLG9CQUFvQjtRQUNwQkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VQLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGVBQWU7UUFDZkMsb0JBQW9CO1FBQ3BCQyxZQUFZO1FBQ1pDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsZUFBZTtRQUNmQyxvQkFBb0I7UUFDcEJDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFUCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxlQUFlO1FBQ2ZDLG9CQUFvQjtRQUNwQkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VQLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGVBQWU7UUFDZkMsb0JBQW9CO1FBQ3BCQyxZQUFZO1FBQ1pDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsZUFBZTtRQUNmQyxvQkFBb0I7UUFDcEJDLFlBQVk7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QUFHakMsV0FBVTswQ0FBMENZLFFBQVFwQyxJQUFJOzs7Ozs7MENBR3BFLDhEQUFDdUI7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDZ0M7d0NBQUtoQyxXQUFVOzs0Q0FBNkI7NENBQUVZLFFBQVFsQyxhQUFhLENBQUN3RCxjQUFjOzs7Ozs7O2tEQUNuRiw4REFBQ0Y7d0NBQUtoQyxXQUFVOzs0Q0FDYlksUUFBUWpDLGtCQUFrQjs0Q0FBQzs7Ozs7Ozs7Ozs7OzswQ0FLaEMsOERBQUNvQjtnQ0FBSUMsV0FBVTs7b0NBQW9CO29DQUFFWSxRQUFRaEMsVUFBVSxDQUFDc0QsY0FBYzs7Ozs7Ozs7dUJBdkRqRSxHQUFpQnJCLE9BQWRELFFBQVFyQyxFQUFFLEVBQUMsS0FBUyxPQUFOc0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RGxDO0dBOUh3QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1JlY2VudGx5LnRzeD80ZDVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmVjZW50UHJvZHVjdHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnU3F1YXJlIFN1bmdsYXNzJyxcbiAgICBpbWFnZTogJy9hc3NldHMvaW1hZ2VzL2Jyb3dzZXJCeVNob2FwL2ltYWdlICgxKS5wbmcnLFxuICAgIG9yaWdpbmFsUHJpY2U6IDIwMDAsXG4gICAgZGlzY291bnRQZXJjZW50YWdlOiA1MCxcbiAgICBmaW5hbFByaWNlOiAxMDAwLFxuICAgIHJhdGluZzogNC4yLFxuICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnUmVjdGFuZ2xlIFN1bmdsYXNzJyxcbiAgICBpbWFnZTogJy9hc3NldHMvaW1hZ2VzL2Jyb3dzZXJCeVNob2FwL2ltYWdlICgyKS5wbmcnLFxuICAgIG9yaWdpbmFsUHJpY2U6IDIwMDAsXG4gICAgZGlzY291bnRQZXJjZW50YWdlOiA1MCxcbiAgICBmaW5hbFByaWNlOiAxMDAwLFxuICAgIHJhdGluZzogNC4yLFxuICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnUm91bmQgU3VuZ2xhc3MnLFxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvYnJvd3NlckJ5U2hvYXAvaW1hZ2UgKDMpLnBuZycsXG4gICAgb3JpZ2luYWxQcmljZTogMjAwMCxcbiAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IDUwLFxuICAgIGZpbmFsUHJpY2U6IDEwMDAsXG4gICAgcmF0aW5nOiA0LjIsXG4gICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6ICdHZW9tZXRyaWMgU3VuZ2xhc3MnLFxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvYnJvd3NlckJ5U2hvYXAvaW1hZ2UgKDQpLnBuZycsXG4gICAgb3JpZ2luYWxQcmljZTogMjAwMCxcbiAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IDUwLFxuICAgIGZpbmFsUHJpY2U6IDEwMDAsXG4gICAgcmF0aW5nOiA0LjIsXG4gICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6ICdDYXRzIEV5ZSBTdW5nbGFzcycsXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9icm93c2VyQnlTaG9hcC9pbWFnZSAoNSkucG5nJyxcbiAgICBvcmlnaW5hbFByaWNlOiAyMDAwLFxuICAgIGRpc2NvdW50UGVyY2VudGFnZTogNTAsXG4gICAgZmluYWxQcmljZTogMTAwMCxcbiAgICByYXRpbmc6IDQuMixcbiAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogJ0F2aWF0b3IgU3VuZ2xhc3MnLFxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvYnJvd3NlckJ5U2hvYXAvaW1hZ2UgKDYpLnBuZycsXG4gICAgb3JpZ2luYWxQcmljZTogMjAwMCxcbiAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IDUwLFxuICAgIGZpbmFsUHJpY2U6IDEwMDAsXG4gICAgcmF0aW5nOiA0LjIsXG4gICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiA3LFxuICAgIG5hbWU6ICdXYXlmYXJlciBTdW5nbGFzcycsXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9icm93c2VyQnlTaG9hcC9pbWFnZSAoNykucG5nJyxcbiAgICBvcmlnaW5hbFByaWNlOiAyMDAwLFxuICAgIGRpc2NvdW50UGVyY2VudGFnZTogNTAsXG4gICAgZmluYWxQcmljZTogMTAwMCxcbiAgICByYXRpbmc6IDQuMixcbiAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDgsXG4gICAgbmFtZTogJ1JpbWxlc3MgU3VuZ2xhc3MnLFxuICAgIGltYWdlOiAnL2Fzc2V0cy9pbWFnZXMvYnJvd3NlckJ5U2hvYXAvaW1hZ2UgKDgpLnBuZycsXG4gICAgb3JpZ2luYWxQcmljZTogMjAwMCxcbiAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IDUwLFxuICAgIGZpbmFsUHJpY2U6IDEwMDAsXG4gICAgcmF0aW5nOiA0LjIsXG4gICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiA5LFxuICAgIG5hbWU6ICdIYWxmIFJpbSBTdW5nbGFzcycsXG4gICAgaW1hZ2U6ICcvYXNzZXRzL2ltYWdlcy9icm93c2VyQnlTaG9hcC9yZWMucG5nJyxcbiAgICBvcmlnaW5hbFByaWNlOiAyMDAwLFxuICAgIGRpc2NvdW50UGVyY2VudGFnZTogNTAsXG4gICAgZmluYWxQcmljZTogMTAwMCxcbiAgICByYXRpbmc6IDQuMixcbiAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICB9XG5dO1xuXG4vLyBDcmVhdGUgYSB0cmlwbGUtbGVuZ3RoIGFycmF5IGZvciB0cnVseSBzZWFtbGVzcyBpbmZpbml0ZSBzY3JvbGxpbmdcbmNvbnN0IGluZmluaXRlUHJvZHVjdHMgPSBbLi4ucmVjZW50UHJvZHVjdHMsIC4uLnJlY2VudFByb2R1Y3RzLCAuLi5yZWNlbnRQcm9kdWN0c107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2VudGx5QWRkZWQoKSB7XG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHNjcm9sbFJlZi5jdXJyZW50O1xuICAgIGlmICghc2Nyb2xsQ29udGFpbmVyKSByZXR1cm47XG4gICAgXG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lSWQ6IG51bWJlcjtcbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IDAuNTsgLy8gcGl4ZWxzIHBlciBmcmFtZSAtIGFkanVzdCBmb3Igc2xvd2VyL2Zhc3RlciBzY3JvbGxpbmdcbiAgICBcbiAgICBjb25zdCBpbmZpbml0ZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uKHByZXZQb3NpdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gcHJldlBvc2l0aW9uICsgc2Nyb2xsU3BlZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSd2ZSBzY3JvbGxlZCBmYXIgZW5vdWdoLCByZXNldCB0byBiZWdpbm5pbmcgb2Ygc2Vjb25kIHNldFxuICAgICAgICAvLyBUaGlzIGNyZWF0ZXMgdGhlIGlsbHVzaW9uIG9mIGluZmluaXRlIHNjcm9sbGluZ1xuICAgICAgICBpZiAobmV3UG9zaXRpb24gPj0gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFdpZHRoIC8gMykge1xuICAgICAgICAgIHJldHVybiBuZXdQb3NpdGlvbiAtIChzY3JvbGxDb250YWluZXIuc2Nyb2xsV2lkdGggLyAzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaW5maW5pdGVTY3JvbGwpO1xuICAgIH07XG4gICAgXG4gICAgLy8gU2V0IGluaXRpYWwgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBzdGFydCBvZiB0aGUgbWlkZGxlIHNldCBvZiBwcm9kdWN0c1xuICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0ID0gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFdpZHRoIC8gMztcbiAgICBzZXRTY3JvbGxQb3NpdGlvbihzY3JvbGxDb250YWluZXIuc2Nyb2xsV2lkdGggLyAzKTtcbiAgICBcbiAgICBhbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGluZmluaXRlU2Nyb2xsKTtcbiAgICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICBcbiAgLy8gQXBwbHkgc2Nyb2xsIHBvc2l0aW9uIHdoZW5ldmVyIGl0IGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Nyb2xsUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNjcm9sbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgPSBzY3JvbGxQb3NpdGlvbjtcbiAgICB9XG4gIH0sIFtzY3JvbGxQb3NpdGlvbl0pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtbm93cmFwXCI+XG4gICAgICB7LyogTGVmdCBzZWN0aW9uIC0gRGFyayBiYWNrZ3JvdW5kIHdpdGggdGl0bGUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzQ2OHB4XSBiZy1bIzBBMEEyM10gcC0xNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtWzMycHhdIGZvbnQtYm9sZCBsZWFkaW5nLVszOXB4XSBmb250LVsnQ2VudHVyeV9Hb3RoaWMnXSBtYi00XCI+XG4gICAgICAgICAgUmVjZW50bHk8YnIgLz5BZGRlZFxuICAgICAgICA8L2gyPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtWyM2MDUzRkJdIHRleHQtYmFzZSBmb250LVsnQ2VudHVyeV9Hb3RoaWMnXSBmb250LWJvbGRcIj5cbiAgICAgICAgICBCcm93c2UgQWxsXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmlnaHQgc2VjdGlvbiAtIFByb2R1Y3QgY2FyZHMgKi99XG4gICAgICA8ZGl2IFxuICAgICAgICByZWY9e3Njcm9sbFJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLWJsYWNrIGZsZXggb3ZlcmZsb3cteC1hdXRvIHNjcm9sbGJhci1oaWRlXCJcbiAgICAgICAgc3R5bGU9e3sgc2Nyb2xsQmVoYXZpb3I6ICdhdXRvJywgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsIHNjcm9sbGJhcldpZHRoOiAnbm9uZScsIG1zT3ZlcmZsb3dTdHlsZTogJ25vbmUnIH19XG4gICAgICA+XG4gICAgICAgIHtpbmZpbml0ZVByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAga2V5PXtgJHtwcm9kdWN0LmlkfS0ke2luZGV4fWB9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLXctWzI4MHB4XSBtLTMgYmctd2hpdGUgcm91bmRlZC14bCBwLTQgc2hhZG93LW1kIGZsZXggZmxleC1jb2wgcmVsYXRpdmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBGYXZvcml0ZSBidXR0b24gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0zIHJpZ2h0LTMgdy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8c3ZnIFxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIiBcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIiBcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIiBcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjg0IDQuNjFhNS41IDUuNSAwIDAgMC03Ljc4IDBMMTIgNS42N2wtMS4wNi0xLjA2YTUuNSA1LjUgMCAwIDAtNy43OCA3Ljc4bDEuMDYgMS4wNkwxMiAyMS4yM2w3Ljc4LTcuNzggMS4wNi0xLjA2YTUuNSA1LjUgMCAwIDAgMC03Ljc4elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgey8qIFByb2R1Y3QgaW1hZ2UgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgcHgtNCBweS02IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfSBcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LWgtWzEyMHB4XSBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFJhdGluZyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctZ3JheS0xMDAgc2VsZi1zdGFydCByb3VuZGVkLWZ1bGwgcHgtMiBweS0xIG1iLTJcIj5cbiAgICAgICAgICAgICAgPHN2ZyBcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiIFxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtYmx1ZS01MDAgbXItMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwLjc4OCAzLjIxYy40NDgtMS4wNzcgMS45NzYtMS4wNzcgMi40MjQgMGwyLjA4MiA1LjAwNyA1LjQwNC40MzNjMS4xNjQuMDkzIDEuNjM2IDEuNTQ1Ljc0OSAyLjMwNWwtNC4xMTcgMy41MjcgMS4yNTcgNS4yNzNjLjI3MSAxLjEzNi0uOTY0IDIuMDMzLTEuOTYgMS40MjVMMTIgMTguMzU0IDcuMzczIDIxLjE4Yy0uOTk2LjYwOC0yLjIzMS0uMjktMS45Ni0xLjQyNWwxLjI1Ny01LjI3My00LjExNy0zLjUyN2MtLjg4Ny0uNzYtLjQxNS0yLjIxMi43NDktMi4zMDVsNS40MDQtLjQzMyAyLjA4Mi01LjAwNnpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPntwcm9kdWN0LnJhdGluZ308L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFByb2R1Y3QgbmFtZSAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgbWItMVwiPntwcm9kdWN0Lm5hbWV9PC9oMz5cblxuICAgICAgICAgICAgey8qIFByaWNlIHNlY3Rpb24gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTFcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBsaW5lLXRocm91Z2hcIj7igrl7cHJvZHVjdC5vcmlnaW5hbFByaWNlLnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgdGV4dC14cyBweC0yIHB5LTEgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRpc2NvdW50UGVyY2VudGFnZX0lIE9mZlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEZpbmFsIHByaWNlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPuKCuXtwcm9kdWN0LmZpbmFsUHJpY2UudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyZWNlbnRQcm9kdWN0cyIsImlkIiwibmFtZSIsImltYWdlIiwib3JpZ2luYWxQcmljZSIsImRpc2NvdW50UGVyY2VudGFnZSIsImZpbmFsUHJpY2UiLCJyYXRpbmciLCJpc0Zhdm9yaXRlIiwiaW5maW5pdGVQcm9kdWN0cyIsIlJlY2VudGx5QWRkZWQiLCJzY3JvbGxSZWYiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsQ29udGFpbmVyIiwiY3VycmVudCIsImFuaW1hdGlvbkZyYW1lSWQiLCJzY3JvbGxTcGVlZCIsImluZmluaXRlU2Nyb2xsIiwicHJldlBvc2l0aW9uIiwibmV3UG9zaXRpb24iLCJzY3JvbGxXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbExlZnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnIiLCJhIiwiaHJlZiIsInJlZiIsInN0eWxlIiwic2Nyb2xsQmVoYXZpb3IiLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsInNjcm9sbGJhcldpZHRoIiwibXNPdmVyZmxvd1N0eWxlIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwiYnV0dG9uIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJwYXRoIiwiZCIsImltZyIsInNyYyIsImFsdCIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJzcGFuIiwiaDMiLCJ0b0xvY2FsZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Recently.tsx\n"));

/***/ })

});