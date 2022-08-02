"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cat-select-profile_cat-select-profile_module_ts"],{

/***/ 77011:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile/cat-select-profile-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfilePageRoutingModule": () => (/* binding */ CatSelectProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cat_select_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-profile.page */ 99814);

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



const routes = [
    {
        path: '',
        component: _cat_select_profile_page__WEBPACK_IMPORTED_MODULE_0__.CatSelectProfilePage
    }
];
let CatSelectProfilePageRoutingModule = class CatSelectProfilePageRoutingModule {
};
CatSelectProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CatSelectProfilePageRoutingModule);



/***/ }),

/***/ 54349:
/*!***********************************************************************!*\
  !*** ./src/app/pages/cat-select-profile/cat-select-profile.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfilePageModule": () => (/* binding */ CatSelectProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cat_select_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-profile-routing.module */ 77011);
/* harmony import */ var _cat_select_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat-select-profile.page */ 99814);
/* harmony import */ var _all_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../all-components/components.module */ 7339);
/* harmony import */ var _all_components_trees_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../all-components/trees.module */ 76617);

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








let CatSelectProfilePageModule = class CatSelectProfilePageModule {
};
CatSelectProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cat_select_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatSelectProfilePageRoutingModule,
            _all_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _all_components_trees_module__WEBPACK_IMPORTED_MODULE_3__.TreesModule
        ],
        declarations: [_cat_select_profile_page__WEBPACK_IMPORTED_MODULE_1__.CatSelectProfilePage],
    })
], CatSelectProfilePageModule);



/***/ }),

/***/ 99814:
/*!*********************************************************************!*\
  !*** ./src/app/pages/cat-select-profile/cat-select-profile.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfilePage": () => (/* binding */ CatSelectProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cat_select_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-profile.page.html?ngResource */ 23071);
/* harmony import */ var _cat_select_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat-select-profile.page.scss?ngResource */ 54416);
/* harmony import */ var _stylePages_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../stylePages.scss?ngResource */ 90389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../providers/oscal-data/catalog.service */ 91014);
/* harmony import */ var _cat_select_cat_async_cat_select_cat_async_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cat-select-cat-async/cat-select-cat-async.page */ 26183);




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





let CatSelectProfilePage = class CatSelectProfilePage extends _cat_select_cat_async_cat_select_cat_async_page__WEBPACK_IMPORTED_MODULE_4__.CatSelectCatAsyncPage {
    constructor(theCatService, modalController, router) {
        super(theCatService, modalController);
        this.mustGoBack = false;
        this.cat = theCatService;
        this.router = router;
        // this.groups = this.cat.getTreeNodesStat();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(`In mgOnInitProfile`);
            this.getTree();
            console.log(`Tree was ${this.proInfo ? '+++loaded+++' : '!!!NOT LOADED!!!'}`);
        });
    }
    getTree() {
        try {
            this.proInfo = this.cat.getTreeProfileStat();
            if (this.proInfo) {
                // console.log(`length0=${this.proInfo[0].children.length}`);
                this.mustGoBack = !this.proInfo;
            }
            else {
                // Uncomment line below to force a return back and select controls
                // this.router.navigateByUrl('/cat-select-async');
            }
        }
        catch (error) {
            console.log(`Error at the profile tree retrieval ${error}`);
        }
        finally {
        }
    }
    safeToShowTree() {
        if (this.mustGoBack) {
            return !this.mustGoBack;
        }
        if (!this.proInfo) {
            this.getTree();
        }
        return !!this.proInfo;
    }
};
CatSelectProfilePage.ctorParameters = () => [
    { type: _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_3__.CatalogService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.SkipSelf }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
CatSelectProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'oscal-cat-select-profile',
        template: _cat_select_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cat_select_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _stylePages_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_3__.CatalogService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router])
], CatSelectProfilePage);



/***/ }),

/***/ 23071:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile/cat-select-profile.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Selected Controls</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-title>&nbsp;&nbsp;Modify Selected Controls</ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          You can modify selected control to tailor them to your profile.\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <oscal-nav-cat></oscal-nav-cat>\n  <div *ngIf=\"safeToShowTree()\">\n    <oscal-tree-profile [treeNodes]=\"this.proInfo\"></oscal-tree-profile>\n  </div>\n  <div *ngIf=\"!safeToShowTree()\">\n    <ion-item>\n      <ion-label color=\"warning\">\n        No Controls for profile were selected from the catalog.<br />\n        Please, use yellow back button to return and select controls.\n      </ion-label>\n    </ion-item>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cat-select-profile_cat-select-profile_module_ts.js.map