"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cat-select-profile-groups_cat-select-profile-groups_module_ts"],{

/***/ 7810:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile-groups/cat-select-profile-groups-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfileGroupsPageRoutingModule": () => (/* binding */ CatSelectProfileGroupsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cat_select_profile_groups_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-profile-groups.page */ 5501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _cat_select_profile_groups_page__WEBPACK_IMPORTED_MODULE_0__.CatSelectProfileGroupsPage
    }
];
class CatSelectProfileGroupsPageRoutingModule {
}
CatSelectProfileGroupsPageRoutingModule.ɵfac = function CatSelectProfileGroupsPageRoutingModule_Factory(t) { return new (t || CatSelectProfileGroupsPageRoutingModule)(); };
CatSelectProfileGroupsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CatSelectProfileGroupsPageRoutingModule });
CatSelectProfileGroupsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CatSelectProfileGroupsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6843:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile-groups/cat-select-profile-groups.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfileGroupsPageModule": () => (/* binding */ CatSelectProfileGroupsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cat_select_profile_groups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-profile-groups-routing.module */ 7810);
/* harmony import */ var _cat_select_profile_groups_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat-select-profile-groups.page */ 5501);
/* harmony import */ var _all_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../all-components/components.module */ 7339);
/* harmony import */ var _all_components_trees_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../all-components/trees.module */ 6617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class CatSelectProfileGroupsPageModule {
}
CatSelectProfileGroupsPageModule.ɵfac = function CatSelectProfileGroupsPageModule_Factory(t) { return new (t || CatSelectProfileGroupsPageModule)(); };
CatSelectProfileGroupsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CatSelectProfileGroupsPageModule });
CatSelectProfileGroupsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cat_select_profile_groups_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatSelectProfileGroupsPageRoutingModule,
            _all_components_trees_module__WEBPACK_IMPORTED_MODULE_3__.TreesModule,
            _all_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CatSelectProfileGroupsPageModule, { declarations: [_cat_select_profile_groups_page__WEBPACK_IMPORTED_MODULE_1__.CatSelectProfileGroupsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _cat_select_profile_groups_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatSelectProfileGroupsPageRoutingModule,
        _all_components_trees_module__WEBPACK_IMPORTED_MODULE_3__.TreesModule,
        _all_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule] }); })();


/***/ }),

/***/ 5501:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/cat-select-profile-groups/cat-select-profile-groups.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectProfileGroupsPage": () => (/* binding */ CatSelectProfileGroupsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/providers/oscal-files/known-files.service */ 8958);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/oscal-data/catalog.service */ 1014);
/* harmony import */ var _cat_select_cat_async_cat_select_cat_async_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cat-select-cat-async/cat-select-cat-async.page */ 6183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _all_components_nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-components/nav-cat/nav-cat.component */ 3753);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _all_components_tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../all-components/tree-groups/tree-groups.component */ 8462);












function CatSelectProfileGroupsPage_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " No Controls for profile were selected from the catalog.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Please, use yellow back button to return and select controls. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CatSelectProfileGroupsPage_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
class CatSelectProfileGroupsPage extends _cat_select_cat_async_cat_select_cat_async_page__WEBPACK_IMPORTED_MODULE_2__.CatSelectCatAsyncPage {
    constructor(theCatService, knownFiles, modalController) {
        super(theCatService, knownFiles, modalController);
        this.mustGoBack = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
}
CatSelectProfileGroupsPage.ɵfac = function CatSelectProfileGroupsPage_Factory(t) { return new (t || CatSelectProfileGroupsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_1__.CatalogService, 12), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_0__.KnownOscalFilesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController)); };
CatSelectProfileGroupsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CatSelectProfileGroupsPage, selectors: [["oscal-cat-select-profile-groups"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 3, consts: [[1, "ion-padding"], ["vertical", "top", "horizontal", "left", "slot", "fixed"], [1, "content"], [4, "ngIf"], [3, "treeNodes"], ["color", "warning"]], template: function CatSelectProfileGroupsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Regroup Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u00A0\u00A0Add Groups and Regroup Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Select appropriate grouping for controls. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "oscal-nav-cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ion-fab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "oscal-nav-cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CatSelectProfileGroupsPage_div_18_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CatSelectProfileGroupsPage_div_19_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "oscal-tree-groups", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.safeToShowTree());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.safeToShowTree());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("treeNodes", ctx.proInfo);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonText, _all_components_nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_3__.NavCatComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFab, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _all_components_tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_4__.TreeGroupsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXQtc2VsZWN0LXByb2ZpbGUucGFnZS5zY3NzIn0= */", "div.content[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0px;\n  padding-right: 45px;\n  width: 100%;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlUGFnZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7QUFBRiIsImZpbGUiOiJzdHlsZVBhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cat-select-profile-groups_cat-select-profile-groups_module_ts.js.map