"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_all-components_trees_module_ts-src_app_pages_cat-select-cat-async_cat-s-a9215d"],{

/***/ 2845:
/*!***************************************************************************!*\
  !*** ./src/app/pages/all-components/list-groups/list-groups.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListGroupsComponent": () => (/* binding */ ListGroupsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 1014);
/* harmony import */ var _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/app-state/app-tree/tree-elements */ 4285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);

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







function ListGroupsComponent_div_17_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "New Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListGroupsComponent_div_17_ion_row_1_Template_ion_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.presentRegroup(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Re-Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.parent.label);
} }
function ListGroupsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListGroupsComponent_div_17_ion_row_1_Template, 16, 2, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.included);
} }
/// ['./../tree-cat/tree-cat.component.scss']
class ListGroupsComponent {
    constructor() {
        this.name = 'TreeView';
        this.groups = [{
                id: 'xxx',
                name: 'New Group',
            }
        ];
        this.cat = this.theCat;
        this.alertControl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController();
    }
    ngOnInit() { }
    OnInit() { }
    ngOnChanges(changes) {
    }
    getIncludedControls() {
        this.includedControls = this.includedControls || this.controlsList.filter(x => x.included);
        return this.includedControls;
    }
    /**
     * Presents Add Group Pop-Up
     */
    presentAddGroup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const summaryHtml = `<strong> Creating New Group<br /><br /></strong>`;
            const alert = yield this.alertControl.create({
                header: `Create New Group Entry`,
                subHeader: `or Cancel`,
                // message: summaryHtml,
                cssClass: 'oscal-prompt-class',
                inputs: [
                    {
                        label: 'New Group Name',
                        name: 'groupName',
                        value: '',
                        placeholder: 'Group Name Here',
                        //type: 'textarea',
                        //disabled: true,
                    }, {
                        label: 'Group ID',
                        name: 'groupId',
                        value: '',
                        placeholder: 'Group ID Here',
                    },
                ],
                buttons: [
                    {
                        text: 'Add Group',
                        handler: (data) => {
                            console.log(`Save Information ${data.groupId}, ${data.groupName}`);
                            return true;
                        },
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (data) => {
                            return false;
                        },
                    },
                ]
            });
            yield alert.present();
        });
    }
    presentRegroup(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            const isGroup = item.children ? true : false;
            const nodeType = item.nodeType.toString();
            const prefix = nodeType[0].toUpperCase() + nodeType.substr(1).toLowerCase();
            console.log(`nodeType:${nodeType} => Prefix = ${prefix}`);
            const summaryHtml = isGroup ? `<strong> ${prefix} ${item.key} Contains:<br /><br /> </strong>` +
                `&nbsp;&nbsp;Total of ${item.partsCount} Controls/Subgroups. <br /><br />` +
                `&nbsp;&nbsp;Control Short Names Span from ${item.children[0].key} to  ${item.children[item.partsCount - 1].key}.`
                :
                    `<strong> ${prefix} ${item.key} </strong> ` +
                        ` ${(item.partsCount > 0) ? 'Has ' : 'Has no'} ` +
                        `${(item.partsCount > 0) ? item.partsCount.toString() : ''} Parameters.`;
            const alert = yield this.alertControl.create({
                header: `${prefix} ${item.key} Info`,
                subHeader: `Full Name: ${item.label}:`,
                message: summaryHtml,
                cssClass: 'oscal-prompt-class',
                /*inputs: [
                    {
                        name: 'group',
                        value: prefix + ': ' + item.label + '\n\t\t' + item.label + '\n\t\t' + item.label +
                            '\n\t\t' + item.label + '\n\t\t' + item.label,
                        type: 'textarea',
                        disabled: true,
                    },
                ],*/
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: data => {
                            return false;
                        }
                    },
                    {
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_1__.TreeNodeType.Control) ? 'Details...' : '',
                        handler: data => {
                            if (item.key) {
                                // Follow to Details Page
                            }
                            else {
                                // Same as Close
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
}
ListGroupsComponent.ɵfac = function ListGroupsComponent_Factory(t) { return new (t || ListGroupsComponent)(); };
ListGroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListGroupsComponent, selectors: [["oscal-list-groups"]], inputs: { controlsList: "controlsList", theCat: "theCat" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 1, consts: [[2, "width", "97% !important"], ["color", "tertiary", 3, "click"], ["slot", "end", "icon", "add-circle-outline"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["text-wrap", ""], [3, "click"]], template: function ListGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Current Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "New Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListGroupsComponent_Template_ion_button_click_14_listener() { return ctx.presentAddGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Add New Group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ListGroupsComponent_div_17_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.controlsList);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: -29px;\n}\n\n.oscal-prompt-class[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFFRiIsImZpbGUiOiJsaXN0LWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yOXB4O1xufVxuXG4ub3NjYWwtcHJvbXB0LWNsYXNzIHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjI7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYig4LCA4LCA5OCkgMSUsIHJnYig2LCA2LCAzNikgMTAwJSk7XG4gIC0tbWluLXdpZHRoOiAzMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9249:
/*!****************************************************************!*\
  !*** ./src/app/pages/all-components/tree-cat/all-tree-base.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTreesBaseComponent": () => (/* binding */ AllTreesBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
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


const _c0 = ["oscal-all-trees-base", ""];
class AllTreesBaseComponent {
    constructor() {
        this.canMoveForward = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.saveTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    getNodeToolTip(item) {
        // const openCloseFlag = (!item.open && item.children);
        const openCloseVerb = (!item.open && item.children) ? 'Open ' : 'Close ';
        let returnValue;
        if (item.isCatalog()) {
            returnValue = `${openCloseVerb} Catalog ${item.key}`;
        }
        else if (item.isGroup()) {
            returnValue = `${openCloseVerb} '${item.key}' Group Controls`;
        }
        else if (item.isControl()) {
            returnValue = `${openCloseVerb} ${item.key} Control Enhancements`;
        }
        else {
            returnValue = `${openCloseVerb} Children`;
        }
        // console.log(`getNodeToolTip => Item:${item.label}; nodeType:${item.nodeType}`);
        return returnValue;
    }
    getIconToolTip(item) {
        return '';
    }
}
AllTreesBaseComponent.ɵfac = function AllTreesBaseComponent_Factory(t) { return new (t || AllTreesBaseComponent)(); };
AllTreesBaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllTreesBaseComponent, selectors: [["", "oscal-all-trees-base", ""]], outputs: { canMoveForward: "canMoveForward", saveTab: "saveTab" }, attrs: _c0, decls: 2, vars: 0, template: function AllTreesBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " tree - ancestor - base works! It is an un- inheritable markup file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".oscal-prompt-class[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark[_ngcontent-%COMP%]   .treePopUpInfo[_ngcontent-%COMP%] {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: -27px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .node_style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 50px;\n  margin: 1px;\n  \n  \n  width: 100%;\n  margin-left: -40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 8px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 11px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::before {\n  display: none;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #000;\n  \n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#tallTextArea[_ngcontent-%COMP%] {\n  height: 144pt;\n}\n\nion-item[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item[_ngcontent-%COMP%]   ion-radio.checkbox[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n\nbody.form-busy[_ngcontent-%COMP%] {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLDJCQUFBO0VBQ2Isa0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7Ozs7RUFJRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBOzs7Ozs7RUFNRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVJ0Qjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0UsNkJBQUE7QUFUSjs7QUFhQTtFQUNFLGdCQUFBO0FBVkYiLCJmaWxlIjoidHJlZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vc2NhbC1wcm9tcHQtY2xhc3Mge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDgsIDgsIDk4KSAxJSwgcmdiKDYsIDYsIDM2KSAxMDAlKTtcbiAgLS1taW4td2lkdGg6IDMwJTtcbn1cblxuLnRyZWVQb3BVcEluZm8ge1xuICAvL2JvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICAtLWJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWluLXdpZHRoOiA1MCU7XG59XG4vLyBEb2VzIG5vdCB3b3JrIGF0IHRoZSBtb21lbnRcbmJvZHkuZGFyayB7XG4gIC50cmVlUG9wVXBJbmZvIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogNTAlO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGluZyBmb3IgdGhlIGN1c3RvbSB0cmVlIHJlbmRlcmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4OyBcbiAgLy8gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gbWFrZSBhIGxlZnQtc2lkZSBvZiB0aGUgdHJlZSBub2RlcyB0byBtb3ZlIFxuICAvLyB2YWx1ZSAwIG1ha2VzIGl0IHRvbyBpbmRlbnRlZFxuICAvLyB2YWx1ZXMgYmVsb3cgKGFib3ZlIGluIGFic29sdXRlKSAhISEgLTMxICEhISBzaGlmdCBjb25uZWN0b3JzIHRvbyBmYXIgdG8gdGhlIGxlZnRcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8vIEtpbGwgbGlzdCBtYXJrZXJzXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogQ2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC8vIE1hcmdpbnMgYXJlIHNwYWNpbmcgZm9yIHRoZSBkcm9wLWRvd24gaXRlbXNcbiAgbWFyZ2luLXRvcDogNXB4OyAgICAvLyBEZWZpbmVzIHRoZSBnYXAgc2l6ZSBiZXR3ZWVuIHRyZWUtbm9kZSBlbGVtZW50cyB2ZXJ0aWNhbGx5XG4gIG1hcmdpbi1ib3R0b206IDVweDsgLy8gRGVmaW5lcyB0aGUgZ2FwIHNpemUgYmV0d2VlbiB0cmVlLW5vZGUgZWxlbWVudHMgdmVydGljYWxseVxuICAvLyBGb3IgRVZFTi1SSUdIVCBzaWRlcyAtIG1ha2UgaXQgMHB4XG4gIG1hcmdpbi1yaWdodDogM3B4OyAvLyAhISFEZWZpbmVzIGhvdyBtdWNoIGluc3RlcCBpcyBmb3IgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHRyZWVcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7IC8vIE1ha2VzIHRoZSBnYXAgYmVmb3JlIHRoZSBzdWJncm91cHMgbW9yZSBvYnZpb3VzXG59XG4udHJlZSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDsgLy8gTWFrZXMgdGhlIGdhcCBhZnRlciB0aGUgc3ViZ3JvdXBzIG1vcmUgb2J2aW91c1xufVxuXG4udHJlZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtNTBweDsgLy8gbGluZS11cCBvZiB0aGVcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHJlZSBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTUwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBNYWtlIHN1cmUgbm8gZW1wdHkgZ3VpZGUgc3RpY2tzIG91dFxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLy8gUm91bmQgdXAgdGhlIGxhc3QgdmlzdWFsIGd1aWRlXG4udHJlZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cbi8vIEhpZGUgdGhlIHZpc3VhbCBndWlkZSBiZWZvcmUgdGhlIGZpcnN0IGJhci1pdGVtXG51bC50cmVlID4gbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG59XG5cbi50cmVlIGxpIGEge1xuICBib3JkZXI6IDFweCAjNjY2NjY2IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1IDAgMCA1O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpIGEsXG4udHJlZSBsaSBhOmZvY3VzLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YmVmb3JlIC50cmVlIGxpIGE6aG92ZXIgKyB1bDo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgdWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgLypjb25uZWN0b3IgY29sb3Igb24gaG92ZXIqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhbGxUZXh0QXJlYSB7XG4gIGhlaWdodDogMTQ0cHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaW9uLXJhZGlvLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5LmZvcm0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9134:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-cat/recursive-tree-cat.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecursiveTreeCatComponent": () => (/* binding */ RecursiveTreeCatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 1014);
/* harmony import */ var _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/app-state/app-tree/tree-elements */ 4285);
/* harmony import */ var _all_tree_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-tree-base */ 9249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);













const _c0 = ["recursive-tree-cat", ""];
function RecursiveTreeCatComponent_li_0_ion_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 14);
} }
function RecursiveTreeCatComponent_li_0_ion_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 15);
} }
function RecursiveTreeCatComponent_li_0_ion_badge_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.partsCount, " Groups ");
} }
function RecursiveTreeCatComponent_li_0_ion_badge_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.partsCount, " Controls ");
} }
function RecursiveTreeCatComponent_li_0_ion_badge_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-badge", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r1.partsCount, " Params ");
} }
function RecursiveTreeCatComponent_li_0_ion_item_13_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_map_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("color", pro_map_r14.value.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", pro_map_r14.value.label, " ");
} }
function RecursiveTreeCatComponent_li_0_ion_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RecursiveTreeCatComponent_li_0_ion_item_13_ion_item_1_Template, 3, 2, "ion-item", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, item_r1.profileMap));
} }
function RecursiveTreeCatComponent_li_0_ul_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ul", 18);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("hidden", !item_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("children", item_r1.children)("level", ctx_r9.level != undefined ? ctx_r9.level + 1 : 0);
} }
function RecursiveTreeCatComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecursiveTreeCatComponent_li_0_Template_ion_item_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const item_r1 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.closeOpen(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RecursiveTreeCatComponent_li_0_ion_icon_5_Template, 1, 0, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RecursiveTreeCatComponent_li_0_ion_icon_6_Template, 1, 0, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RecursiveTreeCatComponent_li_0_ion_badge_10_Template, 2, 1, "ion-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RecursiveTreeCatComponent_li_0_ion_badge_11_Template, 2, 1, "ion-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, RecursiveTreeCatComponent_li_0_ion_badge_12_Template, 2, 1, "ion-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, RecursiveTreeCatComponent_li_0_ion_item_13_Template, 3, 3, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "In");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecursiveTreeCatComponent_li_0_Template_ion_checkbox_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const item_r1 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.onJoinNodeCheck(item_r1); })("ngModelChange", function RecursiveTreeCatComponent_li_0_Template_ion_checkbox_ngModelChange_17_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const item_r1 = restoredCtx.$implicit; return item_r1.included = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecursiveTreeCatComponent_li_0_Template_ion_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const item_r1 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.presentPrompt(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, RecursiveTreeCatComponent_li_0_ul_21_Template, 1, 4, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", item_r1.toolTip || item_r1.getNodeToolTip);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r1.open && item_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.open && item_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.children && item_r1.partsCount > 0 && item_r1.isCatalog());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.children && item_r1.partsCount > 0 && item_r1.isGroup());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.partsCount > 0 && item_r1.isControl());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.hasProfileColors());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", item_r1.hasSomeIncluded() ? "success" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r1.included);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r1.children);
} }
class RecursiveTreeCatComponent extends _all_tree_base__WEBPACK_IMPORTED_MODULE_2__.AllTreesBaseComponent {
    constructor(router, cat) {
        super();
        this.router = router;
        this.cat = cat;
        // cat: CatalogService;
        this.self = this;
        this.alertControl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController();
    }
    onJoinNodeCheck(item) {
        if (!this.cat.catSelectionMustReset) {
            this.cat.catSelectionMustReset = true;
            console.log(`Reset catSelectionMustReset to: ${this.cat.catSelectionMustReset}`);
        }
        item.nodeOnCheck();
    }
    closeOpen(item) {
        item.open = !item.open;
    }
    getChildren() {
        // return Observable.of(this.children);
        return null;
    }
    // flipItemTo(item: TreeItemEntry, changingTo?: boolean) {
    //     // document.body.classList.add('form-busy');
    //     console.log(`In Flip Item ==> Item ${item.key}; changeTo: ${changingTo}; Item Is ${item.included}`);
    //     item.included = changingTo;
    //     if (item.children) {
    //         this.childrenSetTo(item, changingTo);
    //     }
    //     if (item.parent) {
    //         this.parentFlip(item.parent);
    //     }
    //     // document.body.classList.remove('form-busy');
    // }
    childrenSetTo(item, toInclude) {
        item.children.forEach(child => {
            console.log(`Flip Children ==> Item ${item.key}; In: ${toInclude};`);
            child.included = toInclude;
            if (child.children) {
                this.childrenSetTo(child, toInclude);
            }
        });
        item.open = true;
    }
    navigateToControl(item) {
        const urlParams = { state: { ctrlId: item.key, catId: undefined, entity: item } };
        console.log(`Navigating to cat-control with ${item}`);
        console.log(`Item is packed as : ${urlParams}`);
        this.router.navigate(['cat-control'], urlParams);
    }
    /**
     * Function generates the pop-up
     * @param item : the Tree-Item-Entry to generate the popup for
     */
    presentPrompt(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            const isGroup = item.children ? true : false;
            const nodeType = item.nodeType.toString();
            const prefix = nodeType[0].toUpperCase() + nodeType.substr(1).toLowerCase();
            console.log(`nodeType:${nodeType} => Prefix = ${prefix}`);
            const summaryHtml = isGroup ? `<strong> ${prefix} ${item.key} Contains:<br /><br /> </strong>` +
                `&nbsp;&nbsp;Total of ${item.partsCount} Controls/Subgroups. <br /><br />` +
                `&nbsp;&nbsp;Control Short Names Span from ${item.children[0].key} to  ${item.children[item.partsCount - 1].key}.`
                :
                    `<strong> ${prefix} ${item.key} </strong> ` +
                        ` ${(item.partsCount > 0) ? 'Has ' : 'Has no'} ` +
                        `${(item.partsCount > 0) ? item.partsCount.toString() : ''} Parameters.`;
            const alert = yield this.alertControl.create({
                header: `${prefix} ${item.key} Info`,
                subHeader: `Full Name: ${item.label}:`,
                message: summaryHtml,
                cssClass: 'oscal-prompt-class',
                /*inputs: [
                    {
                        name: 'group',
                        value: prefix + ': ' + item.label + '\n\t\t' + item.label + '\n\t\t' + item.label +
                            '\n\t\t' + item.label + '\n\t\t' + item.label,
                        type: 'textarea',
                        disabled: true,
                    },
                ],*/
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: data => {
                            return false;
                        }
                    },
                    {
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_1__.TreeNodeType.Control) ? 'Details...' : '',
                        handler: data => {
                            if (item.key) {
                                // Follow to Details Page
                            }
                            else {
                                // Same as Close
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
}
RecursiveTreeCatComponent.ɵfac = function RecursiveTreeCatComponent_Factory(t) { return new (t || RecursiveTreeCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__.CatalogService)); };
RecursiveTreeCatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RecursiveTreeCatComponent, selectors: [["", "recursive-tree-cat", ""]], inputs: { level: "level", label: "label", children: "children", parent: "parent", theCat: "theCat" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["node", ""], [1, "node_style", 3, "title"], [1, "ion-no-padding", 3, "click"], ["slot", "start", "icon", "add", "class", "ion-no-padding", 4, "ngIf"], ["slot", "start", "icon", "arrow-down", "class", " ion-no-padding", 4, "ngIf"], ["color", "medium", 4, "ngIf"], ["color", "primary", 4, "ngIf"], [4, "ngIf"], [3, "color"], ["color", "success", 3, "ngModel", "click", "ngModelChange"], [3, "click"], ["slot", "end", "icon", "chatbox-outline"], ["recursive-tree-cat", "", 3, "children", "hidden", "level", 4, "ngIf"], ["slot", "start", "icon", "add", 1, "ion-no-padding"], ["slot", "start", "icon", "arrow-down", 1, "ion-no-padding"], ["color", "medium"], ["color", "primary"], ["recursive-tree-cat", "", 3, "children", "level"]], template: function RecursiveTreeCatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RecursiveTreeCatComponent_li_0_Template, 22, 11, "li", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.children);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, RecursiveTreeCatComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe], styles: [".oscal-prompt-class[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark[_ngcontent-%COMP%]   .treePopUpInfo[_ngcontent-%COMP%] {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: -27px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .node_style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 50px;\n  margin: 1px;\n  \n  \n  width: 100%;\n  margin-left: -40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 8px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 11px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::before {\n  display: none;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #000;\n  \n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#tallTextArea[_ngcontent-%COMP%] {\n  height: 144pt;\n}\n\nion-item[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item[_ngcontent-%COMP%]   ion-radio.checkbox[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n\nbody.form-busy[_ngcontent-%COMP%] {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLDJCQUFBO0VBQ2Isa0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7Ozs7RUFJRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBOzs7Ozs7RUFNRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVJ0Qjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0UsNkJBQUE7QUFUSjs7QUFhQTtFQUNFLGdCQUFBO0FBVkYiLCJmaWxlIjoidHJlZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vc2NhbC1wcm9tcHQtY2xhc3Mge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDgsIDgsIDk4KSAxJSwgcmdiKDYsIDYsIDM2KSAxMDAlKTtcbiAgLS1taW4td2lkdGg6IDMwJTtcbn1cblxuLnRyZWVQb3BVcEluZm8ge1xuICAvL2JvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICAtLWJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWluLXdpZHRoOiA1MCU7XG59XG4vLyBEb2VzIG5vdCB3b3JrIGF0IHRoZSBtb21lbnRcbmJvZHkuZGFyayB7XG4gIC50cmVlUG9wVXBJbmZvIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogNTAlO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGluZyBmb3IgdGhlIGN1c3RvbSB0cmVlIHJlbmRlcmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4OyBcbiAgLy8gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gbWFrZSBhIGxlZnQtc2lkZSBvZiB0aGUgdHJlZSBub2RlcyB0byBtb3ZlIFxuICAvLyB2YWx1ZSAwIG1ha2VzIGl0IHRvbyBpbmRlbnRlZFxuICAvLyB2YWx1ZXMgYmVsb3cgKGFib3ZlIGluIGFic29sdXRlKSAhISEgLTMxICEhISBzaGlmdCBjb25uZWN0b3JzIHRvbyBmYXIgdG8gdGhlIGxlZnRcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8vIEtpbGwgbGlzdCBtYXJrZXJzXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogQ2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC8vIE1hcmdpbnMgYXJlIHNwYWNpbmcgZm9yIHRoZSBkcm9wLWRvd24gaXRlbXNcbiAgbWFyZ2luLXRvcDogNXB4OyAgICAvLyBEZWZpbmVzIHRoZSBnYXAgc2l6ZSBiZXR3ZWVuIHRyZWUtbm9kZSBlbGVtZW50cyB2ZXJ0aWNhbGx5XG4gIG1hcmdpbi1ib3R0b206IDVweDsgLy8gRGVmaW5lcyB0aGUgZ2FwIHNpemUgYmV0d2VlbiB0cmVlLW5vZGUgZWxlbWVudHMgdmVydGljYWxseVxuICAvLyBGb3IgRVZFTi1SSUdIVCBzaWRlcyAtIG1ha2UgaXQgMHB4XG4gIG1hcmdpbi1yaWdodDogM3B4OyAvLyAhISFEZWZpbmVzIGhvdyBtdWNoIGluc3RlcCBpcyBmb3IgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHRyZWVcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7IC8vIE1ha2VzIHRoZSBnYXAgYmVmb3JlIHRoZSBzdWJncm91cHMgbW9yZSBvYnZpb3VzXG59XG4udHJlZSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDsgLy8gTWFrZXMgdGhlIGdhcCBhZnRlciB0aGUgc3ViZ3JvdXBzIG1vcmUgb2J2aW91c1xufVxuXG4udHJlZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtNTBweDsgLy8gbGluZS11cCBvZiB0aGVcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHJlZSBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTUwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBNYWtlIHN1cmUgbm8gZW1wdHkgZ3VpZGUgc3RpY2tzIG91dFxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLy8gUm91bmQgdXAgdGhlIGxhc3QgdmlzdWFsIGd1aWRlXG4udHJlZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cbi8vIEhpZGUgdGhlIHZpc3VhbCBndWlkZSBiZWZvcmUgdGhlIGZpcnN0IGJhci1pdGVtXG51bC50cmVlID4gbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG59XG5cbi50cmVlIGxpIGEge1xuICBib3JkZXI6IDFweCAjNjY2NjY2IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1IDAgMCA1O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpIGEsXG4udHJlZSBsaSBhOmZvY3VzLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YmVmb3JlIC50cmVlIGxpIGE6aG92ZXIgKyB1bDo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgdWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgLypjb25uZWN0b3IgY29sb3Igb24gaG92ZXIqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhbGxUZXh0QXJlYSB7XG4gIGhlaWdodDogMTQ0cHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaW9uLXJhZGlvLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5LmZvcm0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9301:
/*!*********************************************************************!*\
  !*** ./src/app/pages/all-components/tree-cat/tree-cat.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeCatComponent": () => (/* binding */ TreeCatComponent)
/* harmony export */ });
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 1014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _recursive_tree_cat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recursive-tree-cat.component */ 9134);
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




class TreeCatComponent {
    // constructor(private splashScreen: SplashScreen) {
    constructor() {
        // this.cat = new CatalogService()
        // this.groupsInfo = this.cat.getGroups();
        // console.log(`Groups = ${this.groupsInfo}`);
        // this.groups = this.cat.getTreeNodesStat();
        // console.log(`Profile Mode [Root] = ${this.profileMode}`);
        // this.splashScreen.show(); //<-Requires Cordova & Native Executio
    }
    onInit() { }
    ngOnInit() { }
    ngOnChanges(changes) {
    }
}
TreeCatComponent.ɵfac = function TreeCatComponent_Factory(t) { return new (t || TreeCatComponent)(); };
TreeCatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TreeCatComponent, selectors: [["oscal-tree-cat"]], inputs: { treeNodes: "treeNodes", theCat: "theCat" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["recursive-tree-cat", "", 1, "tree", 3, "children"]], template: function TreeCatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("children", ctx.treeNodes);
    } }, directives: [_recursive_tree_cat_component__WEBPACK_IMPORTED_MODULE_1__.RecursiveTreeCatComponent], styles: [".oscal-prompt-class {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark .treePopUpInfo {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np {\n  font-family: Lato;\n}\n\n.tree ul {\n  margin-left: -27px;\n}\n\n.tree li .node_style {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 50px;\n  margin: 1px;\n  /* 3px makes guides flush */\n  /* width: Can either make staircase or inverse it*/\n  width: 100%;\n  margin-left: -40px;\n}\n\n.tree li {\n  list-style-type: none;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.tree li:first-child {\n  margin-top: 8px;\n}\n\n.tree li:last-child {\n  margin-bottom: 11px;\n}\n\n.tree li::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree li::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree li:last-child::after {\n  display: none;\n}\n\n.tree li:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree > li:first-child::before {\n  display: none;\n}\n\nul.tree > li:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree li a {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree li a:hover,\n.tree li a:hover + ul li a,\n.tree li a:focus,\n.tree li a:focus + ul li a {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree li a:hover + ul li::after,\n.tree li a:focus + ul li::after,\n.tree li a:hover + ul li::before,\n.tree li a:focus + ul li::before .tree li a:hover + ul::before,\n.tree li a:focus + ul::before .tree li a:hover + ul ul::before,\n.tree li a:focus + ul ul::before {\n  border-color: #000;\n  /*connector color on hover*/\n}\n\n.hidden {\n  display: none;\n}\n\n#tallTextArea {\n  height: 144pt;\n}\n\nion-item .input-wrapper {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item ion-radio.checkbox {\n  margin-right: auto !important;\n}\n\nbody.form-busy {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLDJCQUFBO0VBQ2Isa0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7Ozs7RUFJRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBOzs7Ozs7RUFNRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVJ0Qjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0UsNkJBQUE7QUFUSjs7QUFhQTtFQUNFLGdCQUFBO0FBVkYiLCJmaWxlIjoidHJlZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vc2NhbC1wcm9tcHQtY2xhc3Mge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDgsIDgsIDk4KSAxJSwgcmdiKDYsIDYsIDM2KSAxMDAlKTtcbiAgLS1taW4td2lkdGg6IDMwJTtcbn1cblxuLnRyZWVQb3BVcEluZm8ge1xuICAvL2JvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICAtLWJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWluLXdpZHRoOiA1MCU7XG59XG4vLyBEb2VzIG5vdCB3b3JrIGF0IHRoZSBtb21lbnRcbmJvZHkuZGFyayB7XG4gIC50cmVlUG9wVXBJbmZvIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogNTAlO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGluZyBmb3IgdGhlIGN1c3RvbSB0cmVlIHJlbmRlcmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4OyBcbiAgLy8gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gbWFrZSBhIGxlZnQtc2lkZSBvZiB0aGUgdHJlZSBub2RlcyB0byBtb3ZlIFxuICAvLyB2YWx1ZSAwIG1ha2VzIGl0IHRvbyBpbmRlbnRlZFxuICAvLyB2YWx1ZXMgYmVsb3cgKGFib3ZlIGluIGFic29sdXRlKSAhISEgLTMxICEhISBzaGlmdCBjb25uZWN0b3JzIHRvbyBmYXIgdG8gdGhlIGxlZnRcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8vIEtpbGwgbGlzdCBtYXJrZXJzXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogQ2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC8vIE1hcmdpbnMgYXJlIHNwYWNpbmcgZm9yIHRoZSBkcm9wLWRvd24gaXRlbXNcbiAgbWFyZ2luLXRvcDogNXB4OyAgICAvLyBEZWZpbmVzIHRoZSBnYXAgc2l6ZSBiZXR3ZWVuIHRyZWUtbm9kZSBlbGVtZW50cyB2ZXJ0aWNhbGx5XG4gIG1hcmdpbi1ib3R0b206IDVweDsgLy8gRGVmaW5lcyB0aGUgZ2FwIHNpemUgYmV0d2VlbiB0cmVlLW5vZGUgZWxlbWVudHMgdmVydGljYWxseVxuICAvLyBGb3IgRVZFTi1SSUdIVCBzaWRlcyAtIG1ha2UgaXQgMHB4XG4gIG1hcmdpbi1yaWdodDogM3B4OyAvLyAhISFEZWZpbmVzIGhvdyBtdWNoIGluc3RlcCBpcyBmb3IgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHRyZWVcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7IC8vIE1ha2VzIHRoZSBnYXAgYmVmb3JlIHRoZSBzdWJncm91cHMgbW9yZSBvYnZpb3VzXG59XG4udHJlZSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDsgLy8gTWFrZXMgdGhlIGdhcCBhZnRlciB0aGUgc3ViZ3JvdXBzIG1vcmUgb2J2aW91c1xufVxuXG4udHJlZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtNTBweDsgLy8gbGluZS11cCBvZiB0aGVcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHJlZSBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTUwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBNYWtlIHN1cmUgbm8gZW1wdHkgZ3VpZGUgc3RpY2tzIG91dFxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLy8gUm91bmQgdXAgdGhlIGxhc3QgdmlzdWFsIGd1aWRlXG4udHJlZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cbi8vIEhpZGUgdGhlIHZpc3VhbCBndWlkZSBiZWZvcmUgdGhlIGZpcnN0IGJhci1pdGVtXG51bC50cmVlID4gbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG59XG5cbi50cmVlIGxpIGEge1xuICBib3JkZXI6IDFweCAjNjY2NjY2IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1IDAgMCA1O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpIGEsXG4udHJlZSBsaSBhOmZvY3VzLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YmVmb3JlIC50cmVlIGxpIGE6aG92ZXIgKyB1bDo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgdWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgLypjb25uZWN0b3IgY29sb3Igb24gaG92ZXIqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhbGxUZXh0QXJlYSB7XG4gIGhlaWdodDogMTQ0cHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaW9uLXJhZGlvLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5LmZvcm0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 9378:
/*!********************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-groups/recursive-groups.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecursiveGroupsComponent": () => (/* binding */ RecursiveGroupsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/app-state/app-tree/tree-elements */ 4285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tree_profile_recursive_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree-profile/recursive-profile.component */ 7330);

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










const _c0 = ["node"];
const _c1 = ["recursive-tree-groups", ""];
function RecursiveGroupsComponent_li_0_ion_item_1_ion_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecursiveGroupsComponent_li_0_ion_item_1_ion_icon_1_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.closeOpen(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecursiveGroupsComponent_li_0_ion_item_1_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecursiveGroupsComponent_li_0_ion_item_1_ion_icon_2_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.closeOpen(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecursiveGroupsComponent_li_0_ion_item_1_ion_badge_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-badge", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.partsCount, " Groups ");
} }
function RecursiveGroupsComponent_li_0_ion_item_1_ion_badge_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-badge", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.partsCount, " Controls ");
} }
function RecursiveGroupsComponent_li_0_ion_item_1_ion_badge_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-badge", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r1.partsCount, " Params ");
} }
function RecursiveGroupsComponent_li_0_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RecursiveGroupsComponent_li_0_ion_item_1_ion_icon_1_Template, 1, 0, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RecursiveGroupsComponent_li_0_ion_item_1_ion_icon_2_Template, 1, 0, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RecursiveGroupsComponent_li_0_ion_item_1_ion_badge_8_Template, 2, 1, "ion-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RecursiveGroupsComponent_li_0_ion_item_1_ion_badge_9_Template, 2, 1, "ion-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RecursiveGroupsComponent_li_0_ion_item_1_ion_badge_10_Template, 2, 1, "ion-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-reorder", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-reorder", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecursiveGroupsComponent_li_0_ion_item_1_Template_ion_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.presentPrompt(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Modify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-reorder", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r1.open && item_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.open && item_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.children && item_r1.partsCount > 0 && item_r1.isCatalog());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.children && item_r1.partsCount > 0 && item_r1.isGroup());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.partsCount > 0 && item_r1.isControl());
} }
function RecursiveGroupsComponent_li_0_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ul", 15);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", !item_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("children", item_r1.children)("parent", item_r1.parent)("level", ctx_r3.level != undefined ? ctx_r3.level + 1 : 0);
} }
function RecursiveGroupsComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RecursiveGroupsComponent_li_0_ion_item_1_Template, 17, 6, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RecursiveGroupsComponent_li_0_ul_2_Template, 1, 5, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.hasSomeIncluded());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.hasSomeIncluded());
} }
class RecursiveGroupsComponent {
    // gestureCtl: any;
    // private navigateParams = new NavParams();
    constructor(router, gestureCtl) {
        this.router = router;
        this.gestureCtl = gestureCtl;
        this.self = this;
        this.alertControl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController();
        this.gesturesArray = [];
        //this.gestureCtl = gestureCtl;
    }
    /**
     * View Children are hooked-up here to the actual page controls
     * @memberof RecursiveGroupsComponent
     */
    ngAfterViewInit() {
        // Always start ngAfterInit with no accidentally left-in gestures.
        this.gesturesArray.map(gesture => gesture.destroy());
        this.gesturesArray = new Array();
        // Look at the nodes in Console
        const x = this.dragNodes.toArray();
        console.log(x);
    }
    hookUpGestureControl(oneElement) {
        const drag = this.gestureCtl.create({
            el: oneElement.nativeElement,
            threshold: 1,
            gestureName: 'drag',
            onStart: ev => {
                oneElement.nativeElement.style.backgroundColor = 'pink';
                oneElement.nativeElement.style.opacity = '0.86';
                oneElement.nativeElement.style.fontWeight = 'bold';
                // this.contentScrollActive = false;
                // this.ChangeDetectorRef.detectChanges();
            },
            onMove: ev => {
                oneElement.nativeElement.style.transform = `translate(${ev.deltaX}ps, ${ev.deltaY}px)`;
                oneElement.nativeElement.style.zIndex = 10;
                this.checkDropzoneHover(ev.currentX, ev.currentY);
            },
            onEnd: ev => { },
        });
        drag.enable();
        this.gesturesArray.push(drag);
    }
    checkDropzoneHover(x, y) {
        // For every drop-zone
        const i = 1;
        const drop = this.dropNodes[i].nativeElement.getBoundingRect();
    }
    isInDropZone(x, y, zone) {
        return ((x >= zone.left && x <= zone.right)
            && (y >= zone.top || y <= zone.bottom));
    }
    closeOpen(item) {
        item.open = !item.open;
    }
    navigateToControl(item) {
        const urlParams = { state: { ctrlId: item.key, catId: undefined, entity: item } };
        console.log(`Navigating to cat-control with ${item}`);
        console.log(`Item is packed as : ${urlParams}`);
        this.router.navigate(['cat-control'], urlParams);
    }
    presentPrompt(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            const isGroup = item.children ? true : false;
            const nodeType = item.nodeType.toString();
            const prefix = nodeType[0].toUpperCase() + nodeType.substr(1).toLowerCase();
            console.log(`nodeType:${nodeType} => Prefix = ${prefix}`);
            const summaryHtml = isGroup ? `<strong> ${prefix} ${item.key} Contains:<br /><br /> </strong>` +
                `&nbsp;&nbsp;Total of ${item.partsCount} Controls/Subgroups. <br /><br />` +
                `&nbsp;&nbsp;Control Short Names Span from ${item.children[0].key} to  ${item.children[item.partsCount - 1].key}.`
                :
                    `<strong> ${prefix} ${item.key} </strong> ` +
                        ` ${(item.partsCount > 0) ? 'Has ' : 'Has no'} ` +
                        `${(item.partsCount > 0) ? item.partsCount.toString() : ''} Parameters.`;
            const alert = yield this.alertControl.create({
                header: `${prefix} ${item.key} Info`,
                subHeader: `Full Name: ${item.label}:`,
                message: summaryHtml,
                cssClass: 'oscal-prompt-class',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: data => {
                            return false;
                        }
                    },
                    {
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_0__.TreeNodeType.Control) ? 'Details...' : '',
                        handler: data => {
                            if (item.key) {
                                // Follow to Details Page
                            }
                            else {
                                // Same as Close
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentModifyPrompt(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            const isGroup = item.children ? true : false;
            const nodeType = item.nodeType.toString();
            const prefix = nodeType[0].toUpperCase() + nodeType.substr(1).toLowerCase();
            console.log(`nodeType:${nodeType} => Prefix = ${prefix}`);
            const summaryHtml = isGroup ? `<strong> ${prefix} ${item.key} Contains:<br /><br /> </strong>` +
                `&nbsp;&nbsp;Total of ${item.partsCount} Controls/Subgroups. <br /><br />` +
                `&nbsp;&nbsp;Control Short Names Span from ${item.children[0].key} to  ${item.children[item.partsCount - 1].key}.`
                :
                    `<strong> ${prefix} ${item.key} </strong> ` +
                        ` ${(item.partsCount > 0) ? 'Has ' : 'Has no'} ` +
                        `${(item.partsCount > 0) ? item.partsCount.toString() : ''} Parameters.`;
            const alert = yield this.alertControl.create({
                header: `${prefix} ${item.key} Info`,
                subHeader: `Full Name: ${item.label}:`,
                message: summaryHtml,
                cssClass: 'oscal-prompt-class',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: data => {
                            return false;
                        }
                    },
                    {
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_0__.TreeNodeType.Control) ? 'Details...' : '',
                        handler: data => {
                            if (item.key) {
                                // Follow to Details Page
                            }
                            else {
                                // Same as Close
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
}
RecursiveGroupsComponent.ɵfac = function RecursiveGroupsComponent_Factory(t) { return new (t || RecursiveGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.GestureController)); };
RecursiveGroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecursiveGroupsComponent, selectors: [["", "recursive-tree-groups", ""]], viewQuery: function RecursiveGroupsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dragNodes = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dropNodes = _t);
    } }, inputs: { level: "level", label: "label", children: "children", parent: "parent" }, attrs: _c1, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["class", "node_style", 4, "ngIf"], ["recursive-tree-profile", "", "xxx", " && item.children", 3, "children", "parent", "hidden", "level", 4, "ngIf"], [1, "node_style"], ["slot", "start", "icon", "add", 3, "click", 4, "ngIf"], ["slot", "start", "icon", "arrow-down", 3, "click", 4, "ngIf"], ["color", "medium", 4, "ngIf"], ["color", "primary", 4, "ngIf"], ["slot", "end"], [3, "click"], ["slot", "end", "icon", "chatbox-outline"], ["slot", "start", "icon", "add", 3, "click"], ["slot", "start", "icon", "arrow-down", 3, "click"], ["color", "medium"], ["color", "primary"], ["recursive-tree-profile", "", "xxx", " && item.children", 3, "children", "parent", "level"]], template: function RecursiveGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RecursiveGroupsComponent_li_0_Template, 3, 2, "li", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.children);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonReorder, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _tree_profile_recursive_profile_component__WEBPACK_IMPORTED_MODULE_1__.RecursiveProfileComponent], styles: [".oscal-prompt-class[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark[_ngcontent-%COMP%]   .treePopUpInfo[_ngcontent-%COMP%] {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: -27px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .node_style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 50px;\n  margin: 1px;\n  \n  \n  width: 100%;\n  margin-left: -40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 8px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 11px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::before {\n  display: none;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #000;\n  \n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#tallTextArea[_ngcontent-%COMP%] {\n  height: 144pt;\n}\n\nion-item[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item[_ngcontent-%COMP%]   ion-radio.checkbox[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n\nbody.form-busy[_ngcontent-%COMP%] {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLDJCQUFBO0VBQ2Isa0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7Ozs7RUFJRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBOzs7Ozs7RUFNRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVJ0Qjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0UsNkJBQUE7QUFUSjs7QUFhQTtFQUNFLGdCQUFBO0FBVkYiLCJmaWxlIjoidHJlZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vc2NhbC1wcm9tcHQtY2xhc3Mge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDgsIDgsIDk4KSAxJSwgcmdiKDYsIDYsIDM2KSAxMDAlKTtcbiAgLS1taW4td2lkdGg6IDMwJTtcbn1cblxuLnRyZWVQb3BVcEluZm8ge1xuICAvL2JvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICAtLWJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWluLXdpZHRoOiA1MCU7XG59XG4vLyBEb2VzIG5vdCB3b3JrIGF0IHRoZSBtb21lbnRcbmJvZHkuZGFyayB7XG4gIC50cmVlUG9wVXBJbmZvIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogNTAlO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGluZyBmb3IgdGhlIGN1c3RvbSB0cmVlIHJlbmRlcmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4OyBcbiAgLy8gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gbWFrZSBhIGxlZnQtc2lkZSBvZiB0aGUgdHJlZSBub2RlcyB0byBtb3ZlIFxuICAvLyB2YWx1ZSAwIG1ha2VzIGl0IHRvbyBpbmRlbnRlZFxuICAvLyB2YWx1ZXMgYmVsb3cgKGFib3ZlIGluIGFic29sdXRlKSAhISEgLTMxICEhISBzaGlmdCBjb25uZWN0b3JzIHRvbyBmYXIgdG8gdGhlIGxlZnRcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8vIEtpbGwgbGlzdCBtYXJrZXJzXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogQ2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC8vIE1hcmdpbnMgYXJlIHNwYWNpbmcgZm9yIHRoZSBkcm9wLWRvd24gaXRlbXNcbiAgbWFyZ2luLXRvcDogNXB4OyAgICAvLyBEZWZpbmVzIHRoZSBnYXAgc2l6ZSBiZXR3ZWVuIHRyZWUtbm9kZSBlbGVtZW50cyB2ZXJ0aWNhbGx5XG4gIG1hcmdpbi1ib3R0b206IDVweDsgLy8gRGVmaW5lcyB0aGUgZ2FwIHNpemUgYmV0d2VlbiB0cmVlLW5vZGUgZWxlbWVudHMgdmVydGljYWxseVxuICAvLyBGb3IgRVZFTi1SSUdIVCBzaWRlcyAtIG1ha2UgaXQgMHB4XG4gIG1hcmdpbi1yaWdodDogM3B4OyAvLyAhISFEZWZpbmVzIGhvdyBtdWNoIGluc3RlcCBpcyBmb3IgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHRyZWVcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7IC8vIE1ha2VzIHRoZSBnYXAgYmVmb3JlIHRoZSBzdWJncm91cHMgbW9yZSBvYnZpb3VzXG59XG4udHJlZSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDsgLy8gTWFrZXMgdGhlIGdhcCBhZnRlciB0aGUgc3ViZ3JvdXBzIG1vcmUgb2J2aW91c1xufVxuXG4udHJlZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtNTBweDsgLy8gbGluZS11cCBvZiB0aGVcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHJlZSBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTUwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBNYWtlIHN1cmUgbm8gZW1wdHkgZ3VpZGUgc3RpY2tzIG91dFxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLy8gUm91bmQgdXAgdGhlIGxhc3QgdmlzdWFsIGd1aWRlXG4udHJlZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cbi8vIEhpZGUgdGhlIHZpc3VhbCBndWlkZSBiZWZvcmUgdGhlIGZpcnN0IGJhci1pdGVtXG51bC50cmVlID4gbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG59XG5cbi50cmVlIGxpIGEge1xuICBib3JkZXI6IDFweCAjNjY2NjY2IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1IDAgMCA1O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpIGEsXG4udHJlZSBsaSBhOmZvY3VzLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YmVmb3JlIC50cmVlIGxpIGE6aG92ZXIgKyB1bDo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgdWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgLypjb25uZWN0b3IgY29sb3Igb24gaG92ZXIqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhbGxUZXh0QXJlYSB7XG4gIGhlaWdodDogMTQ0cHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaW9uLXJhZGlvLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5LmZvcm0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8462:
/*!***************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-groups/tree-groups.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeGroupsComponent": () => (/* binding */ TreeGroupsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 1014);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recursive_groups_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recursive-groups.component */ 9378);
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







function TreeGroupsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Group 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class TreeGroupsComponent {
    constructor(cat, gestureCtrl) {
        this.gestureCtrl = gestureCtrl;
        //cat: CatalogService;
        this.name = 'GroupTreeView';
        // this.cat = this.theCat;
        // this.groups = this.cat.getCatGroupsList();
        // console.log(`Groups = ${this.groupsInfo}`);
        // this.groups = this.cat.getTreeNodesStat();
        // console.log(`Profile Mode [Root] = ${this.profileMode}`);
    }
    ngOnInit() {
        console.log(`Root: `);
        console.log(this.treeNodes);
    }
    OnInit() { }
    ngOnChanges(changes) {
    }
    ngAfterViewInit() {
        this.updateGestures();
        this.groups.changes.subscribe(() => console.log(this.groups));
    }
    updateGestures() {
        const items = this.items.toArray();
        const goals = this.groups.toArray();
    }
}
TreeGroupsComponent.ɵfac = function TreeGroupsComponent_Factory(t) { return new (t || TreeGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__.CatalogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.GestureController)); };
TreeGroupsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TreeGroupsComponent, selectors: [["oscal-tree-groups"]], viewQuery: function TreeGroupsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.groups = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, inputs: { treeNodes: "treeNodes", theCat: "theCat" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 1, consts: [["slot", "", "fixed", "", 1, "fixed-box"], [4, "ngFor"], ["disabled", "false"], ["recursive-tree-groups", "", 1, "tree", 3, "children"], [1, "drop-area"], ["groups", ""]], template: function TreeGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TreeGroupsComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-reorder-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("children", ctx.treeNodes);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonReorderGroup, _recursive_groups_component__WEBPACK_IMPORTED_MODULE_1__.RecursiveGroupsComponent], styles: [".oscal-prompt-class[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark[_ngcontent-%COMP%]   .treePopUpInfo[_ngcontent-%COMP%] {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: -27px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .node_style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 50px;\n  margin: 1px;\n  \n  \n  width: 100%;\n  margin-left: -40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 8px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 11px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::before {\n  display: none;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #000;\n  \n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#tallTextArea[_ngcontent-%COMP%] {\n  height: 144pt;\n}\n\nion-item[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item[_ngcontent-%COMP%]   ion-radio.checkbox[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n\nbody.form-busy[_ngcontent-%COMP%] {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLDJCQUFBO0VBQ2Isa0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7Ozs7RUFJRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBOzs7Ozs7RUFNRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVJ0Qjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0UsNkJBQUE7QUFUSjs7QUFhQTtFQUNFLGdCQUFBO0FBVkYiLCJmaWxlIjoidHJlZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vc2NhbC1wcm9tcHQtY2xhc3Mge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDgsIDgsIDk4KSAxJSwgcmdiKDYsIDYsIDM2KSAxMDAlKTtcbiAgLS1taW4td2lkdGg6IDMwJTtcbn1cblxuLnRyZWVQb3BVcEluZm8ge1xuICAvL2JvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICAtLWJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWluLXdpZHRoOiA1MCU7XG59XG4vLyBEb2VzIG5vdCB3b3JrIGF0IHRoZSBtb21lbnRcbmJvZHkuZGFyayB7XG4gIC50cmVlUG9wVXBJbmZvIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogNTAlO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGluZyBmb3IgdGhlIGN1c3RvbSB0cmVlIHJlbmRlcmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4OyBcbiAgLy8gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gbWFrZSBhIGxlZnQtc2lkZSBvZiB0aGUgdHJlZSBub2RlcyB0byBtb3ZlIFxuICAvLyB2YWx1ZSAwIG1ha2VzIGl0IHRvbyBpbmRlbnRlZFxuICAvLyB2YWx1ZXMgYmVsb3cgKGFib3ZlIGluIGFic29sdXRlKSAhISEgLTMxICEhISBzaGlmdCBjb25uZWN0b3JzIHRvbyBmYXIgdG8gdGhlIGxlZnRcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8vIEtpbGwgbGlzdCBtYXJrZXJzXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogQ2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC8vIE1hcmdpbnMgYXJlIHNwYWNpbmcgZm9yIHRoZSBkcm9wLWRvd24gaXRlbXNcbiAgbWFyZ2luLXRvcDogNXB4OyAgICAvLyBEZWZpbmVzIHRoZSBnYXAgc2l6ZSBiZXR3ZWVuIHRyZWUtbm9kZSBlbGVtZW50cyB2ZXJ0aWNhbGx5XG4gIG1hcmdpbi1ib3R0b206IDVweDsgLy8gRGVmaW5lcyB0aGUgZ2FwIHNpemUgYmV0d2VlbiB0cmVlLW5vZGUgZWxlbWVudHMgdmVydGljYWxseVxuICAvLyBGb3IgRVZFTi1SSUdIVCBzaWRlcyAtIG1ha2UgaXQgMHB4XG4gIG1hcmdpbi1yaWdodDogM3B4OyAvLyAhISFEZWZpbmVzIGhvdyBtdWNoIGluc3RlcCBpcyBmb3IgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHRyZWVcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7IC8vIE1ha2VzIHRoZSBnYXAgYmVmb3JlIHRoZSBzdWJncm91cHMgbW9yZSBvYnZpb3VzXG59XG4udHJlZSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDsgLy8gTWFrZXMgdGhlIGdhcCBhZnRlciB0aGUgc3ViZ3JvdXBzIG1vcmUgb2J2aW91c1xufVxuXG4udHJlZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtNTBweDsgLy8gbGluZS11cCBvZiB0aGVcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHJlZSBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTUwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBNYWtlIHN1cmUgbm8gZW1wdHkgZ3VpZGUgc3RpY2tzIG91dFxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLy8gUm91bmQgdXAgdGhlIGxhc3QgdmlzdWFsIGd1aWRlXG4udHJlZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cbi8vIEhpZGUgdGhlIHZpc3VhbCBndWlkZSBiZWZvcmUgdGhlIGZpcnN0IGJhci1pdGVtXG51bC50cmVlID4gbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG59XG5cbi50cmVlIGxpIGEge1xuICBib3JkZXI6IDFweCAjNjY2NjY2IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1IDAgMCA1O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpIGEsXG4udHJlZSBsaSBhOmZvY3VzLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YmVmb3JlIC50cmVlIGxpIGE6aG92ZXIgKyB1bDo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgdWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgLypjb25uZWN0b3IgY29sb3Igb24gaG92ZXIqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhbGxUZXh0QXJlYSB7XG4gIGhlaWdodDogMTQ0cHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaW9uLXJhZGlvLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5LmZvcm0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG4iXX0= */", ".fixed-box[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fcfcfc;\n  height: 80px;\n  z-index: 1;\n}\n\n.drop-area[_ngcontent-%COMP%] {\n  border: 2px dashed #660066;\n  margin: 2px;\n  width: calc(33% - 4px);\n  align-items: center;\n  height: 150px;\n  display: inline-flex;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  background: #990099;\n}\n\n.item-group[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJ0cmVlLWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1ib3h7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAgIGhlaWdodDo4MHB4O1xuICAgIHotaW5kZXg6MTtcbn1cblxuLmRyb3AtYXJlYXtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgIzY2MDA2NjtcbiAgICBtYXJnaW46IDJweDtcbiAgICB3aWR0aDogY2FsYygzMyUgLSA0cHgpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjOTkwMDk5O1xufVxuXG4uaXRlbS1ncm91cHtcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 7330:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-profile/recursive-profile.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecursiveProfileComponent": () => (/* binding */ RecursiveProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/app-state/app-tree/tree-elements */ 4285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _action_commons_action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-commons/action-cat-params/action-cat-params.component */ 3958);









const _c0 = ["recursive-tree-profile", ""];
function RecursiveProfileComponent_li_0_ion_item_1_ion_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecursiveProfileComponent_li_0_ion_item_1_ion_icon_2_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.closeOpen(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecursiveProfileComponent_li_0_ion_item_1_ion_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecursiveProfileComponent_li_0_ion_item_1_ion_icon_3_Template_ion_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.closeOpen(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecursiveProfileComponent_li_0_ion_item_1_ion_badge_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.partsCount, " Groups ");
} }
function RecursiveProfileComponent_li_0_ion_item_1_ion_badge_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.partsCount, " Controls ");
} }
function RecursiveProfileComponent_li_0_ion_item_1_ion_badge_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r1.partsCount, " Params ");
} }
function RecursiveProfileComponent_li_0_ion_item_1_ion_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecursiveProfileComponent_li_0_ion_item_1_ion_button_12_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.editParameters(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Parameters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RecursiveProfileComponent_li_0_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecursiveProfileComponent_li_0_ion_item_1_Template_ion_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.closeOpen(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RecursiveProfileComponent_li_0_ion_item_1_ion_icon_2_Template, 1, 0, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RecursiveProfileComponent_li_0_ion_item_1_ion_icon_3_Template, 1, 0, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RecursiveProfileComponent_li_0_ion_item_1_ion_badge_9_Template, 2, 1, "ion-badge", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RecursiveProfileComponent_li_0_ion_item_1_ion_badge_10_Template, 2, 1, "ion-badge", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RecursiveProfileComponent_li_0_ion_item_1_ion_badge_11_Template, 2, 1, "ion-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RecursiveProfileComponent_li_0_ion_item_1_ion_button_12_Template, 3, 0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecursiveProfileComponent_li_0_ion_item_1_Template_ion_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.presentPrompt(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Edit Control ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", item_r1.toolTip || item_r1.getNodeToolTip(item_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r1.open && item_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.open && item_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.children && item_r1.partsCount > 0 && item_r1.isCatalog());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.children && item_r1.partsCount > 0 && item_r1.isGroup());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.partsCount > 0 && item_r1.isControl());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.partsCount > 0 && item_r1.isControl());
} }
function RecursiveProfileComponent_li_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "oscal-cat-params");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("1. OUT-SIDE-ITEM-", item_r1.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("2. OUT-SIDE-ITEM-", item_r1.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("3. OUT-SIDE-ITEM-", item_r1.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("4. OUT-SIDE-ITEM-", item_r1.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("5. OUT-SIDE-ITEM-", item_r1.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("6. OUT-SIDE-ITEM-", item_r1.label, "");
} }
function RecursiveProfileComponent_li_0_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ul", 17);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hidden", !item_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("children", item_r1.children)("parent", item_r1.parent)("level", ctx_r4.level != undefined ? ctx_r4.level + 1 : 0);
} }
function RecursiveProfileComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RecursiveProfileComponent_li_0_ion_item_1_Template, 16, 8, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RecursiveProfileComponent_li_0_div_2_Template, 14, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RecursiveProfileComponent_li_0_ul_3_Template, 1, 5, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.hasSomeIncluded());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showItemExtra);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.hasSomeIncluded());
} }
class RecursiveProfileComponent {
    // private navigateParams = new NavParams();
    constructor(router) {
        this.router = router;
        this.self = this;
        this.alertControl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController();
    }
    closeOpen(item) {
        item.open = !item.open;
    }
    navigateToControl(item) {
        const urlParams = { state: { ctrlId: item.key, catId: undefined, entity: item } };
        console.log(`Navigating to cat-control with ${item}`);
        console.log(`Item is packed as : ${urlParams}`);
        this.router.navigate(['cat-control'], urlParams);
    }
    presentPrompt(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            const isGroup = item.children ? true : false;
            const nodeType = item.nodeType.toString();
            const prefix = nodeType[0].toUpperCase() + nodeType.substr(1).toLowerCase();
            console.log(`nodeType:${nodeType} => Prefix = ${prefix}`);
            const summaryHtml = isGroup ? `<strong> ${prefix} ${item.key} Contains:<br /><br /> </strong>` +
                `&nbsp;&nbsp;Total of ${item.partsCount} Controls/Subgroups. <br /><br />` +
                `&nbsp;&nbsp;Control Short Names Span from ${item.children[0].key} to  ${item.children[item.partsCount - 1].key}.`
                :
                    `<strong> ${prefix} ${item.key} </strong> ` +
                        ` ${(item.partsCount > 0) ? 'Has ' : 'Has no'} ` +
                        `${(item.partsCount > 0) ? item.partsCount.toString() : ''} Parameters.`;
            const alert = yield this.alertControl.create({
                header: `${prefix} ${item.key} Info`,
                subHeader: `Full Name: ${item.label}:`,
                message: summaryHtml,
                cssClass: 'oscal-prompt-class',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: data => {
                            return false;
                        }
                    },
                    {
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_0__.TreeNodeType.Control) ? 'Details...' : '',
                        handler: data => {
                            if (item.key) {
                                // Follow to Details Page
                            }
                            else {
                                // Same as Close
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentModifyPrompt(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            const isGroup = item.children ? true : false;
            const nodeType = item.nodeType.toString();
            const prefix = nodeType[0].toUpperCase() + nodeType.substr(1).toLowerCase();
            console.log(`nodeType:${nodeType} => Prefix = ${prefix}`);
            const summaryHtml = isGroup ? `<strong> ${prefix} ${item.key} Contains:<br /><br /> </strong>` +
                `&nbsp;&nbsp;Total of ${item.partsCount} Controls/Subgroups. <br /><br />` +
                `&nbsp;&nbsp;Control Short Names Span from ${item.children[0].key} to  ${item.children[item.partsCount - 1].key}.`
                :
                    `<strong> ${prefix} ${item.key} </strong> ` +
                        ` ${(item.partsCount > 0) ? 'Has ' : 'Has no'} ` +
                        `${(item.partsCount > 0) ? item.partsCount.toString() : ''} Parameters.`;
            const alert = yield this.alertControl.create({
                header: `${prefix} ${item.key} Info`,
                subHeader: `Full Name: ${item.label}:`,
                message: summaryHtml,
                cssClass: 'oscal-prompt-class',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: data => {
                            return false;
                        }
                    },
                    {
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_0__.TreeNodeType.Control) ? 'Details...' : '',
                        handler: data => {
                            if (item.key) {
                                // Follow to Details Page
                            }
                            else {
                                // Same as Close
                                return false;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editParameters(item) {
        this.showItemExtra = !this.showItemExtra;
    }
    editControls(control) {
        this.showItemExtra = !this.showItemExtra;
    }
}
RecursiveProfileComponent.ɵfac = function RecursiveProfileComponent_Factory(t) { return new (t || RecursiveProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
RecursiveProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecursiveProfileComponent, selectors: [["", "recursive-tree-profile", ""]], inputs: { level: "level", label: "label", children: "children", parent: "parent" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["class", "node_style", "class", "node_style", 3, "title", 4, "ngIf"], [4, "ngIf"], ["recursive-tree-profile", "", "xxx", " && item.children", 3, "children", "parent", "hidden", "level", 4, "ngIf"], [1, "node_style", 3, "title"], [1, "ion-no-padding", 3, "click"], ["slot", "start", "icon", "add", 3, "click", 4, "ngIf"], ["slot", "start", "icon", "arrow-down", 3, "click", 4, "ngIf"], ["color", "medium", 4, "ngIf"], ["color", "primary", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click"], ["slot", "end", "icon", "chatbox-outline"], ["slot", "start", "icon", "add", 3, "click"], ["slot", "start", "icon", "arrow-down", 3, "click"], ["color", "medium"], ["color", "primary"], ["recursive-tree-profile", "", "xxx", " && item.children", 3, "children", "parent", "level"]], template: function RecursiveProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RecursiveProfileComponent_li_0_Template, 4, 3, "li", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.children);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _action_commons_action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_1__.CatParamsComponent, RecursiveProfileComponent], styles: [".oscal-prompt-class[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark[_ngcontent-%COMP%]   .treePopUpInfo[_ngcontent-%COMP%] {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: -27px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .node_style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 50px;\n  margin: 1px;\n  \n  \n  width: 100%;\n  margin-left: -40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 8px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 11px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::before {\n  display: none;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #000;\n  \n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#tallTextArea[_ngcontent-%COMP%] {\n  height: 144pt;\n}\n\nion-item[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item[_ngcontent-%COMP%]   ion-radio.checkbox[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n\nbody.form-busy[_ngcontent-%COMP%] {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLDJCQUFBO0VBQ2Isa0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7Ozs7RUFJRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBOzs7Ozs7RUFNRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVJ0Qjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0UsNkJBQUE7QUFUSjs7QUFhQTtFQUNFLGdCQUFBO0FBVkYiLCJmaWxlIjoidHJlZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vc2NhbC1wcm9tcHQtY2xhc3Mge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDgsIDgsIDk4KSAxJSwgcmdiKDYsIDYsIDM2KSAxMDAlKTtcbiAgLS1taW4td2lkdGg6IDMwJTtcbn1cblxuLnRyZWVQb3BVcEluZm8ge1xuICAvL2JvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICAtLWJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWluLXdpZHRoOiA1MCU7XG59XG4vLyBEb2VzIG5vdCB3b3JrIGF0IHRoZSBtb21lbnRcbmJvZHkuZGFyayB7XG4gIC50cmVlUG9wVXBJbmZvIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogNTAlO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGluZyBmb3IgdGhlIGN1c3RvbSB0cmVlIHJlbmRlcmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4OyBcbiAgLy8gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gbWFrZSBhIGxlZnQtc2lkZSBvZiB0aGUgdHJlZSBub2RlcyB0byBtb3ZlIFxuICAvLyB2YWx1ZSAwIG1ha2VzIGl0IHRvbyBpbmRlbnRlZFxuICAvLyB2YWx1ZXMgYmVsb3cgKGFib3ZlIGluIGFic29sdXRlKSAhISEgLTMxICEhISBzaGlmdCBjb25uZWN0b3JzIHRvbyBmYXIgdG8gdGhlIGxlZnRcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8vIEtpbGwgbGlzdCBtYXJrZXJzXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogQ2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC8vIE1hcmdpbnMgYXJlIHNwYWNpbmcgZm9yIHRoZSBkcm9wLWRvd24gaXRlbXNcbiAgbWFyZ2luLXRvcDogNXB4OyAgICAvLyBEZWZpbmVzIHRoZSBnYXAgc2l6ZSBiZXR3ZWVuIHRyZWUtbm9kZSBlbGVtZW50cyB2ZXJ0aWNhbGx5XG4gIG1hcmdpbi1ib3R0b206IDVweDsgLy8gRGVmaW5lcyB0aGUgZ2FwIHNpemUgYmV0d2VlbiB0cmVlLW5vZGUgZWxlbWVudHMgdmVydGljYWxseVxuICAvLyBGb3IgRVZFTi1SSUdIVCBzaWRlcyAtIG1ha2UgaXQgMHB4XG4gIG1hcmdpbi1yaWdodDogM3B4OyAvLyAhISFEZWZpbmVzIGhvdyBtdWNoIGluc3RlcCBpcyBmb3IgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHRyZWVcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7IC8vIE1ha2VzIHRoZSBnYXAgYmVmb3JlIHRoZSBzdWJncm91cHMgbW9yZSBvYnZpb3VzXG59XG4udHJlZSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDsgLy8gTWFrZXMgdGhlIGdhcCBhZnRlciB0aGUgc3ViZ3JvdXBzIG1vcmUgb2J2aW91c1xufVxuXG4udHJlZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtNTBweDsgLy8gbGluZS11cCBvZiB0aGVcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHJlZSBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTUwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBNYWtlIHN1cmUgbm8gZW1wdHkgZ3VpZGUgc3RpY2tzIG91dFxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLy8gUm91bmQgdXAgdGhlIGxhc3QgdmlzdWFsIGd1aWRlXG4udHJlZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cbi8vIEhpZGUgdGhlIHZpc3VhbCBndWlkZSBiZWZvcmUgdGhlIGZpcnN0IGJhci1pdGVtXG51bC50cmVlID4gbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG59XG5cbi50cmVlIGxpIGEge1xuICBib3JkZXI6IDFweCAjNjY2NjY2IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1IDAgMCA1O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpIGEsXG4udHJlZSBsaSBhOmZvY3VzLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YmVmb3JlIC50cmVlIGxpIGE6aG92ZXIgKyB1bDo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgdWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgLypjb25uZWN0b3IgY29sb3Igb24gaG92ZXIqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhbGxUZXh0QXJlYSB7XG4gIGhlaWdodDogMTQ0cHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaW9uLXJhZGlvLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5LmZvcm0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG4iXX0= */"] });


/***/ }),

/***/ 3391:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-profile/tree-profile.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeProfileComponent": () => (/* binding */ TreeProfileComponent)
/* harmony export */ });
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 1014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _recursive_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recursive-profile.component */ 7330);





function TreeProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("children", ctx_r0.treeNodes);
} }
class TreeProfileComponent {
    constructor() {
        this.name = 'ProfileTreeView';
        this.cat = this.theCat;
        // this.groupsInfo = this.cat.getGroups();
        // console.log(`Groups = ${this.groupsInfo}`);
        // this.groups = this.cat.getTreeNodesStat();
        // console.log(`Profile Mode [Root] = ${this.profileMode}`);
    }
    ngOnInit() { }
    OnInit() { }
    ngOnChanges(changes) {
    }
}
TreeProfileComponent.ɵfac = function TreeProfileComponent_Factory(t) { return new (t || TreeProfileComponent)(); };
TreeProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TreeProfileComponent, selectors: [["oscal-tree-profile"]], inputs: { treeNodes: "treeNodes", theCat: "theCat" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["recursive-tree-profile", "", 1, "tree", 3, "children"]], template: function TreeProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TreeProfileComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.treeNodes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _recursive_profile_component__WEBPACK_IMPORTED_MODULE_1__.RecursiveProfileComponent], styles: [".oscal-prompt-class[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark[_ngcontent-%COMP%]   .treePopUpInfo[_ngcontent-%COMP%] {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: -27px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .node_style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 50px;\n  margin: 1px;\n  \n  \n  width: 100%;\n  margin-left: -40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-top: 8px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 11px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::before {\n  display: none;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #000;\n  \n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#tallTextArea[_ngcontent-%COMP%] {\n  height: 144pt;\n}\n\nion-item[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item[_ngcontent-%COMP%]   ion-radio.checkbox[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n\nbody.form-busy[_ngcontent-%COMP%] {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLDJCQUFBO0VBQ2Isa0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7Ozs7RUFJRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBOzs7Ozs7RUFNRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVJ0Qjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0UsNkJBQUE7QUFUSjs7QUFhQTtFQUNFLGdCQUFBO0FBVkYiLCJmaWxlIjoidHJlZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vc2NhbC1wcm9tcHQtY2xhc3Mge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDgsIDgsIDk4KSAxJSwgcmdiKDYsIDYsIDM2KSAxMDAlKTtcbiAgLS1taW4td2lkdGg6IDMwJTtcbn1cblxuLnRyZWVQb3BVcEluZm8ge1xuICAvL2JvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICAtLWJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWluLXdpZHRoOiA1MCU7XG59XG4vLyBEb2VzIG5vdCB3b3JrIGF0IHRoZSBtb21lbnRcbmJvZHkuZGFyayB7XG4gIC50cmVlUG9wVXBJbmZvIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogNTAlO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGluZyBmb3IgdGhlIGN1c3RvbSB0cmVlIHJlbmRlcmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4OyBcbiAgLy8gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gbWFrZSBhIGxlZnQtc2lkZSBvZiB0aGUgdHJlZSBub2RlcyB0byBtb3ZlIFxuICAvLyB2YWx1ZSAwIG1ha2VzIGl0IHRvbyBpbmRlbnRlZFxuICAvLyB2YWx1ZXMgYmVsb3cgKGFib3ZlIGluIGFic29sdXRlKSAhISEgLTMxICEhISBzaGlmdCBjb25uZWN0b3JzIHRvbyBmYXIgdG8gdGhlIGxlZnRcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8vIEtpbGwgbGlzdCBtYXJrZXJzXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogQ2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC8vIE1hcmdpbnMgYXJlIHNwYWNpbmcgZm9yIHRoZSBkcm9wLWRvd24gaXRlbXNcbiAgbWFyZ2luLXRvcDogNXB4OyAgICAvLyBEZWZpbmVzIHRoZSBnYXAgc2l6ZSBiZXR3ZWVuIHRyZWUtbm9kZSBlbGVtZW50cyB2ZXJ0aWNhbGx5XG4gIG1hcmdpbi1ib3R0b206IDVweDsgLy8gRGVmaW5lcyB0aGUgZ2FwIHNpemUgYmV0d2VlbiB0cmVlLW5vZGUgZWxlbWVudHMgdmVydGljYWxseVxuICAvLyBGb3IgRVZFTi1SSUdIVCBzaWRlcyAtIG1ha2UgaXQgMHB4XG4gIG1hcmdpbi1yaWdodDogM3B4OyAvLyAhISFEZWZpbmVzIGhvdyBtdWNoIGluc3RlcCBpcyBmb3IgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHRyZWVcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7IC8vIE1ha2VzIHRoZSBnYXAgYmVmb3JlIHRoZSBzdWJncm91cHMgbW9yZSBvYnZpb3VzXG59XG4udHJlZSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDsgLy8gTWFrZXMgdGhlIGdhcCBhZnRlciB0aGUgc3ViZ3JvdXBzIG1vcmUgb2J2aW91c1xufVxuXG4udHJlZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtNTBweDsgLy8gbGluZS11cCBvZiB0aGVcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHJlZSBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTUwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBNYWtlIHN1cmUgbm8gZW1wdHkgZ3VpZGUgc3RpY2tzIG91dFxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLy8gUm91bmQgdXAgdGhlIGxhc3QgdmlzdWFsIGd1aWRlXG4udHJlZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cbi8vIEhpZGUgdGhlIHZpc3VhbCBndWlkZSBiZWZvcmUgdGhlIGZpcnN0IGJhci1pdGVtXG51bC50cmVlID4gbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG59XG5cbi50cmVlIGxpIGEge1xuICBib3JkZXI6IDFweCAjNjY2NjY2IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1IDAgMCA1O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpIGEsXG4udHJlZSBsaSBhOmZvY3VzLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YmVmb3JlIC50cmVlIGxpIGE6aG92ZXIgKyB1bDo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgdWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgLypjb25uZWN0b3IgY29sb3Igb24gaG92ZXIqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhbGxUZXh0QXJlYSB7XG4gIGhlaWdodDogMTQ0cHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaW9uLXJhZGlvLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5LmZvcm0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6617:
/*!******************************************************!*\
  !*** ./src/app/pages/all-components/trees.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreesModule": () => (/* binding */ TreesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tree_cat_recursive_tree_cat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-cat/recursive-tree-cat.component */ 9134);
/* harmony import */ var _tree_cat_tree_cat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-cat/tree-cat.component */ 9301);
/* harmony import */ var _tree_profile_recursive_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-profile/recursive-profile.component */ 7330);
/* harmony import */ var _tree_profile_tree_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-profile/tree-profile.component */ 3391);
/* harmony import */ var _list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-groups/list-groups.component */ 2845);
/* harmony import */ var _tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-groups/tree-groups.component */ 8462);
/* harmony import */ var _tree_groups_recursive_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-groups/recursive-groups.component */ 9378);
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components.module */ 7339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
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












//import { XCatTreeComponent } from './x-cat-tree-select/x-cat-tree-select.component';
//import { RecursiveXCatTreeSelectComponent } from './x-cat-tree-select/recursive-x-cat-tree-select.component';
class TreesModule {
}
TreesModule.ɵfac = function TreesModule_Factory(t) { return new (t || TreesModule)(); };
TreesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TreesModule });
TreesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _components_module__WEBPACK_IMPORTED_MODULE_7__.ComponentsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TreesModule, { declarations: [_tree_cat_tree_cat_component__WEBPACK_IMPORTED_MODULE_1__.TreeCatComponent, _tree_cat_recursive_tree_cat_component__WEBPACK_IMPORTED_MODULE_0__.RecursiveTreeCatComponent,
        _tree_profile_tree_profile_component__WEBPACK_IMPORTED_MODULE_3__.TreeProfileComponent, _tree_profile_recursive_profile_component__WEBPACK_IMPORTED_MODULE_2__.RecursiveProfileComponent,
        _tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_5__.TreeGroupsComponent, _tree_groups_recursive_groups_component__WEBPACK_IMPORTED_MODULE_6__.RecursiveGroupsComponent,
        _list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_4__.ListGroupsComponent], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _components_module__WEBPACK_IMPORTED_MODULE_7__.ComponentsModule], exports: [_tree_cat_recursive_tree_cat_component__WEBPACK_IMPORTED_MODULE_0__.RecursiveTreeCatComponent, _tree_cat_tree_cat_component__WEBPACK_IMPORTED_MODULE_1__.TreeCatComponent, _tree_profile_tree_profile_component__WEBPACK_IMPORTED_MODULE_3__.TreeProfileComponent, _tree_groups_recursive_groups_component__WEBPACK_IMPORTED_MODULE_6__.RecursiveGroupsComponent,
        _tree_profile_recursive_profile_component__WEBPACK_IMPORTED_MODULE_2__.RecursiveProfileComponent, _list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_4__.ListGroupsComponent, _tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_5__.TreeGroupsComponent, _tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_5__.TreeGroupsComponent] }); })();


/***/ }),

/***/ 6183:
/*!*************************************************************************!*\
  !*** ./src/app/pages/cat-select-cat-async/cat-select-cat-async.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectCatAsyncPage": () => (/* binding */ CatSelectCatAsyncPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _all_components_action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../all-components/action-commons/action-wait/action-wait.component */ 8142);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/oscal-data/catalog.service */ 1014);
/* harmony import */ var src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/oscal-files/known-files.service */ 8958);
/* harmony import */ var src_app_interfaces_known_locations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/known-locations */ 61);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _all_components_nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../all-components/nav-cat/nav-cat.component */ 3753);
/* harmony import */ var _all_components_action_commons_action_select_baseline_action_select_baseline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../all-components/action-commons/action-select-baseline/action-select-baseline.component */ 7794);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _all_components_tree_cat_tree_cat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../all-components/tree-cat/tree-cat.component */ 9301);














function CatSelectCatAsyncPage_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "oscal-tree-cat", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theTree_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("treeNodes", theTree_r1)("theCat", ctx_r0.cat);
} }
class CatSelectCatAsyncPage {
    constructor(theCatService, knownFiles, modalController) {
        this.knownFiles = knownFiles;
        this.modalController = modalController;
        this.alertCtrl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController();
        this.userCanLeave = false;
        this.viewTab = 0;
        this.cat = theCatService;
        this.cat.InitData();
        this.activeCatInfo = this.knownFiles.getActive();
        // this.groups = this.cat.getTreeNodesStat();
    }
    isActiveRev4() {
        if (this.activeCatInfo && this.activeCatInfo.cat_enum) {
            return this.activeCatInfo.cat_enum === src_app_interfaces_known_locations__WEBPACK_IMPORTED_MODULE_3__.KnownCatalogNames.NIST_800_53_Rev4;
        }
        else {
            return false;
        }
    }
    isActiveRev5() {
        if (this.activeCatInfo && this.activeCatInfo.cat_enum) {
            return this.activeCatInfo.cat_enum === src_app_interfaces_known_locations__WEBPACK_IMPORTED_MODULE_3__.KnownCatalogNames.NIST_800_53_Rev5;
        }
        else {
            return true;
        }
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.loadTree(this.isActiveRev4()).
                then(() => {
                this.loading.dismiss();
            });
        });
    }
    loadTree(useRev4) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.cat.getCatalog(useRev4);
            if (!this.theTree$) {
                console.log('Reading Tree');
                this.theTree$ = this.cat.getTreeNodesAsync();
            }
        });
    }
    /**
     * Async loading progress pop-up
     *
     * CatSelectCatalogPage
     */
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.modalController.create({
                component: _all_components_action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_0__.ActionWaitComponent,
                componentProps: {
                    title: 'Wait! Loading Catalog ...',
                    color: 'primary',
                    timeout: 43000,
                },
                cssClass: 'transparent-modal'
            });
            console.log('presentLoading');
            yield this.loading.present();
        });
    }
    viewModelChange(wasClicked) {
        this.viewTab = wasClicked;
        /*
        if (this.viewTab === wasClicked) {
          this.viewTab = (this.viewTab) % 3;
        } else {
        }*/
    }
    getProfileMode() {
        return this.viewTab;
    }
    getRadioState(id) {
        return (this.viewTab === id) ? 'radio-button-on-outline' : 'radio-button-off-outline';
    }
    getRadioColor(id) {
        return (this.viewTab === id) ? 'success' : '';
    }
    ionViewCanLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // here you can use other vars to see if there are reasons we want to keep user in this page:
            if (!this.userCanLeave) {
                return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    const alert = yield this.alertCtrl.create({
                        header: 'Are you sure?',
                        message: 'The form data may be lost',
                        buttons: [
                            {
                                text: 'Stay',
                                role: 'cancel',
                                handler: () => {
                                    console.log('User stayed');
                                    this.userCanLeave = false;
                                    reject();
                                }
                            }, {
                                text: 'Leave',
                                handler: () => {
                                    console.log('User leaves');
                                    this.userCanLeave = true;
                                    //resolve();
                                }
                            }, {
                                text: 'Save',
                                handler: () => {
                                    console.log('User saved data');
                                    // do saving logic
                                    this.userCanLeave = true;
                                    //resolve();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }));
            }
            else {
                return true;
            }
        });
    }
}
CatSelectCatAsyncPage.ɵfac = function CatSelectCatAsyncPage_Factory(t) { return new (t || CatSelectCatAsyncPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_1__.CatalogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_2__.KnownOscalFilesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController)); };
CatSelectCatAsyncPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CatSelectCatAsyncPage, selectors: [["oscal-cat-select-cat-async"]], decls: 18, vars: 3, consts: [[1, "ion-padding"], [4, "ngIf"], [3, "treeNodes", "theCat"]], template: function CatSelectCatAsyncPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "All Controls ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u00A0\u00A0Select Controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Select controls to be included in profile. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "oscal-nav-cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "oscal-select-baseline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, CatSelectCatAsyncPage_div_16_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 1, ctx.theTree$));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _all_components_nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_4__.NavCatComponent, _all_components_action_commons_action_select_baseline_action_select_baseline_component__WEBPACK_IMPORTED_MODULE_5__.SelectBaselineComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _all_components_tree_cat_tree_cat_component__WEBPACK_IMPORTED_MODULE_6__.TreeCatComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXQtc2VsZWN0LWNhdC1hc3luYy5wYWdlLnNjc3MifQ== */", "div.content[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0px;\n  padding-right: 45px;\n  width: 100%;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlUGFnZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7QUFBRiIsImZpbGUiOiJzdHlsZVBhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_all-components_trees_module_ts-src_app_pages_cat-select-cat-async_cat-s-a9215d.js.map