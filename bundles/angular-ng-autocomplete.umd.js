(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-ng-autocomplete', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['angular-ng-autocomplete'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.forms, global.ng.common));
}(this, (function (exports, core, rxjs, operators, forms, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete-lib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutocompleteLibComponent = /** @class */ (function () {
        function AutocompleteLibComponent() {
        }
        /**
         * @return {?}
         */
        AutocompleteLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        AutocompleteLibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-autocomplete-lib',
                        template: "\n    <p>\n      autocomplete-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        AutocompleteLibComponent.ctorParameters = function () { return []; };
        return AutocompleteLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete/autocomplete.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Keyboard events
     * @type {?}
     */
    var isArrowUp = (/**
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) { return keyCode === 38; });
    var ɵ0 = isArrowUp;
    /** @type {?} */
    var isArrowDown = (/**
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) { return keyCode === 40; });
    var ɵ1 = isArrowDown;
    /** @type {?} */
    var isArrowUpDown = (/**
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) { return isArrowUp(keyCode) || isArrowDown(keyCode); });
    var ɵ2 = isArrowUpDown;
    /** @type {?} */
    var isEnter = (/**
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) { return keyCode === 13; });
    var ɵ3 = isEnter;
    /** @type {?} */
    var isBackspace = (/**
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) { return keyCode === 8; });
    var ɵ4 = isBackspace;
    /** @type {?} */
    var isDelete = (/**
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) { return keyCode === 46; });
    var ɵ5 = isDelete;
    /** @type {?} */
    var isESC = (/**
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) { return keyCode === 27; });
    var ɵ6 = isESC;
    /** @type {?} */
    var isTab = (/**
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) { return keyCode === 9; });
    var ɵ7 = isTab;
    var AutocompleteComponent = /** @class */ (function () {
        function AutocompleteComponent(elementRef, renderer) {
            this.renderer = renderer;
            // input events
            this.query = ''; // search query
            // search query
            this.filteredList = []; // list of items
            // list of items
            this.historyList = []; // list of history items
            // list of history items
            this.isHistoryListVisible = true;
            this.selectedIdx = -1;
            this.toHighlight = '';
            this.notFound = false;
            this.isFocused = false;
            this.isOpen = false;
            this.isScrollToEnd = false;
            this.overlay = false;
            this.manualOpen = undefined;
            this.manualClose = undefined;
            // @Inputs
            /**
             * Data of items list.
             * It can be array of strings or array of objects.
             */
            this.data = [];
            // keyword to filter the list
            this.placeHolder = ''; // input placeholder
            // input placeholder
            this.heading = '';
            /**
             * Heading text of history list.
             * If it is null then history heading is hidden.
             */
            this.historyHeading = 'Recently selected';
            this.historyListMaxNumber = 15; // maximum number of items in the history list.
            // maximum number of items in the history list.
            this.notFoundText = 'Not found'; // set custom text when filter returns empty result
            // input disable/enable
            /**
             * The minimum number of characters the user must type before a search is performed.
             */
            this.minQueryLength = 1;
            // @Output events
            /**
             * Event that is emitted whenever an item from the list is selected.
             */
            this.selected = new core.EventEmitter();
            /**
             * Event that is emitted whenever an input is changed.
             */
            this.inputChanged = new core.EventEmitter();
            /**
             * Event that is emitted whenever an input is focused.
             */
            this.inputFocused = new core.EventEmitter();
            /**
             * Event that is emitted whenever an input is cleared.
             */
            this.inputCleared = new core.EventEmitter();
            /**
             * Event that is emitted when the autocomplete panel is opened.
             */
            this.opened = new core.EventEmitter();
            /**
             * Event that is emitted when the autocomplete panel is closed.
             */
            this.closed = new core.EventEmitter();
            /**
             * Event that is emitted when scrolled to the end of items.
             */
            this.scrolledToEnd = new core.EventEmitter();
            /**
             * Propagates new value when model changes
             */
            this.propagateChange = (/**
             * @return {?}
             */
            function () {
            });
            this.elementRef = elementRef;
        }
        /**
         * Writes a new value from the form model into the view,
         * Updates model
         */
        /**
         * Writes a new value from the form model into the view,
         * Updates model
         * @param {?} value
         * @return {?}
         */
        AutocompleteComponent.prototype.writeValue = /**
         * Writes a new value from the form model into the view,
         * Updates model
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.query = value;
        };
        /**
         * Registers a handler that is called when something in the view has changed
         */
        /**
         * Registers a handler that is called when something in the view has changed
         * @param {?} fn
         * @return {?}
         */
        AutocompleteComponent.prototype.registerOnChange = /**
         * Registers a handler that is called when something in the view has changed
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.propagateChange = fn;
        };
        /**
         * Registers a handler specifically for when a control receives a touch event
         */
        /**
         * Registers a handler specifically for when a control receives a touch event
         * @param {?} fn
         * @return {?}
         */
        AutocompleteComponent.prototype.registerOnTouched = /**
         * Registers a handler specifically for when a control receives a touch event
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
        };
        /**
         * Event that is called when the value of an input element is changed
         */
        /**
         * Event that is called when the value of an input element is changed
         * @param {?} event
         * @return {?}
         */
        AutocompleteComponent.prototype.onChange = /**
         * Event that is called when the value of an input element is changed
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.propagateChange(event.target.value);
        };
        /**
         * Event that is called when the control status changes to or from DISABLED
         */
        /**
         * Event that is called when the control status changes to or from DISABLED
         * @param {?} isDisabled
         * @return {?}
         */
        AutocompleteComponent.prototype.setDisabledState = /**
         * Event that is called when the control status changes to or from DISABLED
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        /**
         * @return {?}
         */
        AutocompleteComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setInitialValue(this.initialValue);
        };
        /**
         * @return {?}
         */
        AutocompleteComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.initEventStream();
            this.handleScroll();
        };
        /**
         * Set initial value
         * @param value
         */
        /**
         * Set initial value
         * @param {?} value
         * @return {?}
         */
        AutocompleteComponent.prototype.setInitialValue = /**
         * Set initial value
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.initialValue) {
                this.select(value);
            }
        };
        /**
         * Update search results
         */
        /**
         * Update search results
         * @param {?} changes
         * @return {?}
         */
        AutocompleteComponent.prototype.ngOnChanges = /**
         * Update search results
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes &&
                changes.data &&
                Array.isArray(changes.data.currentValue)) {
                this.handleItemsChange();
                if (!changes.data.firstChange && this.isFocused) {
                    this.handleOpen();
                }
            }
        };
        /**
         * Items change
         */
        /**
         * Items change
         * @return {?}
         */
        AutocompleteComponent.prototype.handleItemsChange = /**
         * Items change
         * @return {?}
         */
        function () {
            this.isScrollToEnd = false;
            if (!this.isOpen) {
                return;
            }
            this.filteredList = this.data;
            this.notFound = !this.filteredList || this.filteredList.length === 0;
        };
        /**
         * Filter data
         */
        /**
         * Filter data
         * @return {?}
         */
        AutocompleteComponent.prototype.filterList = /**
         * Filter data
         * @return {?}
         */
        function () {
            var _this = this;
            this.selectedIdx = -1;
            this.initSearchHistory();
            if (this.query != null && this.data) {
                this.toHighlight = this.query;
                this.filteredList = this.data.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (typeof item === 'string') {
                        // string logic, check equality of strings
                        return item.toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
                    }
                    else if (typeof item === 'object' && item.constructor === Object) {
                        // object logic, check property equality
                        return item[_this.searchKeyword].toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
                    }
                }));
            }
            else {
                this.notFound = false;
            }
        };
        /**
         * Check type of item in the list.
         * @param item
         */
        /**
         * Check type of item in the list.
         * @param {?} item
         * @return {?}
         */
        AutocompleteComponent.prototype.isType = /**
         * Check type of item in the list.
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return typeof item === 'string';
        };
        /**
         * Select item in the list.
         * @param item
         */
        /**
         * Select item in the list.
         * @param {?} item
         * @return {?}
         */
        AutocompleteComponent.prototype.select = /**
         * Select item in the list.
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            this.query = !this.isType(item) ? item[this.searchKeyword] : item;
            this.isOpen = true;
            this.overlay = false;
            this.selected.emit(item);
            this.propagateChange(item);
            if (this.initialValue) {
                // check if history already exists in localStorage and then update
                /** @type {?} */
                var history_1 = window.localStorage.getItem("" + this.historyIdentifier);
                if (history_1) {
                    /** @type {?} */
                    var existingHistory = JSON.parse(localStorage["" + this.historyIdentifier]);
                    if (!(existingHistory instanceof Array))
                        existingHistory = [];
                    // check if selected item exists in existingHistory
                    if (!existingHistory.some((/**
                     * @param {?} existingItem
                     * @return {?}
                     */
                    function (existingItem) { return !_this.isType(existingItem)
                        ? existingItem[_this.searchKeyword] == item[_this.searchKeyword] : existingItem == item; }))) {
                        existingHistory.unshift(item);
                        localStorage.setItem("" + this.historyIdentifier, JSON.stringify(existingHistory));
                        // check if items don't exceed max allowed number
                        if (existingHistory.length >= this.historyListMaxNumber) {
                            existingHistory.splice(existingHistory.length - 1, 1);
                            localStorage.setItem("" + this.historyIdentifier, JSON.stringify(existingHistory));
                        }
                    }
                    else {
                        // if selected item exists in existingHistory swap to top in array
                        if (!this.isType(item)) {
                            // object logic
                            /** @type {?} */
                            var copiedExistingHistory = existingHistory.slice();
                            // copy original existingHistory array
                            /** @type {?} */
                            var selectedIndex = copiedExistingHistory.map((/**
                             * @param {?} el
                             * @return {?}
                             */
                            function (el) { return el[_this.searchKeyword]; })).indexOf(item[this.searchKeyword]);
                            copiedExistingHistory.splice(selectedIndex, 1);
                            copiedExistingHistory.splice(0, 0, item);
                            localStorage.setItem("" + this.historyIdentifier, JSON.stringify(copiedExistingHistory));
                        }
                        else {
                            // string logic
                            /** @type {?} */
                            var copiedExistingHistory = existingHistory.slice();
                            copiedExistingHistory.splice(copiedExistingHistory.indexOf(item), 1);
                            copiedExistingHistory.splice(0, 0, item);
                            localStorage.setItem("" + this.historyIdentifier, JSON.stringify(copiedExistingHistory));
                        }
                    }
                }
                else {
                    this.saveHistory(item);
                }
            }
            else {
                this.saveHistory(item);
            }
            this.handleClose();
        };
        /**
         * Document click
         * @param e event
         */
        /**
         * Document click
         * @param {?} e event
         * @return {?}
         */
        AutocompleteComponent.prototype.handleClick = /**
         * Document click
         * @param {?} e event
         * @return {?}
         */
        function (e) {
            /** @type {?} */
            var clickedComponent = e.target;
            /** @type {?} */
            var inside = false;
            do {
                if (clickedComponent === this.elementRef.nativeElement) {
                    inside = true;
                    if (this.filteredList.length) {
                        this.handleOpen();
                    }
                }
                clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!inside) {
                this.handleClose();
            }
        };
        /**
         * Handle body overlay
         */
        /**
         * Handle body overlay
         * @return {?}
         */
        AutocompleteComponent.prototype.handleOverlay = /**
         * Handle body overlay
         * @return {?}
         */
        function () {
            this.overlay = false;
        };
        /**
         * Scroll items
         */
        /**
         * Scroll items
         * @return {?}
         */
        AutocompleteComponent.prototype.handleScroll = /**
         * Scroll items
         * @return {?}
         */
        function () {
            var _this = this;
            this.renderer.listen(this.filteredListElement.nativeElement, 'scroll', (/**
             * @return {?}
             */
            function () {
                _this.scrollToEnd();
            }));
        };
        /**
         * Define panel state
         */
        /**
         * Define panel state
         * @param {?} event
         * @return {?}
         */
        AutocompleteComponent.prototype.setPanelState = /**
         * Define panel state
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event) {
                event.stopPropagation();
            }
            // If controls are untouched
            if (typeof this.manualOpen === 'undefined'
                && typeof this.manualClose === 'undefined') {
                this.isOpen = false;
                this.handleOpen();
            }
            // If one of the controls is untouched and other is deactivated
            if (typeof this.manualOpen === 'undefined'
                && this.manualClose === false
                || typeof this.manualClose === 'undefined'
                    && this.manualOpen === false) {
                this.isOpen = false;
                this.handleOpen();
            }
            // if controls are touched but both are deactivated
            if (this.manualOpen === false && this.manualClose === false) {
                this.isOpen = false;
                this.handleOpen();
            }
            // if open control is touched and activated
            if (this.manualOpen) {
                this.isOpen = false;
                this.handleOpen();
                this.manualOpen = false;
            }
            // if close control is touched and activated
            if (this.manualClose) {
                this.isOpen = true;
                this.handleClose();
                this.manualClose = false;
            }
        };
        /**
         * Manual controls
         */
        /**
         * Manual controls
         * @return {?}
         */
        AutocompleteComponent.prototype.open = /**
         * Manual controls
         * @return {?}
         */
        function () {
            this.manualOpen = true;
            this.isOpen = false;
            this.handleOpen();
        };
        /**
         * @return {?}
         */
        AutocompleteComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this.manualClose = true;
            this.isOpen = true;
            this.handleClose();
        };
        /**
         * @return {?}
         */
        AutocompleteComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            this.handleFocus(event);
        };
        /**
         * @return {?}
         */
        AutocompleteComponent.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.remove(event);
        };
        /**
         * Remove search query
         */
        /**
         * Remove search query
         * @param {?} e
         * @return {?}
         */
        AutocompleteComponent.prototype.remove = /**
         * Remove search query
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            this.query = '';
            this.inputCleared.emit();
            this.propagateChange(this.query);
            this.setPanelState(e);
        };
        /**
         * Initialize historyList search
         */
        /**
         * Initialize historyList search
         * @return {?}
         */
        AutocompleteComponent.prototype.initSearchHistory = /**
         * Initialize historyList search
         * @return {?}
         */
        function () {
            this.isHistoryListVisible = false;
            if (this.historyIdentifier && !this.query) {
                /** @type {?} */
                var history_2 = window.localStorage.getItem("" + this.historyIdentifier);
                if (history_2) {
                    this.isHistoryListVisible = true;
                    this.filteredList = [];
                    this.historyList = history_2 ? JSON.parse(history_2) : [];
                }
                else {
                    this.isHistoryListVisible = false;
                }
            }
            else {
                this.isHistoryListVisible = false;
            }
        };
        /**
         * @return {?}
         */
        AutocompleteComponent.prototype.handleOpen = /**
         * @return {?}
         */
        function () {
            if (this.isOpen || this.isOpen && !this.isLoading) {
                return;
            }
            // If data exists
            if (this.data && this.data.length) {
                this.isOpen = true;
                this.overlay = true;
                this.filterList();
                this.opened.emit();
            }
        };
        /**
         * @return {?}
         */
        AutocompleteComponent.prototype.handleClose = /**
         * @return {?}
         */
        function () {
            if (!this.isOpen) {
                this.isFocused = false;
                return;
            }
            this.isOpen = false;
            this.overlay = false;
            this.filteredList = [];
            this.selectedIdx = -1;
            this.notFound = false;
            this.isHistoryListVisible = false;
            this.isFocused = false;
            this.closed.emit();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        AutocompleteComponent.prototype.handleFocus = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.searchInput.nativeElement.focus();
            if (this.isFocused) {
                return;
            }
            this.inputFocused.emit(e);
            // if data exists then open
            if (this.data && this.data.length) {
                this.setPanelState(event);
            }
            this.isFocused = true;
        };
        /**
         * @return {?}
         */
        AutocompleteComponent.prototype.scrollToEnd = /**
         * @return {?}
         */
        function () {
            if (this.isScrollToEnd) {
                return;
            }
            /** @type {?} */
            var scrollTop = this.filteredListElement.nativeElement
                .scrollTop;
            /** @type {?} */
            var scrollHeight = this.filteredListElement.nativeElement
                .scrollHeight;
            /** @type {?} */
            var elementHeight = this.filteredListElement.nativeElement
                .clientHeight;
            /** @type {?} */
            var atBottom = scrollHeight === scrollTop + elementHeight;
            if (atBottom) {
                this.scrolledToEnd.emit();
                this.isScrollToEnd = true;
            }
        };
        /**
         * Initialize keyboard events
         */
        /**
         * Initialize keyboard events
         * @return {?}
         */
        AutocompleteComponent.prototype.initEventStream = /**
         * Initialize keyboard events
         * @return {?}
         */
        function () {
            this.inputKeyUp$ = rxjs.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(operators.map((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e; })));
            this.inputKeyDown$ = rxjs.fromEvent(this.searchInput.nativeElement, 'keydown').pipe(operators.map((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e; })));
            this.listenEventStream();
        };
        /**
         * Listen keyboard events
         */
        /**
         * Listen keyboard events
         * @return {?}
         */
        AutocompleteComponent.prototype.listenEventStream = /**
         * Listen keyboard events
         * @return {?}
         */
        function () {
            var _this = this;
            // key up event
            this.inputKeyUp$
                .pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                return !isArrowUpDown(e.keyCode) &&
                    !isEnter(e.keyCode) &&
                    !isESC(e.keyCode) &&
                    !isTab(e.keyCode);
            })), operators.debounceTime(this.debounceTime)).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.onKeyUp(e);
            }));
            // cursor up & down
            this.inputKeyDown$.pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return isArrowUpDown(e.keyCode); }))).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                e.preventDefault();
                _this.onFocusItem(e);
            }));
            // enter keyup
            this.inputKeyUp$.pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return isEnter(e.keyCode); }))).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                //this.onHandleEnter();
            }));
            // enter keydown
            this.inputKeyDown$.pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return isEnter(e.keyCode); }))).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.onHandleEnter();
            }));
            // ESC
            this.inputKeyUp$.pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return isESC(e.keyCode); }), operators.debounceTime(100))).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.onEsc();
            }));
            // TAB
            this.inputKeyDown$.pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return isTab(e.keyCode); }))).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.onTab();
            }));
            // delete
            this.inputKeyDown$.pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return isBackspace(e.keyCode) || isDelete(e.keyCode); }))).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.onDelete();
            }));
        };
        /**
         * on keyup == when input changed
         * @param e event
         */
        /**
         * on keyup == when input changed
         * @param {?} e event
         * @return {?}
         */
        AutocompleteComponent.prototype.onKeyUp = /**
         * on keyup == when input changed
         * @param {?} e event
         * @return {?}
         */
        function (e) {
            this.notFound = false; // search results are unknown while typing
            // if input is empty
            if (!this.query) {
                this.notFound = false;
                this.inputChanged.emit(e.target.value);
                this.inputCleared.emit();
                //this.filterList();
                this.setPanelState(e);
            }
            // note that '' can be a valid query
            if (!this.query && this.query !== '') {
                return;
            }
            // if query >= to minQueryLength
            if (this.query.length >= this.minQueryLength) {
                this.inputChanged.emit(e.target.value);
                this.filterList();
                // If no results found
                if (!this.filteredList.length && !this.isLoading) {
                    this.notFoundText ? this.notFound = true : this.notFound = false;
                }
            }
        };
        /**
         * Keyboard arrow top and arrow bottom
         * @param e event
         */
        /**
         * Keyboard arrow top and arrow bottom
         * @param {?} e event
         * @return {?}
         */
        AutocompleteComponent.prototype.onFocusItem = /**
         * Keyboard arrow top and arrow bottom
         * @param {?} e event
         * @return {?}
         */
        function (e) {
            // move arrow up and down on filteredList or historyList
            if (!this.historyList.length || !this.isHistoryListVisible) {
                // filteredList
                /** @type {?} */
                var totalNumItem = this.filteredList.length;
                if (e.key === 'ArrowDown') {
                    /** @type {?} */
                    var sum = this.selectedIdx;
                    sum = (this.selectedIdx === null) ? 0 : sum + 1;
                    this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                    this.scrollToFocusedItem(this.selectedIdx);
                }
                else if (e.key === 'ArrowUp') {
                    if (this.selectedIdx == -1) {
                        this.selectedIdx = 0;
                    }
                    this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                    this.scrollToFocusedItem(this.selectedIdx);
                }
            }
            else {
                // historyList
                /** @type {?} */
                var totalNumItem = this.historyList.length;
                if (e.key === 'ArrowDown') {
                    /** @type {?} */
                    var sum = this.selectedIdx;
                    sum = (this.selectedIdx === null) ? 0 : sum + 1;
                    this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                    this.scrollToFocusedItem(this.selectedIdx);
                }
                else if (e.key === 'ArrowUp') {
                    if (this.selectedIdx == -1) {
                        this.selectedIdx = 0;
                    }
                    this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                    this.scrollToFocusedItem(this.selectedIdx);
                }
            }
        };
        /**
         * Scroll to focused item
         * * @param index
         */
        /**
         * Scroll to focused item
         * * \@param index
         * @param {?} index
         * @return {?}
         */
        AutocompleteComponent.prototype.scrollToFocusedItem = /**
         * Scroll to focused item
         * * \@param index
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var listElement = null;
            // Define list element
            if (!this.historyList.length || !this.isHistoryListVisible) {
                // filteredList element
                listElement = this.filteredListElement.nativeElement;
            }
            else {
                // historyList element
                listElement = this.historyListElement.nativeElement;
            }
            /** @type {?} */
            var items = Array.prototype.slice.call(listElement.childNodes).filter((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (node.nodeType === 1) {
                    // if node is element
                    return node.className.includes('item');
                }
                else {
                    return false;
                }
            }));
            if (!items.length) {
                return;
            }
            /** @type {?} */
            var listHeight = listElement.offsetHeight;
            /** @type {?} */
            var itemHeight = items[index].offsetHeight;
            /** @type {?} */
            var visibleTop = listElement.scrollTop;
            /** @type {?} */
            var visibleBottom = listElement.scrollTop + listHeight - itemHeight;
            /** @type {?} */
            var targetPosition = items[index].offsetTop;
            if (targetPosition < visibleTop) {
                listElement.scrollTop = targetPosition;
            }
            if (targetPosition > visibleBottom) {
                listElement.scrollTop = targetPosition - listHeight + itemHeight;
            }
        };
        /**
         * Select item on enter click
         */
        /**
         * Select item on enter click
         * @return {?}
         */
        AutocompleteComponent.prototype.onHandleEnter = /**
         * Select item on enter click
         * @return {?}
         */
        function () {
            // click enter to choose item from filteredList or historyList
            if (this.selectedIdx > -1) {
                if (!this.historyList.length || !this.isHistoryListVisible) {
                    // filteredList
                    this.query = !this.isType(this.filteredList[this.selectedIdx])
                        ? this.filteredList[this.selectedIdx][this.searchKeyword]
                        : this.filteredList[this.selectedIdx];
                    this.saveHistory(this.filteredList[this.selectedIdx]);
                    this.select(this.filteredList[this.selectedIdx]);
                }
                else {
                    // historyList
                    this.query = !this.isType(this.historyList[this.selectedIdx])
                        ? this.historyList[this.selectedIdx][this.searchKeyword]
                        : this.historyList[this.selectedIdx];
                    this.saveHistory(this.historyList[this.selectedIdx]);
                    this.select(this.historyList[this.selectedIdx]);
                }
            }
            this.isHistoryListVisible = false;
            this.handleClose();
        };
        /**
         * Esc click
         */
        /**
         * Esc click
         * @return {?}
         */
        AutocompleteComponent.prototype.onEsc = /**
         * Esc click
         * @return {?}
         */
        function () {
            this.searchInput.nativeElement.blur();
            this.handleClose();
        };
        /**
         * Tab click
         */
        /**
         * Tab click
         * @return {?}
         */
        AutocompleteComponent.prototype.onTab = /**
         * Tab click
         * @return {?}
         */
        function () {
            this.searchInput.nativeElement.blur();
            this.handleClose();
        };
        /**
         * Delete click
         */
        /**
         * Delete click
         * @return {?}
         */
        AutocompleteComponent.prototype.onDelete = /**
         * Delete click
         * @return {?}
         */
        function () {
            // panel is open on delete
            this.isOpen = true;
        };
        /**
         * Select item to save in localStorage
         * @param selected
         */
        /**
         * Select item to save in localStorage
         * @param {?} selected
         * @return {?}
         */
        AutocompleteComponent.prototype.saveHistory = /**
         * Select item to save in localStorage
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            var _this = this;
            if (this.historyIdentifier) {
                // check if selected item exists in historyList
                if (!this.historyList.some((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return !_this.isType(item)
                    ? item[_this.searchKeyword] == selected[_this.searchKeyword] : item == selected; }))) {
                    this.saveHistoryToLocalStorage(__spread([selected], this.historyList));
                    // check if items don't exceed max allowed number
                    if (this.historyList.length >= this.historyListMaxNumber) {
                        this.historyList.splice(this.historyList.length - 1, 1);
                        this.saveHistoryToLocalStorage(__spread([selected], this.historyList));
                    }
                }
                else {
                    // if selected item exists in historyList swap to top in array
                    if (!this.isType(selected)) {
                        // object logic
                        /** @type {?} */
                        var copiedHistoryList = this.historyList.slice();
                        // copy original historyList array
                        /** @type {?} */
                        var selectedIndex = copiedHistoryList.map((/**
                         * @param {?} item
                         * @return {?}
                         */
                        function (item) { return item[_this.searchKeyword]; })).indexOf(selected[this.searchKeyword]);
                        copiedHistoryList.splice(selectedIndex, 1);
                        copiedHistoryList.splice(0, 0, selected);
                        this.saveHistoryToLocalStorage(__spread(copiedHistoryList));
                    }
                    else {
                        // string logic
                        /** @type {?} */
                        var copiedHistoryList = this.historyList.slice();
                        copiedHistoryList.splice(this.historyList.indexOf(selected), 1);
                        copiedHistoryList.splice(0, 0, selected);
                        this.saveHistoryToLocalStorage(__spread(copiedHistoryList));
                    }
                }
            }
        };
        /**
         * Save item in localStorage
         * @param selected
         */
        /**
         * Save item in localStorage
         * @param {?} selected
         * @return {?}
         */
        AutocompleteComponent.prototype.saveHistoryToLocalStorage = /**
         * Save item in localStorage
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            window.localStorage.setItem("" + this.historyIdentifier, JSON.stringify(selected));
        };
        /**
         * Remove item from localStorage
         * @param index
         * @param e event
         */
        /**
         * Remove item from localStorage
         * @param {?} index
         * @param {?} e event
         * @return {?}
         */
        AutocompleteComponent.prototype.removeHistoryItem = /**
         * Remove item from localStorage
         * @param {?} index
         * @param {?} e event
         * @return {?}
         */
        function (index, e) {
            e.stopPropagation();
            this.historyList = this.historyList.filter((/**
             * @param {?} v
             * @param {?} i
             * @return {?}
             */
            function (v, i) { return i !== index; }));
            this.saveHistoryToLocalStorage(this.historyList);
            if (this.historyList.length == 0) {
                window.localStorage.removeItem("" + this.historyIdentifier);
                this.filterList();
            }
        };
        /**
         * Reset localStorage
         * @param e event
         */
        /**
         * Reset localStorage
         * @param {?} e event
         * @return {?}
         */
        AutocompleteComponent.prototype.resetHistoryList = /**
         * Reset localStorage
         * @param {?} e event
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            this.historyList = [];
            window.localStorage.removeItem("" + this.historyIdentifier);
            this.filterList();
        };
        AutocompleteComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-autocomplete',
                        template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput type=\"text\" placeholder={{placeHolder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           [disabled]=\"disabled\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isType(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isType(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isType(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isType(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return AutocompleteComponent; })),
                                multi: true
                            }
                        ],
                        encapsulation: core.ViewEncapsulation.None,
                        host: {
                            '(document:click)': 'handleClick($event)',
                            'class': 'ng-autocomplete'
                        },
                        styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.overlay{position:absolute;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
                    }] }
        ];
        /** @nocollapse */
        AutocompleteComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        AutocompleteComponent.propDecorators = {
            searchInput: [{ type: core.ViewChild, args: ['searchInput',] }],
            filteredListElement: [{ type: core.ViewChild, args: ['filteredListElement',] }],
            historyListElement: [{ type: core.ViewChild, args: ['historyListElement',] }],
            data: [{ type: core.Input }],
            searchKeyword: [{ type: core.Input }],
            placeHolder: [{ type: core.Input }],
            heading: [{ type: core.Input }],
            initialValue: [{ type: core.Input }],
            historyIdentifier: [{ type: core.Input }],
            historyHeading: [{ type: core.Input }],
            historyListMaxNumber: [{ type: core.Input }],
            notFoundText: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            debounceTime: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            minQueryLength: [{ type: core.Input }],
            selected: [{ type: core.Output }],
            inputChanged: [{ type: core.Output }],
            inputFocused: [{ type: core.Output }],
            inputCleared: [{ type: core.Output }],
            opened: [{ type: core.Output }],
            closed: [{ type: core.Output }],
            scrolledToEnd: [{ type: core.Output }],
            itemTemplate: [{ type: core.Input }],
            notFoundTemplate: [{ type: core.Input }],
            customTemplate: [{ type: core.ContentChild, args: [core.TemplateRef,] }]
        };
        return AutocompleteComponent;
    }());
    if (false) {
        /** @type {?} */
        AutocompleteComponent.prototype.searchInput;
        /** @type {?} */
        AutocompleteComponent.prototype.filteredListElement;
        /** @type {?} */
        AutocompleteComponent.prototype.historyListElement;
        /** @type {?} */
        AutocompleteComponent.prototype.inputKeyUp$;
        /** @type {?} */
        AutocompleteComponent.prototype.inputKeyDown$;
        /** @type {?} */
        AutocompleteComponent.prototype.query;
        /** @type {?} */
        AutocompleteComponent.prototype.filteredList;
        /** @type {?} */
        AutocompleteComponent.prototype.historyList;
        /** @type {?} */
        AutocompleteComponent.prototype.isHistoryListVisible;
        /** @type {?} */
        AutocompleteComponent.prototype.elementRef;
        /** @type {?} */
        AutocompleteComponent.prototype.selectedIdx;
        /** @type {?} */
        AutocompleteComponent.prototype.toHighlight;
        /** @type {?} */
        AutocompleteComponent.prototype.notFound;
        /** @type {?} */
        AutocompleteComponent.prototype.isFocused;
        /** @type {?} */
        AutocompleteComponent.prototype.isOpen;
        /** @type {?} */
        AutocompleteComponent.prototype.isScrollToEnd;
        /** @type {?} */
        AutocompleteComponent.prototype.overlay;
        /**
         * @type {?}
         * @private
         */
        AutocompleteComponent.prototype.manualOpen;
        /**
         * @type {?}
         * @private
         */
        AutocompleteComponent.prototype.manualClose;
        /**
         * Data of items list.
         * It can be array of strings or array of objects.
         * @type {?}
         */
        AutocompleteComponent.prototype.data;
        /** @type {?} */
        AutocompleteComponent.prototype.searchKeyword;
        /** @type {?} */
        AutocompleteComponent.prototype.placeHolder;
        /** @type {?} */
        AutocompleteComponent.prototype.heading;
        /** @type {?} */
        AutocompleteComponent.prototype.initialValue;
        /**
         * History identifier of history list
         * When valid history identifier is given, then component stores selected item to local storage of user's browser.
         * If it is null then history is hidden.
         * History list is visible if at least one history item is stored.
         * @type {?}
         */
        AutocompleteComponent.prototype.historyIdentifier;
        /**
         * Heading text of history list.
         * If it is null then history heading is hidden.
         * @type {?}
         */
        AutocompleteComponent.prototype.historyHeading;
        /** @type {?} */
        AutocompleteComponent.prototype.historyListMaxNumber;
        /** @type {?} */
        AutocompleteComponent.prototype.notFoundText;
        /** @type {?} */
        AutocompleteComponent.prototype.isLoading;
        /** @type {?} */
        AutocompleteComponent.prototype.debounceTime;
        /** @type {?} */
        AutocompleteComponent.prototype.disabled;
        /**
         * The minimum number of characters the user must type before a search is performed.
         * @type {?}
         */
        AutocompleteComponent.prototype.minQueryLength;
        /**
         * Event that is emitted whenever an item from the list is selected.
         * @type {?}
         */
        AutocompleteComponent.prototype.selected;
        /**
         * Event that is emitted whenever an input is changed.
         * @type {?}
         */
        AutocompleteComponent.prototype.inputChanged;
        /**
         * Event that is emitted whenever an input is focused.
         * @type {?}
         */
        AutocompleteComponent.prototype.inputFocused;
        /**
         * Event that is emitted whenever an input is cleared.
         * @type {?}
         */
        AutocompleteComponent.prototype.inputCleared;
        /**
         * Event that is emitted when the autocomplete panel is opened.
         * @type {?}
         */
        AutocompleteComponent.prototype.opened;
        /**
         * Event that is emitted when the autocomplete panel is closed.
         * @type {?}
         */
        AutocompleteComponent.prototype.closed;
        /**
         * Event that is emitted when scrolled to the end of items.
         * @type {?}
         */
        AutocompleteComponent.prototype.scrolledToEnd;
        /** @type {?} */
        AutocompleteComponent.prototype.itemTemplate;
        /** @type {?} */
        AutocompleteComponent.prototype.notFoundTemplate;
        /** @type {?} */
        AutocompleteComponent.prototype.customTemplate;
        /**
         * Propagates new value when model changes
         * @type {?}
         */
        AutocompleteComponent.prototype.propagateChange;
        /**
         * @type {?}
         * @private
         */
        AutocompleteComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete/highlight.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HighlightPipe = /** @class */ (function () {
        function HighlightPipe() {
        }
        /**
         * @param {?} text
         * @param {?} search
         * @param {?=} searchKeyword
         * @return {?}
         */
        HighlightPipe.prototype.transform = /**
         * @param {?} text
         * @param {?} search
         * @param {?=} searchKeyword
         * @return {?}
         */
        function (text, search, searchKeyword) {
            /** @type {?} */
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter((/**
             * @param {?} t
             * @return {?}
             */
            function (t) {
                return t.length > 0;
            })).join('|');
            /** @type {?} */
            var regex = new RegExp(pattern, 'gi');
            if (!search) {
                return text;
            }
            if (searchKeyword) {
                /** @type {?} */
                var name_1 = text[searchKeyword].replace(regex, (/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) { return "<b>" + match + "</b>"; }));
                // copy original object
                /** @type {?} */
                var text2 = __assign({}, text);
                // set bold value into searchKeyword of copied object
                text2[searchKeyword] = name_1;
                return text2;
            }
            else {
                return search ? text.replace(regex, (/**
                 * @param {?} match
                 * @return {?}
                 */
                function (match) { return "<b>" + match + "</b>"; })) : text;
            }
        };
        HighlightPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'highlight'
                    },] }
        ];
        return HighlightPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutocompleteLibModule = /** @class */ (function () {
        function AutocompleteLibModule() {
        }
        AutocompleteLibModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        declarations: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
                        exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]
                    },] }
        ];
        return AutocompleteLibModule;
    }());

    exports.AutocompleteComponent = AutocompleteComponent;
    exports.AutocompleteLibComponent = AutocompleteLibComponent;
    exports.AutocompleteLibModule = AutocompleteLibModule;
    exports.HighlightPipe = HighlightPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-ng-autocomplete.umd.js.map
