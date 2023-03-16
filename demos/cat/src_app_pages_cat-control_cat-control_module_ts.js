"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cat-control_cat-control_module_ts"],{

/***/ 7051:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cat-control/cat-control-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatControlPageRoutingModule": () => (/* binding */ CatControlPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cat_control_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-control.page */ 4312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _cat_control_page__WEBPACK_IMPORTED_MODULE_0__.CatControlPage,
    },
];
class CatControlPageRoutingModule {
}
CatControlPageRoutingModule.ɵfac = function CatControlPageRoutingModule_Factory(t) { return new (t || CatControlPageRoutingModule)(); };
CatControlPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CatControlPageRoutingModule });
CatControlPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CatControlPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5152:
/*!*********************************************************!*\
  !*** ./src/app/pages/cat-control/cat-control.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatControlPageModule": () => (/* binding */ CatControlPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cat_control_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-control-routing.module */ 7051);
/* harmony import */ var _cat_control_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat-control.page */ 4312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class CatControlPageModule {
}
CatControlPageModule.ɵfac = function CatControlPageModule_Factory(t) { return new (t || CatControlPageModule)(); };
CatControlPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CatControlPageModule });
CatControlPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _cat_control_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatControlPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CatControlPageModule, { declarations: [_cat_control_page__WEBPACK_IMPORTED_MODULE_1__.CatControlPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _cat_control_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatControlPageRoutingModule] }); })();


/***/ }),

/***/ 4312:
/*!*******************************************************!*\
  !*** ./src/app/pages/cat-control/cat-control.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatControlPage": () => (/* binding */ CatControlPage)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





class CatControlPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.userCanLeave = false;
        this.alertCtrl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.AlertController();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                const qState = this.router.getCurrentNavigation().extras.state;
                this.controlId = qState.ctrlId;
                this.catId = qState.catId;
                this.item = qState.entity;
            }
        });
        console.log(`1st Param: ${this.controlId}; 2nd Param: ${this.catId}; Item: ${this.item.label}`);
    }
}
CatControlPage.ɵfac = function CatControlPage_Factory(t) { return new (t || CatControlPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CatControlPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CatControlPage, selectors: [["app-cat-control"]], decls: 15, vars: 0, consts: [["slot", "start"], ["vertical-text", "true"]], template: function CatControlPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Catalog Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Marked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "The stuff to mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Build control as needed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonContent], styles: ["[vertical-text][_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  \n  -moz-transform: rotate(-90deg);\n  \n  -o-transform: rotate(-90deg);\n  \n  -webkit-transform: rotate(-90deg);\n  \n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=-90 deg);\n  \n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=305)\";\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdC1jb250cm9sLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQTZCLG9EQUFBO0VBQzdCLDhCQUFBO0VBQW1DLFdBQUE7RUFDbkMsNEJBQUE7RUFBaUMsZUFBQTtFQUNqQyxpQ0FBQTtFQUFzQyxvQkFBQTtFQUN0QyxzRUFBQTtFQUEwRSxZQUFBO0VBQzFFLHdFQUFBO0VBQTBFLFFBQUE7QUFPNUUiLCJmaWxlIjoiY2F0LWNvbnRyb2wucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3ZlcnRpY2FsLXRleHRde1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7IC8qIFVuaXZlcnNhbCwgYnV0IGZvciBvdXRkYXRlZCBicm93c2VycyBzZWUgYmVsb3cgOiovXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwLjBkZWcpOyAgLyogRkYzLjUrICovXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MC4wZGVnKTsgIC8qIE9wZXJhIDEwLjUgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7ICAvKiBTYWYzLjErLCBDaHJvbWUgKi9cbiAgZmlsdGVyOiAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249LTkwIGRlZyk7ICAvKiBJRTYsSUU3ICovXG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MzA1KVwiOyAvKiBJRTggKi9cbn1cbiJdfQ== */", "div.content[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0px;\n  padding-right: 45px;\n  width: 100%;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlUGFnZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7QUFBRiIsImZpbGUiOiJzdHlsZVBhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cat-control_cat-control_module_ts.js.map