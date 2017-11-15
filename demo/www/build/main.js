webpackJsonp([0],{

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onMove = function () {
        console.log('onMove');
    };
    HomePage.prototype.onMoveDone = function () {
        console.log('onMoveDone');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\keyz\Code\ion-pulldown\demo\src\pages\home\home.html"*/`<ion-pull-down (onMove)="onMove()" (onMoveDone)="onMoveDone()" [mainContent]="content" #pulldown>\n  <ion-content style="height: 100%">\n    <ion-card>\n      <ion-card-header>\n        Header\n      </ion-card-header>\n      <ion-card-content>\n        The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        Explore Nearby\n      </ion-card-header>\n\n      <ion-list>\n        <button ion-item>\n          <ion-icon name="cart" item-left></ion-icon>\n          Shopping\n        </button>\n\n        <button ion-item>\n          <ion-icon name="medical" item-left></ion-icon>\n          Hospital\n        </button>\n\n        <button ion-item>\n          <ion-icon name="cafe" item-left></ion-icon>\n          Cafe\n        </button>\n\n        <button ion-item>\n          <ion-icon name="paw" item-left></ion-icon>\n          Dog Park\n        </button>\n\n        <button ion-item>\n          <ion-icon name="beer" item-left></ion-icon>\n          Pub\n        </button>\n\n        <button ion-item>\n          <ion-icon name="planet" item-left></ion-icon>\n          Space\n        </button>\n\n        <button ion-item>\n          <ion-icon name="cart" item-left></ion-icon>\n          Shopping\n        </button>\n\n        <button ion-item>\n          <ion-icon name="medical" item-left></ion-icon>\n          Hospital\n        </button>\n\n        <button ion-item>\n          <ion-icon name="cafe" item-left></ion-icon>\n          Cafe\n        </button>\n\n        <button ion-item>\n          <ion-icon name="paw" item-left></ion-icon>\n          Dog Park\n        </button>\n\n        <button ion-item>\n          <ion-icon name="beer" item-left></ion-icon>\n          Pub\n        </button>\n\n        <button ion-item>\n          <ion-icon name="planet" item-left></ion-icon>\n          Space\n        </button>\n\n        <button ion-item>\n          <ion-icon name="cart" item-left></ion-icon>\n          Shopping\n        </button>\n\n        <button ion-item>\n          <ion-icon name="medical" item-left></ion-icon>\n          Hospital\n        </button>\n\n        <button ion-item>\n          <ion-icon name="cafe" item-left></ion-icon>\n          Cafe\n        </button>\n\n        <button ion-item>\n          <ion-icon name="paw" item-left></ion-icon>\n          Dog Park\n        </button>\n\n        <button ion-item>\n          <ion-icon name="beer" item-left></ion-icon>\n          Pub\n        </button>\n\n        <button ion-item>\n          <ion-icon name="planet" item-left></ion-icon>\n          Space\n        </button>\n\n      </ion-list>\n    </ion-card>\n    <ion-list inset>\n\n      <ion-item>\n        <ion-label>Username</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-pull-down>\n\n<ion-content padding #content>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Footer</ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"C:\Users\keyz\Code\ion-pulldown\demo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonPulldownHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonPulldownHeaderDirective = (function () {
    function IonPulldownHeaderDirective() {
    }
    IonPulldownHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[ionPulldownHeader]'
        }),
        __metadata("design:paramtypes", [])
    ], IonPulldownHeaderDirective);
    return IonPulldownHeaderDirective;
}());

//# sourceMappingURL=header-wrap.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonPulldownTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonPulldownTabComponent = (function () {
    function IonPulldownTabComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    IonPulldownTabComponent.prototype._onClick = function (evt) {
        this.onClick.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], IonPulldownTabComponent.prototype, "onClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], IonPulldownTabComponent.prototype, "_onClick", null);
    IonPulldownTabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-pulldown-tab',
            template: "\n<ion-icon name=\"reorder\"></ion-icon>\n"
        }),
        __metadata("design:paramtypes", [])
    ], IonPulldownTabComponent);
    return IonPulldownTabComponent;
}());

//# sourceMappingURL=pulldown-tab.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_pulldown_module__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__src_pulldown_module__["a" /* IonPullDownModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\keyz\Code\ion-pulldown\demo\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\keyz\Code\ion-pulldown\demo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonPullDownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pulldown__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_wrap__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pulldown_tab__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var IonPullDownModule = (function () {
    function IonPullDownModule() {
    }
    IonPullDownModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__pulldown__["a" /* IonPullDownComponent */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__header_wrap__["a" /* IonPulldownHeaderDirective */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__pulldown_tab__["a" /* IonPulldownTabComponent */]),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pulldown__["a" /* IonPullDownComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_wrap__["a" /* IonPulldownHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_5__pulldown_tab__["a" /* IonPulldownTabComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__pulldown__["a" /* IonPullDownComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_wrap__["a" /* IonPulldownHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_5__pulldown_tab__["a" /* IonPulldownTabComponent */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ]
        })
    ], IonPullDownModule);
    return IonPullDownModule;
}());

//# sourceMappingURL=pulldown.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonPullDownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_wrap__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pulldown_tab__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IonPullDownComponent = (function () {
    function IonPullDownComponent(platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        this.onMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onMoveDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        if (!window.hasOwnProperty('Hammer')) {
            throw new Error('Hammer.js not found at window.Hammer!');
        }
        else {
            this.hammer = window['Hammer'];
        }
    }
    IonPullDownComponent.prototype.ngOnInit = function () {
        var component = this;
        window.addEventListener("orientationchange", function () {
            component.updateUI();
        });
        component.platform.resume.subscribe(function () {
            component.updateUI();
        });
        var hammerOpts = {};
        if (navigator.userAgent.match(/Android/i)) {
            hammerOpts['inputClass'] = window['Hammer'].TouchInput;
        }
        function handler(event) {
            switch (event.type) {
                case 'panstart':
                    component.renderer.removeStyle(component.headerRef.nativeElement, 'transition');
                    component.renderer.removeStyle(component.headerRef.nativeElement, '-o-transition');
                    component.renderer.removeStyle(component.headerRef.nativeElement, '-ms-transition');
                    component.renderer.removeStyle(component.headerRef.nativeElement, '-moz-transition');
                    component.renderer.removeStyle(component.headerRef.nativeElement, '-webkit-transition');
                    component.renderer.removeStyle(component.content.getNativeElement(), 'display');
                    component.content.resize();
                    component.mainContent.resize();
                    component.onMove.emit();
                    break;
                case 'pan':
                case 'pan-up':
                case 'pan-down':
                    event.preventDefault();
                    var deltaY = event.deltaY;
                    var xlate = component.previousPosY + deltaY - 4;
                    if (xlate < component.minHeight)
                        xlate = component.minHeight;
                    if (xlate > component.maxHeight)
                        xlate = component.maxHeight;
                    component.currentPosY = xlate;
                    component.clearStyle();
                    component.setStyle(xlate, true);
                    component.content.resize();
                    component.mainContent.resize();
                    component.onMove.emit();
                    break;
                case 'panend':
                    component.renderer.removeStyle(component.headerRef.nativeElement, 'transition');
                    component.renderer.setStyle(component.headerRef.nativeElement, 'transition', '300ms ease-in-out');
                    if (component.currentPosY > (component.maxHeight * 0.8)) {
                        component.expand();
                    }
                    else if (component.currentPosY < (component.maxHeight * 0.2)) {
                        component.collapse();
                    }
                    else {
                        component.currentPosY = component.maxHeight / 2;
                        component.clearStyle();
                        component.setStyle(component.currentPosY);
                    }
                    component.previousPosY = component.currentPosY;
                    component.content.resize();
                    component.mainContent.resize();
                    component.onMoveDone.emit();
                    break;
                default:
                    break;
            }
        }
        var hammer = new this.hammer(this.tabRef.nativeElement, hammerOpts);
        hammer.get('pan').set({ threshold: 0 });
        hammer.on('pan panstart panend pan-up pan-down', handler);
        this.updateUI(true);
    };
    IonPullDownComponent.prototype.getHeights = function () {
        this.defaultHeight = this.headerRef.nativeElement.offsetHeight;
        this.footer = document.querySelector('ion-footer');
        this.footerHeight = this.footer.offsetHeight;
        this.toolbar = document.querySelector('ion-navbar');
        if (!this.toolbar) {
            this.toolbar = document.querySelector('ion-toolbar');
        }
        this.toolbarHeight = this.toolbar.offsetHeight;
        this.tabHeight = this.tabRef.nativeElement.offsetHeight;
        this.minHeight = 0;
        this.currentHeight = this.minHeight;
        this.maxHeight = window.innerHeight - this.footerHeight - this.toolbarHeight - this.tabHeight;
        this.mainContentHeight = window.innerHeight - this.toolbarHeight;
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'height', this.mainContentHeight + 'px');
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'transform', 'translate3d(0,' + (this.toolbarHeight) + 'px, 0)');
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'transition', 'none');
    };
    IonPullDownComponent.prototype.computeHeights = function (isInit) {
        if (isInit === void 0) { isInit = false; }
        this.getHeights();
        this.content.resize();
        this.renderer.setStyle(this.headerRef.nativeElement, 'height', this.currentHeight + 'px');
        this.collapse(isInit);
    };
    IonPullDownComponent.prototype.updateUI = function (isInit) {
        var _this = this;
        if (isInit === void 0) { isInit = false; }
        setTimeout(function () {
            _this.computeHeights(isInit);
        }, 10);
        // avoids flickering when changing orientation
        this.renderer.setStyle(this.headerRef.nativeElement, 'transition', 'none');
    };
    IonPullDownComponent.prototype.clearStyle = function (clearTransition) {
        if (clearTransition === void 0) { clearTransition = true; }
        if (clearTransition) {
            this.renderer.removeStyle(this.headerRef.nativeElement, 'transition');
            this.renderer.removeStyle(this.headerRef.nativeElement, '-o-transition');
            this.renderer.removeStyle(this.headerRef.nativeElement, '-ms-transition');
            this.renderer.removeStyle(this.headerRef.nativeElement, '-moz-transition');
            this.renderer.removeStyle(this.headerRef.nativeElement, '-webkit-transition');
        }
        this.renderer.removeStyle(this.headerRef.nativeElement, 'height');
        this.renderer.removeStyle(this.mainContent.getNativeElement(), 'height');
        this.renderer.removeStyle(this.mainContent.getNativeElement(), 'transform');
    };
    IonPullDownComponent.prototype.setStyle = function (height, transition) {
        if (transition === void 0) { transition = false; }
        this.renderer.setStyle(this.headerRef.nativeElement, 'height', height + 'px');
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'height', (this.mainContentHeight - height) + 'px');
        this.renderer.setStyle(this.mainContent.getNativeElement(), 'transform', 'translate3d(0,' + (height + this.footerHeight) + 'px, 0)');
        if (transition) {
            this.renderer.setStyle(this.headerRef.nativeElement, 'transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-o-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-ms-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-moz-transition', 'height 0');
            this.renderer.setStyle(this.headerRef.nativeElement, '-webkit-transition', 'height 0');
        }
    };
    IonPullDownComponent.prototype.collapse = function (isInit) {
        if (isInit === void 0) { isInit = false; }
        this.currentPosY = 0;
        this.previousPosY = this.minHeight;
        this.clearStyle();
        this.setStyle(this.minHeight, true);
        this.renderer.setStyle(this.content.getNativeElement(), 'display', 'none');
        this.content.resize();
        this.mainContent.resize();
        if (!isInit) {
            this.onMove.emit();
        }
        console.log('Collapse!');
    };
    IonPullDownComponent.prototype.expand = function () {
        this.currentPosY = this.maxHeight;
        this.previousPosY = this.maxHeight;
        this.clearStyle();
        this.setStyle(this.maxHeight, true);
        this.content.resize();
        this.mainContent.resize();
        this.onMove.emit();
        console.log('Expand!');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], IonPullDownComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__header_wrap__["a" /* IonPulldownHeaderDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__header_wrap__["a" /* IonPulldownHeaderDirective */])
    ], IonPullDownComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__header_wrap__["a" /* IonPulldownHeaderDirective */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], IonPullDownComponent.prototype, "headerRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__pulldown_tab__["a" /* IonPulldownTabComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__pulldown_tab__["a" /* IonPulldownTabComponent */])
    ], IonPullDownComponent.prototype, "tab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__pulldown_tab__["a" /* IonPulldownTabComponent */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], IonPullDownComponent.prototype, "tabRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], IonPullDownComponent.prototype, "mainContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], IonPullDownComponent.prototype, "onMove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], IonPullDownComponent.prototype, "onMoveDone", void 0);
    IonPullDownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-pull-down',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
            template: "\n  <ion-header ionPulldownHeader #header>\n    <ng-content></ng-content>\n    <ion-pulldown-tab></ion-pulldown-tab>\n  </ion-header>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], IonPullDownComponent);
    return IonPullDownComponent;
}());

//# sourceMappingURL=pulldown.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map