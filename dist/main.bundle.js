webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text text-center\">Интерполяция</h2>\r\n\r\n<h4 class=\"text text-center\">Определение интерполяции</h4>\r\n<p style=\"text-indent: 25px;\">Интерполяция в простейшем классическом смысле – это конструктивное восстановление (чаще всего приближенное) функции определенного класса по известным ее значениям или значениям ее производных в данных точках. Если функция задана в определенных (дискретных) точках на конечном интервале, то сущность интерполяции стоит в отыскании значений функции в промежуточных точках.</p>\r\n<p style=\"text-indent: 25px;\">\r\nСамым распространенным применением интерполяции является получение таблично заданной функции для тех значений ее аргумента, которых в таблице как раз и нет. К интерполяции прибегают не только в случае таблично заданных функций, но и когда функция задана аналитически, но описывающая ее формула громоздка и требует для своего применения трудоемких вычислений.</p>\r\n<p style=\"text-indent: 25px;\">\r\nТермин интерполирование (интерполяция) был впервые употреблён в 1656 году Дж. Валлисом при составлении астрономических и математических таблиц. Он происходит от латинского слова interpolo, означающего переделывать, подновлять, ремонтировать.</p>\r\n\r\n\r\n<h4 class=\"text text-center\">Постановка задачи интерполирования</h4>\r\n<p style=\"text-indent: 25px;\">Пусть в точках <img src=\"../../assets/math/1.png\"> таких, что <img src=\"../../assets/math/2.png\"> , известны значения функции<img src=\"../../assets/math/3.png\">, то есть на отрезке <img src=\"../../assets/math/4.png\"> задана табличная функция (таблица 1.1).</p>\r\n<img src=\"../../assets/math/0.PNG\" style=\"width:500px\"><br><br>\r\n<p style=\"text-indent: 25px;\">Функция <img src=\"../../assets/math/5.png\"> называется интерполирующей или интерполяционной для <img src=\"../../assets/math/6.png\"> на <img src=\"../../assets/math/4.png\">, если ее значения <img src=\"../../assets/math/7.png\"> в заданных точках ,<img src=\"../../assets/math/1.png\"> называемых узлами интерполяции, совпадают с заданными значениями функции <img src=\"../../assets/math/6.png\">, то есть с <img src=\"../../assets/math/8.png\"> соответственно.</p>\r\n\r\n<p>\r\nПроцесс вычисления значений функции <img src=\"../../assets/math/5.png\"> в точках отличных от узлов интерполирования называется интерполированием функции <img src=\"../../assets/math/6.png\">. Если <img src=\"../../assets/math/9.png\">, то задача вычисления приближенного значения функции в точке называется интерполированием.</p>\r\n\r\n<p>\r\nГеометрически задача интерполирования функции одной переменной означает построение кривой, проходящей через заданные точки <img src=\"../../assets/math/10.png\"> (рисунок 1.2).<br>\r\n<img src=\"../../assets/math/11.PNG\"><br><br>\r\nЗадача становится однозначной, если в качестве <img src=\"../../assets/math/5.png\"> выбрать многочлен степени выше n, такой что:<img src=\"../../assets/math/21.png\"><br>\r\n\r\nМногочлен <img src=\"../../assets/math/12.png\">, отвечающий вышеуказанным условиям, называется интерполяционным многочленом.</p>\r\n<!-- <img src=\"../../assets/math/1.png\"> -->\r\n\r\n<p>\r\n        Знание свойств функции <img src=\"../../assets/math/6.png\"> позволяет осознанно выбирать класс G аппроксимирующих функций. Широко используется класс функций вида (1.2), являющихся линейными комбинациями некоторых базисных функций <img src=\"../../assets/math/13.png\">.\r\n        <br><br>\r\n        <img src=\"../../assets/math/14.png\">(1.2)\r\n        <br><br></p>\r\n<p>\r\n        Приближенную функцию нужно искать в виде многочлена степени m, с коэффициентами <img src=\"../../assets/math/15.png\">, которые находятся зависимости от вида приближения. Функцию <img src=\"../../assets/math/16.png\"> называют обобщенным многочленом по системе функций <img src=\"../../assets/math/13.png\">, а число m ― его степенью. Многочлен называется интерполяционным, если он удовлетворяет условию<br><br>\r\n        \r\n        <img src=\"../../assets/math/17.png\">(1.3)\r\n        <br><br>\r\n        \r\n        Условие (1.3) позволяет найти приближающую функцию единственным образом<br><br>\r\n        \r\n        <img src=\"../../assets/math/18.PNG\">\r\n        (1.4)\r\n        <br><br>\r\n        </p>\r\n\r\n<p>        Система (1.4) есть система линейных алгебраических                     уравнений относительно коэффициентов <img                src=\"../../assets/math/15.png\">.</p>\r\n<p>\r\n        Эта система n линейных уравнений имеет единственное решение, если выполняется условие m=n и определитель квадратной матрицы P <br>\r\n        <img src=\"../../assets/math/19.PNG\">\r\n</p>\r\n\r\n<p>\r\n        Система функций <img src=\"../../assets/math/13.png\"> называется Чебышевской системой функции на <img src=\"../../assets/math/4.png\">, если определитель матрицы отличен от нуля при любом расположении узлов <img src=\"../../assets/math/19_2.png\">, когда среди этих узлов нет совпадающих.\r\n    </p>\r\n<p>        Если имеется такая система функций, то можно утверждать, что существует единственный для данной системы функций интерполяционный многочлен <img src=\"../../assets/math/16.png\">, коэффициенты которого определяются единственным образов из системы (1.4).<br>\r\n        \r\n        На практике чаще всего используются следующие системы:\r\n        <br>\r\n        <img src=\"../../assets/math/20.PNG\">\r\n        </p>\r\n<p>В первом случае интерполирование называется алгебраическим, во втором – тригонометрическим, а в третьем – экспоненциальным.\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".border{\r\n    border: 1px dotted black;\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- <h2 class=\"text-center\">Интерполяция</h2> -->\n <div style=\"padding: 20px;\" class=\"row\">\n  <div class=\"col-sm-3\">\n    <app-nav></app-nav>\n  </div>\n  <div class=\"col-sm-9\">\n      <div class=\"border\">\n        <router-outlet></router-outlet>\n      </div>\n  </div> \n </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lagrang_lagrang_component__ = __webpack_require__("../../../../../src/app/lagrang/lagrang.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__practic_practic_component__ = __webpack_require__("../../../../../src/app/practic/practic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */], pathMatch: 'full' },
    { path: 'lagrang', component: __WEBPACK_IMPORTED_MODULE_8__lagrang_lagrang_component__["a" /* LagrangComponent */], pathMatch: 'full' },
    { path: 'practic', component: __WEBPACK_IMPORTED_MODULE_9__practic_practic_component__["a" /* PracticComponent */], pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__lagrang_lagrang_component__["a" /* LagrangComponent */],
                __WEBPACK_IMPORTED_MODULE_9__practic_practic_component__["a" /* PracticComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/lagrang/lagrang.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lagrang/lagrang.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Метод Лагранжа</h2>"

/***/ }),

/***/ "../../../../../src/app/lagrang/lagrang.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LagrangComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LagrangComponent = /** @class */ (function () {
    function LagrangComponent() {
    }
    LagrangComponent.prototype.ngOnInit = function () {
    };
    LagrangComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lagrang',
            template: __webpack_require__("../../../../../src/app/lagrang/lagrang.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lagrang/lagrang.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LagrangComponent);
    return LagrangComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-fixed-left {\r\n    width: 140px;\r\n    position: fixed;\r\n    border-radius: 0;\r\n    height: 100%;\r\n  }\r\n  \r\n  .navbar-fixed-left .navbar-nav > li {\r\n    float: none;  /* Cancel default li float: left */\r\n    width: 139px;\r\n  }\r\n  \r\n  .navbar-fixed-left + .container {\r\n    padding-left: 160px;\r\n  }\r\n  \r\n  /* On using dropdown menu (To right shift popuped) */\r\n  \r\n  .navbar-fixed-left .navbar-nav > li > .dropdown-menu {\r\n    margin-top: -50px;\r\n    margin-left: 140px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"list-group\">\n    <li class=\"list-group-item\"><a routerLink=\"/about\">Об интерполяции</a></li>\n    <li class=\"list-group-item\"><a routerLink=\"/lagrang\">Лагранжа</a></li>\n    <li class=\"list-group-item\"><a routerLink=\"/lagrang\">Ньютона</a></li>\n    <li class=\"list-group-item\"><a routerLink=\"/lagrang\">Кубических сплайнов</a></li>\n    <li class=\"list-group-item\"><a routerLink=\"/lagrang\">Рационализации</a></li>\n    <hr>\n    <hr>\n    <li class=\"list-group-item\"><a routerLink=\"/practic\">Практика</a></li>\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/practic/practic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".one-point-input{\r\n    width: 70px;\r\n    display: inline-block;\r\n}\r\n.one-point-input p{\r\n    text-align: center;\r\n    padding-left:10px;\r\n}\r\n.one-point-input input{\r\n    width: 100%;\r\n    padding: 5px;\r\n}\r\n.one-point-input.button{\r\n    vertical-align: top;\r\n    /* margin:20px 10px;  */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/practic/practic.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Практическая реализация</h3>\n\n<p>Введите точки для интерполяции</p>\n\n<div class=\"input-points-block\">\n    <div class=\"one-point-input\">\n        <p>X</p>\n        <p>Y</p>\n      </div>\n  <div *ngFor=\"let point of points\" class=\"one-point-input\">\n    <input type=\"number\" [(ngModel)]=\"point.x\">\n    <input type=\"number\" [(ngModel)]=\"point.y\">\n  </div>\n  \n  <div class=\"one-point-input button\">\n      <button (click)=\"addPoint()\" class=\"btn btn-primary\">Добавить</button>\n      <button (click)=\"deletePoint()\" class=\"btn btn-danger\">Удалить</button>\n  </div>\n  <hr>\n  <div>\n\n      <div class=\"form-group row\">\n          <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Найти значения функции в точке:</label>\n          <div class=\"col-sm-9\">\n            <input type=\"number\" [(ngModel)]=\"X\" class=\" col-sm-4 form-control\" id=\"inputVal\" placeholder=\"Значение\">\n          </div>\n      </div>\n\n    <div class=\"form-group row\">\n        <label for=\"inputMethod\" class=\"col-sm-3 col-form-label\">Выберите метод: </label>\n        <div class=\"col-sm-9\">\n          <select (change)=\"mode = $event.target.value\" class=\" col-sm-4 form-control\" id=\"inputMethod\">\n              <option >Лагранжа</option>\n              <option>Ньютона</option>\n              <option>Кубических сплайнов</option>\n              <option>Рациональная</option>\n            </select>\n        </div>\n    </div>\n   \n\n  </div>\n  <hr>\n  <div class=\"text-center\">\n    <button class=\"btn btn-success\" (click)=\"getSolve()\"><h6>РЕШИТЬ</h6></button>\n  </div>\n  <hr>\n\n  <div *ngIf=\"isSolve\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n                  <div style=\"display: block;\">\n                      <canvas baseChart width=\"40\" height=\"40\"\n                        [datasets]=\"labelMFL\"\n                        [labels]=\"lineChartLabels\"\n                        [options]=\"lineChartOptions\"\n                        [colors]=\"lineChartColors\"      \n                        [chartType]=\"lineChartType\"\n                        (chartHover)=\"chartHovered($event)\"\n                        (chartClick)=\"chartClicked($event)\"></canvas>\n                  </div>\n              </div>\n              <div class=\"col-md-4\">\n                  <h4>Информация о решении</h4>\n                  F(X) = {{fX?fX:'none'}}\n              </div>\n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/practic/practic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PracticComponent = /** @class */ (function () {
    function PracticComponent() {
        this.points = [{ x: 1, y: 1 }];
        this.isSolve = false;
        this.mode = 'Лагранжа';
        this.lineChartData = [];
        this.labelMFL = [
            {
                data: this.lineChartData,
                label: 'Функция',
            }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            annotations: [{
                    type: 'line',
                    mode: 'vertical',
                    scaleID: 'x-axis-0',
                    value: 3,
                    borderColor: 'green',
                    borderWidth: 10
                }],
        };
        // array colori grafico
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartType = 'line';
    }
    PracticComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PracticComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PracticComponent.prototype.ngOnInit = function () {
    };
    PracticComponent.prototype.addPoint = function () {
        this.points.push({ x: 1, y: 1 });
        console.log(this.points);
    };
    PracticComponent.prototype.deletePoint = function () {
        this.points.pop();
        console.log(this.points);
    };
    PracticComponent.prototype.getSolve = function () {
        this.fX = null;
        console.log(this.mode);
        for (var i = 0; i < this.points.length - 1; i++) {
            var min = this.points[i], ind = i;
            for (var j = i + 1; j < this.points.length; j++) {
                if (this.points[j].x < min.x) {
                    min = this.points[j];
                    ind = j;
                }
            }
            this.points[ind] = this.points[i];
            this.points[i] = min;
        }
        switch (this.mode) {
            case "Лагранжа":
                this.Lagrange();
                break;
            case "Ньютона":
                this.Newtoon();
                break;
            case "Кубических сплайнов":
                this.CubSpline();
                break;
            case "Рациональная":
                this.Razional();
                break;
        }
        this.buildChart();
    };
    PracticComponent.prototype.Lagrange = function () {
        this.fX = 0;
        for (var i = 0; i < this.points.length; i++) {
            var mult = 1;
            for (var j = 0; j < this.points.length; j++)
                if (j != i)
                    mult *= (this.X - this.points[j].x) / (this.points[i].x - this.points[j].x);
            this.fX += this.points[i].y * mult;
        }
    };
    PracticComponent.prototype.Newtoon = function () {
        this.fX = 0;
        var mult = 1;
        for (var i = 0; i < this.points.length; i++) {
            this.fX += mult * this.razdRazn(this.points.slice(0, i + 1));
            mult *= this.X - this.points[i].x;
        }
    };
    PracticComponent.prototype.razdRazn = function (mas) {
        console.log(mas);
        if (mas.length >= 2) {
            var last = mas.length - 1, first = 0;
            if (mas.length == 2)
                return (mas[last].y - mas[first].y) / (mas[last].x - mas[first].x);
            var v1 = [], v2 = [];
            for (var i = 0; i < mas.length; i++) {
                if (i == 0)
                    v2.push(mas[i]);
                else if (i == last)
                    v1.push(mas[i]);
                else {
                    v1.push(mas[i]);
                    v2.push(mas[i]);
                }
            }
            return (this.razdRazn(v1) - this.razdRazn(v2)) / (mas[last].x - mas[first].x);
        }
        else
            return this.points[0].y;
    };
    PracticComponent.prototype.CubSpline = function () {
        this.fX = 0;
        var n = this.points.length;
        var splines = [];
        for (var i = 0; i < n; ++i)
            splines.push({ a: 0, b: 0, c: 0, d: 0, x: 0 });
        for (var i = 0; i < n; ++i) {
            splines[i].x = this.points[i].x;
            splines[i].a = this.points[i].y;
        }
        splines[0].c = splines[n - 1].c = 0.0;
        var alpha = [], beta = [];
        alpha[0] = beta[0] = 0.0;
        for (var i = 1; i < n - 1; ++i) {
            var hi = this.points[i].x - this.points[i - 1].x;
            var hi1 = this.points[i + 1].x - this.points[i].x;
            var A = hi;
            var C = 2.0 * (hi + hi1);
            var B = hi1;
            var F = 6.0 * ((this.points[i + 1].y - this.points[i].y) / hi1 - (this.points[i].y - this.points[i - 1].y) / hi);
            var z = (A * alpha[i - 1] + C);
            alpha[i] = -B / z;
            beta[i] = (F - A * beta[i - 1]) / z;
        }
        for (var i = n - 2; i > 0; --i) {
            splines[i].c = alpha[i] * splines[i + 1].c + beta[i];
        }
        for (var i = n - 1; i > 0; --i) {
            var hi = this.points[i].x - this.points[i - 1].x;
            splines[i].d = (splines[i].c - splines[i - 1].c) / hi;
            splines[i].b = hi * (2.0 * splines[i].c + splines[i - 1].c) / 6.0 + (this.points[i].y - this.points[i - 1].y) / hi;
        }
        var s;
        if (this.X <= splines[0].x) {
            s = splines[0];
        }
        else if (this.X >= splines[n - 1].x) {
            s = splines[n - 1];
        }
        else {
            var i = 0;
            var j = n - 1;
            while (i + 1 < j) {
                var k = i + (j - i) / 2;
                if (this.X <= splines[k].x) {
                    j = k;
                }
                else {
                    i = k;
                }
            }
            s = splines[j];
        }
        var dx = this.X - s.x;
        this.fX = s.a + (s.b + (s.c / 2.0 + s.d * dx / 6.0) * dx) * dx;
    };
    PracticComponent.prototype.Razional = function () {
        this.fX = 0;
        var mult = 1;
        for (var i = 0; i < this.points.length; i++) {
            this.fX += mult / this.obrRazdRazn(this.points.slice(0, i + 1));
            mult *= this.X - this.points[i].x;
        }
    };
    PracticComponent.prototype.obrRazdRazn = function (mas) {
        console.log(mas);
        if (mas.length >= 2) {
            var last = mas.length - 1, first = 0;
            if (mas.length == 2)
                return (mas[last].x - mas[first].x) / (mas[last].y - mas[first].y);
            var v1 = [], v2 = [];
            for (var i = 0; i < mas.length; i++) {
                if (i == 0)
                    v2.push(mas[i]);
                else if (i == last)
                    v1.push(mas[i]);
                else {
                    v1.push(mas[i]);
                    v2.push(mas[i]);
                }
            }
            return (mas[last].x - mas[first].x) / (this.razdRazn(v1) - this.razdRazn(v2));
        }
        else
            return this.points[0].y;
    };
    PracticComponent.prototype.buildChart = function () {
        var _this = this;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.isSolve = true;
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var p = _a[_i];
            this.lineChartLabels.push(p.x);
            this.lineChartData.push(p.y);
        }
        setTimeout(function () {
            _this.labelMFL = [
                { data: _this.lineChartData,
                    label: 'Функция' }
            ];
        }, 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_charts__["BaseChartDirective"])
    ], PracticComponent.prototype, "chart", void 0);
    PracticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-practic',
            template: __webpack_require__("../../../../../src/app/practic/practic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/practic/practic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PracticComponent);
    return PracticComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map