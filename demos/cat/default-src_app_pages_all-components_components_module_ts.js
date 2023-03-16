"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_all-components_components_module_ts"],{

/***/ 5160:
/*!*********************************************************!*\
  !*** ./src/app/interfaces/app-state/app-state-types.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoringMode": () => (/* binding */ AuthoringMode)
/* harmony export */ });
var AuthoringMode;
(function (AuthoringMode) {
    AuthoringMode[AuthoringMode["ValueNotSet"] = 0] = "ValueNotSet";
    AuthoringMode[AuthoringMode["AuthorProfileFromSample"] = 1] = "AuthorProfileFromSample";
    AuthoringMode[AuthoringMode["AuthorProfileFromMultiple"] = 2] = "AuthorProfileFromMultiple";
    AuthoringMode[AuthoringMode["AuthorNewBaseline"] = 3] = "AuthorNewBaseline";
    AuthoringMode[AuthoringMode["AuthorNewCatalog"] = 4] = "AuthorNewCatalog";
})(AuthoringMode || (AuthoringMode = {}));


/***/ }),

/***/ 8035:
/*!*****************************************************************!*\
  !*** ./src/app/interfaces/oscal-types/oscal-catalog-factory.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OscalCatalogEmpties": () => (/* binding */ OscalCatalogEmpties)
/* harmony export */ });
/* harmony import */ var _oscal_catalog_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oscal-catalog.types */ 8358);
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

class OscalCatalogEmpties {
    static getEmptyControl() {
        const emptyControl = {
            title: '',
            id: '',
            class: '',
            controls: new Array(),
            links: new Array(),
            params: new Array(),
            parts: new Array(),
            props: new Array(),
        };
        return emptyControl;
    }
    static getEmptyControlGroup() {
        const emptyControlGroup = {
            title: '',
            id: '',
            class: '',
            controls: new Array(),
            links: new Array(),
            params: new Array(),
            parts: new Array(),
            props: new Array(),
            groups: new Array(),
        };
        return emptyControlGroup;
    }
    static getEmptyPart() {
        const emptyPart = {
            id: '',
            ns: '',
            name: '',
            class: '',
            prose: '',
            title: '',
            links: new Array(),
            parts: new Array(),
            props: new Array(),
        };
        return emptyPart;
    }
    static getEmptyParameter() {
        const emptyPart = {
            class: '',
            dependsOn: '',
            id: '',
            label: '',
            remarks: '',
            usage: '',
            values: Array(),
            guidelines: new Array(),
            constraints: new Array(),
            links: new Array(),
            props: new Array(),
            select: OscalCatalogEmpties.getEmptySelection(),
        };
        return emptyPart;
    }
    static getEmptySelection() {
        const emptySelection = {
            choice: Array(),
            howMany: _oscal_catalog_types__WEBPACK_IMPORTED_MODULE_0__.ParameterCardinality.One
        };
        return emptySelection;
    }
    static getEmptyResponsibleParty() {
        const emptyRP = {
            partyUuids: new Array(),
            roleID: '',
            props: undefined,
            remarks: undefined,
            links: undefined,
        };
        return emptyRP;
    }
    static getEmptyString() {
        return '';
    }
    static getEmptyPartyExternalIdentifier() {
        const emptyID = {
            id: '',
            scheme: '',
        };
        return emptyID;
    }
    static getEmptyPhoneNumber() {
        const emptyPhone = {
            number: '',
            type: '',
        };
        return emptyPhone;
    }
    /**
     * Produces empty Person-Organization or Party POoP
     * @static
     * @param {string} [typeName]
     * @returns {PartyOrganizationOrPerson}
     * @memberof OscalCatalogEmpties
     */
    static getEmptyPOoP(typeName) {
        console.log(`T-Name = ${typeName}`);
        const emptyPOoP = {
            name: '',
            shortName: '',
            uuid: '',
            type: (typeName === 'Person' ? _oscal_catalog_types__WEBPACK_IMPORTED_MODULE_0__.PartyType.Person : _oscal_catalog_types__WEBPACK_IMPORTED_MODULE_0__.PartyType.Organization),
            addresses: new Array(),
            emailAddresses: new Array(),
            externalIDS: new Array(),
            links: new Array(),
            locationUuids: Array(),
            memberOfOrganizations: Array(),
            props: new Array(),
            remarks: '',
            telephoneNumbers: new Array(),
            // annotations: new Array<Annotation>(),//  Removed past Apr-6-2021
        };
        // Address push enable for for testing how info flows into address
        /*
          emptyPOoP.addresses.push(
              {
                city: 'New York',
                country: 'US',
                addrLines: ['One Line', 'Two Intersection'], // postalAddress: ['One', 'Two'], // Pre Apr-6
                postalCode: '00000-0000',
                state: 'OK',
                type: 'Some',
              });
          */
        return emptyPOoP;
    }
    static getEmptyAddress() {
        const emptyAddress = {
            city: '',
            country: '',
            addrLines: ['', ''],
            postalCode: '',
            state: '',
            type: '',
        };
        /*
        const emptyAddress: Address = {
        city: 'New Village',
        country: 'US',
        addrLines: ['SuperMan Inc0',
                    '987654321 Krypton Avenue',
                    'Extra Info on the Block 1234',
                    'Some More Info'],  // new Array<string>(), //
        postalCode: '74547',
        state: 'OK',
        type: 'Special Type',
        };
        */
        return emptyAddress;
    }
    /**
     * Generates empty document id
     *
     * @static
     * @returns {DocumentIdentifier}
     * @memberof OscalCatalogEmpties
     */
    static getEmptyDocID() {
        const emptyDocId = {
            identifier: '',
            scheme: '',
        };
        return emptyDocId;
    }
    /**
     * Generates empty Property for Catalog...
     *
     * @static
     * @returns {Property}
     * @memberof OscalCatalogEmpties
     */
    static getEmptyProperty() {
        const emptyProperty = {
            class: undefined,
            name: '',
            ns: undefined,
            remarks: undefined,
            uuid: undefined,
            value: '',
        };
        return emptyProperty;
    }
    /**
     * Returns empty Link for Catalog
     *
     * @static
     * @returns {Link}
     * @memberof OscalCatalogEmpties
     */
    static getEmptyLink() {
        const emptyLink = {
            href: '',
            mediaType: undefined,
            rel: undefined,
            text: undefined,
        };
        return emptyLink;
    }
    static getEmptyLocation() {
        const emptyLocation = {
            address: OscalCatalogEmpties.getEmptyAddress(),
            emailAddresses: new Array(),
            links: new Array(),
            props: new Array(),
            remarks: '',
            telephoneNumbers: new Array(),
            title: '',
            urls: new Array(),
            uuid: '',
        };
        return emptyLocation;
    }
    static getEmptyRole() {
        const emptyRole = {
            description: '',
            id: '',
            links: new Array(),
            props: new Array(),
            remarks: '',
            shortName: '',
            title: '',
        };
        return emptyRole;
    }
    static getEmptyTelephoneNumber() {
        const emptyTelephoneNumber = {
            number: '',
            type: '',
        };
        return emptyTelephoneNumber;
    }
}


/***/ }),

/***/ 3765:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-all-common/cat-the-base/cat-the-base.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatTheBaseComponent": () => (/* binding */ CatTheBaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/providers/app-state/state-nav-cat/state-session-data.service */ 5667);
/* harmony import */ var src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/oscal-files/known-files.service */ 8958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







class CatTheBaseComponent {
    constructor(rootKnownFiles, rootSessionService, rootAlertControl) {
        this.rootKnownFiles = rootKnownFiles;
        this.rootSessionService = rootSessionService;
        this.rootAlertControl = rootAlertControl;
        this.appSessionService = rootSessionService;
        this.oscalFiles = rootKnownFiles.getAllKnownFiles();
        this.activeIndex = this.rootKnownFiles.getActiveIndex();
        this.activeIndex = -1;
        this.readSavedBriefs();
        this.readActiveBrief();
    }
    ngOnInit() {
        this.readSavedBriefs();
        this.readActiveBrief();
    }
    /**
     * Read briefs from 'OC:Active-Briefs' (NamedSessionNodes.ACTIVE_BRIEF) for the UI & Session
     * @memberof AuthorBeginComponent
     */
    readActiveBrief(callback = undefined) {
        const isInBrief = true;
        // Read the persisted Active-Brief
        // console.log(`Reading Active Brief:`)
        if (this.appSessionService.isKeyValuePresent(src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.NamedSessionNodes.ACTIVE_BRIEF)) {
            this.activeBriefPromise = this.appSessionService
                .getKeyValueObject(src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.NamedSessionNodes.ACTIVE_BRIEF);
            this.activeBriefPromise.then((savedValue) => {
                if (savedValue) {
                    this.activeBrief = savedValue;
                    this.readCurrentSession(isInBrief);
                    if (!!callback) {
                        callback(savedValue);
                    }
                    // this.radioGroup.value = this.markActiveBrief();
                }
                else {
                    this.activeBrief = undefined;
                    console.log(`!!! Invalidated  Brief !!!`);
                }
                console.log(`Active Brief:`);
                console.log(this.activeBrief);
                if (this.activeBrief) {
                    console.log(this.activeBrief.uuid);
                }
            });
        }
    }
    readCurrentSession(isFromBrief = false) {
        // First make sure that active brief is read
        if ((!this.activeBrief && !this.activeBriefPromise) && !isFromBrief) {
            this.readActiveBrief();
        }
        const id = this.activeBrief.sessionDataName;
        this.activeSession = this.appSessionService.getActiveSession();
        if (!!this.activeSession) {
        }
    }
    /**
     * Read briefs from 'OC:All-Briefs' (NamedSessionNodes.SESSION_BRIEFS) for the UI & Session
     * @memberof AuthorBeginComponent
     */
    readSavedBriefs() {
        // Read the previously pulled-in Cats from Session
        if (!!src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.CurrentSessionData.savedBriefs) {
            this.savedWork = src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.CurrentSessionData.savedBriefs;
        }
        else {
            if (this.rootSessionService.isKeyValuePresent(src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.NamedSessionNodes.SESSION_BRIEFS)) {
                this.savedWorkPromise = this.rootSessionService
                    .getKeyValueObject(src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.NamedSessionNodes.SESSION_BRIEFS);
                this.savedWorkPromise.then((savedValue) => {
                    if (savedValue && Array.isArray(savedValue) && savedValue.length > 0) {
                        this.savedWork = savedValue;
                    }
                    else {
                        this.savedWork = Array();
                    }
                    // console.log(`Saved Work:`)
                    // console.log(this.savedWork);
                });
            }
        }
    }
    /**
     * Read briefs from 'OC:Active-Briefs' (NamedSessionNodes.ACTIVE_BRIEF) for the UI & Session
     * @memberof AuthorBeginComponent
     */
    readActiveBriefAuthoring() {
        // Read the persisted Active-Brief
        if (this.rootSessionService.isKeyValuePresent(src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.NamedSessionNodes.ACTIVE_BRIEF)) {
            this.activeBriefPromise = this.rootSessionService
                .getKeyValueObject(src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.NamedSessionNodes.ACTIVE_BRIEF);
            this.activeBriefPromise.then((savedValue) => {
                if (savedValue) {
                    this.activeBrief = savedValue;
                    // this.radioGroup.value = this.markActiveBrief();
                }
                else {
                    this.activeBrief = undefined;
                }
                // console.log(`Active Brief:`)
                // console.log(this.activeBrief);
            });
        }
    }
}
CatTheBaseComponent.ɵfac = function CatTheBaseComponent_Factory(t) { return new (t || CatTheBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_1__.KnownOscalFilesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_0__.CurrentSessionData), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController)); };
CatTheBaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CatTheBaseComponent, selectors: [["app-cat-the-base"]], decls: 2, vars: 0, template: function CatTheBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " cat-the-base works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXQtdGhlLWJhc2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6426:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-ancestor-base/action-ancestor-base.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionAncestorBaseComponent": () => (/* binding */ ActionAncestorBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ 2535);
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





/**
 * The primary Base-Component for generalized handling of the
 *  Form Controls/Groups/Arrays and mapping them to TypeScript
 *  Entities with name-field-array mapping in an unified way
 * @export
 * @class ActionAncestorBaseComponent
 * @implements {OnInit}
 */
class ActionAncestorBaseComponent {
    constructor(formBuilder, parentFormDirect) {
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.label4Optional = ' (Optional)';
        this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.saveTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.defaultFormAnchor = 'entries';
        this.inputsMap = new Map();
    }
    ngOnInit() {
        if (!this.ID) { // If the name for entry ID in not good, generate distinct one with UUIDv4
            this.ID = `id_${(0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])().replace('-', '_')}`;
        }
        this.localForm = this.parentFormDirect.form;
        // if (!this.inputName && this.defaultSingleTitle) {
        //   this.inputName = this.defaultSingleTitle;
        // } else if (!this.defaultSingleTitle) {
        //   this.defaultSingleTitle = 'Entry';
        // } else {
        //   this.inputName = 'Entry';
        // }
    }
    addFormGroup(theSubForm) {
        this.localForm.addControl(this.ID, theSubForm);
    }
    getEntityName() {
        return !!this.entityName ? this.entityName : 'Entity';
    }
    getFormTitle() {
        const elementTitle = (!!this.inputName) ? this.inputName : this.defaultSingleTitle;
        const formArray = this.subForm.get('entries');
        const count = formArray.length;
        // if (count > 0) {
        //   console.log(`FormArray-Len = ${count} Elem=${elementTitle}`);
        // }
        const prefix = ((count > 0) ? `` : `No`);
        const listTitle = (!this.listTitle && this.defaultPluralTitle) ?
            this.defaultPluralTitle :
            (this.listTitle) ? this.listTitle : 'entities';
        const countedForm = (count <= 1) ? elementTitle : listTitle; // Plural Suffix
        const ending = ((count >= 1 && !this.singleMode) ? `[${count} ${countedForm}]` : '');
        const title = (!!this.parentName ?
            `${prefix} ${listTitle} for ${this.parentName} ${ending}` :
            `${prefix} ${listTitle} for ${this.parentEntity} ${ending}`);
        return title.concat(' ', this.isArrayOptionalText || (this.isArrayOptional ? '(Optional)' : ''));
    }
    getInputName() {
        return this.inputName || this.defaultSingleTitle;
    }
    getActionFormTitle() {
        const acting = this.actionName.startsWith('Edit') ? 'Editing' : 'Adding';
        return acting.concat(' ', this.listTitle);
    }
    getSaveButtonTitle() {
        return (!!this.listTitle) ? `Save ${this.listTitle}` : `Save Info`;
    }
    hasArrayEntries() {
        return this.arrayEntriesLength() > 0;
        // const currentEntries = this.subArray.get('entries') as FormArray;
        // return (currentEntries.length > 0);
    }
    arrayEntriesLength() {
        const currentEntries = this.subArray.get('entries');
        return currentEntries.length;
    }
    displayItemTitle() {
        return (!this.hideTitle && !this.singleMode);
    }
    onAssignUUID() {
        this.localForm.patchValue({ uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    }
    getEmailValidator() {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email;
    }
    assignDefaultIfNeeded(targetVar, defaultValue) {
        if (!targetVar) {
            targetVar = defaultValue;
        }
    }
    getNewFormGroupByKey(data) {
        const preparedGroup = {};
        for (const [key, value] of this.inputsMap) {
            console.log(`Key=${key}, Val=${value}`);
            preparedGroup[key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl((data ? data[key] : ''), (value.validateAs ? value.validateAs : []));
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup(preparedGroup);
    }
    // getGroupDataByKey<Type>(formGroup: FormGroup): Type {
    // }
    getNewFormGroupByFieldToMap(data) {
        const preparedGroup = {};
        // // Debugging logging
        // for (const [key, value] of this.inputsMap) {
        //   console.log(key);
        //   console.log(value);
        // }
        for (const [key, value] of this.inputsMap) {
            //console.log(`Key=${key}, Val=${value}`);
            preparedGroup[value.fieldToMap] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({
                value: (data ? data[value.fieldToMap] : ''),
                disabled: value.isPreset,
            }, (value.validateAs ? value.validateAs : []));
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup(preparedGroup);
    }
    /**
     * Assigns newly generated UUID to the field if it's properly referenced
     *
     * @param {number} an index of the FormGroup in the array of inputs
     * @param {string} the form anchor name. If empty, defaults to 'entries' or this.defaultFormAnchor value
     * @memberof ActionAncestorBaseComponent
     */
    onAssignArrayElementUUID(arrayIndex, formAnchor) {
        const groupAnchor = ((!formAnchor) ? this.defaultFormAnchor : formAnchor);
        const formGroupData = this.subForm.get(groupAnchor).at(arrayIndex);
        formGroupData.patchValue({ uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    }
    onAssignGroupElementUUID() {
        console.log(`Anchor=${this.defaultFormAnchor}\n subForm=${this.subForm.get('entries')}`);
        const formGroupData = (this.subForm.get('entries')); // .get('entries')
        // const dataField = formGroupData.get('uuid') as FormControl;
        // console.log(`DF=${dataField.get('uuid')}`);
        const newUUID = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
        formGroupData.patchValue({ uuid: newUUID });
    }
    getUpdatedElementByFieldToMap(originalData, arrayIndex = 0, formAnchor) {
        // const updatedData: Type;
        // Get the anchor of the mapped array from the form
        const thisFormAnchor = !formAnchor ? this.defaultFormAnchor : formAnchor;
        // Get the form data location
        console.log(`Anchor=${thisFormAnchor}`);
        const formData = this.subForm.get(thisFormAnchor).at(arrayIndex);
        let nonEmptyCounter = 0;
        // Loop over the particular instance inputs map
        for (const [key, value] of this.inputsMap) {
            const oKey = value.fieldToMap;
            const theValue = formData.get(value.fieldToMap).value;
            if (!!theValue) {
                nonEmptyCounter++;
            }
            // TODO: Figure out debugging strategy later
            // console.log(`oKey:${oKey}\t Form:${theValue}`);
            originalData[oKey] = theValue;
        }
        if (nonEmptyCounter > 0) {
            console.log(`Returning non-empty`);
            return originalData;
        }
        else {
            console.log(`!!!Nothing`);
            return undefined;
        }
    }
    getUpdatedElementByKey(originalData, arrayIndex = 0, formAnchor) {
        // const updatedData: Type;
        // Get the anchor of the mapped array from the form
        const thisFormAnchor = !formAnchor ? this.defaultFormAnchor : formAnchor;
        // Get the form data location
        const formData = this.subForm.get(thisFormAnchor).at(arrayIndex);
        let nonEmptyCounter = 0;
        // Loop over the particular instance inputs map
        for (const [key, value] of this.inputsMap) {
            const oKey = value.fieldToMap;
            const theValue = formData.get(key).value;
            // TODO: Figure out debugging strategy later
            // console.log(`oKey:${oKey}\t Form:${theValue}`);
            if (!!theValue) {
                nonEmptyCounter++;
            }
            originalData[oKey] = theValue;
        }
        if (nonEmptyCounter > 0) {
            return originalData;
        }
        else {
            return undefined;
        }
    }
}
ActionAncestorBaseComponent.ɵfac = function ActionAncestorBaseComponent_Factory(t) { return new (t || ActionAncestorBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective)); };
ActionAncestorBaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionAncestorBaseComponent, selectors: [["oscal-action-ancestor-base"]], inputs: { ID: "ID", parentEntity: "parentEntity", parentName: "parentName", entityName: "entityName", actionName: "actionName", iconName: "iconName", listTitle: "listTitle", inputName: "inputName", singleMode: "singleMode", hideTitle: "hideTitle", showAddCancelButtons: "showAddCancelButtons", hideAddElementButton: "hideAddElementButton", validateAs: "validateAs", isArrayOptional: "isArrayOptional", isArrayOptionalText: "isArrayOptionalText" }, outputs: { closeTab: "closeTab", saveTab: "saveTab" }, decls: 2, vars: 0, template: function ActionAncestorBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " action-ancestor-base works! It is an un-inheritable markup file\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYW5jZXN0b3ItYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9102:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-ancestor-base/action-base-simple-array-form.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionAncestorSimpleArrayComponent": () => (/* binding */ ActionAncestorSimpleArrayComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-ancestor-base.component */ 6426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





// The most abstract entity manipulation aggregation for entities with UI
// Unfortunately, UI can not be inherited, so, implementation has to be done 
// !!!!! at the inheritance point !!!!
class ActionAncestorSimpleArrayComponent extends _action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_0__.ActionAncestorBaseComponent {
    constructor(formBuilder, parentFormDirect) {
        // ==> The mandated super call
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap = new Map();
    }
    ngOnInit() {
        super.ngOnInit();
    }
    onRemoveElement(i) {
        this.subArray.controls.splice(i, 1);
    }
    onAppendElement() {
        if (!this.singleMode) {
            this.subArray.controls.push(this.getNewFormGroup());
        }
    }
    hasArrayEntries() {
        return this.arrayEntriesLength() > 0;
        // const currentEntries = this.subArray.get('entries') as FormArray;
        // return (currentEntries.length > 0);
    }
    arrayEntriesLength() {
        const currentEntries = this.subArray.get('entries');
        return currentEntries.length;
    }
    displayItemTitle() {
        return (!this.hideTitle && !this.singleMode);
    }
    onAssignUUID() {
        this.localForm.patchValue({ uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])() });
    }
    getEmailValidator() {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email;
    }
    getToolTip(theTip) {
        return !!theTip ? theTip : `${this.inputName} for ${this.parentName || this.parentEntity} should be entered here`;
    }
    isOptional(info) {
        return (info.requiredField === undefined || info.requiredField === null || !info.requiredField);
    }
    getControlsArrayByKey(dataArray) {
        const controls = new Array();
        if (dataArray && dataArray.length > 0) {
            dataArray.forEach((dataEntry, idx) => {
                controls.push(this.getNewFormGroupByKey(dataEntry));
            });
        }
        this.subArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray(controls);
        return this.subArray;
    }
    getControlsArrayByFieldToMap(dataArray) {
        const controls = new Array();
        if (dataArray && dataArray.length > 0) {
            dataArray.forEach((dataEntry, idx) => {
                controls.push(this.getNewFormGroupByFieldToMap(dataEntry));
            });
        }
        this.subArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray(controls);
        return this.subArray;
    }
    /**
     * The older style of implementing UI
     * Use for the inherited forms where order of the controls in UI does not matter
     * KEY would define the mapping&order in each UI and data object - and that's IT!
     *
     * @template Type - the type of the Cat or Pro UI is supposed to work on
     * E.g. Control|Part|Link ... etc
     * @param {() => Type} emptyTypeMaker An empty object creation method
     * Usually it is from OscalCatalogEmpties class, but can also be local (may lead to inconsistencies)
     * @returns {Array<Type>} The array of the objects CRUD-ed in UI
     * @memberof ActionAncestorSimpleArrayComponent
     */
    getResultArrayByKey(emptyTypeMaker) {
        const updatedArray = new Array();
        this.subArray.controls.forEach((group, idx) => {
            const data = this.getUpdatedElementByKey(emptyTypeMaker(), idx);
            if (!!data) {
                updatedArray.push(data);
            }
        });
        if (updatedArray.length > 0) {
            return updatedArray;
        }
        else {
            return undefined;
        }
    }
    /**
     * The newer much more flexible style of implementing UI.
     * Use for the any inherited
     * The fieldToMap defines the mapping, while KEY defines order
     * in each UI and data object - and that's decouples UI order from field name
     *
     * @template Type the type of the Cat or Pro UI is supposed to work on
     * E.g. Control|Part|Link ... etc
     * @param {() => Type} emptyTypeMaker An empty object creation method
     * Usually it is from OscalCatalogEmpties class, but can also be local (may lead to inconsistencies)
     * @returns {Array<Type>} The array of the objects CRUD-ed in UI
     * @memberof ActionAncestorSimpleArrayComponent
     */
    getResultArrayByFieldToMap(emptyTypeMaker) {
        const updatedArray = new Array();
        this.subArray.controls.forEach((group, idx) => {
            const data = this.getUpdatedElementByFieldToMap(emptyTypeMaker(), idx);
            if (!!data) {
                updatedArray.push(data);
            }
        });
        if (updatedArray.length > 0) {
            return updatedArray;
        }
        else {
            return undefined;
        }
    }
    /**
     * Generic LOOSE-ALL data close for the cases
     * when the close method was not provided in child
     * @memberof ActionAncestorSimpleArrayComponent
     */
    onCloseAnyTab() {
        if (this.closeTab) {
            this.closeTab.emit();
        }
        else {
            console.log(`Structural Error!: The closeTab Property was not provided !!!!`);
        }
    }
    onSaveTabScalar() {
        if (this.closeTab) {
            this.closeTab.emit();
        }
    }
    onSaveTabArray() {
        if (this.closeTab) {
            this.closeTab.emit();
        }
    }
}
ActionAncestorSimpleArrayComponent.ɵfac = function ActionAncestorSimpleArrayComponent_Factory(t) { return new (t || ActionAncestorSimpleArrayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective)); };
ActionAncestorSimpleArrayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ActionAncestorSimpleArrayComponent, selectors: [["oscal-action-ancestor-base"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, template: function ActionAncestorSimpleArrayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " action-ancestor-base works! It is an un-inheritable markup file\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYW5jZXN0b3ItYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8434:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-addresses/action-array-addresses.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayAddressesComponent": () => (/* binding */ ArrayAddressesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../providers/logging/log-manager.service */ 3616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








function ArrayAddressesComponent_form_1_ion_text_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getListTitle(), " ");
} }
function ArrayAddressesComponent_form_1_ion_text_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getAddressTitle(), " ");
} }
function ArrayAddressesComponent_form_1_div_4_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-buttons", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayAddressesComponent_form_1_div_4_div_1_div_2_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r14.onRemoveAddress(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Remove Address ", idx_r7 + 1, "/", ctx_r8.addressesGroup.get("addressArray")["controls"].length, " ");
} }
function ArrayAddressesComponent_form_1_div_4_div_1_div_6_ion_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r18.addressTitle, " ");
} }
function ArrayAddressesComponent_form_1_div_4_div_1_div_6_ion_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " New Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ArrayAddressesComponent_form_1_div_4_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayAddressesComponent_form_1_div_4_div_1_div_6_ion_label_1_Template, 2, 1, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArrayAddressesComponent_form_1_div_4_div_1_div_6_ion_label_2_Template, 2, 0, "ion-label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!ctx_r9.addressTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!!ctx_r9.addressTitle);
} }
function ArrayAddressesComponent_form_1_div_4_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-title", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Address ", idx_r7 + 1, " ");
} }
function ArrayAddressesComponent_form_1_div_4_div_1_ion_buttons_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayAddressesComponent_form_1_div_4_div_1_ion_buttons_8_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r21.onRemoveAddress(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Remove Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ArrayAddressesComponent_form_1_div_4_div_1_ion_buttons_28_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayAddressesComponent_form_1_div_4_div_1_ion_buttons_28_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r24.onAddExtraLine(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Add Extra Line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ArrayAddressesComponent_form_1_div_4_div_1_div_30_ion_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayAddressesComponent_form_1_div_4_div_1_div_30_ion_button_8_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r30.onAddExtraLine(idx_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Add Extra Line ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ArrayAddressesComponent_form_1_div_4_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-buttons", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ArrayAddressesComponent_form_1_div_4_div_1_div_30_ion_button_8_Template, 3, 0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayAddressesComponent_form_1_div_4_div_1_div_30_Template_ion_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const idxExtra_r28 = restoredCtx.index; const idx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r33.onRemoveExtraLine(idx_r7, idxExtra_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idxExtra_r28 = ctx.index;
    const addressInstance_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", idxExtra_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Extra Line ", idxExtra_r28 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", addressInstance_r6.get("extraLines")["controls"].length === idxExtra_r28 + 1);
} }
function ArrayAddressesComponent_form_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArrayAddressesComponent_form_1_div_4_div_1_div_2_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ArrayAddressesComponent_form_1_div_4_div_1_div_6_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ArrayAddressesComponent_form_1_div_4_div_1_div_7_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ArrayAddressesComponent_form_1_div_4_div_1_ion_buttons_8_Template, 4, 0, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Address Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Organization/Person/Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Street/Building/Office/Apartment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ion-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ArrayAddressesComponent_form_1_div_4_div_1_ion_buttons_28_Template, 4, 0, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ArrayAddressesComponent_form_1_div_4_div_1_div_30_Template, 12, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "City Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "State/Province/Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Postal (ZIP) Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const addressInstance_r6 = ctx.$implicit;
    const idx_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", idx_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.isSingleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.hideTitle && ctx_r5.addressTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.hideTitle && !ctx_r5.addressTitle && !ctx_r5.isSingleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.toRemoveAddress && idx_r7 >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.hasExtraLines(idx_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", addressInstance_r6.get("extraLines")["controls"]);
} }
function ArrayAddressesComponent_form_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayAddressesComponent_form_1_div_4_div_1_Template, 54, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.addressesGroup.get("addressArray")["controls"]);
} }
function ArrayAddressesComponent_form_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-buttons", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayAddressesComponent_form_1_div_5_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r37.onAddAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Add New Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ArrayAddressesComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ArrayAddressesComponent_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.submitAddress(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArrayAddressesComponent_form_1_ion_text_2_Template, 3, 1, "ion-text", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArrayAddressesComponent_form_1_ion_text_3_Template, 3, 1, "ion-text", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ArrayAddressesComponent_form_1_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ArrayAddressesComponent_form_1_div_5_Template, 5, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.addressesGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isSingleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSingleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.addressesGroup.get("addressArray")["controls"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isSingleMode);
} }
class ArrayAddressesComponent {
    /*export interface Address {
      type?: string;
      postalAddress?: string[];
      city?: string;
      state?: string;
      postalCode?: string;
      country?: string;
  }*/
    constructor(formBuilder, LMS, parentFormDirect) {
        this.formBuilder = formBuilder;
        this.LMS = LMS;
        this.parentFormDirect = parentFormDirect;
        this.addressTo = '';
        this.addressTitle = '';
        this.streetAddress = '';
        this.toRemoveAddress = true;
    }
    ngOnInit() {
        // this.addressesGroup.setControl('addressArray', this.addressListFields);
        if (!this.addressList) {
            this.addressList = new Array();
            this.addressList.push(this.getEmptyAddress());
        }
        console.log(this.addressList);
        if (this.addressList && this.addressList.length > 0) {
            this.addressList.forEach((e, idx) => {
                console.log(`${idx}. A[${idx}] = ${e}`);
            });
        }
        else {
            console.log(`No Elements`);
        }
        this.addressFormList = this.formBuilder.array(this.initAddressList(this.addressList));
        this.addressesGroup = this.formBuilder.group({
            addressArray: this.addressFormList,
        });
    }
    ngAfterViewInit() {
        // this.addressesFields.setControl('addressArray', this.addressListFields);
    }
    initAddressList(list) {
        const localList = list || new Array();
        const array = new Array();
        console.log(`LocalList=${localList}`);
        localList.forEach((addr, index, arr) => {
            console.log(`City:${addr.city}; Country: ${addr.country}`);
            const group = this.getAddressGroup(addr);
            array.push(group);
        }); // end For-Each
        return array;
    }
    getAddressGroup(theAddress = null) {
        const addr = theAddress || this.getEmptyAddress();
        const addrTo = (!!addr && !!addr.addrLines && addr.addrLines.length >= 1) ? addr.addrLines[0] : '';
        const streetAddr = (!!addr && !!addr.addrLines && addr.addrLines.length >= 2) ? addr.addrLines[1] : '';
        const lines = (!!addr && !!addr.addrLines && addr.addrLines.length >= 3) ? addr.addrLines.slice(2) : new Array();
        const addressParentName = this.addressParentName || 'Address Info';
        const group = this.formBuilder.group({
            type: [addr.type,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]),
            ],
            addressTo: [addrTo,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]),
            ],
            streetAddress: [streetAddr,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]),
            ],
            city: [addr.city,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]),
            ],
            state: [addr.state,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]),
            ],
            postalCode: [addr.postalCode,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]),
            ],
            country: [addr.country,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(180)]),
            ],
            extraLines: this.formBuilder.array(this.getLinesArray(lines)),
        });
        return group;
    }
    getLinesArray(lines) {
        const controlArray = new Array();
        lines.forEach((theLine, index) => {
            // groupObject['email_' + index.toString()] = [element, Validators.email];
            controlArray.push(this.formBuilder.group({ extraLine: [theLine, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }));
            // console.log(`Extra-Line #${index}: ${theLine}`);
        });
        return controlArray;
    }
    onAddExtraLine(addressIndex, itemIndex = 0) {
        // this.addressData.addrLines.push(theValue);
        // const topItems = this.addressFormList as FormArray; // Dig
        // console.log(`A-Index:${addressIndex}; L-Index:${itemIndex};`);
        const currentAddress = this.addressFormList.at(addressIndex);
        const items = currentAddress.get('extraLines');
        // console.log(`Array Len: ${items.length}`);
        items.push(this.formBuilder.group({ extraLine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }));
    }
    onRemoveExtraLine(addressIndex, itemIndex) {
        const currentAddress = this.addressFormList.at(addressIndex);
        const items = currentAddress.get('extraLines');
        items.removeAt(itemIndex); // Remove array element i
    }
    getListTitle() {
        const inputName = 'Address';
        const entityName = this.partyName;
        const parentEntity = this.entryName;
        const listTitle = 'Addresses';
        const formArray = this.addressesGroup.get('entries');
        const count = this.addressesGroup.get('addressArray').length;
        const prefix = ((count > 0) ? '' : `No`); // `>>Name/Entity::${parentName}/${parentEntity}<<`
        const sufSuf = (count === 1) ? '' : 'es'; // Plural Suffix
        const suffix = ((count > 0) ? `[${count} ${inputName}${sufSuf}]` : '');
        const endingOpt = (!this.isArrayOptionalText) ? '' : this.isArrayOptionalText;
        const title = (!!entityName ?
            `${prefix} ${listTitle} for ${entityName} ${suffix} ${endingOpt}` :
            `${prefix} ${listTitle} for ${parentEntity} ${suffix} ${endingOpt}`);
        return title;
    }
    getAddressTitle() {
        const endingOpt = (!this.isElementOptional) ? '' : this.isElementOptional;
        const parentEntity = (this.partyName ? `for ${this.partyName}`
            : (this.entryName ? `for ${this.entryName}` : ''));
        return `Address ${parentEntity} `;
    }
    hasExtraLines(addressIndex) {
        const items = this.addressFormList.at(addressIndex).get('extraLines');
        return (items.length > 0);
    }
    onAddAddress() {
        const list = this.addressesGroup.get('addressArray');
        list.controls.push(this.getAddressGroup());
    }
    onRemoveAddress(i) {
        const list = this.addressesGroup.get('addressArray');
        list.controls.splice(i, 1); // Remove array element i    
    }
    nameChanged() {
    }
    submitAddress() {
    }
    getEmptyAddress() {
        return _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_0__.OscalCatalogEmpties.getEmptyAddress();
    }
    formCommitArray() {
        const addressList = new Array();
        // for (let i = 0; i < 3; i++) {
        //   const addr = this.getEmptyAddress();
        //   addr.addrLines = [`Line #1`, 'Line2', "Line 3"];
        //   addr.city = `City #${i}`
        //   this.addressList.push(addr);
        // }
        const addressFormList = this.addressesGroup.get('addressArray')['controls'];
        console.log(addressFormList);
        for (let index = 0; index < addressFormList.length; index++) {
            const address = addressFormList[index];
            console.log(address);
            console.log(address.get('type').value);
            console.log(address.get('addressTo').value);
            console.log(address.get('streetAddress').value);
            const addr = this.getEmptyAddress();
            addr.type = address.get('type').value;
            addr.state = address.get('state').value;
            addr.country = address.get('country').value;
            addr.postalCode = address.get('postalCode').value;
            addr.addrLines = [address.get('addressTo').value, address.get('streetAddress').value];
            const currentAddress = this.addressFormList.at(index);
            const lines = currentAddress.get('extraLines')['controls'];
            // const lines = address.get('extraLines') as FormArray;
            for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
                const line = lines[lineIndex];
                addr.addrLines.push(line.get('extraLine').value);
            }
            addressList.push(addr);
        }
        return addressList;
    }
}
ArrayAddressesComponent.ɵfac = function ArrayAddressesComponent_Factory(t) { return new (t || ArrayAddressesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_1__.LogManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective)); };
ArrayAddressesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ArrayAddressesComponent, selectors: [["oscal-address-list"]], inputs: { localForm: "localForm", partyName: "partyName", entryName: "entryName", hideTitle: "hideTitle", addressParentName: "addressParentName", addressList: "addressList", addressData: "addressData", isSingleMode: "isSingleMode", isArrayOptionalText: "isArrayOptionalText", isElementOptional: "isElementOptional" }, decls: 2, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], ["formArrayName", "addressArray", 4, "ngIf"], ["formArrayName", "addressArray"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["slot", "end", 4, "ngIf"], ["position", "floating"], ["formControlName", "type", "title", "The Type of the Address (e.g. Office, Home, etc)", "type", "text"], ["formControlName", "addressTo", "title", "The Name of the Addressee", "type", "text"], ["type", "text", "formControlName", "streetAddress"], ["formArrayName", "extraLines"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "city"], ["formControlName", "state", "type", "text"], ["position", "floating", "placeholder", "1"], ["formControlName", "postalCode", "type", "text"], ["formControlName", "country", "type", "text"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["title", "Entity address", 4, "ngIf"], ["title", "Entity address"], ["color", "primary"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "return-down-back-outline"], ["type", "text", "formControlName", "extraLine"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["slot", "start", "icon", "add-circle-outline"]], template: function ArrayAddressesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayAddressesComponent_form_1_Template, 6, 5, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.addressesGroup);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktYWRkcmVzc2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2543:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-document-id/action-array-document-id.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentIDArrayComponent": () => (/* binding */ DocumentIDArrayComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







function DocumentIDArrayComponent_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function DocumentIDArrayComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("text-centered", ctx_r1.showAddCancelButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getFormTitleLocal());
} }
function DocumentIDArrayComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentIDArrayComponent_div_4_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentIDArrayComponent_div_4_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.subForm.valid)("color", !ctx_r2.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Save ", !!ctx_r2.getInputName() ? ctx_r2.getInputName() : "Info", " ");
} }
function DocumentIDArrayComponent_div_6_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentIDArrayComponent_div_6_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onRemoveElement(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Remove ", ctx_r10.getInputName(), " ", i_r9 + 1, "/", ctx_r10.subArray.controls.length, " ");
} }
function DocumentIDArrayComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r11.getInputName(), " ", i_r9 + 1, " ");
} }
function DocumentIDArrayComponent_div_6_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r12.isOptional(mapKV_r19.value) ? ctx_r12.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r12.getToolTip(mapKV_r19.value.inputTip));
} }
function DocumentIDArrayComponent_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentIDArrayComponent_div_6_div_11_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentIDArrayComponent_div_6_div_11_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r23.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r13.subForm.valid)("color", !ctx_r13.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r13.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Save ", !!ctx_r13.getInputName() ? ctx_r13.getInputName() : "Info", " ");
} }
function DocumentIDArrayComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DocumentIDArrayComponent_div_6_ion_buttons_3_Template, 4, 3, "ion-buttons", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DocumentIDArrayComponent_div_6_div_7_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DocumentIDArrayComponent_div_6_ion_row_9_Template, 6, 3, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DocumentIDArrayComponent_div_6_div_11_Template, 9, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.singleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.displayItemTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 5, ctx_r3.inputsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.showAddCancelButtons);
} }
function DocumentIDArrayComponent_ion_buttons_7_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentIDArrayComponent_ion_buttons_7_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.onAppendElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Add New ", ctx_r24.getInputName(), " ");
} }
function DocumentIDArrayComponent_ion_buttons_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DocumentIDArrayComponent_ion_buttons_7_ion_button_1_Template, 3, 1, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideAddElementButton || ctx_r4.singleMode);
} }
class DocumentIDArrayComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        // ==> Invoke the parent class
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap.set('2-scheme', {
            fieldToMap: 'scheme',
            labelName: 'Schema',
            inputTip: 'Qualifies the kind of document identifier using a URI. If the scheme is not provided the '.concat('value of the element will be interpreted as a string of characters. '),
        });
        this.inputsMap.set('1-identifier', {
            fieldToMap: 'identifier',
            labelName: 'Document Identifier',
            inputTip: ''.concat('If this element does not appear, or if the value of this ', 'element is empty, the value of "document-id" is equal to the value of ', 'the UUID flag of the top-level root element.'),
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            requiredField: true,
        });
        this.defaultPluralTitle = 'Document IDs';
        this.defaultSingleTitle = 'Document ID';
    }
    formCommitArray() {
        // Returns the edited Array of Links Back
        // With the fieldToMap mapping -use this method of the parent object
        const edDocIds = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyDocID);
        return edDocIds;
    }
    ngOnInit() {
        super.ngOnInit();
        // for (const [key, value] of this.inputsMap) {
        //   console.log(`Key=${key}, Val=${value}`);
        // }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
        console.log('ID-Array-Value');
        console.log(this.idArray);
    }
    getFormTitleLocal() {
        const id = 'ID';
        const defaultTitle = this.getFormTitle();
        if (this.singleMode
            &&
                defaultTitle.indexOf('ID', 0) >= 0
            &&
                this.idArray.length > 0
            &&
                this.idArray[0]
            &&
                this.idArray[0].identifier) {
            return defaultTitle.replace(id, `${id} ${this.idArray[0].identifier}`);
        }
        return defaultTitle;
    }
    getControlsArray() {
        return this.getControlsArrayByFieldToMap(this.idArray);
    }
    getNewFormGroup(data) {
        return this.getNewFormGroupByFieldToMap();
    }
    /**
     * Saves the form data in the object of Document ID Type and pushes it out
     * through the delegate to the parent page to assemble the big JSON data-pile
     *
     * @memberof DocumentIDArrayComponent
     */
    onSave() {
        const savedDocId = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyDocID();
        const updatedDocId = this.getUpdatedElementByFieldToMap(savedDocId);
        this.saveTab.emit(updatedDocId);
        this.closeTab.emit();
    }
    onCancel() {
    }
    onCancelButton() {
        this.closeTab.emit();
    }
    onSubmitData() {
        this.onSave();
    }
}
DocumentIDArrayComponent.ɵfac = function DocumentIDArrayComponent_Factory(t) { return new (t || DocumentIDArrayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective)); };
DocumentIDArrayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DocumentIDArrayComponent, selectors: [["oscal-array-document-ids"]], inputs: { idArray: "idArray" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 6, consts: [[1, "tab-frame"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], [3, "text-centered", 4, "ngIf"], ["formArrayName", "entries"], [4, "ngFor", "ngForOf"], ["slot", "end", 4, "ngIf"], ["color", "warning", 1, "even-ion-buttons"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], [3, "disabled", "color", "title", "click"], ["slot", "start", 3, "icon"], [3, "formGroupName"], ["slot", "end", "style", "float:right", 4, "ngIf"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["color", "primary"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "add-circle-outline"]], template: function DocumentIDArrayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DocumentIDArrayComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DocumentIDArrayComponent_br_2_Template, 1, 0, "br", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DocumentIDArrayComponent_ion_title_3_Template, 4, 3, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DocumentIDArrayComponent_div_4_Template, 9, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DocumentIDArrayComponent_div_6_Template, 12, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DocumentIDArrayComponent_ion_buttons_7_Template, 2, 1, "ion-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideAddElementButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktZG9jdW1lbnQtaWQuY29tcG9uZW50LnNjc3MifQ== */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 5142:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-external-ids/action-array-external-ids.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayExternalIDsComponent": () => (/* binding */ ArrayExternalIDsComponent)
/* harmony export */ });
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







function ArrayExternalIDsComponent_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function ArrayExternalIDsComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getFormTitle());
} }
function ArrayExternalIDsComponent_div_5_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayExternalIDsComponent_div_5_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onRemoveElement(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Remove ", ctx_r6.getInputName(), " ", i_r5 + 1, "/", ctx_r6.subArray.controls.length, " ");
} }
function ArrayExternalIDsComponent_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r7.getInputName(), " ", i_r5 + 1, " ");
} }
function ArrayExternalIDsComponent_div_5_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r15 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mapKV_r15.value.labelName + (ctx_r8.isOptional(mapKV_r15.value) ? ctx_r8.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", mapKV_r15.value.fieldToMap)("title", ctx_r8.getToolTip(mapKV_r15.value.inputTip));
} }
function ArrayExternalIDsComponent_div_5_ion_buttons_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayExternalIDsComponent_div_5_ion_buttons_11_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayExternalIDsComponent_div_5_ion_buttons_11_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r9.actionName, " ", ctx_r9.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r9.actionName, " ", ctx_r9.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r9.subForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r9.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Save ", !!ctx_r9.inputName ? ctx_r9.inputName : "Info", " ");
} }
function ArrayExternalIDsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArrayExternalIDsComponent_div_5_ion_buttons_3_Template, 4, 3, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ArrayExternalIDsComponent_div_5_div_7_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ArrayExternalIDsComponent_div_5_ion_row_9_Template, 6, 3, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ArrayExternalIDsComponent_div_5_ion_buttons_11_Template, 7, 7, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.singleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.displayItemTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 5, ctx_r2.inputsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.showAddCancelButtons);
} }
function ArrayExternalIDsComponent_ion_buttons_6_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayExternalIDsComponent_ion_buttons_6_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.onAppendElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Add New ", ctx_r20.getInputName(), " ");
} }
function ArrayExternalIDsComponent_ion_buttons_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayExternalIDsComponent_ion_buttons_6_ion_button_1_Template, 3, 1, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.hideAddElementButton || ctx_r3.singleMode);
} }
class ArrayExternalIDsComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        // ==> Invoke the parent class
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap.set('1-ID', {
            fieldToMap: 'id',
            labelName: 'ID',
            inputTip: ''.concat('Telephone number.'),
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            requiredField: true,
        });
        this.inputsMap.set('2-scheme', {
            fieldToMap: 'scheme',
            labelName: 'Schema',
            inputTip: 'Reflect the schema context of the ID.',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            requiredField: true,
        });
    }
    formCommitArray() {
        // Returns the edited Array of Links Back
        // With the fieldToMap mapping -use this method of the parent object
        const editedExternalIds = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyPartyExternalIdentifier);
        return editedExternalIds;
    }
    ngOnInit() {
        super.ngOnInit();
        this.defaultPluralTitle = 'External IDs';
        // for (const [key, value] of this.inputsMap) {
        //   console.log(`Key=${key}, Val=${value}`);
        // }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    getControlsArray() {
        return this.getControlsArrayByFieldToMap(this.externalIDsArray);
    }
    getNewFormGroup(data) {
        return this.getNewFormGroupByFieldToMap();
    }
    /**
     * Saves the form data in the object of Document ID Type and pushes it out
     * through the delegate to the parent page to assemble the big JSON data-pile
     *
     * @memberof DocumentIDArrayComponent
     */
    onSave() {
        const savedDocId = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyPartyExternalIdentifier();
        const updatedDocId = this.getUpdatedElementByFieldToMap(savedDocId);
        this.saveTab.emit(updatedDocId);
        this.closeTab.emit();
    }
    onCancel() {
    }
    onCancelButton() {
        this.closeTab.emit();
    }
    onSubmitData() {
        this.onSave();
    }
}
ArrayExternalIDsComponent.ɵfac = function ArrayExternalIDsComponent_Factory(t) { return new (t || ArrayExternalIDsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective)); };
ArrayExternalIDsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ArrayExternalIDsComponent, selectors: [["oscal-external-ids"]], inputs: { externalIDsArray: "externalIDsArray" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 5, consts: [[1, "tab-frame"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], ["formArrayName", "entries"], [4, "ngFor", "ngForOf"], ["slot", "end", 4, "ngIf"], [3, "formGroupName"], ["slot", "end", "style", "float:right", 4, "ngIf"], ["class", "even-ion-buttons", "color", "warning", 4, "ngIf"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["color", "primary"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["color", "warning", 1, "even-ion-buttons"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], ["color", "success", 3, "disabled", "title", "click"], ["slot", "start", 3, "icon"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "add-circle-outline"]], template: function ArrayExternalIDsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ArrayExternalIDsComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArrayExternalIDsComponent_br_2_Template, 1, 0, "br", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArrayExternalIDsComponent_ion_title_3_Template, 4, 1, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ArrayExternalIDsComponent_div_5_Template, 12, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ArrayExternalIDsComponent_ion_buttons_6_Template, 2, 1, "ion-buttons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideAddElementButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktZXh0ZXJuYWwtaWRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4609:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-links/action-array-links.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayLinksComponent": () => (/* binding */ ArrayLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







function ArrayLinksComponent_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function ArrayLinksComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("text-centered", ctx_r1.showAddCancelButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getFormTitle());
} }
function ArrayLinksComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayLinksComponent_div_4_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayLinksComponent_div_4_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.subForm.valid)("color", !ctx_r2.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Save ", !!ctx_r2.getInputName() ? ctx_r2.getInputName() : "Info", " ");
} }
function ArrayLinksComponent_div_6_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayLinksComponent_div_6_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onRemoveElement(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Remove ", ctx_r10.getInputName(), " ", i_r9 + 1, "/", ctx_r10.subArray.controls.length, " ");
} }
function ArrayLinksComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r11.getInputName(), " ", i_r9 + 1, " ");
} }
function ArrayLinksComponent_div_6_ion_row_9_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r21.isOptional(mapKV_r19.value) ? ctx_r21.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r21.getToolTip(mapKV_r19.value.inputTip));
} }
function ArrayLinksComponent_div_6_ion_row_9_ion_col_2_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r24.isOptional(mapKV_r19.value) ? ctx_r24.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r24.getToolTip(mapKV_r19.value.inputTip));
} }
function ArrayLinksComponent_div_6_ion_row_9_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayLinksComponent_div_6_ion_row_9_ion_col_2_ion_item_1_Template, 4, 3, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", mapKV_r19.value.inputAs === "textarea");
} }
function ArrayLinksComponent_div_6_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayLinksComponent_div_6_ion_row_9_ion_col_1_Template, 5, 3, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArrayLinksComponent_div_6_ion_row_9_ion_col_2_Template, 2, 1, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !mapKV_r19.value.complexInputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!mapKV_r19.value.complexInputType);
} }
function ArrayLinksComponent_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayLinksComponent_div_6_div_11_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayLinksComponent_div_6_div_11_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r13.subForm.valid)("color", !ctx_r13.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r13.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Save ", !!ctx_r13.getInputName() ? ctx_r13.getInputName() : "Info", " ");
} }
function ArrayLinksComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArrayLinksComponent_div_6_ion_buttons_3_Template, 4, 3, "ion-buttons", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ArrayLinksComponent_div_6_div_7_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ArrayLinksComponent_div_6_ion_row_9_Template, 3, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ArrayLinksComponent_div_6_div_11_Template, 9, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.singleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.displayItemTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 5, ctx_r3.inputsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.showAddCancelButtons);
} }
function ArrayLinksComponent_ion_buttons_7_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayLinksComponent_ion_buttons_7_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r31.onAppendElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Add New ", ctx_r30.getInputName(), " ");
} }
function ArrayLinksComponent_ion_buttons_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayLinksComponent_ion_buttons_7_ion_button_1_Template, 3, 1, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideAddElementButton || ctx_r4.singleMode);
} }
class ArrayLinksComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap.set('1-href', {
            fieldToMap: 'href',
            labelName: 'Link Href',
            inputTip: 'A resolvable URL reference to a resource',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            requiredField: true,
        });
        this.inputsMap.set('2-mediaType', {
            fieldToMap: 'mediaType',
            labelName: 'Link Media Type',
            inputTip: 'Specifies a media type as defined by the Internet Assigned Numbers Authority (IANA) MediaTypes Registry',
        });
        this.inputsMap.set('3-rel', {
            fieldToMap: 'rel',
            labelName: 'Link Relation',
            inputTip: 'Describes the type of relationship provided by the link. This can be an indicator of the link\'s purpose',
        });
        this.inputsMap.set('4-text', {
            fieldToMap: 'text',
            labelName: 'Description',
            inputTip: 'A text to describe the link fully, which may be used for presentation in a tool',
            validateAs: [],
            complexInputType: true,
            inputAs: 'textarea',
        });
        this.defaultPluralTitle = 'Links';
        this.defaultSingleTitle = 'Link';
    }
    formCommitArray() {
        // Returns the edited Array of Links Back
        // With the fieldToMap mapping -use this method of the parent object
        const editedLinks = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyLink);
        return editedLinks;
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.singleMode && this.actionName.toLowerCase() == 'add') {
            this.linksArray = this.linksArray || [_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyLink()];
        }
        // for (const [key, value] of this.inputsMap) {
        //   console.log(`LINK: Key=${key}, Val=${value}`);
        // }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    getControlsArray() {
        return this.getControlsArrayByFieldToMap(this.linksArray);
    }
    getNewFormGroup(data) {
        return this.getNewFormGroupByFieldToMap();
    }
    onSave() {
        const emptyLink = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyLink();
        const savedLink = this.getUpdatedElementByFieldToMap(emptyLink);
        this.saveTab.emit(savedLink);
        this.closeTab.emit();
    }
    onCancel() {
        this.closeTab.emit();
    }
    onCancelButton() {
        if (this.closeTab) {
            this.closeTab.emit();
        }
    }
    onSubmitData() {
        this.onSave();
    }
}
ArrayLinksComponent.ɵfac = function ArrayLinksComponent_Factory(t) { return new (t || ArrayLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective)); };
ArrayLinksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ArrayLinksComponent, selectors: [["oscal-array-links"]], inputs: { linksArray: "linksArray" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 6, consts: [[1, "tab-frame"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], [3, "text-centered", 4, "ngIf"], ["formArrayName", "entries"], [4, "ngFor", "ngForOf"], ["slot", "end", 4, "ngIf"], ["color", "warning", 1, "even-ion-buttons"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], [3, "disabled", "color", "title", "click"], ["slot", "start", 3, "icon"], [3, "formGroupName"], ["slot", "end", "style", "float:right", 4, "ngIf"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["color", "primary"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["type", "text", "rows", "2", "autoGrow", "true", 3, "formControlName", "title"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "add-circle-outline"]], template: function ArrayLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ArrayLinksComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArrayLinksComponent_br_2_Template, 1, 0, "br", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArrayLinksComponent_ion_title_3_Template, 4, 3, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ArrayLinksComponent_div_4_Template, 9, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ArrayLinksComponent_div_6_Template, 12, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ArrayLinksComponent_ion_buttons_7_Template, 2, 1, "ion-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideAddElementButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTextarea], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktbGlua3MuY29tcG9uZW50LnNjc3MifQ== */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 1839:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-locations/action-array-locations.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsArrayComponent": () => (/* binding */ LocationsArrayComponent)
/* harmony export */ });
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);






function LocationsArrayComponent_ion_title_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getFormTitle());
} }
function LocationsArrayComponent_div_4_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocationsArrayComponent_div_4_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onRemoveElement(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" Remove ", ctx_r5.getInputName(), " ", i_r4 + 1, "/", ctx_r5.subArray.controls.length, " ");
} }
function LocationsArrayComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-title", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r6.getInputName(), " ", i_r4 + 1, " ");
} }
function LocationsArrayComponent_div_4_ion_row_9_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mapKV_r14.value.labelName + (ctx_r16.isOptional(mapKV_r14.value) ? ctx_r16.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", mapKV_r14.value.fieldToMap)("title", ctx_r16.getToolTip(mapKV_r14.value.inputTip));
} }
function LocationsArrayComponent_div_4_ion_row_9_ion_col_2_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mapKV_r14.value.labelName + (ctx_r19.isOptional(mapKV_r14.value) ? ctx_r19.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", mapKV_r14.value.fieldToMap)("title", ctx_r19.getToolTip(mapKV_r14.value.inputTip));
} }
function LocationsArrayComponent_div_4_ion_row_9_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LocationsArrayComponent_div_4_ion_row_9_ion_col_2_ion_item_1_Template, 4, 3, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", mapKV_r14.value.inputAs === "textarea");
} }
function LocationsArrayComponent_div_4_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LocationsArrayComponent_div_4_ion_row_9_ion_col_1_Template, 5, 3, "ion-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LocationsArrayComponent_div_4_ion_row_9_ion_col_2_Template, 2, 1, "ion-col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !mapKV_r14.value.complexInputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!mapKV_r14.value.complexInputType);
} }
function LocationsArrayComponent_div_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocationsArrayComponent_div_4_div_11_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocationsArrayComponent_div_4_div_11_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r8.actionName, " ", ctx_r8.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r8.actionName, " ", ctx_r8.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r8.subForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("icon", ctx_r8.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Save ", !!ctx_r8.getInputName() ? ctx_r8.getInputName() : "Info", " ");
} }
function LocationsArrayComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LocationsArrayComponent_div_4_ion_buttons_3_Template, 4, 3, "ion-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LocationsArrayComponent_div_4_div_7_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LocationsArrayComponent_div_4_ion_row_9_Template, 3, 2, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LocationsArrayComponent_div_4_div_11_Template, 9, 7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.singleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.displayItemTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, ctx_r1.inputsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showAddCancelButtons);
} }
function LocationsArrayComponent_ion_buttons_5_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocationsArrayComponent_ion_buttons_5_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.onAppendElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Add New ", ctx_r25.getInputName(), " ");
} }
function LocationsArrayComponent_ion_buttons_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-buttons", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LocationsArrayComponent_ion_buttons_5_ion_button_1_Template, 3, 1, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.hideAddElementButton || ctx_r2.singleMode);
} }
class LocationsArrayComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
    }
    ngOnInit() {
        //this.addFormGroup
    }
    getNewFormGroup() {
        throw new Error('Method not implemented.');
    }
    getControlsArray() {
        throw new Error('Method not implemented.');
    }
    onSave() {
    }
    onCancelButton() {
    }
    onSubmitData() {
    }
}
LocationsArrayComponent.ɵfac = function LocationsArrayComponent_Factory(t) { return new (t || LocationsArrayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective)); };
LocationsArrayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LocationsArrayComponent, selectors: [["app-action-array-locations"]], inputs: { locationsArray: "locationsArray" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [[3, "formGroup", "ngSubmit"], [4, "ngIf"], ["formArrayName", "entries"], [4, "ngFor", "ngForOf"], ["slot", "end", 4, "ngIf"], [3, "formGroupName"], ["slot", "end", "style", "float:right", 4, "ngIf"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["color", "primary"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["type", "text", "rows", "2", "autoGrow", "true", 3, "formControlName", "title"], ["color", "warning", 1, "even-ion-buttons"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], ["color", "success", 3, "disabled", "title", "click"], ["slot", "start", 3, "icon"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "add-circle-outline"]], template: function LocationsArrayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LocationsArrayComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LocationsArrayComponent_ion_title_2_Template, 4, 1, "ion-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LocationsArrayComponent_div_4_Template, 12, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LocationsArrayComponent_ion_buttons_5_Template, 2, 1, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hideAddElementButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTextarea], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 580:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-phones/action-array-phones.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayPhonesComponent": () => (/* binding */ ArrayPhonesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







function ArrayPhonesComponent_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function ArrayPhonesComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getFormTitle());
} }
function ArrayPhonesComponent_div_5_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayPhonesComponent_div_5_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onRemoveElement(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Remove ", ctx_r6.getInputName(), " ", i_r5 + 1, "/", ctx_r6.subArray.controls.length, " ");
} }
function ArrayPhonesComponent_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r7.getInputName(), " ", i_r5 + 1, " ");
} }
function ArrayPhonesComponent_div_5_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r15 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mapKV_r15.value.labelName + (ctx_r8.isOptional(mapKV_r15.value) ? ctx_r8.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", mapKV_r15.value.fieldToMap)("title", ctx_r8.getToolTip(mapKV_r15.value.inputTip));
} }
function ArrayPhonesComponent_div_5_ion_buttons_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayPhonesComponent_div_5_ion_buttons_11_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayPhonesComponent_div_5_ion_buttons_11_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r9.actionName, " ", ctx_r9.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r9.actionName, " ", ctx_r9.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r9.subForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r9.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Save ", !!ctx_r9.getInputName() ? ctx_r9.getInputName() : "Info", " ");
} }
function ArrayPhonesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArrayPhonesComponent_div_5_ion_buttons_3_Template, 4, 3, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ArrayPhonesComponent_div_5_div_7_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ArrayPhonesComponent_div_5_ion_row_9_Template, 6, 3, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ArrayPhonesComponent_div_5_ion_buttons_11_Template, 7, 7, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.singleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.displayItemTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 5, ctx_r2.inputsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.showAddCancelButtons);
} }
function ArrayPhonesComponent_ion_buttons_6_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArrayPhonesComponent_ion_buttons_6_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.onAppendElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Add New ", ctx_r20.getInputName(), " ");
} }
function ArrayPhonesComponent_ion_buttons_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ArrayPhonesComponent_ion_buttons_6_ion_button_1_Template, 3, 1, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.hideAddElementButton || ctx_r3.singleMode);
} }
class ArrayPhonesComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        // ==> Invoke the parent class
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap.set('1-phone-number', {
            fieldToMap: 'number',
            labelName: 'Phone Number',
            inputTip: `${this.phoneName + ' ' || 0}`.concat('Telephone number.'),
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            requiredField: true,
        });
        this.inputsMap.set('2-type', {
            fieldToMap: 'type',
            labelName: 'Phone Type',
            inputTip: 'Reflect the phone types such as work, cell, home, 9-to-5, etc.',
        });
        this.defaultPluralTitle = 'Phones';
        this.defaultSingleTitle = 'Phone';
    }
    ngOnInit() {
        super.ngOnInit();
        // for (const [key, value] of this.inputsMap) {
        //   console.log(`Key=${key}, Val=${value}`);
        // }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    getControlsArray() {
        return this.getControlsArrayByFieldToMap(this.phonesArray);
    }
    getNewFormGroup(data) {
        return this.getNewFormGroupByFieldToMap();
    }
    formCommitArray() {
        // Returns the edited Array of TelephoneNumber Back
        // With the fieldToMap mapping -use this method of the parent object
        const editedLinks = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyPhoneNumber);
        return editedLinks;
    }
    /**
     * Saves the form data in the object of Document ID Type and pushes it out
     * through the delegate to the parent page to assemble the big JSON data-pile
     *
     * @memberof DocumentIDArrayComponent
     */
    onSave() {
        const savedPhone = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyPhoneNumber();
        const updatedPhones = this.getUpdatedElementByFieldToMap(savedPhone);
        this.saveTab.emit(updatedPhones);
        this.closeTab.emit();
    }
    onCancel() {
    }
    onCancelButton() {
        this.closeTab.emit();
    }
    onSubmitData() {
        this.onSave();
    }
}
ArrayPhonesComponent.ɵfac = function ArrayPhonesComponent_Factory(t) { return new (t || ArrayPhonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective)); };
ArrayPhonesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ArrayPhonesComponent, selectors: [["oscal-array-phones"]], inputs: { phonesArray: "phonesArray", phoneName: "phoneName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 5, consts: [[1, "tab-frame"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], ["formArrayName", "entries"], [4, "ngFor", "ngForOf"], ["slot", "end", 4, "ngIf"], [3, "formGroupName"], ["slot", "end", "style", "float:right", 4, "ngIf"], ["class", "even-ion-buttons", "color", "warning", 4, "ngIf"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["color", "primary"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["color", "warning", 1, "even-ion-buttons"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], ["color", "success", 3, "disabled", "title", "click"], ["slot", "start", 3, "icon"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "add-circle-outline"]], template: function ArrayPhonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ArrayPhonesComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ArrayPhonesComponent_br_2_Template, 1, 0, "br", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ArrayPhonesComponent_ion_title_3_Template, 4, 1, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ArrayPhonesComponent_div_5_Template, 12, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ArrayPhonesComponent_ion_buttons_6_Template, 2, 1, "ion-buttons", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideAddElementButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktcGhvbmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7578:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-properties/action-array-properties.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesArrayComponent": () => (/* binding */ PropertiesArrayComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







function PropertiesArrayComponent_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function PropertiesArrayComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("text-centered", ctx_r1.showAddCancelButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getFormTitle());
} }
function PropertiesArrayComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PropertiesArrayComponent_div_4_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PropertiesArrayComponent_div_4_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r2.actionName, " ", ctx_r2.getInputName() ? ctx_r2.getInputName() : "Info", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.subForm.valid)("color", !ctx_r2.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Save ", ctx_r2.getInputName() ? ctx_r2.getInputName() : "Info", " ");
} }
function PropertiesArrayComponent_div_6_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PropertiesArrayComponent_div_6_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onRemoveElement(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" Remove ", ctx_r10.getInputName(), " ", i_r9 + 1, "/", ctx_r10.subArray.controls.length, " ");
} }
function PropertiesArrayComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r11.getInputName(), " ", i_r9 + 1, " ");
} }
function PropertiesArrayComponent_div_6_ion_row_9_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r21.isOptional(mapKV_r19.value) ? ctx_r21.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r21.getToolTip(mapKV_r19.value.inputTip));
} }
function PropertiesArrayComponent_div_6_ion_row_9_ion_col_2_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PropertiesArrayComponent_div_6_ion_row_9_ion_col_2_ion_item_1_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onAssignArrayElementUUID(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Generate New UUID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r24.isOptional(mapKV_r19.value) ? ctx_r24.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r24.getToolTip(mapKV_r19.value.inputTip));
} }
function PropertiesArrayComponent_div_6_ion_row_9_ion_col_2_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r25.isOptional(mapKV_r19.value) ? ctx_r25.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r25.getToolTip(mapKV_r19.value.inputTip));
} }
function PropertiesArrayComponent_div_6_ion_row_9_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PropertiesArrayComponent_div_6_ion_row_9_ion_col_2_ion_item_1_Template, 9, 3, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PropertiesArrayComponent_div_6_ion_row_9_ion_col_2_ion_item_2_Template, 4, 3, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", mapKV_r19.value.inputAs === "uuid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", mapKV_r19.value.inputAs === "textarea");
} }
function PropertiesArrayComponent_div_6_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PropertiesArrayComponent_div_6_ion_row_9_ion_col_1_Template, 5, 3, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PropertiesArrayComponent_div_6_ion_row_9_ion_col_2_Template, 3, 2, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !mapKV_r19.value.complexInputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!mapKV_r19.value.complexInputType);
} }
function PropertiesArrayComponent_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PropertiesArrayComponent_div_6_div_11_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r32.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PropertiesArrayComponent_div_6_div_11_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r34.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r13.actionName, " ", ctx_r13.getInputName() ? ctx_r13.getInputName() : "Info", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r13.subForm.valid)("color", !ctx_r13.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", ctx_r13.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Save ", ctx_r13.getInputName() ? ctx_r13.getInputName() : "Info", " ");
} }
function PropertiesArrayComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PropertiesArrayComponent_div_6_ion_buttons_3_Template, 4, 3, "ion-buttons", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PropertiesArrayComponent_div_6_div_7_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PropertiesArrayComponent_div_6_ion_row_9_Template, 3, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PropertiesArrayComponent_div_6_div_11_Template, 9, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.singleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.displayItemTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 5, ctx_r3.inputsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.showAddCancelButtons);
} }
function PropertiesArrayComponent_ion_buttons_7_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PropertiesArrayComponent_ion_buttons_7_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r36.onAppendElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Add New ", ctx_r35.getInputName(), " ");
} }
function PropertiesArrayComponent_ion_buttons_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-buttons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PropertiesArrayComponent_ion_buttons_7_ion_button_1_Template, 3, 1, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideAddElementButton || ctx_r4.singleMode);
} }
class PropertiesArrayComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_1__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        // ==> Invoke the parent class
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap.set('1-name', {
            fieldToMap: 'name',
            labelName: 'Name',
            inputTip: 'A textual label that uniquely identifies a specific attribute, '
                + 'characteristic, or quality of the property\'s containing object.',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            requiredField: true,
        });
        this.inputsMap.set('2-value', {
            fieldToMap: 'value',
            labelName: 'Value',
            inputTip: 'Indicates the value of the attribute, characteristic, or quality.',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            requiredField: true,
        });
        this.inputsMap.set('3-class', {
            fieldToMap: 'class',
            labelName: 'Class',
            inputTip: 'A textual label that provides a sub-type or characterization of the property\'s name.'
                + ' This can be used to further distinguish or discriminate between the semantics of multiple'
                + ' properties of the same object with the same name and namespace.',
        });
        this.inputsMap.set('4-ns', {
            fieldToMap: 'ns',
            labelName: 'Namespace',
            inputTip: 'A namespace qualifying the property\'s name. This allows different organizations to'
                + ' associate distinct semantics with the same name.',
        });
        this.inputsMap.set('5-uuid', {
            fieldToMap: 'uuid',
            labelName: 'UUID',
            inputTip: 'A unique identifier that can be used to reference this property elsewhere in an OSCAL'
                + ' document. A UUID should be consistently used for a given location across revisions of the document.',
            validateAs: [],
            complexInputType: true,
            inputAs: 'uuid',
        });
        this.inputsMap.set('6-remarks', {
            fieldToMap: 'remarks',
            labelName: 'Remarks',
            inputTip: 'A textual label to associate with the link, which may be used for presentation in a tool',
            validateAs: [],
            complexInputType: true,
            inputAs: 'textarea',
        });
        this.defaultPluralTitle = 'Properties';
        this.defaultSingleTitle = 'Property';
    }
    formCommitArray() {
        // Returns the edited Array of Props Back
        const editedProps = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_0__.OscalCatalogEmpties.getEmptyProperty);
        return editedProps;
    }
    ngOnInit() {
        super.ngOnInit();
        // for (const [key, value] of this.inputsMap) {
        //   console.log(key);
        //   console.log(value);
        // }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    getControlsArray() {
        return this.getControlsArrayByFieldToMap(this.propertiesArray);
    }
    getNewFormGroup(data) {
        return this.getNewFormGroupByFieldToMap();
    }
    onSave() {
        const emptyProperty = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_0__.OscalCatalogEmpties.getEmptyProperty();
        const savedProperty = this.getUpdatedElementByFieldToMap(emptyProperty);
        this.saveTab.emit(savedProperty);
        this.closeTab.emit();
    }
    onCancel() {
    }
    onCancelButton() {
        this.closeTab.emit();
    }
    onSubmitData() {
        this.onSave();
    }
}
PropertiesArrayComponent.ɵfac = function PropertiesArrayComponent_Factory(t) { return new (t || PropertiesArrayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective)); };
PropertiesArrayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PropertiesArrayComponent, selectors: [["oscal-array-properties"]], inputs: { propertiesArray: "propertiesArray", inputDataArray: "inputDataArray" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 6, consts: [[1, "tab-frame"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], [3, "text-centered", 4, "ngIf"], ["formArrayName", "entries"], [4, "ngFor", "ngForOf"], ["slot", "end", 4, "ngIf"], ["color", "warning", 1, "even-ion-buttons"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], [3, "disabled", "color", "title", "click"], ["slot", "start", 3, "icon"], [3, "formGroupName"], ["slot", "end", "style", "float:right", 4, "ngIf"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["color", "primary"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "snow-outline"], ["type", "text", "rows", "2", "autoGrow", "true", 3, "formControlName", "title"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["slot", "start", "icon", "add-circle-outline"]], template: function PropertiesArrayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PropertiesArrayComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PropertiesArrayComponent_br_2_Template, 1, 0, "br", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PropertiesArrayComponent_ion_title_3_Template, 4, 3, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PropertiesArrayComponent_div_4_Template, 9, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PropertiesArrayComponent_div_6_Template, 12, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PropertiesArrayComponent_ion_buttons_7_Template, 2, 1, "ion-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideAddElementButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTextarea], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJ9 */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 8417:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-roles/action-array-roles.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionArrayRolesComponent": () => (/* binding */ ActionArrayRolesComponent)
/* harmony export */ });
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 4609);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 7578);









function ActionArrayRolesComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-title", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r0.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx_r0.getActionFormTitle(), " ");
} }
function ActionArrayRolesComponent_br_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
} }
function ActionArrayRolesComponent_ion_buttons_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-buttons", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionArrayRolesComponent_ion_buttons_5_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionArrayRolesComponent_ion_buttons_5_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r2.subForm.valid)("color", !ctx_r2.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r2.getSaveButtonTitle(), " ");
} }
function ActionArrayRolesComponent_div_7_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-buttons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionArrayRolesComponent_div_7_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.onRemoveElement(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" Remove ", ctx_r10.getInputName(), " ", i_r9 + 1, "/", ctx_r10.subArray.controls.length, " ");
} }
function ActionArrayRolesComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-title", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r11.getInputName(), " ", i_r9 + 1, " ");
} }
function ActionArrayRolesComponent_div_7_ion_row_9_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r21.isOptional(mapKV_r19.value) ? ctx_r21.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r21.getToolTip(mapKV_r19.value.inputTip));
} }
function ActionArrayRolesComponent_div_7_ion_row_9_ion_col_2_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r24.isOptional(mapKV_r19.value) ? ctx_r24.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r24.getToolTip(mapKV_r19.value.inputTip));
} }
const _c0 = function () { return []; };
function ActionArrayRolesComponent_div_7_ion_row_9_ion_col_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "oscal-array-links", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ID", "topLinks")("linksArray", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("isArrayOptionalText", ctx_r25.isOptional(mapKV_r19.value) ? ctx_r25.label4Optional : "");
} }
function ActionArrayRolesComponent_div_7_ion_row_9_ion_col_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "oscal-array-properties", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ID", "topLinks")("propertiesArray", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("isArrayOptionalText", ctx_r26.isOptional(mapKV_r19.value) ? ctx_r26.label4Optional : "");
} }
function ActionArrayRolesComponent_div_7_ion_row_9_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ActionArrayRolesComponent_div_7_ion_row_9_ion_col_2_ion_item_1_Template, 4, 3, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ActionArrayRolesComponent_div_7_ion_row_9_ion_col_2_div_2_Template, 2, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ActionArrayRolesComponent_div_7_ion_row_9_ion_col_2_div_3_Template, 2, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mapKV_r19.value.inputAs === "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mapKV_r19.value.inputAs === "oscal-array-links");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mapKV_r19.value.inputAs === "oscal-array-properties");
} }
function ActionArrayRolesComponent_div_7_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ActionArrayRolesComponent_div_7_ion_row_9_ion_col_1_Template, 5, 3, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ActionArrayRolesComponent_div_7_ion_row_9_ion_col_2_Template, 4, 3, "ion-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !mapKV_r19.value.complexInputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!mapKV_r19.value.complexInputType);
} }
function ActionArrayRolesComponent_div_7_ion_buttons_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-buttons", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionArrayRolesComponent_div_7_ion_buttons_11_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r31.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionArrayRolesComponent_div_7_ion_buttons_11_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r33.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r13.subForm.valid)("color", !ctx_r13.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r13.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r13.getSaveButtonTitle(), " ");
} }
function ActionArrayRolesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ActionArrayRolesComponent_div_7_ion_buttons_3_Template, 4, 3, "ion-buttons", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ActionArrayRolesComponent_div_7_div_7_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ActionArrayRolesComponent_div_7_ion_row_9_Template, 3, 2, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ActionArrayRolesComponent_div_7_ion_buttons_11_Template, 7, 8, "ion-buttons", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.singleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.displayItemTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, ctx_r3.inputsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.showAddCancelButtons);
} }
function ActionArrayRolesComponent_ion_buttons_8_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionArrayRolesComponent_ion_buttons_8_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r35.onAppendElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Add New ", ctx_r34.getInputName(), " ");
} }
function ActionArrayRolesComponent_ion_buttons_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-buttons", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ActionArrayRolesComponent_ion_buttons_8_ion_button_1_Template, 3, 1, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.hideAddElementButton || ctx_r4.singleMode);
} }
class ActionArrayRolesComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        console.log(`==== IsPreset:${this.isPresetRole}`);
    }
    buildInputsMap() {
        this.inputsMap.set('1-Role-Title', {
            fieldToMap: 'title',
            labelName: 'Role Title',
            inputTip: 'A name given to the role, which may be used by a tool for display and navigation.',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            requiredField: true,
            isPreset: this.isPresetRole,
        });
        this.inputsMap.set('2-Role-Id', {
            fieldToMap: 'id',
            labelName: 'Role ID',
            inputTip: 'A unique identifier for a specific role instance. This identity\'s uniqueness is'.concat(' document-scoped and is intended to be consistent for the same role across minor revisions', ' of the document.'),
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            requiredField: true,
            isPreset: this.isPresetRole,
        });
        this.inputsMap.set('3-Role-ShortName', {
            fieldToMap: 'shortName',
            labelName: 'Short Name',
            inputTip: 'A short common name, abbreviation, or acronym for the role.',
            validateAs: [],
        });
        this.inputsMap.set('4-Role-Description', {
            fieldToMap: 'description',
            labelName: 'Description',
            inputTip: 'A summary of the role\'s purpose and associated responsibilities',
            validateAs: [],
            complexInputType: true,
            inputAs: 'textarea',
        });
        this.inputsMap.set('5-Role-Remarks', {
            fieldToMap: 'remarks',
            labelName: 'Remarks',
            inputTip: 'Creator\'s notes on the intentions, purpose, responsibilities of the role.'.concat('Can also describe differences form other roles if applicable.'),
            validateAs: [],
            complexInputType: true,
            inputAs: 'textarea',
        });
        this.inputsMap.set('6-Role-LinksArray', {
            fieldToMap: 'links',
            labelName: 'Role Links',
            inputTip: '',
            validateAs: [],
            complexInputType: true,
            inputAs: 'oscal-array-links',
        });
        this.inputsMap.set('7-Role-PropertiesArray', {
            fieldToMap: 'props',
            labelName: 'Role Properties',
            inputTip: '',
            validateAs: [],
            complexInputType: true,
            inputAs: 'oscal-array-properties',
        });
        this.defaultPluralTitle = 'Roles';
        this.defaultSingleTitle = 'Role';
    }
    ngOnInit() {
        super.ngOnInit();
        this.buildInputsMap();
        console.log(`!!!!! IsPreset:${this.isPresetRole}; Title=${this.inputsMap.get('1-Role-Title').isPreset}`);
        // this.inputsMap.get('1-Role-Title').isPreset = this.isPresetRole;
        // this.inputsMap.get('2-Role-Id').isPreset = this.isPresetRole;
        // for (const [key, value] of this.inputsMap) {
        //   console.log(`Key=${key}, Val=${value}`);
        // }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    getControlsArray() {
        return this.getControlsArrayByFieldToMap(this.rolesArray);
    }
    getNewFormGroup(data) {
        return this.getNewFormGroupByFieldToMap();
    }
    onSave() {
        const emptyRole = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyRole();
        const savedRole = this.getUpdatedElementByFieldToMap(emptyRole);
        console.log(`$$$-Role-ID ${savedRole.id}`);
        console.log(`$$$-Role-TTL ${savedRole.title}`);
        this.saveTab.emit(savedRole);
    }
    onCancel() {
    }
    onCancelButton() {
        this.closeTab.emit();
    }
    onSubmitData() {
        this.onSave();
    }
    closeLinks() {
    }
    formCommitArray() {
        // Returns the edited Array of Roles back
        const editedLinks = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyRole);
        return editedLinks;
    }
}
ActionArrayRolesComponent.ɵfac = function ActionArrayRolesComponent_Factory(t) { return new (t || ActionArrayRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective)); };
ActionArrayRolesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ActionArrayRolesComponent, selectors: [["oscal-array-roles"]], inputs: { rolesArray: "rolesArray", isPresetRole: "isPresetRole" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 6, consts: [[1, "tab-frame"], [3, "formGroup", "ngSubmit"], ["style", "text-align: center;", 4, "ngIf"], [4, "ngIf"], ["class", "even-ion-buttons bottomless", "color", "warning", 4, "ngIf"], ["formArrayName", "entries", 1, "topless"], ["class", "topless", 4, "ngFor", "ngForOf"], ["slot", "end", 4, "ngIf"], [2, "text-align", "center"], [3, "icon"], ["color", "warning", 1, "even-ion-buttons", "bottomless"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], [3, "disabled", "color", "title", "click"], ["slot", "start", 3, "icon"], [1, "topless"], [1, "topless", 3, "formGroupName"], ["slot", "end", "style", "float:right", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "even-ion-buttons", "color", "warning", 4, "ngIf"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["color", "primary"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["type", "text", "rows", "2", "autoGrow", "true", 3, "formControlName", "title"], ["listTitle", "Links", "parentEntity", "Role", "parentName", "Role", "inputName", "Link", 3, "ID", "linksArray", "isArrayOptionalText"], ["listTitle", "Properties", "parentEntity", "Role", "parentName", "Role", "inputName", "Prop.", 3, "ID", "propertiesArray", "isArrayOptionalText"], ["color", "warning", 1, "even-ion-buttons"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "add-circle-outline"]], template: function ActionArrayRolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ActionArrayRolesComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ActionArrayRolesComponent_ion_title_3_Template, 3, 2, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ActionArrayRolesComponent_br_4_Template, 1, 0, "br", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ActionArrayRolesComponent_ion_buttons_5_Template, 7, 8, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ActionArrayRolesComponent_div_7_Template, 12, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ActionArrayRolesComponent_ion_buttons_8_Template, 2, 1, "ion-buttons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hideAddElementButton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTextarea, _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_2__.ArrayLinksComponent, _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_3__.PropertiesArrayComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktcm9sZXMuY29tcG9uZW50LnNjc3MifQ== */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 3789:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-strings/action-array-strings.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayStringsComponent": () => (/* binding */ ArrayStringsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
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






function ArrayStringsComponent_ion_grid_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayStringsComponent_ion_grid_6_Template_ion_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onRemoveElement(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.inputName, " ", i_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", ctx_r0.inputName, " for ", ctx_r0.parentName || ctx_r0.parentEntity, " should be entered here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Remove ", ctx_r0.inputName, " ", i_r2 + 1, "/", ctx_r0.subForm.get("entries")["controls"].length, " ");
} }
class ArrayStringsComponent {
    constructor(formBuilder, parentFormDirect) {
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        // Event emitters for call-backs, if needed
        this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.saveTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    formCommitArray() {
        // Returns the edited Array of strings Back
        // unfortunately this component was done before unified model
        const editedStrings = this.getStringArrayData();
        return editedStrings;
    }
    getForm() {
        return this.localForm.get(`${this.ID}`);
    }
    ngOnInit() {
        this.stringData = !!this.stringData ? this.stringData : new Array();
        this.localForm = this.parentFormDirect.form;
        // this.localForm.addControl(this.ID, this.formBuilder.array(this.getControlsArray(this.stringData)));
        this.subForm = this.formBuilder.group({
            entries: this.formBuilder.array(this.getControlsArray(this.stringData) // this.stringData
            ),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    getControlsArray(items) {
        const controlArray = new Array();
        items.forEach((element, index) => {
            // groupObject['email_' + index.toString()] = [element, Validators.email];
            controlArray.push(this.getNewFormControl(element));
            // console.log(`Element[${index}]: ${element}`);
        });
        return controlArray;
    }
    getNewFormControl(element) {
        if (!!this.validateAs) {
            console.log(`Validator: ${typeof this.validateAs}`);
            return this.formBuilder.group({ entry: [element, this.validateAs] });
        }
        else {
            return this.formBuilder.group({ entry: [element, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] });
        }
    }
    onAppendElement() {
        const currentEntries = this.subForm.get('entries');
        currentEntries.push(this.getNewFormControl(''));
    }
    onRemoveElement(itemIndex) {
        const currentEntries = this.subForm.get('entries');
        currentEntries.removeAt(itemIndex); // Remove array element itemIndex
    }
    getListTitle() {
        const formArray = this.subForm.get('entries');
        const count = formArray.length;
        const prefix = ((count > 0) ? `` : `No`);
        const sufSuf = (count === 1) ? '' : 's'; // Plural Suffix
        const suffix = ((count > 0) ? `[${count} ${this.inputName}${sufSuf}]` : '');
        const endingOpt = (!this.isArrayOptionalText) ? '' : this.isArrayOptionalText;
        const title = (!!this.parentName ?
            `${prefix} ${this.listTitle} for ${this.parentName} ${suffix}  ${endingOpt}` :
            `${prefix} ${this.listTitle} for ${this.parentEntity} ${suffix}  ${endingOpt}`);
        return title;
    }
    hasEntries() {
        const currentEntries = this.subForm.get('entries');
        return (currentEntries.length > 0);
    }
    /**
     * Throw away all the information and get out   *
     * @memberof ActionArrayStringComponent
     */
    onClose() {
    }
    getStringArrayData() {
        const currentEntries = this.subForm.get('entries');
        const returnData = new Array();
        currentEntries.controls.forEach((element, index) => {
            const strVal = element.get('entry').value.toString();
            if (!!strVal && !!strVal.length) {
                returnData.push(strVal);
            }
        });
        return returnData;
    }
    /**
     * Collect the string array and return it back to the parent
     * @memberof ActionArrayStringComponent
     */
    onSave() {
        this.saveTab.emit(this.getStringArrayData());
    }
}
ArrayStringsComponent.ɵfac = function ArrayStringsComponent_Factory(t) { return new (t || ArrayStringsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective)); };
ArrayStringsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArrayStringsComponent, selectors: [["oscal-array-string"]], inputs: { ID: "ID", listTitle: "listTitle", parentEntity: "parentEntity", parentName: "parentName", inputName: "inputName", validateAs: "validateAs", isArrayOptionalText: "isArrayOptionalText", isArrayOptional: "isArrayOptional", stringData: "stringData" }, outputs: { closeTab: "closeTab", saveTab: "saveTab" }, decls: 12, vars: 4, consts: [[3, "formGroup", "ngSubmit"], ["formArrayName", "entries"], [4, "ngFor", "ngForOf"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "add-circle-outline"], [3, "formGroupName"], ["position", "floating"], ["formControlName", "entry", "type", "text", 3, "title"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"]], template: function ArrayStringsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArrayStringsComponent_Template_form_ngSubmit_0_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArrayStringsComponent_ion_grid_6_Template, 12, 8, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayStringsComponent_Template_ion_button_click_8_listener() { return ctx.onAppendElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getListTitle(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subForm.get("entries")["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Add New ", ctx.inputName, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktc3RyaW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-cat-controls/action-cat-controls.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatControlsComponent": () => (/* binding */ CatControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 4609);
/* harmony import */ var src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 7578);
/* harmony import */ var _action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-cat-params/action-cat-params.component */ 3958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);










const _c0 = ["linksArray"];
const _c1 = ["propsArray"];
const _c2 = ["paramsArray"];
function CatControlsComponent_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "br");
} }
function CatControlsComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-centered", ctx_r1.showAddCancelButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getFormTitle());
} }
function CatControlsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CatControlsComponent_div_4_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CatControlsComponent_div_4_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.subForm.valid)("color", !ctx_r2.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("icon", ctx_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Save ", !!ctx_r2.getInputName() ? ctx_r2.getInputName() : "Info", " ");
} }
function CatControlsComponent_div_6_ion_buttons_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CatControlsComponent_div_6_ion_buttons_3_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.onRemoveElement(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" Remove ", ctx_r9.getInputName(), " ", i_r8 + 1, "/", ctx_r9.subArray.controls.length, " ");
} }
function CatControlsComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r10.getInputName(), " ", i_r8 + 1, " ");
} }
function CatControlsComponent_div_6_ion_row_9_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r21.isOptional(mapKV_r19.value) ? ctx_r21.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r21.getToolTip(mapKV_r19.value.inputTip));
} }
function CatControlsComponent_div_6_ion_row_9_ion_col_2_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mapKV_r19.value.labelName + (ctx_r24.isOptional(mapKV_r19.value) ? ctx_r24.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", mapKV_r19.value.fieldToMap)("title", ctx_r24.getToolTip(mapKV_r19.value.inputTip));
} }
function CatControlsComponent_div_6_ion_row_9_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CatControlsComponent_div_6_ion_row_9_ion_col_2_ion_item_1_Template, 4, 3, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", mapKV_r19.value.inputAs === "textarea");
} }
function CatControlsComponent_div_6_ion_row_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CatControlsComponent_div_6_ion_row_9_ion_col_1_Template, 5, 3, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CatControlsComponent_div_6_ion_row_9_ion_col_2_Template, 2, 1, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !mapKV_r19.value.complexInputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!mapKV_r19.value.complexInputType);
} }
function CatControlsComponent_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CatControlsComponent_div_6_div_11_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CatControlsComponent_div_6_div_11_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r29.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r12.actionName, " ", ctx_r12.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r12.actionName, " ", ctx_r12.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r12.subForm.valid)("color", !ctx_r12.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("icon", ctx_r12.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Save ", !!ctx_r12.getInputName() ? ctx_r12.getInputName() : "Info", " ");
} }
function CatControlsComponent_div_6_ion_buttons_12_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CatControlsComponent_div_6_ion_buttons_12_ion_button_1_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r31.onAppendElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Add New ", ctx_r30.getInputName(), " ");
} }
function CatControlsComponent_div_6_ion_buttons_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CatControlsComponent_div_6_ion_buttons_12_ion_button_1_Template, 3, 1, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r13.hideAddElementButton || ctx_r13.singleMode);
} }
function CatControlsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CatControlsComponent_div_6_ion_buttons_3_Template, 4, 3, "ion-buttons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CatControlsComponent_div_6_div_7_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CatControlsComponent_div_6_ion_row_9_Template, 3, 2, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CatControlsComponent_div_6_div_11_Template, 9, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CatControlsComponent_div_6_ion_buttons_12_Template, 2, 1, "ion-buttons", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.singleMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.displayItemTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 6, ctx_r3.inputsMap));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.showAddCancelButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.hideAddElementButton);
} }
class CatControlsComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_2__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.defaultPluralTitle = 'Controls';
        this.listTitle = 'Control';
        this.defaultSingleTitle = 'Control';
    }
    onSubmitData() {
        throw new Error('Method not implemented.');
    }
    onCancelButton() {
        throw new Error('Method not implemented.');
    }
    buildInputsMap() {
        this.inputsMap.set('1-Id', {
            fieldToMap: 'id',
            labelName: 'Control ID',
            inputTip: ''.concat('A unique identifier for a specific control instance that can be used to reference the', ' control in other OSCAL documents.This identifier\'s uniqueness is document scoped and is', ' intended to be consistent for the same control across minor revisions of the document.'),
            requiredField: true,
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
        this.inputsMap.set('2-Title', {
            fieldToMap: 'title',
            labelName: 'Control Title',
            inputTip: 'Control Title [REQUIRED]',
            requiredField: true,
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
        this.inputsMap.set('3-class', {
            fieldToMap: 'class',
            labelName: 'Class',
            inputTip: 'A textual label that provides a sub-type or characterization of the property\'s name.'
                + ' This can be used to further distinguish or discriminate between the semantics of multiple'
                + ' properties of the same object with the same name and namespace.',
        });
        this.inputsMap.set('4-params', {
            fieldToMap: 'params',
            labelName: 'Parameters',
            inputTip: 'Parameters that can be repeated inside of the control with consistency',
            complexInputType: true,
            inputAs: 'oscal-cat-params',
        });
        this.inputsMap.set('5-text', {
            fieldToMap: 'text',
            labelName: 'Description',
            inputTip: 'A text to describe the link fully, which may be used for presentation in a tool',
            validateAs: [],
            complexInputType: true,
            inputAs: 'textarea',
        });
    }
    ngOnInit() {
        super.ngOnInit();
        this.buildInputsMap();
        if (!this.controls) {
            this.controls = [src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyControl()];
        }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    // Plugin into the base class implementation
    getControlsArray() {
        const controlAsArray = this.controls;
        return this.getControlsArrayByFieldToMap(controlAsArray);
    }
    // Plugin into the base class implementation
    getNewFormGroup(data) {
        return this.getNewFormGroupByFieldToMap();
    }
    onSave() {
    }
    formCommitArray() {
        // Returns the edited Array of Controls Back
        const editedControls = this.getResultArrayByFieldToMap(src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_1__.OscalCatalogEmpties.getEmptyControl);
        return editedControls;
    }
}
CatControlsComponent.ɵfac = function CatControlsComponent_Factory(t) { return new (t || CatControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective)); };
CatControlsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CatControlsComponent, selectors: [["oscal-cat-controls"]], viewQuery: function CatControlsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.linksArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.propsArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paramsArray = _t.first);
    } }, inputs: { controls: "controls" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 5, consts: [[1, "tab-frame"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], [3, "text-centered", 4, "ngIf"], ["formArrayName", "entries"], [4, "ngFor", "ngForOf"], ["color", "warning", 1, "even-ion-buttons"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], [3, "disabled", "color", "title", "click"], ["slot", "start", 3, "icon"], [3, "formGroupName"], ["slot", "end", "style", "float:right", 4, "ngIf"], ["slot", "end", 4, "ngIf"], ["slot", "end", 2, "float", "right"], ["color", "warning", "slot", "end", 3, "click"], ["slot", "start", "icon", "backspace-outline"], ["color", "primary"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["type", "text", "rows", "2", "autoGrow", "true", 3, "formControlName", "title"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click", 4, "ngIf"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "add-circle-outline"]], template: function CatControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CatControlsComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CatControlsComponent_br_2_Template, 1, 0, "br", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CatControlsComponent_ion_title_3_Template, 4, 3, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CatControlsComponent_div_4_Template, 9, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CatControlsComponent_div_6_Template, 13, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTextarea], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tY2F0LWNvbnRyb2xzLmNvbXBvbmVudC5jc3MifQ== */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 3958:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-cat-params/action-cat-params.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatParamsComponent": () => (/* binding */ CatParamsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 4609);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 7578);
/* harmony import */ var _action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-array-strings/action-array-strings.component */ 3789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








const _c0 = ["valuesArray"];
const _c1 = ["linksArray"];
const _c2 = ["propsArray"];
class CatParamsComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_1__.ActionAncestorSimpleArrayComponent {
    // @ViewChild('guideArray') guideArray: CatParamsComponent;
    // @ViewChild('constraintArray') constraintArray: CatParamsComponent; 
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.defaultPluralTitle = 'Controls';
        this.listTitle = 'Control';
        this.defaultSingleTitle = 'Control';
    }
    onSave() {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
    }
    buildInputsMap() {
        this.inputsMap.set('1-Title', {
            fieldToMap: 'title',
            labelName: 'Control Title',
            inputTip: 'Control Title [REQUIRED]',
            requiredField: true,
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
        this.inputsMap.set('2-Id', {
            fieldToMap: 'id',
            labelName: 'Control ID',
            inputTip: 'Control ID [REQUIRED]',
            requiredField: true,
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
        this.inputsMap.set('3-class', {
            fieldToMap: 'class',
            labelName: 'Class',
            inputTip: 'A textual label that provides a sub-type or characterization of the property\'s name.'
                + ' This can be used to further distinguish or discriminate between the semantics of multiple'
                + ' properties of the same object with the same name and namespace.',
        });
    }
    getNewFormGroup() {
        throw new Error('Method not implemented.');
    }
    getControlsArray() {
        throw new Error('Method not implemented.');
    }
    formCommitArray() {
        // Returns the edited Array of Controls Back
        const editedParams = this.getResultArrayByFieldToMap(src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_0__.OscalCatalogEmpties.getEmptyParameter);
        return editedParams;
    }
}
CatParamsComponent.ɵfac = function CatParamsComponent_Factory(t) { return new (t || CatParamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective)); };
CatParamsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CatParamsComponent, selectors: [["oscal-cat-params"]], viewQuery: function CatParamsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.valuesArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.linksArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.propsArray = _t.first);
    } }, inputs: { params: "params" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[3, "formGroup", "ngSubmit"]], template: function CatParamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Params ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function CatParamsComponent_Template_form_ngSubmit_2_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.subForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tY2F0LXBhcmFtcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7575:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-location-info/action-location-info.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationInfoComponent": () => (/* binding */ LocationInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-array-phones/action-array-phones.component */ 580);
/* harmony import */ var _action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-array-strings/action-array-strings.component */ 3789);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 7578);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 4609);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../interfaces/oscal-types/oscal-catalog.types */ 8358);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action-array-addresses/action-array-addresses.component */ 8434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
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


// import { ActionAncestorBaseComponent } from '../action-ancestor-base/action-ancestor-base.component';

















const _c0 = ["phonesArray"];
const _c1 = ["emailsArray"];
const _c2 = ["linksArray"];
const _c3 = ["propsArray"];
const _c4 = ["urlsArray"];
const _c5 = ["addressesArray"];
function LocationInfoComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("icon", ctx_r0.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx_r0.getActionFormTitle(), " ");
} }
function LocationInfoComponent_br_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "br");
} }
function LocationInfoComponent_ion_buttons_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LocationInfoComponent_ion_buttons_6_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LocationInfoComponent_ion_buttons_6_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r2.subForm.valid)("color", !ctx_r2.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("icon", ctx_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r2.getSaveButtonTitle(), " ");
} }
function LocationInfoComponent_div_8_ion_grid_2_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", mapKV_r12.value.labelName + (ctx_r14.isOptional(mapKV_r12.value) ? ctx_r14.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlName", mapKV_r12.value.fieldToMap)("title", ctx_r14.getToolTip(mapKV_r12.value.inputTip));
} }
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-buttons", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_1_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3).index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r25.onAssignArrayElementUUID(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Generate New UUID");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", mapKV_r12.value.labelName + (ctx_r17.isOptional(mapKV_r12.value) ? ctx_r17.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlName", mapKV_r12.value.fieldToMap)("title", ctx_r17.getToolTip(mapKV_r12.value.inputTip));
} }
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", mapKV_r12.value.labelName + (ctx_r18.isOptional(mapKV_r12.value) ? ctx_r18.label4Optional : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlName", mapKV_r12.value.fieldToMap)("title", ctx_r18.getToolTip(mapKV_r12.value.inputTip));
} }
const _c6 = function (a0) { return [a0]; };
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "oscal-address-list", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isSingleMode", true)("entryName", ctx_r19.defaultSingleTitle)("addressList", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c6, ctx_r19.locationInfo.address));
} }
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "oscal-array-phones", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parentEntity", ctx_r20.defaultSingleTitle)("isArrayOptionalText", "(Optional)")("phonesArray", ctx_r20.locationInfo.telephoneNumbers);
} }
const _c7 = function () { return []; };
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "oscal-array-string", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parentEntity", ctx_r21.defaultSingleTitle)("isArrayOptional", true)("ID", "emailAddressesLocation")("stringData", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c7))("parentEntity", ctx_r21.defaultSingleTitle)("parentName", ctx_r21.defaultSingleTitle)("validateAs", ctx_r21.getEmailValidator())("isArrayOptionalText", "(Optional)")("stringData", ctx_r21.locationInfo.emailAddresses);
} }
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "oscal-array-string", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parentEntity", ctx_r22.defaultSingleTitle)("isArrayOptional", true)("ID", "emailAddressesLocation")("stringData", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c7))("parentEntity", ctx_r22.defaultSingleTitle)("parentName", ctx_r22.defaultSingleTitle)("validateAs", ctx_r22.getEmailValidator())("isArrayOptionalText", "(Optional)")("stringData", ctx_r22.locationInfo.urls);
} }
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "oscal-array-links", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parentEntity", ctx_r23.defaultSingleTitle)("linksArray", ctx_r23.locationInfo.links)("isArrayOptionalText", "(Optional)");
} }
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "oscal-array-properties", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("parentEntity", ctx_r24.defaultSingleTitle)("isArrayOptionalText", "(Optional)")("propertiesArray", ctx_r24.locationInfo.props);
} }
function LocationInfoComponent_div_8_ion_grid_2_ion_row_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_1_Template, 10, 3, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_2_Template, 5, 3, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_3_Template, 3, 5, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_4_Template, 3, 3, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_5_Template, 3, 10, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_6_Template, 3, 10, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_7_Template, 3, 3, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_ion_col_8_Template, 3, 3, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mapKV_r12.value.inputAs === "uuid");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mapKV_r12.value.inputAs === "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mapKV_r12.value.inputAs === "oscal-address-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mapKV_r12.value.inputAs === "oscal-array-phones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mapKV_r12.value.inputAs === "oscal-array-emails");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mapKV_r12.value.inputAs === "oscal-array-urls");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mapKV_r12.value.inputAs === "oscal-array-links");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", mapKV_r12.value.inputAs === "oscal-array-properties");
} }
function LocationInfoComponent_div_8_ion_grid_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, LocationInfoComponent_div_8_ion_grid_2_ion_row_1_Template, 6, 3, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LocationInfoComponent_div_8_ion_grid_2_ion_row_2_Template, 9, 8, "ion-row", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapKV_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !mapKV_r12.value.complexInputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !!mapKV_r12.value.complexInputType);
} }
function LocationInfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LocationInfoComponent_div_8_ion_grid_2_Template, 3, 2, "ion-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, ctx_r3.inputsMap));
} }
function LocationInfoComponent_ion_buttons_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LocationInfoComponent_ion_buttons_10_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r37.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LocationInfoComponent_ion_buttons_10_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r39.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r4.actionName, " ", ctx_r4.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r4.actionName, " ", ctx_r4.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r4.subForm.valid)("color", !ctx_r4.subForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("icon", ctx_r4.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r4.getSaveButtonTitle(), " ");
} }
function LocationInfoComponent_br_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "br");
} }
class LocationInfoComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_0__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.defaultPluralTitle = 'Locations';
        this.listTitle = 'Location';
        this.defaultSingleTitle = 'Location';
    }
    formCommit() {
        throw new Error('Method not implemented.');
    }
    buildInputsMap() {
        this.inputsMap.set('1-UUID', {
            fieldToMap: 'uuid',
            labelName: 'Location UUID',
            inputTip: 'UUID is an unique identifier that can be used to reference this defined' +
                ' location elsewhere in an OSCAL document. A UUID should be consistently used for' +
                ' a given location across revisions of the document. [!- REQUIRED -!]',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            requiredField: true,
            complexInputType: true,
            inputAs: 'uuid',
        });
        this.inputsMap.set('2-Title', {
            fieldToMap: 'title',
            labelName: 'Location Title',
            inputTip: 'Title for location, if needed (optional)',
        });
        this.inputsMap.set('3-Address', {
            fieldToMap: 'address',
            labelName: 'Address',
            inputTip: 'The location\'s address. [!- REQUIRED -!]',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            requiredField: true,
            complexInputType: true,
            inputAs: 'oscal-address-list',
        });
        this.inputsMap.set('4-PhonesArray', {
            fieldToMap: 'telephoneNumbers',
            labelName: 'Phones',
            inputTip: 'Phones for the location, if needed (optional)',
            complexInputType: true,
            inputAs: 'oscal-array-phones',
        });
        this.inputsMap.set('5-EmailsArray', {
            fieldToMap: 'emailAddresses',
            labelName: 'Emails',
            inputTip: 'Emails for the location, if needed (optional)',
            complexInputType: true,
            inputAs: 'oscal-array-emails',
        });
        this.inputsMap.set('6-LinksArray', {
            fieldToMap: 'links',
            labelName: 'Links',
            inputTip: 'Links for the location, if needed (optional)',
            complexInputType: true,
            inputAs: 'oscal-array-links',
        });
        this.inputsMap.set('7-PropertiesArray', {
            fieldToMap: 'props',
            labelName: 'Properties',
            inputTip: 'Properties for the location, if needed (optional)',
            complexInputType: true,
            inputAs: 'oscal-array-properties',
        });
        this.inputsMap.set('8-URLsArray', {
            fieldToMap: 'urls',
            labelName: 'URLs',
            inputTip: 'URLs for the location, if needed (optional)',
            complexInputType: true,
            inputAs: 'oscal-array-urls',
        });
        this.inputsMap.set('9-Remarks', {
            fieldToMap: 'remarks',
            labelName: 'Remarks',
            inputTip: 'Creator\'s notes on the intentions and purpose of the location  (optional)',
            complexInputType: true,
            inputAs: 'textarea',
        });
        this.defaultPluralTitle = 'Locations';
        this.defaultSingleTitle = 'Location';
    }
    ngOnInit() {
        super.ngOnInit();
        this.buildInputsMap();
        if (!this.locationInfo) {
            this.locationInfo = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__.OscalCatalogEmpties.getEmptyLocation();
        }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    getControlsArray() {
        const locationAsArray = [this.locationInfo];
        return this.getControlsArrayByFieldToMap(locationAsArray);
        // return this.getNewFormGroupByFieldToMap<Location>([this.locationInfo]);
        // return this.getControlsArrayByFieldToMap<Role>(this.rolesArray);
    }
    getNewFormGroup(data) {
        return this.getNewFormGroupByFieldToMap();
    }
    /**
     * Needs to extend validation according to  D. Waltermire and W. Piez
     */
    isValidForm() {
        const retVal = this.subForm.valid;
        return retVal;
    }
    onSave() {
        // console.log('On-Save');
        const emptyLocation = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__.OscalCatalogEmpties.getEmptyLocation();
        // Get the regular atomic form-mapped fields:
        const savedLocation = this.getUpdatedElementByFieldToMap(emptyLocation);
        // Get the more complicated entities
        // console.log(` #1 UUID=${savedLocation.uuid}`);
        savedLocation.urls = this.urlsArray.formCommitArray();
        savedLocation.telephoneNumbers = this.phonesArray.formCommitArray();
        savedLocation.emailAddresses = this.emailsArray.formCommitArray();
        // console.log(` #2 Emails`);
        // console.log(savedLocation.emailAddresses);
        savedLocation.links = this.linksArray.formCommitArray();
        // console.log(` #3 Links`);
        // console.log(savedLocation.links);
        savedLocation.props = this.propsArray.formCommitArray();
        // console.log(` #4 Properties`);
        // console.log(savedLocation.props);
        const addressHolder = this.addressesArray.formCommitArray();
        // console.log(` #5 Addresses`);
        // console.log(addressHolder);
        if (addressHolder && addressHolder.length > 0) {
            savedLocation.address = addressHolder[0];
            // console.log(savedLocation.address);
        }
        // console.log(`Rem:${this.localResponsible.remarks}; Model:${this.localResponsible.remarks}`);
        this.saveTab.emit(savedLocation);
        this.closeTab.emit();
    }
    onCancel() {
        this.closeTab.emit();
    }
}
LocationInfoComponent.ɵfac = function LocationInfoComponent_Factory(t) { return new (t || LocationInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective)); };
LocationInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: LocationInfoComponent, selectors: [["oscal-location-info"]], viewQuery: function LocationInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c5, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.phonesArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.emailsArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.linksArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.propsArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.urlsArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.addressesArray = _t.first);
    } }, inputs: { locationInfo: "locationInfo" }, outputs: { closeTab: "closeTab", saveTab: "saveTab" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 7, consts: [[3, "formGroup", "ngSubmit"], ["style", "text-align: center;", 4, "ngIf"], [4, "ngIf"], ["class", "even-ion-buttons bottomless", "color", "warning", 4, "ngIf"], ["formArrayName", "entries", 1, "topless"], ["class", "topless", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [3, "icon"], ["color", "warning", 1, "even-ion-buttons", "bottomless"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], [3, "disabled", "color", "title", "click"], ["slot", "start", 3, "icon"], [1, "topless"], [1, "topless", 3, "formGroupName"], [4, "ngFor", "ngForOf"], ["position", "floating"], ["type", "text", 3, "formControlName", "title"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "snow-outline"], ["type", "text", "rows", "2", "autoGrow", "true", 3, "formControlName", "title"], [3, "isSingleMode", "entryName", "addressList"], ["addressesArray", ""], [3, "parentEntity", "isArrayOptionalText", "phonesArray"], ["phonesArray", ""], ["listTitle", "Emails", "inputName", "Email", 3, "parentEntity", "isArrayOptional", "ID", "stringData", "parentName", "validateAs", "isArrayOptionalText"], ["emailsArray", ""], ["listTitle", "URLs", "inputName", "URL", 3, "parentEntity", "isArrayOptional", "ID", "stringData", "parentName", "validateAs", "isArrayOptionalText"], ["urlsArray", ""], [3, "parentEntity", "linksArray", "isArrayOptionalText"], ["linksArray", ""], [3, "parentEntity", "isArrayOptionalText", "propertiesArray"], ["propsArray", ""]], template: function LocationInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function LocationInfoComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, LocationInfoComponent_ion_title_3_Template, 3, 2, "ion-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, LocationInfoComponent_br_5_Template, 1, 0, "br", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LocationInfoComponent_ion_buttons_6_Template, 7, 8, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, LocationInfoComponent_div_8_Template, 4, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, LocationInfoComponent_ion_buttons_10_Template, 7, 8, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, LocationInfoComponent_br_11_Template, 1, 0, "br", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.subArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonTextarea, _action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_7__.ArrayAddressesComponent, _action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_1__.ArrayPhonesComponent, _action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_2__.ArrayStringsComponent, _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_4__.ArrayLinksComponent, _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_3__.PropertiesArrayComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tbG9jYXRpb24taW5mby5jb21wb25lbnQuc2NzcyJ9 */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 1937:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-map-roles/action-map-roles.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionMapRolesComponent": () => (/* binding */ ActionMapRolesComponent)
/* harmony export */ });
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 4609);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 7578);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 9102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);











const _c0 = ["linksArray"];
const _c1 = ["propsArray"];
function ActionMapRolesComponent_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r0.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx_r0.getActionFormTitle(), " ");
} }
function ActionMapRolesComponent_br_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
} }
function ActionMapRolesComponent_ion_buttons_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-button", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionMapRolesComponent_ion_buttons_5_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-button", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionMapRolesComponent_ion_buttons_5_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r2.actionName, " ", ctx_r2.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r2.isValidForm())("color", !ctx_r2.isValidForm() ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r2.getSaveButtonTitle(), " ");
} }
function ActionMapRolesComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" [", ctx_r3.chosenRoleId, "]");
} }
function ActionMapRolesComponent_ion_item_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-radio", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", role_r19.title, " [", role_r19.id, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", role_r19.id);
} }
function ActionMapRolesComponent_ion_item_27_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionSelect", function ActionMapRolesComponent_ion_item_27_Template_ion_checkbox_ionSelect_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.actorSelectChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r21 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](actor_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](actor_r21.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", actor_r21.uuid)("checked", ctx_r7.isCheckedActor(actor_r21.uuid));
} }
function ActionMapRolesComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.optionalLineParties());
} }
function ActionMapRolesComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Responsible for the Role of [", ctx_r9.chosenRoleId, "]");
} }
function ActionMapRolesComponent_ion_buttons_50_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-button", 22, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionMapRolesComponent_ion_buttons_50_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-button", 25, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ActionMapRolesComponent_ion_buttons_50_Template_ion_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r13.actionName, " ", ctx_r13.entityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r13.isValidForm())("color", !ctx_r13.isValidForm() ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r13.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r13.getSaveButtonTitle(), " ");
} }
const _c2 = function () { return { standalone: true }; };
var FormStates;
(function (FormStates) {
    FormStates[FormStates["StepOne"] = 1] = "StepOne";
    FormStates[FormStates["StepOptional"] = 10] = "StepOptional";
})(FormStates || (FormStates = {}));
class ActionMapRolesComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_3__.ActionAncestorSimpleArrayComponent {
    // @ViewChild('remarksInput', { static: true }) remarksInput: ElementRef;
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.selectedActorsUUIDs = [];
    }
    buildInputMap() {
        this.inputsMap.set('2-Role-Id', {
            fieldToMap: 'remarks',
            labelName: 'Remarks',
            inputTip: 'Remarks for responsible party',
        });
    }
    ngOnInit() {
        super.ngOnInit();
        this.defaultPluralTitle = 'Responsible Parties';
        if (!!this.responsibleParty) {
            this.localResponsible = this.responsibleParty;
        }
        else {
            this.localResponsible = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__.OscalCatalogEmpties.getEmptyResponsibleParty();
        }
        this.buildInputMap();
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
        // this.localResponsible.remarks = "Test2-test2-test2";
        // console.log('Calling AfterViewInit() 1~1~1~1~1~1~1 ');
        this.initMapState('ngOnInit');
    }
    ngAfterViewInit() {
        // console.log('Calling AfterViewInit() 2+2+2+2+2+2+2 ');
        this.initMapState('ngAfterViewInit');
    }
    ngAfterContentInit() {
        console.log('Calling AfterContentInit() 3-3-3-3-3-3-3 ');
        this.initMapState('ngAfterContentInit');
    }
    initMapState(context) {
        if (!!this.localResponsible) {
            this.chosenRoleId = (!!this.localResponsible.roleID) ? this.localResponsible.roleID : undefined;
            if (!!this.localResponsible.partyUuids) {
                //  && this.selectedActorsUUIDs.length !== this.localResponsible.partyUuids.length
                console.log(`@Ctx:${context}; InLen:${this.localResponsible.partyUuids.length}; `);
                this.selectedActorsUUIDs = this.getStringCopies(this.localResponsible.partyUuids); // this.localResponsible.partyUuids; //
                // this.selectedActorsUUIDs.forEach(uuid => { this.processCheckedActor(uuid); });
                // this.selectedActorsUUIDs = this.localResponsible.partyUuids;
            }
            this.selectedActorsUUIDs.forEach((uuid, idx) => console.log(`UUID[${idx}]=${this.selectedActorsUUIDs[idx]}`));
            this.localResponsible.partyUuids.forEach((uuid, idx) => console.log(`oUUID[${idx}]=${uuid}`));
            console.log(`Text = ${this.getSelectedPartiesAsText()}`);
        }
        // this.processCheckedActor();
    }
    getSelectedPartiesAsText() {
        let ret = '';
        if (!!this.selectedActorsUUIDs) {
            const len = this.selectedActorsUUIDs.length;
            if (len > 0) {
                this.selectedActorsUUIDs.forEach((chosenUuid, i) => {
                    const idxActor = this.actors.findIndex(e => e.uuid === chosenUuid);
                    if (idxActor >= 0) {
                        if (len > 1) {
                            ret = ret.concat((i > 0 && len !== 2) ? ', ' : '', i === len - 1 ? ' and ' : '', this.actors[idxActor].name);
                        }
                        else {
                            ret = this.actors[idxActor].name;
                        }
                    }
                });
                return ret;
            }
            else {
                return ret;
            }
        }
        else {
            return ret;
        }
    }
    getOptionalFieldsTitle() {
        if (!!this.chosenRoleId) {
            return `Add Optional Elements to the Party Responsible for [${this.chosenRoleId}] Role`;
        }
        else {
            return `Select Role To map to the Responsible Parties. This Will Enable Optional Fields`;
        }
    }
    getNewFormGroup() {
        return this.getControlsArrayByFieldToMap(this.roles);
    }
    getControlsArray() {
        return this.getNewFormGroupByFieldToMap();
    }
    roleGroupChange($event) {
        console.log(`GC==${$event.detail.value} I=${this.chosenRoleIndex}`);
        this.chosenRoleId = $event.detail.value;
        // this.chosenRoleIndex = $event.detail.value;
        // this.chosenRoleId = this.roles[this.chosenRoleIndex].id;
    }
    optionalLineOne() {
        let retValue = ' Optional Properties';
        if ((!!this.getSelectedPartiesAsText() && this.selectedActorsUUIDs.length > 0) || !!this.chosenRoleId) {
            retValue = ' Optional Properties of the';
        }
        return retValue;
    }
    optionalLineParties() {
        let retValue = ''; // 'Select responsible parties'
        if (this.isValidForm() || (this.selectedActorsUUIDs && this.selectedActorsUUIDs.length > 0)) {
            if (!!this.getSelectedPartiesAsText() && this.selectedActorsUUIDs.length === 1) {
                retValue = `Party: ${this.getSelectedPartiesAsText()}`;
            }
            if (!!this.getSelectedPartiesAsText() && this.selectedActorsUUIDs.length > 1) {
                retValue = `Parties: ${this.getSelectedPartiesAsText()}`;
            }
        }
        return retValue;
    }
    isValidForm() {
        return !!this.chosenRoleId && (!!this.selectedActorsUUIDs && this.selectedActorsUUIDs.length > 0);
    }
    isCheckedActor(uuid) {
        if (!this.responsibleParty) {
            return false;
        }
        if (!this.responsibleParty.partyUuids) {
            return false;
        }
        if (this.responsibleParty.partyUuids.includes(uuid)) {
            // const idx = this.responsibleParty.partyUuids.findIndex((e: string) => e === uuid);
            // this.processCheckedActor(uuid);
            return true;
        }
        return false;
    }
    processCheckedActor(uuidValue) {
        if (this.isCheckedActor(uuidValue)) {
            this.selectedActorsUUIDs.splice(this.selectedActorsUUIDs.indexOf(uuidValue), 1);
        }
        else {
            // if(!this.selectedActorsUUIDs.includes(uuid))
            this.selectedActorsUUIDs.push(uuidValue);
        }
    }
    actorSelectChange($event) {
        const uuid = $event.detail.value;
        // console.log(`A-Sel==${$event.detail.value} I=${this.selectedActorsUUIDs}`);
        // Assure that array of selected UUIDs is not empty
        if (!this.selectedActorsUUIDs) {
            this.selectedActorsUUIDs = new Array();
        }
        this.processCheckedActor(uuid);
    }
    onSave() {
        this.onSubmitData();
    }
    onCancelButton() {
        this.closeTab.emit(undefined);
    }
    getStringCopies(data) {
        // const newData = [...data];
        const newData = new Array();
        data.forEach((element) => {
            const cloned = ''.concat(element).trim(); // Object.assign(Object.create(Object.getPrototypeOf(element)), element);
            newData.push(cloned);
        });
        return newData;
    }
    onSubmitData() {
        const data = {
            roleID: (this.chosenRoleId) ? this.chosenRoleId : this.roles[this.chosenRoleIndex].id,
            partyUuids: this.getStringCopies(this.selectedActorsUUIDs),
            remarks: this.localResponsible.remarks,
            // TODO: Finish arrays info overhaul
            links: this.linksArray.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__.OscalCatalogEmpties.getEmptyLink),
            props: this.propsArray.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__.OscalCatalogEmpties.getEmptyProperty),
        };
        // console.log(`Rem:${this.localResponsible.remarks}; Model:${this.localResponsible.remarks}`);
        this.saveTab.emit(data);
    }
}
ActionMapRolesComponent.ɵfac = function ActionMapRolesComponent_Factory(t) { return new (t || ActionMapRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective)); };
ActionMapRolesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ActionMapRolesComponent, selectors: [["oscal-map-roles"]], viewQuery: function ActionMapRolesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.linksArray = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.propsArray = _t.first);
    } }, inputs: { responsibleParty: "responsibleParty", roles: "roles", actors: "actors" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 52, vars: 25, consts: [[1, "tab-frame"], [3, "formGroup", "ngSubmit"], ["style", "text-align: center;", 4, "ngIf"], [4, "ngIf"], ["class", "even-ion-buttons bottomless", "color", "warning", 4, "ngIf"], ["centered", ""], ["allow-empty-selection", "true", "name", "radio-role", 3, "ngModel", "ngModelOptions", "ngModelChange", "ionChange"], ["rolesRadio", ""], [4, "ngFor", "ngForOf"], ["value", "role_index", "allow-empty-selection", "false", 1, "toppless", "bottomless", 3, "ionChange"], ["actorsCheck", ""], ["class", "toppless bottomless", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["position", "floating"], ["rows", "6", "type", "text", 3, "title", "ngModel", "ngModelOptions", "ngModelChange"], ["remarksInput", ""], [3, "parentName", "isArrayOptionalText", "linksArray"], ["linksArray", ""], [3, "parentName", "isArrayOptionalText", "propertiesArray"], ["propsArray", ""], [3, "icon"], ["color", "warning", 1, "even-ion-buttons", "bottomless"], ["color", "danger", 3, "title", "click"], ["topCancel", ""], ["slot", "start", "icon", "close-circle-outline"], [3, "disabled", "color", "title", "click"], ["topSave", ""], ["slot", "start", 3, "icon"], ["slot", "start", "name", "role.title", 3, "value"], [1, "toppless", "bottomless"], ["slot", "start", 3, "value", "checked", "ionSelect"], ["bottomCancel", ""], ["bottomSave", ""]], template: function ActionMapRolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ActionMapRolesComponent_Template_form_ngSubmit_1_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ActionMapRolesComponent_ion_title_3_Template, 3, 2, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ActionMapRolesComponent_br_4_Template, 1, 0, "br", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ActionMapRolesComponent_ion_buttons_5_Template, 9, 8, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Select Role to Map (Below)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Select Parties for Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ActionMapRolesComponent_span_17_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-radio-group", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ActionMapRolesComponent_Template_ion_radio_group_ngModelChange_21_listener($event) { return ctx.chosenRoleId = $event; })("ionChange", function ActionMapRolesComponent_Template_ion_radio_group_ionChange_21_listener($event) { return ctx.roleGroupChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ActionMapRolesComponent_ion_item_23_Template, 4, 3, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-list", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function ActionMapRolesComponent_Template_ion_list_ionChange_25_listener($event) { return ctx.actorSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ActionMapRolesComponent_ion_item_27_Template, 6, 4, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-title", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ActionMapRolesComponent_span_33_Template, 3, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ActionMapRolesComponent_span_34_Template, 3, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ion-textarea", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ActionMapRolesComponent_Template_ion_textarea_ngModelChange_40_listener($event) { return ctx.localResponsible.remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "oscal-array-links", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "oscal-array-properties", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, ActionMapRolesComponent_ion_buttons_50_Template, 9, 8, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx.chosenRoleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.chosenRoleId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.actors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.optionalLineOne(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx.optionalLineParties() || ctx.isValidForm());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx.chosenRoleId || ctx.isValidForm());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Remarks for ", ctx.getSelectedPartiesAsText(), " (Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("title", "Remarks for the ", ctx.getSelectedPartiesAsText(), " go here");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.localResponsible.remarks)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("parentName", ctx.getSelectedPartiesAsText())("isArrayOptionalText", "(Optional)")("linksArray", ctx.localResponsible.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("parentName", ctx.getSelectedPartiesAsText())("isArrayOptionalText", "(Optional)")("propertiesArray", ctx.localResponsible.props);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAddCancelButtons);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_0__.ArrayLinksComponent, _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesArrayComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tbWFwLXJvbGVzLmNvbXBvbmVudC5zY3NzIn0= */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 6757:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-oscal-cat-author-view/action-oscal-cat-author-view.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OscalCatAuthorViewComponent": () => (/* binding */ OscalCatAuthorViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/providers/oscal-files/known-files.service */ 8958);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






function OscalCatAuthorViewComponent_div_0_ion_row_17_ion_col_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function OscalCatAuthorViewComponent_div_0_ion_row_17_ion_col_4_Template_ion_checkbox_ionChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const idx_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r5.onCheckBaselineUpdate($event, idx_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const baseline_r3 = ctx.$implicit;
    const idx_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", baseline_r3.cat_suffix, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", baseline_r3.pro_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", baseline_r3.pro_short_label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.baselineChecks[idx_r4]);
} }
function OscalCatAuthorViewComponent_div_0_ion_row_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Baselines: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OscalCatAuthorViewComponent_div_0_ion_row_17_ion_col_4_Template, 6, 4, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.knownCat.cat_baselines);
} }
function OscalCatAuthorViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Catalog");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-checkbox", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function OscalCatAuthorViewComponent_div_0_Template_ion_checkbox_ionChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onCheckEntityUpdate($event, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Baselines");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-checkbox", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function OscalCatAuthorViewComponent_div_0_Template_ion_checkbox_ionChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onCheckEntityUpdate($event, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OscalCatAuthorViewComponent_div_0_Template_ion_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.refreshSelectedCatParts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Refresh Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, OscalCatAuthorViewComponent_div_0_ion_row_17_Template, 5, 1, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.entityChecks[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.entityChecks[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showBaselines());
} }
class OscalCatAuthorViewComponent {
    constructor(knownFiles) {
        this.refreshCats = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); //() => void;
        this.knownFiles = knownFiles;
        this.entityChecks = new Array(2);
        const countBaselines = (this.knownCat && this.knownCat.cat_baselines && this.knownCat.cat_baselines.length > 0) ? this.knownCat.cat_baselines.length : 4;
        this.baselineChecks = new Array(countBaselines);
    }
    ngOnInit() {
    }
    refreshSelectedCatParts() {
        if (this.refreshCats) {
            this.refreshCats.emit();
            this.showInfo = false;
        }
    }
    showBaselines() {
        return !!this.knownCat && !!this.knownCat.cat_baselines && this.knownCat.cat_baselines.length > 0 && this.entityChecks[1];
    }
    onCheckEntityUpdate($o_event, id = -1) {
        const $event = $o_event;
        if (id < 2 && id >= 0) {
            this.entityChecks[id] = $event.detail.checked; //!this.entityChecks[id];
        }
        // console.log(`EB-Id: ${id}; Checked:${$event.detail.checked}`);
        // console.log($event);
        // console.log(this.entityChecks);
        $event.stopPropagation();
    }
    onCheckBaselineUpdate($o_event, id = -1) {
        const $event = $o_event;
        if (id < this.baselineChecks.length && id >= 0) {
            this.baselineChecks[id] = $event.detail.checked;
        }
        // console.log(`BL-Id: ${id};  Checked:${$event.detail.checked}`);
        // console.log($event);
        // console.log(this.baselineChecks);
        $event.stopPropagation();
    }
    formCommitArray() {
        return [this.entityChecks, this.baselineChecks];
    }
}
OscalCatAuthorViewComponent.ɵfac = function OscalCatAuthorViewComponent_Factory(t) { return new (t || OscalCatAuthorViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_0__.KnownOscalFilesService)); };
OscalCatAuthorViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OscalCatAuthorViewComponent, selectors: [["oscal-cat-author-view"]], inputs: { index: "index", showInfo: "showInfo", knownCat: "knownCat" }, outputs: { refreshCats: "refreshCats" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["icon", "newspaper-outline"], ["slot", "end", 3, "checked", "ionChange"], [3, "click"], ["slot", "start", "name", "refresh-circle-outline"], [4, "ngFor", "ngForOf"], [3, "color"], ["slot", "start", 3, "checked", "ionChange"]], template: function OscalCatAuthorViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OscalCatAuthorViewComponent_div_0_Template, 18, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tb3NjYWwtY2F0LWF1dGhvci12aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 184:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-party-info/action-party-info.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityTypeIcons": () => (/* binding */ EntityTypeIcons),
/* harmony export */   "ActionPartyInfoComponent": () => (/* binding */ ActionPartyInfoComponent)
/* harmony export */ });
/* harmony import */ var _action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-array-phones/action-array-phones.component */ 580);
/* harmony import */ var _action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-array-addresses/action-array-addresses.component */ 8434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../providers/logging/log-manager.service */ 3616);
/* harmony import */ var _action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-array-strings/action-array-strings.component */ 3789);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 4609);
/* harmony import */ var _action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-array-external-ids/action-array-external-ids.component */ 5142);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 7578);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
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






















const _c0 = ["phonesList"];
const _c1 = ["emailsList"];
const _c2 = ["addressList"];
const _c3 = ["organizationsList"];
const _c4 = ["linksList"];
const _c5 = ["uuidsList"];
const _c6 = ["extIdsList"];
const _c7 = ["propsList"];
function ActionPartyInfoComponent_div_2_ion_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-title", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("icon", ctx_r1.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", ctx_r1.getActionEntityTitle(), " ");
} }
function ActionPartyInfoComponent_div_2_ion_buttons_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-buttons", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionPartyInfoComponent_div_2_ion_buttons_5_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r13.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionPartyInfoComponent_div_2_ion_buttons_5_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r15.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("title", "Press to cancel changes to ", ctx_r2.getActionEntityTitle(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r2.actionName, " ", ctx_r2.entryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r2.isSaveAllowed())("color", !ctx_r2.localForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("icon", ctx_r2.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Save ", ctx_r2.getActualPartyName(), " ");
} }
function ActionPartyInfoComponent_div_2_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Regenerate UUID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ActionPartyInfoComponent_div_2_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Generate UUID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ActionPartyInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ActionPartyInfoComponent_div_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ActionPartyInfoComponent_div_2_ion_title_3_Template, 3, 2, "ion-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ActionPartyInfoComponent_div_2_ion_buttons_5_Template, 7, 7, "ion-buttons", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Entity Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-radio-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function ActionPartyInfoComponent_div_2_Template_ion_radio_group_ionChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.typeChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-radio", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ActionPartyInfoComponent_div_2_Template_ion_radio_onChange_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.typeChanged("person"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "ion-radio", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onChange", function ActionPartyInfoComponent_div_2_Template_ion_radio_onChange_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.typeChanged("organization"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Organization");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "ion-buttons", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ion-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionPartyInfoComponent_div_2_Template_ion_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.onAssignUUID(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, ActionPartyInfoComponent_div_2_span_43_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, ActionPartyInfoComponent_div_2_span_44_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "ion-textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "oscal-array-phones", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "oscal-array-string", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "oscal-address-list", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "oscal-array-string", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "oscal-array-links", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "oscal-array-properties", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "oscal-array-string", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "oscal-external-ids", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "ion-buttons", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "ion-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionPartyInfoComponent_div_2_Template_ion_button_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.onCancelButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "ion-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActionPartyInfoComponent_div_2_Template_ion_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.onSubmitData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.localForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.hideTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!ctx_r0.localForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.partyInfo.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r0.entryName, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("title", "Name of the ", ctx_r0.entryName, " goes here");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" UUID for ", ctx_r0.getActualPartyName(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("title", "Press Generate UUID or enter UUID of the ", ctx_r0.entryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.localForm.get("uuid").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.localForm.get("uuid").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Short Name for ", ctx_r0.getActualPartyName(), " (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("title", "Short name of the ", ctx_r0.entryName, "  goes here");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Remarks for ", ctx_r0.getActualPartyName(), " (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("title", "Remarks for the ", ctx_r0.entryName, " goes here");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ID", "phoneNumbers")("phonesArray", ctx_r0.partyInfo.telephoneNumbers)("parentEntity", ctx_r0.entryName)("parentName", ctx_r0.getActualPartyName())("isArrayOptionalText", "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ID", "emailAddresses")("stringData", ctx_r0.partyInfo.emailAddresses)("parentEntity", ctx_r0.entryName)("parentName", ctx_r0.getActualPartyName())("validateAs", ctx_r0.getEmailValidator())("isArrayOptionalText", "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("addressList", ctx_r0.partyInfo.addresses)("partyName", ctx_r0.getActualPartyName())("isArrayOptionalText", "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ID", "topOrgs")("stringData", ctx_r0.partyInfo.memberOfOrganizations)("isArrayOptionalText", "(Optional)")("parentEntity", ctx_r0.entryName)("parentName", ctx_r0.getActualPartyName());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ID", "topLinks")("linksArray", ctx_r0.partyInfo.links)("parentEntity", ctx_r0.entryName)("parentName", ctx_r0.getActualPartyName())("isArrayOptionalText", "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ID", "propsList")("propertiesArray", ctx_r0.partyInfo.props)("parentEntity", ctx_r0.entryName)("parentName", ctx_r0.getActualPartyName())("isArrayOptionalText", "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ID", "topUUIDs")("stringData", ctx_r0.partyInfo.locationUuids)("parentEntity", ctx_r0.entryName)("parentName", ctx_r0.getActualPartyName())("isArrayOptionalText", "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ID", "extIds")("externalIDsArray", ctx_r0.partyInfo.externalIDS)("parentEntity", ctx_r0.entryName)("parentName", ctx_r0.getActualPartyName())("isArrayOptionalText", "(Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("title", "Press to cancel changes to ", ctx_r0.actionName, " ", ctx_r0.entryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("title", "Press to ", ctx_r0.actionName, " ", ctx_r0.entryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.localForm.valid)("color", !ctx_r0.localForm.valid ? "dark" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("icon", ctx_r0.iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Save ", ctx_r0.getActualPartyName(), " ");
} }
var EntityTypeIcons;
(function (EntityTypeIcons) {
    EntityTypeIcons["Person"] = "body-outline";
    EntityTypeIcons["Party"] = "beer-outline";
    EntityTypeIcons["Organization"] = "business-outline";
})(EntityTypeIcons || (EntityTypeIcons = {}));
class ActionPartyInfoComponent {
    // @ViewChild('addEditAddress', { static: true, read: ViewContainerRef }) public AddressVCR: ViewContainerRef;
    // loadedAddressComponents = [];
    constructor(formBuilder, modalController, parentFormDirect, LMS) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.parentFormDirect = parentFormDirect;
        this.LMS = LMS;
        this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.saveTab = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        // Hook up to the parent control's Form
        this.rootForm = this.parentFormDirect.form;
    }
    isSaveAllowed() {
        return this.createNew ? this.localForm.valid : true;
    }
    ngAfterViewInit() {
        // this.partyInfo.addresses
        // this.partyInfo.emailAddresses
        // this.partyInfo.memberOfOrganizations
        // this.partyInfo.links
        // this.partyInfo.locationUuids
    }
    ngOnInit() {
        this.saveIcon = !!this.iconName ? this.iconName : 'save-outline';
        this.iconName = !!this.iconName ? this.iconName : 'people-outline';
        console.log(`->actionName = ${this.actionName}\n->createNew = ${this.createNew}\n->Icon='${this.iconName}'\n->EntryName=${this.entryName}`);
        console.log(`Party Info = ${this.partyInfo}`);
        console.log(`Entity-Type=${this.partyInfo.type}`);
        this.x_addressList = !!this.partyInfo ? this.partyInfo.addresses : new Array();
        console.log(`Done with onInit`);
        // this.LMS.logData(this.formFields.get('emailAddresses').value);
        // this.LMS.logData(this.formFields.get('emailAddresses'));
        this.partyInfo.emailAddresses = this.coalesceEmptyArray(this.partyInfo.emailAddresses);
        this.partyInfo.addresses = this.coalesceEmptyArray(this.partyInfo.addresses);
        this.localForm = this.formBuilder.group({
            partyName: [this.partyInfo.name,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            ],
            shortName: [this.partyInfo.shortName,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)]),
            ],
            uuid: [this.partyInfo.uuid,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            ],
            remarks: [this.partyInfo.remarks,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1024)]),
            ],
            type: [this.partyInfo.type,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            ],
            emailAddresses: this.formBuilder.array(this.getEmailsArray(this.partyInfo.emailAddresses)),
            // addresses: this.formBuilder.array(
            //   this.getAddressesArray(this.partyInfo.addresses)
            // ), // this.getEmailsGroup(this.partyInfo.emailAddresses)
            addresses: this.formBuilder.array(this.getAddressesArray(this.partyInfo.addresses)),
        });
        this.rootForm.addControl('newEntry', this.localForm);
    }
    coalesceEmptyArray(theArray) {
        return theArray || new Array();
    }
    getActualPartyName() {
        const name = this.localForm.get('partyName').value;
        const type = (this.entryName === 'Organization') ? 'Organization' : 'Person';
        return (!!name) ? name : type;
    }
    typeChanged(event, newValue) {
        this.partyInfo.type = event.detail.value;
        const selectedName = event.detail.value;
        console.log(`Ret=${event.detail} Str=${selectedName} PT=${this.partyInfo.type}`);
        this.entryName = selectedName.charAt(0).toUpperCase() + selectedName.slice(1);
        if (this.entryName === 'Organization') {
            this.iconName = EntityTypeIcons.Organization;
        }
        else if (this.entryName === 'Person') {
            this.iconName = EntityTypeIcons.Person;
        }
        else {
            this.iconName = EntityTypeIcons.Party;
        }
        // console.log(`this.partyInfo.type=${this.partyInfo.type}`);
    }
    getActionEntityTitle() {
        if (!this.actionName || !['Add', 'Edit'].some(x => x === this.actionName)) {
            return this.createNew ? 'Adding '.concat(this.entryName) : 'Editing '.concat(this.entryName);
        }
        return this.actionName.concat('ing ', this.entryName);
    }
    getEmailValidator() {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email;
    }
    getEmailsArray(emails) {
        const controlArray = new Array();
        emails.forEach((element, index) => {
            // groupObject['email_' + index.toString()] = [element, Validators.email];
            controlArray.push(this.formBuilder.group({ email: [element, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email] }));
        });
        console.log(`Emails Group Object`);
        // this.LMS.logData(controlArray);
        return controlArray;
    }
    onAddEmail(element = '') {
        const theValue = element || '';
        this.partyInfo.emailAddresses.push(theValue);
        const items = this.localForm.get('emailAddresses');
        items.push(this.formBuilder.group({ email: [theValue, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email] }));
    }
    onRemoveEmail(i) {
        const items = this.localForm.get('emailAddresses');
        items.controls.splice(i, 1); // Remove array element
        // this.formFields.patchValue({
        //   emailAddresses: this.formBuilder.array(this.getEmailsArray(this.partyInfo.emailAddresses))
        // });
    }
    getAddressesArray(addresses) {
        addresses = addresses || new Array();
        const controlArray = new Array();
        addresses.forEach((theAddress, index) => {
            // groupObject['email_' + index.toString()] = [element, Validators.email];
            controlArray.push(this.formBuilder.group({ address: [theAddress] }));
        });
        console.log(`Addresses Group Object`);
        this.LMS.logData(controlArray);
        return controlArray;
    }
    onAddAddress(element = null) {
        const emptyAddress = {
            city: 'New York',
            country: 'Our Great One',
            addrLines: new Array(),
            postalCode: '12345',
            state: '',
            type: '',
        };
        const theValue = element || emptyAddress;
        this.partyInfo.addresses.push(theValue);
        const items = this.localForm.get('addresses');
        items.push(this.formBuilder.group({ address: [theValue] }));
        // const componentFactory = this.CFR.resolveComponentFactory(AddressFormComponent);
        // const addressRef = this.AddressVCR.createComponent(componentFactory);
        // addressRef.instance.addressData = theValue;
        // this.loadedAddressComponents.push(addressRef);
    }
    onRemoveAddress(i) {
        const items = this.localForm.get('addresses');
        items.controls.splice(i, 1);
    }
    onAssignUUID() {
        this.localForm.patchValue({ uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])() });
    }
    onCancelButton() {
        if (this.isModal) {
            this.modalController.dismiss();
        }
        else {
            this.closeTab.emit(undefined);
            // this.theParent.closeAddEditPOoP(this.controlID, false, undefined);
        }
    }
    onSubmitData() {
        const data = {
            name: this.localForm.get('partyName').value,
            shortName: this.localForm.get('shortName').value,
            type: this.partyInfo.type,
            uuid: this.localForm.get('uuid').value,
            remarks: this.localForm.get('remarks').value,
        };
        data.addresses = this.addressListUI.formCommitArray();
        data.links = this.linksListUI.formCommitArray();
        data.emailAddresses = this.emailsListUI.formCommitArray();
        data.externalIDS = this.externalListUI.formCommitArray();
        data.locationUuids = this.uuidsListUI.formCommitArray();
        data.memberOfOrganizations = this.organizationsListUI.formCommitArray();
        data.telephoneNumbers = this.phonesListUI.formCommitArray();
        data.props = this.propsListUI.formCommitArray();
        this.saveTab.emit(data);
        /*
        // Remote chance to use it in modal for ad-on edits
        if (this.isModal) {
          this.modalController.dismiss(data);
        } else {
          this.theParent.closeAddEditPOoP(this.controlID, true, data);
        }
        */
    }
}
ActionPartyInfoComponent.ɵfac = function ActionPartyInfoComponent_Factory(t) { return new (t || ActionPartyInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_2__.LogManagerService)); };
ActionPartyInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ActionPartyInfoComponent, selectors: [["oscal-act-party-info"]], viewQuery: function ActionPartyInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c7, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.phonesListUI = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.emailsListUI = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.addressListUI = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.organizationsListUI = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.linksListUI = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.uuidsListUI = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.externalListUI = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.propsListUI = _t.first);
    } }, inputs: { parentForm: "parentForm", controlID: "controlID", theParent: "theParent", isModal: "isModal", hideTitle: "hideTitle", createNew: "createNew", addressName: "addressName", entryName: "entryName", partyInfo: "partyInfo", iconName: "iconName", actionName: "actionName" }, outputs: { closeTab: "closeTab", saveTab: "saveTab" }, decls: 3, vars: 1, consts: [[1, "tab-frame"], [4, "ngIf"], [3, "formGroup", "ngSubmit"], ["style", "text-align: center;", 4, "ngIf"], ["class", "even-ion-buttons", 4, "ngIf"], [1, "justify-content-between", "topless"], [1, "justify-content-between", "topless", "bottomless", "spaceless", 2, "text-align", "center"], [2, "width", "10%", "text-align", "left"], ["allow-empty-selection", "false", 1, "justify-content-between", "topless", "bottomless", "spaceless", 3, "value", "ionChange"], [1, "justify-content-between", "topless", "bottomless", "spaceless"], ["value", "person", 1, "spaceless", 3, "onChange"], ["position", "fixed", "checked", "true", 1, "spaceless"], ["icon", "body-outline", 1, "spaceless"], ["value", "organization", 1, "spaceless", 3, "onChange"], ["position", "fixed", 1, "spaceless"], ["icon", "business-outline", 1, "spaceless"], ["position", "floating"], ["formControlName", "partyName", "type", "text", 3, "title"], ["formControlName", "uuid", "type", "text", 3, "title"], ["slot", "end"], ["color", "secondary", "slot", "end", 3, "click"], ["slot", "start", "icon", "snow-outline"], ["formControlName", "shortName", "type", "text", 3, "title"], ["rows", "6", "formControlName", "remarks", "type", "text", 3, "title"], ["listTitle", "Phone Numbers", "inputName", "Phone", 3, "ID", "phonesArray", "parentEntity", "parentName", "isArrayOptionalText"], ["phonesList", ""], ["listTitle", "Emails", "inputName", "Email", 3, "ID", "stringData", "parentEntity", "parentName", "validateAs", "isArrayOptionalText"], ["emailsList", ""], ["entryName", "Address", 3, "addressList", "partyName", "isArrayOptionalText"], ["addressList", ""], ["listTitle", "Organizations Memberships", "inputName", "Membership", 3, "ID", "stringData", "isArrayOptionalText", "parentEntity", "parentName"], ["organizationsList", ""], ["listTitle", "Links", "inputName", "Link", 3, "ID", "linksArray", "parentEntity", "parentName", "isArrayOptionalText"], ["linksList", ""], ["listTitle", "Properties", "inputName", "Property", 3, "ID", "propertiesArray", "parentEntity", "parentName", "isArrayOptionalText"], ["propsList", ""], ["listTitle", "Location UUIDs", "inputName", "UUID", 3, "ID", "stringData", "parentEntity", "parentName", "isArrayOptionalText"], ["uuidsList", ""], ["listTitle", "Party External IDs", "inputName", "External ID", 3, "ID", "externalIDsArray", "parentEntity", "parentName", "isArrayOptionalText"], ["extIdsList", ""], [1, "even-ion-buttons"], ["color", "danger", 3, "title", "click"], ["slot", "start", "icon", "close-circle-outline"], [3, "disabled", "color", "title", "click"], ["slot", "start", 3, "icon"], [2, "text-align", "center"], [3, "icon"], ["color", "danger", "background", "warning", 3, "title", "click"]], template: function ActionPartyInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ActionPartyInfoComponent_div_2_Template, 97, 61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !!ctx.localForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTextarea, _action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_0__.ArrayPhonesComponent, _action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_3__.ArrayStringsComponent, _action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_1__.ArrayAddressesComponent, _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_4__.ArrayLinksComponent, _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesArrayComponent, _action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_5__.ArrayExternalIDsComponent], styles: [".padded-frame[_ngcontent-%COMP%] {\n  margin-top: 18;\n  margin-bottom: 18;\n  padding-top: 18;\n  padding-bottom: 18;\n}\n\n.rotate-text[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  \n  \n  -webkit-transform: rotate(-90deg);\n  \n  -moz-transform: rotate(-90deg);\n  \n  -ms-transform: rotate(-90deg);\n  \n  -o-transform: rotate(-90deg);\n  \n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1wYXJ0eS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUFDRyx5QkFBQTtFQUNELDJEQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnRUFBQTtBQUZGIiwiZmlsZSI6ImFjdGlvbi1wYXJ0eS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5wYWRkZWQtZnJhbWUge1xuICBtYXJnaW4tdG9wOiAxODtcbiAgbWFyZ2luLWJvdHRvbTogMTg7XG4gIHBhZGRpbmctdG9wOiAxODtcbiAgcGFkZGluZy1ib3R0b206IDE4O1xufVxuXG5cbi5yb3RhdGUtdGV4dHtcbiAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC8qIExlZ2FjeSB2ZW5kb3IgcHJlZml4ZXMgdGhhdCB5b3UgcHJvYmFibHkgZG9uJ3QgbmVlZC4uLiAqL1xuICAvKiBTYWZhcmkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAvKiBGaXJlZm94ICovXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgLyogSUUgKi9cbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC8qIE9wZXJhICovXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Myk7XG59Il19 */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */", "div[scrollx=true][_ngcontent-%COMP%], div[scrolly=true][_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true][_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 7794:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-select-baseline/action-select-baseline.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectBaselineComponent": () => (/* binding */ SelectBaselineComponent)
/* harmony export */ });
/* harmony import */ var src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/providers/oscal-files/known-files.service */ 8958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function SelectBaselineComponent_ion_col_7_ion_badge_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Activate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectBaselineComponent_ion_col_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-tab-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectBaselineComponent_ion_col_7_Template_ion_tab_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.setState(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectBaselineComponent_ion_col_7_ion_badge_6_Template, 2, 0, "ion-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "tab-selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.stateColor(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r0.stateColor(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.getTitle(1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isActive(1));
} }
function SelectBaselineComponent_ion_col_8_ion_badge_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Activate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectBaselineComponent_ion_col_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-tab-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectBaselineComponent_ion_col_8_Template_ion_tab_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.setState(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectBaselineComponent_ion_col_8_ion_badge_6_Template, 2, 0, "ion-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "tab-selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.stateColor(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.stateColor(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.getTitle(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isActive(2));
} }
function SelectBaselineComponent_ion_col_9_ion_badge_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Activate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectBaselineComponent_ion_col_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-tab-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectBaselineComponent_ion_col_9_Template_ion_tab_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.setState(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectBaselineComponent_ion_col_9_ion_badge_6_Template, 2, 0, "ion-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "tab-selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r2.stateColor(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r2.stateColor(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.getTitle(3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isActive(3));
} }
function SelectBaselineComponent_ion_col_10_ion_badge_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Activate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectBaselineComponent_ion_col_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-tab-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectBaselineComponent_ion_col_10_Template_ion_tab_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.setState(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectBaselineComponent_ion_col_10_ion_badge_6_Template, 2, 0, "ion-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "tab-selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.stateColor(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.stateColor(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.getTitle(4), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isActive(4));
} }
function SelectBaselineComponent_ion_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectBaselineComponent_ion_button_12_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.processBaseline(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.getTitle(ctx_r4.formState), "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.getIconForSelect());
} }
function SelectBaselineComponent_ion_row_14_ion_col_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-badge", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-radio", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SelectBaselineComponent_ion_row_14_ion_col_4_Template_ion_radio_ionChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const idx_r22 = restoredCtx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.onCheckBaselineUpdate($event, idx_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const baseline_r21 = ctx.$implicit;
    const idx_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", baseline_r21.cat_suffix, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", baseline_r21.pro_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", baseline_r21.pro_short_label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", idx_r22);
} }
function SelectBaselineComponent_ion_row_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectBaselineComponent_ion_row_14_ion_col_4_Template, 6, 4, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Choose ", ctx_r5.getTitle(ctx_r5.formState), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.knownCat.cat_baselines);
} }
var StateMark;
(function (StateMark) {
    StateMark[StateMark["noState"] = 0] = "noState";
    StateMark[StateMark["markAll"] = 1] = "markAll";
    StateMark[StateMark["preCheck"] = 2] = "preCheck";
    StateMark[StateMark["cutOut"] = 3] = "cutOut";
    StateMark[StateMark["rollBack"] = 4] = "rollBack";
})(StateMark || (StateMark = {}));
class SelectBaselineComponent {
    constructor(knownFiles) {
        // Baselines Handling
        this.showBaselinesOptions = false;
        this.showBaselinesRadio = false;
        this.baselinesMarked = false;
        this.baselinesSelected = false;
        this.baselinesTailored = false;
        this.formState = StateMark.noState;
        this.actionNames = ['No-State',
            'Mark All Baselines',
            'Pre-Check Baseline ...',
            'Cut-Out Baseline ...',
            'Default Cat'];
        this.knownFiles = knownFiles;
        this.knownCat = knownFiles.getActive();
        console.log(this.knownCat);
    }
    ngOnInit() { }
    // Baselines implementation
    flipShowBaselineOptions() {
        console.log(`Flipping show to ${!this.showBaselinesOptions}`);
        this.showBaselinesOptions = !this.showBaselinesOptions;
    }
    getIconForSelect() {
        if (this.formState == StateMark.markAll) {
            return 'brush';
        }
        if (this.formState == StateMark.rollBack) {
            return 'list';
        }
        if (this.formState == StateMark.preCheck) {
            return 'checkmark';
        }
        if (this.formState == StateMark.cutOut) {
            return 'cut-outline';
        }
    }
    getTitle(index) {
        return this.actionNames[index];
    }
    processBaseline() {
        this.showBaselinesOptions = false;
    }
    optionChosen() {
        return (StateMark.noState != this.formState);
    }
    setState(value) {
        this.formState = value;
    }
    stateColor(value) {
        if (value == this.formState) {
            return 'success';
        }
        else {
            return '';
        }
    }
    getTitleBL() {
        return (this.showBaselinesOptions) ? "Tailor Baselines  " : "";
    }
    getIconBL() {
        return (this.showBaselinesOptions) ? "options-outline" : "arrow-forward-circle-outline";
    }
    isActive(value) {
        return value == this.formState;
    }
    markAllBaselines() {
        this.formState = StateMark.markAll;
    }
    showBaselines() {
        this.showBaselinesRadio = (this.formState == StateMark.cutOut || this.formState == StateMark.preCheck);
        return this.showBaselinesRadio;
    }
    onCheckBaselineUpdate($event, idx) {
        // Figure out what to do on the check in the baseline
        throw new Error('Method not implemented.');
    }
}
SelectBaselineComponent.ɵfac = function SelectBaselineComponent_Factory(t) { return new (t || SelectBaselineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_0__.KnownOscalFilesService)); };
SelectBaselineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectBaselineComponent, selectors: [["oscal-select-baseline"]], decls: 15, vars: 8, consts: [[1, "topless,", "bottomless"], [1, "topless,", "bottomless", 2, "display", "flex", "justify-content", "space-evenly"], ["title", "Tailor Baselines Options", 1, "topless,", "bottomless", 3, "click"], [3, "icon"], ["class", "topless, bottomless", 4, "ngIf"], ["color", "warning", "class", "topless, bottomless", 3, "click", 4, "ngIf"], ["name", "level", "value", ""], [1, "topless,", "bottomless", 3, "ngClass", "click"], ["icon", "brush-outline", 3, "color"], [1, "topless,", "bottomless", 3, "color"], [4, "ngIf"], ["icon", "checkmark", 3, "color"], ["icon", "cut-outline", 3, "color"], ["icon", "list", 3, "color"], ["color", "warning", 1, "topless,", "bottomless", 3, "click"], [4, "ngFor", "ngForOf"], [3, "color"], ["slot", "start", 3, "value", "ionChange"]], template: function SelectBaselineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectBaselineComponent_Template_ion_button_click_4_listener() { return ctx.flipShowBaselineOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SelectBaselineComponent_ion_col_7_Template, 7, 5, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SelectBaselineComponent_ion_col_8_Template, 7, 5, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SelectBaselineComponent_ion_col_9_Template, 7, 5, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SelectBaselineComponent_ion_col_10_Template, 7, 5, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SelectBaselineComponent_ion_button_12_Template, 3, 2, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SelectBaselineComponent_ion_row_14_Template, 5, 2, "ion-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTitleBL(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.getIconBL());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBaselinesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBaselinesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBaselinesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBaselinesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.optionChosen() && ctx.showBaselinesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showBaselines() && ctx.showBaselinesOptions);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTabButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RadioValueAccessor], styles: [".baseline-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  --ion-grid-padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1zZWxlY3QtYmFzZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJhY3Rpb24tc2VsZWN0LWJhc2VsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2VsaW5lLWdyaWR7XG4gICAgcGFkZGluZzowcHg7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 5561:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-settings-element/action-settings-element.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionSettingsElementComponent": () => (/* binding */ ActionSettingsElementComponent)
/* harmony export */ });
/* harmony import */ var src_app_providers_app_state_state_nav_cat_cat_settings_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/providers/app-state/state-nav-cat/cat-settings-store.service */ 6178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);







const _c0 = ["valueStr"];
const _c1 = ["valueNum"];
const _c2 = ["valueBin"];
const _c3 = ["valueBinTrue"];
const _c4 = ["valueBinFalse"];
function ActionSettingsElementComponent_ion_col_5_ion_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.getUnitName());
} }
function ActionSettingsElementComponent_ion_col_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-input", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ActionSettingsElementComponent_ion_col_5_ion_label_4_Template, 2, 1, "ion-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("value", "\u201C", ctx_r0.getValue(), "\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.getUnitName());
} }
function ActionSettingsElementComponent_ion_col_6_ion_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.getUnitName());
} }
function ActionSettingsElementComponent_ion_col_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ActionSettingsElementComponent_ion_col_6_ion_label_4_Template, 2, 1, "ion-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r1.getValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.getUnitName());
} }
function ActionSettingsElementComponent_ion_col_7_ion_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.getUnitName());
} }
function ActionSettingsElementComponent_ion_col_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-radio-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ActionSettingsElementComponent_ion_col_7_Template_ion_radio_group_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.strBinValue = $event; })("ionChange", function ActionSettingsElementComponent_ion_col_7_Template_ion_radio_group_ionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.radioGroupChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "False\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-radio", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "True\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-radio", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ActionSettingsElementComponent_ion_col_7_ion_label_18_Template, 2, 1, "ion-label", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.strBinValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.strBinValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getUnitName());
} }
class ActionSettingsElementComponent {
    constructor(storeService) {
        this.storeService = storeService;
    }
    ngOnInit() {
        // Load the value from cookies
        this.value = this.storeEntry.value;
        console.log(this.storeEntry.value);
        console.log(this.storeEntry);
        if (this.isBoolean()) {
            console.log(this.storeEntry.value);
            this.strBinValue = this.storeEntry.value.toString();
            console.log(this.strBinValue);
        }
    }
    getUnitName() {
        return this.storeEntry.unitName || undefined;
    }
    getTitle() {
        return this.storeEntry.title || `Setting`;
    }
    getToolTip() {
        return this.storeEntry.toolTip || ``;
    }
    getButtonTitle() {
        return this.storeEntry.saveButtonTitle || `Save Row Setting`;
    }
    getValue() {
        // const item = this.storeService.getItemByName(this.storeEntry.storedName);
        const item = this.storeEntry;
        this.value = this.storeEntry ? item.value : '';
        // Chrome true/false != checked/unchecked. :(
        // console.log(this.value);
        // console.log(typeof (this.storeEntry.firstValue));
        // if (this.isBoolean()) {
        //   console.log(this.value);
        //   return this.value ? 'checked' : undefined;
        // }
        return this.value;
    }
    radioGroupChange($event) {
        console.log($event);
        this.value = ($event.detail.value === 'true');
        this.storeEntry.value = ($event.detail.value === 'true');
    }
    onClick() {
        // Save the value into cookies
        console.log(this.valueBin);
        console.log(this.valueNum);
        console.log(this.valueStr);
        console.log(this.value);
        console.log(this.storeEntry.value);
        if (this.isBoolean()) {
            console.log(this.valueBinFalse);
            console.log(this.valueBinTrue);
            this.storeEntry.value = this.strBinValue === 'true';
            this.value = this.strBinValue === 'true';
            //this.value = this.valueBin.checked;
            this.storeService.setStorageValue(this.storeEntry);
        }
        else if (this.isNumber()) {
            this.storeEntry.value = Number(this.valueNum.value);
            this.value = Number(this.valueNum.value);
            this.storeService.setStorageValue(this.storeEntry);
        }
        else if (this.isString()) {
            this.storeEntry.value = String(this.valueStr.value);
            this.value = String(this.valueStr.value);
            this.storeService.setStorageValue(this.storeEntry);
        }
        console.log(this.storeEntry.value);
        console.log(this.value);
    }
    isBoolean() {
        return 'boolean' == typeof (this.storeEntry.firstValue);
    }
    isString() {
        return 'string' == typeof (this.storeEntry.firstValue);
    }
    isNumber() {
        return 'number' == typeof (this.storeEntry.firstValue);
    }
}
ActionSettingsElementComponent.ɵfac = function ActionSettingsElementComponent_Factory(t) { return new (t || ActionSettingsElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_providers_app_state_state_nav_cat_cat_settings_store_service__WEBPACK_IMPORTED_MODULE_0__.CatSettingsStoreService)); };
ActionSettingsElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActionSettingsElementComponent, selectors: [["oscal-settings-element"]], viewQuery: function ActionSettingsElementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.valueStr = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.valueNum = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.valueBin = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.valueBinTrue = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.valueBinFalse = _t.first);
    } }, inputs: { storeEntry: "storeEntry" }, decls: 12, vars: 5, consts: [[4, "ngIf"], ["shape", "round", 3, "click"], ["type", "text", "title", "this.getToolTip()", 3, "value"], ["valueStr", ""], ["type", "number", "title", "this.getToolTip()", 3, "value"], ["valueNum", ""], [1, "topless", "bottomless"], ["allow-empty-selection", "false", 1, "topless", "bottomless", 3, "ngModel", "ngModelChange", "ionChange"], ["description", "Settings will be FALSE", "value", "false", "color", "danger"], ["valueBinFalse", ""], ["description", "Settings will be TRUE", "value", "true", "color", "success"], ["valueBinTrue", ""]], template: function ActionSettingsElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ActionSettingsElementComponent_ion_col_5_Template, 5, 2, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ActionSettingsElementComponent_ion_col_6_Template, 5, 2, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ActionSettingsElementComponent_ion_col_7_Template, 19, 3, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActionSettingsElementComponent_Template_ion_button_click_10_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isString());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isNumber());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBoolean());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getButtonTitle(), "");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tc2V0dGluZ3MtZWxlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8142:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-wait/action-wait.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionWaitComponent": () => (/* binding */ ActionWaitComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class ActionWaitComponent {
    constructor() { }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.title = this.title || 'Loading Information ...';
            this.color = this.color || 'tertiary';
        });
    }
}
ActionWaitComponent.ɵfac = function ActionWaitComponent_Factory(t) { return new (t || ActionWaitComponent)(); };
ActionWaitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActionWaitComponent, selectors: [["app-action-wait"]], inputs: { title: "title", timeout: "timeout", color: "color" }, decls: 6, vars: 2, consts: [[1, "transparent-modal"], [1, "modal-title"], [3, "color"], ["src", "./../../assets/images/loading.gif", 1, "progress-bar"]], template: function ActionWaitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonImg], styles: [".loading-modal[_ngcontent-%COMP%] {\n  --height: 54px;\n  --width: 86px;\n  --max-height: 54px;\n  --max-width: 186px;\n  height: 99px;\n  width: 333px;\n  max-height: 99px;\n  max-width: 333px;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  height: 50px;\n}\n\n.xxx-setting-modal[_ngcontent-%COMP%]   .xxx-modal-wrapper[_ngcontent-%COMP%] {\n  --ion-background-color: #f12000;\n  --border-radius: 20px;\n  --max-height: 55%;\n  --max-width: 80%;\n  --width: 80%;\n  --height: 50%;\n  --border-style: dotted;\n  --border-color: #428cff;\n  border-width: 5px;\n  top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi13YWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7QUFBRiIsImZpbGUiOiJhY3Rpb24td2FpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLW1vZGFsIHtcbiAgLS1oZWlnaHQ6IDU0cHg7XG4gIC0td2lkdGg6IDg2cHg7XG4gIC0tbWF4LWhlaWdodDogNTRweDtcbiAgLS1tYXgtd2lkdGg6IDE4NnB4O1xuXG4gIGhlaWdodDogOTlweDtcbiAgd2lkdGg6IDMzM3B4O1xuICBtYXgtaGVpZ2h0OiA5OXB4O1xuICBtYXgtd2lkdGg6IDMzM3B4O1xufVxuXG4ubW9kYWwtdGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2dyZXNzLWJhcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6NTBweDtcbn1cblxuLnh4eC1zZXR0aW5nLW1vZGFsIC54eHgtbW9kYWwtd3JhcHBlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmMTIwMDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1tYXgtaGVpZ2h0OiA1NSU7XG4gIC0tbWF4LXdpZHRoOiA4MCU7XG4gIC0td2lkdGg6IDgwJTtcbiAgLS1oZWlnaHQ6IDUwJTtcbiAgLS1ib3JkZXItc3R5bGU6IGRvdHRlZDtcbiAgLS1ib3JkZXItY29sb3I6ICM0MjhjZmY7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICB0b3A6IDIwJTtcbn1cblxuXG4iXX0= */"] });


/***/ }),

/***/ 9391:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/all-components/author-begin/author-begin.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorBeginComponent": () => (/* binding */ AuthorBeginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/oscal-files/known-files.service */ 8958);
/* harmony import */ var src_app_interfaces_known_locations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/known-locations */ 61);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/app-state/state-nav-cat/state-session-data.service */ 5667);
/* harmony import */ var _action_commons_action_oscal_cat_author_view_action_oscal_cat_author_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-commons/action-oscal-cat-author-view/action-oscal-cat-author-view.component */ 6757);
/* harmony import */ var _action_all_common_cat_the_base_cat_the_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-all-common/cat-the-base/cat-the-base.component */ 3765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);















const _c0 = ["catDetails"];
const _c1 = ["mainRadioGroup"];
function AuthorBeginComponent_div_14_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-radio", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "oscal-cat-author-view", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("refreshCats", function AuthorBeginComponent_div_14_div_6_Template_oscal_cat_author_view_refreshCats_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const itemIndex_r5 = restoredCtx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.handleCatRefresh(itemIndex_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oscalFile_r4 = ctx.$implicit;
    const itemIndex_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", itemIndex_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Create New Profile Based on ", oscalFile_r4.cat_label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("knownCat", oscalFile_r4)("index", itemIndex_r5)("showInfo", ctx_r3.showActiveCatInfo(itemIndex_r5));
} }
function AuthorBeginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00A0\u00A0Start with a Known OSCAL Catalog");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AuthorBeginComponent_div_14_div_6_Template, 10, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.oscalFiles);
} }
function AuthorBeginComponent_div_16_ion_grid_1_ion_row_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-radio", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthorBeginComponent_div_16_ion_grid_1_ion_row_5_Template_ion_button_click_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const runningSavedIndex_r12 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r13.presentDeleteWarning($event, runningSavedIndex_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthorBeginComponent_div_16_ion_grid_1_ion_row_5_Template_ion_button_click_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const runningSavedIndex_r12 = restoredCtx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r15.presentEditName($event, runningSavedIndex_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workItem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", workItem_r11.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", workItem_r11.name, " [", workItem_r11.uuid, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Press to remove ".concat(workItem_r11.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Press to edit ".concat(workItem_r11.name));
} }
function AuthorBeginComponent_div_16_ion_grid_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AuthorBeginComponent_div_16_ion_grid_1_ion_row_5_Template, 11, 5, "ion-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx_r9.getDraftsTitle(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, ctx_r9.savedWorkPromise));
} }
function AuthorBeginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthorBeginComponent_div_16_ion_grid_1_Template, 7, 4, "ion-grid", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.savedWork);
} }
class AuthorBeginComponent extends _action_all_common_cat_the_base_cat_the_base_component__WEBPACK_IMPORTED_MODULE_4__.CatTheBaseComponent {
    constructor(rootKnownFiles, rootSessionService, rootAlertControl) {
        super(rootKnownFiles, rootSessionService, rootAlertControl);
        this.rootKnownFiles = rootKnownFiles;
        this.rootSessionService = rootSessionService;
        this.rootAlertControl = rootAlertControl;
    }
    ngOnInit() {
        // console.log(`!!!!!! ng-Init !!!!!!`);
        // Pull up to UI the previously Saved Work-Items  
        // this.radioGroup.value = this.markActiveBrief();
        // this.readSavedBriefs();
        // this.readAndSetActiveBrief();
        this.initLists();
    }
    initLists() {
        this.readSavedBriefs();
        this.readAndSetActiveBrief();
    }
    /**
     * Handles refresh of the files by pulling them online again
     * @param {number} index - The array index of the KnownFile to be refreshed
     * @memberof AuthorBeginComponent
     */
    handleCatRefresh(index) {
        const resArray = this.catDetails.formCommitArray();
        const entityChecks = resArray[0];
        const baselineChecks = resArray[1];
        const cat = this.rootKnownFiles.getAllKnownFiles()[index];
        // console.log(cat);
        // User chose Cat to be refreshed
        if (cat && entityChecks[0]) {
            cat.needsRefresh = entityChecks[0];
        }
        // User chose Baselines to be refreshed
        if ((cat && resArray[1] && cat.cat_baselines && baselineChecks.length > 0)) {
            // Get the UserSelected check-marks count 
            // !!! Baselines array is sized static to avoid reading  
            // !!! the size dynamically and sync-failing occasionally.
            // !!! Hence, the MATH.MIN below
            const limit = Math.min(cat.cat_baselines.length, baselineChecks.length);
            for (let i = 0; i < limit; i++) {
                cat.cat_baselines[i].needsRefresh = baselineChecks[i];
                this.rootKnownFiles.refreshCat(cat.cat_baselines[i]);
            }
        }
        this.rootKnownFiles.refreshCat(cat);
        // console.log(cat);
    }
    /**
     * Size up the this.oscalFiles array
     * @returns {number}Sizes the known files array
     * @memberof AuthorBeginComponent
     */
    getCatListSize() {
        return this.oscalFiles.length;
    }
    /**
     * Mark the radio of the active catalog
     * @returns {string}
     * @memberof AuthorBeginComponent
     */
    markActiveBrief() {
        // console.log('Mark-Active-Brief');
        if (!!this.activeBrief) {
            // if (this.activeBrief.index < this.getCatListSize()) {
            //   this.activeRadioCat = this.activeBrief.index;
            //   console.log(`AC-ORIG:${this.activeRadioCat}`);
            // } else {
            this.activeItemString = this.activeBrief.uuid;
            if (!(this.activeItemString < this.getCatListSize().toString())) {
                this.chosenBrief = this.activeBrief;
            }
            // (this.getIndexByUUID(this.activeBrief.uuid)
            //   + this.getCatListSize()).toString();
            // console.log(`AC-UUID:${this.activeItemString}`);
            // }
        }
        else {
            this.activeItemString = '0';
        }
        // console.log(this.activeItemString);
        this.radioGroup.value = this.activeItemString;
        return this.activeItemString;
    }
    /**
     * Identify index of the previously saved work by UUID
     * @param {string} uuid
     * @returns {number}
     * @memberof AuthorBeginComponent
     */
    getIndexByUUID(uuid) {
        const index = this.savedWork.findIndex((x) => {
            return x.uuid === uuid;
        });
        return index;
    }
    /**
     * Read briefs from 'OC:All-Briefs' (NamedSessionNodes.SESSION_BRIEFS) for the UI & Session
     * @memberof AuthorBeginComponent
     */
    readSavedBriefs() {
        // Read the previously pulled-in Cats from Session
        if (!!_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.CurrentSessionData.savedBriefs) {
            this.savedWork = _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.CurrentSessionData.savedBriefs;
        }
        else {
            if (this.rootSessionService.isKeyValuePresent(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.NamedSessionNodes.SESSION_BRIEFS)) {
                this.savedWorkPromise = this.rootSessionService
                    .getKeyValueObject(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.NamedSessionNodes.SESSION_BRIEFS);
                this.savedWorkPromise.then((savedValue) => {
                    if (savedValue && Array.isArray(savedValue) && savedValue.length > 0) {
                        this.savedWork = savedValue;
                    }
                    else {
                        this.savedWork = Array();
                    }
                    // console.log(`Saved Work:`)
                    // console.log(this.savedWork);
                });
            }
        }
    }
    /**
     * Read briefs from 'OC:Active-Briefs' (NamedSessionNodes.ACTIVE_BRIEF) for the UI & Session
     * @memberof AuthorBeginComponent
     */
    readAndSetActiveBrief() {
        // Read the persisted Active-Brief
        if (this.appSessionService.isKeyValuePresent(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.NamedSessionNodes.ACTIVE_BRIEF)) {
            this.activeBriefPromise = this.appSessionService
                .getKeyValueObject(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.NamedSessionNodes.ACTIVE_BRIEF);
            this.activeBriefPromise.then((savedValue) => {
                if (savedValue) {
                    this.activeBrief = savedValue;
                    this.radioGroup.value = this.markActiveBrief();
                }
                else {
                    this.activeBrief = undefined;
                }
                // console.log(`Active Brief:`)
                // console.log(this.activeBrief);
            });
        }
        // console.log(`Active Brief:`)
        // console.log(this.activeBrief);
    }
    /**
     * Radio change handle function
     * @param {Event} $event
     * @memberof AuthorBeginComponent
     */
    handleRadioChange($event) {
        const value = $event.detail.value;
        // console.log($event);
        // console.log(value);
        // console.log(`value < this.getCatListSize() : ${value < this.getCatListSize()}`);
        if (value < this.getCatListSize()) {
            // Known files new template
            this.activeIndex = value;
            this.rootKnownFiles.setActive(value);
            this.chosenOscalCat = this.oscalFiles[value];
            this.chosenBrief = undefined;
            this.activeRadioOscalCatForStaleness = value;
            this.chosenBrief = this.createNewBrief();
            this.rootSessionService.activateBrief(this.chosenBrief);
            this.rootSessionService.activateSession(this.chosenBrief);
        }
        else {
            // Selected existing savedWork item
            this.chosenBrief = this.savedWork[this.getIndexByUUID(value)];
            // console.log('BEGIN: Activating brief');
            // console.log(this.chosenBrief);
            if (!!this.chosenBrief) {
                // Write down the selection!!!
                this.rootSessionService.activateBrief(this.chosenBrief);
                this.rootSessionService.activateSession(this.chosenBrief);
                // console.log('END: Activating brief');
            }
            if (!!this.chosenBrief
                && !!this.chosenBrief.originalIndexKF
                && this.chosenBrief.originalIndexKF >= 0) {
                // Record the Known Files Index if available
                this.chosenOscalCat = this.oscalFiles[this.chosenBrief.originalIndexKF];
            }
            else {
                this.chosenOscalCat = undefined;
            }
            this.activeItemString = value;
        }
    }
    /**
     * Verify if the downloaded files became stale
     * @param {number} idx
     * @returns {boolean}
     * @memberof AuthorBeginComponent
     */
    showActiveCatInfo(idx) {
        if (this.rootKnownFiles.isCatInfoStale(this.rootKnownFiles.getAllKnownFiles()[idx])) {
            return idx == this.activeRadioOscalCatForStaleness;
        }
    }
    popAlert(data, idx) {
        // console.log(data);
        // console.log(idx);
        // data = data + idx;
        // alert(`Alert:\n\t${data}\n\tItem Number ${idx}`);
    }
    /**
     * True if saved work exists
     *
     * @returns {boolean}
     * @memberof AuthorBeginComponent
     */
    hasSavedWork() {
        return (!!this.savedWork);
    }
    /**
     * Plug in editing pop-up for the Saved Items names
     * @param {*} $event
     * @param {number} theItemIndex
     * @memberof AuthorBeginComponent
     */
    editWorkItemName($event, theItemIndex) {
    }
    /**
     *
     * This is a routed page hook on PageWillLeave Event
     * @memberof AuthorBeginComponent
     */
    parentIonViewWillLeave() {
        this.activateSession();
    }
    /**
     * Creates a brief object for the session-preserved object
     * @param {string} newSessionUUID
     * @returns {SessionBrief} new Session brief returned
     * @memberof AuthorBeginComponent
     */
    createNewBrief() {
        const newSessionUUID = (0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])();
        const newBrief = new _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.SessionBrief(newSessionUUID, `Profile Draft Based on ${this.chosenOscalCat.cat_suffix}`, this.activeIndex);
        newBrief.catType = this.chosenOscalCat.cat_enum;
        // Debug-information for console debugging
        // console.log(`New-Brief`);
        // console.log(newBrief);
        return newBrief;
    }
    /**
     * Create a new session object {UUID}:Session-Data
     * @param {SessionBrief} newBrief
     * @returns {SessionData}
     * @memberof AuthorBeginComponent
     */
    createNewSession(newBrief) {
        const newSession = new _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.SessionData(newBrief.uuid, newBrief.name, newBrief.originalIndexKF);
        newSession.catType = this.chosenOscalCat.cat_enum;
        newSession.knownCat = this.chosenOscalCat;
        newSession.catalog = this.chosenOscalCat.content_cat.loadedEntity;
        // console.log(`New-Session`);
        // console.log(newSession);
        return newSession;
    }
    /**
     * Activation of the session
     * @param {boolean} [addSessionToList=true]
     * @memberof AuthorBeginComponent
     */
    activateSession(addSessionToList = true) {
        // console.log(`ChosenOscalCat & ChosenBrief`);
        // console.log(this.chosenOscalCat);
        // console.log(this.chosenBrief);
        if (this.chosenOscalCat && this.chosenBrief) {
            // User chose BASE CATALOG. We need to :
            // 1. Update session Briefs (Used Only in UI Here so far)
            // 2. Change the ActiveBrief to the new One [Persist It as Well!]
            // 3. Create a new persisted session with UUID (Will be used as an Active-Session persisted Entity)
            // console.log(`Cat-Activate - Chosen-Cat - Creating UUID`);
            // console.log(newSessionUUID)
            // const newBrief = this.createNewBrief();
            const newBrief = this.chosenBrief;
            const newSession = this.createNewSession(this.chosenBrief);
            const newSessionUUID = this.chosenBrief.uuid;
            // TODO: Add list scanning of the briefs to see if session already exists
            if (addSessionToList) {
                // Plug if the Saved Work was not yet created
                if (!this.savedWork) {
                    // console.log(`Creating new savedWork Array`);
                    this.savedWork = new Array();
                }
                // Add the new brief ONLY IF it is not in the saved work yet
                if (!(this.savedWork.indexOf(newBrief) >= 0)) {
                    this.savedWork.push(newBrief);
                }
                // console.log(`savedWork Array has Length:${this.savedWork.length}`);
                // console.log(`Saved work Array ${this.savedWork}`);
                // console.log(this.savedWork);
                this.persistSavedBriefs(newBrief); // 1. Update session Briefs... & 2. Change the ActiveBrief ...
                this.activeItemString = newSessionUUID; // Reflect in UI the Newly-Created ActiveBrief
                const theCat = this.getCatalog(newBrief);
                this.rootSessionService.createNewActiveSession(newBrief, theCat);
                this.chosenOscalCat = undefined;
            }
        }
        else if (!this.chosenOscalCat && this.chosenBrief) {
            // In the case of the chosen Brief-Work-Item need to :
            // 1. Change the ActiveBrief in Session (Activate Brief) to the Chosen-One 
            // 2. Persist ActiveBrief in Storage as Well!
            //    ** Session-Briefs-Array does not change (Only Selection does)
            // 3. Read and Assign the ActiveSession form UUID-*SessionData* field
            // console.log(`Chosen-ActiveSession`);
            // console.log(this.session.ActiveSession);
            this.rootSessionService.activateBrief(this.chosenBrief);
            this.rootSessionService.activateSession(this.chosenBrief);
        }
    }
    /**
     * Get catalog form the KnownFiles by brief
     * @private
     * @param {SessionBrief} brief
     * @returns
     * @memberof AuthorBeginComponent
     */
    getCatalog(brief) {
        if (this.oscalFiles) {
            if (brief.originalIndexKF < this.oscalFiles.length) {
                if (!!this.oscalFiles
                    && !!this.oscalFiles[brief.originalIndexKF]
                    && !!this.oscalFiles[brief.originalIndexKF].content_cat
                    && !!this.oscalFiles[brief.originalIndexKF].content_cat.loadedEntity)
                    return this.oscalFiles[brief.originalIndexKF].content_cat.loadedEntity;
            }
            return undefined;
        }
    }
    /**
     * Save modified briefs into the in-browser indexedDB
     * @private
     * @param {SessionBrief} newBrief
     * @memberof AuthorBeginComponent
     */
    persistSavedBriefs(newBrief) {
        this.rootSessionService.setKeyValueObject(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.NamedSessionNodes.SESSION_BRIEFS, this.savedWork)
            .then(x => {
            // console.log(`this.session.ActiveSession`);
            if (this.rootSessionService.getActiveBrief() !== newBrief) {
                this.rootSessionService.activateBrief(newBrief);
                this.initLists();
            }
            // console.log(this.session.ActiveBrief);
        }).catch((e) => {
            this.genericPromiseCatch(e, 'Catch-Error in persistSavedBriefs');
        });
    }
    /**
     * Handles caught generic promise errors
     *
     * @param {*} e - the caught error
     * @param {string} [extraInfo=undefined] - the error message for the context
     * @memberof AuthorBeginComponent
     */
    genericPromiseCatch(e, extraInfo = undefined) {
        if (extraInfo) {
            console.log(`${extraInfo}`);
        }
        else {
            console.log(`Error`);
        }
        console.log(e);
    }
    ngOnDestroy() {
        // console.log('Begin-Page Will Destroy!!!!!!');
        this.activateSession();
        this.initLists();
    }
    removeWorkItem($event, theItemIndex) {
        // TODO: before killing existing work, it would be nice 
        // for user to verify that button press is not a mistake.
        if (!!this.savedWork) {
            // console.log(`Item Index ${theItemIndex} Event Target:${$event.target}`);
            const item = this.savedWork[theItemIndex];
            this.savedWork.splice(theItemIndex, 1);
            // **********************************************
            // Delete the HEAVY-WEIGHT session object by UUID
            // console.log('Deleting UUID Session');
            // console.log(item.uuid);
            this.rootSessionService.removeSession(item.uuid);
            // **********************************************
            this.updateSavedItems();
        }
    }
    updateSavedItems() {
        if (this.savedWork.length > 0) {
            this.rootSessionService.setKeyValueObject(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.NamedSessionNodes.SESSION_BRIEFS, this.savedWork)
                .then((newData) => {
                this.savedWork = newData;
                this.readSavedBriefs();
                this.readActiveBrief();
            }).catch((error) => {
                this.genericPromiseCatch(error, 'Catch-Error in removeWorkItem');
            });
        }
        else {
            this.rootSessionService.removeItemByKey(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.NamedSessionNodes.SESSION_BRIEFS);
            this.rootSessionService.removeItemByKey(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.NamedSessionNodes.ACTIVE_BRIEF);
            this.savedWork = null;
        }
    }
    /**
     * Present delete Alert pop-up warning with Yes-Delete/Cancel and hook-up lambda-events
     * @param {Event} $event
     * @param {number} itemIndex
     * @memberof AuthorBeginComponent
     */
    presentDeleteWarning($event, itemIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(itemIndex);
            // console.log(this.savedWork);
            // console.log(this.savedWork[itemIndex]);
            const item = this.savedWork[itemIndex];
            const name = (item.fullName) ? item.fullName : item.name;
            const uuid = item.uuid;
            // console.log(name);
            const summaryHtml = `<div>Are you sure you want to delete</div><br />`
                + `<div> <strong>Saved Work:</strong></div>`
                + `<div><strong>"${name}"<strong></div><br />`
                + `<div>With UUID:<div>`
                + ` <div><strong>[${uuid}]?</div></strong></div><br />`;
            const alert = yield this.rootAlertControl.create({
                header: `Delete Saved Work ?`,
                //subHeader: `Are You Sure?`,
                message: summaryHtml,
                cssClass: 'delete-alert-global-class',
                buttons: [
                    {
                        text: 'Delete',
                        handler: data => {
                            this.removeWorkItem($event, itemIndex);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            return false;
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    /**
     * Rename work item Alert pop-up
     * @param {Event} $event
     * @param {number} itemIndex
     * @memberof AuthorBeginComponent
     */
    presentEditName($event, itemIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const item = this.savedWork[itemIndex];
            const name = (item.fullName) ? item.fullName : item.name;
            const uuid = item.uuid;
            const prompt = yield this.rootAlertControl.create({
                cssClass: 'prompt-global-class',
                header: `Rename ${name}`,
                message: `Enter new name for the saved item<br/> ${uuid}`,
                inputs: [
                    {
                        name: 'title',
                        placeholder: 'Title',
                        value: name,
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            // console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: data => {
                            // console.log('Saved clicked');
                            // console.log(data);
                            this.savedWork[itemIndex].name = data.title;
                            this.updateSavedItems();
                        }
                    }
                ]
            });
            prompt.present();
        });
    }
    /**
     * Returns true if cat baselines are present
     * @param {KnownOscalFileLocation} fileInfo
     * @returns
     * @memberof AuthorBeginComponent
     */
    hasBaseLines(fileInfo) {
        // console.log(fileInfo.cat_baselines);
        return !!fileInfo.cat_baselines && fileInfo.cat_baselines.length > 0;
    }
    /**
     * Returns the List Title for SavedItems
     * @returns {string}
     * @memberof AuthorBeginComponent
     */
    getDraftsTitle() {
        if (this.savedWork && this.savedWork.length > 0) {
            return `Continue with the Previously Saved Work`;
        }
        else {
            return '';
        }
    }
}
AuthorBeginComponent.ɵfac = function AuthorBeginComponent_Factory(t) { return new (t || AuthorBeginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_0__.KnownOscalFilesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_2__.CurrentSessionData), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController)); };
AuthorBeginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AuthorBeginComponent, selectors: [["oscal-author-begin"]], viewQuery: function AuthorBeginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.catDetails = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.radioGroup = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 3, consts: [["value", "this.activeItemString", 3, "ngModel", "ionChange", "ngModelChange"], ["mainRadioGroup", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "value"], [3, "knownCat", "index", "showInfo", "refreshCats"], ["catDetails", ""], ["color", "danger", 3, "title", "click"], ["icon", "trash-outline"], [3, "title", "click"], ["icon", "pencil-outline"]], template: function AuthorBeginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00A0\u00A0Select Authoring Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Start new profile with a catalog, or continue previously saved session. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-radio-group", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function AuthorBeginComponent_Template_ion_radio_group_ionChange_12_listener($event) { return ctx.handleRadioChange($event); })("ngModelChange", function AuthorBeginComponent_Template_ion_radio_group_ngModelChange_12_listener($event) { return ctx.activeItemString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AuthorBeginComponent_div_14_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AuthorBeginComponent_div_16_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.activeItemString);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.newDraft && ctx.hasSavedWork());
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _action_commons_action_oscal_cat_author_view_action_oscal_cat_author_view_component__WEBPACK_IMPORTED_MODULE_3__.OscalCatAuthorViewComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3ItYmVnaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4216:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/all-components/authoring-mode/authoring-mode.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoringModeComponent": () => (/* binding */ AuthoringModeComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/logging/log-manager.service */ 3616);
/* harmony import */ var _interfaces_app_state_app_state_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../interfaces/app-state/app-state-types */ 5160);
/* harmony import */ var _providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/oscal-files/known-files.service */ 8958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);

//import { File } from '@ionic-native/file/ngx';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
//import { AppFilesService } from './../../../providers/app-state/app-files/app-files.service';
//import { CatalogSamples } from '../../info-providers/app-state/state-oscal-document/oscal-catalog-sample';import { Component, OnInit } from '@angular/core';









function AuthoringModeComponent_ion_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-progress-bar", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", undefined);
} }
function AuthoringModeComponent_ion_row_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-radio", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthoringModeComponent_ion_row_7_Template_ion_radio_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const choice_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.radioClick(choice_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const choice_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r1.modeLabels[choice_r4].on || ctx_r1.modeFormDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", choice_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.modeLabels[choice_r4].label);
} }
function AuthoringModeComponent_ion_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthoringModeComponent_ion_button_13_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.submitReset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Redo Method Selection (<< Back) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthoringModeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Select Authoring Method ( Step 2 of 2 ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Selected Mode: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r3.modeLabels[ctx_r3.mode].label, " ");
} }
const _c0 = function () { return { standalone: true }; };
var FormState;
(function (FormState) {
})(FormState || (FormState = {}));
class AuthoringModeComponent {
    constructor(knownFiles, fileOperations, platform, logger) {
        this.knownFiles = knownFiles;
        this.fileOperations = fileOperations;
        this.platform = platform;
        this.logger = logger;
        this.showLoader = false;
        this.modeFormDone = false;
        this.modeValues = Object.values(_interfaces_app_state_app_state_types__WEBPACK_IMPORTED_MODULE_1__.AuthoringMode).map((x) => { if ('number' === typeof (x)) {
            return x;
        } });
        this.modeLabels = [
            { label: 'No Mode Selected', on: true },
            { label: 'Simple Include / Exclude / Edit From a Single Catalog Template (...)', on: true },
            { label: 'Simple Include/Exclude/Edit from Multiple Catalog Templates (...)', on: false },
            { label: 'Author a New Baseline from Existing Catalog (...)', on: true },
            { label: 'Author a New Catalog from Scratch', on: false },
        ];
        /*, private appFiles: AppFilesService */
        this.hideProgressBar(false);
        for (const e in _interfaces_app_state_app_state_types__WEBPACK_IMPORTED_MODULE_1__.AuthoringMode) {
            if (true) {
                console.log(` Logging in Constructor ${e}`);
            }
        }
        const cats = this.knownFiles.getKnownCatSampleFiles();
        // const pros = KnownOscalFilesService.getKnownProfileSampleFiles();
        this.modeLabels = [
            {
                label: 'Load Previously Saved Work',
                on: true
            },
            {
                label: 'Simple Include / Exclude / Edit From a Single Catalog Template (...)',
                on: true
            },
            {
                label: 'Simple Include/Exclude/Edit from Multiple Catalog Templates (...)',
                on: false
            },
            {
                label: 'Author a New Baseline from Existing Catalog (...)',
                on: true
            },
            {
                label: 'Author a New Catalog from Scratch',
                on: false
            },
        ];
        // this.writeJsonFile();
        // this.fileOperations.writeFile('/uiOSCAL' /* path */, 'workFiles.json', '{"X":"Test-Test-Test-Test-Test-Test"}', { replace: true });
    }
    hideProgressBar(flag = true) {
        this.showLoader = !flag;
    }
    // async writeJsonFile(
    //   filePath: string
    //     = 'OSCAL-CAT/history.txt',
    //   jsonData: string
    //     = '{"list": ["This is a test #1","This is a test #2","This is a test #3$%^$#@"]}'
    // ) {
    //   await Filesystem.writeFile({
    //     path: filePath,
    //     data: jsonData,
    //     directory: Directory.Data,
    //     encoding: Encoding.UTF8,
    //   });
    // }
    // async readFile() {
    //   const contents = await Filesystem.readFile({
    //     directory: Directory.Data,
    //     path: 'OSCAL-CAT/history.txt',
    //     encoding: Encoding.UTF8,
    //   });
    //   return contents;
    // }
    // async writeFile(information: string) {
    //   const contents = await Filesystem.writeFile({
    //     data: information,
    //     directory: Directory.Data,
    //     path: 'OSCAL-CAT/history.txt',
    //     encoding: Encoding.UTF8,
    //   });
    //   return;
    // }
    getItemLabel(choice = 0) {
        console.log(`getLabel ${choice}`);
        return this.modeLabels[choice];
    }
    ngOnInit() {
        // this.configDataDir = Directory.Data;
        // this.platform.ready().then(
        //   () => {
        //     const extDD = this.fileOperations.externalApplicationStorageDirectory;
        //     const extRD = this.fileOperations.externalRootDirectory;
        //     const tmpD = this.fileOperations.tempDirectory;
        //     this.configDataDir = this.fileOperations.dataDirectory;
        //     console.log(`
        //      Platform: ${this.platform.platforms()}
        //      IsDesktop: ${this.platform.is('desktop')}
        //      DataDir:${this.configDataDir}
        //      DocsDir:${this.fileOperations.documentsDirectory}
        //      AppDir: ${this.fileOperations.applicationDirectory}
        //      ExtDocDir:${extDD}
        //      TemDir:${tmpD}
        //      ExtRD:${extRD}
        //      `);
        //     this.fileOperations.createDir('' /* path */, '/uiOSCAL'/* dir-name */, false /*replace*/);
        //     this.fileOperations.createFile('/uiOSCAL'/* path */, 'workFiles.json' /* file-name */, false /*replace*/);
        //     // writeFile(path: string, fileName: string, text: string | Blob | ArrayBuffer, options?: IWriteOptions): Promise<any>
        //     this.fileOperations.readAsBinaryString('/uiOSCAL' /* path */, 'workFiles.json')
        //       .then(
        //         (x) => {
        //           console.log(`Read:${x}; Dir:${this.fileOperations.applicationDirectory}`);
        //         }).catch(() => { console.log(`Error!!!`); });
        //   });
        // // this.writeFile('{"X":"Test-Test-Test-Test-Test-Test"}');
        // // this.readFile()
        //   .then((x) => {
        //     this.logger.logData(x, 3);
        //     console.log(`\nX.Data: ${x.data.toString()}\nDir: ${Directory.Documents}`);
        //     let jsonStr = x.data.replace(/\\n/g, '\\n')
        //       .replace(/\\'/g, '\\\'')
        //       .replace(/\\"/g, '\\"')
        //       .replace(/\\&/g, '\\&')
        //       .replace(/\\r/g, '\\r')
        //       .replace(/\\t/g, '\\t')
        //       .replace(/\\b/g, '\\b')
        //       .replace(/\\f/g, '\\f');
        //     jsonStr = jsonStr.replace(/[\u0000-\u001F]+/g, '');
        //     console.log(`\nJ.Data: ${jsonStr}`);
        //     const obj = JSON.parse(jsonStr);
        //   });
        this.hideProgressBar(true);
    }
    radioClick(selected) {
        console.log(`Value: ${selected}`);
        this.mode = selected;
        console.log(`Enum: ${this.mode}`);
        this.hideProgressBar(true);
    }
    submitModeForm() {
        this.modeFormDone = (this.mode !== undefined && this.mode !== 0);
        console.log(`Button on mode: ${this.mode}, formOnOff: ${this.modeFormDone}`);
    }
    submitReset() {
        this.modeFormDone = false;
    }
}
AuthoringModeComponent.ɵfac = function AuthoringModeComponent_Factory(t) { return new (t || AuthoringModeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_2__.KnownOscalFilesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](File), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_0__.LogManagerService)); };
AuthoringModeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthoringModeComponent, selectors: [["oscal-authoring-mode"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([File, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform])], decls: 15, vars: 9, consts: [[3, "type", 4, "ngIf"], ["value", "mode", 3, "ngModel", "disabled", "ngModelOptions", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "disabled", "click"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "type"], [3, "disabled"], ["slot", "start", 3, "value", "click"], [3, "click"]], template: function AuthoringModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthoringModeComponent_ion_progress_bar_1_Template, 1, 1, "ion-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AuthoringModeComponent_Template_ion_radio_group_ngModelChange_3_listener($event) { return ctx.mode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Select Authoring Method ( Step 1 of 2 ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AuthoringModeComponent_ion_row_7_Template, 6, 3, "ion-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthoringModeComponent_Template_ion_button_click_10_listener() { return ctx.submitModeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Select Authoring Method ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AuthoringModeComponent_ion_button_13_Template, 2, 0, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AuthoringModeComponent_div_14_Template, 11, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.mode)("disabled", ctx.modeFormDone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.modeValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.modeFormDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.modeFormDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.modeFormDone);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpbmctbW9kZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8698:
/*!***************************************************************************!*\
  !*** ./src/app/pages/all-components/back-matter/back-matter.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackMatterComponent": () => (/* binding */ BackMatterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BackMatterComponent {
    constructor() { }
    ngOnInit() { }
}
BackMatterComponent.ɵfac = function BackMatterComponent_Factory(t) { return new (t || BackMatterComponent)(); };
BackMatterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackMatterComponent, selectors: [["oscal-back-matter"]], decls: 2, vars: 0, template: function BackMatterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back-Matter Here (After We Figure Out UI for IT)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrLW1hdHRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7339:
/*!***********************************************************!*\
  !*** ./src/app/pages/all-components/components.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-commons/action-array-roles/action-array-roles.component */ 8417);
/* harmony import */ var _action_commons_action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-commons/action-array-addresses/action-array-addresses.component */ 8434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _select_families_select_families_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-families/select-families.component */ 5535);
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control/control.component */ 3246);
/* harmony import */ var _back_matter_back_matter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back-matter/back-matter.component */ 8698);
/* harmony import */ var _meta_info_meta_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meta-info/meta-info.component */ 7225);
/* harmony import */ var _authoring_mode_authoring_mode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authoring-mode/authoring-mode.component */ 4216);
/* harmony import */ var _nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-cat/nav-cat.component */ 3753);
/* harmony import */ var _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-commons/action-party-info/action-party-info.component */ 184);
/* harmony import */ var _action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action-commons/action-wait/action-wait.component */ 8142);
/* harmony import */ var _action_commons_action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./action-commons/action-array-strings/action-array-strings.component */ 3789);
/* harmony import */ var _action_commons_action_ancestor_base_action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./action-commons/action-ancestor-base/action-ancestor-base.component */ 6426);
/* harmony import */ var _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./action-commons/action-array-links/action-array-links.component */ 4609);
/* harmony import */ var _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./action-commons/action-location-info/action-location-info.component */ 7575);
/* harmony import */ var _action_commons_action_array_locations_action_array_locations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./action-commons/action-array-locations/action-array-locations.component */ 1839);
/* harmony import */ var _action_commons_action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./action-commons/action-array-properties/action-array-properties.component */ 7578);
/* harmony import */ var _action_commons_action_array_document_id_action_array_document_id_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./action-commons/action-array-document-id/action-array-document-id.component */ 2543);
/* harmony import */ var _action_commons_action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./action-commons/action-array-phones/action-array-phones.component */ 580);
/* harmony import */ var _action_commons_action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./action-commons/action-array-external-ids/action-array-external-ids.component */ 5142);
/* harmony import */ var _action_commons_action_map_roles_action_map_roles_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./action-commons/action-map-roles/action-map-roles.component */ 1937);
/* harmony import */ var _author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./author-begin/author-begin.component */ 9391);
/* harmony import */ var _action_commons_action_select_baseline_action_select_baseline_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./action-commons/action-select-baseline/action-select-baseline.component */ 7794);
/* harmony import */ var _action_commons_action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./action-commons/action-cat-params/action-cat-params.component */ 3958);
/* harmony import */ var _action_commons_action_cat_controls_action_cat_controls_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./action-commons/action-cat-controls/action-cat-controls.component */ 94);
/* harmony import */ var _action_commons_action_oscal_cat_author_view_action_oscal_cat_author_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./action-commons/action-oscal-cat-author-view/action-oscal-cat-author-view.component */ 6757);
/* harmony import */ var _action_commons_action_settings_element_action_settings_element_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./action-commons/action-settings-element/action-settings-element.component */ 5561);
/* harmony import */ var _action_all_common_cat_the_base_cat_the_base_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./action-all-common/cat-the-base/cat-the-base.component */ 3765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);
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











// Actions Pop-Ups























class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_select_families_select_families_component__WEBPACK_IMPORTED_MODULE_2__.SelectFamiliesComponent, _nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_7__.NavCatComponent, _action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_9__.ActionWaitComponent, _action_commons_action_ancestor_base_action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_11__.ActionAncestorBaseComponent,
        _action_commons_action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_1__.ArrayAddressesComponent, _action_commons_action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_10__.ArrayStringsComponent, _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_12__.ArrayLinksComponent, _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_13__.LocationInfoComponent, _action_commons_action_array_locations_action_array_locations_component__WEBPACK_IMPORTED_MODULE_14__.LocationsArrayComponent,
        _back_matter_back_matter_component__WEBPACK_IMPORTED_MODULE_4__.BackMatterComponent, _control_control_component__WEBPACK_IMPORTED_MODULE_3__.ControlComponent, _meta_info_meta_info_component__WEBPACK_IMPORTED_MODULE_5__.MetaInfoComponent, _authoring_mode_authoring_mode_component__WEBPACK_IMPORTED_MODULE_6__.AuthoringModeComponent, _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_8__.ActionPartyInfoComponent,
        _action_commons_action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_15__.PropertiesArrayComponent, _action_commons_action_array_document_id_action_array_document_id_component__WEBPACK_IMPORTED_MODULE_16__.DocumentIDArrayComponent, _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_0__.ActionArrayRolesComponent, _action_commons_action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_17__.ArrayPhonesComponent,
        _action_commons_action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_18__.ArrayExternalIDsComponent, _action_commons_action_map_roles_action_map_roles_component__WEBPACK_IMPORTED_MODULE_19__.ActionMapRolesComponent, _author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_20__.AuthorBeginComponent, _action_commons_action_select_baseline_action_select_baseline_component__WEBPACK_IMPORTED_MODULE_21__.SelectBaselineComponent,
        _action_commons_action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_22__.CatParamsComponent, _action_commons_action_cat_controls_action_cat_controls_component__WEBPACK_IMPORTED_MODULE_23__.CatControlsComponent, _action_commons_action_oscal_cat_author_view_action_oscal_cat_author_view_component__WEBPACK_IMPORTED_MODULE_24__.OscalCatAuthorViewComponent, _action_commons_action_settings_element_action_settings_element_component__WEBPACK_IMPORTED_MODULE_25__.ActionSettingsElementComponent, _action_all_common_cat_the_base_cat_the_base_component__WEBPACK_IMPORTED_MODULE_26__.CatTheBaseComponent], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule], exports: [_select_families_select_families_component__WEBPACK_IMPORTED_MODULE_2__.SelectFamiliesComponent, _nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_7__.NavCatComponent, _action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_9__.ActionWaitComponent, _action_commons_action_ancestor_base_action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_11__.ActionAncestorBaseComponent,
        _action_commons_action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_1__.ArrayAddressesComponent, _action_commons_action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_10__.ArrayStringsComponent, _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_12__.ArrayLinksComponent, _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_13__.LocationInfoComponent, _action_commons_action_array_locations_action_array_locations_component__WEBPACK_IMPORTED_MODULE_14__.LocationsArrayComponent,
        _back_matter_back_matter_component__WEBPACK_IMPORTED_MODULE_4__.BackMatterComponent, _control_control_component__WEBPACK_IMPORTED_MODULE_3__.ControlComponent, _meta_info_meta_info_component__WEBPACK_IMPORTED_MODULE_5__.MetaInfoComponent, _authoring_mode_authoring_mode_component__WEBPACK_IMPORTED_MODULE_6__.AuthoringModeComponent, _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_8__.ActionPartyInfoComponent,
        _action_commons_action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_15__.PropertiesArrayComponent, _action_commons_action_array_document_id_action_array_document_id_component__WEBPACK_IMPORTED_MODULE_16__.DocumentIDArrayComponent, _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_0__.ActionArrayRolesComponent, _action_commons_action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_17__.ArrayPhonesComponent,
        _action_commons_action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_18__.ArrayExternalIDsComponent, _action_commons_action_map_roles_action_map_roles_component__WEBPACK_IMPORTED_MODULE_19__.ActionMapRolesComponent, _author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_20__.AuthorBeginComponent, _action_commons_action_select_baseline_action_select_baseline_component__WEBPACK_IMPORTED_MODULE_21__.SelectBaselineComponent,
        _action_commons_action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_22__.CatParamsComponent, _action_commons_action_cat_controls_action_cat_controls_component__WEBPACK_IMPORTED_MODULE_23__.CatControlsComponent, _action_commons_action_oscal_cat_author_view_action_oscal_cat_author_view_component__WEBPACK_IMPORTED_MODULE_24__.OscalCatAuthorViewComponent, _action_commons_action_settings_element_action_settings_element_component__WEBPACK_IMPORTED_MODULE_25__.ActionSettingsElementComponent, _action_all_common_cat_the_base_cat_the_base_component__WEBPACK_IMPORTED_MODULE_26__.CatTheBaseComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetComponentScope"](_meta_info_meta_info_component__WEBPACK_IMPORTED_MODULE_5__.MetaInfoComponent, [_angular_forms__WEBPACK_IMPORTED_MODULE_29__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonListHeader, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_8__.ActionPartyInfoComponent,
    _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_0__.ActionArrayRolesComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonBadge, _action_commons_action_map_roles_action_map_roles_component__WEBPACK_IMPORTED_MODULE_19__.ActionMapRolesComponent,
    _action_commons_action_array_document_id_action_array_document_id_component__WEBPACK_IMPORTED_MODULE_16__.DocumentIDArrayComponent, _action_commons_action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_15__.PropertiesArrayComponent,
    _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_12__.ArrayLinksComponent, _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_13__.LocationInfoComponent], []);


/***/ }),

/***/ 3246:
/*!*******************************************************************!*\
  !*** ./src/app/pages/all-components/control/control.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlComponent": () => (/* binding */ ControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class ControlComponent {
    constructor() { }
    ngOnInit() { }
    submitForm() { }
}
ControlComponent.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(); };
ControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlComponent, selectors: [["oscal-control"]], decls: 2, vars: 1, consts: [[3, "formGroup", "ngSubmit"]], template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ControlComponent_Template_form_ngSubmit_1_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7225:
/*!***********************************************************************!*\
  !*** ./src/app/pages/all-components/meta-info/meta-info.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditingState": () => (/* binding */ EditingState),
/* harmony export */   "MetaInfoComponent": () => (/* binding */ MetaInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-commons/action-party-info/action-party-info.component */ 184);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/logging/log-manager.service */ 3616);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../interfaces/oscal-types/oscal-catalog-factory */ 8035);
/* harmony import */ var _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-commons/action-array-links/action-array-links.component */ 4609);
/* harmony import */ var _action_commons_action_array_locations_action_array_locations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-commons/action-array-locations/action-array-locations.component */ 1839);
/* harmony import */ var _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-commons/action-location-info/action-location-info.component */ 7575);
/* harmony import */ var _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-commons/action-array-roles/action-array-roles.component */ 8417);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../interfaces/oscal-types/oscal-catalog.types */ 8358);
/* harmony import */ var _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../providers/app-state/state-nav-cat/state-session-data.service */ 5667);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 6527);
/* harmony import */ var _action_commons_action_array_document_id_action_array_document_id_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../action-commons/action-array-document-id/action-array-document-id.component */ 2543);
/* harmony import */ var _action_commons_action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../action-commons/action-array-properties/action-array-properties.component */ 7578);
/* harmony import */ var _action_all_common_cat_the_base_cat_the_base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../action-all-common/cat-the-base/cat-the-base.component */ 3765);
/* harmony import */ var src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/providers/oscal-files/known-files.service */ 8958);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 3819);

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











// import { AppDbInProgressService } from '../../info-providers/app-state/app-db-sqlite/app-db-in-progress.service';
// import { PartyExternalIdentifier, } from './../../../interfaces/oscal-types/oscal-catalog.types';
// import { AppDbKvInProgressService } from './../../../info-providers/app-state/app-db-kv-storage-cap/app-db-in-progress.service';












const _c0 = ["addEditData"];
const _c1 = ["addEditData2"];
const _c2 = ["entityTab"];
const _c3 = ["roleTab"];
const _c4 = ["linkTab"];
const _c5 = ["locationsTab"];
const _c6 = ["locationTab"];
const _c7 = ["propertyTab"];
const _c8 = ["docIdTab"];
const _c9 = ["editEntityTab"];
const _c10 = ["editRoleTab"];
const _c11 = ["editLinkTab"];
const _c12 = ["editLocationsTab"];
const _c13 = ["editLocationTab"];
const _c14 = ["editPropertyTab"];
const _c15 = ["editDocIdTab"];
const _c16 = ["popoverDatetime"];
function MetaInfoComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Last Modified Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-datetime", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionChange", function MetaInfoComponent_ng_template_24_Template_ion_datetime_ionChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r31.patchFormatDate(_r30.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_icon_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 39);
} }
function MetaInfoComponent_ion_icon_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "ion-icon", 40);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("color", ctx_r2.getAutoUpdateColor());
} }
function MetaInfoComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Set Auto-Update Later");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Auto-Update is Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_col_45_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-tab-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_col_45_Template_ion_tab_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r33.appendDefaultRoles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Add all predefined roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_grid_47_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Parties (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_grid_47_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_47_div_4_div_4_Template_ion_button_click_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44); const party_r42 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r43.removeParty($event, party_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_47_div_4_div_4_Template_ion_button_click_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44); const party_r42 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r45.startPartyEdit($event, party_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const party_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("icon", party_r42.type === "person" ? "body-outline" : "business-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](party_r42.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to remove ".concat(party_r42.type, " ", party_r42.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to edit ".concat(party_r42.type, " ", party_r42.name));
} }
function MetaInfoComponent_ion_grid_47_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_47_div_4_div_4_Template, 11, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Parties [", ctx_r36.metaInfo.parties.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r36.metaInfo.parties);
} }
function MetaInfoComponent_ion_grid_47_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Roles (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_grid_47_div_7_div_4_ion_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_47_div_7_div_4_ion_button_6_Template_ion_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r51); const role_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r49.removeRole($event, role_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to remove ".concat(role_r47.title, " with ID:", role_r47.id));
} }
function MetaInfoComponent_ion_grid_47_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, MetaInfoComponent_ion_grid_47_div_7_div_4_ion_button_6_Template, 2, 1, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_47_div_7_div_4_Template_ion_button_click_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54); const role_r47 = restoredCtx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r53.startRoleEdit($event, role_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", role_r47.title, " [", role_r47.id, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r46.isPresetRole(role_r47));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to edit Role ".concat(role_r47.title, " with ID:", role_r47.id));
} }
function MetaInfoComponent_ion_grid_47_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_47_div_7_div_4_Template, 9, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Roles [", ctx_r38.metaInfo.roles.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r38.metaInfo.roles);
} }
function MetaInfoComponent_ion_grid_47_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-act-party-info", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("saveTab", function MetaInfoComponent_ion_grid_47_div_10_Template_oscal_act_party_info_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r56.saveEditedParty($event); })("closeTab", function MetaInfoComponent_ion_grid_47_div_10_Template_oscal_act_party_info_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r58.cancelEditTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isModal", false)("createNew", false)("hideTitle", false)("partyInfo", ctx_r39.currentEditedParty)("entryName", ctx_r39.currentEditedParty.name)("theParent", ctx_r39);
} }
const _c17 = function (a0) { return [a0]; };
function MetaInfoComponent_ion_grid_47_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-array-roles", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("saveTab", function MetaInfoComponent_ion_grid_47_div_11_Template_oscal_array_roles_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r60.saveEditedRole($event); })("closeTab", function MetaInfoComponent_ion_grid_47_div_11_Template_oscal_array_roles_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r62.cancelEditTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("rolesArray", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](6, _c17, ctx_r40.currentEditedRole))("singleMode", true)("iconName", "people-outline")("hideAddElementButton", true)("showAddCancelButtons", true)("isPresetRole", ctx_r40.isPresetRole(ctx_r40.currentEditedRole));
} }
function MetaInfoComponent_ion_grid_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, MetaInfoComponent_ion_grid_47_ion_label_3_Template, 2, 0, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_47_div_4_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, MetaInfoComponent_ion_grid_47_div_6_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, MetaInfoComponent_ion_grid_47_div_7_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, MetaInfoComponent_ion_grid_47_div_10_Template, 3, 6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, MetaInfoComponent_ion_grid_47_div_11_Template, 3, 8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r6.haveParties());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.haveParties());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r6.haveRoles());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.haveRoles());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.isEditingParty());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.isEditingRole());
} }
function MetaInfoComponent_ng_template_48_Template(rf, ctx) { }
function MetaInfoComponent_ion_badge_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Adding Entity");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_badge_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Adding Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ng_template_68_Template(rf, ctx) { }
function MetaInfoComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-act-party-info", 57, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("saveTab", function MetaInfoComponent_div_70_Template_oscal_act_party_info_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r64.addPOoP($event); })("closeTab", function MetaInfoComponent_div_70_Template_oscal_act_party_info_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r66.cancelAddTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isModal", false)("createNew", true)("hideTitle", false)("partyInfo", ctx_r13.currentEmptyParty)("iconName", ctx_r13.currentPartyIcon)("entryName", ctx_r13.currentPartyName)("theParent", ctx_r13);
} }
const _c18 = function () { return [undefined]; };
function MetaInfoComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-array-roles", 58, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("saveTab", function MetaInfoComponent_div_71_Template_oscal_array_roles_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r68.addRole($event); })("closeTab", function MetaInfoComponent_div_71_Template_oscal_array_roles_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r70.cancelAddTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("rolesArray", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](5, _c18))("singleMode", true)("iconName", "people-outline")("hideAddElementButton", true)("showAddCancelButtons", true);
} }
function MetaInfoComponent_ion_grid_73_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Responsible Parties (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_grid_73_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "ion-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_73_div_4_div_4_Template_ion_button_click_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r77); const party_r75 = restoredCtx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r76.removeResponsibleParty($event, party_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_73_div_4_div_4_Template_ion_button_click_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r77); const party_r75 = restoredCtx.$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r78.startRespPartyEdit($event, party_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const party_r75 = ctx.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", party_r75.roleID, " [", party_r75.partyUuids.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r74.getSelectedPartiesAsText(party_r75.partyUuids), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to remove mapping for Responsible Party: ".concat(party_r75.roleID));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to edit Responsible Party with ".concat(" Role ID:", party_r75.roleID));
} }
function MetaInfoComponent_ion_grid_73_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_73_div_4_div_4_Template, 12, 5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Responsible Parties [", ctx_r72.metaInfo.responsibleParties.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r72.metaInfo.responsibleParties);
} }
function MetaInfoComponent_ion_grid_73_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-map-roles", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("saveTab", function MetaInfoComponent_ion_grid_73_div_7_Template_oscal_map_roles_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r80.saveEditedResponsibleParty($event); })("closeTab", function MetaInfoComponent_ion_grid_73_div_7_Template_oscal_map_roles_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r82.cancelEditTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("responsibleParty", ctx_r73.currentEditedRespParty)("roles", ctx_r73.metaInfo.roles)("actors", ctx_r73.metaInfo.parties)("singleMode", true)("iconName", "share-social-outline")("hideAddElementButton", true)("showAddCancelButtons", true);
} }
function MetaInfoComponent_ion_grid_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, MetaInfoComponent_ion_grid_73_div_3_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_73_div_4_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-row", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, MetaInfoComponent_ion_grid_73_div_7_Template, 3, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r15.haveResponsible());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r15.haveResponsible());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r15.isEditingRespParty());
} }
function MetaInfoComponent_ion_badge_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Adding R.P.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ng_template_87_Template(rf, ctx) { }
function MetaInfoComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-map-roles", 62, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("saveTab", function MetaInfoComponent_div_89_Template_oscal_map_roles_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r84.addResponsibleParty($event); })("closeTab", function MetaInfoComponent_div_89_Template_oscal_map_roles_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r86.cancelAddTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("roles", ctx_r19.metaInfo.roles)("actors", ctx_r19.metaInfo.parties)("singleMode", true)("iconName", "share-social-outline")("hideAddElementButton", true)("showAddCancelButtons", true);
} }
function MetaInfoComponent_ion_grid_91_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Doc. IDs (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_grid_91_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_91_div_4_div_4_Template_ion_button_click_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r96); const doc_r94 = restoredCtx.$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r95.removeDocId($event, doc_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_91_div_4_div_4_Template_ion_button_click_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r96); const doc_r94 = restoredCtx.$implicit; const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r97.startDocIdEdit($event, doc_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](doc_r94.identifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to remove ".concat(doc_r94.identifier, " ", doc_r94.scheme));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to edit ".concat(doc_r94.identifier, " ", doc_r94.scheme));
} }
function MetaInfoComponent_ion_grid_91_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_91_div_4_div_4_Template, 11, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Document IDs [", ctx_r88.metaInfo.documentIDS.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r88.metaInfo.documentIDS);
} }
function MetaInfoComponent_ion_grid_91_ion_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Properties (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_grid_91_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_91_div_7_div_4_Template_ion_button_click_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r101); const prop_r99 = restoredCtx.$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r100.removeProperty($event, prop_r99); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_91_div_7_div_4_Template_ion_button_click_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r101); const prop_r99 = restoredCtx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r102.startPropertyEdit($event, prop_r99); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prop_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", prop_r99.name, " = ", prop_r99.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to remove ".concat(prop_r99.name, "=", prop_r99.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to edit ".concat(prop_r99.name, " = ", prop_r99.value));
} }
function MetaInfoComponent_ion_grid_91_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_91_div_7_div_4_Template, 10, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Properties [", ctx_r90.metaInfo.props.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r90.metaInfo.props);
} }
function MetaInfoComponent_ion_grid_91_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-array-document-ids", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTab", function MetaInfoComponent_ion_grid_91_div_10_Template_oscal_array_document_ids_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r104.cancelEditTab($event); })("saveTab", function MetaInfoComponent_ion_grid_91_div_10_Template_oscal_array_document_ids_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r105); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r106.updateDocId($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("singleMode", true)("hideAddElementButton", true)("showAddCancelButtons", true)("idArray", ctx_r91.currentEditedDocId)("ID", "editDocId");
} }
function MetaInfoComponent_ion_grid_91_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-array-properties", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTab", function MetaInfoComponent_ion_grid_91_div_11_Template_oscal_array_properties_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r108.cancelEditTab($event); })("saveTab", function MetaInfoComponent_ion_grid_91_div_11_Template_oscal_array_properties_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r110.updateProp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("singleMode", true)("hideAddElementButton", true)("showAddCancelButtons", true)("ID", "editProperty")("propertiesArray", ctx_r92.currentEditedProperty);
} }
function MetaInfoComponent_ion_grid_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, MetaInfoComponent_ion_grid_91_ion_label_3_Template, 2, 0, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_91_div_4_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, MetaInfoComponent_ion_grid_91_ion_label_6_Template, 2, 0, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, MetaInfoComponent_ion_grid_91_div_7_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, MetaInfoComponent_ion_grid_91_div_10_Template, 3, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, MetaInfoComponent_ion_grid_91_div_11_Template, 3, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r20.haveDocIds());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r20.haveDocIds());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r20.haveProperties());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r20.haveProperties());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "Editing Document ID" === ctx_r20.activeEditState);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "Editing Property" === ctx_r20.activeEditState);
} }
function MetaInfoComponent_ion_badge_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Adding Doc. ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_badge_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Adding Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-array-document-ids", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTab", function MetaInfoComponent_div_109_Template_oscal_array_document_ids_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r112.cancelAddTab($event); })("saveTab", function MetaInfoComponent_div_109_Template_oscal_array_document_ids_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r113); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r114.addDocId($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ID", "docId")("idArray", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](5, _c18))("singleMode", true)("hideAddElementButton", true)("showAddCancelButtons", true);
} }
function MetaInfoComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-array-properties", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTab", function MetaInfoComponent_div_110_Template_oscal_array_properties_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r116.cancelAddTab($event); })("saveTab", function MetaInfoComponent_div_110_Template_oscal_array_properties_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r117); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r118.addProp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ID", "metaProperty")("propertiesArray", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](5, _c18))("singleMode", true)("hideAddElementButton", true)("showAddCancelButtons", true);
} }
function MetaInfoComponent_ion_grid_112_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Links (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_grid_112_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_112_div_4_div_4_Template_ion_button_click_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r128); const link_r126 = restoredCtx.$implicit; const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r127.removeLink($event, link_r126); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_112_div_4_div_4_Template_ion_button_click_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r128); const link_r126 = restoredCtx.$implicit; const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r129.startLinkEdit($event, link_r126); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](link_r126.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to remove link".concat(link_r126.href));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to edit link ".concat(link_r126.href));
} }
function MetaInfoComponent_ion_grid_112_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_112_div_4_div_4_Template, 10, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Links [", ctx_r120.metaInfo.links.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r120.metaInfo.links);
} }
function MetaInfoComponent_ion_grid_112_ion_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No Locations (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_grid_112_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "ion-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_112_div_7_div_4_Template_ion_button_click_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r133); const location_info_r131 = restoredCtx.$implicit; const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r132.removeLocation($event, location_info_r131); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_ion_grid_112_div_7_div_4_Template_ion_button_click_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r133); const location_info_r131 = restoredCtx.$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r134.startLocationEdit($event, location_info_r131); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "ion-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_info_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](location_info_r131.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to remove location: ".concat(location_info_r131.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", "Press to edit location: ".concat(location_info_r131.title));
} }
function MetaInfoComponent_ion_grid_112_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_112_div_7_div_4_Template, 10, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" Locations [", ctx_r122.metaInfo.locations.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r122.metaInfo.locations);
} }
function MetaInfoComponent_ion_grid_112_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-array-links", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTab", function MetaInfoComponent_ion_grid_112_div_10_Template_oscal_array_links_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r136.cancelEditTab($event); })("saveTab", function MetaInfoComponent_ion_grid_112_div_10_Template_oscal_array_links_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r137); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r138.updateLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ID", "editLinks")("linksArray", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](5, _c17, ctx_r123.currentEditedLink))("singleMode", true)("hideAddElementButton", true)("showAddCancelButtons", true);
} }
function MetaInfoComponent_ion_grid_112_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-location-info", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTab", function MetaInfoComponent_ion_grid_112_div_11_Template_oscal_location_info_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r141); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r140.cancelEditTab($event); })("saveTab", function MetaInfoComponent_ion_grid_112_div_11_Template_oscal_location_info_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r141); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r142.updateLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ID", "editLocation")("locationInfo", ctx_r124.currentEditedLocation)("singleMode", true)("singleMode", true)("showAddCancelButtons", true);
} }
function MetaInfoComponent_ion_grid_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, MetaInfoComponent_ion_grid_112_ion_label_3_Template, 2, 0, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, MetaInfoComponent_ion_grid_112_div_4_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, MetaInfoComponent_ion_grid_112_ion_label_6_Template, 2, 0, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, MetaInfoComponent_ion_grid_112_div_7_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-row", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-col", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, MetaInfoComponent_ion_grid_112_div_10_Template, 3, 7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, MetaInfoComponent_ion_grid_112_div_11_Template, 3, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r25.haveLinks());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r25.haveLinks());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r25.haveLocations());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r25.haveLocations());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "Editing Link" === ctx_r25.activeEditState);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "Editing Location" === ctx_r25.activeEditState);
} }
function MetaInfoComponent_ion_badge_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Adding Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_ion_badge_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Adding Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function MetaInfoComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-array-links", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTab", function MetaInfoComponent_div_130_Template_oscal_array_links_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r144.cancelAddTab($event); })("saveTab", function MetaInfoComponent_div_130_Template_oscal_array_links_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r145); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r146.addLink($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ID", "metaLinks")("linksArray", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](5, _c18))("singleMode", true)("hideAddElementButton", true)("showAddCancelButtons", true);
} }
function MetaInfoComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "oscal-location-info", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeTab", function MetaInfoComponent_div_131_Template_oscal_location_info_closeTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r149); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r148.cancelAddTab($event); })("saveTab", function MetaInfoComponent_div_131_Template_oscal_location_info_saveTab_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r149); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r150.addLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ID", "metaLocation")("locationInfo", undefined)("singleMode", true)("hideAddElementButton", true)("showAddCancelButtons", true);
} }
const _c19 = function (a0) { return { "tab-selected": a0 }; };
var EditingState;
(function (EditingState) {
    EditingState["Off"] = "";
    EditingState["Party"] = "Editing Party";
    EditingState["Role"] = "Editing Role";
    EditingState["RespParty"] = "Editing Responsible Party";
    EditingState["DocID"] = "Editing Document ID";
    EditingState["Link"] = "Editing Link";
    EditingState["Property"] = "Editing Property";
    EditingState["Location"] = "Editing Location";
})(EditingState || (EditingState = {}));
class MetaInfoComponent extends _action_all_common_cat_the_base_cat_the_base_component__WEBPACK_IMPORTED_MODULE_11__.CatTheBaseComponent {
    constructor(rootKnownFiles, rootSessionService, rootAlertControl, modalController, LMS) {
        super(rootKnownFiles, rootSessionService, rootAlertControl);
        this.rootKnownFiles = rootKnownFiles;
        this.rootSessionService = rootSessionService;
        this.rootAlertControl = rootAlertControl;
        this.modalController = modalController;
        this.LMS = LMS;
        this.loadedComponents = [];
        this.loadedComponents2 = [];
        this.autoUpdateDates = false;
        // activeSession: SessionData;
        this.activeEntityAddTabName = '';
        this.activeEditState = EditingState.Off;
        this.partyNames = ['Organization', 'Person', 'Party'];
        // this.db = new AppDbInProgressService(new Platform(), new SQLite(), new HttpClient(new HttpHandler()), new SQLitePorter());
        // console.log(`x-x-x: EL = ${db.entitiesList}`);
        // console.log(`Before Async`);
        // const x = { first: 1, second: 'second' };
        // AppDbKvInProgressService.getKeyValue('v-x').resolve().then(
        //   (value) => {
        //     if (!value) {
        //       console.log(`No Value Returned`);
        //       AppDbKvInProgressService.setKeyValue('v-x', x);
        //     } else {
        //     }
        //   }
        // );
        // this.readActiveBrief();
    }
    ngOnInit() {
        super.ngOnInit();
        console.log(this.activeBriefPromise);
        console.log(this.activeBrief);
        if (!this.activeBriefPromise && !this.activeBrief || !this.activeSession) {
            this.readActiveBrief((storedBrief) => {
                console.log(`In Lambda`);
                console.log(storedBrief);
                console.log(storedBrief.name);
                if (!!storedBrief) {
                    this.activeBrief = storedBrief;
                    this.rootSessionService.setActiveBrief(storedBrief);
                    this.briefTitle = storedBrief.name;
                    this.useMetaFromSession(storedBrief);
                }
                this.initMetaInfo();
            });
        }
        this.initMetaInfo();
        // this.db = new AppDbInProgressService(Platform, );
    }
    useMetaFromSession(storedBrief = undefined) {
        console.log(`Active Brief:`);
        console.log(this.activeBrief);
        this.activeBrief = storedBrief;
        if (!!this.activeBrief) {
            console.log(`Found Active Brief`);
            if (!this.activeSession) {
                console.log(`Reading Session from Brief`);
                this.activeSession = this.rootSessionService.getActiveSession();
            }
            if (!!this.activeSession && !this.activeSession.meta) {
                if (this.activeSession.knownCat
                    && this.activeSession.knownCat.cat_suffix) {
                    console.log(`Getting Session Meta`);
                    this.metaInfo.title = `Profile Based on ${this.activeSession.knownCat.cat_suffix}`;
                }
                else if (this.activeSession && this.activeSession.name) {
                    this.metaInfo = this.activeSession.meta;
                    this.metaInfo.title = this.activeSession.name +
                        ' ' + this.activeSession.uuid;
                }
            }
            // console.log(this.activeSession.catalog.metadata.roles);
        }
    }
    initMetaInfo() {
        // console.log(`Init Meta Info!`);
        // console.log(`Active Session:`);
        // console.log(this.session.ActiveSession);
        // console.log(`Active Brief:`);
        console.log(this.appSessionService.getActiveSession());
        console.log(this.appSessionService.getActiveBrief());
        if (!!this.appSessionService.getActiveSession()) {
            // console.log(`Active Session Found!`);
            this.activeSession = this.appSessionService.getActiveSession();
            if (!!this.activeSession.meta) {
                this.metaInfo = this.activeSession.meta;
                console.log(this.appSessionService.getActiveSession());
            }
            else {
                if (this.activeSession.catalog) {
                    console.log(this.activeSession.catalog);
                    this.metaInfo = this.activeSession.catalog.metadata;
                    this.activeSession.meta = this.activeSession.catalog.metadata;
                }
            }
        }
        else if (this.appSessionService.isKeyValuePresent(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_8__.NamedSessionNodes.ACTIVE_SESSION_NAME)) {
            this.activeSession = this.appSessionService.getActiveSession();
            if (this.activeSession && this.activeSession.meta) {
                this.metaInfo = this.activeSession.meta;
            }
            if (this.activeSession && this.activeSession.uuid) {
                // console.log(`Active-Session ID: [${this.activeSession.uuid}]`);
            }
        }
        if (!!this.metaInfo) {
            this.useMetaFromSession();
            return;
        }
        else {
            this.metaInfo = {
                title: this.briefTitle,
                version: '',
                lastModified: new Date(),
                oscalVersion: '',
            };
            this.useMetaFromSession();
        }
        // console.log('Beginning Meta Component');
        // console.log(this.metaInfo);
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder();
        this.metaForm = this.formBuilder.group({
            title: [this.metaInfo.title ? this.metaInfo.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            description: [''],
            oscalVersion: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(1024),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                ]),
            ],
            version: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(80),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                ]),
            ],
            last_modified_string: [
                this.formatDateLabel(new Date()),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required,
                ]),
            ],
            last_modified_date: [
                new Date(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.compose([]),
            ],
            // parties: (this.getPartiesControlsArray(this.metaInfo.parties)),
            // newParty: this.formBuilder.array([]),
        });
    }
    parentIonViewWillLeave() {
        this.saveMetaDataOnLeave();
    }
    saveMetaDataOnLeave() {
        console.log(`Plug-in for saving the meta data`);
    }
    ngAfterViewInit() {
        // console.log(`@ngAfterViewInit.VCR: ${this.VCR}`);
        // const a = 5;
        // console.log(`A = ${a}`)
    }
    getPartiesControlsArray(theData = null) {
        const controlArray = new Array();
        return this.formBuilder.array(controlArray);
    }
    initPlaceholders4Entry() {
        const empties = new Array();
        const entities = ['Person', 'Party', 'Organization'];
        entities.forEach((element, index) => {
            const emptyX = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__.OscalCatalogEmpties.getEmptyPOoP(element);
        });
        return null;
    }
    versionToString() {
        const ver = `${this.metaForm.controls.major.value}.${this.metaForm.controls.minor.value}`;
        return ver;
    }
    submitForm() {
        const ver = this.versionToString();
        this.metaInfo = {
            oscalVersion: 'current',
            title: this.metaForm.controls.title.value,
            version: ver,
            lastModified: new Date(Date.now()),
        };
    }
    formatDateLabel(originalDate) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(originalDate, 'yyyy-MM-dd HH:mm')), 'MMM d, yyyy @ HH:mm (zzzz)');
    }
    setTimeToNow() {
        const dts = this.formatDateLabel(new Date());
        // console.log(`setTimeToNow DateFormatted as: ${dts}`);
        this.metaForm.patchValue({ last_modified: dts });
    }
    patchFormatDate(dtv) {
        // console.log(`The Picked Date: ${dtv}`);
        const dtValue = this.formatDateLabel((0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(dtv));
        this.metaForm.patchValue({ last_modified: dtValue });
    }
    confirm() {
        this.popoverDatetimeValue.confirm(true);
    }
    onUpdateLastModified() {
    }
    autoUpdateLater() {
        this.autoUpdateDates = !this.autoUpdateDates;
        this.setTimeToNow();
        // console.log(`A-u:${this.autoUpdateDates}`);
    }
    getAutoUpdateColor() {
        return this.autoUpdateDates ? 'success' : 'medium';
    }
    getSelectedPartiesAsText(actorUUIDs) {
        const metaActors = this.metaInfo.parties;
        let ret = '';
        if (!!actorUUIDs) {
            const len = actorUUIDs.length;
            if (len > 0) {
                actorUUIDs.forEach((chosenUuid, i) => {
                    const idxActor = metaActors.findIndex(e => e.uuid === chosenUuid);
                    if (idxActor >= 0) {
                        if (len > 1) {
                            ret = ret.concat((i > 0 && len !== 2) ? ', ' : '', i === len - 1 ? ' and ' : '', metaActors[idxActor].name);
                        }
                        else {
                            ret = metaActors[idxActor].name;
                        }
                    }
                });
                return ret;
            }
            else {
                return ret;
            }
        }
        else {
            return ret;
        }
    }
    /**
     * Presents POoP Pop-Up
     */
    modalPOoP(typeName, icon, paramPOoP = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            // this.addr = { state: 'MD', city: 'New Vasyuki', postalCode: '12345-6789' };
            // let v2: string | null | undefined;
            // let v3: Array<Address> = new Array<Address>();
            // v2 = 'null';
            const emptyPOoP = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__.OscalCatalogEmpties.getEmptyPOoP(typeName);
            // console.log(` New or Old = ${!paramPOoP} `);
            // this.LMS.logData(emptyPOoP);
            const modal = yield this.modalController.create({
                component: _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_0__.ActionPartyInfoComponent,
                componentProps: {
                    isModal: true,
                    partyInfo: !!paramPOoP ? paramPOoP : emptyPOoP,
                    createNew: !paramPOoP,
                    hideTitle: false,
                    entryName: typeName,
                    iconName: icon,
                    actionName: !!paramPOoP ? 'Edit' : 'Add',
                    // cssClass: 'oscal-modal-prompt-class', // Does Not Work Like This!!!
                }
            });
            // Either of the functions works just fine
            // modal.onWillDismiss().then(
            //   (data) => {
            //     console.log(`oWD-Data = ${data}`);
            //     this.logData(data);
            //   });
            modal.onDidDismiss().then((data) => {
                // console.log(`oDD-Data = ${data}`);
                this.LMS.logData(data);
            });
            return yield modal.present();
        });
    }
    /**
     * Generic PopUp Dispatcher Call
     * @param popUpType: the Type of the Popup to create
     * @param mode: the mode of the pop-Up to create {editExisting, createNew}
     */
    presentGenericPopup(popUpType, mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    onResetToNow() {
    }
    isPartyTabActive() {
        return this.partyNames.includes(this.activeEntityAddTabName);
    }
    isAddMapTabActive() {
        return this.activeEntityAddTabName === 'Adding Map';
    }
    isEditingParty() {
        return this.activeEditState === EditingState.Party;
    }
    isEditingRole() {
        return this.activeEditState === EditingState.Role;
    }
    isEditingRespParty() {
        return this.activeEditState === EditingState.RespParty;
    }
    showTab4POoP($event, typeName, icon, paramPOoP = null) {
        console.log(`$$$=>${typeName}`);
        this.currentEmptyParty = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__.OscalCatalogEmpties.getEmptyPOoP(typeName);
        /*
         console.log(`SH-T-Name=${typeName}`);
         this.partyTypeName = typeName;
         */
        // const emptyPOoP = this.getEmptyPOoP(typeName);
        this.currentPartyIcon = icon;
        this.currentPartyName = typeName;
        this.activeEntityAddTabName = typeName;
        const setToIcon = icon || 'body-outline';
        if (!!this.entityTab) {
            this.entityTab.iconName = setToIcon;
            this.entityTab.controlID = (0,uuid__WEBPACK_IMPORTED_MODULE_18__["default"])();
            this.entityTab.theParent = this;
            this.entityTab.partyInfo = !!paramPOoP ? paramPOoP : this.currentEmptyParty;
            this.entityTab.entryName = typeName; //
            this.entityTab.iconName = icon; //
            this.entityTab.actionName = !!paramPOoP ? 'Edit' : 'Add';
            // // Already In-HTML-Tag set
            // this.entityTab.createNew = !paramPOoP;
            // this.entityTab.isModal = false;
            // this.entityTab.hideTitle = true;
        }
    }
    removeArrayEntry(theEntry, theArray) {
        if (!!theArray) {
            const indexToRemove = theArray.indexOf(theEntry);
            // this.metaInfo.parties.indexOf(theParty);
            if (indexToRemove > -1) {
                theArray.splice(indexToRemove, 1);
            }
        }
        else {
            // console.log(`!-!-! Array is <EMPTY>`);
        }
    }
    removeParty($event, theParty) {
        // Probably should ask sure or not?
        this.removeArrayEntry(theParty, this.metaInfo.parties);
    }
    removeDocId($event, theDocId) {
        this.removeArrayEntry(theDocId, this.metaInfo.documentIDS);
    }
    removeProperty($event, theProp) {
        this.removeArrayEntry(theProp, this.metaInfo.props);
    }
    removeLink($event, theLink) {
        this.removeArrayEntry(theLink, this.metaInfo.links);
    }
    removeLocation($event, theLocation) {
        this.removeArrayEntry(theLocation, this.metaInfo.locations);
    }
    // <allowed-values id = "allowed-metadata-responsibe-party-role-ids" target = "responsible-party/@role-id" allow - other="yes" >
    //  <enum value="prepared-by" > Indicates the organization that created this content.< /enum>
    //  <enum value="prepared-for" > Indicates the organization for which this content was created.< /enum>
    //  <enum value="content-approver" > Indicates the organization responsible for all content represented in the "document".< /enum>
    // < /allowed-values>
    initDefaultRoles() {
        const preparer = {
            title: 'Content Expert',
            id: 'prepared-by',
        };
        const requester = {
            title: 'Content Sponsor',
            id: 'prepared-for',
        };
        const approver = {
            title: 'Content Approver',
            id: 'content-approver',
        };
        this.defaultRoles = [preparer, requester, approver];
    }
    appendDefaultRoles() {
        if (!this.defaultRoles) {
            this.initDefaultRoles(); // 531.66 461.66
        }
        if (!this.metaInfo.roles) {
            this.metaInfo.roles = new Array();
            for (const role of this.defaultRoles) {
                const x = { title: role.title, id: role.id, };
                this.metaInfo.roles.push(x); // Push ion the end in the original order
            }
        }
        else {
            for (const role of this.defaultRoles.reverse()) {
                const x = { title: role.title, id: role.id, };
                this.metaInfo.roles.unshift(x); // Push at the beginning in reverse order
            }
        }
        // TODO: Remove this when not debugging
        this.addTestParties();
    }
    addTestParties() {
        // TODO: Even though it saves time testing - 
        // this functionality has to be commented out for release
        if (this.metaInfo && !this.metaInfo.parties) {
            this.metaInfo.parties = new Array();
        }
        const a = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_7__.PartyType.Person,
            name: 'Adam',
            uuid: '11111111-1111-1111-1111-111111111111',
            remarks: 'The luckiest lump of clay ever used to make humans.',
            shortName: '1st',
        };
        const e = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_7__.PartyType.Person,
            name: 'Eve',
            uuid: '33333333-3333-3333-3333-333333333333',
            remarks: 'A workable second draft.',
            shortName: 'Not-1st',
        };
        const l = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_7__.PartyType.Person,
            name: 'Lucy',
            uuid: '66666666-6666-6666-6666-666666666666',
            remarks: 'Ruler of unfinished security and under-designed creations.',
            shortName: 'B4-1st',
        };
        const h = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_7__.PartyType.Organization,
            name: 'Bad.Org',
            uuid: '66666666-9999-6666-9999-666666666666',
            remarks: 'A place for the most interesting people that did not fit.',
            shortName: 'Bad',
        };
        const h2 = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_7__.PartyType.Organization,
            name: 'Good.Org',
            uuid: '69696969-9696-6969-9696-696969696969',
            remarks: 'A place for the most boring people ever lived.',
            shortName: 'Good',
        };
        const g = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_7__.PartyType.Organization,
            name: 'Creator.Org',
            uuid: '00000000-0000-0000-0000-000000000000',
            remarks: 'That is the only party capable of the ideal security. Though... Lucifer....',
            shortName: 'G-d',
        };
        this.metaInfo.parties.push(a);
        this.metaInfo.parties.push(e);
        this.metaInfo.parties.push(l);
        this.metaInfo.parties.push(h);
        this.metaInfo.parties.push(h2);
        this.metaInfo.parties.push(g);
        const x = { title: 'Creator', id: 'creator', };
        this.metaInfo.roles.push(x);
    }
    hasPredefinedRolesAlready() {
        return !!this.metaInfo && !!this.metaInfo.roles && this.metaInfo.roles.length > 0;
    }
    isPresetRole(role) {
        if (!this.defaultRoles) {
            return false;
        }
        const ret = this.defaultRoles.some((e, i) => e.id === role.id && i < 3);
        // console.log(`>>> Ret-is-Preset:${ret}`);
        return ret;
    }
    isReadyToMap() {
        return this.haveParties() && this.haveRoles();
    }
    removeRole($event, theRole) {
        // Probably should ask sure or not?
        const removeIndex = this.metaInfo.roles.indexOf(theRole);
        if (removeIndex > -1) {
            this.metaInfo.roles.splice(removeIndex, 1);
        }
    }
    removeResponsibleParty($event, theParty) {
        // Probably should ask sure or not?
        const removeIndex = this.metaInfo.responsibleParties.indexOf(theParty);
        if (removeIndex > -1) {
            this.metaInfo.responsibleParties.splice(removeIndex, 1);
        }
    }
    startEntityEdit(theEntity, theSourceArray, theNewState, currentEditedEntity) {
        this.cancelEditTab(undefined);
        if (currentEditedEntity) {
            currentEditedEntity = theEntity;
        }
        this.activeEditState = theNewState;
        this.activeEditIndex = theSourceArray.indexOf(theEntity);
        return theEntity;
    }
    startPartyEdit($event, theParty) {
        if (!this.currentEditedParty) {
            this.currentEditedParty = theParty;
            this.startEntityEdit(theParty, this.metaInfo.parties, EditingState.Party);
        }
        else {
            this.currentEditedParty = undefined;
            this.cancelEditTab(theParty);
        }
        // this.cancelEditTab<PartyOrganizationOrPerson>(undefined);
        // this.currentEditedParty = theParty;
        // this.activeEditState = EditingState.Party;
        // this.activeEditIndex = this.metaInfo.parties.indexOf(this.currentEditedParty);
    }
    startRoleEdit($event, theRole) {
        if (!this.currentEditedRole) {
            // this.cancelEditTab<Role>(undefined);
            this.currentEditedRole = theRole;
            this.startEntityEdit(theRole, this.metaInfo.roles, EditingState.Role);
        }
        else {
            this.currentEditedRole = undefined;
            this.cancelEditTab(theRole);
        }
    }
    startRespPartyEdit($event, theParty) {
        if (!this.currentEditedRespParty) {
            this.currentEditedRespParty = theParty;
            this.startEntityEdit(theParty, this.metaInfo.responsibleParties, EditingState.RespParty);
        }
        else {
            this.currentEditedRespParty = undefined;
            this.cancelEditTab(theParty);
        }
    }
    startDocIdEdit($event, editedDocId) {
        if (!this.currentEditedDocId || !(this.activeEditState === EditingState.DocID)) {
            this.cancelEditTab(undefined);
            this.currentEditedDocId = [this.startEntityEdit(editedDocId, this.metaInfo.documentIDS, EditingState.DocID)];
        }
        else {
            this.currentEditedDocId = undefined;
            this.cancelEditTab(editedDocId);
        }
    }
    startPropertyEdit($event, theProp) {
        if (!this.currentEditedProperty || !(this.activeEditState === EditingState.Property)) {
            this.cancelEditTab(undefined);
            this.currentEditedProperty = [this.startEntityEdit(theProp, this.metaInfo.props, EditingState.Property)];
        }
        else {
            this.currentEditedProperty = undefined;
            this.cancelEditTab(theProp);
        }
    }
    startLinkEdit($event, theLink) {
        if (!this.currentEditedLink) {
            this.cancelEditTab(undefined);
            this.currentEditedLink = this.startEntityEdit(theLink, this.metaInfo.links, EditingState.Link, this.currentEditedLink);
        }
        else {
            this.currentEditedLink = undefined;
            this.cancelEditTab(theLink);
        }
    }
    startLocationEdit($event, theLocation) {
        if (!this.currentEditedLocation) {
            this.cancelEditTab(undefined);
            this.currentEditedLocation = this.startEntityEdit(theLocation, this.metaInfo.locations, EditingState.Location, this.currentEditedLocation);
        }
        else {
            this.currentEditedLocation = undefined;
            this.cancelEditTab(theLocation);
        }
    }
    showTab4AddRole(event, activeType, icon) {
        this.activeEntityAddTabName = activeType;
    }
    showMetaLink($event, typeName, icon, paramPOoP = null) {
        this.activeEntityAddTabName = typeName;
    }
    showAddMap($event, typeName, icon) {
        this.activeEntityAddTabName = 'Adding Map';
    }
    addPOoP(newEntity) {
        this.activeEntityAddTabName = '';
        if (!!newEntity) {
            // console.log(`The POoP = ${newEntity.type}`);
            // console.log(`The POoP = ${newEntity.name}`);
            // console.log(`The POoP = ${newEntity.uuid}`);
            if (!this.metaInfo.parties) {
                this.metaInfo.parties = new Array();
            }
            this.metaInfo.parties.push(newEntity);
        }
        else {
            // console.log(`Add POoP => CANCELLED!`);
        }
    }
    saveEditedRole(editedRole) {
        this.activeEditState = EditingState.Off;
        this.activeEntityAddTabName = '';
        if (!!editedRole) {
            // console.log(`Role-Title = ${editedRole.title}`);
            // console.log(`Role-ID = ${editedRole.id}`);
            // console.log(`Role-Short = ${editedRole.shortName}`);
            if (!this.metaInfo.parties) {
                this.metaInfo.roles = new Array();
            }
            if (this.activeEditIndex > -1) {
                this.metaInfo.roles[this.activeEditIndex] = editedRole;
            }
        }
        else {
            // console.log(`Add POoP => CANCELLED!`);
        }
        this.currentEditedRole = undefined;
    }
    saveEditedParty(editedParty) {
        this.activeEditState = EditingState.Off;
        this.activeEntityAddTabName = '';
        if (!!editedParty) {
            // console.log(`The POoP = ${editedParty.type}`);
            // console.log(`The POoP = ${editedParty.name}`);
            // console.log(`The POoP = ${editedParty.uuid}`);
            if (!this.metaInfo.parties) {
                this.metaInfo.parties = new Array();
            }
            if (this.activeEditIndex > -1) {
                this.metaInfo.parties[this.activeEditIndex] = editedParty;
            }
        }
        else {
            // console.log(`Save Edited POoP => CANCELLED!`);
        }
        this.currentEditedParty = undefined;
    }
    saveEditedResponsibleParty(editedRespParty) {
        this.activeEditState = EditingState.Off;
        this.activeEntityAddTabName = '';
        if (!!editedRespParty) {
            // console.log(`The RoleID = ${editedRespParty.roleID}`);
            // console.log(`The UUIDs = ${editedRespParty.partyUuids}`);
            if (!this.metaInfo.responsibleParties) {
                this.metaInfo.responsibleParties = new Array();
            }
            if (this.activeEditIndex > -1) {
                this.metaInfo.responsibleParties[this.activeEditIndex] = editedRespParty;
                this.activeEditIndex = -1;
            }
        }
        else {
            // console.log(`Save Edited POoP => CANCELLED!`);
        }
        this.currentEditedRespParty = undefined;
    }
    cancelEditTab(returnType) {
        // Returns variable of unfinished or dropped Edit changes
        // Maybe we need to do something with them?
        // TODO or not ToDo: ?
        this.activeEditState = EditingState.Off;
    }
    cancelAddTab(returnType) {
        // Returns variable of unfinished or dropped changes
        // Maybe we need to do something with them?
        // TODO or not ToDo: ?
        this.activeEntityAddTabName = '';
    }
    addRole(newRole) {
        this.activeEntityAddTabName = '';
        if (!!newRole) {
            if (!this.metaInfo.roles) {
                this.metaInfo.roles = new Array();
            }
            this.metaInfo.roles.push(newRole);
            // console.log(`+++Add Role => ADDED! Len=${this.metaInfo.roles.length}`);
            // console.log(`+++Role-Title = ${newRole.title}`);
            // console.log(`+++Role-ID = ${newRole.id}`);
        }
        else {
            // console.log(`Add Role => CANCELLED!`);
        }
    }
    addEditArray(newEntry, targetArray, isEditedDocID) {
        this.activeEntityAddTabName = '';
        this.cancelEditTab(newEntry);
        console.log(newEntry);
        console.log(isEditedDocID);
        if (!!newEntry) {
            if (!targetArray) {
                targetArray = new Array();
            }
            if (!isEditedDocID) { // New DocID
                targetArray.push(newEntry);
            }
            else if (isEditedDocID) {
                if (this.activeEditIndex > -1) {
                    targetArray[this.activeEditIndex] = newEntry;
                    this.activeEditIndex = -1;
                }
            }
            else {
                console.log(`Error ${isEditedDocID ? "updating" : "adding"}`);
                console.log(newEntry);
            }
        }
        // console.log(targetArray);
        return targetArray;
    }
    updateDocId(editedDocID) {
        // this.addEditDocID(editedDocID, true);
        this.metaInfo.documentIDS = this.addEditArray(editedDocID, this.metaInfo.documentIDS, true);
    }
    addDocId(editedDocID) {
        // this.addEditDocID(editedDocID, false);
        this.metaInfo.documentIDS = this.addEditArray(editedDocID, this.metaInfo.documentIDS, false);
    }
    addEditDocID(newDocID, isEditedDocID) {
        // this.activeEntityAddTabName = '';
        // console.log(newDocID);
        // console.log(isEditedDocID);
        // if (!!newDocID) {
        //   if (!this.metaInfo.documentIDS) {
        //     this.metaInfo.documentIDS = new Array<DocumentIdentifier>();
        //   }
        //   if (!isEditedDocID) { // New DocID
        //     this.metaInfo.documentIDS.push(newDocID);
        //   } else if (isEditedDocID) {
        //     if (this.activeEditIndex > -1) {
        //       this.metaInfo.documentIDS[this.activeEditIndex] = newDocID;
        //       this.activeEditIndex = -1;
        //     }
        //   } else {
        //     console.log(`Error ${isEditedDocID ? "updating" : "adding"} Doc ID!`);
        //   }
        // }
    }
    updateProp(newProp) {
        //this.addEditProperty(newProp, true);
        this.metaInfo.props = this.addEditArray(newProp, this.metaInfo.props, true);
    }
    addProp(newProp) {
        // this.addEditProperty(newProp, false);
        this.metaInfo.props = this.addEditArray(newProp, this.metaInfo.props, false);
    }
    updateLink(newProp) {
        this.metaInfo.links = this.addEditArray(newProp, this.metaInfo.links, true);
    }
    addLink(newProp) {
        this.metaInfo.links = this.addEditArray(newProp, this.metaInfo.links, false);
    }
    updateLocation(newProp) {
        this.metaInfo.locations = this.addEditArray(newProp, this.metaInfo.locations, true);
    }
    addLocation(newProp) {
        this.metaInfo.locations = this.addEditArray(newProp, this.metaInfo.locations, false);
        console.log(this.metaInfo.locations);
    }
    pushIntoOptionalArray(array, newArray) {
        if (!newArray) {
            return;
        }
        if (!array) {
            return newArray;
            // console.log(`Array is now ${array.length} elements long`);
        }
        else {
            newArray.forEach((newEntry) => { array.push(newEntry); });
        }
        return array;
    }
    pushUniqueIntoArray(array, newArray) {
        if (!newArray) {
            return;
        }
        newArray.forEach((newEntry) => {
            // make sure that the entry NEEDS to be added
            if (array.indexOf(newEntry) < 0) {
                array.push(newEntry);
            }
        });
    } /*  */
    addResponsibleParty(newRespParty) {
        this.activeEntityAddTabName = '';
        if (!!newRespParty) {
            if (!this.metaInfo.responsibleParties) {
                this.metaInfo.responsibleParties = new Array();
            }
            const roleIndex = this.metaInfo.responsibleParties.findIndex((obj) => obj.roleID === newRespParty.roleID);
            if (roleIndex > -1) {
                // The RoleID already exists:
                // merge the arrays of links and properties;
                this.pushUniqueIntoArray(this.metaInfo.responsibleParties[roleIndex].partyUuids, newRespParty.partyUuids);
                this.metaInfo.responsibleParties[roleIndex].links =
                    this.pushIntoOptionalArray(this.metaInfo.responsibleParties[roleIndex].links, newRespParty.links);
                this.metaInfo.responsibleParties[roleIndex].props =
                    this.pushIntoOptionalArray(this.metaInfo.responsibleParties[roleIndex].props, newRespParty.props);
                // append the remarks text
                if (!this.metaInfo.responsibleParties[roleIndex].remarks) {
                    this.metaInfo.responsibleParties[roleIndex].remarks = '';
                }
                else {
                    this.metaInfo.responsibleParties[roleIndex].remarks += '\n\n';
                }
                this.metaInfo.responsibleParties[roleIndex].remarks += `${newRespParty.remarks}`;
            }
            else {
                // The new role mapping - simply push it in
                this.metaInfo.responsibleParties.push(newRespParty);
            }
            const none = 'None';
            // console.log(`+==Id=${newRespParty.roleID} Len=${newRespParty.partyUuids.length}; Links#=${newRespParty.links ? newRespParty.links.length : none}; Props# = ${newRespParty.props ? newRespParty.props.length : none} `);
            // console.log(`+== Add Resp => ADDED! Len = ${this.metaInfo.responsibleParties.length} `);
            // console.log(`+== Resp - Id = ${newRespParty.roleID} `);
            const last = this.metaInfo.responsibleParties[this.metaInfo.responsibleParties.length - 1];
            if (last.links) {
                // console.log(`Value=${last.links[0].href}`);
            }
        }
        else {
            // console.log(`Add Responsible Party => CANCELLED!`);
        }
    }
    hasElements(theArray) {
        return !!theArray && theArray.length > 0;
    }
    haveParties() {
        return this.hasElements(this.metaInfo.parties);
    }
    haveRoles() {
        return this.hasElements(this.metaInfo.roles);
    }
    haveResponsible() {
        return this.hasElements(this.metaInfo.responsibleParties);
    }
    haveDocIds() {
        return this.hasElements(this.metaInfo.documentIDS);
    }
    haveProperties() {
        return this.hasElements(this.metaInfo.props);
    }
    haveLinks() {
        return this.hasElements(this.metaInfo.links);
    }
    haveLocations() {
        return this.hasElements(this.metaInfo.locations);
    }
    closeAddEditResponsible(controlKey, isValid, returnObject) { }
    closeAddEditPOoP(controlKey, isValid, returnObject) { }
    closeAddEditDocId(controlKey, isValid, returnObject) { }
    closeAddEditProperty(controlKey, isValid, returnObject) { }
    closeAddEditLink(controlKey, isValid, returnObject) { }
    closeAddEditLocation(controlKey, isValid, returnObject) { }
    closeAddEditRole(controlKey, isValid, returnObject) { }
}
MetaInfoComponent.ɵfac = function MetaInfoComponent_Factory(t) { return new (t || MetaInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_12__.KnownOscalFilesService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_8__.CurrentSessionData), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_1__.LogManagerService)); };
MetaInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: MetaInfoComponent, selectors: [["oscal-meta-info"]], viewQuery: function MetaInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c10, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c12, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c13, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c14, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c15, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c16, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.VCR = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.VCR2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.entityTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.roleTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.linkTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.locationsTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.locationTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.propertyTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.docIdTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editEntityTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editRoleTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editLinkTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editLocationsTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editLocationTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editPropertyTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.editDocIdTab = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.popoverDatetimeValue = _t.first);
    } }, inputs: { metaInfo: "metaInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 132, vars: 46, consts: [[3, "formGroup", "ngSubmit"], ["position", "floating"], ["title", "Title is a name given to the document, which may be used by a tool for display and navigation. Title of the Catalog-Profile (e.g. Selected Controls for ABC)", "formControlName", "title", "type", "text"], ["button", "true"], ["formControlName", "last_modified_string", "fill", "clear", "id", "open-last-modified"], ["trigger", "open-last-modified", "size", "min", "show-backdrop", "false"], ["slot", "end"], ["title", "Sets 'Last Modified' Value to Present Date-Time", 3, "click"], ["slot", "start", "name", "stopwatch-outline"], ["title", "Auto-Updates Last Modified at Save Time", 3, "click"], ["slot", "start", "name", "calendar-outline", 4, "ngIf"], ["slot", "start", "name", "checkmark-done-outline", 3, "color", 4, "ngIf"], [4, "ngIf"], ["title", "Catalog Version (e.g. 1.0 or 1.1.2)", "type", "text", "formControlName", "version"], ["title", "OSCAL Version (e.g. 1.0.0-rc2 or 1.0.0 )", "type", "text", "formControlName", "oscalVersion"], ["offset", "offsetSm", 4, "ngIf"], ["appAddEditInfo", ""], ["appAddressHost", ""], [1, "topless", "bottomless"], [1, "justify-content-between", "topless", "bottomless"], [1, "topless,", "bottomless"], [1, "", 2, "display", "flex", "justify-content", "space-evenly"], [3, "ngClass", "click"], ["icon", "beer-outline"], ["icon", "people-outline"], [1, "tab-cell-row"], [1, "tab-cell-row-hidden"], ["addEditData", ""], ["class", "tab-cell-row-framed", 4, "ngIf"], [3, "ngClass", "disabled", "click"], ["icon", "share-social-outline"], [1, "topless", "bottomless", 2, "display", "flex", "justify-content", "space-evenly"], ["icon", "information-circle-outline"], ["icon", "pricetags-outline"], ["icon", "link-outline"], ["icon", "location-outline"], ["slot", "title"], ["presentation", "date", "title", "Select Last Modified Date Value", "showDefaultButtons", "true", "showDefaultTitle", "true", 3, "ionChange"], ["popoverDatetime", ""], ["slot", "start", "name", "calendar-outline"], ["slot", "start", "name", "checkmark-done-outline", 3, "color"], ["offset", "offsetSm"], ["title", "Press this button to add predefined authoring roles", 3, "click"], ["icon", "person-add-outline", "color", "success"], [4, "ngFor", "ngForOf"], [3, "icon"], [1, "ion-text-wrap", "fixed-width-text"], ["color", "danger", 3, "title", "click"], ["icon", "trash-outline"], [3, "title", "click"], ["icon", "pencil-outline"], ["color", "danger", 3, "title", "click", 4, "ngIf"], [1, "tab-cell-row-framed"], ["actionName", "Adding", 3, "isModal", "createNew", "hideTitle", "partyInfo", "entryName", "theParent", "saveTab", "closeTab"], ["entityTab", ""], ["parentEntity", "Meta-Information", "listTitle", "Role", "inputName", "Role", "hideAddButton", "true", "actionName", "Edit", 3, "rolesArray", "singleMode", "iconName", "hideAddElementButton", "showAddCancelButtons", "isPresetRole", "saveTab", "closeTab"], ["roleTab", ""], ["actionName", "Adding", 3, "isModal", "createNew", "hideTitle", "partyInfo", "iconName", "entryName", "theParent", "saveTab", "closeTab"], ["parentEntity", "Meta-Information", "listTitle", "Role", "inputName", "Role", "hideAddButton", "true", "actionName", "Add", 3, "rolesArray", "singleMode", "iconName", "hideAddElementButton", "showAddCancelButtons", "saveTab", "closeTab"], ["icon", "swap-horizontal-outline"], ["parentEntity", "Meta-Information", "listTitle", "Responsible Party", "inputName", "Responsible Party", "hideAddButton", "true", "actionName", "Edit", 3, "responsibleParty", "roles", "actors", "singleMode", "iconName", "hideAddElementButton", "showAddCancelButtons", "saveTab", "closeTab"], ["respPartyTab", ""], ["parentEntity", "Meta-Information", "listTitle", "Responsible Party", "inputName", "Responsible Party", "hideAddButton", "true", "actionName", "Add", 3, "roles", "actors", "singleMode", "iconName", "hideAddElementButton", "showAddCancelButtons", "saveTab", "closeTab"], ["parentEntity", "Meta-Information", "listTitle", "Document ID", "inputName", "Document ID", 3, "singleMode", "hideAddElementButton", "showAddCancelButtons", "idArray", "ID", "closeTab", "saveTab"], ["editDocIdTab", ""], ["listTitle", "Property", "actionName", "Edit", "iconName", "pricetags-outline", "parentEntity", "Meta-Information", "inputName", "Property", 3, "singleMode", "hideAddElementButton", "showAddCancelButtons", "ID", "propertiesArray", "closeTab", "saveTab"], ["editPropertyTab", ""], ["parentEntity", "Meta-Information", "listTitle", "Document ID", "inputName", "Document ID", "hideAddButton", "true", 3, "ID", "idArray", "singleMode", "hideAddElementButton", "showAddCancelButtons", "closeTab", "saveTab"], ["docIdTab", ""], ["listTitle", "Property", "actionName", "Add", "iconName", "pricetags-outline", "parentEntity", "Meta-Information", "inputName", "Property", "hideAddButton", "true", 3, "ID", "propertiesArray", "singleMode", "hideAddElementButton", "showAddCancelButtons", "closeTab", "saveTab"], ["propertyTab", ""], ["listTitle", "Link", "actionName", "Edit", "iconName", "link-outline", "parentEntity", "Meta-Information", "parentName", "Meta-Information", "inputName", "Link", "hideAddButton", "true", 3, "ID", "linksArray", "singleMode", "hideAddElementButton", "showAddCancelButtons", "closeTab", "saveTab"], ["editLinkTab", ""], ["actionName", "Edit", "iconName", "pricetags-outline", "parentName", "Meta-Information", "inputName", "Location", "hideAddButton", "true", 3, "ID", "locationInfo", "singleMode", "showAddCancelButtons", "closeTab", "saveTab"], ["editLocationTab", ""], ["listTitle", "Link", "actionName", "Add", "iconName", "link-outline", "parentEntity", "Meta-Information", "parentName", "Meta-Information", "inputName", "Link", "hideAddButton", "true", 3, "ID", "linksArray", "singleMode", "hideAddElementButton", "showAddCancelButtons", "closeTab", "saveTab"], ["linkTab", ""], ["actionName", "Add", "iconName", "location-outline", "parentName", "Meta-Information", "inputName", "Location", "hideAddButton", "true", 3, "ID", "locationInfo", "singleMode", "hideAddElementButton", "showAddCancelButtons", "closeTab", "saveTab"], ["locationTab", ""]], template: function MetaInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function MetaInfoComponent_Template_form_ngSubmit_1_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "\u00A0\u00A0Metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Provides information about the publication and availability of the containing document. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "ion-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Last Modified Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "ion-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "ion-popover", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, MetaInfoComponent_ng_template_24_Template, 4, 0, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "ion-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_button_click_26_listener() { return ctx.setTimeToNow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Set to Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_button_click_29_listener() { return ctx.autoUpdateLater(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, MetaInfoComponent_ion_icon_30_Template, 1, 0, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, MetaInfoComponent_ion_icon_31_Template, 1, 1, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, MetaInfoComponent_span_32_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, MetaInfoComponent_span_33_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "Catalog Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](39, "ion-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "OSCAL Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "ion-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, MetaInfoComponent_ion_col_45_Template, 5, 0, "ion-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, MetaInfoComponent_ion_grid_47_Template, 12, 6, "ion-grid", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](48, MetaInfoComponent_ng_template_48_Template, 0, 0, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "ion-grid", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "ion-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "ion-toolbar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "ion-buttons", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "ion-tab-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_tab_button_click_55_listener($event) { return ctx.showTab4POoP($event, "Person", "body-outline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](56, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, "Add Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, MetaInfoComponent_ion_badge_59_Template, 2, 0, "ion-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "ion-tab-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_tab_button_click_60_listener($event) { return ctx.showTab4AddRole($event, "Role", "people-outline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](61, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, "Add Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, MetaInfoComponent_ion_badge_64_Template, 2, 0, "ion-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "ion-row", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, MetaInfoComponent_ng_template_68_Template, 0, 0, "ng-template", 16, 27, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](70, MetaInfoComponent_div_70_Template, 3, 7, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](71, MetaInfoComponent_div_71_Template, 3, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](72, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](73, MetaInfoComponent_ion_grid_73_Template, 8, 3, "ion-grid", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "ion-grid", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "ion-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "ion-toolbar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "ion-buttons", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "ion-tab-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_tab_button_click_79_listener($event) { return ctx.showAddMap($event, "Responsible Party", "share-social-outline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](80, "ion-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "Add Responsible Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](83, MetaInfoComponent_ion_badge_83_Template, 2, 0, "ion-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](84, "ion-row", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](87, MetaInfoComponent_ng_template_87_Template, 0, 0, "ng-template", 16, 27, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](89, MetaInfoComponent_div_89_Template, 3, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](90, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](91, MetaInfoComponent_ion_grid_91_Template, 12, 6, "ion-grid", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "ion-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "ion-toolbar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](96, "ion-buttons", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](97, "ion-tab-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_tab_button_click_97_listener($event) { return ctx.showMetaLink($event, "DocID", "information-circle-outline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](98, "ion-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](99, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](100, "Add Document ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](101, MetaInfoComponent_ion_badge_101_Template, 2, 0, "ion-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "ion-tab-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_tab_button_click_102_listener($event) { return ctx.showMetaLink($event, "Property", "information-circle-outline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](103, "ion-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](105, "Add Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](106, MetaInfoComponent_ion_badge_106_Template, 2, 0, "ion-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](107, "ion-row", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](108, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](109, MetaInfoComponent_div_109_Template, 3, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](110, MetaInfoComponent_div_110_Template, 3, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](111, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](112, MetaInfoComponent_ion_grid_112_Template, 12, 6, "ion-grid", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](113, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](114, "ion-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](116, "ion-toolbar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "ion-buttons", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](118, "ion-tab-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_tab_button_click_118_listener($event) { return ctx.showMetaLink($event, "Link", "link-outline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](119, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](120, "Add Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](121, "ion-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](122, MetaInfoComponent_ion_badge_122_Template, 2, 0, "ion-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](123, "ion-tab-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MetaInfoComponent_Template_ion_tab_button_click_123_listener($event) { return ctx.showMetaLink($event, "Location", "location-outline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](124, "ion-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](125, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](126, "Add Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](127, MetaInfoComponent_ion_badge_127_Template, 2, 0, "ion-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](128, "ion-row", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](130, MetaInfoComponent_div_130_Template, 3, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](131, MetaInfoComponent_div_131_Template, 3, 5, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.metaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.autoUpdateDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.autoUpdateDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.autoUpdateDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.autoUpdateDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.hasPredefinedRolesAlready());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.haveParties() || ctx.haveRoles());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](32, _c19, ctx.isPartyTabActive()));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeEntityAddTabName == "Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](34, _c19, ctx.activeEntityAddTabName == "Role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeEntityAddTabName == "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isPartyTabActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "Role" === ctx.activeEntityAddTabName);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.haveResponsible());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](36, _c19, ctx.isAddMapTabActive()))("disabled", !ctx.isReadyToMap());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isAddMapTabActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isAddMapTabActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.haveDocIds() || ctx.haveProperties());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](38, _c19, ctx.activeEntityAddTabName == "DocID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeEntityAddTabName == "DocID");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](40, _c19, ctx.activeEntityAddTabName == "Property"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeEntityAddTabName == "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "DocID" === ctx.activeEntityAddTabName);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "Property" === ctx.activeEntityAddTabName);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.haveLinks() || ctx.haveLocations());
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](42, _c19, ctx.activeEntityAddTabName == "Link"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeEntityAddTabName == "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](44, _c19, ctx.activeEntityAddTabName == "Location"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.activeEntityAddTabName == "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "Link" === ctx.activeEntityAddTabName);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", "Location" === ctx.activeEntityAddTabName);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRhLWluZm8uY29tcG9uZW50LnNjc3MifQ== */", ".oscal-prompt-class[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark[_ngcontent-%COMP%]   .treePopUpInfo[_ngcontent-%COMP%] {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: -29px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .node_style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 52px;\n  margin: 1px;\n  \n  \n  \n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 5px;\n  position: relative;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -13px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -13px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::before {\n  display: none;\n}\n\nul.tree[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]::before   .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #000;\n  \n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#tallTextArea[_ngcontent-%COMP%] {\n  height: 144pt;\n}\n\nion-item[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item[_ngcontent-%COMP%]   ion-radio.checkbox[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n\nbody.form-busy[_ngcontent-%COMP%] {\n  cursor: progress;\n}\n\n.fixed-width-text[_ngcontent-%COMP%] {\n  max-height: 69px;\n  word-wrap: break-word;\n  word-break: break-word;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdC1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EseUVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQWEsMkJBQUE7RUFDYixnQkFBQTtFQUFrQiwrQ0FBQTtBQUNwQjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usd0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBOzs7O0VBSUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTs7Ozs7O0VBTUUsa0JBQUE7RUFBb0IsMkJBQUE7QUFDdEI7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFRTtFQUNFLDZCQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBQ0EsdUJBQUE7QUFGQSIsImZpbGUiOiJhY3Qtc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3NjYWwtcHJvbXB0LWNsYXNzIHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjI7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYig4LCA4LCA5OCkgMSUsIHJnYig2LCA2LCAzNikgMTAwJSk7XG4gIC0tbWluLXdpZHRoOiAzMCU7XG59XG5cbi50cmVlUG9wVXBJbmZvIHtcbiAgLy9ib3JkZXI6IDFweCByZWQgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgLS1ib3JkZXI6IDFweCByZWQgc29saWQ7XG4gIC0taGVpZ2h0OiBhdXRvO1xuICAtLW1pbi13aWR0aDogNTAlO1xufVxuLy8gRG9lcyBub3Qgd29yayBhdCB0aGUgbW9tZW50XG5ib2R5LmRhcmsge1xuICAudHJlZVBvcFVwSW5mbyB7XG4gICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgIC0tYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDUwJTtcbiAgfVxufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG4udHJlZSB1bCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjlweDtcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MnB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogNjBlbTsqLyAvKlRoaXMgY2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50cmVlIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0xM3B4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2NjY2NjY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItcmFkaXVzOiAwcHggMCAwIDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi50cmVlIGxpOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTNweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItcmFkaXVzOiAwcHggMCAwIDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8vIE1ha2Ugc3VyZSBubyBlbXB0eSBndWlkZSBzdGlja3Mgb3V0XG4udHJlZSBsaTpsYXN0LWNoaWxkOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vLyBSb3VuZCB1cCB0aGUgbGFzdCB2aXN1YWwgZ3VpZGVcbi50cmVlIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNXB4O1xufVxuLy8gSGlkZSB0aGUgdmlzdWFsIGd1aWRlIGJlZm9yZSB0aGUgZmlyc3QgYmFyLWl0ZW1cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudWwudHJlZSA+IGxpOmZpcnN0LWNoaWxkOjphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cblxuLnRyZWUgbGkgYSB7XG4gIGJvcmRlcjogMXB4ICM2NjY2NjYgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUgMCAwIDU7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG59XG5cbi50cmVlIGxpIGE6aG92ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGkgYSxcbi50cmVlIGxpIGE6Zm9jdXMsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgbGkgYSB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xufVxuXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmFmdGVyLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6aG92ZXIgKyB1bCBsaTo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWw6OmJlZm9yZSAudHJlZSBsaSBhOmhvdmVyICsgdWwgdWw6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCB1bDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwOyAvKmNvbm5lY3RvciBjb2xvciBvbiBob3ZlciovXG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jdGFsbFRleHRBcmVhIHtcbiAgaGVpZ2h0OiAxNDRwdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAuaW5wdXQtd3JhcHBlciB7XG4gICAgZmxleDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuICBpb24tcmFkaW8uY2hlY2tib3gge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5cbmJvZHkuZm9ybS1idXN5IHtcbiAgY3Vyc29yOiBwcm9ncmVzcztcbn1cblxuLmZpeGVkLXdpZHRoLXRleHQge1xubWF4LWhlaWdodDo2OXB4O1xud29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gd2hpdGUtc3BhY2U6IHByZS13cmFwO1xud29yZC1icmVhazogYnJlYWstd29yZDtcbnRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIl19 */", "[_ngcontent-%COMP%]:root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed[_ngcontent-%COMP%] {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.text-centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.spaceless[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame[_ngcontent-%COMP%] {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off[_ngcontent-%COMP%] {\n  color: var(--tab-background-color);\n}\n\n.save-button-off[_ngcontent-%COMP%] {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on[_ngcontent-%COMP%] {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.button-crossL[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 3753:
/*!*******************************************************************!*\
  !*** ./src/app/pages/all-components/nav-cat/nav-cat.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavCatComponent": () => (/* binding */ NavCatComponent)
/* harmony export */ });
/* harmony import */ var _providers_app_state_state_nav_cat_pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/app-state/state-nav-cat/pages.service */ 5020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function NavCatComponent_ion_fab_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavCatComponent_ion_fab_button_2_Template_ion_fab_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r0.getBackTitle());
} }
function NavCatComponent_ion_fab_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavCatComponent_ion_fab_button_3_Template_ion_fab_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r1.getNextTitle());
} }
class NavCatComponent {
    constructor(router) {
        this.router = router;
        this.pageService = new _providers_app_state_state_nav_cat_pages_service__WEBPACK_IMPORTED_MODULE_0__.PagesService();
    }
    ngOnInit() {
        const link = this.router.url;
        this.pageState = this.pageService.getCurrentNextState(link);
        // console.log(`OnInit => 
        //               Page: ${link}; 
        //               Next>${this.pageState.next ? this.pageState.next.url : 'none'} 
        //               & Prev<${this.pageState.prev ? this.pageState.prev.url : 'none'}`
        // );
        // this.store.dispatch(); // <- This is action of getting PageState from AppState instead of Service if needed
    }
    nextPage() {
        if (this.pageState && this.pageState.next) {
            this.router.navigateByUrl(this.pageState.next.url);
        }
    }
    prevPage() {
        if (this.pageState && this.pageState.prev) {
            this.router.navigateByUrl(this.pageState.prev.url);
        }
    }
    getNextTitle() {
        if (this && this.pageState && this.pageState.next && this.pageState.next.title) {
            return `Next: ${this.pageState.next.title}`;
        }
        else {
            return `Next Page}`;
        }
    }
    getBackTitle() {
        if (this && this.pageState && this.pageState.prev && this.pageState.prev.title) {
            return `Back: ${this.pageState.prev.title}`;
        }
        else {
            return `Previous Page}`;
        }
    }
}
NavCatComponent.ɵfac = function NavCatComponent_Factory(t) { return new (t || NavCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NavCatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavCatComponent, selectors: [["oscal-nav-cat"]], decls: 4, vars: 2, consts: [["vertical", "top", "horizontal", "end"], ["fill", "outline", "color", "warning", "class", "float", 3, "title", "click", 4, "ngIf"], ["fill", "outline", "background-color", "var(--ion-color-navigation)", "class", "float", 3, "title", "click", 4, "ngIf"], ["fill", "outline", "color", "warning", 1, "float", 3, "title", "click"], ["name", "arrow-back-circle"], ["fill", "outline", "background-color", "var(--ion-color-navigation)", 1, "float", 3, "title", "click"], ["name", "arrow-forward-circle"]], template: function NavCatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavCatComponent_ion_fab_button_2_Template, 2, 1, "ion-fab-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NavCatComponent_ion_fab_button_3_Template, 2, 1, "ion-fab-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageState && ctx.pageState.prev);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageState && ctx.pageState.next);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon], styles: ["div.floaty[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18;\n  left: 13;\n  background: #eaeaea;\n  width: 30px;\n  height: 150px;\n}\n\nion-fab-button.float[_ngcontent-%COMP%] {\n  top: 18;\n  left: 18;\n  --border-width: 0;\n  --padding-top: 10;\n  --padding-start: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1jYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDRixpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJuYXYtY2F0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmZsb2F0eSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxODsgLy9vciB3aGVyZXZlciB5b3Ugd2FudCBpdCB0byBmbG9hdFxuICBsZWZ0OiAxMztcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uLmZsb2F0IHtcbiAgICB0b3A6MTg7XG4gICAgbGVmdDoxODtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tcGFkZGluZy10b3A6IDEwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwO1xufVxuIl19 */"] });


/***/ }),

/***/ 5535:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/all-components/select-families/select-families.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectFamiliesComponent": () => (/* binding */ SelectFamiliesComponent)
/* harmony export */ });
/* harmony import */ var _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../providers/oscal-data/catalog.service */ 1014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);






function SelectFamiliesComponent_ion_select_6_ion_select_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r4.key, "-", item_r4.value, " ");
} }
function SelectFamiliesComponent_ion_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectFamiliesComponent_ion_select_6_Template_ion_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.selectedValue = $event; })("ionChange", function SelectFamiliesComponent_ion_select_6_Template_ion_select_ionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.selectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectFamiliesComponent_ion_select_6_ion_select_option_1_Template, 2, 3, "ion-select-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("selectedText", ctx_r0.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.selectItems);
} }
function SelectFamiliesComponent_ion_select_7_ion_select_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r9.key, "-", item_r9.value, " ");
} }
function SelectFamiliesComponent_ion_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SelectFamiliesComponent_ion_select_7_Template_ion_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.selectedValue = $event; })("ionChange", function SelectFamiliesComponent_ion_select_7_Template_ion_select_ionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.selectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectFamiliesComponent_ion_select_7_ion_select_option_1_Template, 2, 3, "ion-select-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("selectedText", ctx_r1.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.selectItems);
} }
function SelectFamiliesComponent_ion_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.familyLabel);
} }
class SelectFamiliesComponent {
    constructor(cat) {
        this.selectItems = [];
        this.checkItems = [];
        this.familyLabel = '';
        console.log('!!! Beginning Select !!!');
        // this.cat = new CatalogService();
        this.families = this.cat.getRawGroups();
        if (this.families) {
            this.families.forEach((fam, idx) => {
                const x = { key: fam.id.toUpperCase(), value: `${fam.title}` }; /* ${fam.id.toUpperCase()} - */
                const y = { key: x.key, value: x.value, checked: false };
                console.log(`X[${(idx + 1)}] = {${x.key}: ${x.value}}`);
                this.selectItems.push(x);
                this.checkItems.push(y);
            });
        }
        else {
            this.selectItems = [
                { key: '1', value: 'Entry 1' },
                { key: '2', value: 'Entering 2' },
            ];
        }
    }
    ngOnInit() { }
    selectionChange(event) {
        console.log(event.detail);
        console.log('in Change Event');
        const newLabel = this.selectItems.find(e => e.key === event.detail.value).value;
        console.log(`Cell Value:${newLabel}`);
        this.familyLabel = newLabel;
    }
}
SelectFamiliesComponent.ɵfac = function SelectFamiliesComponent_Factory(t) { return new (t || SelectFamiliesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_0__.CatalogService)); };
SelectFamiliesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectFamiliesComponent, selectors: [["oscal-select-families"]], inputs: { listStyle: "listStyle" }, decls: 11, vars: 3, consts: [["placeholder", "Select Family", "interface", "action-sheet", 3, "ngModel", "selectedText", "ngModelChange", "ionChange", 4, "ngIf"], ["placeholder", "Select Family", "interface", "popover", 3, "ngModel", "selectedText", "ngModelChange", "ionChange", 4, "ngIf"], ["floating", "", 4, "ngIf"], ["placeholder", "Select Family", "interface", "action-sheet", 3, "ngModel", "selectedText", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["placeholder", "Select Family", "interface", "popover", 3, "ngModel", "selectedText", "ngModelChange", "ionChange"], ["floating", ""]], template: function SelectFamiliesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Select Control Family :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectFamiliesComponent_ion_select_6_Template, 2, 3, "ion-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SelectFamiliesComponent_ion_select_7_Template, 2, 3, "ion-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SelectFamiliesComponent_ion_label_10_Template, 2, 1, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.listStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.familyLabel);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtZmFtaWxpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5020:
/*!********************************************************************!*\
  !*** ./src/app/providers/app-state/state-nav-cat/pages.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageGroup": () => (/* binding */ PageGroup),
/* harmony export */   "PagesService": () => (/* binding */ PagesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

var PageGroup;
(function (PageGroup) {
    PageGroup[PageGroup["navCatSection"] = 0] = "navCatSection";
    PageGroup[PageGroup["navProFileSection"] = 1] = "navProFileSection";
})(PageGroup || (PageGroup = {}));
class PagesService {
    constructor() {
        this.appPartsPages = [
            {
                pageGroup: PageGroup.navCatSection,
                sequence: 0,
                title: 'Authoring Mode',
                toolTip: 'Select a Catalog or Pick Saved Work',
                url: '/cat-begin',
                icon: 'color-wand' // options, pricetags, push, shuffle
            }, {
                pageGroup: PageGroup.navCatSection,
                sequence: 1,
                title: 'Meta Info',
                toolTip: 'Populate Catalog/Profile Metadata',
                url: '/cat-meta',
                icon: 'finger-print'
            }, {
                pageGroup: PageGroup.navCatSection,
                sequence: 2,
                title: 'Catalog Controls',
                toolTip: 'Include/Exclude a Aet of Families, Controls, Enhancements',
                url: '/cat-select-async',
                icon: 'list' // cafe
            }, {
                pageGroup: PageGroup.navCatSection,
                sequence: 3,
                title: 'Selected Controls',
                toolTip: 'Modify Selected Entities from the Previous Step',
                url: '/pro-edit',
                icon: 'filter' // color-fill
            }, {
                pageGroup: PageGroup.navCatSection,
                sequence: 4,
                title: 'Regroup Controls',
                toolTip: 'Regroup Catalog Entities Selected Earlier',
                url: '/pro-group',
                icon: 'list-circle' // funnel
            },
            //  {
            //   pageGroup: PageGroup.navCatSection,
            //   sequence: 5,
            //   title: 'Back Matter',
            //   toolTip: 'Edit Back Matter ',
            //   url: '/pro-back',
            //   icon: 'attach'
            // },
            // {
            //   pageGroup: PageGroup.navProFileSection,
            //   sequence: 0,
            //   title: 'Review',
            //   toolTip: 'Select a Catalog or Pick Saved Work',
            //   url: '/review',
            //   icon: 'glasses'
            // },
            {
                pageGroup: PageGroup.navProFileSection,
                sequence: 1,
                title: 'Download File',
                toolTip: 'Select a Catalog or Pick Saved Work',
                url: '/save',
                icon: 'cloud-download'
            },
            {
                pageGroup: PageGroup.navProFileSection,
                sequence: 2,
                title: 'Upload File',
                toolTip: 'Select a Catalog or Pick Saved Work',
                url: '/load',
                icon: 'cloud-upload'
            },
        ];
    }
    getAllPages() {
        return this.appPartsPages;
    }
    getPagesForGroup(groupName) {
        return this.appPartsPages.filter(m => groupName === m.pageGroup);
    }
    getCurrentPage(urlTail) {
        const current = this.appPartsPages.filter(m => urlTail === m.url);
        if (current.length === 1) {
            return current[0] || null;
        }
        else {
            return current[current.length - 1] || null;
        }
    }
    getCurrentNextState(urlTail) {
        // console.log(`urlTail:${urlTail}`);
        const currentPage = this.getCurrentPage(urlTail);
        if (currentPage) {
            // console.log(`CurrentGroup=[${currentPage.pageGroup}]; Current UrlTail=${urlTail}`);
            const currentSection = this.getPagesForGroup(currentPage.pageGroup);
            // currentSection.forEach(m =>console.log(`Group: ${currentPage.pageGroup} @${m.url} #${m.sequence}`));
            const nextNum = currentPage.sequence + 1;
            const prevNum = currentPage.sequence - 1;
            const ret = {
                nextPages: currentSection.filter(m => currentPage.sequence > m.sequence),
                prevPages: currentSection.filter(m => currentPage.sequence < m.sequence),
                next: currentSection.find(m => nextNum === m.sequence) || undefined,
                prev: currentSection.find(m => prevNum === m.sequence) || undefined,
                current: currentPage,
            };
            return ret;
        }
        return null;
    }
}
PagesService.ɵfac = function PagesService_Factory(t) { return new (t || PagesService)(); };
PagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PagesService, factory: PagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3616:
/*!**********************************************************!*\
  !*** ./src/app/providers/logging/log-manager.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogManagerService": () => (/* binding */ LogManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LogManagerService {
    constructor() { }
    logData(data, level = 0) {
        if (level > 3) {
            return;
        }
        Object.keys(data).forEach(key => {
            const spacer = '\t'.repeat(level + 1);
            if (!!data[key]) {
                if (typeof (data[key]) in ['string', 'boolean', 'number']) {
                    console.log(`${spacer}Key:'${key}';\n${spacer}Value:'${data[key]}';`);
                }
                else if (!!data[key] && Array.isArray(data[key])) {
                    console.log(`${spacer}Key:'${key}'; TypeOf:'Array';`);
                    if (data[key].length > 0) {
                        data[key].forEach((element, index) => {
                            if (!!data[key]) {
                                console.log(`${spacer}\tValue[${index}]:${element} TypeOf:${typeof element};`);
                            }
                        });
                    }
                    else {
                        console.log(`${spacer}\t::'<...Empty-Array...>';`);
                    }
                }
                else if (typeof (data[key]) === 'object') {
                    console.log(`${spacer}Key:'${key}';\n${spacer}TypeOf:'object';`);
                    this.logData(data[key], level + 1);
                }
                else {
                    console.log(`${spacer}Key:'${key}';\n${spacer}Value:'${data[key]}';`);
                }
            }
        });
        level = level > 0 ? level - 1 : 0;
    }
}
LogManagerService.ɵfac = function LogManagerService_Factory(t) { return new (t || LogManagerService)(); };
LogManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogManagerService, factory: LogManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5297:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ 9976:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ 7684);
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ 202);
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ 7723);
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ 7146);
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ 7434);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ 5297);
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ 8179);







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ 8179:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ 5297);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ 6703:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ 6610:
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ 7684:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 8325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ 202:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 8325);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 1924);
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ 5691);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 7723:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 8325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 1924);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 7146:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 8325);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 812);
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ 2564);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 7434:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 8325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 812);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ 7367);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 9745:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ 1170:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 1924:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 8325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 5691:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ 7723);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 1924);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ 812:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ 8325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 7367);


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 2564:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ 7434);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 1170);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 812);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 7367);



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ 7367:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 9672:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ 677:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ 6712:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ 5117);
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ 1410);
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ 9360);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ 9976);
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ 6703);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 6610);
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ 9745);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ 6361:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ 5117:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ 6361);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ 4711:
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ 7850:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ 4094:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ 7002:
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ 7482:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ 2983:
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ 4711);

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ 1607:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ 1765:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ 7850);

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ 1333:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ 4094);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ 7002);


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ 1410:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ 7482);
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ 2983);
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ 1607);
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ 1765);
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ 1333);






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ 6527:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 677);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ 9360:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 9672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 8325:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_all-components_components_module_ts.js.map