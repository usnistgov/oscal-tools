"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cat-begin_cat-begin_module_ts"],{

/***/ 8656:
/*!*************************************************************!*\
  !*** ./src/app/pages/cat-begin/cat-begin-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatBeginPageRoutingModule": () => (/* binding */ CatBeginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cat_begin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-begin.page */ 3978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _cat_begin_page__WEBPACK_IMPORTED_MODULE_0__.CatBeginPage
    }
];
class CatBeginPageRoutingModule {
}
CatBeginPageRoutingModule.ɵfac = function CatBeginPageRoutingModule_Factory(t) { return new (t || CatBeginPageRoutingModule)(); };
CatBeginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CatBeginPageRoutingModule });
CatBeginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CatBeginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9658:
/*!*****************************************************!*\
  !*** ./src/app/pages/cat-begin/cat-begin.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatBeginPageModule": () => (/* binding */ CatBeginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cat_begin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-begin-routing.module */ 8656);
/* harmony import */ var _cat_begin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat-begin.page */ 3978);
/* harmony import */ var _cat_meta_cat_meta_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cat-meta/cat-meta-routing.module */ 8111);
/* harmony import */ var _all_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-components/components.module */ 7339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class CatBeginPageModule {
}
CatBeginPageModule.ɵfac = function CatBeginPageModule_Factory(t) { return new (t || CatBeginPageModule)(); };
CatBeginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CatBeginPageModule });
CatBeginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cat_begin_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatBeginPageRoutingModule,
            _cat_meta_cat_meta_routing_module__WEBPACK_IMPORTED_MODULE_2__.CatMetaPageRoutingModule,
            _all_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CatBeginPageModule, { declarations: [_cat_begin_page__WEBPACK_IMPORTED_MODULE_1__.CatBeginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _cat_begin_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatBeginPageRoutingModule,
        _cat_meta_cat_meta_routing_module__WEBPACK_IMPORTED_MODULE_2__.CatMetaPageRoutingModule,
        _all_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule] }); })();


/***/ }),

/***/ 3978:
/*!***************************************************!*\
  !*** ./src/app/pages/cat-begin/cat-begin.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatBeginPage": () => (/* binding */ CatBeginPage)
/* harmony export */ });
/* harmony import */ var _all_components_author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all-components/author-begin/author-begin.component */ 9391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _all_components_nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all-components/nav-cat/nav-cat.component */ 3753);
/*
 * Portions of this software was developed by employees of the National Institute
 * of Standards and Technology (NIST), an agency of the Federal Government and is
 * being made available as a public service. Pursuant to title 17 United States
 * Code Section 105, works of NIST employees are not subject to copyright
 * protection in the United States. This software may be subject to foreign
 * copyright. Permission in the United States and in foreign countries, to the
 * extent that NIST may hold copyright, to use, copy, modify, create derivative
 * works, and distribute this software and its documentation without fee is hereby
 * granted on a non-exclusive basis, provided that this notice and disclaimer
 * of warranty appears in all copies.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS' WITHOUT ANY WARRANTY OF ANY KIND, EITHER
 * EXPRESSED, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTY
 * THAT THE SOFTWARE WILL CONFORM TO SPECIFICATIONS, ANY IMPLIED WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND FREEDOM FROM
 * INFRINGEMENT, AND ANY WARRANTY THAT THE DOCUMENTATION WILL CONFORM TO THE
 * SOFTWARE, OR ANY WARRANTY THAT THE SOFTWARE WILL BE ERROR FREE.  IN NO EVENT
 * SHALL NIST BE LIABLE FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DIRECT,
 * INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES, ARISING OUT OF, RESULTING FROM,
 * OR IN ANY WAY CONNECTED WITH THIS SOFTWARE, WHETHER OR NOT BASED UPON WARRANTY,
 * CONTRACT, TORT, OR OTHERWISE, WHETHER OR NOT INJURY WAS SUSTAINED BY PERSONS OR
 * PROPERTY OR OTHERWISE, AND WHETHER OR NOT LOSS WAS SUSTAINED FROM, OR AROSE OUT
 * OF THE RESULTS OF, OR USE OF, THE SOFTWARE OR SERVICES PROVIDED HEREUNDER.
 */





class CatBeginPage {
    constructor() { }
    ngOnInit() {
    }
    ionViewWillLeave() {
        // console.log(`<<<!!!>>>ionViewWillLeave=>{ Will Leave } @${Date.now()}`);
        // The call into the handler of the on Leaving event of the component
        this.beginComponent.parentIonViewWillLeave();
    }
    ionViewDidEnter() {
        // console.log(`<<<!!!>>>ionViewDidEnter=>{ Will Leave } @${Date.now()}`);
        // The call into the handler of the on Leaving event of the component
        // this.beginComponent.parentIonViewWillLeave();
    }
    stakeSession() {
    }
}
CatBeginPage.ɵfac = function CatBeginPage_Factory(t) { return new (t || CatBeginPage)(); };
CatBeginPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CatBeginPage, selectors: [["app-cat-begin"]], viewQuery: function CatBeginPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_all_components_author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_0__.AuthorBeginComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.beginComponent = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "content"], ["authorBegin", ""]], template: function CatBeginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Authoring Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "oscal-nav-cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "oscal-author-begin", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _all_components_nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_1__.NavCatComponent, _all_components_author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_0__.AuthorBeginComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXQtYmVnaW4ucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cat-begin_cat-begin_module_ts.js.map