module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client_performance.spec.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client sync recursive":
/*!*************************!*\
  !*** ./src/client sync ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/client sync recursive\";\n\n//# sourceURL=webpack:///./src/client_sync?");

/***/ }),

/***/ "./src/client/loader.ts":
/*!******************************!*\
  !*** ./src/client/loader.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Loader for the build.\r\n */\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar minimist = __webpack_require__(/*! minimist */ \"minimist\");\r\n/**\r\n * Build loader.\r\n *\r\n * @param {any[]} argv          Arguments received.\r\n * @param {string} cwd          Current working directory.\r\n *\r\n * @returns {any} build         Instance of the build.\r\n */\r\nexports.getBuild = function (argv, cwd) {\r\n    var params = minimist(argv.slice(2));\r\n    var p = path.isAbsolute(params.src) ?\r\n        path.join(params.src, 'builds', params.app) :\r\n        path.join(cwd, params.src, 'builds', params.app);\r\n    var AppBuild = __webpack_require__(\"./src/client sync recursive\")(p);\r\n    return new AppBuild();\r\n};\r\n/**\r\n * Get the source root for the app.\r\n *\r\n * @param {any[]} argv          Arguments received.\r\n * @param {string} cwd          Current working directory.\r\n *\r\n * @returns {any} build         Instance of the build.\r\n */\r\nexports.getSrcRoot = function (argv, cwd) {\r\n    var params = minimist(argv.slice(2));\r\n    var p = path.isAbsolute(params.src) ?\r\n        params.src : path.join(cwd, params.src);\r\n    return p;\r\n};\r\n/**\r\n * Get the name of the app.\r\n *\r\n * @param {any[]} argv          Arguments received.\r\n *\r\n * @returns {string} app        Name of the app.\r\n */\r\nexports.getAppName = function (argv) {\r\n    var params = minimist(argv.slice(2));\r\n    return params.app;\r\n};\r\n/**\r\n * Execute passed function on all views of given type on the passed build.\r\n *\r\n * @param {any} build           Build to work on.\r\n * @param {string} viewType     View type to look for (form, report, tabs, null for all).\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.forAllViews = function (build, viewType, cb) {\r\n    // Go through all the urls.\r\n    var typ = Object.keys(build.urls);\r\n    // Go through all subsections and process them.\r\n    var forAllSubs = function (t, s, subs) {\r\n        for (var k = 0; k < subs.length; k++) {\r\n            var ss = subs[k];\r\n            var views = build.urls[t][s].sections[ss];\r\n            // Now go through all the views.\r\n            for (var l = 0; l < views.length; l++) {\r\n                var v = views[l];\r\n                // If this view is a type of viewType.\r\n                if (viewType == null || v.type === viewType) {\r\n                    cb(t, s, ss, l);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    // Parent part of the url.\r\n    for (var i = 0; i < typ.length; i++) {\r\n        var t = typ[i];\r\n        // Sections in the url.\r\n        var sects = Object.keys(build.urls[t]);\r\n        // Go through all the sections.\r\n        for (var j = 0; j < sects.length; j++) {\r\n            var s = sects[j];\r\n            // Go through all the sub sections.\r\n            forAllSubs(t, s, Object.keys(build.urls[t][s].sections));\r\n        }\r\n    }\r\n};\r\n/**\r\n * Markdowns are found at many places, we use this code to get actions\r\n * registered on the markdown.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index\r\n * @param {any} md              Markdown information.\r\n * @param {string} description  Description on markdown.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar forAllMarkdownActions = function (t, s, ss, idx, md, description, cb) {\r\n    if (md.events) {\r\n        var mEvents = Object.keys(md.events);\r\n        // All event actions.\r\n        for (var j = 0; j < mEvents.length; j++) {\r\n            var e = mEvents[j];\r\n            cb(t, s, ss, idx, e + description, md.events[e].actions, md.events[e].errorActions);\r\n        }\r\n    }\r\n};\r\n/**\r\n * Handle notifications in the app.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index\r\n * @param {any} notifications   Notification information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar forAllNotifications = function (t, s, ss, idx, notifications, cb) {\r\n    // Process all notification events.\r\n    for (var i = 0; i < notifications.length; i++) {\r\n        var e = notifications[i].references[0];\r\n        cb(t, s, ss, idx !== null ? idx : i, e + '(onNotifications)', notifications[i].actions, notifications[i].errorActions);\r\n    }\r\n};\r\n/**\r\n * Handle button actions.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index.\r\n * @param {number} i            Fields index.\r\n * @param {any[]} buttons       Buttons information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar forAllButtonActions = function (t, s, ss, idx, i, buttons, cb) {\r\n    if (buttons != null) {\r\n        for (var j = 0; j < buttons.length; j++) {\r\n            var b = buttons[j];\r\n            cb(t, s, ss, idx, b.text + ' (Button[' + i + '][' + j + '])', b.actions, b.errorActions);\r\n        }\r\n    }\r\n};\r\n/**\r\n * Handle droplist actions.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index.\r\n * @param {number} i            Dashlet index.\r\n * @param {any} d               Droplist information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar processDroplistActions = function (t, s, ss, idx, i, d, cb) {\r\n    // If the lists have events.\r\n    for (var j = 0; j < d.lists.length; j++) {\r\n        var l = d.lists[j];\r\n        // If the drop list has onData.\r\n        if (l.onData) {\r\n            cb(t, s, ss, idx, \"onData (drop list \" + i + \")\", l.onData.actions, l.onData.errorActions);\r\n        }\r\n        // If the drop list has onDrop.\r\n        if (l.onDrop) {\r\n            cb(t, s, ss, idx, \"onData (drop list \" + i + \")\", l.onDrop.actions, l.onDrop.errorActions);\r\n        }\r\n    }\r\n};\r\n/**\r\n * Handle table markdown.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index.\r\n * @param {any} row             Table dashlet row information.\r\n * @param {string} desc         Description.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar processTableMarkdown = function (t, s, ss, idx, row, desc, cb) {\r\n    for (var j = 0; j < row.length; j++) {\r\n        var v = row[j];\r\n        // If the value is an array. we need to process each value in the array.\r\n        if (Array.isArray(v)) {\r\n            for (var k = 0; k < v.length; k++) {\r\n                var e = v[k];\r\n                // If column has markdown.\r\n                if (e.markdown) {\r\n                    forAllMarkdownActions(t, s, ss, idx, e.markdown, desc, cb);\r\n                }\r\n            }\r\n        }\r\n        else if (v.markdown) {\r\n            forAllMarkdownActions(t, s, ss, idx, v.markdown, desc, cb);\r\n        }\r\n    }\r\n};\r\n/**\r\n * Handle table actions.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index.\r\n * @param {number} i            Dashlet index.\r\n * @param {any} d               Table dashlet information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar processTableActions = function (t, s, ss, idx, i, d, cb) {\r\n    // If the table has a drilldown.\r\n    if (d.drilldown != null) {\r\n        // drilldown actions\r\n        cb(t, s, ss, idx, 'Table[' + i + '] drilldown', d.drilldown.actions, d.drilldown.errorActions);\r\n    }\r\n    // If the table has markdown.\r\n    if (d.markdown != null) {\r\n        forAllMarkdownActions(t, s, ss, idx, d.markdown, '(table markdown)', cb);\r\n    }\r\n    // If the table has headers with markdown.\r\n    if (d.header != null) {\r\n        processTableMarkdown(t, s, ss, idx, d.header, '(table header markdown)', cb);\r\n    }\r\n    // If the table has values with markdown.\r\n    if (d.values != null) {\r\n        processTableMarkdown(t, s, ss, idx, d.values, '(table value markdown)', cb);\r\n    }\r\n    // If the table has footer with markdown.\r\n    if (d.footer != null) {\r\n        processTableMarkdown(t, s, ss, idx, d.footer, '(table footer markdown)', cb);\r\n    }\r\n};\r\n/**\r\n * Handle virtual scroll actions.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index.\r\n * @param {number} i            Dashlet index.\r\n * @param {any} d               Virtual scroll information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar processVirtualScrollActions = function (t, s, ss, idx, i, d, cb) {\r\n    // If this virtual scroll has events.\r\n    forAllMarkdownActions(t, s, ss, idx, d, '(report virtual scroll)', cb);\r\n    // If this virtual scroll has onData\r\n    if (d.onData) {\r\n        cb(t, s, ss, idx, \"onData (virtual scroll \" + i + \")\", d.onData.actions, d.onData.errorActions);\r\n    }\r\n    // If this virtual scroll has onScrollTop\r\n    if (d.onScrollTop) {\r\n        cb(t, s, ss, idx, \"onScrollTop (virtual scroll \" + i + \")\", d.onScrollTop.actions, d.onScrollTop.errorActions);\r\n    }\r\n    // If this virtual scroll has onScrollBottom\r\n    if (d.onScrollBottom) {\r\n        cb(t, s, ss, idx, \"onScrollBottom (virtual scroll \" + i + \")\", d.onScrollBottom.actions, d.onScrollBottom.errorActions);\r\n    }\r\n};\r\n/**\r\n * Handle form fields\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index.\r\n * @param {number} i            Fields index.\r\n * @param {any} f               Field information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar processField = function (t, s, ss, idx, i, f, cb) {\r\n    // There are some field types which have actions.\r\n    switch (f.type) {\r\n        case 'buttons':\r\n            // All button actions.\r\n            forAllButtonActions(t, s, ss, idx, i, f.buttons, cb);\r\n            break;\r\n        case 'markdown':\r\n            // If this markdown has events.\r\n            forAllMarkdownActions(t, s, ss, idx, f, '(form markdown)', cb);\r\n            break;\r\n        case 'tags':\r\n            // If the tags have on change actions.\r\n            if (f.onChange != null) {\r\n                // Tag on change actions.\r\n                cb(t, s, ss, idx, 'Tags[' + i + '] onChange', f.onChange.actions, f.onChange.errorActions);\r\n            }\r\n            break;\r\n        case 'textarea':\r\n            // If this is a rich text area with buttons.\r\n            if (f.editor != null) {\r\n                // All button actions.\r\n                forAllButtonActions(t, s, ss, idx, i, f.editor.buttons, cb);\r\n            }\r\n            break;\r\n    }\r\n};\r\n/**\r\n * Handle view dashlets\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index.\r\n * @param {number} i            Dashlet index.\r\n * @param {any} d               Dashlet information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar processDashlet = function (t, s, ss, idx, i, d, cb) {\r\n    // There are some dashlets types which have actions.\r\n    switch (d.type) {\r\n        case 'drop-list':\r\n            processDroplistActions(t, s, ss, idx, i, d, cb);\r\n            break;\r\n        case 'markdown':\r\n            // If this markdown has events.\r\n            forAllMarkdownActions(t, s, ss, idx, d, '(report markdown)', cb);\r\n            break;\r\n        case 'table':\r\n            processTableActions(t, s, ss, idx, i, d, cb);\r\n            break;\r\n        case 'virtual-scroll':\r\n            processVirtualScrollActions(t, s, ss, idx, i, d, cb);\r\n            break;\r\n    }\r\n};\r\n/**\r\n * Handle forms.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index\r\n * @param {any} view            Form information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar processForm = function (t, s, ss, idx, view, cb) {\r\n    // Go through all the fields it has.\r\n    for (var i = 0; i < view.fields.length; i++) {\r\n        var f = view.fields[i];\r\n        processField(t, s, ss, idx, i, f, cb);\r\n    }\r\n};\r\n/**\r\n * Handle views.\r\n *\r\n * @param {string} t            Type from url.\r\n * @param {string} s            Section from url.\r\n * @param {string} ss           Sub-section from url.\r\n * @param {number} idx          Index\r\n * @param {any} view            Form information.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nvar processView = function (t, s, ss, idx, view, cb) {\r\n    // Go through all the dahletss it has.\r\n    for (var i = 0; i < view.dashlets.length; i++) {\r\n        var d = view.dashlets[i];\r\n        processDashlet(t, s, ss, idx, i, d, cb);\r\n    }\r\n};\r\n/**\r\n * Execute passed function for all sets of actions on all views on the passed build.\r\n *\r\n * @param {any} build           Build to work on.\r\n * @param {(): any} cb          Call back to execute.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.forAllActions = function (build, cb) {\r\n    // Handle app-wide notifications.\r\n    // If the view has onNotifications\r\n    if (build.onNotifications) {\r\n        forAllNotifications('App', '', '', null, build.onNotifications, cb);\r\n    }\r\n    // Get all the views for this build\r\n    exports.forAllViews(build, null, function (t, s, ss, idx) {\r\n        // Get the view.\r\n        var view = build.urls[t][s].sections[ss][idx];\r\n        // If the view has an onData\r\n        if (view.onData) {\r\n            cb(t, s, ss, idx, 'onData', view.onData.actions, view.onData.errorActions);\r\n        }\r\n        // If the view has onNotifications\r\n        if (view.onNotifications) {\r\n            // Process all notification events.\r\n            forAllNotifications(t, s, ss, idx, view.onNotifications, cb);\r\n        }\r\n        // If the view is a form...\r\n        if (view.type === 'form') {\r\n            processForm(t, s, ss, idx, view, cb);\r\n        }\r\n        // If the view is a report...\r\n        if (view.type === 'report') {\r\n            processView(t, s, ss, idx, view, cb);\r\n        }\r\n        // If the view is a tab...\r\n        if (view.type === 'tabs') {\r\n            // Go through all the tabs and handle markdown actions in them.\r\n            for (var i = 0; i < view.tabs.length; i++) {\r\n                var tb = view.tabs[i].tab;\r\n                forAllMarkdownActions(t, s, ss, idx, tb, '(tab markdown)', cb);\r\n            }\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/client/loader.ts?");

/***/ }),

/***/ "./src/client/performance/navigation/no-network-operation-before-redirect.spec.ts":
/*!****************************************************************************************!*\
  !*** ./src/client/performance/navigation/no-network-operation-before-redirect.spec.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Perform no network operations before a redirect.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Navigation Performance - No network operation before a redirect', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    // Given an array of actions, ensure there are no networking operations before\r\n    // a redirect\r\n    var checkActions = function (actions) {\r\n        var networkOps = [];\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If we have a network operation.\r\n            if (a.task === 'pullpush' || a.task === 'push' || a.task === 'notify' ||\r\n                a.task === 'pr') {\r\n                networkOps.push(a.task + '@' + j);\r\n            }\r\n            // If we have a loadData task with localOnly false meaning a network operation\r\n            // happens\r\n            else if (a.task === 'loadData' && a.data.localOnly !== true) {\r\n                networkOps.push(a.task + '@' + j);\r\n            }\r\n            // If we have a redirect.\r\n            else if (a.task === 'redirect' || a.task === 'goBack') {\r\n                chai_1.assert(networkOps.length === 0, 'Netowrk ops: ' +\r\n                    JSON.stringify(networkOps) + ' appears before ' + a.task + '@' + j);\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions);\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/performance/navigation/no-network-operation-before-redirect.spec.ts?");

/***/ }),

/***/ "./src/client/performance/queries/queries-should-always-have-a-limit.spec.ts":
/*!***********************************************************************************!*\
  !*** ./src/client/performance/queries/queries-should-always-have-a-limit.spec.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Queries should have a limit that does not exceed 100.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar QueryChecker_1 = __webpack_require__(/*! ../../../common/QueryChecker */ \"./src/common/QueryChecker.ts\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Queries Performance - Queries should have a limit that does not exceed 100', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    // Given an array of actions, ensure there are limits on loadData\r\n    var checkActions = function (actions) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If we have a loadData ensure it has a limit\r\n            if (a.task === 'loadData') {\r\n                QueryChecker_1.checkQueryLimit(a.data, j);\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions);\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n    // Get all the data constructs for views.\r\n    loader_1.forAllViews(build, null, function (t, s, ss, i) {\r\n        it('Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            var view = build.urls[t][s].sections[ss][i];\r\n            // If the view has a data construct.\r\n            if (view.data) {\r\n                QueryChecker_1.checkQueryLimit(view.data);\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/performance/queries/queries-should-always-have-a-limit.spec.ts?");

/***/ }),

/***/ "./src/client/performance/queries/queries-should-have-refresh-time-greater-than-5-mins.spec.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/client/performance/queries/queries-should-have-refresh-time-greater-than-5-mins.spec.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Queries should have a refresh time of 5 minutes.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar QueryChecker_1 = __webpack_require__(/*! ../../../common/QueryChecker */ \"./src/common/QueryChecker.ts\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Queries Performance - Queries should have a refresh time greater than 5 mins', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    // Given an array of actions, ensure there are limits on loadData\r\n    var checkActions = function (actions) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If we have a loadData ensure it has a limit\r\n            if (a.task === 'loadData') {\r\n                QueryChecker_1.checkQueryRefreshTime(a.data, j);\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions);\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n    // Get all the data constructs for views.\r\n    loader_1.forAllViews(build, null, function (t, s, ss, i) {\r\n        it('Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            var view = build.urls[t][s].sections[ss][i];\r\n            // If the view has a data construct.\r\n            if (view.data) {\r\n                QueryChecker_1.checkQueryRefreshTime(view.data);\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/performance/queries/queries-should-have-refresh-time-greater-than-5-mins.spec.ts?");

/***/ }),

/***/ "./src/client/performance/queries/similar-queries-should-not-have-different-reference.spec.ts":
/*!****************************************************************************************************!*\
  !*** ./src/client/performance/queries/similar-queries-should-not-have-different-reference.spec.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Similar queries should not have the different references for improved\r\n * caching.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar QueryChecker_1 = __webpack_require__(/*! ../../../common/QueryChecker */ \"./src/common/QueryChecker.ts\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Queries - Similar queries should not use different reference keys', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    var queryMap = new Map();\r\n    // Given an array of actions, find loadData queries.\r\n    var checkActions = function (actions, summary) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If we have a loadData, execute checks on it.\r\n            if (a.task === 'loadData') {\r\n                QueryChecker_1.checkSimilarQueries(a.data, summary, queryMap, j);\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions, actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']');\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]], actionType + ' (onError): /' + t + '/' + s + '/' + ss + '[' + i + ']');\r\n                }\r\n            }\r\n        });\r\n    });\r\n    // Get all the data constructs for views.\r\n    loader_1.forAllViews(build, null, function (t, s, ss, i) {\r\n        it('Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            var view = build.urls[t][s].sections[ss][i];\r\n            // If the view has a data construct.\r\n            if (view.data) {\r\n                QueryChecker_1.checkSimilarQueries(view.data, 'Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', queryMap);\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/performance/queries/similar-queries-should-not-have-different-reference.spec.ts?");

/***/ }),

/***/ "./src/client/performance/queries/with-larger-resultset-use-projections.spec.ts":
/*!**************************************************************************************!*\
  !*** ./src/client/performance/queries/with-larger-resultset-use-projections.spec.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file With larger resultset, user projections to reduce result size.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar QueryChecker_1 = __webpack_require__(/*! ../../../common/QueryChecker */ \"./src/common/QueryChecker.ts\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Queries Performance - Queries with limit more than 10 should use projections', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    // Given an array of actions, ensure there are limits on resulting data size\r\n    // for loadData tasks\r\n    var checkActions = function (actions) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If we have a loadData ensure it has a limit\r\n            if (a.task === 'loadData') {\r\n                QueryChecker_1.checkQueryLimitProjections(a.data, j);\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions);\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n    // Get all the data constructs for views.\r\n    loader_1.forAllViews(build, null, function (t, s, ss, i) {\r\n        it('Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            var view = build.urls[t][s].sections[ss][i];\r\n            // If the view has a data construct.\r\n            if (view.data) {\r\n                QueryChecker_1.checkQueryLimitProjections(view.data);\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/performance/queries/with-larger-resultset-use-projections.spec.ts?");

/***/ }),

/***/ "./src/client_performance.spec.ts":
/*!****************************************!*\
  !*** ./src/client_performance.spec.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Entry point for all client performance test cases.\r\n */\r\n__webpack_require__(/*! ./client/performance/navigation/no-network-operation-before-redirect */ \"./src/client/performance/navigation/no-network-operation-before-redirect.spec.ts\");\r\n__webpack_require__(/*! ./client/performance/queries/queries-should-always-have-a-limit */ \"./src/client/performance/queries/queries-should-always-have-a-limit.spec.ts\");\r\n__webpack_require__(/*! ./client/performance/queries/queries-should-have-refresh-time-greater-than-5-mins */ \"./src/client/performance/queries/queries-should-have-refresh-time-greater-than-5-mins.spec.ts\");\r\n__webpack_require__(/*! ./client/performance/queries/similar-queries-should-not-have-different-reference */ \"./src/client/performance/queries/similar-queries-should-not-have-different-reference.spec.ts\");\r\n__webpack_require__(/*! ./client/performance/queries/with-larger-resultset-use-projections */ \"./src/client/performance/queries/with-larger-resultset-use-projections.spec.ts\");\r\n\n\n//# sourceURL=webpack:///./src/client_performance.spec.ts?");

/***/ }),

/***/ "./src/common/ObjectSerializer.ts":
/*!****************************************!*\
  !*** ./src/common/ObjectSerializer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Object serializer\r\n */\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ObjectSerializer = /** @class */ (function () {\r\n    function ObjectSerializer() {\r\n    }\r\n    /**\r\n     * Given an object with functions and values, serialize them properly so that\r\n     * functions are properly converted to their strings counter part.\r\n     *\r\n     * @param {any} obj               Object to serialize.\r\n     *\r\n     * @returns {string} result       String with serialized object..\r\n     */\r\n    ObjectSerializer.prototype.serialize = function (obj) {\r\n        return JSON.stringify(obj, function SerializeReplacer(key, value) {\r\n            // If the value is a function, return its string form.\r\n            if (typeof value === 'function') {\r\n                return value.toString();\r\n            }\r\n            return value;\r\n        });\r\n    };\r\n    /**\r\n     * De-serialize a string to an object such that the functions are restored.\r\n     *\r\n     * @param {string} objStr         Serialized string for object.\r\n     *\r\n     * @returns {any} obj             De-serialized object.\r\n     */\r\n    ObjectSerializer.prototype.deserialize = function (objStr) {\r\n        return JSON.parse(objStr, function DeserializeReviver(key, value) {\r\n            if (typeof value === 'string' && value.match(/^function *(?:anonymous)?\\(/)) {\r\n                var fn = void 0;\r\n                eval('fn=' + value);\r\n                return fn;\r\n            }\r\n            return value;\r\n        });\r\n    };\r\n    return ObjectSerializer;\r\n}());\r\nexports.ObjectSerializer = ObjectSerializer;\r\n\n\n//# sourceURL=webpack:///./src/common/ObjectSerializer.ts?");

/***/ }),

/***/ "./src/common/QueryChecker.ts":
/*!************************************!*\
  !*** ./src/common/QueryChecker.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Common function used for query checks on client and server side.\r\n */\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\nvar ObjectSerializer_1 = __webpack_require__(/*! ./ObjectSerializer */ \"./src/common/ObjectSerializer.ts\");\r\n/**\r\n * Check limit in a query. We want to have limits in all queries. We also want\r\n * to keep overall result size to a minimum.\r\n *\r\n * @param {any} query           Query we are checking.\r\n * @param {number} idx          Index for the action which executes this query,\r\n *                              if applicable.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.checkQueryLimit = function (query, idx) {\r\n    var prefix = idx ? 'Step ' + idx + ': ' : '';\r\n    chai_1.assert(query.limit != null, prefix + 'Queries should enforce a data limit');\r\n    if (query.limit) {\r\n        chai_1.assert(query.limit <= 100, prefix + 'Query limits should not exceed 100');\r\n    }\r\n};\r\n/**\r\n * Check refresh time in a query. We want to have the maximum refresh time possible.\r\n * At a minimum we want to have a refresh time of 5 mins.\r\n *\r\n * @param {any} query           Query we are checking.\r\n * @param {number} idx          Index for the action which executes this query,\r\n *                              if applicable.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.checkQueryRefreshTime = function (query, idx) {\r\n    var prefix = idx ? 'Step ' + idx + ': ' : '';\r\n    chai_1.assert(query.refresh >= 300, prefix + 'Query should have refresh time greater than 300 seconds');\r\n};\r\n/**\r\n * Check reference in a query. We want to combine similar queries to have the same\r\n * results with the same reference for optimal cache usage.\r\n *\r\n * @param {any} query             Query we are checking.\r\n * @param {string} summary        Summary of the context where query is executed.\r\n * @param {Map<string, any>} map  Map of queries already processed.\r\n * @param {number} idx            Index for the action which executes this query,\r\n *                                if applicable.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.checkSimilarQueries = function (query, summary, map, idx) {\r\n    var prefix = idx ? 'Step ' + idx + ': ' : '';\r\n    var serializer = new ObjectSerializer_1.ObjectSerializer();\r\n    // Create string from main query parts.\r\n    var qString = query.branch === 'string' ? query.branch : query.branch.toString();\r\n    qString += serializer.serialize(query.query);\r\n    qString += serializer.serialize(query.filters);\r\n    qString += query.self;\r\n    // If map entry for this query already exists.\r\n    var data = map.get(qString);\r\n    // We have found the data so need to compare our current query with it.\r\n    if (data) {\r\n        chai_1.assert(query.reference === data.query.reference, prefix + 'Similar query is used with a different reference at: ' + data.url);\r\n    }\r\n    else {\r\n        // Add a new entry to the map.\r\n        map.set(qString, {\r\n            query: query,\r\n            url: summary + ' ' + prefix\r\n        });\r\n    }\r\n};\r\n/**\r\n * For queries with limits greater than 10, we want to enforce projections.\r\n *\r\n * @param {any} query           Query we are checking.\r\n * @param {number} idx          Index for the action which executes this query,\r\n *                              if applicable.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.checkQueryLimitProjections = function (query, idx) {\r\n    var prefix = idx ? 'Step ' + idx + ': ' : '';\r\n    if (query.limit > 10) {\r\n        chai_1.assert(query.map != null && query.map.values.length > 0, prefix + 'Use map.values in queries to reduce data size.');\r\n    }\r\n};\r\n/**\r\n * Check reference in a query. We want to combine similar queries to have the same\r\n * results with the same reference for optimal cache usage.\r\n *\r\n * @param {any} query             Query we are checking.\r\n * @param {string} summary        Summary of the context where query is executed.\r\n * @param {Map<string, any>} map  Map of queries already processed.\r\n * @param {number} idx            Index for the action which executes this query,\r\n *                                if applicable.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.checkQueryReferenceKey = function (query, summary, map, idx) {\r\n    var prefix = idx ? 'Step ' + idx + ': ' : '';\r\n    var serializer = new ObjectSerializer_1.ObjectSerializer();\r\n    // Get query reference.\r\n    var ref = typeof query.reference === 'string' ? query.reference : query.reference.toString();\r\n    var branch = typeof query.branch === 'string' ? query.branch : query.branch.toString();\r\n    // If the reference for this query already exists.\r\n    var data = map.get(ref + branch);\r\n    // We have found the data so need to compare our current query with it.\r\n    if (data) {\r\n        // Get the query string for this query.\r\n        var q = serializer.serialize(query);\r\n        chai_1.assert(q === data.query, prefix + 'Same reference is used for a different query at: ' + data.url);\r\n    }\r\n    else {\r\n        // Add a new entry to the map.\r\n        map.set(ref + branch, {\r\n            query: serializer.serialize(query),\r\n            url: summary + ' ' + prefix\r\n        });\r\n    }\r\n};\r\n/**\r\n * Check filters in a query. Ensure referenceFields when filters are present.\r\n * Also ensure correct use of the referenceFields.\r\n *\r\n * @param {any} query           Query we are checking.\r\n * @param {number} idx          Index for the action which executes this query,\r\n *                              if applicable.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.checkQueryFilters = function (query, idx) {\r\n    var prefix = idx ? 'Step ' + idx + ': ' : '';\r\n    var keys = Object.keys(query.filters);\r\n    // If there are filters, ensure there are filter reference fields.\r\n    if (keys.length > 0) {\r\n        chai_1.assert(query.referenceFields.length > 0, prefix +\r\n            'Queries with filters should have reference fields');\r\n        // Ensure the reference fields exist in the filter.\r\n        for (var k = 0; k < query.referenceFields.length; k++) {\r\n            var f = query.referenceFields[k];\r\n            chai_1.assert(query.filters[f] != null, prefix +\r\n                'Filter reference key ' + f + ' does not exist');\r\n        }\r\n    }\r\n};\r\n/**\r\n * Check idKeys in queries to ensure local and remote results are merged correctly.\r\n *\r\n * @param {any} query           Query we are checking.\r\n * @param {number} idx          Index for the action which executes this query,\r\n *                              if applicable.\r\n *\r\n * @returns {undefined} None.\r\n */\r\nexports.checkQueryIdKeys = function (query, idx) {\r\n    var prefix = idx ? 'Step ' + idx + ': ' : '';\r\n    // If the query has projections with reduce, then we should have idKeys.\r\n    if (query.projections) {\r\n        chai_1.assert(query.projections.reduce == null || (query.idKeys != null && query.idKeys.length > 0), prefix + 'Queries with reduce projections should have idKeys to support merging of local results');\r\n        // Ensure the idKeys exist in the results.\r\n        if (query.idKeys != null && query.idKeys.length > 0) {\r\n            // Keys available to be used as id.\r\n            var availableKeys = void 0;\r\n            // If we have reduce in projections, then the keys should exist there.\r\n            // Otherwise, take the keys from map.values in projections.\r\n            if (query.projections.reduce)\r\n                availableKeys = Object.keys(query.projections.reduce);\r\n            else\r\n                availableKeys = query.projections.map.values;\r\n            for (var k = 0; k < query.idKeys.length; k++) {\r\n                var f = query.idKeys[k];\r\n                chai_1.assert(availableKeys.indexOf(f) >= 0, prefix + 'ID key ' + f\r\n                    + ' does not exist in the result with keys ' + availableKeys);\r\n            }\r\n        }\r\n    }\r\n    else {\r\n        // If there are no projections, we should not use idKeys.\r\n        chai_1.assert(query.idKeys == null || query.idKeys.length === 0, prefix + 'If there are no projections, idKeys should not be used');\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/common/QueryChecker.ts?");

/***/ }),

/***/ "chai":
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chai\");\n\n//# sourceURL=webpack:///external_%22chai%22?");

/***/ }),

/***/ "minimist":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"minimist\");\n\n//# sourceURL=webpack:///external_%22minimist%22?");

/***/ }),

/***/ "mocha":
/*!************************!*\
  !*** external "mocha" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mocha\");\n\n//# sourceURL=webpack:///external_%22mocha%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });