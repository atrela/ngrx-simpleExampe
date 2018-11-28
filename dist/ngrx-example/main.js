(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/@angular/core/fesm5 lazy recursive":
/*!*****************************************************************!*\
  !*** ../node_modules/@angular/core/fesm5 lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <div class=\"bg-image\">\n      <img  src=\"assets/images/people.png\" style=\"width:40%; height:40%\"/>\n  </div>\n  </div>\n\n<div class=\"container \">\n<div class=\"row col-md-12\">\n \n  <div class=\"col-md-6\"><customer-list></customer-list></div>\n  <div class=\"col-md-6\">div 2</div>\n  </div>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngrx-example';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _customer_customer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/customer.module */ "./src/app/customer/customer.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _customer_store_customer_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/store/customer.reducers */ "./src/app/customer/store/customer.reducers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _customer_customer_module__WEBPACK_IMPORTED_MODULE_4__["CustomerModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_customer_store_customer_reducers__WEBPACK_IMPORTED_MODULE_6__["customerReducer"]),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/customer-details/customer-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent() {
    }
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customer/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customer/customer-details/customer-details.component.css")]
        })
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">First</th>\r\n          <th scope=\"col\">Last</th>\r\n          <th scope=\"col\">Handle</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <th scope=\"row\">1</th>\r\n          <td>Mark</td>\r\n          <td>Otto</td>\r\n          <td>@mdo</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">2</th>\r\n          <td>Jacob</td>\r\n          <td>Thornton</td>\r\n          <td>@fat</td>\r\n        </tr>\r\n        <tr>\r\n          <th scope=\"row\">3</th>\r\n          <td>Larry</td>\r\n          <td>the Bird</td>\r\n          <td>@twitter</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>"

/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent() {
    }
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customer/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer/customer-list/customer-list.component.css")]
        })
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_details_customer_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-details/customer-detail.component */ "./src/app/customer/customer-details/customer-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__["CustomerListComponent"],
                _customer_details_customer_detail_component__WEBPACK_IMPORTED_MODULE_2__["CustomerDetailsComponent"]
            ],
            exports: [
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__["CustomerListComponent"],
                _customer_details_customer_detail_component__WEBPACK_IMPORTED_MODULE_2__["CustomerDetailsComponent"]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/customer/store/customer.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/customer/store/customer.actions.ts ***!
  \****************************************************/
/*! exports provided: UPDATE_CUSTOMER, CREATE_CUSTOMER, DELETE_CUSTOMER, UpdateCustomer, CreateCustomer, DeleteCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CUSTOMER", function() { return UPDATE_CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CUSTOMER", function() { return CREATE_CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CUSTOMER", function() { return DELETE_CUSTOMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomer", function() { return UpdateCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomer", function() { return CreateCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomer", function() { return DeleteCustomer; });
var UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
var CREATE_CUSTOMER = 'CREATE_CUSTOMER';
var DELETE_CUSTOMER = 'DELETE_CUSTOMER';
var UpdateCustomer = /** @class */ (function () {
    function UpdateCustomer(payload) {
        this.payload = payload;
        this.type = UPDATE_CUSTOMER;
    }
    return UpdateCustomer;
}());

var CreateCustomer = /** @class */ (function () {
    function CreateCustomer(payload) {
        this.payload = payload;
        this.type = CREATE_CUSTOMER;
    }
    return CreateCustomer;
}());

var DeleteCustomer = /** @class */ (function () {
    function DeleteCustomer(payload) {
        this.payload = payload;
        this.type = DELETE_CUSTOMER;
    }
    return DeleteCustomer;
}());



/***/ }),

/***/ "./src/app/customer/store/customer.reducers.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/store/customer.reducers.ts ***!
  \*****************************************************/
/*! exports provided: customerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerReducer", function() { return customerReducer; });
/* harmony import */ var _customer_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.actions */ "./src/app/customer/store/customer.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initialState = {
    customers: []
};
function customerReducer(state, action) {
    switch (action.type) {
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_CUSTOMER"]:
            return __assign({}, state, { customers: state.customers.concat([action.payload]) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aleksandra\Desktop\ngrx-example\ngrx-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map