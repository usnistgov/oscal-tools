"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cat-select-profile-groups_cat-select-profile-groups_module_ts"],{

/***/ 27810:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile-groups/cat-select-profile-groups-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfileGroupsPageRoutingModule": () => (/* binding */ CatSelectProfileGroupsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cat_select_profile_groups_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-profile-groups.page */ 65501);

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
        component: _cat_select_profile_groups_page__WEBPACK_IMPORTED_MODULE_0__.CatSelectProfileGroupsPage
    }
];
let CatSelectProfileGroupsPageRoutingModule = class CatSelectProfileGroupsPageRoutingModule {
};
CatSelectProfileGroupsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CatSelectProfileGroupsPageRoutingModule);



/***/ }),

/***/ 56843:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile-groups/cat-select-profile-groups.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfileGroupsPageModule": () => (/* binding */ CatSelectProfileGroupsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cat_select_profile_groups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-profile-groups-routing.module */ 27810);
/* harmony import */ var _cat_select_profile_groups_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat-select-profile-groups.page */ 65501);
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








let CatSelectProfileGroupsPageModule = class CatSelectProfileGroupsPageModule {
};
CatSelectProfileGroupsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cat_select_profile_groups_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatSelectProfileGroupsPageRoutingModule,
            _all_components_trees_module__WEBPACK_IMPORTED_MODULE_3__.TreesModule,
            _all_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_cat_select_profile_groups_page__WEBPACK_IMPORTED_MODULE_1__.CatSelectProfileGroupsPage]
    })
], CatSelectProfileGroupsPageModule);



/***/ }),

/***/ 65501:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile-groups/cat-select-profile-groups.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfileGroupsPage": () => (/* binding */ CatSelectProfileGroupsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cat_select_profile_groups_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-profile-groups.page.html?ngResource */ 74846);
/* harmony import */ var _cat_select_profile_cat_select_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cat-select-profile/cat-select-profile.page.scss?ngResource */ 54416);
/* harmony import */ var _stylePages_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../stylePages.scss?ngResource */ 90389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/oscal-data/catalog.service */ 91014);
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




let CatSelectProfileGroupsPage = class CatSelectProfileGroupsPage extends _cat_select_cat_async_cat_select_cat_async_page__WEBPACK_IMPORTED_MODULE_4__.CatSelectCatAsyncPage {
    constructor(theCatService, modalController) {
        super(theCatService, modalController);
        this.mustGoBack = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(`In mgOnInitProfile`);
            this.getTree();
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
CatSelectProfileGroupsPage.ctorParameters = () => [
    { type: _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_3__.CatalogService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.SkipSelf }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
CatSelectProfileGroupsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'oscal-cat-select-profile-groups',
        template: _cat_select_profile_groups_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cat_select_profile_cat_select_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _stylePages_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_3__.CatalogService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController])
], CatSelectProfileGroupsPage);



/***/ }),

/***/ 74846:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile-groups/cat-select-profile-groups.page.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Regroup Controls</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-title>&nbsp;&nbsp;Add Groups and Regroup Controls</ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Select appropriate grouping for controls.\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <oscal-nav-cat></oscal-nav-cat>\n\n  <ion-fab vertical=\"top\" horizontal=\"left\" slot=\"fixed\">\n    <oscal-nav-cat></oscal-nav-cat>\n  </ion-fab>\n\n  <div class=\"content\">\n    <!--  [controlsList]=\"cat.getCatControlsList()\" [theCat]=\"cat\" -->\n    <!-- \n    <oscal-tree-groups [treeNodes]=\"getTree()\">\n      <tree-root [state]=\"state\" [options]=\"options\" [focused]=\"true\" [nodes]=\"getTree()\"></tree-root>\n    </oscal-tree-groups>\n   -->\n    <div *ngIf=\"!safeToShowTree()\">\n      <ion-item>\n        <ion-label color=\"warning\">\n          No Controls for profile were selected from the catalog.<br />\n          Please, use yellow back button to return and select controls.\n        </ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf=\"safeToShowTree()\"></div>\n    <oscal-tree-groups [treeNodes]=\"this.proInfo\"></oscal-tree-groups>\n\n\n\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cat-select-profile-groups_cat-select-profile-groups_module_ts.js.map