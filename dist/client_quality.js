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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client_quality.spec.ts");
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

/***/ "./src/client/quality/actions/go-back-should-not-have-other-tasks.spec.ts":
/*!********************************************************************************!*\
  !*** ./src/client/quality/actions/go-back-should-not-have-other-tasks.spec.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the correct usage of relation keys.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Actions - goBack should not have other tasks', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    // Given an array of actions, ensure that if there is goBack, then there are\r\n    // no other actions.\r\n    var checkActions = function (actions) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If there is goBack, then there should be no other actions.\r\n            if (a.task === 'goBack') {\r\n                chai_1.assert(actions.length === 1, 'Actions with goBack should not have other tasks');\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions);\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/actions/go-back-should-not-have-other-tasks.spec.ts?");

/***/ }),

/***/ "./src/client/quality/actions/no-actions-check.spec.ts":
/*!*************************************************************!*\
  !*** ./src/client/quality/actions/no-actions-check.spec.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks that there are empty actions arrays.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Actions - There should be no empty actions', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            chai_1.assert(actions.length > 0, 'No actions given');\r\n            // If there are error actions.\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                chai_1.assert(keys.length > 0, 'Error actions object should not be empty. Do not declare it, if not required');\r\n                // Check for empty error actions.\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    chai_1.assert(errorActions[keys[j]].length > 0, 'Error actions is empty for key: ' + keys[j]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/actions/no-actions-check.spec.ts?");

/***/ }),

/***/ "./src/client/quality/actions/pr-not-allowed-in-default-app.spec.ts":
/*!**************************************************************************!*\
  !*** ./src/client/quality/actions/pr-not-allowed-in-default-app.spec.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks that there are empty actions arrays.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\n// This test is only for the default app.\r\nvar appName = loader_1.getAppName(process.argv);\r\nif (appName === 'Default.js') {\r\n    describe('Actions - There should be no pr action in the default app', function () {\r\n        // Get the build.\r\n        var build = loader_1.getBuild(process.argv, process.cwd());\r\n        // Ensure pr action is not present in Default.js.\r\n        var checkActions = function (actions) {\r\n            for (var j = 0; j < actions.length; j++) {\r\n                var a = actions[j];\r\n                // Ensure pr is not present.\r\n                chai_1.assert(a.task !== 'pr', 'pr tasks not allowed in the default app');\r\n            }\r\n        };\r\n        // Get all the actions.\r\n        loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n            it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n                checkActions(actions);\r\n                if (errorActions) {\r\n                    var keys = Object.keys(errorActions);\r\n                    for (var j = 0; j < keys.length; j++) {\r\n                        checkActions(errorActions[keys[j]]);\r\n                    }\r\n                }\r\n            });\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/client/quality/actions/pr-not-allowed-in-default-app.spec.ts?");

/***/ }),

/***/ "./src/client/quality/actions/pr-notify-queue-should-have-correct-server-references.spec.ts":
/*!**************************************************************************************************!*\
  !*** ./src/client/quality/actions/pr-notify-queue-should-have-correct-server-references.spec.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the notify and PR tasks have correct server references.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar loader_2 = __webpack_require__(/*! ../../../server/loader */ \"./src/server/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Actions - pr and notify should have correct server references', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    var serverBuild = loader_2.getServerBuild(process.argv, process.cwd());\r\n    // Given an array of actions, ensure corret usage of pr and notify.\r\n    var checkActions = function (actions) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If there is goBack, then there should be no other actions.\r\n            if (a.task === 'pr') {\r\n                chai_1.assert(serverBuild.refs[a.key], 'Step ' + j +\r\n                    ': Server side does not have referenced key ' + a.key + ' for pr task');\r\n            }\r\n            else if (a.task === 'notifyQueue') {\r\n                chai_1.assert(serverBuild.refs[a.reference], 'Step ' + j +\r\n                    ': Server side does not have referenced key ' + a.reference + ' for notifyQueue task');\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions);\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/actions/pr-notify-queue-should-have-correct-server-references.spec.ts?");

/***/ }),

/***/ "./src/client/quality/api/api.spec.ts":
/*!********************************************!*\
  !*** ./src/client/quality/api/api.spec.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the web assets.\r\n */\r\nvar JitClient = __webpack_require__(/*! jit/client */ \"jit/client\").JitClient;\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('API Keys - Connectivity', function () {\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    var client;\r\n    // Check connectivity with anonmous user.\r\n    it('Should connect with anonymous user', function () {\r\n        var jit = build.apiKeys.jit;\r\n        client = new JitClient(jit.remoteUrl, build.path + '/' + jit.clientId, '', jit.clientScopes);\r\n        // Now connect.\r\n        return client.reconnect(build.path + '/' + jit.clientId, jit.clientToken)\r\n            .then(function OnClientConnected() {\r\n            // Make a search request. This will confirm if the token is correct as an\r\n            // error will return otherwise.\r\n            return client.search(build.path, 'Users', 'check-connection-from-test-suite', {}, 0, true);\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/api/api.spec.ts?");

/***/ }),

/***/ "./src/client/quality/assets/mobile.spec.ts":
/*!**************************************************!*\
  !*** ./src/client/quality/assets/mobile.spec.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the mobile assets.\r\n */\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar fs = __webpack_require__(/*! fs-extra */ \"fs-extra\");\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\n/**\r\n * Check if given asset is part of the app.\r\n *\r\n * @param {string} srcRoot            Path to the root of the app.\r\n * @param {string} p                  Relative path to the asset from root.\r\n *\r\n * @returns {boolean} exists          True if it exists, false otherwise.\r\n */\r\nfunction doesAssetExist(srcRoot, p) {\r\n    var assetPath = p.startsWith('builds') ?\r\n        path.join(srcRoot, p) : path.join(srcRoot, 'builds', p);\r\n    return fs.pathExists(assetPath);\r\n}\r\ndescribe('Assets - Mobile', function () {\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    var srcRoot = loader_1.getSrcRoot(process.argv, process.cwd());\r\n    /** Test 1 **/\r\n    describe('# Ensure all referenced mobile assets exist', function () {\r\n        var assets = build.assets;\r\n        var p = assets.mobile ? assets.mobile.css.concat(assets.mobile.js) : [];\r\n        var _loop_1 = function (i) {\r\n            // Check each file.\r\n            it('Asset: ' + p[i], function () {\r\n                // If the specified asset is not in the source folder.\r\n                return doesAssetExist(srcRoot, p[i]).then(function (result) {\r\n                    chai_1.assert(result, 'This asset does not exist in the source folder.');\r\n                    return result;\r\n                });\r\n            });\r\n        };\r\n        // Check all paths.\r\n        for (var i = 0; i < p.length; i++) {\r\n            _loop_1(i);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/assets/mobile.spec.ts?");

/***/ }),

/***/ "./src/client/quality/assets/web.spec.ts":
/*!***********************************************!*\
  !*** ./src/client/quality/assets/web.spec.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the web assets.\r\n */\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar fs = __webpack_require__(/*! fs-extra */ \"fs-extra\");\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\n/**\r\n * Check if given asset is part of the app.\r\n *\r\n * @param {string} srcRoot            Path to the root of the app.\r\n * @param {string} p                  Relative path to the asset from root.\r\n *\r\n * @returns {boolean} exists          True if it exists, false otherwise.\r\n */\r\nfunction doesAssetExist(srcRoot, p) {\r\n    var assetPath = p.startsWith('builds') ?\r\n        path.join(srcRoot, p) : path.join(srcRoot, 'builds', p);\r\n    return fs.pathExists(assetPath);\r\n}\r\ndescribe('Assets - Web', function () {\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    var srcRoot = loader_1.getSrcRoot(process.argv, process.cwd());\r\n    /** Test 1 **/\r\n    describe('# Ensure all referenced web assets exist', function () {\r\n        var assets = build.assets;\r\n        var p = assets.web ? assets.web.css.concat(assets.web.js) : [];\r\n        var _loop_1 = function (i) {\r\n            // Check each file.\r\n            it('Asset: ' + p[i], function () {\r\n                // If the specified asset is not in the source folder.\r\n                return doesAssetExist(srcRoot, p[i]).then(function (result) {\r\n                    chai_1.assert(result, 'This asset does not exist in the source folder.');\r\n                    return result;\r\n                });\r\n            });\r\n        };\r\n        // Check all paths.\r\n        for (var i = 0; i < p.length; i++) {\r\n            _loop_1(i);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/assets/web.spec.ts?");

/***/ }),

/***/ "./src/client/quality/contexts/empty.spec.ts":
/*!***************************************************!*\
  !*** ./src/client/quality/contexts/empty.spec.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the correct usage of prefix.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Contexts - Need', function () {\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    describe('# Check if the context is really needed', function () {\r\n        var ctxt = build.context;\r\n        var _loop_1 = function (i) {\r\n            var c = ctxt[i];\r\n            // Check each prefix.\r\n            it('Prefix: ' + c.prefix, function () {\r\n                // If the fallback url is specified, check if it exists.\r\n                chai_1.assert(c.fallback || c.nav || c.rightSide || c.leftSide || c.onLoad ||\r\n                    c.maxCols || c.maxColsMobile, 'This context is empty. Is it needed?');\r\n            });\r\n        };\r\n        // Check all contexts.\r\n        for (var i = 0; i < ctxt.length; i++) {\r\n            _loop_1(i);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/contexts/empty.spec.ts?");

/***/ }),

/***/ "./src/client/quality/contexts/onload.spec.ts":
/*!****************************************************!*\
  !*** ./src/client/quality/contexts/onload.spec.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the correct usage of prefix.\r\n */\r\n/*import { getBuild } from '../../loader';\r\nimport { assert } from 'chai';\r\nimport 'mocha';\r\n\r\ndescribe( 'Contexts - onLoad', () => {\r\n  const build: any = getBuild( process.argv, process.cwd() );\r\n\r\n  describe( '# Check if the context is really needed', () => {\r\n    const ctxt: any[] = build.context;\r\n\r\n    // Check all contexts.\r\n    for ( let i = 0; i < ctxt.length; i++ ) {\r\n      const c: any = ctxt[ i ];\r\n\r\n      // Check each prefix.\r\n      it( 'Prefix: ' + c.prefix, () => {\r\n        // If the fallback url is specified, check if it exists.\r\n        assert( c.fallback || c.nav || c.rightSide || c.leftSide || c.onLoad ||\r\n          c.maxCols || c.maxColsMobile, 'This context is empty. Is it needed?' );\r\n      });\r\n    }\r\n  });\r\n});\r\n*/\r\n\n\n//# sourceURL=webpack:///./src/client/quality/contexts/onload.spec.ts?");

/***/ }),

/***/ "./src/client/quality/contexts/prefix.spec.ts":
/*!****************************************************!*\
  !*** ./src/client/quality/contexts/prefix.spec.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the correct usage of prefix.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Contexts - Prefix', function () {\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    describe('# Check for unreachable prefix', function () {\r\n        var ctxt = build.context;\r\n        var _loop_1 = function (i) {\r\n            var c = ctxt[i];\r\n            // Check each prefix.\r\n            it('Prefix: ' + c.prefix, function () {\r\n                // Ensure that no context that comes before this context has a prefix that\r\n                // matches this prefix.\r\n                for (var j = i - 1; j >= 0; j--) {\r\n                    var prev = ctxt[j];\r\n                    chai_1.assert(!c.prefix.startsWith(prev.prefix), c.prefix +\r\n                        ' is unreachable because of ' + prev.prefix);\r\n                }\r\n            });\r\n        };\r\n        // Check all contexts.\r\n        for (var i = 0; i < ctxt.length; i++) {\r\n            _loop_1(i);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/contexts/prefix.spec.ts?");

/***/ }),

/***/ "./src/client/quality/contexts/urls.spec.ts":
/*!**************************************************!*\
  !*** ./src/client/quality/contexts/urls.spec.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the correct usage of prefix.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\n/**\r\n * Check if given url is part of the app.\r\n *\r\n * @param {any} urls                  URLs in the app.\r\n * @param {string} url                URL to check, if it exists.\r\n *\r\n * @returns {boolean} exists          True if it exists, false otherwise.\r\n */\r\nfunction doesUrlExist(urls, url) {\r\n    var parts = url.split('/');\r\n    var exists = true;\r\n    // Ensure the lenght of url parts is correct.\r\n    if (parts.length !== 4)\r\n        exists = false;\r\n    // Check if the url does not exist\r\n    if (urls[parts[1]] == null || urls[parts[1]][parts[2]] == null ||\r\n        urls[parts[1]][parts[2]].sections[parts[3]] == null)\r\n        exists = false;\r\n    return exists;\r\n}\r\ndescribe('Contexts - URL', function () {\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    describe('# Check if URLs referenced in context exist', function () {\r\n        var ctxt = build.context;\r\n        var _loop_1 = function (i) {\r\n            var c = ctxt[i];\r\n            // Check each prefix.\r\n            it('Prefix: ' + c.prefix, function () {\r\n                // If the fallback url is specified, check if it exists.\r\n                if (c.fallback)\r\n                    chai_1.assert(doesUrlExist(build.urls, c.fallback), 'Fallback url: ' + c.fallback + ' does not exist.');\r\n                // If the nav url is specified, check if it exists.\r\n                if (c.nav)\r\n                    chai_1.assert(doesUrlExist(build.urls, c.nav), 'Nav url: ' + c.nav + ' does not exist.');\r\n                // If the rightSide url is specified, check if it exists.\r\n                if (c.rightSide)\r\n                    chai_1.assert(doesUrlExist(build.urls, c.rightSide), 'Right side url: ' + c.rightSide + ' does not exist.');\r\n                // If the leftSide url is specified, check if it exists.\r\n                if (c.leftSide)\r\n                    chai_1.assert(doesUrlExist(build.urls, c.leftSide), 'Left side url: ' + c.leftSide + ' does not exist.');\r\n                // If the context has an onLoad with a url specified (while actions execute),\r\n                // check if it exists.\r\n                if (c.onLoad && c.onLoad.url)\r\n                    chai_1.assert(doesUrlExist(build.urls, c.onLoad.url), 'onLoad.url: ' + c.onLoad.url + ' does not exist.');\r\n            });\r\n        };\r\n        // Check all contexts.\r\n        for (var i = 0; i < ctxt.length; i++) {\r\n            _loop_1(i);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/contexts/urls.spec.ts?");

/***/ }),

/***/ "./src/client/quality/forms/relation-key.spec.ts":
/*!*******************************************************!*\
  !*** ./src/client/quality/forms/relation-key.spec.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the correct usage of relation keys.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Forms - Relation Keys', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    loader_1.forAllViews(build, 'form', function (t, s, ss, i) {\r\n        it('Form: /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            var views = build.urls[t][s].sections[ss];\r\n            var relationKey = views[i].relationKey;\r\n            // If we have a relation key ensure there are other views in the same section\r\n            if (relationKey) {\r\n                var found = false;\r\n                // We are looking for other views in the same section that have the same\r\n                // relationKey set.\r\n                for (var j = 0; j < views.length; j++) {\r\n                    if (i !== j && views[j].relationKey === relationKey)\r\n                        found = true;\r\n                }\r\n                chai_1.assert(found, 'Relation key (' + relationKey +\r\n                    ') for form does not exist on any other peer form');\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/forms/relation-key.spec.ts?");

/***/ }),

/***/ "./src/client/quality/general/general.spec.ts":
/*!****************************************************!*\
  !*** ./src/client/quality/general/general.spec.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the general construction of the class.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('App - General', function () {\r\n    it('Should succesfully instantiate the application', function () {\r\n        var build = loader_1.getBuild(process.argv, process.cwd());\r\n        chai_1.assert(build != null, 'Build is not null');\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/general/general.spec.ts?");

/***/ }),

/***/ "./src/client/quality/general/url.spec.ts":
/*!************************************************!*\
  !*** ./src/client/quality/general/url.spec.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the correctness of URLs in the app.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar chai_1 = __webpack_require__(/*! chai */ \"chai\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('App - URL', function () {\r\n    describe('# Check section id for each url', function () {\r\n        // Get the build.\r\n        var build = loader_1.getBuild(process.argv, process.cwd());\r\n        // Go through all the urls.\r\n        var typ = Object.keys(build.urls);\r\n        var _loop_1 = function (i) {\r\n            var t = typ[i];\r\n            // Sections in the url.\r\n            var sects = Object.keys(build.urls[t]);\r\n            var _loop_2 = function (j) {\r\n                var s = sects[j];\r\n                it('URL: /' + t + '/' + s, function () {\r\n                    // Confirm section id matches section name.\r\n                    chai_1.assert(s === build.urls[t][s].id, 'Section id (' + build.urls[t][s].id +\r\n                        ') does not match section name (' + s + ')');\r\n                });\r\n            };\r\n            for (var j = 0; j < sects.length; j++) {\r\n                _loop_2(j);\r\n            }\r\n        };\r\n        // Parent part of the url.\r\n        for (var i = 0; i < typ.length; i++) {\r\n            _loop_1(i);\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/general/url.spec.ts?");

/***/ }),

/***/ "./src/client/quality/queries/different-queries-should-not-have-same-reference.spec.ts":
/*!*********************************************************************************************!*\
  !*** ./src/client/quality/queries/different-queries-should-not-have-same-reference.spec.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Different queries should not have the same reference.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar QueryChecker_1 = __webpack_require__(/*! ../../../common/QueryChecker */ \"./src/common/QueryChecker.ts\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Queries - Different queries should not use same reference key', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    var referenceKeyMap = new Map();\r\n    // Given an array of actions, find loadData queries.\r\n    var checkActions = function (actions, summary) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If we have a loadData, execute checks on it.\r\n            if (a.task === 'loadData') {\r\n                QueryChecker_1.checkQueryReferenceKey(a.data, summary, referenceKeyMap, j);\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions, actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']');\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]], actionType + ' (onError): /' + t + '/' + s + '/' + ss + '[' + i + ']');\r\n                }\r\n            }\r\n        });\r\n    });\r\n    // Get all the data constructs for views.\r\n    loader_1.forAllViews(build, null, function (t, s, ss, i) {\r\n        it('Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            var view = build.urls[t][s].sections[ss][i];\r\n            // If the view has a data construct.\r\n            if (view.data) {\r\n                QueryChecker_1.checkQueryReferenceKey(view.data, 'Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', referenceKeyMap);\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/queries/different-queries-should-not-have-same-reference.spec.ts?");

/***/ }),

/***/ "./src/client/quality/queries/queries-should-have-filter-references-when-using-filters.spec.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/client/quality/queries/queries-should-have-filter-references-when-using-filters.spec.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Queries should have correct filter references.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar QueryChecker_1 = __webpack_require__(/*! ../../../common/QueryChecker */ \"./src/common/QueryChecker.ts\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Queries - Should have filter references when filters are used', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    // Given an array of actions, ensure there are limits on loadData\r\n    var checkActions = function (actions) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If we have a loadData ensure it has a limit\r\n            if (a.task === 'loadData') {\r\n                QueryChecker_1.checkQueryFilters(a.data, j);\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions);\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n    // Get all the data constructs for views.\r\n    loader_1.forAllViews(build, null, function (t, s, ss, i) {\r\n        it('Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            var view = build.urls[t][s].sections[ss][i];\r\n            // If the view has a data construct.\r\n            if (view.data) {\r\n                QueryChecker_1.checkQueryFilters(view.data);\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/queries/queries-should-have-filter-references-when-using-filters.spec.ts?");

/***/ }),

/***/ "./src/client/quality/queries/queries-should-have-id-keys-for-merging.spec.ts":
/*!************************************************************************************!*\
  !*** ./src/client/quality/queries/queries-should-have-id-keys-for-merging.spec.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Queries should use idKeys when using map reduce.\r\n */\r\nvar loader_1 = __webpack_require__(/*! ../../loader */ \"./src/client/loader.ts\");\r\nvar QueryChecker_1 = __webpack_require__(/*! ../../../common/QueryChecker */ \"./src/common/QueryChecker.ts\");\r\n__webpack_require__(/*! mocha */ \"mocha\");\r\ndescribe('Queries - Queries should use idKeys for merging data when using map reduce', function () {\r\n    // Get the build.\r\n    var build = loader_1.getBuild(process.argv, process.cwd());\r\n    // Given an array of actions, ensure there are limits on loadData\r\n    var checkActions = function (actions) {\r\n        for (var j = 0; j < actions.length; j++) {\r\n            var a = actions[j];\r\n            // If we have a loadData ensure it has a limit\r\n            if (a.task === 'loadData') {\r\n                QueryChecker_1.checkQueryIdKeys(a.data, j);\r\n            }\r\n        }\r\n    };\r\n    // Get all the actions.\r\n    loader_1.forAllActions(build, function (t, s, ss, i, actionType, actions, errorActions) {\r\n        it(actionType + ': /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            checkActions(actions);\r\n            if (errorActions) {\r\n                var keys = Object.keys(errorActions);\r\n                for (var j = 0; j < keys.length; j++) {\r\n                    checkActions(errorActions[keys[j]]);\r\n                }\r\n            }\r\n        });\r\n    });\r\n    // Get all the data constructs for views.\r\n    loader_1.forAllViews(build, null, function (t, s, ss, i) {\r\n        it('Data: /' + t + '/' + s + '/' + ss + '[' + i + ']', function () {\r\n            var view = build.urls[t][s].sections[ss][i];\r\n            // If the view has a data construct.\r\n            if (view.data) {\r\n                QueryChecker_1.checkQueryIdKeys(view.data);\r\n            }\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/quality/queries/queries-should-have-id-keys-for-merging.spec.ts?");

/***/ }),

/***/ "./src/client/quality/reports/no-data.spec.ts":
/*!****************************************************!*\
  !*** ./src/client/quality/reports/no-data.spec.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Checks the case where there is no data in the report.\r\n */\r\n/*import { getBuild } from '../../loader';\r\nimport { expect } from 'chai';\r\nimport 'mocha';\r\n\r\ndescribe( 'Reports - No data', () => {\r\n  it( 'Should succesfully run onData actions', () => {\r\n    let b = getBuild( process.argv, process.cwd() );\r\n    console.log( b );\r\n\r\n    const result = 'Hello world!';\r\n    expect(result).to.equal('Hello world!');\r\n  });\r\n});\r\n*/\r\n\n\n//# sourceURL=webpack:///./src/client/quality/reports/no-data.spec.ts?");

/***/ }),

/***/ "./src/client_quality.spec.ts":
/*!************************************!*\
  !*** ./src/client_quality.spec.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Entry point for all client quality test cases.\r\n */\r\n__webpack_require__(/*! ./client/quality/actions/go-back-should-not-have-other-tasks */ \"./src/client/quality/actions/go-back-should-not-have-other-tasks.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/actions/no-actions-check */ \"./src/client/quality/actions/no-actions-check.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/actions/pr-not-allowed-in-default-app */ \"./src/client/quality/actions/pr-not-allowed-in-default-app.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/actions/pr-notify-queue-should-have-correct-server-references */ \"./src/client/quality/actions/pr-notify-queue-should-have-correct-server-references.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/api/api */ \"./src/client/quality/api/api.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/assets/mobile */ \"./src/client/quality/assets/mobile.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/assets/web */ \"./src/client/quality/assets/web.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/contexts/empty */ \"./src/client/quality/contexts/empty.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/contexts/onload */ \"./src/client/quality/contexts/onload.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/contexts/prefix */ \"./src/client/quality/contexts/prefix.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/contexts/urls */ \"./src/client/quality/contexts/urls.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/forms/relation-key */ \"./src/client/quality/forms/relation-key.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/general/general */ \"./src/client/quality/general/general.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/general/url */ \"./src/client/quality/general/url.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/queries/different-queries-should-not-have-same-reference */ \"./src/client/quality/queries/different-queries-should-not-have-same-reference.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/queries/queries-should-have-filter-references-when-using-filters */ \"./src/client/quality/queries/queries-should-have-filter-references-when-using-filters.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/queries/queries-should-have-id-keys-for-merging */ \"./src/client/quality/queries/queries-should-have-id-keys-for-merging.spec.ts\");\r\n__webpack_require__(/*! ./client/quality/reports/no-data */ \"./src/client/quality/reports/no-data.spec.ts\");\r\n\n\n//# sourceURL=webpack:///./src/client_quality.spec.ts?");

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

/***/ "./src/server sync recursive":
/*!*************************!*\
  !*** ./src/server sync ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/server sync recursive\";\n\n//# sourceURL=webpack:///./src/server_sync?");

/***/ }),

/***/ "./src/server/loader.ts":
/*!******************************!*\
  !*** ./src/server/loader.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @author Copyright RIKSOF (Private) Limited.\r\n *\r\n * @file Loader for the build.\r\n */\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar minimist = __webpack_require__(/*! minimist */ \"minimist\");\r\n/**\r\n * Build loader for server.\r\n *\r\n * @param {any[]} argv          Arguments received.\r\n * @param {string} cwd          Current working directory.\r\n *\r\n * @returns {any} build         Instance of the build.\r\n */\r\nexports.getServerBuild = function (argv, cwd) {\r\n    var params = minimist(argv.slice(2));\r\n    var p = path.isAbsolute(params.src) ?\r\n        path.join(params.src, 'process', params.app) :\r\n        path.join(cwd, params.src, 'process', params.app);\r\n    var ServerBuild = __webpack_require__(\"./src/server sync recursive\")(p);\r\n    return new ServerBuild();\r\n};\r\n/**\r\n * Get the source root for the app.\r\n *\r\n * @param {any[]} argv          Arguments received.\r\n * @param {string} cwd          Current working directory.\r\n *\r\n * @returns {any} build         Instance of the build.\r\n */\r\nexports.getSrcRoot = function (argv, cwd) {\r\n    var params = minimist(argv.slice(2));\r\n    var p = path.isAbsolute(params.src) ?\r\n        params.src : path.join(cwd, params.src);\r\n    return p;\r\n};\r\n/**\r\n * Get the name of the server app.\r\n *\r\n * @param {any[]} argv          Arguments received.\r\n *\r\n * @returns {string} app        Name of the app.\r\n */\r\nexports.getServerName = function (argv) {\r\n    var params = minimist(argv.slice(2));\r\n    return params.app;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/loader.ts?");

/***/ }),

/***/ "chai":
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chai\");\n\n//# sourceURL=webpack:///external_%22chai%22?");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs-extra\");\n\n//# sourceURL=webpack:///external_%22fs-extra%22?");

/***/ }),

/***/ "jit/client":
/*!*****************************!*\
  !*** external "jit/client" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jit/client\");\n\n//# sourceURL=webpack:///external_%22jit/client%22?");

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