/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "proxy";
exports.ids = ["proxy"];
exports.modules = {

/***/ "(middleware)/./messages lazy recursive ^\\.\\/.*\\.json$":
/*!********************************************************!*\
  !*** ./messages/ lazy ^\.\/.*\.json$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.json": [
		"(middleware)/./messages/ar.json",
		"_middleware_messages_ar_json"
	],
	"./en.json": [
		"(middleware)/./messages/en.json",
		"_middleware_messages_en_json"
	],
	"./hi.json": [
		"(middleware)/./messages/hi.json",
		"_middleware_messages_hi_json"
	],
	"./ja.json": [
		"(middleware)/./messages/ja.json",
		"_middleware_messages_ja_json"
	],
	"./kh.json": [
		"(middleware)/./messages/kh.json",
		"_middleware_messages_kh_json"
	],
	"./ko.json": [
		"(middleware)/./messages/ko.json",
		"_middleware_messages_ko_json"
	],
	"./vi.json": [
		"(middleware)/./messages/vi.json",
		"_middleware_messages_vi_json"
	],
	"./zh.json": [
		"(middleware)/./messages/zh.json",
		"_middleware_messages_zh_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(middleware)/./messages lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=E%3A%5C%E1%9E%80%E1%9E%B6%E1%9E%84%E1%9E%B6%5Ccode%5Cloctroi-next%5Csrc%5Cproxy.ts&page=%2Fproxy&rootDir=E%3A%5C%E1%9E%80%E1%9E%B6%E1%9E%84%E1%9E%B6%5Ccode%5Cloctroi-next&matchers=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=E%3A%5C%E1%9E%80%E1%9E%B6%E1%9E%84%E1%9E%B6%5Ccode%5Cloctroi-next%5Csrc%5Cproxy.ts&page=%2Fproxy&rootDir=E%3A%5C%E1%9E%80%E1%9E%B6%E1%9E%84%E1%9E%B6%5Ccode%5Cloctroi-next&matchers=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_dist_build_adapter_setup_node_env_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/adapter/setup-node-env.external */ \"next/dist/build/adapter/setup-node-env.external\");\n/* harmony import */ var next_dist_build_adapter_setup_node_env_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_adapter_setup_node_env_external__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/globals */ \"(middleware)/./node_modules/next/dist/server/web/globals.js\");\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/adapter */ \"(middleware)/./node_modules/next/dist/server/web/adapter.js\");\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_lib_incremental_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/lib/incremental-cache */ \"(middleware)/./node_modules/next/dist/server/lib/incremental-cache/index.js\");\n/* harmony import */ var next_dist_server_lib_incremental_cache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_incremental_cache__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_proxy_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/proxy.ts */ \"(middleware)/./src/proxy.ts\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/components/is-next-router-error */ \"(middleware)/./node_modules/next/dist/client/components/is-next-router-error.js\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/web/utils */ \"(middleware)/./node_modules/next/dist/server/web/utils.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nconst incrementalCacheHandler = null\n// Import the userland code.\n;\n\n\n\nconst mod = {\n    ..._src_proxy_ts__WEBPACK_IMPORTED_MODULE_4__\n};\nconst page = \"/proxy\";\nconst isProxy = page === '/proxy' || page === '/src/proxy';\nconst handlerUserland = (isProxy ? mod.proxy : mod.middleware) || mod.default;\nclass ProxyMissingExportError extends Error {\n    constructor(message){\n        super(message);\n        // Stack isn't useful here, remove it considering it spams logs during development.\n        this.stack = '';\n    }\n}\n// TODO: This spams logs during development. Find a better way to handle this.\n// Removing this will spam \"fn is not a function\" logs which is worse.\nif (typeof handlerUserland !== 'function') {\n    throw new ProxyMissingExportError(`The ${isProxy ? 'Proxy' : 'Middleware'} file \"${page}\" must export a function named \\`${isProxy ? 'proxy' : 'middleware'}\\` or a default function.`);\n}\n// Proxy will only sent out the FetchEvent to next server,\n// so load instrumentation module here and track the error inside proxy module.\nfunction errorHandledHandler(fn) {\n    return async (...args)=>{\n        try {\n            return await fn(...args);\n        } catch (err) {\n            // In development, error the navigation API usage in runtime,\n            // since it's not allowed to be used in proxy as it's outside of react component tree.\n            if (true) {\n                if ((0,next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_5__.isNextRouterError)(err)) {\n                    err.message = `Next.js navigation API is not allowed to be used in ${isProxy ? 'Proxy' : 'Middleware'}.`;\n                    throw err;\n                }\n            }\n            const req = args[0];\n            const url = new URL(req.url);\n            const resource = url.pathname + url.search;\n            await (0,next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_1__.edgeInstrumentationOnRequestError)(err, {\n                path: resource,\n                method: req.method,\n                headers: Object.fromEntries(req.headers.entries())\n            }, {\n                routerKind: 'Pages Router',\n                routePath: '/proxy',\n                routeType: 'proxy',\n                revalidateReason: undefined\n            });\n            throw err;\n        }\n    };\n}\nconst internalHandler = (opts)=>{\n    return (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_2__.adapter)({\n        ...opts,\n        IncrementalCache: next_dist_server_lib_incremental_cache__WEBPACK_IMPORTED_MODULE_3__.IncrementalCache,\n        incrementalCacheHandler,\n        page,\n        handler: errorHandledHandler(handlerUserland)\n    });\n};\nasync function handler(request, ctx) {\n    const result = await internalHandler({\n        request: {\n            url: request.url,\n            method: request.method,\n            headers: (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_6__.toNodeOutgoingHttpHeaders)(request.headers),\n            nextConfig: {\n                basePath: \"\",\n                i18n: \"\",\n                trailingSlash: Boolean(false),\n                experimental: {\n                    cacheLife: {\"default\":{\"stale\":300,\"revalidate\":900,\"expire\":4294967294},\"seconds\":{\"stale\":30,\"revalidate\":1,\"expire\":60},\"minutes\":{\"stale\":300,\"revalidate\":60,\"expire\":3600},\"hours\":{\"stale\":300,\"revalidate\":3600,\"expire\":86400},\"days\":{\"stale\":300,\"revalidate\":86400,\"expire\":604800},\"weeks\":{\"stale\":300,\"revalidate\":604800,\"expire\":2592000},\"max\":{\"stale\":300,\"revalidate\":2592000,\"expire\":31536000}},\n                    authInterrupts: Boolean(false),\n                    clientParamParsingOrigins: []\n                }\n            },\n            page: {\n                name: page\n            },\n            body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body ?? undefined : undefined,\n            waitUntil: ctx.waitUntil,\n            requestMeta: ctx.requestMeta,\n            signal: ctx.signal || new AbortController().signal\n        }\n    });\n    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, result.waitUntil);\n    return result.response;\n}\n// backwards compat\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (internalHandler);\n\n//# sourceMappingURL=middleware.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1taWRkbGV3YXJlLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPUUlM0ElNUMlRTElOUUlODAlRTElOUUlQjYlRTElOUUlODQlRTElOUUlQjYlNUNjb2RlJTVDbG9jdHJvaS1uZXh0JTVDc3JjJTVDcHJveHkudHMmcGFnZT0lMkZwcm94eSZyb290RGlyPUUlM0ElNUMlRTElOUUlODAlRTElOUUlQjYlRTElOUUlODQlRTElOUUlQjYlNUNjb2RlJTVDbG9jdHJvaS1uZXh0Jm1hdGNoZXJzPSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDbkI7QUFDaUI7QUFDbUI7QUFDMUU7QUFDQTtBQUNBLENBQXVDO0FBQzBDO0FBQ0k7QUFDZDtBQUN2RTtBQUNBLE9BQU8sMENBQUk7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtDQUFrQyxRQUFRLEtBQUssbUNBQW1DLGlDQUFpQztBQUNoSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsZ0JBQWdCLElBQXFDO0FBQ3JELG9CQUFvQixtR0FBaUI7QUFDckMseUZBQXlGLGlDQUFpQztBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0ZBQWlDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBTztBQUNsQjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFGQUF5QjtBQUM5QztBQUNBLDBCQUEwQixFQUE0QjtBQUN0RCxzQkFBc0IsRUFBOEI7QUFDcEQsdUNBQXVDLEtBQWlDO0FBQ3hFO0FBQ0EsK0JBQStCLDJZQUE2QjtBQUM1RCw0Q0FBNEMsS0FBK0M7QUFDM0YsK0NBQStDLEVBQStDO0FBQzlGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7QUFFL0IiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3QvYnVpbGQvYWRhcHRlci9zZXR1cC1ub2RlLWVudi5leHRlcm5hbFwiO1xuaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci93ZWIvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgYWRhcHRlciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi9hZGFwdGVyXCI7XG5pbXBvcnQgeyBJbmNyZW1lbnRhbENhY2hlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL2luY3JlbWVudGFsLWNhY2hlXCI7XG5jb25zdCBpbmNyZW1lbnRhbENhY2hlSGFuZGxlciA9IG51bGxcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIF9tb2QgZnJvbSBcIi4vc3JjL3Byb3h5LnRzXCI7XG5pbXBvcnQgeyBlZGdlSW5zdHJ1bWVudGF0aW9uT25SZXF1ZXN0RXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci93ZWIvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgaXNOZXh0Um91dGVyRXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2lzLW5leHQtcm91dGVyLWVycm9yXCI7XG5pbXBvcnQgeyB0b05vZGVPdXRnb2luZ0h0dHBIZWFkZXJzIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3V0aWxzXCI7XG5jb25zdCBtb2QgPSB7XG4gICAgLi4uX21vZFxufTtcbmNvbnN0IHBhZ2UgPSBcIi9wcm94eVwiO1xuY29uc3QgaXNQcm94eSA9IHBhZ2UgPT09ICcvcHJveHknIHx8IHBhZ2UgPT09ICcvc3JjL3Byb3h5JztcbmNvbnN0IGhhbmRsZXJVc2VybGFuZCA9IChpc1Byb3h5ID8gbW9kLnByb3h5IDogbW9kLm1pZGRsZXdhcmUpIHx8IG1vZC5kZWZhdWx0O1xuY2xhc3MgUHJveHlNaXNzaW5nRXhwb3J0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICAvLyBTdGFjayBpc24ndCB1c2VmdWwgaGVyZSwgcmVtb3ZlIGl0IGNvbnNpZGVyaW5nIGl0IHNwYW1zIGxvZ3MgZHVyaW5nIGRldmVsb3BtZW50LlxuICAgICAgICB0aGlzLnN0YWNrID0gJyc7XG4gICAgfVxufVxuLy8gVE9ETzogVGhpcyBzcGFtcyBsb2dzIGR1cmluZyBkZXZlbG9wbWVudC4gRmluZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuXG4vLyBSZW1vdmluZyB0aGlzIHdpbGwgc3BhbSBcImZuIGlzIG5vdCBhIGZ1bmN0aW9uXCIgbG9ncyB3aGljaCBpcyB3b3JzZS5cbmlmICh0eXBlb2YgaGFuZGxlclVzZXJsYW5kICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFByb3h5TWlzc2luZ0V4cG9ydEVycm9yKGBUaGUgJHtpc1Byb3h5ID8gJ1Byb3h5JyA6ICdNaWRkbGV3YXJlJ30gZmlsZSBcIiR7cGFnZX1cIiBtdXN0IGV4cG9ydCBhIGZ1bmN0aW9uIG5hbWVkIFxcYCR7aXNQcm94eSA/ICdwcm94eScgOiAnbWlkZGxld2FyZSd9XFxgIG9yIGEgZGVmYXVsdCBmdW5jdGlvbi5gKTtcbn1cbi8vIFByb3h5IHdpbGwgb25seSBzZW50IG91dCB0aGUgRmV0Y2hFdmVudCB0byBuZXh0IHNlcnZlcixcbi8vIHNvIGxvYWQgaW5zdHJ1bWVudGF0aW9uIG1vZHVsZSBoZXJlIGFuZCB0cmFjayB0aGUgZXJyb3IgaW5zaWRlIHByb3h5IG1vZHVsZS5cbmZ1bmN0aW9uIGVycm9ySGFuZGxlZEhhbmRsZXIoZm4pIHtcbiAgICByZXR1cm4gYXN5bmMgKC4uLmFyZ3MpPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZm4oLi4uYXJncyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gSW4gZGV2ZWxvcG1lbnQsIGVycm9yIHRoZSBuYXZpZ2F0aW9uIEFQSSB1c2FnZSBpbiBydW50aW1lLFxuICAgICAgICAgICAgLy8gc2luY2UgaXQncyBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHByb3h5IGFzIGl0J3Mgb3V0c2lkZSBvZiByZWFjdCBjb21wb25lbnQgdHJlZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmV4dFJvdXRlckVycm9yKGVycikpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBgTmV4dC5qcyBuYXZpZ2F0aW9uIEFQSSBpcyBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluICR7aXNQcm94eSA/ICdQcm94eScgOiAnTWlkZGxld2FyZSd9LmA7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXEgPSBhcmdzWzBdO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICAgICAgICAgIGF3YWl0IGVkZ2VJbnN0cnVtZW50YXRpb25PblJlcXVlc3RFcnJvcihlcnIsIHtcbiAgICAgICAgICAgICAgICBwYXRoOiByZXNvdXJjZSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJlcS5tZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogT2JqZWN0LmZyb21FbnRyaWVzKHJlcS5oZWFkZXJzLmVudHJpZXMoKSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByb3V0ZXJLaW5kOiAnUGFnZXMgUm91dGVyJyxcbiAgICAgICAgICAgICAgICByb3V0ZVBhdGg6ICcvcHJveHknLFxuICAgICAgICAgICAgICAgIHJvdXRlVHlwZTogJ3Byb3h5JyxcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlUmVhc29uOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IGludGVybmFsSGFuZGxlciA9IChvcHRzKT0+e1xuICAgIHJldHVybiBhZGFwdGVyKHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgSW5jcmVtZW50YWxDYWNoZSxcbiAgICAgICAgaW5jcmVtZW50YWxDYWNoZUhhbmRsZXIsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGhhbmRsZXI6IGVycm9ySGFuZGxlZEhhbmRsZXIoaGFuZGxlclVzZXJsYW5kKVxuICAgIH0pO1xufTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIGN0eCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGludGVybmFsSGFuZGxlcih7XG4gICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczogdG9Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpLFxuICAgICAgICAgICAgbmV4dENvbmZpZzoge1xuICAgICAgICAgICAgICAgIGJhc2VQYXRoOiBwcm9jZXNzLmVudi5fX05FWFRfQkFTRV9QQVRILFxuICAgICAgICAgICAgICAgIGkxOG46IHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX0NPTkZJRyxcbiAgICAgICAgICAgICAgICB0cmFpbGluZ1NsYXNoOiBCb29sZWFuKHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCksXG4gICAgICAgICAgICAgICAgZXhwZXJpbWVudGFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlTGlmZTogcHJvY2Vzcy5lbnYuX19ORVhUX0NBQ0hFX0xJRkUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhJbnRlcnJ1cHRzOiBCb29sZWFuKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBFUklNRU5UQUxfQVVUSF9JTlRFUlJVUFRTKSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50UGFyYW1QYXJzaW5nT3JpZ2luczogcHJvY2Vzcy5lbnYuX19ORVhUX0NMSUVOVF9QQVJBTV9QQVJTSU5HX09SSUdJTlNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgICAgIG5hbWU6IHBhZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiByZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgJiYgcmVxdWVzdC5tZXRob2QgIT09ICdIRUFEJyA/IHJlcXVlc3QuYm9keSA/PyB1bmRlZmluZWQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB3YWl0VW50aWw6IGN0eC53YWl0VW50aWwsXG4gICAgICAgICAgICByZXF1ZXN0TWV0YTogY3R4LnJlcXVlc3RNZXRhLFxuICAgICAgICAgICAgc2lnbmFsOiBjdHguc2lnbmFsIHx8IG5ldyBBYm9ydENvbnRyb2xsZXIoKS5zaWduYWxcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGN0eC53YWl0VW50aWwgPT0gbnVsbCA/IHZvaWQgMCA6IGN0eC53YWl0VW50aWwuY2FsbChjdHgsIHJlc3VsdC53YWl0VW50aWwpO1xuICAgIHJldHVybiByZXN1bHQucmVzcG9uc2U7XG59XG4vLyBiYWNrd2FyZHMgY29tcGF0XG5leHBvcnQgZGVmYXVsdCBpbnRlcm5hbEhhbmRsZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pZGRsZXdhcmUuanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=E%3A%5C%E1%9E%80%E1%9E%B6%E1%9E%84%E1%9E%B6%5Ccode%5Cloctroi-next%5Csrc%5Cproxy.ts&page=%2Fproxy&rootDir=E%3A%5C%E1%9E%80%E1%9E%B6%E1%9E%84%E1%9E%B6%5Ccode%5Cloctroi-next&matchers=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(middleware)/./src/i18n.ts":
/*!*********************!*\
  !*** ./src/i18n.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   locales: () => (/* binding */ locales)\n/* harmony export */ });\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl/server */ \"(middleware)/./node_modules/next-intl/dist/esm/server/react-server/getRequestConfig.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(middleware)/./node_modules/next/dist/api/navigation.react-server.js\");\n\n\nconst locales = [\n    'kh',\n    'en',\n    'vi',\n    'zh',\n    'hi',\n    'ja',\n    'ko',\n    'ar'\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_intl_server__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(async ({ requestLocale })=>{\n    const locale = await requestLocale;\n    if (!locale || !locales.includes(locale)) (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.notFound)();\n    return {\n        locale,\n        messages: (await __webpack_require__(\"(middleware)/./messages lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${locale}.json`)).default\n    };\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2kxOG4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNUO0FBRWxDLE1BQU1FLFVBQVU7SUFBQztJQUFNO0lBQU07SUFBTTtJQUFNO0lBQU07SUFBTTtJQUFNO0NBQUssQ0FBQztBQUV4RSxpRUFBZUYsNERBQWdCQSxDQUFDLE9BQU8sRUFBQ0csYUFBYSxFQUFDO0lBQ3BELE1BQU1DLFNBQVMsTUFBTUQ7SUFFckIsSUFBSSxDQUFDQyxVQUFVLENBQUNGLFFBQVFHLFFBQVEsQ0FBQ0QsU0FBU0gseURBQVFBO0lBRWxELE9BQU87UUFDTEc7UUFDQUUsVUFBVSxDQUFDLE1BQU0sZ0ZBQU8sR0FBYSxFQUFFRixPQUFPLE1BQU0sR0FBR0csT0FBTztJQUNoRTtBQUNGLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsiRTpcXOGegOGetuGehOGetlxcY29kZVxcbG9jdHJvaS1uZXh0XFxzcmNcXGkxOG4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRSZXF1ZXN0Q29uZmlnfSBmcm9tICduZXh0LWludGwvc2VydmVyJztcbmltcG9ydCB7bm90Rm91bmR9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBsb2NhbGVzID0gWydraCcsICdlbicsICd2aScsICd6aCcsICdoaScsICdqYScsICdrbycsICdhciddO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRSZXF1ZXN0Q29uZmlnKGFzeW5jICh7cmVxdWVzdExvY2FsZX0pID0+IHtcbiAgY29uc3QgbG9jYWxlID0gYXdhaXQgcmVxdWVzdExvY2FsZTtcbiAgXG4gIGlmICghbG9jYWxlIHx8ICFsb2NhbGVzLmluY2x1ZGVzKGxvY2FsZSkpIG5vdEZvdW5kKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhbGUsXG4gICAgbWVzc2FnZXM6IChhd2FpdCBpbXBvcnQoYC4uL21lc3NhZ2VzLyR7bG9jYWxlfS5qc29uYCkpLmRlZmF1bHRcbiAgfTtcbn0pO1xuIl0sIm5hbWVzIjpbImdldFJlcXVlc3RDb25maWciLCJub3RGb3VuZCIsImxvY2FsZXMiLCJyZXF1ZXN0TG9jYWxlIiwibG9jYWxlIiwiaW5jbHVkZXMiLCJtZXNzYWdlcyIsImRlZmF1bHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/i18n.ts\n");

/***/ }),

/***/ "(middleware)/./src/proxy.ts":
/*!**********************!*\
  !*** ./src/proxy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_intl_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-intl/middleware */ \"(middleware)/./node_modules/next-intl/dist/development/middleware.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ \"(middleware)/./src/i18n.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_intl_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    // A list of all locales that are supported\n    locales: _i18n__WEBPACK_IMPORTED_MODULE_0__.locales,\n    // Used when no locale matches\n    defaultLocale: 'kh'\n}));\nconst config = {\n    matcher: [\n        '/((?!api|_next|_vercel|.*\\\\..*).*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3Byb3h5LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0Q7QUFDbkI7QUFFakMsaUVBQWVBLGdFQUFnQkEsQ0FBQztJQUM5QiwyQ0FBMkM7SUFDM0NDLFNBQVNBLDBDQUFPQTtJQUVoQiw4QkFBOEI7SUFDOUJDLGVBQWU7QUFDakIsRUFBRSxFQUFDO0FBRUksTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUFDO0tBQXFDO0FBQ2pELEVBQUUiLCJzb3VyY2VzIjpbIkU6XFzhnoDhnrbhnoThnrZcXGNvZGVcXGxvY3Ryb2ktbmV4dFxcc3JjXFxwcm94eS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTWlkZGxld2FyZSBmcm9tICduZXh0LWludGwvbWlkZGxld2FyZSc7XG5pbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSAnLi9pMThuJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWlkZGxld2FyZSh7XG4gIC8vIEEgbGlzdCBvZiBhbGwgbG9jYWxlcyB0aGF0IGFyZSBzdXBwb3J0ZWRcbiAgbG9jYWxlczogbG9jYWxlcyxcbiBcbiAgLy8gVXNlZCB3aGVuIG5vIGxvY2FsZSBtYXRjaGVzXG4gIGRlZmF1bHRMb2NhbGU6ICdraCdcbn0pO1xuIFxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogWycvKCg/IWFwaXxfbmV4dHxfdmVyY2VsfC4qXFxcXC4uKikuKiknXVxufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVNaWRkbGV3YXJlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJjb25maWciLCJtYXRjaGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/proxy.ts\n");

/***/ }),

/***/ "../../server/app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "./memory-cache.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/lib/incremental-cache/memory-cache.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/lib/incremental-cache/memory-cache.external.js");

/***/ }),

/***/ "./shared-cache-controls.external":
/*!*******************************************************************************************!*\
  !*** external "next/dist/server/lib/incremental-cache/shared-cache-controls.external.js" ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js");

/***/ }),

/***/ "./tags-manifest.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/lib/incremental-cache/tags-manifest.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/lib/incremental-cache/tags-manifest.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/build/adapter/setup-node-env.external":
/*!******************************************************************!*\
  !*** external "next/dist/build/adapter/setup-node-env.external" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/build/adapter/setup-node-env.external");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@formatjs","vendor-chunks/@opentelemetry","vendor-chunks/tslib","vendor-chunks/next-intl","vendor-chunks/negotiator"], () => (__webpack_exec__("(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=E%3A%5C%E1%9E%80%E1%9E%B6%E1%9E%84%E1%9E%B6%5Ccode%5Cloctroi-next%5Csrc%5Cproxy.ts&page=%2Fproxy&rootDir=E%3A%5C%E1%9E%80%E1%9E%B6%E1%9E%84%E1%9E%B6%5Ccode%5Cloctroi-next&matchers=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();