"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_all-components_trees_module_ts-src_app_pages_cat-select-cat-async_cat-s-a9215d"],{

/***/ 32845:
/*!***************************************************************************!*\
  !*** ./src/app/pages/all-components/list-groups/list-groups.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListGroupsComponent": () => (/* binding */ ListGroupsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_groups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-groups.component.html?ngResource */ 51816);
/* harmony import */ var _list_groups_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-groups.component.scss?ngResource */ 96630);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 91014);
/* harmony import */ var _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../providers/app-state/app-tree/tree-elements */ 84285);



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




let ListGroupsComponent = class ListGroupsComponent {
    constructor() {
        this.name = 'TreeView';
        this.groups = [{
                id: 'xxx',
                name: 'New Group',
            }
        ];
        this.cat = this.theCat;
        this.alertControl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_3__.TreeNodeType.Control) ? 'Details...' : '',
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
};
ListGroupsComponent.ctorParameters = () => [];
ListGroupsComponent.propDecorators = {
    controlsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    theCat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ListGroupsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'oscal-list-groups',
        template: _list_groups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_groups_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
    /// ['./../tree-cat/tree-cat.component.scss']
    ,
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [])
], ListGroupsComponent);



/***/ }),

/***/ 19249:
/*!****************************************************************!*\
  !*** ./src/app/pages/all-components/tree-cat/all-tree-base.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTreesBaseComponent": () => (/* binding */ AllTreesBaseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-all-common/tree-styles.scss?ngResource */ 37375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


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

let AllTreesBaseComponent = class AllTreesBaseComponent {
    constructor() {
        this.canMoveForward = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.saveTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
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
};
AllTreesBaseComponent.propDecorators = {
    canMoveForward: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    saveTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
AllTreesBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: '[oscal-all-trees-base]',
        template: ` 
        <p>
            tree - ancestor - base works!
            It is an un- inheritable markup file
        </p>
        `,
        styles: [_action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__]
    })
], AllTreesBaseComponent);



/***/ }),

/***/ 59134:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-cat/recursive-tree-cat.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecursiveTreeCatComponent": () => (/* binding */ RecursiveTreeCatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recursive_tree_cat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recursive-tree-cat.component.html?ngResource */ 99127);
/* harmony import */ var _action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-all-common/tree-styles.scss?ngResource */ 37375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 91014);
/* harmony import */ var _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../providers/app-state/app-tree/tree-elements */ 84285);
/* harmony import */ var _all_tree_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-tree-base */ 19249);



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






let RecursiveTreeCatComponent = class RecursiveTreeCatComponent extends _all_tree_base__WEBPACK_IMPORTED_MODULE_4__.AllTreesBaseComponent {
    constructor(router, cat) {
        super();
        this.router = router;
        this.cat = cat;
        // cat: CatalogService;
        this.self = this;
        this.alertControl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_3__.TreeNodeType.Control) ? 'Details...' : '',
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
};
RecursiveTreeCatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_2__.CatalogService }
];
RecursiveTreeCatComponent.propDecorators = {
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    children: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    parent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    theCat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
RecursiveTreeCatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: '[recursive-tree-cat]',
        template: _recursive_tree_cat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_2__.CatalogService])
], RecursiveTreeCatComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tree_cat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-cat.component.html?ngResource */ 74251);
/* harmony import */ var _action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-all-common/tree-styles.scss?ngResource */ 37375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 91014);



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



let TreeCatComponent = class TreeCatComponent {
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
};
TreeCatComponent.ctorParameters = () => [];
TreeCatComponent.propDecorators = {
    treeNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    theCat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TreeCatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'oscal-tree-cat',
        template: _tree_cat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])
], TreeCatComponent);



/***/ }),

/***/ 59378:
/*!********************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-groups/recursive-groups.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecursiveGroupsComponent": () => (/* binding */ RecursiveGroupsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recursive_groups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recursive-groups.component.html?ngResource */ 33357);
/* harmony import */ var _action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-all-common/tree-styles.scss?ngResource */ 37375);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/app-state/app-tree/tree-elements */ 84285);



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





let RecursiveGroupsComponent = class RecursiveGroupsComponent {
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
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_2__.TreeNodeType.Control) ? 'Details...' : '',
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
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_2__.TreeNodeType.Control) ? 'Details...' : '',
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
};
RecursiveGroupsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.GestureController }
];
RecursiveGroupsComponent.propDecorators = {
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    children: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    parent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    dragNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChildren, args: ['node', { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },] }],
    dropNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChildren, args: ['node', { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },] }]
};
RecursiveGroupsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: '[recursive-tree-groups]',
        template: _recursive_groups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.GestureController])
], RecursiveGroupsComponent);



/***/ }),

/***/ 98462:
/*!***************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-groups/tree-groups.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeGroupsComponent": () => (/* binding */ TreeGroupsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tree_groups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-groups.component.html?ngResource */ 61805);
/* harmony import */ var _action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-all-common/tree-styles.scss?ngResource */ 37375);
/* harmony import */ var _tree_groups_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-groups.component.scss?ngResource */ 47057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 91014);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);




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



let TreeGroupsComponent = class TreeGroupsComponent {
    constructor(gestureCtrl) {
        this.gestureCtrl = gestureCtrl;
        this.name = 'GroupTreeView';
        this.cat = this.theCat;
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
};
TreeGroupsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.GestureController }
];
TreeGroupsComponent.propDecorators = {
    treeNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    theCat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    groups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
TreeGroupsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'oscal-tree-groups',
        template: _tree_groups_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _tree_groups_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.GestureController])
], TreeGroupsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recursive_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recursive-profile.component.html?ngResource */ 61738);
/* harmony import */ var _action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-all-common/tree-styles.scss?ngResource */ 37375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/app-state/app-tree/tree-elements */ 84285);



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




let RecursiveProfileComponent = class RecursiveProfileComponent {
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
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_2__.TreeNodeType.Control) ? 'Details...' : '',
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
                        text: (item.nodeType === _providers_app_state_app_tree_tree_elements__WEBPACK_IMPORTED_MODULE_2__.TreeNodeType.Control) ? 'Details...' : '',
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
};
RecursiveProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
RecursiveProfileComponent.propDecorators = {
    level: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    children: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    parent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
RecursiveProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: '[recursive-tree-profile]',
        template: _recursive_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router])
], RecursiveProfileComponent);



/***/ }),

/***/ 93391:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-profile/tree-profile.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeProfileComponent": () => (/* binding */ TreeProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tree_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-profile.component.html?ngResource */ 36010);
/* harmony import */ var _action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-all-common/tree-styles.scss?ngResource */ 37375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 91014);





let TreeProfileComponent = class TreeProfileComponent {
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
};
TreeProfileComponent.ctorParameters = () => [];
TreeProfileComponent.propDecorators = {
    treeNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    theCat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TreeProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'oscal-tree-profile',
        template: _tree_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_all_common_tree_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])
], TreeProfileComponent);



/***/ }),

/***/ 76617:
/*!******************************************************!*\
  !*** ./src/app/pages/all-components/trees.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreesModule": () => (/* binding */ TreesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tree_cat_recursive_tree_cat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree-cat/recursive-tree-cat.component */ 59134);
/* harmony import */ var _tree_cat_tree_cat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-cat/tree-cat.component */ 9301);
/* harmony import */ var _tree_profile_recursive_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-profile/recursive-profile.component */ 7330);
/* harmony import */ var _tree_profile_tree_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-profile/tree-profile.component */ 93391);
/* harmony import */ var _list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-groups/list-groups.component */ 32845);
/* harmony import */ var _tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-groups/tree-groups.component */ 98462);
/* harmony import */ var _tree_groups_recursive_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree-groups/recursive-groups.component */ 59378);

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
let TreesModule = class TreesModule {
};
TreesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_tree_cat_tree_cat_component__WEBPACK_IMPORTED_MODULE_1__.TreeCatComponent, _tree_cat_recursive_tree_cat_component__WEBPACK_IMPORTED_MODULE_0__.RecursiveTreeCatComponent,
            _tree_profile_tree_profile_component__WEBPACK_IMPORTED_MODULE_3__.TreeProfileComponent, _tree_profile_recursive_profile_component__WEBPACK_IMPORTED_MODULE_2__.RecursiveProfileComponent,
            _tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_5__.TreeGroupsComponent, _tree_groups_recursive_groups_component__WEBPACK_IMPORTED_MODULE_6__.RecursiveGroupsComponent,
            _list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_4__.ListGroupsComponent,
            //    ZCatTreeComponent, RecursiveZCatTreeSelectComponent
        ],
        exports: [_tree_cat_recursive_tree_cat_component__WEBPACK_IMPORTED_MODULE_0__.RecursiveTreeCatComponent, _tree_cat_tree_cat_component__WEBPACK_IMPORTED_MODULE_1__.TreeCatComponent, _tree_profile_tree_profile_component__WEBPACK_IMPORTED_MODULE_3__.TreeProfileComponent, _tree_groups_recursive_groups_component__WEBPACK_IMPORTED_MODULE_6__.RecursiveGroupsComponent,
            _tree_profile_recursive_profile_component__WEBPACK_IMPORTED_MODULE_2__.RecursiveProfileComponent, _list_groups_list_groups_component__WEBPACK_IMPORTED_MODULE_4__.ListGroupsComponent, _tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_5__.TreeGroupsComponent, _tree_groups_tree_groups_component__WEBPACK_IMPORTED_MODULE_5__.TreeGroupsComponent,
            //    ZCatTreeComponent, RecursiveZCatTreeSelectComponent
        ],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        ]
    })
], TreesModule);



/***/ }),

/***/ 26183:
/*!*************************************************************************!*\
  !*** ./src/app/pages/cat-select-cat-async/cat-select-cat-async.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatSelectCatAsyncPage": () => (/* binding */ CatSelectCatAsyncPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cat_select_cat_async_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-select-cat-async.page.html?ngResource */ 56827);
/* harmony import */ var _cat_select_cat_async_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cat-select-cat-async.page.scss?ngResource */ 12487);
/* harmony import */ var _stylePages_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../stylePages.scss?ngResource */ 90389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _all_components_action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../all-components/action-commons/action-wait/action-wait.component */ 68142);
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../providers/oscal-data/catalog.service */ 91014);
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








let CatSelectCatAsyncPage = class CatSelectCatAsyncPage {
    constructor(theCatService, modalController) {
        this.modalController = modalController;
        this.alertCtrl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController();
        this.userCanLeave = false;
        this.viewTab = 0;
        this.cat = theCatService;
        // this.groups = this.cat.getTreeNodesStat();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.loadTree().
                then(() => {
                this.loading.dismiss();
            });
        });
    }
    loadTree(useRev4 = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.modalController.create({
                component: _all_components_action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_3__.ActionWaitComponent,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // here you can use other vars to see if there are reasons we want to keep user in this page:
            if (!this.userCanLeave) {
                return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
};
CatSelectCatAsyncPage.ctorParameters = () => [
    { type: _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_4__.CatalogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
CatSelectCatAsyncPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'oscal-cat-select-cat-async',
        template: _cat_select_cat_async_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cat_select_cat_async_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _stylePages_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_4__.CatalogService, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController])
], CatSelectCatAsyncPage);



/***/ }),

/***/ 37375:
/*!************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-all-common/tree-styles.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".oscal-prompt-class {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark .treePopUpInfo {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np {\n  font-family: Lato;\n}\n\n.tree ul {\n  margin-left: -27px;\n}\n\n.tree li .node_style {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 50px;\n  margin: 1px;\n  /* 3px makes guides flush */\n  /* width: Can either make staircase or inverse it*/\n  width: 100%;\n  margin-left: -40px;\n}\n\n.tree li {\n  list-style-type: none;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.tree li:first-child {\n  margin-top: 8px;\n}\n\n.tree li:last-child {\n  margin-bottom: 11px;\n}\n\n.tree li::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree li::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -50px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree li:last-child::after {\n  display: none;\n}\n\n.tree li:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree > li:first-child::before {\n  display: none;\n}\n\nul.tree > li:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree li a {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree li a:hover,\n.tree li a:hover + ul li a,\n.tree li a:focus,\n.tree li a:focus + ul li a {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree li a:hover + ul li::after,\n.tree li a:focus + ul li::after,\n.tree li a:hover + ul li::before,\n.tree li a:focus + ul li::before .tree li a:hover + ul::before,\n.tree li a:focus + ul::before .tree li a:hover + ul ul::before,\n.tree li a:focus + ul ul::before {\n  border-color: #000;\n  /*connector color on hover*/\n}\n\n.hidden {\n  display: none;\n}\n\n#tallTextArea {\n  height: 144pt;\n}\n\nion-item .input-wrapper {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item ion-radio.checkbox {\n  margin-right: auto !important;\n}\n\nbody.form-busy {\n  cursor: progress;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBWUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUFhLDJCQUFBO0VBQ2Isa0RBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQVZGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGFBQUE7QUFURjs7QUFZQTtFQUNFLHdCQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSx3QkFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7Ozs7RUFJRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBOzs7Ozs7RUFNRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVJ0Qjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdFO0VBQ0UsNkJBQUE7QUFUSjs7QUFhQTtFQUNFLGdCQUFBO0FBVkYiLCJmaWxlIjoidHJlZS1zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vc2NhbC1wcm9tcHQtY2xhc3Mge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDgsIDgsIDk4KSAxJSwgcmdiKDYsIDYsIDM2KSAxMDAlKTtcbiAgLS1taW4td2lkdGg6IDMwJTtcbn1cblxuLnRyZWVQb3BVcEluZm8ge1xuICAvL2JvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICAtLWJvcmRlcjogMXB4IHJlZCBzb2xpZDtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWluLXdpZHRoOiA1MCU7XG59XG4vLyBEb2VzIG5vdCB3b3JrIGF0IHRoZSBtb21lbnRcbmJvZHkuZGFyayB7XG4gIC50cmVlUG9wVXBJbmZvIHtcbiAgICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogNTAlO1xuICB9XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGluZyBmb3IgdGhlIGN1c3RvbSB0cmVlIHJlbmRlcmluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4OyBcbiAgLy8gUGxheSB3aXRoIHRoaXMgdmFsdWUgdG8gbWFrZSBhIGxlZnQtc2lkZSBvZiB0aGUgdHJlZSBub2RlcyB0byBtb3ZlIFxuICAvLyB2YWx1ZSAwIG1ha2VzIGl0IHRvbyBpbmRlbnRlZFxuICAvLyB2YWx1ZXMgYmVsb3cgKGFib3ZlIGluIGFic29sdXRlKSAhISEgLTMxICEhISBzaGlmdCBjb25uZWN0b3JzIHRvbyBmYXIgdG8gdGhlIGxlZnRcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8vIEtpbGwgbGlzdCBtYXJrZXJzXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogQ2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC8vIE1hcmdpbnMgYXJlIHNwYWNpbmcgZm9yIHRoZSBkcm9wLWRvd24gaXRlbXNcbiAgbWFyZ2luLXRvcDogNXB4OyAgICAvLyBEZWZpbmVzIHRoZSBnYXAgc2l6ZSBiZXR3ZWVuIHRyZWUtbm9kZSBlbGVtZW50cyB2ZXJ0aWNhbGx5XG4gIG1hcmdpbi1ib3R0b206IDVweDsgLy8gRGVmaW5lcyB0aGUgZ2FwIHNpemUgYmV0d2VlbiB0cmVlLW5vZGUgZWxlbWVudHMgdmVydGljYWxseVxuICAvLyBGb3IgRVZFTi1SSUdIVCBzaWRlcyAtIG1ha2UgaXQgMHB4XG4gIG1hcmdpbi1yaWdodDogM3B4OyAvLyAhISFEZWZpbmVzIGhvdyBtdWNoIGluc3RlcCBpcyBmb3IgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHRyZWVcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyZWUgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA4cHg7IC8vIE1ha2VzIHRoZSBnYXAgYmVmb3JlIHRoZSBzdWJncm91cHMgbW9yZSBvYnZpb3VzXG59XG4udHJlZSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDsgLy8gTWFrZXMgdGhlIGdhcCBhZnRlciB0aGUgc3ViZ3JvdXBzIG1vcmUgb2J2aW91c1xufVxuXG4udHJlZSBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtNTBweDsgLy8gbGluZS11cCBvZiB0aGVcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udHJlZSBsaTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTUwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgIzY2NjY2NjtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAwO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vLyBNYWtlIHN1cmUgbm8gZW1wdHkgZ3VpZGUgc3RpY2tzIG91dFxuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLy8gUm91bmQgdXAgdGhlIGxhc3QgdmlzdWFsIGd1aWRlXG4udHJlZSBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cbi8vIEhpZGUgdGhlIHZpc3VhbCBndWlkZSBiZWZvcmUgdGhlIGZpcnN0IGJhci1pdGVtXG51bC50cmVlID4gbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG59XG5cbi50cmVlIGxpIGEge1xuICBib3JkZXI6IDFweCAjNjY2NjY2IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1IDAgMCA1O1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpIGEsXG4udHJlZSBsaSBhOmZvY3VzLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpIGEge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLnRyZWUgbGkgYTpob3ZlciArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCBsaTo6YmVmb3JlIC50cmVlIGxpIGE6aG92ZXIgKyB1bDo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgdWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgLypjb25uZWN0b3IgY29sb3Igb24gaG92ZXIqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhbGxUZXh0QXJlYSB7XG4gIGhlaWdodDogMTQ0cHQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbiAgaW9uLXJhZGlvLmNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5LmZvcm0tYnVzeSB7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG4iXX0= */";

/***/ }),

/***/ 96630:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/all-components/list-groups/list-groups.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "p {\n  font-family: Lato;\n}\n\n.tree ul {\n  margin-left: -29px;\n}\n\n.oscal-prompt-class {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0JBQUE7QUFFRiIsImZpbGUiOiJsaXN0LWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cbi50cmVlIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IC0yOXB4O1xufVxuXG4ub3NjYWwtcHJvbXB0LWNsYXNzIHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjI7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYig4LCA4LCA5OCkgMSUsIHJnYig2LCA2LCAzNikgMTAwJSk7XG4gIC0tbWluLXdpZHRoOiAzMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 47057:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-groups/tree-groups.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".fixed-box {\n  width: 100%;\n  background: #fcfcfc;\n  height: 80px;\n  z-index: 1;\n}\n\n.drop-area {\n  border: 2px dashed #660066;\n  margin: 2px;\n  width: calc(33% - 4px);\n  align-items: center;\n  height: 150px;\n  display: inline-flex;\n  justify-content: center;\n  -webkit-user-select: none;\n          user-select: none;\n  background: #990099;\n}\n\n.item-group {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtZ3JvdXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJ0cmVlLWdyb3Vwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC1ib3h7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAgIGhlaWdodDo4MHB4O1xuICAgIHotaW5kZXg6MTtcbn1cblxuLmRyb3AtYXJlYXtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgIzY2MDA2NjtcbiAgICBtYXJnaW46IDJweDtcbiAgICB3aWR0aDogY2FsYygzMyUgLSA0cHgpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjOTkwMDk5O1xufVxuXG4uaXRlbS1ncm91cHtcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 12487:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/cat-select-cat-async/cat-select-cat-async.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXQtc2VsZWN0LWNhdC1hc3luYy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 51816:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/all-components/list-groups/list-groups.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid style=\"width: 97% !important;\">\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-title>Controls</ion-title>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-title>Current Groups</ion-title>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-title>New Groups</ion-title>\n        <ion-button (click)=\"presentAddGroup()\" color=\"tertiary\">Add New Group\n          <ion-icon slot=\"end\" icon=\"add-circle-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <div *ngFor=\"let item of controlsList\">\n    <ion-row *ngIf=\"item.included\">\n\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>{{ item.label }}</ion-label>\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>{{item.parent.label}}</ion-label>\n        </ion-item>\n      </ion-col>\n\n      <!-- ion-col>\n        <ion-button *ngIf=\"!item.children && item.partsCount>=0\" (click)=\"presentRegroup(item)\">Regroup...\n          <ion-icon slot=\"end\" icon=\"arrow-forward-circle-outline\"></ion-icon> <!-- \"push-outline\" -->\n      <!-- /ion-button>\n      </ion-col -->\n      <ion-col>\n        <ion-item>\n          <ion-label text-wrap>New Group</ion-label>\n          <ion-button (click)=\"presentRegroup(item)\">Re-Group\n            <ion-icon slot=\"end\" icon=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n  </div>\n</ion-grid>\n\n\n<!--\n        <h4>Basic mat-select</h4>\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Favorite food</mat-label>\n          <mat-select>\n            <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n              {{food.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n<ul>\n  <div *ngFor=\"let item of controlsList\">\n      <ion-item *ngIf=\"item.included\"> \n        \n        <ion-label>{{ item.label }}</ion-label>\n        <ion-label>\n          {{item.parent.label}}\n        </ion-label>\n        <ion-button (click)=\"presentPrompt(item)\">Add Group\n          <ion-icon slot=\"end\" icon=\"chatbox-outline\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"!item.children && item.partsCount>=0\" (click)=\"navigateToControl(item)\">Regroup...\n          <ion-icon slot=\"end\" icon=\"enter-outline\"></ion-icon>\n        </ion-button>\n        \n      </ion-item>\n  </div>\n</ul>\n-->";

/***/ }),

/***/ 99127:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-cat/recursive-tree-cat.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<li *ngFor=\"let item of children\">\n    <div #node>\n        <ion-item class=\"node_style\" title=\"{{item.toolTip || item.getNodeToolTip}}\">\n\n            <ion-item (click)=\"closeOpen(item)\" class=\"ion-no-padding\">\n                <ion-icon *ngIf=\"!item.open && item.children\" slot=\"start\" icon=\"add\" class=\"ion-no-padding\">\n                </ion-icon>\n                <ion-icon *ngIf=\"item.open  && item.children\" slot=\"start\" icon=\"arrow-down\" class=\" ion-no-padding\">\n                </ion-icon>\n            </ion-item>\n\n            <ion-label>{{ item.label }}</ion-label>\n            <ion-item>\n                <ion-badge *ngIf=\"item.children && item.partsCount>0 && item.isCatalog() \" color=\"medium\">\n                    {{item.partsCount}} Groups\n                </ion-badge>\n                <ion-badge *ngIf=\"item.children && item.partsCount>0 && item.isGroup()\" color=\"medium\">\n                    {{item.partsCount}} Controls\n                </ion-badge>\n                <ion-badge *ngIf=\"item.partsCount>0 && item.isControl()\" color=\"primary\">{{item.partsCount}} Params\n                </ion-badge>\n            </ion-item>\n\n            <ion-item>\n                <ion-label [color]=\"item.hasSomeIncluded()?'success':'default'\">In</ion-label>\n                <ion-checkbox (click)=\"onJoinNodeCheck(item)\" [(ngModel)]=\"item.included\" color=\"success\">\n                </ion-checkbox>\n                <!-- ion-label [color]=\"item.hasSomeExcluded(item)?'danger':'default'\">Out</ion-label -->\n            </ion-item>\n\n\n            <ion-button (click)=\"presentPrompt(item)\">Info\n                <ion-icon slot=\"end\" icon=\"chatbox-outline\"></ion-icon>\n            </ion-button>\n\n        </ion-item>\n        <!--  [parent]=\"self\" -->\n        <ul recursive-tree-cat *ngIf=\"item.children\" [children]=\"item.children\" [class.hidden]=\"!item.open\"\n            [level]=\"level != undefined ? level + 1 : 0\">\n        </ul>\n    </div>\n</li>";

/***/ }),

/***/ 74251:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-cat/tree-cat.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n<ul class=\"tree\" recursive-tree-cat [children]=\"treeNodes\"></ul>";

/***/ }),

/***/ 33357:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-groups/recursive-groups.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<li *ngFor=\"let item of children\">\n    <ion-item *ngIf=\"item.hasSomeIncluded()\" class=\"node_style\">\n        <!--   *ngIf=\"showInProfile(item)\" *ngIf=\"profileMode === 0 || item.included\"-->\n        <!-- ion-button *ngIf=\"item.children\" ></ion-button style=\"height:50px;margin:1px; padding: 0px; width: 60em; border: 1px solid #ccc;\"-->\n        <ion-icon *ngIf=\"!item.open && item.children\" slot=\"start\" icon=\"add\" (click)=\"closeOpen(item)\">\n        </ion-icon>\n        <ion-icon *ngIf=\"item.open  && item.children\" slot=\"start\" icon=\"arrow-down\" (click)=\"closeOpen(item)\">\n        </ion-icon>\n        &nbsp;\n        <ion-label>{{ item.label }}</ion-label>\n\n        <ion-item>\n            <ion-item>\n                <ion-badge *ngIf=\"item.children && item.partsCount>0 && item.isCatalog() \" color=\"medium\">\n                    {{item.partsCount}} Groups\n                </ion-badge>\n                <ion-badge *ngIf=\"item.children && item.partsCount>0 && item.isGroup()\" color=\"medium\">\n                    {{item.partsCount}} Controls\n                </ion-badge>\n                <ion-badge *ngIf=\"item.partsCount>0 && item.isControl()\" color=\"primary\">{{item.partsCount}} Params\n                </ion-badge>\n                <ion-reorder slot=\"end\"></ion-reorder>\n            </ion-item>\n            <ion-reorder slot=\"end\"></ion-reorder>\n        </ion-item>\n\n        <ion-button (click)=\"presentPrompt(item)\">Modify\n            <ion-icon slot=\"end\" icon=\"chatbox-outline\"></ion-icon>\n        </ion-button>\n        <!-- a class=\"nav-link active\" routerLink=\"['/', 'cat-control', id1,id2]\" routerLinkActive=\"active\"\n                    routerLinkActiveOptions=\"{exact: true}\"></a -->\n        <!--             \n                <ion-button *ngIf=\"!item.children && item.partsCount>=0\" (click)=\"navigateToControl(item)\">Details...\n                    <ion-icon slot=\"end\" icon=\"enter-outline\"></ion-icon>\n                </ion-button>\n    \n                <ion-button  (click)=\"exclude(item)\" color=\"danger\">Out<ion-icon slot=\"end\" icon=\"trash-outline\"></ion-icon>\n                </ion-button> \n                \n            -->\n        <ion-reorder slot=\"end\"></ion-reorder>\n    </ion-item>\n    <ul recursive-tree-profile *ngIf=\"item.hasSomeIncluded()\" xxx=\" && item.children\" [children]=\"item.children\"\n        [parent]=\"item.parent\" [class.hidden]=\"!item.open\" [level]=\"level != undefined ? level + 1 : 0\">\n    </ul>\n</li>";

/***/ }),

/***/ 61805:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-groups/tree-groups.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div slot=\"\" fixed class=\"fixed-box\">\n    <div *ngFor=\"\">\n        <div class=\"drop-area\" #groups>\n            <b>Group 1</b>\n        </div>\n    </div>\n</div>\n<div>\n    <ion-reorder-group disabled=\"false\"></ion-reorder-group>\n    <ul class=\"tree\" recursive-tree-groups [children]=\"this.treeNodes\"></ul>\n\n\n\n</div>";

/***/ }),

/***/ 61738:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-profile/recursive-profile.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<li *ngFor=\"let item of children\">\n\n    <ion-item *ngIf=\"item.hasSomeIncluded()\" class=\"node_style\" class=\"node_style\"\n        title=\"{{item.toolTip || item.getNodeToolTip(item)}}\">\n        <!--   *ngIf=\"showInProfile(item)\" *ngIf=\"profileMode === 0 || item.included\"-->\n        <!-- ion-button *ngIf=\"item.children\" ></ion-button style=\"height:50px;margin:1px; padding: 0px; width: 60em; border: 1px solid #ccc;\"-->\n        <ion-item (click)=\"closeOpen(item)\" class=\"ion-no-padding\">\n            <ion-icon *ngIf=\"!item.open && item.children\" slot=\"start\" icon=\"add\" (click)=\"closeOpen(item)\">\n            </ion-icon>\n            <ion-icon *ngIf=\"item.open  && item.children\" slot=\"start\" icon=\"arrow-down\" (click)=\"closeOpen(item)\">\n            </ion-icon>\n        </ion-item>\n        &nbsp;\n        <ion-label>{{ item.label }}</ion-label>\n\n        <ion-item>\n            <ion-item>\n                <ion-badge *ngIf=\"item.children && item.partsCount>0 && item.isCatalog() \" color=\"medium\">\n                    {{item.partsCount}} Groups\n                </ion-badge>\n                <ion-badge *ngIf=\"item.children && item.partsCount>0 && item.isGroup()\" color=\"medium\">\n                    {{item.partsCount}} Controls\n                </ion-badge>\n                <ion-badge *ngIf=\"item.partsCount>0 && item.isControl()\" color=\"primary\">{{item.partsCount}} Params\n                </ion-badge>\n            </ion-item>\n        </ion-item>\n\n        <ion-button (click)=\"presentPrompt(item)\">Modify\n            <ion-icon slot=\"end\" icon=\"chatbox-outline\"></ion-icon>\n        </ion-button>\n        <!-- a class=\"nav-link active\" routerLink=\"['/', 'cat-control', id1,id2]\" routerLinkActive=\"active\"\n                routerLinkActiveOptions=\"{exact: true}\"></a -->\n        <!--             \n            <ion-button *ngIf=\"!item.children && item.partsCount>=0\" (click)=\"navigateToControl(item)\">Details...\n                <ion-icon slot=\"end\" icon=\"enter-outline\"></ion-icon>\n            </ion-button>\n\n            <ion-button  (click)=\"exclude(item)\" color=\"danger\">Out<ion-icon slot=\"end\" icon=\"trash-outline\"></ion-icon>\n            </ion-button> \n        -->\n\n    </ion-item>\n\n    <ul recursive-tree-profile *ngIf=\"item.hasSomeIncluded()\" xxx=\" && item.children\" [children]=\"item.children\"\n        [parent]=\"item.parent\" [class.hidden]=\"!item.open\" [level]=\"level != undefined ? level + 1 : 0\">\n    </ul>\n</li>";

/***/ }),

/***/ 36010:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/all-components/tree-profile/tree-profile.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<div *ngIf=\"treeNodes\">\n    <ul class=\"tree\" recursive-tree-profile [children]=\"treeNodes\"></ul>\n</div>";

/***/ }),

/***/ 56827:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/cat-select-cat-async/cat-select-cat-async.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>All Controls\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-title>&nbsp;&nbsp;Select Controls</ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          Select controls to be included in profile.\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <oscal-nav-cat></oscal-nav-cat>\n  <oscal-select-baseline></oscal-select-baseline>\n  <!-- \n    <div class=\"content\">\n      <div>\n        <ion-item>\n          <ion-button>\n            <ion-icon name=\"checkmark-outline\"></ion-icon>&nbsp;Select Profile\n          </ion-button>\n          <ion-button>\n            <ion-icon name=\"cut-outline\"></ion-icon>&nbsp;Use Profile\n          </ion-button>\n        </ion-item>\n      </div>\n    </div>\n  -->\n  <div *ngIf=\" theTree$ | async as theTree\">\n    <oscal-tree-cat [treeNodes]=\"theTree\" [theCat]=\"cat\"></oscal-tree-cat>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_all-components_trees_module_ts-src_app_pages_cat-select-cat-async_cat-s-a9215d.js.map