"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_all-components_components_module_ts"],{

/***/ 75160:
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

/***/ 51145:
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

/***/ 8358:
/*!***************************************************************!*\
  !*** ./src/app/interfaces/oscal-types/oscal-catalog.types.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transport": () => (/* binding */ Transport),
/* harmony export */   "PurpleState": () => (/* binding */ PurpleState),
/* harmony export */   "PartyType": () => (/* binding */ PartyType),
/* harmony export */   "TimeUnit": () => (/* binding */ TimeUnit),
/* harmony export */   "ActorType": () => (/* binding */ ActorType),
/* harmony export */   "ObjectiveStatusState": () => (/* binding */ ObjectiveStatusState),
/* harmony export */   "FindingTargetType": () => (/* binding */ FindingTargetType),
/* harmony export */   "ParameterCardinality": () => (/* binding */ ParameterCardinality),
/* harmony export */   "IncludeContainedControlsWithControl": () => (/* binding */ IncludeContainedControlsWithControl),
/* harmony export */   "CombinationMethod": () => (/* binding */ CombinationMethod),
/* harmony export */   "Order": () => (/* binding */ Order),
/* harmony export */   "Position": () => (/* binding */ Position),
/* harmony export */   "FluffyState": () => (/* binding */ FluffyState),
/* harmony export */   "Convert": () => (/* binding */ Convert)
/* harmony export */ });
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
 * Indicates the transport type.
 */
var Transport;
(function (Transport) {
    Transport["TCP"] = "TCP";
    Transport["UDP"] = "UDP";
})(Transport || (Transport = {}));
/**
 * The operational status.
 */
var PurpleState;
(function (PurpleState) {
    PurpleState["Disposition"] = "disposition";
    PurpleState["Operational"] = "operational";
    PurpleState["Other"] = "other";
    PurpleState["UnderDevelopment"] = "under-development";
})(PurpleState || (PurpleState = {}));
/**
 * A category describing the kind of party the object describes.
 */
var PartyType;
(function (PartyType) {
    PartyType["Organization"] = "organization";
    PartyType["Person"] = "person";
})(PartyType || (PartyType = {}));
/**
 * The unit of time for the period.
 */
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["Days"] = "days";
    TimeUnit["Hours"] = "hours";
    TimeUnit["Minutes"] = "minutes";
    TimeUnit["Months"] = "months";
    TimeUnit["Seconds"] = "seconds";
    TimeUnit["Years"] = "years";
})(TimeUnit || (TimeUnit = {}));
/**
 * The kind of actor.
 */
var ActorType;
(function (ActorType) {
    ActorType["AssessmentPlatform"] = "assessment-platform";
    ActorType["Party"] = "party";
    ActorType["Tool"] = "tool";
})(ActorType || (ActorType = {}));
/**
 * An indication as to whether the objective is satisfied or not.
 */
var ObjectiveStatusState;
(function (ObjectiveStatusState) {
    ObjectiveStatusState["NotSatisfied"] = "not-satisfied";
    ObjectiveStatusState["Satisfied"] = "satisfied";
})(ObjectiveStatusState || (ObjectiveStatusState = {}));
/**
 * Identifies the type of the target.
 */
var FindingTargetType;
(function (FindingTargetType) {
    FindingTargetType["ObjectiveID"] = "objective-id";
    FindingTargetType["StatementID"] = "statement-id";
})(FindingTargetType || (FindingTargetType = {}));
/**
 * Describes the number of selections that must occur. Without this setting, only one value
 * should be assumed to be permitted.
 */
var ParameterCardinality;
(function (ParameterCardinality) {
    ParameterCardinality["One"] = "one";
    ParameterCardinality["OneOrMore"] = "one-or-more";
})(ParameterCardinality || (ParameterCardinality = {}));
/**
 * When a control is included, whether its child (dependent) controls are also included.
 */
var IncludeContainedControlsWithControl;
(function (IncludeContainedControlsWithControl) {
    IncludeContainedControlsWithControl["No"] = "no";
    IncludeContainedControlsWithControl["Yes"] = "yes";
})(IncludeContainedControlsWithControl || (IncludeContainedControlsWithControl = {}));
/**
 * How clashing controls should be handled
 */
var CombinationMethod;
(function (CombinationMethod) {
    CombinationMethod["Keep"] = "keep";
    CombinationMethod["Merge"] = "merge";
    CombinationMethod["UseFirst"] = "use-first";
})(CombinationMethod || (CombinationMethod = {}));
/**
 * A designation of how a selection of controls in a profile is to be ordered.
 */
var Order;
(function (Order) {
    Order["Ascending"] = "ascending";
    Order["Descending"] = "descending";
    Order["Keep"] = "keep";
})(Order || (Order = {}));
/**
 * Where to add the new content with respect to the targeted element (beside it or inside it)
 */
var Position;
(function (Position) {
    Position["After"] = "after";
    Position["Before"] = "before";
    Position["Ending"] = "ending";
    Position["Starting"] = "starting";
})(Position || (Position = {}));
/**
 * The current operating status.
 */
var FluffyState;
(function (FluffyState) {
    FluffyState["Disposition"] = "disposition";
    FluffyState["Operational"] = "operational";
    FluffyState["Other"] = "other";
    FluffyState["UnderDevelopment"] = "under-development";
    FluffyState["UnderMajorModification"] = "under-major-modification";
})(FluffyState || (FluffyState = {}));
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
class Convert {
    static toNewSchema(json) {
        return cast(JSON.parse(json), r('NewSchema'));
    }
    static newSchemaToJson(value) {
        return JSON.stringify(uncast(value, r('NewSchema')), null, 2);
    }
}
function invalidValue(typ, val, key = '') {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps, key = '') {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val) {
            return val;
        }
        return invalidValue(typ, val, key);
    }
    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1) {
            return val;
        }
        return invalidValue(cases, val);
    }
    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) {
            return invalidValue('array', val);
        }
        return val.map(el => transform(el, typ, getProps));
    }
    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue('Date', val);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== 'object' || Array.isArray(val)) {
            return invalidValue('object', val);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }
    if (typ === 'any') {
        return val;
    }
    if (typ === null) {
        if (val === null) {
            return val;
        }
        return invalidValue(typ, val);
    }
    if (typ === false) {
        return invalidValue(typ, val);
    }
    while (typeof typ === 'object' && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) {
        return transformEnum(typ, val);
    }
    if (typeof typ === 'object') {
        return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== 'number') {
        return transformDate(val);
    }
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function a(typ) {
    return { arrayItems: typ };
}
function u(...typs) {
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props, additional };
}
function m(additional) {
    return { props: [], additional };
}
function r(name) {
    return { ref: name };
}
const typeMap = {
    NewSchema: o([
        { json: 'catalog', js: 'catalog', typ: u(undefined, r('Catalog')) },
        { json: 'profile', js: 'profile', typ: u(undefined, r('Profile')) },
        { json: 'component-definition', js: 'componentDefinition', typ: u(undefined, r('ComponentDefinition')) },
        { json: 'system-security-plan', js: 'systemSecurityPlan', typ: u(undefined, r('SystemSecurityPlanSSP')) },
        { json: 'assessment-plan', js: 'assessmentPlan', typ: u(undefined, r('SecurityAssessmentPlanSAP')) },
        { json: 'assessment-results', js: 'assessmentResults', typ: u(undefined, r('SecurityAssessmentResultsSAR')) },
        { json: 'plan-of-action-and-milestones', js: 'planOfActionAndMilestones', typ: u(undefined, r('PlanOfActionAndMilestonesPOAM')) },
    ], false),
    SecurityAssessmentPlanSAP: o([
        { json: 'assessment-assets', js: 'assessmentAssets', typ: u(undefined, r('AssessmentAssets')) },
        { json: 'assessment-subjects', js: 'assessmentSubjects', typ: u(undefined, a(r('SubjectOfAssessment'))) },
        { json: 'back-matter', js: 'backMatter', typ: u(undefined, r('BackMatter')) },
        { json: 'import-ssp', js: 'importSSP', typ: r('ImportSystemSecurityPlan') },
        { json: 'local-definitions', js: 'localDefinitions', typ: u(undefined, r('AssessmentPlanLocalDefinitions')) },
        { json: 'metadata', js: 'metadata', typ: r('PublicationMetadata') },
        { json: 'reviewed-controls', js: 'reviewedControls', typ: r('ReviewedControlsAndControlObjectives') },
        { json: 'tasks', js: 'tasks', typ: u(undefined, a(r('Task'))) },
        { json: 'terms-and-conditions', js: 'termsAndConditions', typ: u(undefined, r('AssessmentPlanTermsAndConditions')) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    AssessmentAssets: o([
        { json: 'assessment-platforms', js: 'assessmentPlatforms', typ: a(r('AssessmentPlatform')) },
        { json: 'components', js: 'components', typ: u(undefined, a(r('AssessmentAssetsComponent'))) },
    ], false),
    AssessmentPlatform: o([
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uses-components', js: 'usesComponents', typ: u(undefined, a(r('UsesComponent'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Link: o([
        { json: 'href', js: 'href', typ: '' },
        { json: 'media-type', js: 'mediaType', typ: u(undefined, '') },
        { json: 'rel', js: 'rel', typ: u(undefined, '') },
        { json: 'text', js: 'text', typ: u(undefined, '') },
    ], false),
    Property: o([
        { json: 'class', js: 'class', typ: u(undefined, '') },
        { json: 'name', js: 'name', typ: '' },
        { json: 'ns', js: 'ns', typ: u(undefined, '') },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: u(undefined, '') },
        { json: 'value', js: 'value', typ: '' },
    ], false),
    UsesComponent: o([
        { json: 'component-uuid', js: 'componentUUID', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-parties', js: 'responsibleParties', typ: u(undefined, a(r('ResponsibleParty'))) },
    ], false),
    ResponsibleParty: o([
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'party-uuids', js: 'partyUuids', typ: a('') },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'role-id', js: 'roleID', typ: '' },
    ], false),
    AssessmentAssetsComponent: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'protocols', js: 'protocols', typ: u(undefined, a(r('ServiceProtocolInformation'))) },
        { json: 'purpose', js: 'purpose', typ: u(undefined, '') },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'status', js: 'status', typ: r('ComponentStatus') },
        { json: 'title', js: 'title', typ: '' },
        { json: 'type', js: 'type', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ServiceProtocolInformation: o([
        { json: 'name', js: 'name', typ: '' },
        { json: 'port-ranges', js: 'portRanges', typ: u(undefined, a(r('PortRange'))) },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: u(undefined, '') },
    ], false),
    PortRange: o([
        { json: 'end', js: 'end', typ: u(undefined, 0) },
        { json: 'start', js: 'start', typ: u(undefined, 0) },
        { json: 'transport', js: 'transport', typ: u(undefined, r('Transport')) },
    ], false),
    ResponsibleRole: o([
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'party-uuids', js: 'partyUuids', typ: u(undefined, a('')) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'role-id', js: 'roleID', typ: '' },
    ], false),
    ComponentStatus: o([
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'state', js: 'state', typ: r('PurpleState') },
    ], false),
    SubjectOfAssessment: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'exclude-subjects', js: 'excludeSubjects', typ: u(undefined, a(r('SelectAssessmentSubject'))) },
        { json: 'include-all', js: 'includeAll', typ: u(undefined, r('AssessmentSubjectIncludeAll')) },
        { json: 'include-subjects', js: 'includeSubjects', typ: u(undefined, a(r('SelectAssessmentSubject'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'type', js: 'type', typ: '' },
    ], false),
    SelectAssessmentSubject: o([
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'subject-uuid', js: 'subjectUUID', typ: '' },
        { json: 'type', js: 'type', typ: '' },
    ], false),
    AssessmentSubjectIncludeAll: o([], false),
    BackMatter: o([
        { json: 'resources', js: 'resources', typ: u(undefined, a(r('Resource'))) },
    ], false),
    Resource: o([
        { json: 'base64', js: 'base64', typ: u(undefined, r('Base64')) },
        { json: 'citation', js: 'citation', typ: u(undefined, r('Citation')) },
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'document-ids', js: 'documentIDS', typ: u(undefined, a(r('DocumentIdentifier'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'rlinks', js: 'rlinks', typ: u(undefined, a(r('ResourceLink'))) },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Base64: o([
        { json: 'filename', js: 'filename', typ: u(undefined, '') },
        { json: 'media-type', js: 'mediaType', typ: u(undefined, '') },
        { json: 'value', js: 'value', typ: '' },
    ], false),
    Citation: o([
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'text', js: 'text', typ: '' },
    ], false),
    DocumentIdentifier: o([
        { json: 'identifier', js: 'identifier', typ: '' },
        { json: 'scheme', js: 'scheme', typ: u(undefined, '') },
    ], false),
    ResourceLink: o([
        { json: 'hashes', js: 'hashes', typ: u(undefined, a(r('Hash'))) },
        { json: 'href', js: 'href', typ: '' },
        { json: 'media-type', js: 'mediaType', typ: u(undefined, '') },
    ], false),
    Hash: o([
        { json: 'algorithm', js: 'algorithm', typ: '' },
        { json: 'value', js: 'value', typ: '' },
    ], false),
    ImportSystemSecurityPlan: o([
        { json: 'href', js: 'href', typ: '' },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    AssessmentPlanLocalDefinitions: o([
        { json: 'activities', js: 'activities', typ: u(undefined, a(r('Activity'))) },
        { json: 'components', js: 'components', typ: u(undefined, a(r('AssessmentAssetsComponent'))) },
        { json: 'inventory-items', js: 'inventoryItems', typ: u(undefined, a(r('InventoryItem'))) },
        { json: 'objectives-and-methods', js: 'objectivesAndMethods', typ: u(undefined, a(r('AssessmentSpecificControlObjective'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'users', js: 'users', typ: u(undefined, a(r('SystemUser'))) },
    ], false),
    Activity: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'related-controls', js: 'relatedControls', typ: u(undefined, r('ReviewedControlsAndControlObjectives')) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'steps', js: 'steps', typ: u(undefined, a(r('Step'))) },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ReviewedControlsAndControlObjectives: o([
        { json: 'control-objective-selections', js: 'controlObjectiveSelections', typ: u(undefined, a(r('ReferencedControlObjectives'))) },
        { json: 'control-selections', js: 'controlSelections', typ: a(r('AssessedControls')) },
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    ReferencedControlObjectives: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'exclude-objectives', js: 'excludeObjectives', typ: u(undefined, a(r('SelectObjective'))) },
        { json: 'include-all', js: 'includeAll', typ: u(undefined, r('ControlObjectiveSelectionIncludeAll')) },
        { json: 'include-objectives', js: 'includeObjectives', typ: u(undefined, a(r('SelectObjective'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    SelectObjective: o([
        { json: 'objective-id', js: 'objectiveID', typ: '' },
    ], false),
    ControlObjectiveSelectionIncludeAll: o([], false),
    AssessedControls: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'exclude-controls', js: 'excludeControls', typ: u(undefined, a(r('SelectControl'))) },
        { json: 'include-all', js: 'includeAll', typ: u(undefined, r('ControlSelectionIncludeAll')) },
        { json: 'include-controls', js: 'includeControls', typ: u(undefined, a(r('SelectControl'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    SelectControl: o([
        { json: 'control-id', js: 'controlID', typ: '' },
        { json: 'statement-ids', js: 'statementIDS', typ: u(undefined, a('')) },
    ], false),
    ControlSelectionIncludeAll: o([], false),
    Step: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'reviewed-controls', js: 'reviewedControls', typ: u(undefined, r('ReviewedControlsAndControlObjectives')) },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    InventoryItem: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'implemented-components', js: 'implementedComponents', typ: u(undefined, a(r('ImplementedComponent'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-parties', js: 'responsibleParties', typ: u(undefined, a(r('ResponsibleParty'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ImplementedComponent: o([
        { json: 'component-uuid', js: 'componentUUID', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-parties', js: 'responsibleParties', typ: u(undefined, a(r('ResponsibleParty'))) },
    ], false),
    AssessmentSpecificControlObjective: o([
        { json: 'control-id', js: 'controlID', typ: '' },
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'parts', js: 'parts', typ: a(r('Part')) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    Part: o([
        { json: 'class', js: 'class', typ: u(undefined, '') },
        { json: 'id', js: 'id', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'name', js: 'name', typ: '' },
        { json: 'ns', js: 'ns', typ: u(undefined, '') },
        { json: 'parts', js: 'parts', typ: u(undefined, a(r('Part'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'prose', js: 'prose', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: u(undefined, '') },
    ], false),
    SystemUser: o([
        { json: 'authorized-privileges', js: 'authorizedPrivileges', typ: u(undefined, a(r('Privilege'))) },
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'role-ids', js: 'roleIDS', typ: u(undefined, a('')) },
        { json: 'short-name', js: 'shortName', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Privilege: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'functions-performed', js: 'functionsPerformed', typ: a('') },
        { json: 'title', js: 'title', typ: '' },
    ], false),
    PublicationMetadata: o([
        { json: 'document-ids', js: 'documentIDS', typ: u(undefined, a(r('DocumentIdentifier'))) },
        { json: 'last-modified', js: 'lastModified', typ: Date },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'locations', js: 'locations', typ: u(undefined, a(r('Location'))) },
        { json: 'oscal-version', js: 'oscalVersion', typ: '' },
        { json: 'parties', js: 'parties', typ: u(undefined, a(r('PartyOrganizationOrPerson'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'published', js: 'published', typ: u(undefined, Date) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-parties', js: 'responsibleParties', typ: u(undefined, a(r('ResponsibleParty'))) },
        { json: 'revisions', js: 'revisions', typ: u(undefined, a(r('RevisionHistoryEntry'))) },
        { json: 'roles', js: 'roles', typ: u(undefined, a(r('Role'))) },
        { json: 'title', js: 'title', typ: '' },
        { json: 'version', js: 'version', typ: '' },
    ], false),
    Location: o([
        { json: 'address', js: 'address', typ: r('Address') },
        { json: 'email-addresses', js: 'emailAddresses', typ: u(undefined, a('')) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'telephone-numbers', js: 'telephoneNumbers', typ: u(undefined, a(r('TelephoneNumber'))) },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'urls', js: 'urls', typ: u(undefined, a('')) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Address: o([
        { json: 'addr-lines', js: 'addrLines', typ: u(undefined, a('')) },
        { json: 'city', js: 'city', typ: u(undefined, '') },
        { json: 'country', js: 'country', typ: u(undefined, '') },
        { json: 'postal-code', js: 'postalCode', typ: u(undefined, '') },
        { json: 'state', js: 'state', typ: u(undefined, '') },
        { json: 'type', js: 'type', typ: u(undefined, '') },
    ], false),
    TelephoneNumber: o([
        { json: 'number', js: 'number', typ: '' },
        { json: 'type', js: 'type', typ: u(undefined, '') },
    ], false),
    PartyOrganizationOrPerson: o([
        { json: 'addresses', js: 'addresses', typ: u(undefined, a(r('Address'))) },
        { json: 'email-addresses', js: 'emailAddresses', typ: u(undefined, a('')) },
        { json: 'external-ids', js: 'externalIDS', typ: u(undefined, a(r('PartyExternalIdentifier'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'location-uuids', js: 'locationUuids', typ: u(undefined, a('')) },
        { json: 'member-of-organizations', js: 'memberOfOrganizations', typ: u(undefined, a('')) },
        { json: 'name', js: 'name', typ: u(undefined, '') },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'short-name', js: 'shortName', typ: u(undefined, '') },
        { json: 'telephone-numbers', js: 'telephoneNumbers', typ: u(undefined, a(r('TelephoneNumber'))) },
        { json: 'type', js: 'type', typ: r('PartyType') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    PartyExternalIdentifier: o([
        { json: 'id', js: 'id', typ: '' },
        { json: 'scheme', js: 'scheme', typ: '' },
    ], false),
    RevisionHistoryEntry: o([
        { json: 'last-modified', js: 'lastModified', typ: u(undefined, Date) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'oscal-version', js: 'oscalVersion', typ: u(undefined, '') },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'published', js: 'published', typ: u(undefined, Date) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'version', js: 'version', typ: u(undefined, '') },
    ], false),
    Role: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'id', js: 'id', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'short-name', js: 'shortName', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: '' },
    ], false),
    Task: o([
        { json: 'associated-activities', js: 'associatedActivities', typ: u(undefined, a(r('AssociatedActivity'))) },
        { json: 'dependencies', js: 'dependencies', typ: u(undefined, a(r('TaskDependency'))) },
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'subjects', js: 'subjects', typ: u(undefined, a(r('SubjectOfAssessment'))) },
        { json: 'tasks', js: 'tasks', typ: u(undefined, a(r('Task'))) },
        { json: 'timing', js: 'timing', typ: u(undefined, r('EventTiming')) },
        { json: 'title', js: 'title', typ: '' },
        { json: 'type', js: 'type', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    AssociatedActivity: o([
        { json: 'activity-uuid', js: 'activityUUID', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'subjects', js: 'subjects', typ: a(r('SubjectOfAssessment')) },
    ], false),
    TaskDependency: o([
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'task-uuid', js: 'taskUUID', typ: '' },
    ], false),
    EventTiming: o([
        { json: 'at-frequency', js: 'atFrequency', typ: u(undefined, r('FrequencyCondition')) },
        { json: 'on-date', js: 'onDate', typ: u(undefined, r('OnDateCondition')) },
        { json: 'within-date-range', js: 'withinDateRange', typ: u(undefined, r('OnDateRangeCondition')) },
    ], false),
    FrequencyCondition: o([
        { json: 'period', js: 'period', typ: 0 },
        { json: 'unit', js: 'unit', typ: r('TimeUnit') },
    ], false),
    OnDateCondition: o([
        { json: 'date', js: 'date', typ: Date },
    ], false),
    OnDateRangeCondition: o([
        { json: 'end', js: 'end', typ: Date },
        { json: 'start', js: 'start', typ: Date },
    ], false),
    AssessmentPlanTermsAndConditions: o([
        { json: 'parts', js: 'parts', typ: u(undefined, a(r('AssessmentPart'))) },
    ], false),
    AssessmentPart: o([
        { json: 'class', js: 'class', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'name', js: 'name', typ: '' },
        { json: 'ns', js: 'ns', typ: u(undefined, '') },
        { json: 'parts', js: 'parts', typ: u(undefined, a(r('AssessmentPart'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'prose', js: 'prose', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: u(undefined, '') },
    ], false),
    SecurityAssessmentResultsSAR: o([
        { json: 'back-matter', js: 'backMatter', typ: u(undefined, r('BackMatter')) },
        { json: 'import-ap', js: 'importAp', typ: r('ImportAssessmentPlan') },
        { json: 'local-definitions', js: 'localDefinitions', typ: u(undefined, r('AssessmentResultsLocalDefinitions')) },
        { json: 'metadata', js: 'metadata', typ: r('PublicationMetadata') },
        { json: 'results', js: 'results', typ: a(r('AssessmentResult')) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ImportAssessmentPlan: o([
        { json: 'href', js: 'href', typ: '' },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    AssessmentResultsLocalDefinitions: o([
        { json: 'activities', js: 'activities', typ: u(undefined, a(r('Activity'))) },
        { json: 'objectives-and-methods', js: 'objectivesAndMethods', typ: u(undefined, a(r('AssessmentSpecificControlObjective'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    AssessmentResult: o([
        { json: 'assessment-log', js: 'assessmentLog', typ: u(undefined, r('AssessmentLog')) },
        { json: 'attestations', js: 'attestations', typ: u(undefined, a(r('AttestationStatements'))) },
        { json: 'description', js: 'description', typ: '' },
        { json: 'end', js: 'end', typ: u(undefined, Date) },
        { json: 'findings', js: 'findings', typ: u(undefined, a(r('Finding'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'local-definitions', js: 'localDefinitions', typ: u(undefined, r('ResultLocalDefinitions')) },
        { json: 'observations', js: 'observations', typ: u(undefined, a(r('Observation'))) },
        { json: 'prop', js: 'prop', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'reviewed-controls', js: 'reviewedControls', typ: r('ReviewedControlsAndControlObjectives') },
        { json: 'risks', js: 'risks', typ: u(undefined, a(r('IdentifiedRisk'))) },
        { json: 'start', js: 'start', typ: Date },
        { json: 'title', js: 'title', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    AssessmentLog: o([
        { json: 'entries', js: 'entries', typ: a(r('AssessmentLogEntry')) },
    ], false),
    AssessmentLogEntry: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'end', js: 'end', typ: u(undefined, Date) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'logged-by', js: 'loggedBy', typ: u(undefined, a(r('LoggedBy'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'related-tasks', js: 'relatedTasks', typ: u(undefined, a(r('TaskReference'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'start', js: 'start', typ: Date },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    LoggedBy: o([
        { json: 'party-uuid', js: 'partyUUID', typ: '' },
        { json: 'role-id', js: 'roleID', typ: u(undefined, '') },
    ], false),
    TaskReference: o([
        { json: 'identified-subject', js: 'identifiedSubject', typ: u(undefined, r('IdentifiedSubject')) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-parties', js: 'responsibleParties', typ: u(undefined, a(r('ResponsibleParty'))) },
        { json: 'subjects', js: 'subjects', typ: u(undefined, a(r('SubjectOfAssessment'))) },
        { json: 'task-uuid', js: 'taskUUID', typ: '' },
    ], false),
    IdentifiedSubject: o([
        { json: 'subject-placeholder-uuid', js: 'subjectPlaceholderUUID', typ: '' },
        { json: 'subjects', js: 'subjects', typ: a(r('SubjectOfAssessment')) },
    ], false),
    AttestationStatements: o([
        { json: 'parts', js: 'parts', typ: a(r('AssessmentPart')) },
        { json: 'responsible-parties', js: 'responsibleParties', typ: u(undefined, a(r('ResponsibleParty'))) },
    ], false),
    Finding: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'implementation-statement-uuid', js: 'implementationStatementUUID', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'origins', js: 'origins', typ: u(undefined, a(r('FindingOrigin'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'related-observations', js: 'relatedObservations', typ: u(undefined, a(r('FindingRelatedObservation'))) },
        { json: 'related-risks', js: 'relatedRisks', typ: u(undefined, a(r('FindingRelatedRisk'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'target', js: 'target', typ: r('TargetClass') },
        { json: 'title', js: 'title', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    FindingOrigin: o([
        { json: 'actors', js: 'actors', typ: a(r('OriginatingActor')) },
        { json: 'related-tasks', js: 'relatedTasks', typ: u(undefined, a(r('TaskReference'))) },
    ], false),
    OriginatingActor: o([
        { json: 'actor-uuid', js: 'actorUUID', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'role-id', js: 'roleID', typ: u(undefined, '') },
        { json: 'type', js: 'type', typ: r('ActorType') },
    ], false),
    FindingRelatedObservation: o([
        { json: 'observation-uuid', js: 'observationUUID', typ: '' },
    ], false),
    FindingRelatedRisk: o([
        { json: 'risk-uuid', js: 'riskUUID', typ: '' },
    ], false),
    TargetClass: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'implementation-status', js: 'implementationStatus', typ: u(undefined, r('ImplementationStatus')) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'status', js: 'status', typ: r('StatusClass') },
        { json: 'target-id', js: 'targetID', typ: '' },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'type', js: 'type', typ: r('FindingTargetType') },
    ], false),
    ImplementationStatus: o([
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'state', js: 'state', typ: '' },
    ], false),
    StatusClass: o([
        { json: 'reason', js: 'reason', typ: u(undefined, '') },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'state', js: 'state', typ: r('ObjectiveStatusState') },
    ], false),
    ResultLocalDefinitions: o([
        { json: 'assessment-assets', js: 'assessmentAssets', typ: u(undefined, r('AssessmentAssets')) },
        { json: 'components', js: 'components', typ: u(undefined, a(r('AssessmentAssetsComponent'))) },
        { json: 'inventory-items', js: 'inventoryItems', typ: u(undefined, a(r('InventoryItem'))) },
        { json: 'tasks', js: 'tasks', typ: u(undefined, a(r('Task'))) },
        { json: 'users', js: 'users', typ: u(undefined, a(r('SystemUser'))) },
    ], false),
    Observation: o([
        { json: 'collected', js: 'collected', typ: Date },
        { json: 'description', js: 'description', typ: '' },
        { json: 'expires', js: 'expires', typ: u(undefined, Date) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'methods', js: 'methods', typ: a('') },
        { json: 'origins', js: 'origins', typ: u(undefined, a(r('FindingOrigin'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'relevant-evidence', js: 'relevantEvidence', typ: u(undefined, a(r('RelevantEvidence'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'subjects', js: 'subjects', typ: u(undefined, a(r('IdentifiesTheSubject'))) },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'types', js: 'types', typ: u(undefined, a('')) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    RelevantEvidence: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'href', js: 'href', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    IdentifiesTheSubject: o([
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'subject-uuid', js: 'subjectUUID', typ: '' },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'type', js: 'type', typ: '' },
    ], false),
    IdentifiedRisk: o([
        { json: 'characterizations', js: 'characterizations', typ: u(undefined, a(r('Characterization'))) },
        { json: 'deadline', js: 'deadline', typ: u(undefined, Date) },
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'mitigating-factors', js: 'mitigatingFactors', typ: u(undefined, a(r('MitigatingFactor'))) },
        { json: 'origins', js: 'origins', typ: u(undefined, a(r('FindingOrigin'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'related-observations', js: 'relatedObservations', typ: u(undefined, a(r('RiskRelatedObservation'))) },
        { json: 'remediations', js: 'remediations', typ: u(undefined, a(r('RiskResponse'))) },
        { json: 'risk-log', js: 'riskLog', typ: u(undefined, r('RiskLog')) },
        { json: 'statement', js: 'statement', typ: '' },
        { json: 'status', js: 'status', typ: '' },
        { json: 'threat-ids', js: 'threatIDS', typ: u(undefined, a(r('ThreatID'))) },
        { json: 'title', js: 'title', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Characterization: o([
        { json: 'facets', js: 'facets', typ: a(r('Facet')) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'origin', js: 'origin', typ: r('FindingOrigin') },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
    ], false),
    Facet: o([
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'name', js: 'name', typ: '' },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'system', js: 'system', typ: '' },
        { json: 'value', js: 'value', typ: '' },
    ], false),
    MitigatingFactor: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'implementation-uuid', js: 'implementationUUID', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'subjects', js: 'subjects', typ: u(undefined, a(r('IdentifiesTheSubject'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    RiskRelatedObservation: o([
        { json: 'observation-uuid', js: 'observationUUID', typ: '' },
    ], false),
    RiskResponse: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'lifecycle', js: 'lifecycle', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'origins', js: 'origins', typ: u(undefined, a(r('FindingOrigin'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'required-assets', js: 'requiredAssets', typ: u(undefined, a(r('RequiredAsset'))) },
        { json: 'tasks', js: 'tasks', typ: u(undefined, a(r('Task'))) },
        { json: 'title', js: 'title', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    RequiredAsset: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'subjects', js: 'subjects', typ: u(undefined, a(r('IdentifiesTheSubject'))) },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    RiskLog: o([
        { json: 'entries', js: 'entries', typ: a(r('RiskLogEntry')) },
    ], false),
    RiskLogEntry: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'end', js: 'end', typ: u(undefined, Date) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'logged-by', js: 'loggedBy', typ: u(undefined, a(r('LoggedBy'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'related-responses', js: 'relatedResponses', typ: u(undefined, a(r('RiskResponseReference'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'start', js: 'start', typ: Date },
        { json: 'status-change', js: 'statusChange', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    RiskResponseReference: o([
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'related-tasks', js: 'relatedTasks', typ: u(undefined, a(r('TaskReference'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'response-uuid', js: 'responseUUID', typ: '' },
    ], false),
    ThreatID: o([
        { json: 'href', js: 'href', typ: u(undefined, '') },
        { json: 'id', js: 'id', typ: '' },
        { json: 'system', js: 'system', typ: '' },
    ], false),
    Catalog: o([
        { json: 'back-matter', js: 'backMatter', typ: u(undefined, r('BackMatter')) },
        { json: 'controls', js: 'controls', typ: u(undefined, a(r('Control'))) },
        { json: 'groups', js: 'groups', typ: u(undefined, a(r('ControlGroup'))) },
        { json: 'metadata', js: 'metadata', typ: r('PublicationMetadata') },
        { json: 'params', js: 'params', typ: u(undefined, a(r('Parameter'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Control: o([
        { json: 'class', js: 'class', typ: u(undefined, '') },
        { json: 'controls', js: 'controls', typ: u(undefined, a(r('Control'))) },
        { json: 'id', js: 'id', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'params', js: 'params', typ: u(undefined, a(r('Parameter'))) },
        { json: 'parts', js: 'parts', typ: u(undefined, a(r('Part'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'title', js: 'title', typ: '' },
    ], false),
    Parameter: o([
        { json: 'class', js: 'class', typ: u(undefined, '') },
        { json: 'constraints', js: 'constraints', typ: u(undefined, a(r('Constraint'))) },
        { json: 'depends-on', js: 'dependsOn', typ: u(undefined, '') },
        { json: 'guidelines', js: 'guidelines', typ: u(undefined, a(r('Guideline'))) },
        { json: 'id', js: 'id', typ: '' },
        { json: 'label', js: 'label', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'select', js: 'select', typ: u(undefined, r('Selection')) },
        { json: 'usage', js: 'usage', typ: u(undefined, '') },
        { json: 'values', js: 'values', typ: u(undefined, a('')) },
    ], false),
    Constraint: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'tests', js: 'tests', typ: u(undefined, a(r('ConstraintTest'))) },
    ], false),
    ConstraintTest: o([
        { json: 'expression', js: 'expression', typ: '' },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    Guideline: o([
        { json: 'prose', js: 'prose', typ: '' },
    ], false),
    Selection: o([
        { json: 'choice', js: 'choice', typ: u(undefined, a('')) },
        { json: 'how-many', js: 'howMany', typ: u(undefined, r('ParameterCardinality')) },
    ], false),
    ControlGroup: o([
        { json: 'class', js: 'class', typ: u(undefined, '') },
        { json: 'controls', js: 'controls', typ: u(undefined, a(r('Control'))) },
        { json: 'groups', js: 'groups', typ: u(undefined, a(r('ControlGroup'))) },
        { json: 'id', js: 'id', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'params', js: 'params', typ: u(undefined, a(r('Parameter'))) },
        { json: 'parts', js: 'parts', typ: u(undefined, a(r('Part'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'title', js: 'title', typ: '' },
    ], false),
    ComponentDefinition: o([
        { json: 'back-matter', js: 'backMatter', typ: u(undefined, r('BackMatter')) },
        { json: 'capabilities', js: 'capabilities', typ: u(undefined, a(r('Capability'))) },
        { json: 'components', js: 'components', typ: u(undefined, a(r('ComponentDefinitionComponent'))) },
        { json: 'import-component-definitions', js: 'importComponentDefinitions', typ: u(undefined, a(r('ImportComponentDefinition'))) },
        { json: 'metadata', js: 'metadata', typ: r('PublicationMetadata') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Capability: o([
        { json: 'control-implementations', js: 'controlImplementations', typ: u(undefined, a(r('ControlImplementationSet'))) },
        { json: 'description', js: 'description', typ: '' },
        { json: 'incorporates-components', js: 'incorporatesComponents', typ: u(undefined, a(r('IncorporatesComponent'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'name', js: 'name', typ: '' },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ControlImplementationSet: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'implemented-requirements', js: 'implementedRequirements', typ: a(r('ImplementedRequirementElement')) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'set-parameters', js: 'setParameters', typ: u(undefined, a(r('SetParameterValue'))) },
        { json: 'source', js: 'source', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ImplementedRequirementElement: o([
        { json: 'control-id', js: 'controlID', typ: '' },
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'set-parameters', js: 'setParameters', typ: u(undefined, a(r('SetParameterValue'))) },
        { json: 'statements', js: 'statements', typ: u(undefined, a(r('ControlStatementImplementation'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    SetParameterValue: o([
        { json: 'param-id', js: 'paramID', typ: '' },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'values', js: 'values', typ: a('') },
    ], false),
    ControlStatementImplementation: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'statement-id', js: 'statementID', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    IncorporatesComponent: o([
        { json: 'component-uuid', js: 'componentUUID', typ: '' },
        { json: 'description', js: 'description', typ: '' },
    ], false),
    ComponentDefinitionComponent: o([
        { json: 'control-implementations', js: 'controlImplementations', typ: u(undefined, a(r('ControlImplementationSet'))) },
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'protocols', js: 'protocols', typ: u(undefined, a(r('ServiceProtocolInformation'))) },
        { json: 'purpose', js: 'purpose', typ: u(undefined, '') },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'title', js: 'title', typ: '' },
        { json: 'type', js: 'type', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ImportComponentDefinition: o([
        { json: 'href', js: 'href', typ: '' },
    ], false),
    PlanOfActionAndMilestonesPOAM: o([
        { json: 'back-matter', js: 'backMatter', typ: u(undefined, r('BackMatter')) },
        { json: 'import-ssp', js: 'importSSP', typ: u(undefined, r('ImportSystemSecurityPlan')) },
        { json: 'local-definitions', js: 'localDefinitions', typ: u(undefined, r('PlanOfActionAndMilestonesLocalDefinitions')) },
        { json: 'metadata', js: 'metadata', typ: r('PublicationMetadata') },
        { json: 'observations', js: 'observations', typ: u(undefined, a(r('Observation'))) },
        { json: 'poam-items', js: 'poamItems', typ: a(r('POAMItem')) },
        { json: 'risks', js: 'risks', typ: u(undefined, a(r('IdentifiedRisk'))) },
        { json: 'system-id', js: 'systemID', typ: u(undefined, r('SystemIdentification')) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    PlanOfActionAndMilestonesLocalDefinitions: o([
        { json: 'components', js: 'components', typ: u(undefined, a(r('AssessmentAssetsComponent'))) },
        { json: 'inventory-items', js: 'inventoryItems', typ: u(undefined, a(r('InventoryItem'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    POAMItem: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'origins', js: 'origins', typ: u(undefined, a(r('PoamItemOrigin'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'related-observations', js: 'relatedObservations', typ: u(undefined, a(r('PoamItemRelatedObservation'))) },
        { json: 'related-risks', js: 'relatedRisks', typ: u(undefined, a(r('PoamItemRelatedRisk'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: '' },
        { json: 'uuid', js: 'uuid', typ: u(undefined, '') },
    ], false),
    PoamItemOrigin: o([
        { json: 'actors', js: 'actors', typ: a(r('OriginatingActor')) },
    ], false),
    PoamItemRelatedObservation: o([
        { json: 'observation-uuid', js: 'observationUUID', typ: '' },
    ], false),
    PoamItemRelatedRisk: o([
        { json: 'risk-uuid', js: 'riskUUID', typ: '' },
    ], false),
    SystemIdentification: o([
        { json: 'id', js: 'id', typ: '' },
        { json: 'identifier-type', js: 'identifierType', typ: u(undefined, '') },
    ], false),
    Profile: o([
        { json: 'back-matter', js: 'backMatter', typ: u(undefined, r('BackMatter')) },
        { json: 'imports', js: 'imports', typ: a(r('ImportResource')) },
        { json: 'merge', js: 'merge', typ: u(undefined, r('MergeControls')) },
        { json: 'metadata', js: 'metadata', typ: r('PublicationMetadata') },
        { json: 'modify', js: 'modify', typ: u(undefined, r('ModifyControls')) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ImportResource: o([
        { json: 'exclude-controls', js: 'excludeControls', typ: u(undefined, a(r('Call'))) },
        { json: 'href', js: 'href', typ: '' },
        { json: 'include-all', js: 'includeAll', typ: u(undefined, r('InsertAll')) },
        { json: 'include-controls', js: 'includeControls', typ: u(undefined, a(r('Call'))) },
    ], false),
    Call: o([
        { json: 'matching', js: 'matching', typ: u(undefined, a(r('MatchControlsByPattern'))) },
        { json: 'with-child-controls', js: 'withChildControls', typ: u(undefined, r('IncludeContainedControlsWithControl')) },
        { json: 'with-ids', js: 'withIDS', typ: u(undefined, a('')) },
    ], false),
    MatchControlsByPattern: o([
        { json: 'pattern', js: 'pattern', typ: u(undefined, '') },
    ], false),
    InsertAll: o([], false),
    MergeControls: o([
        { json: 'as-is', js: 'asIs', typ: u(undefined, true) },
        { json: 'combine', js: 'combine', typ: u(undefined, r('CombinationRule')) },
        { json: 'custom', js: 'custom', typ: u(undefined, r('CustomGrouping')) },
    ], false),
    CombinationRule: o([
        { json: 'method', js: 'method', typ: u(undefined, r('CombinationMethod')) },
    ], false),
    CustomGrouping: o([
        { json: 'groups', js: 'groups', typ: u(undefined, a(r('CustomGroup'))) },
        { json: 'insert-controls', js: 'insertControls', typ: u(undefined, a(r('SelectControls'))) },
    ], false),
    CustomGroup: o([
        { json: 'class', js: 'class', typ: u(undefined, '') },
        { json: 'groups', js: 'groups', typ: u(undefined, a(r('CustomGroup'))) },
        { json: 'id', js: 'id', typ: u(undefined, '') },
        { json: 'insert-controls', js: 'insertControls', typ: u(undefined, a(r('SelectControls'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'params', js: 'params', typ: u(undefined, a(r('Parameter'))) },
        { json: 'parts', js: 'parts', typ: u(undefined, a(r('Part'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'title', js: 'title', typ: '' },
    ], false),
    SelectControls: o([
        { json: 'exclude-controls', js: 'excludeControls', typ: u(undefined, a(r('Call'))) },
        { json: 'include-all', js: 'includeAll', typ: u(undefined, r('InsertAll')) },
        { json: 'include-controls', js: 'includeControls', typ: u(undefined, a(r('Call'))) },
        { json: 'order', js: 'order', typ: u(undefined, r('Order')) },
    ], false),
    ModifyControls: o([
        { json: 'alters', js: 'alters', typ: u(undefined, a(r('Alteration'))) },
        { json: 'set-parameters', js: 'setParameters', typ: u(undefined, a(r('ParameterSetting'))) },
    ], false),
    Alteration: o([
        { json: 'adds', js: 'adds', typ: u(undefined, a(r('Addition'))) },
        { json: 'control-id', js: 'controlID', typ: u(undefined, '') },
        { json: 'removes', js: 'removes', typ: u(undefined, a(r('Removal'))) },
    ], false),
    Addition: o([
        { json: 'by-id', js: 'byID', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'params', js: 'params', typ: u(undefined, a(r('Parameter'))) },
        { json: 'parts', js: 'parts', typ: u(undefined, a(r('Part'))) },
        { json: 'position', js: 'position', typ: u(undefined, r('Position')) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'title', js: 'title', typ: u(undefined, '') },
    ], false),
    Removal: o([
        { json: 'by-class', js: 'byClass', typ: u(undefined, '') },
        { json: 'by-id', js: 'byID', typ: u(undefined, '') },
        { json: 'by-item-name', js: 'byItemName', typ: u(undefined, '') },
        { json: 'by-name', js: 'byName', typ: u(undefined, '') },
        { json: 'by-ns', js: 'byNS', typ: u(undefined, '') },
    ], false),
    ParameterSetting: o([
        { json: 'class', js: 'class', typ: u(undefined, '') },
        { json: 'constraints', js: 'constraints', typ: u(undefined, a(r('Constraint'))) },
        { json: 'depends-on', js: 'dependsOn', typ: u(undefined, '') },
        { json: 'guidelines', js: 'guidelines', typ: u(undefined, a(r('Guideline'))) },
        { json: 'label', js: 'label', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'param-id', js: 'paramID', typ: '' },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'select', js: 'select', typ: u(undefined, r('Selection')) },
        { json: 'usage', js: 'usage', typ: u(undefined, '') },
        { json: 'values', js: 'values', typ: u(undefined, a('')) },
    ], false),
    SystemSecurityPlanSSP: o([
        { json: 'back-matter', js: 'backMatter', typ: u(undefined, r('BackMatter')) },
        { json: 'control-implementation', js: 'controlImplementation', typ: r('ControlImplementationClass') },
        { json: 'import-profile', js: 'importProfile', typ: r('ImportProfile') },
        { json: 'metadata', js: 'metadata', typ: r('PublicationMetadata') },
        { json: 'system-characteristics', js: 'systemCharacteristics', typ: r('SystemCharacteristics') },
        { json: 'system-implementation', js: 'systemImplementation', typ: r('SystemImplementation') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ControlImplementationClass: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'implemented-requirements', js: 'implementedRequirements', typ: a(r('ControlBasedRequirement')) },
        { json: 'set-parameters', js: 'setParameters', typ: u(undefined, a(r('SetParameterValue'))) },
    ], false),
    ControlBasedRequirement: o([
        { json: 'by-components', js: 'byComponents', typ: u(undefined, a(r('ComponentControlImplementation'))) },
        { json: 'control-id', js: 'controlID', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'set-parameters', js: 'setParameters', typ: u(undefined, a(r('SetParameterValue'))) },
        { json: 'statements', js: 'statements', typ: u(undefined, a(r('SpecificControlStatement'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ComponentControlImplementation: o([
        { json: 'component-uuid', js: 'componentUUID', typ: '' },
        { json: 'description', js: 'description', typ: '' },
        { json: 'export', js: 'export', typ: u(undefined, r('Export')) },
        { json: 'implementation-status', js: 'implementationStatus', typ: u(undefined, r('ImplementationStatus')) },
        { json: 'inherited', js: 'inherited', typ: u(undefined, a(r('InheritedControlImplementation'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'satisfied', js: 'satisfied', typ: u(undefined, a(r('SatisfiedControlImplementationResponsibility'))) },
        { json: 'set-parameters', js: 'setParameters', typ: u(undefined, a(r('SetParameterValue'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Export: o([
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'provided', js: 'provided', typ: u(undefined, a(r('ProvidedControlImplementation'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsibilities', js: 'responsibilities', typ: u(undefined, a(r('ControlImplementationResponsibility'))) },
    ], false),
    ProvidedControlImplementation: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ControlImplementationResponsibility: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'provided-uuid', js: 'providedUUID', typ: u(undefined, '') },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    InheritedControlImplementation: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'provided-uuid', js: 'providedUUID', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    SatisfiedControlImplementationResponsibility: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsibility-uuid', js: 'responsibilityUUID', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    SpecificControlStatement: o([
        { json: 'by-components', js: 'byComponents', typ: u(undefined, a(r('ComponentControlImplementation'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-roles', js: 'responsibleRoles', typ: u(undefined, a(r('ResponsibleRole'))) },
        { json: 'statement-id', js: 'statementID', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    ImportProfile: o([
        { json: 'href', js: 'href', typ: '' },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    SystemCharacteristics: o([
        { json: 'authorization-boundary', js: 'authorizationBoundary', typ: r('AuthorizationBoundary') },
        { json: 'data-flow', js: 'dataFlow', typ: u(undefined, r('DataFlow')) },
        { json: 'date-authorized', js: 'dateAuthorized', typ: u(undefined, '') },
        { json: 'description', js: 'description', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'network-architecture', js: 'networkArchitecture', typ: u(undefined, r('NetworkArchitecture')) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'responsible-parties', js: 'responsibleParties', typ: u(undefined, a(r('ResponsibleParty'))) },
        { json: 'security-impact-level', js: 'securityImpactLevel', typ: r('SecurityImpactLevel') },
        { json: 'security-sensitivity-level', js: 'securitySensitivityLevel', typ: '' },
        { json: 'status', js: 'status', typ: r('SystemCharacteristicsStatus') },
        { json: 'system-ids', js: 'systemIDS', typ: a(r('SystemIdentification')) },
        { json: 'system-information', js: 'systemInformation', typ: r('SystemInformation') },
        { json: 'system-name', js: 'systemName', typ: '' },
        { json: 'system-name-short', js: 'systemNameShort', typ: u(undefined, '') },
    ], false),
    AuthorizationBoundary: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'diagrams', js: 'diagrams', typ: u(undefined, a(r('Diagram'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    Diagram: o([
        { json: 'caption', js: 'caption', typ: u(undefined, '') },
        { json: 'description', js: 'description', typ: u(undefined, '') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    DataFlow: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'diagrams', js: 'diagrams', typ: u(undefined, a(r('Diagram'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    NetworkArchitecture: o([
        { json: 'description', js: 'description', typ: '' },
        { json: 'diagrams', js: 'diagrams', typ: u(undefined, a(r('Diagram'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
    ], false),
    SecurityImpactLevel: o([
        { json: 'security-objective-availability', js: 'securityObjectiveAvailability', typ: '' },
        { json: 'security-objective-confidentiality', js: 'securityObjectiveConfidentiality', typ: '' },
        { json: 'security-objective-integrity', js: 'securityObjectiveIntegrity', typ: '' },
    ], false),
    SystemCharacteristicsStatus: o([
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'state', js: 'state', typ: r('FluffyState') },
    ], false),
    SystemInformation: o([
        { json: 'information-types', js: 'informationTypes', typ: a(r('InformationType')) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
    ], false),
    InformationType: o([
        { json: 'availability-impact', js: 'availabilityImpact', typ: r('AvailabilityImpactLevel') },
        { json: 'categorizations', js: 'categorizations', typ: u(undefined, a(r('InformationTypeCategorization'))) },
        { json: 'confidentiality-impact', js: 'confidentialityImpact', typ: r('ConfidentialityImpactLevel') },
        { json: 'description', js: 'description', typ: '' },
        { json: 'integrity-impact', js: 'integrityImpact', typ: r('IntegrityImpactLevel') },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'title', js: 'title', typ: '' },
        { json: 'uuid', js: 'uuid', typ: u(undefined, '') },
    ], false),
    AvailabilityImpactLevel: o([
        { json: 'adjustment-justification', js: 'adjustmentJustification', typ: u(undefined, '') },
        { json: 'base', js: 'base', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'selected', js: 'selected', typ: u(undefined, '') },
    ], false),
    InformationTypeCategorization: o([
        { json: 'information-type-ids', js: 'informationTypeIDS', typ: u(undefined, a('')) },
        { json: 'system', js: 'system', typ: '' },
    ], false),
    ConfidentialityImpactLevel: o([
        { json: 'adjustment-justification', js: 'adjustmentJustification', typ: u(undefined, '') },
        { json: 'base', js: 'base', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'selected', js: 'selected', typ: u(undefined, '') },
    ], false),
    IntegrityImpactLevel: o([
        { json: 'adjustment-justification', js: 'adjustmentJustification', typ: u(undefined, '') },
        { json: 'base', js: 'base', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'selected', js: 'selected', typ: u(undefined, '') },
    ], false),
    SystemImplementation: o([
        { json: 'components', js: 'components', typ: a(r('AssessmentAssetsComponent')) },
        { json: 'inventory-items', js: 'inventoryItems', typ: u(undefined, a(r('InventoryItem'))) },
        { json: 'leveraged-authorizations', js: 'leveragedAuthorizations', typ: u(undefined, a(r('LeveragedAuthorization'))) },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'users', js: 'users', typ: a(r('SystemUser')) },
    ], false),
    LeveragedAuthorization: o([
        { json: 'date-authorized', js: 'dateAuthorized', typ: '' },
        { json: 'links', js: 'links', typ: u(undefined, a(r('Link'))) },
        { json: 'party-uuid', js: 'partyUUID', typ: '' },
        { json: 'props', js: 'props', typ: u(undefined, a(r('Property'))) },
        { json: 'remarks', js: 'remarks', typ: u(undefined, '') },
        { json: 'title', js: 'title', typ: '' },
        { json: 'uuid', js: 'uuid', typ: '' },
    ], false),
    Transport: [
        'TCP',
        'UDP',
    ],
    PurpleState: [
        'disposition',
        'operational',
        'other',
        'under-development',
    ],
    PartyType: [
        'organization',
        'person',
    ],
    TimeUnit: [
        'days',
        'hours',
        'minutes',
        'months',
        'seconds',
        'years',
    ],
    ActorType: [
        'assessment-platform',
        'party',
        'tool',
    ],
    ObjectiveStatusState: [
        'not-satisfied',
        'satisfied',
    ],
    FindingTargetType: [
        'objective-id',
        'statement-id',
    ],
    ParameterCardinality: [
        'one',
        'one-or-more',
    ],
    IncludeContainedControlsWithControl: [
        'no',
        'yes',
    ],
    CombinationMethod: [
        'keep',
        'merge',
        'use-first',
    ],
    Order: [
        'ascending',
        'descending',
        'keep',
    ],
    Position: [
        'after',
        'before',
        'ending',
        'starting',
    ],
    FluffyState: [
        'disposition',
        'operational',
        'other',
        'under-development',
        'under-major-modification',
    ],
};


/***/ }),

/***/ 76426:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-ancestor-base/action-ancestor-base.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionAncestorBaseComponent": () => (/* binding */ ActionAncestorBaseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_ancestor_base_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-ancestor-base.component.html?ngResource */ 69829);
/* harmony import */ var _action_ancestor_base_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-ancestor-base.component.scss?ngResource */ 24739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 62535);



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
let ActionAncestorBaseComponent = class ActionAncestorBaseComponent {
    constructor(formBuilder, parentFormDirect) {
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.label4Optional = ' (Optional)';
        this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.saveTab = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.defaultFormAnchor = 'entries';
        this.inputsMap = new Map();
    }
    ngOnInit() {
        if (!this.ID) { // If the name for entry ID in not good, generate distinct one with UUIDv4
            this.ID = `id_${(0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])().replace('-', '_')}`;
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
        if (count > 0) {
            console.log(`FormArray-Len = ${count} Elem=${elementTitle}`);
        }
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
        this.localForm.patchValue({ uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])() });
    }
    getEmailValidator() {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email;
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
            preparedGroup[key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl((data ? data[key] : ''), (value.validateAs ? value.validateAs : []));
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup(preparedGroup);
    }
    // getGroupDataByKey<Type>(formGroup: FormGroup): Type {
    // }
    getNewFormGroupByFieldToMap(data) {
        const preparedGroup = {};
        for (const [key, value] of this.inputsMap) {
            console.log(`Key=${key}, Val=${value}`);
            preparedGroup[value.fieldToMap] = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl({
                value: (data ? data[value.fieldToMap] : ''),
                disabled: value.isPreset,
            }, (value.validateAs ? value.validateAs : []));
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup(preparedGroup);
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
        formGroupData.patchValue({ uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])() });
    }
    onAssignGroupElementUUID() {
        console.log(`Anchor=${this.defaultFormAnchor}\n subForm=${this.subForm.get('entries')}`);
        const formGroupData = (this.subForm.get('entries')); // .get('entries')
        // const dataField = formGroupData.get('uuid') as FormControl;
        // console.log(`DF=${dataField.get('uuid')}`);
        const newUUID = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
};
ActionAncestorBaseComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective }
];
ActionAncestorBaseComponent.propDecorators = {
    ID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    parentEntity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    parentName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    entityName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    actionName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    listTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    inputName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    singleMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hideTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showAddCancelButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hideAddElementButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    validateAs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isArrayOptional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isArrayOptionalText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    closeTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    saveTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ActionAncestorBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'oscal-action-ancestor-base',
        template: _action_ancestor_base_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_ancestor_base_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective])
], ActionAncestorBaseComponent);



/***/ }),

/***/ 69102:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-ancestor-base/action-base-simple-array-form.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionAncestorSimpleArrayComponent": () => (/* binding */ ActionAncestorSimpleArrayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_ancestor_base_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-ancestor-base.component.html?ngResource */ 69829);
/* harmony import */ var _action_ancestor_base_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-ancestor-base.component.scss?ngResource */ 24739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-ancestor-base.component */ 76426);



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




let ActionAncestorSimpleArrayComponent = class ActionAncestorSimpleArrayComponent extends _action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_2__.ActionAncestorBaseComponent {
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
        this.localForm.patchValue({ uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])() });
    }
    getEmailValidator() {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email;
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
        this.subArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray(controls);
        return this.subArray;
    }
    getControlsArrayByFieldToMap(dataArray) {
        const controls = new Array();
        if (dataArray && dataArray.length > 0) {
            dataArray.forEach((dataEntry, idx) => {
                controls.push(this.getNewFormGroupByFieldToMap(dataEntry));
            });
        }
        this.subArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray(controls);
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
};
ActionAncestorSimpleArrayComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective }
];
ActionAncestorSimpleArrayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'oscal-action-ancestor-base',
        template: _action_ancestor_base_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_ancestor_base_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
    // The most abstract entity manipulation aggregation for entities with UI
    // Unfortunately, UI can not be inherited, so, implementation has to be done 
    // !!!!! at the inheritance point !!!!
    ,
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective])
], ActionAncestorSimpleArrayComponent);



/***/ }),

/***/ 68434:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-addresses/action-array-addresses.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayAddressesComponent": () => (/* binding */ ArrayAddressesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_addresses_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-addresses.component.html?ngResource */ 82941);
/* harmony import */ var _action_array_addresses_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-addresses.component.scss?ngResource */ 95506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);
/* harmony import */ var _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/logging/log-manager.service */ 13616);







let ArrayAddressesComponent = class ArrayAddressesComponent {
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(180)]),
            ],
            addressTo: [addrTo,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(180)]),
            ],
            streetAddress: [streetAddr,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(180)]),
            ],
            city: [addr.city,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(180)]),
            ],
            state: [addr.state,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(180)]),
            ],
            postalCode: [addr.postalCode,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(180)]),
            ],
            country: [addr.country,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(180)]),
            ],
            extraLines: this.formBuilder.array(this.getLinesArray(lines)),
        });
        return group;
    }
    getLinesArray(lines) {
        const controlArray = new Array();
        lines.forEach((theLine, index) => {
            // groupObject['email_' + index.toString()] = [element, Validators.email];
            controlArray.push(this.formBuilder.group({ extraLine: [theLine, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required] }));
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
        items.push(this.formBuilder.group({ extraLine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required] }));
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
        return _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__.OscalCatalogEmpties.getEmptyAddress();
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
};
ArrayAddressesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_3__.LogManagerService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective }
];
ArrayAddressesComponent.propDecorators = {
    localForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    partyName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    entryName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    hideTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    addressParentName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    addressList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    addressData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    isSingleMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    isArrayOptionalText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    isElementOptional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ArrayAddressesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'oscal-address-list',
        template: _action_array_addresses_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_addresses_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_3__.LogManagerService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective])
], ArrayAddressesComponent);



/***/ }),

/***/ 22543:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-document-id/action-array-document-id.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentIDArrayComponent": () => (/* binding */ DocumentIDArrayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_document_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-document-id.component.html?ngResource */ 32760);
/* harmony import */ var _action_array_document_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-document-id.component.scss?ngResource */ 17007);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);





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




let DocumentIDArrayComponent = class DocumentIDArrayComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__.ActionAncestorSimpleArrayComponent {
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
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            requiredField: true,
        });
    }
    formCommitArray() {
        // Returns the edited Array of Links Back
        // With the fieldToMap mapping -use this method of the parent object
        const edDocIds = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__.OscalCatalogEmpties.getEmptyDocID);
        return edDocIds;
    }
    ngOnInit() {
        super.ngOnInit();
        this.defaultPluralTitle = 'Document IDs';
        // for (const [key, value] of this.inputsMap) {
        //   console.log(`Key=${key}, Val=${value}`);
        // }
        this.subForm = this.formBuilder.group({
            entries: this.getControlsArray(),
        });
        this.localForm.addControl(this.ID, this.subForm);
    }
    getControlsArray() {
        return this.getControlsArrayByKey(this.idArray);
    }
    getNewFormGroup(data) {
        return this.getNewFormGroupByKey();
    }
    /**
     * Saves the form data in the object of Document ID Type and pushes it out
     * through the delegate to the parent page to assemble the big JSON data-pile
     *
     * @memberof DocumentIDArrayComponent
     */
    onSave() {
        const savedDocId = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__.OscalCatalogEmpties.getEmptyDocID();
        const updatedDocId = this.getUpdatedElementByKey(savedDocId);
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
};
DocumentIDArrayComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective }
];
DocumentIDArrayComponent.propDecorators = {
    idArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
DocumentIDArrayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'oscal-array-document-ids',
        template: _action_array_document_id_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_document_id_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective])
], DocumentIDArrayComponent);



/***/ }),

/***/ 85142:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-external-ids/action-array-external-ids.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayExternalIDsComponent": () => (/* binding */ ArrayExternalIDsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_external_ids_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-external-ids.component.html?ngResource */ 98744);
/* harmony import */ var _action_array_external_ids_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-external-ids.component.scss?ngResource */ 31394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);



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




let ArrayExternalIDsComponent = class ArrayExternalIDsComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_2__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        // ==> Invoke the parent class
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap.set('1-ID', {
            fieldToMap: 'id',
            labelName: 'ID',
            inputTip: ''.concat('Telephone number.'),
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            requiredField: true,
        });
        this.inputsMap.set('2-scheme', {
            fieldToMap: 'scheme',
            labelName: 'Schema',
            inputTip: 'Reflect the schema context of the ID.',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            requiredField: true,
        });
    }
    formCommitArray() {
        // Returns the edited Array of Links Back
        // With the fieldToMap mapping -use this method of the parent object
        const editedExternalIds = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_3__.OscalCatalogEmpties.getEmptyPartyExternalIdentifier);
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
        const savedDocId = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_3__.OscalCatalogEmpties.getEmptyPartyExternalIdentifier();
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
};
ArrayExternalIDsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective }
];
ArrayExternalIDsComponent.propDecorators = {
    externalIDsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ArrayExternalIDsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'oscal-external-ids',
        template: _action_array_external_ids_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_external_ids_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective])
], ArrayExternalIDsComponent);



/***/ }),

/***/ 44609:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-links/action-array-links.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayLinksComponent": () => (/* binding */ ArrayLinksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_links_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-links.component.html?ngResource */ 72881);
/* harmony import */ var _action_array_links_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-links.component.scss?ngResource */ 55171);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);





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




let ArrayLinksComponent = class ArrayLinksComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap.set('1-href', {
            fieldToMap: 'href',
            labelName: 'Link Href',
            inputTip: 'A resolvable URL reference to a resource',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
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
        const editedLinks = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__.OscalCatalogEmpties.getEmptyLink);
        return editedLinks;
    }
    ngOnInit() {
        super.ngOnInit();
        for (const [key, value] of this.inputsMap) {
            console.log(`LINK: Key=${key}, Val=${value}`);
        }
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
        const emptyLink = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__.OscalCatalogEmpties.getEmptyLink();
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
};
ArrayLinksComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective }
];
ArrayLinksComponent.propDecorators = {
    linksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ArrayLinksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'oscal-array-links',
        template: _action_array_links_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_links_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective])
], ArrayLinksComponent);



/***/ }),

/***/ 21839:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-locations/action-array-locations.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationsArrayComponent": () => (/* binding */ LocationsArrayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_locations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-locations.component.html?ngResource */ 99664);
/* harmony import */ var _action_array_locations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-locations.component.scss?ngResource */ 49811);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);





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



let LocationsArrayComponent = class LocationsArrayComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__.ActionAncestorSimpleArrayComponent {
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
};
LocationsArrayComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective }
];
LocationsArrayComponent.propDecorators = {
    locationsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
LocationsArrayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-action-array-locations',
        template: _action_array_locations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_locations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective])
], LocationsArrayComponent);



/***/ }),

/***/ 30580:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-phones/action-array-phones.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayPhonesComponent": () => (/* binding */ ArrayPhonesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_phones_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-phones.component.html?ngResource */ 16574);
/* harmony import */ var _action_array_phones_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-phones.component.scss?ngResource */ 86380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);



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




let ArrayPhonesComponent = class ArrayPhonesComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_2__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        // ==> Invoke the parent class
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.inputsMap.set('1-phone-number', {
            fieldToMap: 'number',
            labelName: 'Phone Number',
            inputTip: `${this.phoneName + ' ' || 0}`.concat('Telephone number.'),
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
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
        const editedLinks = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_3__.OscalCatalogEmpties.getEmptyPhoneNumber);
        return editedLinks;
    }
    /**
     * Saves the form data in the object of Document ID Type and pushes it out
     * through the delegate to the parent page to assemble the big JSON data-pile
     *
     * @memberof DocumentIDArrayComponent
     */
    onSave() {
        const savedPhone = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_3__.OscalCatalogEmpties.getEmptyPhoneNumber();
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
};
ArrayPhonesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective }
];
ArrayPhonesComponent.propDecorators = {
    phonesArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    phoneName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ArrayPhonesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'oscal-array-phones',
        template: _action_array_phones_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_phones_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective])
], ArrayPhonesComponent);



/***/ }),

/***/ 67578:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-properties/action-array-properties.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesArrayComponent": () => (/* binding */ PropertiesArrayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-properties.component.html?ngResource */ 30163);
/* harmony import */ var _action_array_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-properties.component.scss?ngResource */ 18830);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);





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




let PropertiesArrayComponent = class PropertiesArrayComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_5__.ActionAncestorSimpleArrayComponent {
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
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            requiredField: true,
        });
        this.inputsMap.set('2-value', {
            fieldToMap: 'value',
            labelName: 'Value',
            inputTip: 'Indicates the value of the attribute, characteristic, or quality.',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
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
        const editedProps = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_4__.OscalCatalogEmpties.getEmptyProperty);
        return editedProps;
    }
    ngOnInit() {
        super.ngOnInit();
        for (const [key, value] of this.inputsMap) {
            console.log(`Key=${key}, Val=${value}`);
        }
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
        const emptyProperty = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_4__.OscalCatalogEmpties.getEmptyProperty();
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
};
PropertiesArrayComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective }
];
PropertiesArrayComponent.propDecorators = {
    propertiesArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    inputDataArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
PropertiesArrayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'oscal-array-properties',
        template: _action_array_properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective])
], PropertiesArrayComponent);



/***/ }),

/***/ 68417:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-roles/action-array-roles.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionArrayRolesComponent": () => (/* binding */ ActionArrayRolesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_roles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-roles.component.html?ngResource */ 27605);
/* harmony import */ var _action_array_roles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-roles.component.scss?ngResource */ 15239);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);





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




let ActionArrayRolesComponent = class ActionArrayRolesComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__.ActionAncestorSimpleArrayComponent {
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
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            requiredField: true,
            isPreset: this.isPresetRole,
        });
        this.inputsMap.set('2-Role-Id', {
            fieldToMap: 'id',
            labelName: 'Role ID',
            inputTip: 'A unique identifier for a specific role instance. This identity\'s uniqueness is'.concat(' document-scoped and is intended to be consistent for the same role across minor revisions', ' of the document.'),
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
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
        const emptyRole = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__.OscalCatalogEmpties.getEmptyRole();
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
        const editedLinks = this.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__.OscalCatalogEmpties.getEmptyRole);
        return editedLinks;
    }
};
ActionArrayRolesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective }
];
ActionArrayRolesComponent.propDecorators = {
    rolesArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isPresetRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ActionArrayRolesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'oscal-array-roles',
        template: _action_array_roles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_roles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective])
], ActionArrayRolesComponent);



/***/ }),

/***/ 83789:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-strings/action-array-strings.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayStringsComponent": () => (/* binding */ ArrayStringsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_array_strings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-array-strings.component.html?ngResource */ 83837);
/* harmony import */ var _action_array_strings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-array-strings.component.scss?ngResource */ 82136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);



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


let ArrayStringsComponent = class ArrayStringsComponent {
    constructor(formBuilder, parentFormDirect) {
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        // Event emitters for call-backs, if needed
        this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.saveTab = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
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
            return this.formBuilder.group({ entry: [element, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] });
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
};
ArrayStringsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective }
];
ArrayStringsComponent.propDecorators = {
    ID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    listTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    parentEntity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    parentName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    inputName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    validateAs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isArrayOptionalText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isArrayOptional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    stringData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    closeTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    saveTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ArrayStringsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'oscal-array-string',
        template: _action_array_strings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_array_strings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective])
], ArrayStringsComponent);



/***/ }),

/***/ 80094:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-cat-controls/action-cat-controls.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatControlsComponent": () => (/* binding */ CatControlsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_cat_controls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-cat-controls.component.html?ngResource */ 89645);
/* harmony import */ var _action_cat_controls_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-cat-controls.component.css?ngResource */ 38762);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 44609);
/* harmony import */ var src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/oscal-types/oscal-catalog-factory */ 51145);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 67578);
/* harmony import */ var _action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../action-cat-params/action-cat-params.component */ 73958);





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







let CatControlsComponent = class CatControlsComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_6__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.defaultPluralTitle = 'Controls';
        this.listTitle = 'Control';
        this.defaultSingleTitle = 'Control';
    }
    buildInputsMap() {
        this.inputsMap.set('1-Id', {
            fieldToMap: 'id',
            labelName: 'Control ID',
            inputTip: ''.concat('A unique identifier for a specific control instance that can be used to reference the', ' control in other OSCAL documents.This identifier\'s uniqueness is document scoped and is', ' intended to be consistent for the same control across minor revisions of the document.'),
            requiredField: true,
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        });
        this.inputsMap.set('2-Title', {
            fieldToMap: 'title',
            labelName: 'Control Title',
            inputTip: 'Control Title [REQUIRED]',
            requiredField: true,
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
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
            this.controls = [src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__.OscalCatalogEmpties.getEmptyControl()];
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
        const editedControls = this.getResultArrayByFieldToMap(src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_5__.OscalCatalogEmpties.getEmptyControl);
        return editedControls;
    }
};
CatControlsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective }
];
CatControlsComponent.propDecorators = {
    controls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    linksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['linksArray',] }],
    propsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['propsArray',] }],
    paramsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['paramsArray',] }]
};
CatControlsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'oscal-cat-controls',
        template: _action_cat_controls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_cat_controls_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective])
], CatControlsComponent);



/***/ }),

/***/ 73958:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-cat-params/action-cat-params.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatParamsComponent": () => (/* binding */ CatParamsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_cat_params_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-cat-params.component.html?ngResource */ 92787);
/* harmony import */ var _action_cat_params_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-cat-params.component.css?ngResource */ 95860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/oscal-types/oscal-catalog-factory */ 51145);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 44609);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 67578);
/* harmony import */ var _action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-array-strings/action-array-strings.component */ 83789);



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







let CatParamsComponent = class CatParamsComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_3__.ActionAncestorSimpleArrayComponent {
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
    ngOnInit() {
    }
    buildInputsMap() {
        this.inputsMap.set('1-Title', {
            fieldToMap: 'title',
            labelName: 'Control Title',
            inputTip: 'Control Title [REQUIRED]',
            requiredField: true,
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
        this.inputsMap.set('2-Id', {
            fieldToMap: 'id',
            labelName: 'Control ID',
            inputTip: 'Control ID [REQUIRED]',
            requiredField: true,
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
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
        const editedParams = this.getResultArrayByFieldToMap(src_app_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_2__.OscalCatalogEmpties.getEmptyParameter);
        return editedParams;
    }
};
CatParamsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective }
];
CatParamsComponent.propDecorators = {
    params: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    valuesArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['valuesArray',] }],
    linksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['linksArray',] }],
    propsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['propsArray',] }]
};
CatParamsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'oscal-cat-params',
        template: _action_cat_params_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_cat_params_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective])
], CatParamsComponent);



/***/ }),

/***/ 67575:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-location-info/action-location-info.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationInfoComponent": () => (/* binding */ LocationInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_location_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-location-info.component.html?ngResource */ 21153);
/* harmony import */ var _action_location_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-location-info.component.scss?ngResource */ 81001);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);
/* harmony import */ var _action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-array-phones/action-array-phones.component */ 30580);
/* harmony import */ var _action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-array-strings/action-array-strings.component */ 83789);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 67578);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 44609);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);





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






let LocationInfoComponent = class LocationInfoComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_4__.ActionAncestorSimpleArrayComponent {
    constructor(formBuilder, parentFormDirect) {
        super(formBuilder, parentFormDirect);
        this.formBuilder = formBuilder;
        this.parentFormDirect = parentFormDirect;
        this.defaultPluralTitle = 'Locations';
        this.listTitle = 'Location';
        this.defaultSingleTitle = 'Location';
    }
    buildInputsMap() {
        this.inputsMap.set('1-UUID', {
            fieldToMap: 'uuid',
            labelName: 'Location UUID',
            inputTip: 'UUID is an unique identifier that can be used to reference this defined' +
                ' location elsewhere in an OSCAL document. A UUID should be consistently used for' +
                ' a given location across revisions of the document. [!- REQUIRED -!]',
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
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
            validateAs: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
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
            this.locationInfo = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_9__.OscalCatalogEmpties.getEmptyLocation();
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
        const emptyLocation = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_9__.OscalCatalogEmpties.getEmptyLocation();
        const savedLocation = this.getUpdatedElementByFieldToMap(emptyLocation);
        console.log(` #2 UUID=${savedLocation.uuid}`);
        savedLocation.emailAddresses = this.emailsArray.getStringArrayData();
        console.log(` #3`);
        savedLocation.links = this.linksArray.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_9__.OscalCatalogEmpties.getEmptyLink);
        console.log(` #4`);
        savedLocation.props = this.propsArray.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_9__.OscalCatalogEmpties.getEmptyProperty);
        console.log(` #5`);
        // console.log(`Rem:${this.localResponsible.remarks}; Model:${this.localResponsible.remarks}`);
        this.saveTab.emit(savedLocation);
        this.closeTab.emit();
    }
    onCancel() {
        this.closeTab.emit();
    }
};
LocationInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective }
];
LocationInfoComponent.propDecorators = {
    locationInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    closeTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }],
    saveTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }],
    phonesArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['phonesArray',] }],
    emailsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['emailsArray',] }],
    linksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['linksArray',] }],
    propsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['propsArray',] }],
    urlsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['urlsArray',] }]
};
LocationInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'oscal-location-info',
        template: _action_location_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_location_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective])
], LocationInfoComponent);



/***/ }),

/***/ 81937:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-map-roles/action-map-roles.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionMapRolesComponent": () => (/* binding */ ActionMapRolesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_map_roles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-map-roles.component.html?ngResource */ 16424);
/* harmony import */ var _action_map_roles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-map-roles.component.scss?ngResource */ 18426);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 44609);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 67578);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);
/* harmony import */ var _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action-ancestor-base/action-base-simple-array-form.component */ 69102);





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






var FormStates;
(function (FormStates) {
    FormStates[FormStates["StepOne"] = 1] = "StepOne";
    FormStates[FormStates["StepOptional"] = 10] = "StepOptional";
})(FormStates || (FormStates = {}));
let ActionMapRolesComponent = class ActionMapRolesComponent extends _action_ancestor_base_action_base_simple_array_form_component__WEBPACK_IMPORTED_MODULE_7__.ActionAncestorSimpleArrayComponent {
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
            this.localResponsible = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__.OscalCatalogEmpties.getEmptyResponsibleParty();
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
            links: this.linksArray.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__.OscalCatalogEmpties.getEmptyLink),
            props: this.propsArray.getResultArrayByFieldToMap(_interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__.OscalCatalogEmpties.getEmptyProperty),
        };
        // console.log(`Rem:${this.localResponsible.remarks}; Model:${this.localResponsible.remarks}`);
        this.saveTab.emit(data);
    }
};
ActionMapRolesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective }
];
ActionMapRolesComponent.propDecorators = {
    responsibleParty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    roles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    actors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    linksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['linksArray',] }],
    propsArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['propsArray',] }]
};
ActionMapRolesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'oscal-map-roles',
        template: _action_map_roles_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_map_roles_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective])
], ActionMapRolesComponent);



/***/ }),

/***/ 70184:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-party-info/action-party-info.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityTypeIcons": () => (/* binding */ EntityTypeIcons),
/* harmony export */   "ActionPartyInfoComponent": () => (/* binding */ ActionPartyInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_party_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-party-info.component.html?ngResource */ 29585);
/* harmony import */ var _action_party_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-party-info.component.scss?ngResource */ 34971);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action-all-common/div-scroll.scss?ngResource */ 12900);
/* harmony import */ var _action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../action-array-phones/action-array-phones.component */ 30580);
/* harmony import */ var _action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-array-addresses/action-array-addresses.component */ 68434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../providers/logging/log-manager.service */ 13616);
/* harmony import */ var _action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action-array-strings/action-array-strings.component */ 83789);
/* harmony import */ var _action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../action-array-links/action-array-links.component */ 44609);
/* harmony import */ var _action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../action-array-external-ids/action-array-external-ids.component */ 85142);
/* harmony import */ var _action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../action-array-properties/action-array-properties.component */ 67578);





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











var EntityTypeIcons;
(function (EntityTypeIcons) {
    EntityTypeIcons["Person"] = "body-outline";
    EntityTypeIcons["Party"] = "beer-outline";
    EntityTypeIcons["Organization"] = "business-outline";
})(EntityTypeIcons || (EntityTypeIcons = {}));
let ActionPartyInfoComponent = class ActionPartyInfoComponent {
    // @ViewChild('addEditAddress', { static: true, read: ViewContainerRef }) public AddressVCR: ViewContainerRef;
    // loadedAddressComponents = [];
    constructor(formBuilder, modalController, parentFormDirect, LMS) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.parentFormDirect = parentFormDirect;
        this.LMS = LMS;
        this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.saveTab = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
            ],
            shortName: [this.partyInfo.shortName,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(100)]),
            ],
            uuid: [this.partyInfo.uuid,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
            ],
            remarks: [this.partyInfo.remarks,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(1024)]),
            ],
            type: [this.partyInfo.type,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
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
        return _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email;
    }
    getEmailsArray(emails) {
        const controlArray = new Array();
        emails.forEach((element, index) => {
            // groupObject['email_' + index.toString()] = [element, Validators.email];
            controlArray.push(this.formBuilder.group({ email: [element, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email] }));
        });
        console.log(`Emails Group Object`);
        // this.LMS.logData(controlArray);
        return controlArray;
    }
    onAddEmail(element = '') {
        const theValue = element || '';
        this.partyInfo.emailAddresses.push(theValue);
        const items = this.localForm.get('emailAddresses');
        items.push(this.formBuilder.group({ email: [theValue, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email] }));
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
        this.localForm.patchValue({ uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_13__["default"])() });
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
};
ActionPartyInfoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective },
    { type: _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_6__.LogManagerService }
];
ActionPartyInfoComponent.propDecorators = {
    parentForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    controlID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    theParent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    isModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    hideTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    createNew: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    addressName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    entryName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    partyInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    iconName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    actionName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    closeTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }],
    saveTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }],
    phonesListUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['phonesList',] }],
    emailsListUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['emailsList',] }],
    addressListUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['addressList',] }],
    organizationsListUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['organizationsList',] }],
    linksListUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['linksList',] }],
    uuidsListUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['uuidsList',] }],
    externalListUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['extIdsList',] }],
    propsListUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['propsList',] }]
};
ActionPartyInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'oscal-act-party-info',
        template: _action_party_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_party_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_div_scroll_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective,
        _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_6__.LogManagerService])
], ActionPartyInfoComponent);



/***/ }),

/***/ 47794:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-select-baseline/action-select-baseline.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectBaselineComponent": () => (/* binding */ SelectBaselineComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_select_baseline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-select-baseline.component.html?ngResource */ 73139);
/* harmony import */ var _action_select_baseline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-select-baseline.component.scss?ngResource */ 66671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



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

var StateMark;
(function (StateMark) {
    StateMark[StateMark["noState"] = 0] = "noState";
    StateMark[StateMark["markAll"] = 1] = "markAll";
    StateMark[StateMark["preCheck"] = 2] = "preCheck";
    StateMark[StateMark["cutOut"] = 3] = "cutOut";
    StateMark[StateMark["rollBack"] = 4] = "rollBack";
})(StateMark || (StateMark = {}));
let SelectBaselineComponent = class SelectBaselineComponent {
    constructor() {
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
            'Roll Back Changes'];
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
};
SelectBaselineComponent.ctorParameters = () => [];
SelectBaselineComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'oscal-select-baseline',
        template: _action_select_baseline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_select_baseline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])
], SelectBaselineComponent);



/***/ }),

/***/ 68142:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-wait/action-wait.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionWaitComponent": () => (/* binding */ ActionWaitComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_wait_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-wait.component.html?ngResource */ 37809);
/* harmony import */ var _action_wait_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-wait.component.scss?ngResource */ 68730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



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

let ActionWaitComponent = class ActionWaitComponent {
    constructor() { }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.title = this.title || 'Loading Information ...';
            this.color = this.color || 'tertiary';
        });
    }
};
ActionWaitComponent.ctorParameters = () => [];
ActionWaitComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    timeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ActionWaitComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-action-wait',
        template: _action_wait_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_action_wait_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])
], ActionWaitComponent);



/***/ }),

/***/ 69391:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/all-components/author-begin/author-begin.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorBeginComponent": () => (/* binding */ AuthorBeginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _author_begin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author-begin.component.html?ngResource */ 73079);
/* harmony import */ var _author_begin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author-begin.component.scss?ngResource */ 75679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/oscal-files/known-files.service */ 18958);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../providers/app-state/state-nav-cat/state-session-data.service */ 35667);



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





let AuthorBeginComponent = class AuthorBeginComponent {
    //alertControl: AlertController;
    constructor(session, alertControl) {
        this.session = session;
        this.alertControl = alertControl;
        this.oscalFiles = _providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_2__.KnownOscalFilesService.getAllKnownFiles();
    }
    ngOnInit() {
        this.readSavedWork();
    }
    //
    readSavedWork() {
        if (this.session.isKeyValue(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_3__.NamedSessionNodes.SAVED_SESSIONS)) {
            this.session.getKeyValueObject(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_3__.NamedSessionNodes.SAVED_SESSIONS)
                .then((value) => {
                if (value && Array.isArray(value) && value.length > 0) {
                    this.savedWork = value;
                }
                else {
                    this.savedWork = Array();
                }
                /*        // Helps to save time when debugging session initialization
                          else {
                            this.savedWork = undefined;
                            // [];
                            const emptyWork: Array<SessionData> =
                              [
                                {
                                  name: 'Work item 1',
                                  uuid: UUIDv4(),
                                },
                                {
                                  name: 'Work Item 1001',
                                  uuid: UUIDv4(),
                                }];
                            this.session.setKeyValueObject<Array<SessionData>>(
                              NamedSessionNodes.SAVED_SESSIONS, emptyWork);
                          }
                */
            });
        }
    }
    handleRadioChange($event) {
        console.log($event);
        const value = $event.detail.value;
        console.log(value);
        const cats = ['', ''];
        if (value > 1) {
            this.chosenOscalCat = undefined;
            this.chosenSession = this.savedWork[value - 2];
        }
        else {
            this.chosenOscalCat = this.oscalFiles[value];
            this.chosenSession = undefined;
        }
        // this.activateSession(false);
        // this.readSavedWork();
    }
    popAlert(data, idx) {
        // console.log(data);
        // console.log(idx);
        // data = data + idx;
        // alert(`Alert:\n\t${data}\n\tItem Number ${idx}`);
    }
    hasSavedWork() {
        return (!!this.savedWork);
    }
    editWorkItemName($event, theItemIndex) {
    }
    parentIonViewWillLeave() {
        // Does not work to hook up the 
        console.log('!!!!!!======!!!!!! Begin-Page Will Leave!!!!!!');
        if (this.chosenOscalCat) {
            console.log(`Leaving with new Cat (new Session)`);
        }
        else if (this.chosenSession) {
            console.log(`Leaving with Existing Session`);
        }
        this.activateSession();
    }
    activateSession(addSessionToList = true) {
        console.log(this.chosenOscalCat);
        if (this.chosenOscalCat) {
            // Need to create a new persisted session
            console.log(`Cat-Activate - Chosen-Cat`);
            const newSession = {
                name: `Profile Draft Based on ${this.chosenOscalCat.cat_suffix}`,
                uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
            };
            console.log(newSession);
            if (addSessionToList) {
                if (!this.savedWork) {
                    console.log(`Creating savedWork Array`);
                    this.savedWork = new Array();
                }
                this.savedWork.push(newSession);
                console.log(`savedWork Array has Length:${this.savedWork.length}`);
                console.log(`Saved work Array ${this.savedWork}`);
                console.log(this.savedWork);
                // TODO: Fix the below with better wrapper
                this.session.setKeyValueObject(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_3__.NamedSessionNodes.SAVED_SESSIONS, this.savedWork);
            }
            this.session.ActiveSession = newSession;
        }
        else if (!this.chosenOscalCat && this.chosenSession) {
            // Session was already persisted
            this.session.ActiveSession = this.chosenSession;
        }
    }
    ngOnDestroy() {
        console.log('Begin-Page Will Destroy!!!!!!');
        this.activateSession();
    }
    removeWorkItem($event, theItemIndex) {
        // TODO: before killing existing work, it would be nice 
        // to verify that button press is not a mistake.
        if (!!this.savedWork) {
            console.log(`Item Index ${theItemIndex} Event Target:${$event.target}`);
            this.savedWork.splice(theItemIndex, 1);
            if (this.savedWork.length > 0) {
                this.session.setKeyValueObject(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_3__.NamedSessionNodes.SAVED_SESSIONS, this.savedWork);
            }
            else {
                this.session.setKeyValueObject(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_3__.NamedSessionNodes.SAVED_SESSIONS, null);
                this.savedWork = null;
            }
        }
    }
    /**
    * Function generates the Alert pop-up
    */
    presentDeleteWarning($event, itemIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const item = this.savedWork[itemIndex];
            const name = (item.fullName) ? item.fullName : item.name;
            const uuid = item.uuid;
            console.log(name);
            const summaryHtml = `<div>Are you sure you want to delete</div><br />`
                + `<div> <strong>Saved Work:</strong></div>`
                + `<div><strong>"${name}"<strong></div><br />`
                + `<div>With UUID:<div>`
                + ` <div><strong>[${uuid}]?</div></strong></div><br />`;
            const alert = yield this.alertControl.create({
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
    /// Rename work item Alert pop-up
    presentEditName($event, itemIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const prompt = yield this.alertControl.create({
                header: 'Rename Saved Work',
                message: "Enter new name for the saved item",
                inputs: [
                    {
                        name: 'title',
                        placeholder: 'Title'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: data => {
                            console.log('Saved clicked');
                        }
                    }
                ]
            });
            prompt.present();
        });
    }
};
AuthorBeginComponent.ctorParameters = () => [
    { type: _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_3__.CurrentSessionData },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
AuthorBeginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'oscal-author-begin',
        template: _author_begin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_author_begin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_3__.CurrentSessionData,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController])
], AuthorBeginComponent);



/***/ }),

/***/ 74216:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/all-components/authoring-mode/authoring-mode.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthoringModeComponent": () => (/* binding */ AuthoringModeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _authoring_mode_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authoring-mode.component.html?ngResource */ 98522);
/* harmony import */ var _authoring_mode_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authoring-mode.component.scss?ngResource */ 79250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/logging/log-manager.service */ 13616);
/* harmony import */ var _interfaces_app_state_app_state_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../interfaces/app-state/app-state-types */ 75160);
/* harmony import */ var _providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../providers/oscal-files/known-files.service */ 18958);



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


//import { File } from '@ionic-native/file/ngx';
//import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
//import { AppFilesService } from './../../../providers/app-state/app-files/app-files.service';
//import { CatalogSamples } from '../../info-providers/app-state/state-oscal-document/oscal-catalog-sample';import { Component, OnInit } from '@angular/core';



var FormState;
(function (FormState) {
})(FormState || (FormState = {}));
let AuthoringModeComponent = class AuthoringModeComponent {
    constructor(fileOperations, platform, logger) {
        this.fileOperations = fileOperations;
        this.platform = platform;
        this.logger = logger;
        this.showLoader = false;
        this.modeFormDone = false;
        this.modeValues = Object.values(_interfaces_app_state_app_state_types__WEBPACK_IMPORTED_MODULE_3__.AuthoringMode).map((x) => { if ('number' === typeof (x)) {
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
        for (const e in _interfaces_app_state_app_state_types__WEBPACK_IMPORTED_MODULE_3__.AuthoringMode) {
            if (true) {
                console.log(` Logging in Constructor ${e}`);
            }
        }
        const cats = _providers_oscal_files_known_files_service__WEBPACK_IMPORTED_MODULE_4__.KnownOscalFilesService.getKnownCatSampleFiles();
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
};
AuthoringModeComponent.ctorParameters = () => [
    { type: File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_2__.LogManagerService }
];
AuthoringModeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'oscal-authoring-mode',
        template: _authoring_mode_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [File, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform],
        styles: [_authoring_mode_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [File, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform, _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_2__.LogManagerService])
], AuthoringModeComponent);



/***/ }),

/***/ 88698:
/*!***************************************************************************!*\
  !*** ./src/app/pages/all-components/back-matter/back-matter.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackMatterComponent": () => (/* binding */ BackMatterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _back_matter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back-matter.component.html?ngResource */ 3988);
/* harmony import */ var _back_matter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./back-matter.component.scss?ngResource */ 60947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



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

let BackMatterComponent = class BackMatterComponent {
    constructor() { }
    ngOnInit() { }
};
BackMatterComponent.ctorParameters = () => [];
BackMatterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'oscal-back-matter',
        template: _back_matter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_back_matter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])
], BackMatterComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-commons/action-array-roles/action-array-roles.component */ 68417);
/* harmony import */ var _action_commons_action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-commons/action-array-addresses/action-array-addresses.component */ 68434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _select_families_select_families_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-families/select-families.component */ 5535);
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control/control.component */ 93789);
/* harmony import */ var _back_matter_back_matter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back-matter/back-matter.component */ 88698);
/* harmony import */ var _meta_info_meta_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meta-info/meta-info.component */ 47225);
/* harmony import */ var _authoring_mode_authoring_mode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authoring-mode/authoring-mode.component */ 74216);
/* harmony import */ var _nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-cat/nav-cat.component */ 53753);
/* harmony import */ var _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-commons/action-party-info/action-party-info.component */ 70184);
/* harmony import */ var _action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action-commons/action-wait/action-wait.component */ 68142);
/* harmony import */ var _action_commons_action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./action-commons/action-array-strings/action-array-strings.component */ 83789);
/* harmony import */ var _action_commons_action_ancestor_base_action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./action-commons/action-ancestor-base/action-ancestor-base.component */ 76426);
/* harmony import */ var _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./action-commons/action-array-links/action-array-links.component */ 44609);
/* harmony import */ var _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./action-commons/action-location-info/action-location-info.component */ 67575);
/* harmony import */ var _action_commons_action_array_locations_action_array_locations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./action-commons/action-array-locations/action-array-locations.component */ 21839);
/* harmony import */ var _action_commons_action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./action-commons/action-array-properties/action-array-properties.component */ 67578);
/* harmony import */ var _action_commons_action_array_document_id_action_array_document_id_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./action-commons/action-array-document-id/action-array-document-id.component */ 22543);
/* harmony import */ var _action_commons_action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./action-commons/action-array-phones/action-array-phones.component */ 30580);
/* harmony import */ var _action_commons_action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./action-commons/action-array-external-ids/action-array-external-ids.component */ 85142);
/* harmony import */ var _action_commons_action_map_roles_action_map_roles_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./action-commons/action-map-roles/action-map-roles.component */ 81937);
/* harmony import */ var _author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./author-begin/author-begin.component */ 69391);
/* harmony import */ var _action_commons_action_select_baseline_action_select_baseline_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./action-commons/action-select-baseline/action-select-baseline.component */ 47794);
/* harmony import */ var _action_commons_action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./action-commons/action-cat-params/action-cat-params.component */ 73958);
/* harmony import */ var _action_commons_action_cat_controls_action_cat_controls_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./action-commons/action-cat-controls/action-cat-controls.component */ 80094);

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
















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.NgModule)({
        declarations: [_select_families_select_families_component__WEBPACK_IMPORTED_MODULE_2__.SelectFamiliesComponent, _nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_7__.NavCatComponent, _action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_9__.ActionWaitComponent, _action_commons_action_ancestor_base_action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_11__.ActionAncestorBaseComponent,
            _action_commons_action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_1__.ArrayAddressesComponent, _action_commons_action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_10__.ArrayStringsComponent, _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_12__.ArrayLinksComponent, _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_13__.LocationInfoComponent, _action_commons_action_array_locations_action_array_locations_component__WEBPACK_IMPORTED_MODULE_14__.LocationsArrayComponent,
            _back_matter_back_matter_component__WEBPACK_IMPORTED_MODULE_4__.BackMatterComponent, _control_control_component__WEBPACK_IMPORTED_MODULE_3__.ControlComponent, _meta_info_meta_info_component__WEBPACK_IMPORTED_MODULE_5__.MetaInfoComponent, _authoring_mode_authoring_mode_component__WEBPACK_IMPORTED_MODULE_6__.AuthoringModeComponent, _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_8__.ActionPartyInfoComponent,
            _action_commons_action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_15__.PropertiesArrayComponent, _action_commons_action_array_document_id_action_array_document_id_component__WEBPACK_IMPORTED_MODULE_16__.DocumentIDArrayComponent, _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_0__.ActionArrayRolesComponent, _action_commons_action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_17__.ArrayPhonesComponent,
            _action_commons_action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_18__.ArrayExternalIDsComponent, _action_commons_action_map_roles_action_map_roles_component__WEBPACK_IMPORTED_MODULE_19__.ActionMapRolesComponent, _author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_20__.AuthorBeginComponent, _action_commons_action_select_baseline_action_select_baseline_component__WEBPACK_IMPORTED_MODULE_21__.SelectBaselineComponent,
            _action_commons_action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_22__.CatParamsComponent, _action_commons_action_cat_controls_action_cat_controls_component__WEBPACK_IMPORTED_MODULE_23__.CatControlsComponent,
        ],
        exports: [_select_families_select_families_component__WEBPACK_IMPORTED_MODULE_2__.SelectFamiliesComponent, _nav_cat_nav_cat_component__WEBPACK_IMPORTED_MODULE_7__.NavCatComponent, _action_commons_action_wait_action_wait_component__WEBPACK_IMPORTED_MODULE_9__.ActionWaitComponent, _action_commons_action_ancestor_base_action_ancestor_base_component__WEBPACK_IMPORTED_MODULE_11__.ActionAncestorBaseComponent,
            _action_commons_action_array_addresses_action_array_addresses_component__WEBPACK_IMPORTED_MODULE_1__.ArrayAddressesComponent, _action_commons_action_array_strings_action_array_strings_component__WEBPACK_IMPORTED_MODULE_10__.ArrayStringsComponent, _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_12__.ArrayLinksComponent, _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_13__.LocationInfoComponent, _action_commons_action_array_locations_action_array_locations_component__WEBPACK_IMPORTED_MODULE_14__.LocationsArrayComponent,
            _back_matter_back_matter_component__WEBPACK_IMPORTED_MODULE_4__.BackMatterComponent, _control_control_component__WEBPACK_IMPORTED_MODULE_3__.ControlComponent, _meta_info_meta_info_component__WEBPACK_IMPORTED_MODULE_5__.MetaInfoComponent, _authoring_mode_authoring_mode_component__WEBPACK_IMPORTED_MODULE_6__.AuthoringModeComponent, _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_8__.ActionPartyInfoComponent,
            _action_commons_action_array_properties_action_array_properties_component__WEBPACK_IMPORTED_MODULE_15__.PropertiesArrayComponent, _action_commons_action_array_document_id_action_array_document_id_component__WEBPACK_IMPORTED_MODULE_16__.DocumentIDArrayComponent, _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_0__.ActionArrayRolesComponent, _action_commons_action_array_phones_action_array_phones_component__WEBPACK_IMPORTED_MODULE_17__.ArrayPhonesComponent,
            _action_commons_action_array_external_ids_action_array_external_ids_component__WEBPACK_IMPORTED_MODULE_18__.ArrayExternalIDsComponent, _action_commons_action_map_roles_action_map_roles_component__WEBPACK_IMPORTED_MODULE_19__.ActionMapRolesComponent, _author_begin_author_begin_component__WEBPACK_IMPORTED_MODULE_20__.AuthorBeginComponent, _action_commons_action_select_baseline_action_select_baseline_component__WEBPACK_IMPORTED_MODULE_21__.SelectBaselineComponent,
            _action_commons_action_cat_params_action_cat_params_component__WEBPACK_IMPORTED_MODULE_22__.CatParamsComponent, _action_commons_action_cat_controls_action_cat_controls_component__WEBPACK_IMPORTED_MODULE_23__.CatControlsComponent,
        ],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
        ],
    })
], ComponentsModule);



/***/ }),

/***/ 93789:
/*!*******************************************************************!*\
  !*** ./src/app/pages/all-components/control/control.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlComponent": () => (/* binding */ ControlComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _control_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.component.html?ngResource */ 57679);
/* harmony import */ var _control_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control.component.scss?ngResource */ 56687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



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

let ControlComponent = class ControlComponent {
    constructor() { }
    ngOnInit() { }
    submitForm() { }
};
ControlComponent.ctorParameters = () => [];
ControlComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'oscal-control',
        template: _control_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_control_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])
], ControlComponent);



/***/ }),

/***/ 47225:
/*!***********************************************************************!*\
  !*** ./src/app/pages/all-components/meta-info/meta-info.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditingState": () => (/* binding */ EditingState),
/* harmony export */   "MetaInfoComponent": () => (/* binding */ MetaInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _meta_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta-info.component.html?ngResource */ 378);
/* harmony import */ var _meta_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta-info.component.scss?ngResource */ 82235);
/* harmony import */ var _action_all_common_act_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-all-common/act-styles.scss?ngResource */ 1797);
/* harmony import */ var _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-all-common/ion-tabs-buttons.scss?ngResource */ 29546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-commons/action-party-info/action-party-info.component */ 70184);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../providers/logging/log-manager.service */ 13616);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../interfaces/oscal-types/oscal-catalog-factory */ 51145);
/* harmony import */ var _action_commons_action_array_links_action_array_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action-commons/action-array-links/action-array-links.component */ 44609);
/* harmony import */ var _action_commons_action_array_locations_action_array_locations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../action-commons/action-array-locations/action-array-locations.component */ 21839);
/* harmony import */ var _action_commons_action_location_info_action_location_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../action-commons/action-location-info/action-location-info.component */ 67575);
/* harmony import */ var _action_commons_action_array_roles_action_array_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../action-commons/action-array-roles/action-array-roles.component */ 68417);
/* harmony import */ var _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../interfaces/oscal-types/oscal-catalog.types */ 8358);
/* harmony import */ var _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../providers/app-state/state-nav-cat/state-session-data.service */ 35667);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 86527);
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
let MetaInfoComponent = class MetaInfoComponent {
    constructor(session, modalController, LMS) {
        // this.db = new AppDbInProgressService(new Platform(), new SQLite(), new HttpClient(new HttpHandler()), new SQLitePorter());
        this.session = session;
        this.modalController = modalController;
        this.LMS = LMS;
        this.loadedComponents = [];
        this.loadedComponents2 = [];
        this.autoUpdateDates = false;
        this.activeEntityAddTabName = '';
        this.activeEditState = EditingState.Off;
        this.partyNames = ['Organization', 'Person', 'Party'];
        // console.log(`x-x-x: EL = ${db.entitiesList}`);
        console.log(`Before Async`);
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
    }
    updateMetaFromSession() {
        if (this.activeSession && !this.activeSession.meta) {
            if (this.activeSession.knownCat && this.activeSession.knownCat.cat_suffix) {
                this.metaInfo.title = `Profile Based on ${this.activeSession.knownCat.cat_suffix}`;
            }
            else if (this.activeSession && this.activeSession.name) {
                this.metaInfo.title = this.activeSession.name;
            }
        }
    }
    initMetaInfo() {
        if (this.session.isKeyValue(_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_12__.NamedSessionNodes.ACTIVE_SESSION)) {
            this.activeSession = this.session.ActiveSession;
            if (this.activeSession && this.activeSession.meta) {
                this.metaInfo = this.activeSession.meta;
            }
            if (this.activeSession && this.activeSession.uuid) {
                console.log(`Active-Session ID: [${this.activeSession.uuid}]`);
            }
        }
        if (!!this.metaInfo) {
            this.updateMetaFromSession();
            return;
        }
        else {
            this.metaInfo = {
                title: '',
                version: '',
                lastModified: new Date(),
                oscalVersion: '',
            };
            this.updateMetaFromSession();
        }
        console.log('Beginning Meta Component');
        console.log(this.metaInfo);
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder();
        this.metaForm = this.formBuilder.group({
            title: [this.metaInfo.title ? this.metaInfo.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            description: [''],
            oscalVersion: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(1024),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                ]),
            ],
            version: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(80),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                ]),
            ],
            last_modified_string: [
                this.formatDateLabel(new Date()),
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                ]),
            ],
            last_modified_date: [
                new Date(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.compose([]),
            ],
            // parties: (this.getPartiesControlsArray(this.metaInfo.parties)),
            // newParty: this.formBuilder.array([]),
        });
    }
    ngOnInit() {
        this.initMetaInfo();
        this.updateMetaFromSession();
        // this.db = new AppDbInProgressService(Platform, );
    }
    ngAfterViewInit() {
        // console.log(`@ngAfterViewInit.VCR: ${this.VCR}`);
        const a = 5;
        console.log(`A = ${a}`);
    }
    getPartiesControlsArray(theData = null) {
        const controlArray = new Array();
        return this.formBuilder.array(controlArray);
    }
    initPlaceholders4Entry() {
        const empties = new Array();
        const entities = ['Person', 'Party', 'Organization'];
        entities.forEach((element, index) => {
            const emptyX = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__.OscalCatalogEmpties.getEmptyPOoP(element);
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
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(originalDate, 'yyyy-MM-dd HH:mm')), 'MMM d, yyyy @ HH:mm (zzzz)');
    }
    setTimeToNow() {
        const dts = this.formatDateLabel(new Date());
        console.log(`setTimeToNow DateFormatted as: ${dts}`);
        this.metaForm.patchValue({ last_modified: dts });
    }
    patchFormatDate(dtv) {
        console.log(`THe Picked Date: ${dtv}`);
        const dtValue = this.formatDateLabel((0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(dtv));
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
        console.log(`A-u:${this.autoUpdateDates}`);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            // this.addr = { state: 'MD', city: 'New Vasyuki', postalCode: '12345-6789' };
            // let v2: string | null | undefined;
            // let v3: Array<Address> = new Array<Address>();
            // v2 = 'null';
            const emptyPOoP = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__.OscalCatalogEmpties.getEmptyPOoP(typeName);
            console.log(` New or Old = ${!paramPOoP} `);
            // this.LMS.logData(emptyPOoP);
            const modal = yield this.modalController.create({
                component: _action_commons_action_party_info_action_party_info_component__WEBPACK_IMPORTED_MODULE_4__.ActionPartyInfoComponent,
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
                console.log(`oDD-Data = ${data}`);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
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
        this.currentEmptyParty = _interfaces_oscal_types_oscal_catalog_factory__WEBPACK_IMPORTED_MODULE_6__.OscalCatalogEmpties.getEmptyPOoP(typeName);
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
            this.entityTab.controlID = (0,uuid__WEBPACK_IMPORTED_MODULE_17__["default"])();
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
            console.log(`!-!-! Array is <EMPTY>`);
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
        if (!this.metaInfo.parties) {
            this.metaInfo.parties = new Array();
        }
        const a = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_11__.PartyType.Person,
            name: 'Adam',
            uuid: '11111111-1111-1111-1111-111111111111',
            remarks: 'The luckiest lump of clay ever used to make humans.',
            shortName: '1st',
        };
        const e = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_11__.PartyType.Person,
            name: 'Eve',
            uuid: '33333333-3333-3333-3333-333333333333',
            remarks: 'A workable second draft.',
            shortName: 'Not-1st',
        };
        const l = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_11__.PartyType.Person,
            name: 'Lucy',
            uuid: '66666666-6666-6666-6666-666666666666',
            remarks: 'Ruler of unfinished security and under-designed creations.',
            shortName: 'B4-1st',
        };
        const h = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_11__.PartyType.Organization,
            name: 'Bad.Org',
            uuid: '66666666-9999-6666-9999-666666666666',
            remarks: 'A place for the most interesting people that did not fit.',
            shortName: 'Bad',
        };
        const h2 = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_11__.PartyType.Organization,
            name: 'Good.Org',
            uuid: '69696969-9696-6969-9696-696969696969',
            remarks: 'A place for the most boring people ever lived.',
            shortName: 'Good',
        };
        const g = {
            type: _interfaces_oscal_types_oscal_catalog_types__WEBPACK_IMPORTED_MODULE_11__.PartyType.Organization,
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
        return !!this.metaInfo.roles && this.metaInfo.roles.length >= 3;
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
        currentEditedEntity = theEntity;
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
    startDocIdEdit($event, theDocId) {
        if (!this.currentEditedDocId) {
            this.cancelEditTab(undefined);
            this.startEntityEdit(theDocId, this.metaInfo.documentIDS, EditingState.DocID, this.currentEditedDocId);
        }
        else {
            this.currentEditedDocId = undefined;
            this.cancelEditTab(theDocId);
        }
    }
    startPropertyEdit($event, theProp) {
        if (!this.currentEditedProperty) {
            this.cancelEditTab(undefined);
            this.startEntityEdit(theProp, this.metaInfo.props, EditingState.Property, this.currentEditedProperty);
        }
        else {
            this.currentEditedProperty = undefined;
            this.cancelEditTab(theProp);
        }
    }
    startLinkEdit($event, theLink) {
        if (!this.currentEditedLink) {
            this.cancelEditTab(undefined);
            this.startEntityEdit(theLink, this.metaInfo.links, EditingState.Link, this.currentEditedLink);
        }
        else {
            this.currentEditedLink = undefined;
            this.cancelEditTab(theLink);
        }
    }
    startLocationEdit($event, theLocation) {
        if (!this.currentEditedLocation) {
            this.cancelEditTab(undefined);
            this.startEntityEdit(theLocation, this.metaInfo.locations, EditingState.Location, this.currentEditedLocation);
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
            console.log(`The POoP = ${newEntity.type}`);
            console.log(`The POoP = ${newEntity.name}`);
            console.log(`The POoP = ${newEntity.uuid}`);
            if (!this.metaInfo.parties) {
                this.metaInfo.parties = new Array();
            }
            this.metaInfo.parties.push(newEntity);
        }
        else {
            console.log(`Add POoP => CANCELLED!`);
        }
    }
    saveEditedRole(editedRole) {
        this.activeEditState = EditingState.Off;
        this.activeEntityAddTabName = '';
        if (!!editedRole) {
            console.log(`Role-Title = ${editedRole.title}`);
            console.log(`Role-ID = ${editedRole.id}`);
            console.log(`Role-Short = ${editedRole.shortName}`);
            if (!this.metaInfo.parties) {
                this.metaInfo.roles = new Array();
            }
            if (this.activeEditIndex > -1) {
                this.metaInfo.roles[this.activeEditIndex] = editedRole;
            }
        }
        else {
            console.log(`Add POoP => CANCELLED!`);
        }
        this.currentEditedRole = undefined;
    }
    saveEditedParty(editedParty) {
        this.activeEditState = EditingState.Off;
        this.activeEntityAddTabName = '';
        if (!!editedParty) {
            console.log(`The POoP = ${editedParty.type}`);
            console.log(`The POoP = ${editedParty.name}`);
            console.log(`The POoP = ${editedParty.uuid}`);
            if (!this.metaInfo.parties) {
                this.metaInfo.parties = new Array();
            }
            if (this.activeEditIndex > -1) {
                this.metaInfo.parties[this.activeEditIndex] = editedParty;
            }
        }
        else {
            console.log(`Save Edited POoP => CANCELLED!`);
        }
        this.currentEditedParty = undefined;
    }
    saveEditedResponsibleParty(editedRespParty) {
        this.activeEditState = EditingState.Off;
        this.activeEntityAddTabName = '';
        if (!!editedRespParty) {
            console.log(`The RoleID = ${editedRespParty.roleID}`);
            console.log(`The UUIDs = ${editedRespParty.partyUuids}`);
            if (!this.metaInfo.responsibleParties) {
                this.metaInfo.responsibleParties = new Array();
            }
            if (this.activeEditIndex > -1) {
                this.metaInfo.responsibleParties[this.activeEditIndex] = editedRespParty;
                this.activeEditIndex = -1;
            }
        }
        else {
            console.log(`Save Edited POoP => CANCELLED!`);
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
            console.log(`+++Add Role => ADDED! Len=${this.metaInfo.roles.length}`);
            console.log(`+++Role-Title = ${newRole.title}`);
            console.log(`+++Role-ID = ${newRole.id}`);
        }
        else {
            console.log(`Add Role => CANCELLED!`);
        }
    }
    addEditDocID(newDocID, isEditedDocID) {
        this.activeEntityAddTabName = '';
        if (newDocID) {
            if (!isEditedDocID) { // New DocID
                if (!this.metaInfo.documentIDS) {
                    this.metaInfo.documentIDS = new Array();
                }
                this.metaInfo.documentIDS.push(newDocID);
            }
            else if (isEditedDocID) {
            }
        }
    }
    addEditProperty(newProp, isEdited) {
        this.activeEntityAddTabName = '';
        if (newProp) {
            if (!isEdited) { // New Property
                if (!this.metaInfo.props) {
                    this.metaInfo.props = new Array();
                }
                this.metaInfo.props.push(newProp);
            }
            else if (isEdited) {
            }
        }
    }
    addEditLink(newLink, isEdited) {
        this.activeEntityAddTabName = '';
        if (newLink) {
            if (!isEdited) { // New Property
                if (!this.metaInfo.links) {
                    this.metaInfo.links = new Array();
                }
                this.metaInfo.links.push(newLink);
            }
            else if (isEdited) {
            }
        }
    }
    addEditLocation(newLocation, isEdited) {
        this.activeEntityAddTabName = '';
        if (newLocation) {
            if (!isEdited) { // New Property
                if (!this.metaInfo.locations) {
                    this.metaInfo.locations = new Array();
                }
                this.metaInfo.locations.push(newLocation);
            }
            else if (isEdited) {
            }
        }
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
            console.log(`+==Id=${newRespParty.roleID} Len=${newRespParty.partyUuids.length}; Links#=${newRespParty.links ? newRespParty.links.length : none}; Props# = ${newRespParty.props ? newRespParty.props.length : none} `);
            console.log(`+== Add Resp => ADDED! Len = ${this.metaInfo.responsibleParties.length} `);
            console.log(`+== Resp - Id = ${newRespParty.roleID} `);
            const last = this.metaInfo.responsibleParties[this.metaInfo.responsibleParties.length - 1];
            if (last.links) {
                console.log(`Value=${last.links[0].href}`);
            }
        }
        else {
            console.log(`Add Responsible Party => CANCELLED!`);
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
};
MetaInfoComponent.ctorParameters = () => [
    { type: _providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_12__.CurrentSessionData },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController },
    { type: _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_5__.LogManagerService }
];
MetaInfoComponent.propDecorators = {
    VCR: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['addEditData', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef },] }],
    VCR2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['addEditData2', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewContainerRef },] }],
    entityTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['entityTab',] }],
    roleTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['roleTab',] }],
    linkTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['linkTab',] }],
    locationsTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['locationsTab',] }],
    locationTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['locationTab',] }],
    propertyTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['propertyTab',] }],
    popoverDatetimeValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild, args: ['popoverDatetime', { static: true },] }],
    metaInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Input }]
};
MetaInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'oscal-meta-info',
        template: _meta_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectionStrategy.OnPush,
        styles: [_meta_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _action_all_common_act_styles_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _action_all_common_ion_tabs_buttons_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__metadata)("design:paramtypes", [_providers_app_state_state_nav_cat_state_session_data_service__WEBPACK_IMPORTED_MODULE_12__.CurrentSessionData,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController,
        _providers_logging_log_manager_service__WEBPACK_IMPORTED_MODULE_5__.LogManagerService])
], MetaInfoComponent);



/***/ }),

/***/ 53753:
/*!*******************************************************************!*\
  !*** ./src/app/pages/all-components/nav-cat/nav-cat.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavCatComponent": () => (/* binding */ NavCatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _nav_cat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-cat.component.html?ngResource */ 13964);
/* harmony import */ var _nav_cat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-cat.component.scss?ngResource */ 6608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_app_state_state_nav_cat_pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../providers/app-state/state-nav-cat/pages.service */ 15020);



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



let NavCatComponent = class NavCatComponent {
    constructor(router) {
        this.router = router;
        this.pageService = new _providers_app_state_state_nav_cat_pages_service__WEBPACK_IMPORTED_MODULE_2__.PagesService();
    }
    ngOnInit() {
        const link = this.router.url;
        this.pageState = this.pageService.getCurrentNextState(link);
        console.log(`OnInit => 
                  Page: ${link}; 
                  Next>${this.pageState.next ? this.pageState.next.url : 'none'} 
                  & Prev<${this.pageState.prev ? this.pageState.prev.url : 'none'}`);
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
};
NavCatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
NavCatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'oscal-nav-cat',
        template: _nav_cat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nav_cat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router])
], NavCatComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _select_families_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-families.component.html?ngResource */ 71874);
/* harmony import */ var _select_families_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-families.component.scss?ngResource */ 9501);
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


let SelectFamiliesComponent = class SelectFamiliesComponent {
    constructor() {
        this.selectItems = [];
        this.checkItems = [];
        this.familyLabel = '';
        console.log('!!! Beginning Select !!!');
        this.cat = new _providers_oscal_data_catalog_service__WEBPACK_IMPORTED_MODULE_2__.CatalogService();
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
};
SelectFamiliesComponent.ctorParameters = () => [];
SelectFamiliesComponent.propDecorators = {
    listStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SelectFamiliesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'oscal-select-families',
        template: _select_families_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_select_families_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])
], SelectFamiliesComponent);



/***/ }),

/***/ 15020:
/*!********************************************************************!*\
  !*** ./src/app/providers/app-state/state-nav-cat/pages.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageGroup": () => (/* binding */ PageGroup),
/* harmony export */   "PagesService": () => (/* binding */ PagesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
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

var PageGroup;
(function (PageGroup) {
    PageGroup[PageGroup["navCatSection"] = 0] = "navCatSection";
    PageGroup[PageGroup["navProFileSection"] = 1] = "navProFileSection";
})(PageGroup || (PageGroup = {}));
let PagesService = class PagesService {
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
        console.log(`urlTail:${urlTail}`);
        const currentPage = this.getCurrentPage(urlTail);
        if (currentPage) {
            console.log(`CurrentGroup=[${currentPage.pageGroup}]; Current UrlTail=${urlTail}`);
            const currentSection = this.getPagesForGroup(currentPage.pageGroup);
            currentSection.forEach(m => console.log(`Group: ${currentPage.pageGroup} @${m.url} #${m.sequence}`));
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
};
PagesService.ctorParameters = () => [];
PagesService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])
], PagesService);



/***/ }),

/***/ 89187:
/*!****************************************************************************!*\
  !*** ./src/app/providers/app-state/state-nav-cat/state-kv-base.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KvServiceBase": () => (/* binding */ KvServiceBase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 80190);




let KvServiceBase = class KvServiceBase {
    constructor(storage, platform) {
        this.storage = storage;
        this.platform = platform;
        this.isReady = false;
        // console.log(`Platform: ${this.platform}; Ready: ${this.platform.ready()}`);
        this.platform.ready().then(() => {
            this.createStorage();
        }).then(() => this.isReady = true);
    }
    createStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // Must make sure that database is created
            const store = yield this.storage.create();
            this.storage = store;
            return store;
        });
    }
    /**
     * @method @async setKeyValueObject
     * @param {string} keyValue: the Key to persist
     * @param {*} dataValue: the Value to persist
     * @returns {Promise<any>}
     * @memberof KvServiceBase
     */
    setKeyValueObject(keyValue, dataValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // Pack up the object from JSON to Stringified version
            console.log(dataValue);
            let strValue = '';
            if (dataValue) {
                strValue = JSON.stringify(dataValue);
                console.log(`Saving Key:${keyValue}\nas Str:${strValue}`);
            }
            return yield this.storage.set(keyValue, strValue);
        });
    }
    getKeyValueObject(keyValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const theValue = yield this.storage.get(keyValue);
            let returnValue;
            try {
                returnValue = JSON.parse(theValue);
            }
            catch (error) {
                console.log(`The error:${error} prevented parsing out storage\nFor the Key:[${keyValue}] `);
            }
            finally {
                return returnValue;
            }
        });
    }
    setKeyValueString(keyValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const theValue = yield this.storage.get(keyValue);
            return theValue;
        });
    }
    getKeyValue(keyValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const theValue = yield this.storage.get(keyValue);
            return theValue;
        });
    }
    isKeyValue(keyValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const value = yield this.storage.get(keyValue);
            console.log(`IS-the-Key:${keyValue}={Value:${value}}`);
            return !!value;
        });
    }
};
KvServiceBase.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
KvServiceBase = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform])
], KvServiceBase);



/***/ }),

/***/ 35667:
/*!*********************************************************************************!*\
  !*** ./src/app/providers/app-state/state-nav-cat/state-session-data.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NamedSessionNodes": () => (/* binding */ NamedSessionNodes),
/* harmony export */   "SessionEntry": () => (/* binding */ SessionEntry),
/* harmony export */   "SessionData": () => (/* binding */ SessionData),
/* harmony export */   "CurrentSessionData": () => (/* binding */ CurrentSessionData)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 80190);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 62535);
/* harmony import */ var _state_kv_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-kv-base.service */ 89187);
var CurrentSessionData_1;

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





var NamedSessionNodes;
(function (NamedSessionNodes) {
    NamedSessionNodes["SAVED_SESSIONS"] = "ALL-OSCAL-SESSIONS";
    NamedSessionNodes["ACTIVE_SESSION"] = "OSCAL-CURRENT-SESSION";
    NamedSessionNodes["SAVED_ENTRIES"] = "ALL-OSCAL-ENTRY-SESSION";
    NamedSessionNodes["ACTIVE_ENTIRE"] = "OSCAL-CURRENT-ENTIRE-SESSION";
    // Suffixes for other
    NamedSessionNodes["SAVED_META"] = "OSCAL-SAVED-META";
    NamedSessionNodes["SAVED_INCLUDE"] = "OSCAL-SAVED-INCLUDES";
    NamedSessionNodes["SAVED_MODS"] = "OSCAL-SAVED-MODS";
    NamedSessionNodes["SAVED_GROUPS"] = "OSCAL-SAVED_GROUPS";
})(NamedSessionNodes || (NamedSessionNodes = {}));
class SessionEntry {
    constructor(uuid, name) {
        this.uuid = uuid;
        this.name = name;
    }
}
class SessionData extends SessionEntry {
    constructor(uuid, name) {
        super(uuid, name);
    }
}
let CurrentSessionData = CurrentSessionData_1 = class CurrentSessionData extends _state_kv_base_service__WEBPACK_IMPORTED_MODULE_1__.KvServiceBase {
    constructor(theStorage, platform) {
        super(theStorage, platform);
        this.theStorage = theStorage;
        this.platform = platform;
        this.savedSessions = [];
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Must make sure that database is created
            const store = yield this.storage.create();
            this.storage = store;
        });
    }
    getNewSessionUUID() {
        return (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
    getSavedSessions() {
        this.getKeyValueObject(NamedSessionNodes.SAVED_SESSIONS)
            .then((sessions) => {
            return sessions;
        })
            .catch((error) => {
            console.log(`Promise of the sessions is not found ${JSON.stringify(error)}`);
        });
        return undefined;
    }
    readActiveSession() {
        this.getKeyValueObject(NamedSessionNodes.ACTIVE_SESSION)
            .then((data) => {
            CurrentSessionData_1.currentActiveSession = data;
            return data;
        })
            .catch((error) => {
            console.log(`Promise of the ` +
                `NamedSessionNodes.ACTIVE_SESSION:` +
                `${NamedSessionNodes.ACTIVE_SESSION}` +
                ` is not found ${JSON.stringify(error)}`);
        });
        return undefined;
    }
    set ActiveSession(session) {
        this.setKeyValueObject(this.getStoreEntryName(session.uuid, NamedSessionNodes.ACTIVE_SESSION), session);
        CurrentSessionData_1.currentActiveSession = session;
        CurrentSessionData_1.currentSessionUUID = session.uuid;
    }
    get ActiveSession() {
        if (CurrentSessionData_1.currentActiveSession) {
            return CurrentSessionData_1.currentActiveSession;
        }
        else {
            var id;
            if (CurrentSessionData_1.currentSessionUUID) {
                id = this.getStoreEntryName(CurrentSessionData_1.currentSessionUUID, NamedSessionNodes.ACTIVE_SESSION);
            }
            else if (CurrentSessionData_1.currentActiveSession && CurrentSessionData_1.currentActiveSession.uuid) {
                id = this.getStoreEntryName(CurrentSessionData_1.currentActiveSession.uuid, NamedSessionNodes.ACTIVE_SESSION);
            }
            this.getKeyValueObject(id).then((X) => { CurrentSessionData_1.currentActiveSession = X; }).catch(() => { console.log(`Could not read Session-Value ${id}`); });
        }
    }
    setEntry(nodeName, value) {
    }
    getStoreEntryName(uuid, namedNode) {
        return `${uuid}--${namedNode}`;
    }
    getEntry(uuid, namedNode) {
        const storeEntryName = this.getStoreEntryName(uuid, namedNode);
        this.getKeyValueObject(storeEntryName)
            .then((data) => {
            return data;
        })
            .catch((error) => {
            console.log(`Promise of the ` +
                ` ${storeEntryName}:` +
                ` is not complete ${JSON.stringify(error)}`);
        });
        return undefined;
    }
    activateNewSession(name) {
        const uuid = this.getNewSessionUUID();
        const newSession = new SessionData(uuid, name);
        this.ActiveSession = newSession;
        return this.session_id;
    }
};
CurrentSessionData.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
CurrentSessionData = CurrentSessionData_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform])
], CurrentSessionData);



/***/ }),

/***/ 13616:
/*!**********************************************************!*\
  !*** ./src/app/providers/logging/log-manager.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogManagerService": () => (/* binding */ LogManagerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
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

let LogManagerService = class LogManagerService {
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
};
LogManagerService.ctorParameters = () => [];
LogManagerService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])
], LogManagerService);



/***/ }),

/***/ 65297:
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

/***/ 59976:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ 77684);
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ 70202);
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ 87723);
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ 97146);
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ 7434);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ 65297);
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ 78179);







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

/***/ 78179:
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ 65297);

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

/***/ 86703:
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

/***/ 56610:
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

/***/ 77684:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 18325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);


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

/***/ 70202:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 18325);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 1924);
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ 55691);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);




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

/***/ 87723:
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 18325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);
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

/***/ 97146:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 18325);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 812);
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ 82564);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);




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
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 18325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 812);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ 67367);



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

/***/ 31170:
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
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ 18325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);

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

/***/ 55691:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ 87723);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ 1924);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);


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
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ 18325);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 67367);


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

/***/ 82564:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ 7434);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ 31170);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ 812);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ 67367);



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

/***/ 67367:
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

/***/ 79672:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



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

/***/ 30677:
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

/***/ 86712:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ 15117);
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ 41410);
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ 69360);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ 59976);
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ 86703);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 56610);
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ 9745);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);









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

/***/ 36361:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);

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

/***/ 15117:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ 36361);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



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

/***/ 64711:
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

/***/ 97850:
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

/***/ 84094:
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

/***/ 77002:
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

/***/ 87482:
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

/***/ 62983:
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ 64711);

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

/***/ 61607:
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

/***/ 61765:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ 97850);

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

/***/ 91333:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ 84094);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ 77002);


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

/***/ 41410:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ 87482);
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ 62983);
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ 61607);
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ 61765);
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ 91333);






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

/***/ 86527:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 30677);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);



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

/***/ 69360:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 79672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);



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

/***/ 18325:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);

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

/***/ }),

/***/ 67875:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 76421:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 63054:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 60231);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 62535:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 76421);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 63054);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 60231:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 67875);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 38762:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-cat-controls/action-cat-controls.component.css?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tY2F0LWNvbnRyb2xzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 95860:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-cat-params/action-cat-params.component.css?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tY2F0LXBhcmFtcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 1797:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/all-components/action-all-common/act-styles.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".oscal-prompt-class {\n  --backdrop-opacity: 0.2;\n  --background: linear-gradient(0deg, rgb(8, 8, 98) 1%, rgb(6, 6, 36) 100%);\n  --min-width: 30%;\n}\n\n.treePopUpInfo {\n  border-radius: 5px;\n  padding: 2px 5px;\n  --border: 1px red solid;\n  --height: auto;\n  --min-width: 50%;\n}\n\nbody.dark .treePopUpInfo {\n  border: 1px red solid;\n  border-radius: 5px;\n  padding: 2px 5px;\n  --background: #1f1f1f;\n  --backdrop-opacity: 50%;\n}\n\np {\n  font-family: Lato;\n}\n\n.tree ul {\n  margin-left: -29px;\n}\n\n.tree li .node_style {\n  list-style-type: none;\n  position: relative;\n  border: 2px solid #666666;\n  height: 52px;\n  margin: 1px;\n  /* 3px makes guides flush */\n  /* width: 60em;*/\n  /*This can either make staircase or inverse it*/\n}\n\n.tree li {\n  list-style-type: none;\n  margin: 5px;\n  position: relative;\n}\n\n.tree li::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: -13px;\n  border-left: 2px solid #666666;\n  border-bottom: 2px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 40px;\n}\n\n.tree li::after {\n  position: absolute;\n  content: \"\";\n  top: 20px;\n  left: -13px;\n  border-left: 2px solid #666666;\n  border-top: 1.5px solid #666666;\n  border-radius: 0px 0 0 0;\n  width: 20px;\n  height: 100%;\n}\n\n.tree li:last-child::after {\n  display: none;\n}\n\n.tree li:last-child:before {\n  border-radius: 0 0 0 5px;\n}\n\nul.tree > li:first-child::before {\n  display: none;\n}\n\nul.tree > li:first-child::after {\n  border-radius: 0 0 0 5px;\n}\n\n.tree li a {\n  border: 1px #666666 solid;\n  border-radius: 5 0 0 5;\n  padding: 2px 5px;\n}\n\n.tree li a:hover,\n.tree li a:hover + ul li a,\n.tree li a:focus,\n.tree li a:focus + ul li a {\n  background: #ccc;\n  color: #000;\n  border: 2px solid #000;\n}\n\n.tree li a:hover + ul li::after,\n.tree li a:focus + ul li::after,\n.tree li a:hover + ul li::before,\n.tree li a:focus + ul li::before .tree li a:hover + ul::before,\n.tree li a:focus + ul::before .tree li a:hover + ul ul::before,\n.tree li a:focus + ul ul::before {\n  border-color: #000;\n  /*connector color on hover*/\n}\n\n.hidden {\n  display: none;\n}\n\n#tallTextArea {\n  height: 144pt;\n}\n\nion-item .input-wrapper {\n  flex: none;\n  margin-left: auto;\n}\n\nion-item ion-radio.checkbox {\n  margin-right: auto !important;\n}\n\nbody.form-busy {\n  cursor: progress;\n}\n\n.fixed-width-text {\n  max-height: 69px;\n  word-wrap: break-word;\n  word-break: break-word;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdC1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EseUVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQWEsMkJBQUE7RUFDYixnQkFBQTtFQUFrQiwrQ0FBQTtBQUNwQjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0Usd0JBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBOzs7O0VBSUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTs7Ozs7O0VBTUUsa0JBQUE7RUFBb0IsMkJBQUE7QUFDdEI7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFRTtFQUNFLDZCQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUVBLHNCQUFBO0VBQ0EsdUJBQUE7QUFGQSIsImZpbGUiOiJhY3Qtc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3NjYWwtcHJvbXB0LWNsYXNzIHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjI7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYig4LCA4LCA5OCkgMSUsIHJnYig2LCA2LCAzNikgMTAwJSk7XG4gIC0tbWluLXdpZHRoOiAzMCU7XG59XG5cbi50cmVlUG9wVXBJbmZvIHtcbiAgLy9ib3JkZXI6IDFweCByZWQgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgLS1ib3JkZXI6IDFweCByZWQgc29saWQ7XG4gIC0taGVpZ2h0OiBhdXRvO1xuICAtLW1pbi13aWR0aDogNTAlO1xufVxuLy8gRG9lcyBub3Qgd29yayBhdCB0aGUgbW9tZW50XG5ib2R5LmRhcmsge1xuICAudHJlZVBvcFVwSW5mbyB7XG4gICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgIC0tYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDUwJTtcbiAgfVxufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG4udHJlZSB1bCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjlweDtcbn1cblxuLnRyZWUgbGkgLm5vZGVfc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjY2NjtcbiAgaGVpZ2h0OiA1MnB4O1xuICBtYXJnaW46IDFweDsgLyogM3B4IG1ha2VzIGd1aWRlcyBmbHVzaCAqL1xuICAvKiB3aWR0aDogNjBlbTsqLyAvKlRoaXMgY2FuIGVpdGhlciBtYWtlIHN0YWlyY2FzZSBvciBpbnZlcnNlIGl0Ki9cbn1cblxuLnRyZWUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50cmVlIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0xM3B4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2NjY2NjY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItcmFkaXVzOiAwcHggMCAwIDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi50cmVlIGxpOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMTNweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItcmFkaXVzOiAwcHggMCAwIDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8vIE1ha2Ugc3VyZSBubyBlbXB0eSBndWlkZSBzdGlja3Mgb3V0XG4udHJlZSBsaTpsYXN0LWNoaWxkOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vLyBSb3VuZCB1cCB0aGUgbGFzdCB2aXN1YWwgZ3VpZGVcbi50cmVlIGxpOmxhc3QtY2hpbGQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNXB4O1xufVxuLy8gSGlkZSB0aGUgdmlzdWFsIGd1aWRlIGJlZm9yZSB0aGUgZmlyc3QgYmFyLWl0ZW1cbnVsLnRyZWUgPiBsaTpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudWwudHJlZSA+IGxpOmZpcnN0LWNoaWxkOjphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbn1cblxuLnRyZWUgbGkgYSB7XG4gIGJvcmRlcjogMXB4ICM2NjY2NjYgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUgMCAwIDU7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG59XG5cbi50cmVlIGxpIGE6aG92ZXIsXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGkgYSxcbi50cmVlIGxpIGE6Zm9jdXMsXG4udHJlZSBsaSBhOmZvY3VzICsgdWwgbGkgYSB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xufVxuXG4udHJlZSBsaSBhOmhvdmVyICsgdWwgbGk6OmFmdGVyLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpOjphZnRlcixcbi50cmVlIGxpIGE6aG92ZXIgKyB1bCBsaTo6YmVmb3JlLFxuLnRyZWUgbGkgYTpmb2N1cyArIHVsIGxpOjpiZWZvcmUgLnRyZWUgbGkgYTpob3ZlciArIHVsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmZvY3VzICsgdWw6OmJlZm9yZSAudHJlZSBsaSBhOmhvdmVyICsgdWwgdWw6OmJlZm9yZSxcbi50cmVlIGxpIGE6Zm9jdXMgKyB1bCB1bDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwOyAvKmNvbm5lY3RvciBjb2xvciBvbiBob3ZlciovXG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jdGFsbFRleHRBcmVhIHtcbiAgaGVpZ2h0OiAxNDRwdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAuaW5wdXQtd3JhcHBlciB7XG4gICAgZmxleDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuICBpb24tcmFkaW8uY2hlY2tib3gge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5cbmJvZHkuZm9ybS1idXN5IHtcbiAgY3Vyc29yOiBwcm9ncmVzcztcbn1cblxuLmZpeGVkLXdpZHRoLXRleHQge1xubWF4LWhlaWdodDo2OXB4O1xud29yZC13cmFwOiBicmVhay13b3JkO1xuLy8gd2hpdGUtc3BhY2U6IHByZS13cmFwO1xud29yZC1icmVhazogYnJlYWstd29yZDtcbnRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIl19 */";

/***/ }),

/***/ 12900:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/all-components/action-all-common/div-scroll.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "div[scrollx=true], div[scrolly=true] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdi1zY3JvbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRpdi1zY3JvbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */";

/***/ }),

/***/ 29546:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-all-common/ion-tabs-buttons.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ":root {\n  --tab-border-color: var(--ion-color-warning-shade);\n  --tab-background-color: var(--ion-color-warning-contrast);\n  --tab-text-color: var(--ion-color-light);\n  --tab-visible-border: double;\n}\n\n.tab-selected {\n  z-index: 10;\n  border-left-color: var(--tab-text-color);\n  border-left: 3px double;\n  border-top-color: var(--tab-text-color);\n  border-top: 3px double;\n  border-right-color: var(--tab-text-color);\n  border-right-style: double;\n  border-right-width: 3px;\n  background-color: var(--tab-background-color);\n  color: var(--tab-text-color);\n}\n\n.tab-cell-row-framed {\n  z-index: 1;\n  border-color: var(--tab-background-color);\n  background-color: var(--tab-background-color);\n  border: 3px double;\n}\n\n.array-header {\n  margin-top: 1em;\n}\n\n.text-centered {\n  text-align: center;\n}\n\n.spaceless {\n  margin-left: 0;\n  padding-left: 0;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.topless {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.bottomless {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.even-ion-buttons {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.tab-cell-row {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.tab-cell-row-hidden {\n  margin-top: 0;\n  padding-top: 0;\n  display: none;\n}\n\n.tab-frame {\n  border: thick ridge var(--tab-border-color);\n  background-color: var(--tab-background-color);\n}\n\n.button-off {\n  color: var(--tab-background-color);\n}\n\n.save-button-off {\n  border: 2.5px solid #ff3333;\n  border-radius: 1em;\n  -webkit-text-decoration-color: #ff3333;\n          text-decoration-color: #ff3333;\n  text-decoration: line-through;\n  color: var(--tab-background-color);\n}\n\n.save-button-on {\n  border: 2.5px solid #33ff33;\n  border-radius: 1em;\n}\n\n.button-crossR {\n  position: relative;\n}\n\n.button-crossL {\n  position: relative;\n}\n\n.button-crossL:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(-5deg);\n}\n\n.button-crossR:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 50%;\n  right: 0;\n  border-top: 2px solid;\n  border-color: #ff3333;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlvbi10YWJzLWJ1dHRvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFBO0VBQ0EseURBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxXQUFBO0VBSUEsd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsNkNBQUE7QUFQRjs7QUFZQTtFQUNFLGtDQUFBO0FBVEY7O0FBYUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7QUFWRjs7QUFjQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQU9BLHdCQUFBO0FBWkY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBT0EsdUJBQUE7QUFiRiIsImZpbGUiOiJpb24tdGFicy1idXR0b25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tdGFiLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUpO1xuICAtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCk7XG4gIC0tdGFiLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tdGFiLXZpc2libGUtYm9yZGVyOiBkb3VibGU7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICAvLyBUaGlzIGlzIGFuIG92ZXJsYXAgZm9yIHRoZSBmcmFtZVxuICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAvL3RvcDogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLy9ib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tdGFiLWJhY2tncm91bmQtY29sb3IpO1xuICAvLyBUaGlzIGlzIGEgaGlnaGxpZ2h0IGZvciB0aGUgYWN0aXZlIHRhYlxuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItbGVmdDogM3B4IGRvdWJsZTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGFiLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wOiAzcHggZG91YmxlO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXRhYi10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1yaWdodC13aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10YWItdGV4dC1jb2xvcik7XG59XG5cbi50YWItY2VsbC1yb3ctZnJhbWVkIHtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggZG91YmxlO1xufVxuXG4uYXJyYXktaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4udGV4dC1jZW50ZXJlZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4udG9wbGVzcyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYm90dG9tbGVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZXZlbi1pb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFiLWNlbGwtcm93IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi50YWItY2VsbC1yb3ctaGlkZGVuIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWItZnJhbWUge1xuICBib3JkZXI6IHRoaWNrIHJpZGdlIHZhcigtLXRhYi1ib3JkZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gIC8vIHJnYig5LCAwLCA5KTsgLy9cbiAgLy8gYm9yZGVyOiAzcHggZ3JlZW47XG59XG5cbi5idXR0b24tb2ZmIHtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvL2JsYWNrOyAvL2Rpc3BsYXk6IG5vbmU7XG59XG5cbi5zYXZlLWJ1dHRvbi1vZmYge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZjMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgLy8gcmdiKDksIDAsIDkpOyAvLyBibGFjaztcbn1cblxuLnNhdmUtYnV0dG9uLW9uIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMzNmZjMzO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbi5idXR0b24tY3Jvc3NSIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1dHRvbi1jcm9zc0wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idXR0b24tY3Jvc3NMOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzMzMztcbiAgLy8gdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMzMzO1xuICAvLyBpbmhlcml0XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG59XG4uYnV0dG9uLWNyb3NzUjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjMzMzM7XG4gIC8vIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmMzMzMztcbiAgLy8gaW5oZXJpdFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 24739:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-ancestor-base/action-ancestor-base.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYW5jZXN0b3ItYmFzZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 95506:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-addresses/action-array-addresses.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktYWRkcmVzc2VzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 17007:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-document-id/action-array-document-id.component.scss?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktZG9jdW1lbnQtaWQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 31394:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-external-ids/action-array-external-ids.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktZXh0ZXJuYWwtaWRzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 55171:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-links/action-array-links.component.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktbGlua3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 49811:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-locations/action-array-locations.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 86380:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-phones/action-array-phones.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktcGhvbmVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 18830:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-properties/action-array-properties.component.scss?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 15239:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-roles/action-array-roles.component.scss?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktcm9sZXMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 82136:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-strings/action-array-strings.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tYXJyYXktc3RyaW5ncy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 81001:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-location-info/action-location-info.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tbG9jYXRpb24taW5mby5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 18426:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-map-roles/action-map-roles.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tbWFwLXJvbGVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 34971:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-party-info/action-party-info.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = ".padded-frame {\n  margin-top: 18;\n  margin-bottom: 18;\n  padding-top: 18;\n  padding-bottom: 18;\n}\n\n.rotate-text {\n  transform: rotate(-90deg);\n  /* Legacy vendor prefixes that you probably don't need... */\n  /* Safari */\n  -webkit-transform: rotate(-90deg);\n  /* Firefox */\n  -moz-transform: rotate(-90deg);\n  /* IE */\n  -ms-transform: rotate(-90deg);\n  /* Opera */\n  -o-transform: rotate(-90deg);\n  /* Internet Explorer */\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1wYXJ0eS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUFDRyx5QkFBQTtFQUNELDJEQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnRUFBQTtBQUZGIiwiZmlsZSI6ImFjdGlvbi1wYXJ0eS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5wYWRkZWQtZnJhbWUge1xuICBtYXJnaW4tdG9wOiAxODtcbiAgbWFyZ2luLWJvdHRvbTogMTg7XG4gIHBhZGRpbmctdG9wOiAxODtcbiAgcGFkZGluZy1ib3R0b206IDE4O1xufVxuXG5cbi5yb3RhdGUtdGV4dHtcbiAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC8qIExlZ2FjeSB2ZW5kb3IgcHJlZml4ZXMgdGhhdCB5b3UgcHJvYmFibHkgZG9uJ3QgbmVlZC4uLiAqL1xuICAvKiBTYWZhcmkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAvKiBGaXJlZm94ICovXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgLyogSUUgKi9cbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC8qIE9wZXJhICovXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249Myk7XG59Il19 */";

/***/ }),

/***/ 66671:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-select-baseline/action-select-baseline.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".baseline-grid {\n  padding: 0px;\n  --ion-grid-padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1zZWxlY3QtYmFzZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJhY3Rpb24tc2VsZWN0LWJhc2VsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2VsaW5lLWdyaWR7XG4gICAgcGFkZGluZzowcHg7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG59Il19 */";

/***/ }),

/***/ 68730:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-wait/action-wait.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = ".loading-modal {\n  --height: 54px;\n  --width: 86px;\n  --max-height: 54px;\n  --max-width: 186px;\n  height: 99px;\n  width: 333px;\n  max-height: 99px;\n  max-width: 333px;\n}\n\n.modal-title {\n  text-align: center;\n}\n\n.progress-bar {\n  text-align: center;\n  width: 100%;\n  height: 50px;\n}\n\n.xxx-setting-modal .xxx-modal-wrapper {\n  --ion-background-color: #f12000;\n  --border-radius: 20px;\n  --max-height: 55%;\n  --max-width: 80%;\n  --width: 80%;\n  --height: 50%;\n  --border-style: dotted;\n  --border-color: #428cff;\n  border-width: 5px;\n  top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi13YWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7QUFBRiIsImZpbGUiOiJhY3Rpb24td2FpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLW1vZGFsIHtcbiAgLS1oZWlnaHQ6IDU0cHg7XG4gIC0td2lkdGg6IDg2cHg7XG4gIC0tbWF4LWhlaWdodDogNTRweDtcbiAgLS1tYXgtd2lkdGg6IDE4NnB4O1xuXG4gIGhlaWdodDogOTlweDtcbiAgd2lkdGg6IDMzM3B4O1xuICBtYXgtaGVpZ2h0OiA5OXB4O1xuICBtYXgtd2lkdGg6IDMzM3B4O1xufVxuXG4ubW9kYWwtdGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2dyZXNzLWJhcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6NTBweDtcbn1cblxuLnh4eC1zZXR0aW5nLW1vZGFsIC54eHgtbW9kYWwtd3JhcHBlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmMTIwMDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1tYXgtaGVpZ2h0OiA1NSU7XG4gIC0tbWF4LXdpZHRoOiA4MCU7XG4gIC0td2lkdGg6IDgwJTtcbiAgLS1oZWlnaHQ6IDUwJTtcbiAgLS1ib3JkZXItc3R5bGU6IGRvdHRlZDtcbiAgLS1ib3JkZXItY29sb3I6ICM0MjhjZmY7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICB0b3A6IDIwJTtcbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 75679:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/all-components/author-begin/author-begin.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3ItYmVnaW4uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 79250:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/all-components/authoring-mode/authoring-mode.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpbmctbW9kZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 60947:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/all-components/back-matter/back-matter.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrLW1hdHRlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 56687:
/*!********************************************************************************!*\
  !*** ./src/app/pages/all-components/control/control.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 82235:
/*!************************************************************************************!*\
  !*** ./src/app/pages/all-components/meta-info/meta-info.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRhLWluZm8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6608:
/*!********************************************************************************!*\
  !*** ./src/app/pages/all-components/nav-cat/nav-cat.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "div.floaty {\n  position: absolute;\n  top: 18;\n  left: 13;\n  background: #eaeaea;\n  width: 30px;\n  height: 150px;\n}\n\nion-fab-button.float {\n  top: 18;\n  left: 18;\n  --border-width: 0;\n  --padding-top: 10;\n  --padding-start: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1jYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0ksT0FBQTtFQUNBLFFBQUE7RUFDRixpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJuYXYtY2F0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmZsb2F0eSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxODsgLy9vciB3aGVyZXZlciB5b3Ugd2FudCBpdCB0byBmbG9hdFxuICBsZWZ0OiAxMztcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uLmZsb2F0IHtcbiAgICB0b3A6MTg7XG4gICAgbGVmdDoxODtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tcGFkZGluZy10b3A6IDEwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwO1xufVxuIl19 */";

/***/ }),

/***/ 9501:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/all-components/select-families/select-families.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtZmFtaWxpZXMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 69829:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-ancestor-base/action-ancestor-base.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  action-ancestor-base works!\n  It is an un-inheritable markup file\n</p>\n";

/***/ }),

/***/ 82941:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-addresses/action-array-addresses.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n\n  <!--\n  <form *ngIf=\"addressListFields\" [(formArrayName)]=\"addressListFields\" (ngSubmit)=\"submitAddress()\">\n   -->\n  <form *ngIf=\"addressesGroup\" [formGroup]=\"addressesGroup\" (ngSubmit)=\"submitAddress()\">\n    <ion-title>\n      <ion-text *ngIf=\"!this.isSingleMode\">\n        <span> {{getListTitle()}} </span>\n      </ion-text>\n      <ion-text *ngIf=\"this.isSingleMode\">\n        <span> {{getAddressTitle()}} </span>\n      </ion-text>\n\n    </ion-title>\n\n    <div formArrayName=\"addressArray\" *ngIf=\"addressesGroup.get('addressArray')['controls'].length>0\">\n      <div *ngFor=\"let addressInstance of addressesGroup.get('addressArray')['controls']; let idx=index;\">\n        <!-- div  -->\n        <div [formGroupName]=\"idx\">\n          <!-- formControlName=\"address\"  [formGroupName]=\"i\" -->\n          <div *ngIf=\"!this.isSingleMode\">\n            <ion-buttons slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveAddress(idx)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon> <!-- -->\n                Remove Address {{idx+1}}/{{addressesGroup.get('addressArray')['controls'].length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <div *ngIf=\"!hideTitle && addressTitle\">\n                  <ion-label *ngIf=\"!!addressTitle\" title=\"Entity address\">\n                    {{addressTitle}}\n                  </ion-label>\n                  <ion-label *ngIf=\"!!!addressTitle\">\n                    New Address\n                  </ion-label>\n                </div>\n                <div *ngIf=\"!hideTitle && !addressTitle && !this.isSingleMode\">\n                  <ion-title color=\"primary\">\n                    Address {{idx+1}}\n                  </ion-title>\n                </div>\n                <!-- Idx:{{addressIndex}} onDelegate:{{toRemoveAddress===null}} -->\n                <ion-buttons *ngIf=\"!toRemoveAddress && idx>=0\" slot=\"end\">\n                  <ion-button (click)=\"onRemoveAddress(idx)\" color=\"warning\" slot=\"end\">\n                    <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                    Remove Address\n                  </ion-button>\n                </ion-buttons>\n              </ion-col>\n              <ion-col>\n\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">Address Type</ion-label>\n                  <ion-input formControlName=\"type\" title=\"The Type of the Address (e.g. Office, Home, etc)\"\n                    type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">Organization/Person/Contact</ion-label>\n                  <ion-input formControlName=\"addressTo\" title=\"The Name of the Addressee\" type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">Street/Building/Office/Apartment</ion-label>\n                  <ion-input type=\"text\" formControlName=\"streetAddress\"></ion-input>\n                  <ion-buttons slot=\"end\" *ngIf=\"!hasExtraLines(idx)\">\n                    <ion-button (click)=\"onAddExtraLine(idx)\" color=\"secondary\" slot=\"end\">\n                      <ion-icon slot=\"start\" icon=\"return-down-back-outline\"></ion-icon>\n                      Add Extra Line\n                    </ion-button>\n                  </ion-buttons>\n                </ion-item>\n\n              </ion-col>\n            </ion-row>\n\n            <!-- Extra Address-Lines Logic -->\n            <div formArrayName=\"extraLines\">\n              <!-- Length: {{addressInstance.get('extraLines').length }}-->\n              <div *ngFor=\"let extraInfo of addressInstance.get('extraLines')['controls']; let idxExtra = index;\"\n                [formGroupName]=\"idxExtra\">\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Extra Line {{idxExtra+1}}</ion-label>\n                      <ion-input type=\"text\" formControlName=\"extraLine\"></ion-input>\n\n                      <ion-buttons slot=\"end\">\n                        <ion-button (click)=\"onAddExtraLine(idx)\" color=\"secondary\" slot=\"end\"\n                          *ngIf=\"addressInstance.get('extraLines')['controls'].length === idxExtra+1\">\n                          <ion-icon slot=\"start\" icon=\"return-down-back-outline\"></ion-icon>\n                          Add Extra Line\n                        </ion-button>\n                        <ion-button (click)=\"onRemoveExtraLine(idx, idxExtra)\" color=\"warning\" slot=\"end\">\n                          <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                          Remove\n                        </ion-button>\n                      </ion-buttons>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">City Name</ion-label>\n                  <ion-input type=\"text\" formControlName=\"city\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">State/Province/Region</ion-label>\n                  <ion-input formControlName=\"state\" type=\"text\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\" placeholder=\"1\">Postal (ZIP) Code</ion-label>\n                  <ion-input formControlName=\"postalCode\" type=\"text\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">Country</ion-label>\n                  <ion-input formControlName=\"country\" type=\"text\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </div>\n        <!-- \n        oscal-address-form title=\"address of the {{entryName}} goes here\" [addressData]=\"address\" [hideTitle]=\"false\"\n        addressTitle=\"Address {{i+1}}\" addressIndex=\"{{i}}\" (toRemoveAddress)=\"onRemoveAddress\">\n        </oscal-address-form\n        -->\n      </div>\n    </div>\n    <div *ngIf=\"!this.isSingleMode\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"onAddAddress()\" color=\"secondary\" slot=\"end\">\n          <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n          Add New Address\n        </ion-button>\n      </ion-buttons>\n    </div>\n\n  </form>\n</div>";

/***/ }),

/***/ 32760:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-document-id/action-array-document-id.component.html?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tab-frame\">\n\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <br *ngIf=\"showAddCancelButtons\" />\n\n    <ion-title *ngIf=\"!hideTitle\" [class.text-centered]=\"this.showAddCancelButtons\">\n      <ion-text>\n        <span>{{getFormTitle()}}</span>\n      </ion-text>\n    </ion-title>\n\n    <div *ngIf=\"showAddCancelButtons\">\n      <br />\n      <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n        <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n          title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n        </ion-button>\n        <ion-button [disabled]=\"!subForm.valid\" [color]=\"!subForm.valid?'dark':'success'\" (click)=\"onSubmitData()\"\n          title=\"Press to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n          {{!!this.getInputName()?this.getInputName():'Info'}}\n        </ion-button>\n      </ion-buttons>\n    </div>\n\n\n    <div formArrayName=\"entries\">\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\">\n        <div [formGroupName]=\"i\">\n\n          <div>\n            <ion-buttons *ngIf=\"!singleMode\" slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                Remove {{this.getInputName()}} {{i+1}}/{{subArray.controls.length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <!-- The Each-Item Title -->\n                <div *ngIf=\"displayItemTitle()\">\n                  <ion-title color=\"primary\">\n                    {{this.getInputName()}} {{i+1}}\n                  </ion-title>\n                </div>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.key\" [title]=\"getToolTip(mapKV.value.inputTip)\" type=\"text\">\n                  </ion-input>\n\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div *ngIf=\"showAddCancelButtons\">\n          <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n            <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n              title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n            </ion-button>\n            <ion-button [disabled]=\"!subForm.valid\" [color]=\"!subForm.valid?'dark':'success'\" (click)=\"onSubmitData()\"\n              title=\"Press to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n              {{!!this.getInputName()?this.getInputName():'Info'}}\n            </ion-button>\n          </ion-buttons>\n          <br />\n        </div>\n\n      </div>\n\n      <ion-buttons slot=\"end\" *ngIf=\"!hideAddElementButton\">\n        <ion-button *ngIf=\"!hideAddElementButton || this.singleMode\" (click)=\"onAppendElement()\" color=\"secondary\"\n          slot=\"end\">\n          <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n          Add New {{this.getInputName()}}\n        </ion-button>\n      </ion-buttons>\n\n      <div>\n      </div>\n    </div>\n  </form>\n</div>";

/***/ }),

/***/ 98744:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-external-ids/action-array-external-ids.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tab-frame\">\n\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <br *ngIf=\"showAddCancelButtons\" />\n\n    <ion-title *ngIf=\"!hideTitle\">\n      <ion-text>\n        <span>{{getFormTitle()}}</span>\n      </ion-text>\n    </ion-title>\n\n    <div formArrayName=\"entries\">\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\">\n        <div [formGroupName]=\"i\">\n\n          <div>\n            <ion-buttons *ngIf=\"!singleMode\" slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                Remove {{this.getInputName()}} {{i+1}}/{{subArray.controls.length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <!-- The Each-Item Title -->\n                <div *ngIf=\"displayItemTitle()\">\n                  <ion-title color=\"primary\">\n                    {{this.getInputName()}} {{i+1}}\n                  </ion-title>\n                </div>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <ion-buttons *ngIf=\"showAddCancelButtons\" class=\"even-ion-buttons\" color=\"warning\">\n          <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n            title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n            <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n          </ion-button>\n          <ion-button [disabled]=\"!subForm.valid\" (click)=\"onSubmitData()\" color=\"success\"\n            title=\"Press to {{actionName}} {{entityName}}\">\n            <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save {{!!inputName?inputName:'Info'}}\n          </ion-button>\n        </ion-buttons>\n      </div>\n\n      <ion-buttons slot=\"end\" *ngIf=\"!hideAddElementButton\">\n        <ion-button *ngIf=\"!hideAddElementButton || this.singleMode\" (click)=\"onAppendElement()\" color=\"secondary\"\n          slot=\"end\">\n          <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n          Add New {{this.getInputName()}}\n        </ion-button>\n      </ion-buttons>\n\n      <div>\n      </div>\n    </div>\n  </form>\n</div>";

/***/ }),

/***/ 72881:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-links/action-array-links.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tab-frame\">\n\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <br *ngIf=\"showAddCancelButtons\" />\n    <ion-title *ngIf=\"!hideTitle\" [class.text-centered]=\"this.showAddCancelButtons\">\n      <ion-text>\n        <span>{{getFormTitle()}}</span>\n      </ion-text>\n    </ion-title>\n\n    <div *ngIf=\"showAddCancelButtons\">\n      <br />\n      <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n        <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n          title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n        </ion-button>\n        <ion-button [disabled]=\"!subForm.valid\" [color]=\"!subForm.valid?'dark':'success'\" (click)=\" onSubmitData()\"\n          title=\"Press to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n          {{!!this.getInputName()?this.getInputName():'Info'}}\n        </ion-button>\n      </ion-buttons>\n    </div>\n\n    <div formArrayName=\"entries\">\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\">\n        <div [formGroupName]=\"i\">\n\n          <div>\n            <ion-buttons *ngIf=\"!singleMode\" slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                Remove {{this.getInputName()}} {{i+1}}/{{subArray.controls.length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <!-- The Each-Item Title -->\n                <div *ngIf=\"displayItemTitle()\">\n                  <ion-title color=\"primary\">\n                    {{this.getInputName()}} {{i+1}}\n                  </ion-title>\n                </div>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n            <!--  *ngFor=\"let [key, value] of this.inputsMap; let idxControl=index;\" -->\n            <!--  *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\"-->\n            <ion-row *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n              <ion-col *ngIf=\"!mapKV.value.complexInputType\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col *ngIf=\"!!mapKV.value.complexInputType\">\n                <ion-item *ngIf=\"mapKV.value.inputAs==='textarea'\">\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-textarea [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\" rows=\"2\" autoGrow=\"true\">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div *ngIf=\" showAddCancelButtons\">\n          <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n            <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n              title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n            </ion-button>\n            <ion-button [disabled]=\"!subForm.valid\" [color]=\"!subForm.valid?'dark':'success'\" (click)=\" onSubmitData()\"\n              title=\"Press to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n              {{!!this.getInputName()?this.getInputName():'Info'}}\n            </ion-button>\n          </ion-buttons>\n          <br />\n        </div>\n\n      </div>\n\n      <ion-buttons slot=\"end\" *ngIf=\"!hideAddElementButton\">\n        <ion-button *ngIf=\"!hideAddElementButton || this.singleMode\" (click)=\"onAppendElement()\" color=\"secondary\"\n          slot=\"end\">\n          <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n          Add New {{this.getInputName()}}\n        </ion-button>\n      </ion-buttons>\n\n      <div>\n      </div>\n\n    </div>\n  </form>\n</div>";

/***/ }),

/***/ 99664:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-locations/action-array-locations.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <ion-title *ngIf=\"!hideTitle\">\n      <ion-text>\n        <span>{{getFormTitle()}}</span>\n      </ion-text>\n    </ion-title>\n\n\n\n    <div formArrayName=\"entries\">\n      <!-- Array of locations loop -->\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\">\n        <div [formGroupName]=\"i\">\n\n          <!-- Array Control Remove Button -->\n          <div>\n            <ion-buttons *ngIf=\"!singleMode\" slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                Remove {{this.getInputName()}} {{i+1}}/{{subArray.controls.length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <!-- The Each Numbered-Item Title -->\n                <div *ngIf=\"displayItemTitle()\">\n                  <ion-title color=\"primary\">\n                    {{this.getInputName()}} {{i+1}}\n                  </ion-title>\n                </div>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n            <!--  *ngFor=\"let [key, value] of this.inputsMap; let idxControl=index;\" -->\n            <!--  *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\"-->\n            <ion-row *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n              <ion-col *ngIf=\"!mapKV.value.complexInputType\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col *ngIf=\"!!mapKV.value.complexInputType\">\n                <ion-item *ngIf=\"mapKV.value.inputAs==='textarea'\">\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-textarea [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\" rows=\"2\" autoGrow=\"true\">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div *ngIf=\" showAddCancelButtons\">\n          <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n            <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n              title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n            </ion-button>\n            <ion-button [disabled]=\"!subForm.valid\" (click)=\"onSubmitData()\" color=\"success\"\n              title=\"Press to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n              {{!!this.getInputName()?this.getInputName():'Info'}}\n            </ion-button>\n          </ion-buttons>\n          <br />\n        </div>\n\n      </div>\n\n      <ion-buttons slot=\"end\" *ngIf=\"!hideAddElementButton\">\n        <ion-button *ngIf=\"!hideAddElementButton || this.singleMode\" (click)=\"onAppendElement()\" color=\"secondary\"\n          slot=\"end\">\n          <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n          Add New {{this.getInputName()}}\n        </ion-button>\n      </ion-buttons>\n\n\n\n    </div>\n\n  </form>\n\n</div>";

/***/ }),

/***/ 16574:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-phones/action-array-phones.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tab-frame\">\n\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <br *ngIf=\"showAddCancelButtons\" />\n\n    <ion-title *ngIf=\"!hideTitle\" >\n      <ion-text>\n        <span>{{getFormTitle()}}</span>\n      </ion-text>\n    </ion-title>\n\n    <div formArrayName=\"entries\">\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\">\n        <div [formGroupName]=\"i\">\n\n          <div>\n            <ion-buttons *ngIf=\"!singleMode\" slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                Remove {{this.getInputName()}} {{i+1}}/{{subArray.controls.length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <!-- The Each-Item Title -->\n                <div *ngIf=\"displayItemTitle()\">\n                  <ion-title color=\"primary\">\n                    {{this.getInputName()}} {{i+1}}\n                  </ion-title>\n                </div>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <ion-buttons *ngIf=\"showAddCancelButtons\" class=\"even-ion-buttons\" color=\"warning\">\n          <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n            title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n            <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n          </ion-button>\n          <ion-button [disabled]=\"!subForm.valid\" (click)=\"onSubmitData()\" color=\"success\"\n            title=\"Press to {{actionName}} {{entityName}}\">\n            <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save {{!!this.getInputName()?this.getInputName():'Info'}}\n          </ion-button>\n        </ion-buttons>\n      </div>\n\n      <ion-buttons slot=\"end\" *ngIf=\"!hideAddElementButton\">\n        <ion-button *ngIf=\"!hideAddElementButton || this.singleMode\" (click)=\"onAppendElement()\" color=\"secondary\"\n          slot=\"end\">\n          <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n          Add New {{getInputName()}}\n        </ion-button>\n      </ion-buttons>\n\n      <div>\n      </div>\n    </div>\n  </form>\n</div>";

/***/ }),

/***/ 30163:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-properties/action-array-properties.component.html?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tab-frame\">\n\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <br *ngIf=\"showAddCancelButtons\" />\n\n    <ion-title *ngIf=\"!hideTitle\" [class.text-centered]=\"this.showAddCancelButtons\">\n      <ion-text>\n        <span>{{getFormTitle()}}</span>\n      </ion-text>\n    </ion-title>\n\n    <div *ngIf=\"showAddCancelButtons\"> <br />\n      <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n        <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n          title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n        </ion-button>\n        <ion-button [disabled]=\"!subForm.valid\" [color]=\"!subForm.valid?'dark':'success'\" (click)=\"onSubmitData()\"\n          title=\"Press to {{actionName}} {{this.getInputName()?this.getInputName():'Info'}}\">\n          <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n          {{this.getInputName()?this.getInputName():'Info'}}\n        </ion-button>\n      </ion-buttons>\n\n    </div>\n\n    <div formArrayName=\"entries\">\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\">\n        <div [formGroupName]=\"i\">\n\n          <div>\n            <ion-buttons *ngIf=\"!singleMode\" slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                Remove {{this.getInputName()}} {{i+1}}/{{subArray.controls.length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <!-- The Each-Item Title -->\n                <div *ngIf=\"displayItemTitle()\">\n                  <ion-title color=\"primary\">\n                    {{this.getInputName()}} {{i+1}}\n                  </ion-title>\n                </div>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n            <!-- Looping through the control's descriptors -->\n            <ion-row *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n              <ion-col *ngIf=\"!mapKV.value.complexInputType\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col *ngIf=\"!!mapKV.value.complexInputType\">\n                <ion-item *ngIf=\"mapKV.value.inputAs==='uuid'\">\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n                  <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"onAssignArrayElementUUID(i)\" color=\"secondary\" slot=\"end\">\n                      <ion-icon slot=\"start\" icon=\"snow-outline\"></ion-icon>\n                      <span>Generate New UUID</span>\n                    </ion-button>\n                  </ion-buttons>\n                </ion-item>\n                <ion-item *ngIf=\"mapKV.value.inputAs==='textarea'\">\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-textarea [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\" rows=\"2\" autoGrow=\"true\">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <div *ngIf=\"showAddCancelButtons\">\n          <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n            <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n              title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n            </ion-button>\n            <ion-button [disabled]=\"!subForm.valid\" [color]=\"!subForm.valid?'dark':'success'\" (click)=\"onSubmitData()\"\n              title=\"Press to {{actionName}} {{this.getInputName()?this.getInputName():'Info'}}\">\n              <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n              {{this.getInputName()?this.getInputName():'Info'}}\n            </ion-button>\n          </ion-buttons>\n          <br />\n        </div>\n\n      </div>\n\n      <ion-buttons slot=\"end\" *ngIf=\"!hideAddElementButton\">\n        <ion-button *ngIf=\"!hideAddElementButton || this.singleMode\" (click)=\"onAppendElement()\" color=\"secondary\"\n          slot=\"end\">\n          <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n          Add New {{this.getInputName()}}\n        </ion-button>\n      </ion-buttons>\n\n      <div>\n      </div>\n    </div>\n  </form>\n</div>";

/***/ }),

/***/ 27605:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-roles/action-array-roles.component.html?ngResource ***!
  \*********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tab-frame\">\n\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <br />\n    <!-- color=\"warning\" -->\n    <ion-title *ngIf=\"!hideTitle\" style=\"text-align: center;\">\n      <ion-icon icon=\"{{iconName}}\"></ion-icon>&nbsp;&nbsp;&nbsp;{{getActionFormTitle()}}\n    </ion-title>\n    <br *ngIf=\"showAddCancelButtons\" />\n\n    <ion-buttons *ngIf=\"showAddCancelButtons\" class=\"even-ion-buttons bottomless\" color=\"warning\">\n      <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n        title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n        <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n      </ion-button>\n      <ion-button [disabled]=\"!subForm.valid\" (click)=\"onSubmitData()\" [color]=\"!subForm.valid?'dark':'success'\"\n        title=\"Press to {{actionName}} {{entityName}}\">\n        <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>{{getSaveButtonTitle()}}\n      </ion-button>\n    </ion-buttons>\n\n    <div formArrayName=\"entries\" class=\"topless\">\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\" class=\"topless\">\n        <div [formGroupName]=\"i\" class=\"topless\">\n\n          <div class=\"topless\">\n            <ion-buttons *ngIf=\"!singleMode\" slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                Remove {{this.getInputName()}} {{i+1}}/{{subArray.controls.length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n\n          <ion-grid class=\"topless\">\n            <ion-row>\n              <ion-col>\n                <!-- The Each-Item Title -->\n                <div *ngIf=\"displayItemTitle()\">\n                  <ion-title color=\"primary\">\n                    {{this.getInputName()}} {{i+1}}\n                  </ion-title>\n                </div>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n              <ion-col *ngIf=\"!mapKV.value.complexInputType\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col *ngIf=\"!!mapKV.value.complexInputType\">\n                <ion-item *ngIf=\"mapKV.value.inputAs==='textarea'\">\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-textarea [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\" rows=\"2\" autoGrow=\"true\">\n                  </ion-textarea>\n                </ion-item>\n                <div *ngIf=\"mapKV.value.inputAs==='oscal-array-links'\">\n                  <!--  formArrayName=\"Links\" -->\n                  <oscal-array-links [ID]=\"'topLinks'\" [linksArray]=\"[]\" listTitle=\"Links\" parentEntity=\"Role\"\n                    parentName=\"Role\" inputName=\"Link\"\n                    [isArrayOptionalText]=\"(isOptional(mapKV.value)?this.label4Optional:'')\">\n                  </oscal-array-links>\n                </div>\n                <div *ngIf=\"mapKV.value.inputAs==='oscal-array-properties'\">\n                  <!--  formArrayName=\"Links\" -->\n                  <oscal-array-properties [ID]=\"'topLinks'\" [propertiesArray]=\"[]\" listTitle=\"Properties\"\n                    parentEntity=\"Role\" parentName=\"Role\" inputName=\"Prop.\"\n                    [isArrayOptionalText]=\"(isOptional(mapKV.value)?this.label4Optional:'')\">\n                  </oscal-array-properties>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n\n        <ion-buttons *ngIf=\"showAddCancelButtons\" class=\"even-ion-buttons\" color=\"warning\">\n          <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n            title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n            <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n          </ion-button>\n          <ion-button [disabled]=\"!subForm.valid\" (click)=\"onSubmitData()\" [color]=\"!subForm.valid?'dark':'success'\"\n            title=\"Press to {{actionName}} {{entityName}}\">\n            <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>{{getSaveButtonTitle()}}\n          </ion-button>\n        </ion-buttons>\n      </div>\n\n      <ion-buttons slot=\"end\" *ngIf=\"!hideAddElementButton\">\n        <ion-button *ngIf=\"!hideAddElementButton || this.singleMode\" (click)=\"onAppendElement()\" color=\"secondary\"\n          slot=\"end\">\n          <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n          Add New {{this.getInputName()}}\n        </ion-button>\n      </ion-buttons>\n\n      <div>\n      </div>\n    </div>\n    <br />\n  </form>\n</div>";

/***/ }),

/***/ 83837:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-array-strings/action-array-strings.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n  <ion-title>\n    <ion-text>\n      <span> {{getListTitle()}}</span>\n    </ion-text>\n  </ion-title>\n  <div formArrayName=\"entries\">\n    <ion-grid *ngFor=\"let entryInfo of subForm.get('entries')['controls']; let i=index;\">\n      <ion-row [formGroupName]=\"i\">\n        <ion-col>\n          <div>\n            <ion-item>\n              <ion-label position=\"floating\">{{inputName}} {{i+1}}\n              </ion-label>\n              <ion-input formControlName=\"entry\"\n                title=\"{{inputName}} for {{parentName || parentEntity}} should be entered here\" type=\"text\">\n              </ion-input>\n              <ion-buttons slot=\"end\">\n                <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                  <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                  Remove {{inputName}} {{i+1}}/{{subForm.get('entries')['controls'].length}}\n                </ion-button>\n              </ion-buttons>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAppendElement()\" color=\"secondary\" slot=\"end\">\n        <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n        Add New {{inputName}}\n      </ion-button>\n    </ion-buttons>\n    <div>\n    </div>\n  </div>\n</form>";

/***/ }),

/***/ 89645:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-cat-controls/action-cat-controls.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tab-frame\">\n\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n\n\n    <br *ngIf=\"showAddCancelButtons\" /> <!-- Conditional spacer -->\n    <ion-title *ngIf=\"!hideTitle\" [class.text-centered]=\"this.showAddCancelButtons\">\n      <!-- The General Title of the Form -->\n      <ion-text>\n        <span>{{getFormTitle()}}</span>\n      </ion-text>\n    </ion-title>\n\n    <!-- Save/Kill macro-control buttons for the whole-->\n    <div *ngIf=\"showAddCancelButtons\">\n      <br />\n      <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n        <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n          title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n        </ion-button>\n        <ion-button [disabled]=\"!subForm.valid\" [color]=\"!subForm.valid?'dark':'success'\" (click)=\" onSubmitData()\"\n          title=\"Press to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n          {{!!this.getInputName()?this.getInputName():'Info'}}\n        </ion-button>\n      </ion-buttons>\n    </div>\n\n\n    <div formArrayName=\"entries\">\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\">\n\n        <!-- Single Control Render-CRUD Operations -->\n        <div [formGroupName]=\"i\">\n\n          <div>\n            <ion-buttons *ngIf=\"!singleMode\" slot=\"end\" style=\"float:right\">\n              <ion-button (click)=\"onRemoveElement(i)\" color=\"warning\" slot=\"end\">\n                <ion-icon slot=\"start\" icon=\"backspace-outline\"></ion-icon>\n                Remove {{this.getInputName()}} {{i+1}}/{{subArray.controls.length}}\n              </ion-button>\n            </ion-buttons>\n          </div>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <!-- The Each-Item Title -->\n                <div *ngIf=\"displayItemTitle()\">\n                  <ion-title color=\"primary\">\n                    {{this.getInputName()}} {{i+1}}\n                  </ion-title>\n                </div>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n            <!--  *ngFor=\"let [key, value] of this.inputsMap; let idxControl=index;\" -->\n            <!--  *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\"-->\n\n            <ion-row *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n              <ion-col *ngIf=\"!mapKV.value.complexInputType\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n\n              <!-- TextArea UI-->\n              <ion-col *ngIf=\"!!mapKV.value.complexInputType\">\n                <ion-item *ngIf=\"mapKV.value.inputAs==='textarea'\">\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-textarea [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\" rows=\"2\" autoGrow=\"true\">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n\n            </ion-row>\n          </ion-grid>\n\n        </div>\n\n        <!--  Save/Cancel management buttons -->\n        <div *ngIf=\" showAddCancelButtons\">\n          <ion-buttons class=\"even-ion-buttons\" color=\"warning\">\n            <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n              title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n            </ion-button>\n            <ion-button [disabled]=\"!subForm.valid\" [color]=\"!subForm.valid?'dark':'success'\" (click)=\" onSubmitData()\"\n              title=\"Press to {{actionName}} {{entityName}}\">\n              <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save\n              {{!!this.getInputName()?this.getInputName():'Info'}}\n            </ion-button>\n          </ion-buttons>\n          <br />\n        </div>\n\n        <ion-buttons slot=\"end\" *ngIf=\"!hideAddElementButton\">\n          <ion-button *ngIf=\"!hideAddElementButton || this.singleMode\" (click)=\"onAppendElement()\" color=\"secondary\"\n            slot=\"end\">\n            <ion-icon slot=\"start\" icon=\"add-circle-outline\"></ion-icon>\n            Add New {{this.getInputName()}}\n          </ion-button>\n        </ion-buttons>\n\n      </div> <!-- Container for Array's Entries-->\n    </div>\n  </form>\n</div>";

/***/ }),

/***/ 92787:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-cat-params/action-cat-params.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  Params\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n\n  </form>\n</div>";

/***/ }),

/***/ 21153:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-location-info/action-location-info.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <br />\n    <!-- color=\"warning\" -->\n    <ion-title *ngIf=\"!hideTitle\" style=\"text-align: center;\">\n      <ion-icon icon=\"{{iconName}}\"></ion-icon>&nbsp;&nbsp;&nbsp;{{getActionFormTitle()}}\n    </ion-title>\n\n    <div> <br *ngIf=\"showAddCancelButtons\" />\n      <ion-buttons *ngIf=\"showAddCancelButtons\" class=\"even-ion-buttons bottomless\" color=\"warning\">\n        <ion-button (click)=\"onCancel()\" color=\"danger\"\n          title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n        </ion-button>\n        <ion-button [disabled]=\"!subForm.valid\" (click)=\"this.onSave()\" [color]=\"!subForm.valid?'dark':'success'\"\n          title=\"Press to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>{{this.getSaveButtonTitle()}}\n        </ion-button>\n      </ion-buttons>\n\n    </div>\n\n    <div formArrayName=\"entries\" class=\"topless\">\n\n      <div *ngFor=\"let entryInfo of subArray.controls; let i=index;\" class=\"topless\">\n        <div [formGroupName]=\"i\" class=\"topless\">\n\n          <ion-grid *ngFor=\"let mapKV of this.inputsMap|keyvalue; let inputIndex = index;\">\n            <ion-row *ngIf=\"!mapKV.value.complexInputType\">\n              <ion-col>\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf=\"!!mapKV.value.complexInputType\">\n\n              <!-- UUID Complex Type Handling -->\n              <ion-col *ngIf=\"mapKV.value.inputAs==='uuid'\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-input [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\">\n                  </ion-input>\n                  <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"this.onAssignArrayElementUUID(i)\" color=\"secondary\" slot=\"end\">\n                      <ion-icon slot=\"start\" icon=\"snow-outline\"></ion-icon>\n                      <span>Generate New UUID</span>\n                    </ion-button>\n                  </ion-buttons>\n                </ion-item>\n              </ion-col>\n\n              <!-- The Remarks -->\n              <ion-col *ngIf=\"mapKV.value.inputAs==='textarea'\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    {{mapKV.value.labelName + (isOptional(mapKV.value)?this.label4Optional:'')}}\n                  </ion-label>\n                  <ion-textarea [formControlName]=\"mapKV.value.fieldToMap\" [title]=\"getToolTip(mapKV.value.inputTip)\"\n                    type=\"text\" rows=\"2\" autoGrow=\"true\">\n                  </ion-textarea>\n                </ion-item>\n              </ion-col>\n\n              <!-- Address [!=- Mandatory -=!]-->\n              <ion-col *ngIf=\"mapKV.value.inputAs==='oscal-address-list'\">\n                <oscal-address-list [isSingleMode]=\"true\" [entryName]=\"this.defaultSingleTitle\"></oscal-address-list>\n              </ion-col>\n\n              <!-- Phones for Location -->\n              <ion-col *ngIf=\"mapKV.value.inputAs==='oscal-array-phones'\">\n                <oscal-array-phones #phonesArray [parentEntity]=\"this.defaultSingleTitle\"\n                  [isArrayOptionalText]=\"'(Optional)'\">\n                </oscal-array-phones>\n              </ion-col>\n\n              <!-- Emails-->\n              <ion-col *ngIf=\"mapKV.value.inputAs==='oscal-array-emails'\">\n                <oscal-array-string #emailsArray [parentEntity]=\"this.defaultSingleTitle\" [isArrayOptional]=\"true\"\n                  [ID]=\"'emailAddressesLocation'\" [stringData]=\"[]\" listTitle=\"Emails\"\n                  [parentEntity]=\"this.defaultSingleTitle\" [parentName]=\"this.defaultSingleTitle\" inputName=\"Email\"\n                  [validateAs]=\"getEmailValidator()\" [isArrayOptionalText]=\"'(Optional)'\"></oscal-array-string>\n              </ion-col>\n\n              <!-- URLs -->\n              <ion-col *ngIf=\"mapKV.value.inputAs==='oscal-array-urls'\">\n                <oscal-array-string #urlsArray [parentEntity]=\"this.defaultSingleTitle\" [isArrayOptional]=\"true\"\n                  [ID]=\"'emailAddressesLocation'\" [stringData]=\"[]\" listTitle=\"URLs\"\n                  [parentEntity]=\"this.defaultSingleTitle\" [parentName]=\"this.defaultSingleTitle\" inputName=\"URL\"\n                  [validateAs]=\"getEmailValidator()\" [isArrayOptionalText]=\"'(Optional)'\"></oscal-array-string>\n              </ion-col>\n\n              <!-- Links-->\n              <ion-col *ngIf=\"mapKV.value.inputAs==='oscal-array-links'\">\n                <oscal-array-links #linksArray [parentEntity]=\"this.defaultSingleTitle\"\n                  [isArrayOptionalText]=\"'(Optional)'\">\n                </oscal-array-links>\n              </ion-col>\n\n              <!-- Properties-->\n              <ion-col *ngIf=\"mapKV.value.inputAs==='oscal-array-properties'\">\n                <oscal-array-properties #propsArray [parentEntity]=\"this.defaultSingleTitle\"\n                  [isArrayOptionalText]=\"'(Optional)'\">\n                </oscal-array-properties>\n              </ion-col>\n\n            </ion-row>\n\n\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div>\n      <ion-buttons *ngIf=\"showAddCancelButtons\" class=\"even-ion-buttons bottomless\" color=\"warning\">\n        <ion-button (click)=\"onCancel()\" color=\"danger\"\n          title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n        </ion-button>\n        <ion-button [disabled]=\"!subForm.valid\" (click)=\"this.onSave()\" [color]=\"!subForm.valid?'dark':'success'\"\n          title=\"Press to {{actionName}} {{entityName}}\">\n          <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>{{this.getSaveButtonTitle()}}\n        </ion-button>\n      </ion-buttons><br *ngIf=\"showAddCancelButtons\" />\n    </div>\n\n  </form>\n\n</div>";

/***/ }),

/***/ 16424:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-map-roles/action-map-roles.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"tab-frame\">\n  <form [formGroup]=\"subForm\" (ngSubmit)=\"onSave()\">\n    <!-- The General Title of the Form -->\n    <br />\n    <!-- color=\"warning\" -->\n    <ion-title *ngIf=\"!hideTitle\" style=\"text-align: center;\">\n      <ion-icon icon=\"{{iconName}}\"></ion-icon>&nbsp;&nbsp;&nbsp;{{getActionFormTitle()}}\n    </ion-title>\n    <br *ngIf=\"showAddCancelButtons\" />\n\n    <ion-buttons *ngIf=\"showAddCancelButtons\" class=\"even-ion-buttons bottomless\" color=\"warning\">\n      <ion-button #topCancel (click)=\"onCancelButton()\" color=\"danger\"\n        title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n        <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n      </ion-button>\n      <ion-button #topSave [disabled]=\"!isValidForm()\" (click)=\"onSubmitData()\"\n        [color]=\"!isValidForm()?'dark':'success'\" title=\"Press to {{actionName}} {{entityName}}\">\n        <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>{{getSaveButtonTitle()}}\n      </ion-button>\n    </ion-buttons>\n\n    <div>\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-title centered> Select Role to Map (Below)</ion-title>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-title centered> Select Parties for Role<span *ngIf=\"!!chosenRoleId\"> [{{chosenRoleId}}]</span>\n              </ion-title>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <!-- [ngModelOptions]=\"{standalone: true}\" -->\n            <div>\n              <ion-radio-group #rolesRadio [(ngModel)]=\"this.chosenRoleId\" allow-empty-selection=\"true\"\n                name=\"radio-role\" (ionChange)=\"roleGroupChange($event)\" [ngModelOptions]=\"{standalone: true}\">\n                <ion-item *ngFor=\"let role of this.roles; let roleI = index;\">\n                  <ion-label>{{role.title}} [{{role.id}}] </ion-label>\n                  <ion-radio slot=\"start\" name=\"role.title\" [value]=\"role.id\">\n                  </ion-radio>\n                </ion-item>\n              </ion-radio-group>\n            </div>\n\n          </ion-col>\n          <ion-col>\n            <!--- [(ngModel)]=\"this.selectedActorsUUIDs\" [ngModelOptions]=\"{standalone: true}\" -->\n            <ion-list #actorsCheck value=\"role_index\" allow-empty-selection=\"false\" class=\"toppless bottomless\"\n              (ionChange)=\"actorSelectChange($event)\">\n              <ion-item *ngFor=\"let actor of this.actors; let act_i = index;\" class=\"toppless bottomless\">\n                <ion-label>{{actor.name}}</ion-label>\n                <ion-label>{{actor.uuid}}</ion-label>\n                <ion-checkbox slot=\"start\" [value]=\"actor.uuid\" (ionSelect)=\"actorSelectChange($event)\"\n                  [checked]=\"this.isCheckedActor(actor.uuid)\"></ion-checkbox>\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n\n              <ion-title style=\"text-align: center;\"> {{this.optionalLineOne()}}\n                <span *ngIf=\"!!this.optionalLineParties() || this.isValidForm()\">\n                  <br />{{this.optionalLineParties()}}</span>\n                <span *ngIf=\"!!this.chosenRoleId  || this.isValidForm()\">\n                  <br />Responsible for the Role of [{{chosenRoleId}}]</span>\n                <!-- \n                <span>\n                <br />Test::text={{getSelectedPartiesAsText()}} length={{this.selectedActorsUUIDs.length}}\n                  roleID={{this.chosenRoleId}} Is-Valid={{this.isValidForm()}}</span>\n                  -->\n              </ion-title>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Remarks -->\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Remarks for {{getSelectedPartiesAsText()}} (Optional)</ion-label>\n              <ion-textarea #remarksInput rows=\"6\" title=\"Remarks for the {{getSelectedPartiesAsText()}} go here\"\n                type=\"text\" [(ngModel)]=\"this.localResponsible.remarks\" [ngModelOptions]=\"{standalone: true}\">\n                <!-- [value]=\"this.localResponsible.remarks\"  -->\n              </ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Links -->\n        <ion-row>\n          <ion-col>\n            <oscal-array-links #linksArray [parentName]=\"getSelectedPartiesAsText()\"\n              [isArrayOptionalText]=\"'(Optional)'\" [linksArray]=\"this.localResponsible.links\">\n            </oscal-array-links>\n          </ion-col>\n        </ion-row>\n        <!-- Properties -->\n        <ion-row>\n          <ion-col>\n            <oscal-array-properties #propsArray [parentName]=\"getSelectedPartiesAsText()\"\n              [isArrayOptionalText]=\"'(Optional)'\" [propertiesArray]=\"this.localResponsible.props\">\n            </oscal-array-properties>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </div>\n\n    <!-- The Second set of Top Buttons-->\n    <ion-buttons *ngIf=\"showAddCancelButtons\" class=\"even-ion-buttons bottomless\" color=\"warning\">\n      <ion-button #bottomCancel (click)=\"onCancelButton()\" color=\"danger\"\n        title=\"Press to cancel changes to {{actionName}} {{entityName}}\">\n        <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n      </ion-button>\n      <ion-button #bottomSave [disabled]=\"!this.isValidForm()\" (click)=\"onSubmitData()\"\n        [color]=\"!isValidForm()?'dark':'success'\" title=\"Press to {{actionName}} {{entityName}}\">\n        <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>{{getSaveButtonTitle()}}\n      </ion-button>\n    </ion-buttons>\n\n    <br />\n  </form>\n</div>";

/***/ }),

/***/ 29585:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-party-info/action-party-info.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <div class=\"tab-frame\">\n    <div *ngIf=\"!!localForm\">\n      <form [formGroup]=\"localForm\" (ngSubmit)=\"onSubmitData()\">\n        <br />\n        <!-- color=\"warning\" -->\n        <ion-title *ngIf=\"!hideTitle\" style=\"text-align: center;\">\n          <ion-icon icon=\"{{iconName}}\"></ion-icon>&nbsp;&nbsp;&nbsp;{{getActionEntityTitle()}}\n        </ion-title>\n        <br />\n\n        <ion-buttons *ngIf=\"!!localForm\" class=\"even-ion-buttons\">\n          <ion-button (click)=\"onCancelButton()\" color=\"danger\" background=\"warning\"\n            title=\"Press to cancel changes to {{getActionEntityTitle()}}\">\n            <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n          </ion-button>\n          <ion-button [disabled]=\"!this.isSaveAllowed()\" (click)=\"onSubmitData()\"\n            [color]=\"!localForm.valid?'dark':'success'\" title=\"Press to {{actionName}} {{entryName}}\">\n            <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save {{getActualPartyName()}}\n            <!-- [color]=\"!localForm.valid?'dark':'success'\" color=\"success\" [class.button-crossR]=\"!localForm.valid\"-->\n          </ion-button>\n        </ion-buttons>\n\n        <ion-grid>\n\n          <!-- Entity Type for Person/Organization/Party -->\n          <ion-row class=\"justify-content-between topless \">\n            <ion-col class=\"justify-content-between topless \">\n              <ion-item style=\"text-align: center;\" class=\"justify-content-between topless bottomless spaceless\">\n                <ion-label style=\"width:10%; text-align:left\">Entity Type</ion-label>\n              </ion-item>\n\n\n              <ion-radio-group [value]=\"partyInfo.type\" class=\"justify-content-between topless bottomless spaceless\"\n                allow-empty-selection=\"false\" (ionChange)=\"typeChanged($event)\">\n                <ion-row class=\"justify-content-between topless bottomless spaceless\">\n\n                  <ion-col class=\"justify-content-between topless bottomless spaceless\">\n                    <ion-item>\n                      <ion-radio class=\"spaceless\" value=\"person\" (onChange)=\"typeChanged('person')\">\n                      </ion-radio>&nbsp;&nbsp;&nbsp;\n                      <ion-label class=\"spaceless\" position=\"fixed\" checked=\"true\">Person</ion-label>\n                      <ion-icon class=\"spaceless\" icon=\"body-outline\"></ion-icon>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col style=\"text-align: center;\" class=\"justify-content-between topless bottomless spaceless\">\n                    <ion-item>\n                      <ion-radio class=\"spaceless\" value=\"organization\" (onChange)=\"typeChanged('organization')\">\n                      </ion-radio>&nbsp;&nbsp;&nbsp;\n                      <ion-label class=\"spaceless\" position=\"fixed\">Organization</ion-label>\n                      <ion-icon class=\"spaceless\" icon=\"business-outline\"></ion-icon>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-radio-group>\n            </ion-col>\n          </ion-row>\n\n          <!-- Person/Organization/Party Name -->\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">{{entryName}} Name</ion-label>\n                <ion-input formControlName=\"partyName\" title=\"Name of the {{entryName}} goes here\" type=\"text\">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- UUID -->\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\"> UUID for {{getActualPartyName()}}</ion-label>\n                <ion-input formControlName=\"uuid\" title=\"Press Generate UUID or enter UUID of the {{entryName}}\"\n                  type=\"text\">\n                </ion-input>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"onAssignUUID()\" color=\"secondary\" slot=\"end\">\n                    <ion-icon slot=\"start\" icon=\"snow-outline\"></ion-icon>\n                    <span *ngIf=\"localForm.get('uuid').value\">Regenerate UUID</span>\n                    <span *ngIf=\"!localForm.get('uuid').value\">Generate UUID</span>\n                  </ion-button>\n                </ion-buttons>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <!-- Short Name -->\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"floating\">Short Name for {{getActualPartyName()}} (Optional)\n                </ion-label>\n                <ion-input formControlName=\"shortName\" title=\"Short name of the {{entryName}}  goes here\" type=\"text\">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <!-- Remarks -->\n              <ion-item>\n                <ion-label position=\"floating\">Remarks for {{getActualPartyName()}} (Optional)</ion-label>\n                <ion-textarea rows=\"6\" formControlName=\"remarks\" title=\"Remarks for the {{entryName}} goes here\"\n                  type=\"text\">\n                </ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <!--  Telephone Numbers  -->\n              <oscal-array-phones #phonesList [ID]=\"'phoneNumbers'\" [phonesArray]=\"this.partyInfo.telephoneNumbers\"\n                listTitle=\"Phone Numbers\" [parentEntity]=\"entryName\" [parentName]=\"getActualPartyName()\"\n                inputName=\"Phone\" [isArrayOptionalText]=\"'(Optional)'\">\n              </oscal-array-phones>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <!--  \"Emails\" [stringData]=\"['AA@a.com']\" -->\n              <oscal-array-string #emailsList [ID]=\"'emailAddresses'\" [stringData]=\"this.partyInfo.emailAddresses\"\n                listTitle=\"Emails\" [parentEntity]=\"entryName\" [parentName]=\"getActualPartyName()\" inputName=\"Email\"\n                [validateAs]=\"getEmailValidator()\" [isArrayOptionalText]=\"'(Optional)'\">\n              </oscal-array-string>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col>\n              <!--  Addresses -->\n              <oscal-address-list #addressList [addressList]=\"this.partyInfo.addresses\"\n                [entryName]=\"this.partyInfo.addresses\" [partyName]=\"getActualPartyName()\"\n                [isArrayOptionalText]=\"'(Optional)'\">\n              </oscal-address-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <!--  Organization memberships [stringData]=\"['AAA', 'BBB', 'AA']\" -->\n              <oscal-array-string #organizationsList [ID]=\"'topOrgs'\"\n                [stringData]=\"this.partyInfo.memberOfOrganizations\" listTitle=\"Organizations Memberships\"\n                [isArrayOptionalText]=\"'(Optional)'\" [parentEntity]=\"entryName\" [parentName]=\"getActualPartyName()\"\n                inputName=\"Membership\">\n              </oscal-array-string>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <!--  Links -->\n              <oscal-array-links #linksList [ID]=\"'topLinks'\" [linksArray]=\"this.partyInfo.links\" listTitle=\"Links\"\n                [parentEntity]=\"entryName\" [parentName]=\"getActualPartyName()\" inputName=\"Link\"\n                [isArrayOptionalText]=\"'(Optional)'\">\n              </oscal-array-links>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col>\n              <!--  Properties -->\n              <oscal-array-properties #propsList [ID]=\"'propsList'\" [propertiesArray]=\"this.partyInfo.props\"\n                listTitle=\"Properties\" [parentEntity]=\"entryName\" [parentName]=\"getActualPartyName()\"\n                inputName=\"Property\" [isArrayOptionalText]=\"'(Optional)'\">\n              </oscal-array-properties>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col>\n              <!--  Location UUIDs -->\n              <oscal-array-string #uuidsList [ID]=\"'topUUIDs'\" [stringData]=\"this.partyInfo.locationUuids\"\n                listTitle=\"Location UUIDs\" [parentEntity]=\"entryName\" [parentName]=\"getActualPartyName()\"\n                inputName=\"UUID\" [isArrayOptionalText]=\"'(Optional)'\">\n              </oscal-array-string>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <!--  External IDs -->\n              <oscal-external-ids #extIdsList [ID]=\"'extIds'\" [externalIDsArray]=\"this.partyInfo.externalIDS\"\n                listTitle=\"Party External IDs\" [parentEntity]=\"entryName\" [parentName]=\"getActualPartyName()\"\n                inputName=\"External ID\" [isArrayOptionalText]=\"'(Optional)'\">\n              </oscal-external-ids>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </form>\n      <ion-buttons class=\"even-ion-buttons\">\n        <ion-button (click)=\"onCancelButton()\" color=\"danger\"\n          title=\"Press to cancel changes to {{actionName}} {{entryName}}\">\n          <ion-icon slot=\"start\" icon=\"close-circle-outline\"></ion-icon>Cancel\n        </ion-button>\n        <ion-button [disabled]=\"!localForm.valid\" (click)=\"onSubmitData()\" [color]=\"!localForm.valid?'dark':'success'\"\n          title=\"Press to {{actionName}} {{entryName}}\">\n          <ion-icon slot=\"start\" icon=\"{{iconName}}\"></ion-icon>Save {{getActualPartyName()}}\n        </ion-button>\n      </ion-buttons>\n      <br />\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 73139:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-select-baseline/action-select-baseline.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <div style=\"border: 1px; width: 100%;\">\n\n    <ion-item>\n\n\n\n      <ion-grid>\n\n        <ion-row style=\"display: flex;justify-content: space-evenly;\" class=\"topless, bottomless\">\n          <ion-col>\n            <!-- <ion-item> </ion-item> -->\n\n            <ion-button (click)=\"flipShowBaselineOptions()\">\n              Baselines\n              <ion-icon icon=\"options-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n\n          <ion-col class=\"topless, bottomless\">\n\n            <ion-item *ngIf=\"this.showBaselinesOptions\" style=\"display: flex;justify-content: space-evenly;\">\n\n              <ion-buttons class=\"\" style=\"display: flex;justify-content: space-evenly;\" slot=\"start\">\n                <!-- Mark baselines -->\n                <ion-tab-button [ngClass]=\"'tab-selected'\" class=\"topless, bottomless\" (click)=\"this.setState(1)\">\n                  <ion-icon icon=\"brush-outline\" [color]=\"this.stateColor(1)\"></ion-icon>\n                  <ion-label class=\"topless, bottomless\" [color]=\"this.stateColor(1)\">{{ this.getTitle(1) }}</ion-label>\n                  <ion-badge *ngIf=\"this.isActive(1)\">Activate</ion-badge>\n                </ion-tab-button>\n\n                <!-- Pre-Check baseline -->\n                <ion-tab-button [ngClass]=\"'tab-selected'\" class=\"topless, bottomless\" (click)=\"this.setState(2)\">\n                  <ion-icon icon=\"checkmark\" [color]=\"this.stateColor(2)\"></ion-icon>\n                  <ion-label class=\"topless, bottomless\" [color]=\"this.stateColor(2)\">{{ this.getTitle(2) }}</ion-label>\n                  <ion-badge *ngIf=\"this.isActive(2)\">Activate</ion-badge>\n                </ion-tab-button>\n\n                <!-- Cut-Out baseline -->\n                <ion-tab-button [ngClass]=\"'tab-selected'\" class=\"topless, bottomless\" (click)=\"this.setState(3)\">\n                  <ion-icon icon=\"cut-outline\" [color]=\"this.stateColor(3)\"></ion-icon>\n                  <ion-label class=\"topless, bottomless\" [color]=\"this.stateColor(3)\">{{ this.getTitle(3) }}</ion-label>\n                  <ion-badge *ngIf=\"this.isActive(3)\">Activate</ion-badge>\n                </ion-tab-button>\n\n                <!-- Back to Cat -->\n                <ion-tab-button [ngClass]=\"'tab-selected'\" class=\"topless, bottomless\" (click)=\"this.setState(4)\">\n                  <ion-icon icon=\"list\" [color]=\"this.stateColor(4)\"></ion-icon>\n                  <ion-label class=\"topless, bottomless\" [color]=\"this.stateColor(4)\">{{ this.getTitle(4) }}</ion-label>\n                  <ion-badge *ngIf=\"this.isActive(4)\">Activate</ion-badge>\n                </ion-tab-button>\n              </ion-buttons>\n              <!-- <ion-item> </ion-item> -->\n              <ion-button (click)=\"processBaseline()\" color=\"warning\"\n                *ngIf=\"this.optionChosen() && this.showBaselinesOptions\">\n                {{ this.getTitle(this.formState) }}&nbsp;\n                <ion-icon [icon]=\"this.getIconForSelect()\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"this.showBaselines() && this.showBaselinesOptions\" class=\"topless, bottomless\">\n\n\n\n          <ion-col class=\"topless, bottomless\">\n            <ion-item>\n              <ion-list>\n                <ion-radio-group name=\"level\" value=\"low\" class=\"topless, bottomless\">\n                  <ion-row>\n                    <!--        \n                      <ion-col>     \n                        <ion-list-header>\n                          <ion-label>Risk Tolerance</ion-label>\n                        </ion-list-header>\n                      </ion-col>\n                    -->\n\n                    <ion-col>\n                      <ion-item>\n                        <ion-label>Low</ion-label>&nbsp;\n                        <ion-radio value=\"low\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n\n                    <ion-col>\n                      <ion-item>\n                        <ion-label>Medium</ion-label>&nbsp;\n                        <ion-radio value=\"medium\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col>\n                      <ion-item>\n                        <ion-label>High</ion-label>&nbsp;\n                        <ion-radio value=\"heigh\"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                </ion-radio-group>\n              </ion-list>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </div>\n</div>";

/***/ }),

/***/ 37809:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/all-components/action-commons/action-wait/action-wait.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"transparent-modal\">\n  <!-- style=\"height:54px;text-align: center;\" class=\"loading-modal\" loading-modal -->\n  <ion-item class=\"modal-title\">\n    <ion-title [color]=\"this.color\">{{title}}</ion-title>\n  </ion-item>\n  <ion-item>\n    <ion-img class=\"progress-bar\" src=\"./../../assets/images/loading.gif\">\n    </ion-img>\n  </ion-item>\n</div>";

/***/ }),

/***/ 73079:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/all-components/author-begin/author-begin.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-title>&nbsp;&nbsp;Select Authoring Mode</ion-title>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    Start new profile with a catalog, or continue previously saved session.\n                </ion-text>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</div>\n<br />\n<div>\n    <ion-radio-group (ionChange)=\"handleRadioChange($event)\">\n        <div *ngIf=\"true\">\n            <!-- Start with a new document (from scratch) -->\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-title>&nbsp;&nbsp;Start with a Known OSCAL Catalog</ion-title>\n                    </ion-col>\n                </ion-row>\n                <!--  onclick=\"this.popAlert(oscalFile.cat_suffix, itemIndex)\" -->\n                <ion-row *ngFor=\"let oscalFile of this.oscalFiles; let itemIndex = index\">\n                    <ion-col>\n                        <ion-item>\n                            <ion-radio value=\"{{itemIndex}}\">\n                            </ion-radio>&nbsp;&nbsp;&nbsp;&nbsp;\n                            <ion-label>{{oscalFile.cat_label}}</ion-label>\n                            <ion-item>\n                                <ion-label>Add</ion-label>\n                                <ion-item>\n                                    <ion-label icon=\"newspaper-outline\">Cat </ion-label>\n                                    <ion-checkbox slot=\"end\"></ion-checkbox>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label icon=\"newspaper-outline\">Profile </ion-label>\n                                    <ion-checkbox slot=\"end\"></ion-checkbox>\n                                </ion-item>\n                            </ion-item>\n                            <div>\n                            </div>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <br />\n        <div *ngIf=\"!this.newDraft && this.hasSavedWork()\">\n\n            <ion-grid *ngIf=\"this.savedWork && this.savedWork.length>0\">\n                <ion-row>\n                    <ion-col>\n                        <ion-title>&nbsp;&nbsp;Continue with the Previously Saved Work</ion-title>\n                    </ion-col>\n                </ion-row>\n                <!-- Continue working with the previously saved item(s) -->\n                <ion-row *ngFor=\"let workItem of this.savedWork; let savedIndex = index\">\n                    <ion-col>\n                        <ion-item>\n                            <ion-radio value=\"{{2+savedIndex}}\">\n                            </ion-radio>&nbsp;&nbsp;&nbsp;&nbsp;\n                            <ion-label>{{workItem.name}} [{{workItem.uuid}}]</ion-label>\n\n                            <ion-button [title]=\"'Press to remove '.concat(workItem.name)\" color=\"danger\"\n                                (click)=\"presentDeleteWarning($event,savedIndex)\">\n                                <ion-icon icon='trash-outline'></ion-icon>\n                            </ion-button>\n                            <ion-button [title]=\"'Press to edit '.concat(workItem.name)\"\n                                (click)=\"editWorkItemName($event,savedIndex)\" disabled=\"true\">\n                                <ion-icon icon='pencil-outline'></ion-icon>\n                            </ion-button>\n\n\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ion-radio-group>\n    <!--\n\n    <oscal-cat-controls #catControlsTab [ID]=\"'catControls'\" [controls]=\"[undefined]\" actionName=\"Add\"\n        iconName=\"location-outline\" parentName=\"Meta-Information\" inputName=\"Location\" [singleMode]=\"true\"\n        hideAddButton=\"true\" [hideAddElementButton]=\"true\" [showAddCancelButtons]=\"true\"\n        (closeTab)=\"cancelAddTab($event)\" (saveTab)=\"this.addEditLocation($event, false)\">\n    </oscal-cat-controls>\n    <oscal-cat-params></oscal-cat-params>\n\n\n\n -->\n</div>";

/***/ }),

/***/ 98522:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/all-components/authoring-mode/authoring-mode.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <ion-progress-bar [type]=\"undefined\" *ngIf=\"showLoader\"></ion-progress-bar>\n  <form>\n    <ion-radio-group [(ngModel)]=\"mode\" value=\"mode\" [disabled]=\"modeFormDone\" [ngModelOptions]=\"{standalone: true}\">\n      <ion-list-header>\n        Select Authoring Method ( Step 1 of 2 )\n      </ion-list-header>\n      <ion-grid>\n        <ion-row *ngFor=\"let choice of modeValues\">\n          <ion-col>\n            <ion-item [disabled]=\"!modeLabels[choice].on || modeFormDone\">\n              <ion-radio slot=\"start\" [value]=\"choice\" (click)=\"radioClick(choice)\">\n              </ion-radio>\n              <ion-label>{{modeLabels[choice].label}}</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button (click)=\"submitModeForm()\" [disabled]=\"modeFormDone\">\n              Select Authoring Method\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"submitReset()\" *ngIf=\"modeFormDone\">\n              Redo Method Selection (<< Back) </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-radio-group>\n  </form>\n</div>\n<div *ngIf=\"modeFormDone\">\n  <ion-list-header>\n    Select Authoring Method ( Step 2 of 2 )\n  </ion-list-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Selected Mode: </ion-label>\n          <ion-label>{{modeLabels[mode].label}} </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</div>";

/***/ }),

/***/ 3988:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/all-components/back-matter/back-matter.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  Back-Matter Here (After We Figure Out UI for IT)\n</p>\n";

/***/ }),

/***/ 57679:
/*!********************************************************************************!*\
  !*** ./src/app/pages/all-components/control/control.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <form [formGroup]=\"null\" (ngSubmit)=\"submitForm()\">\n\n\n  </form>\n</div>";

/***/ }),

/***/ 378:
/*!************************************************************************************!*\
  !*** ./src/app/pages/all-components/meta-info/meta-info.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <form [formGroup]=\"metaForm\" (ngSubmit)=\"submitForm()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-title>&nbsp;&nbsp;Metadata</ion-title>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            Provides information about the publication and availability of the containing document.\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Title\n            </ion-label>\n            <ion-input\n              title=\"Title is a name given to the document, which may be used by a tool for display and navigation. Title of the Catalog-Profile (e.g. Selected Controls for ABC)\"\n              formControlName=\"title\" type=\"text\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item button=\"true\">\n            <ion-label position=\"floating\">Last Modified Date</ion-label>\n            <ion-input formControlName=\"last_modified_string\" fill=\"clear\" id=\"open-last-modified\"></ion-input>\n\n            <ion-popover trigger=\"open-last-modified\" size=\"min\" show-backdrop=\"false\">\n              <ng-template>\n                <div slot=\"title\">Last Modified Date</div>\n                <ion-datetime #popoverDatetime presentation=\"date\" title=\"Select Last Modified Date Value\"\n                  (ionChange)=\"this.patchFormatDate(popoverDatetime.value)\" showDefaultButtons=\"true\"\n                  showDefaultTitle=\"true\">\n\n                </ion-datetime>\n              </ng-template>\n            </ion-popover>\n            <!--             \n\n#lastModifiedDate presentation=\"date\" formControlName=\"last_modified_date\" locale=\"en-US\"\n                  title=\"Choose Last Modified Date value or use controls on the top-right instead\"\n                  (ionChange)=\"this.patchFormatDate(lastModifiedDate.value)\" showDefaultButtons=\"true\"\n\n\n<div slot=\"title\">Last Modified Date</div>\n\n            <ion-datetime #popoverDatetime\n              title=\"Last Modified Date-Time (You can use controls on the right instead of typing)\" type=\"text\"\n              formControlName=\"last_modified\" displayFormat=\"MMM DD, YYYY HH:mm\">\n            </ion-datetime>\n\n            <ion-popover trigger=\"open-last-modified\" size=\"min\">\n              <ng-template>\n                <ion-datetime title=\"Last Modified Date-Time (You can use controls on the right instead of typing)\"\n                  presentation=\"date-time\" formControlName=\"last_modified\" locale=\"en-US\"></ion-datetime>\n              </ng-template>\n            </ion-popover>\n            -->\n\n            <ion-buttons slot=\"end\">\n              <ion-button title=\"Sets 'Last Modified' Value to Present Date-Time\" (click)=\"setTimeToNow()\">\n                <ion-icon slot=\"start\" name=\"stopwatch-outline\"></ion-icon>Set to Now\n              </ion-button>\n              <ion-button title=\"Auto-Updates Last Modified at Save Time\" (click)=\"autoUpdateLater()\">\n                <ion-icon *ngIf=\"!autoUpdateDates\" slot=\"start\" name=\"calendar-outline\"></ion-icon>\n                <ion-icon *ngIf=\"autoUpdateDates\" [color]=\"getAutoUpdateColor()\" slot=\"start\"\n                  name=\"checkmark-done-outline\"></ion-icon>\n                <span *ngIf=\"!autoUpdateDates\">Set Auto-Update Later</span>\n                <span *ngIf=\"autoUpdateDates\">Auto-Update is Set</span>\n              </ion-button>\n            </ion-buttons>\n          </ion-item>\n\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Catalog Version</ion-label>\n            <ion-input title=\"Catalog Version (e.g. 1.0 or 1.1.2)\" type=\"text\" formControlName=\"version\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">OSCAL Version</ion-label>\n            <ion-input title=\"OSCAL Version (e.g. 1.0.0-rc2 or 1.0.0 )\" type=\"text\" formControlName=\"oscalVersion\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col *ngIf=\"!hasPredefinedRolesAlready()\" offset=\"offsetSm\">\n          <ion-tab-button (click)=\"appendDefaultRoles()\" title=\"Press this button to add predefined authoring roles\">\n            <ion-icon icon=\"person-add-outline\" color=\"success\"></ion-icon>\n            <ion-label>Add all predefined roles</ion-label>\n          </ion-tab-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n    <!-- !!!!!!!!!!!! End of the Mandatory Fields !!!!!!!!!!!! -->\n\n    <hr>\n    <!-- Parties/Roles/Maps that were already entered -->\n    <ion-grid *ngIf=\" haveParties() || haveRoles() \">\n      <ion-row>\n        <!-- Column for parties -->\n        <ion-col>\n          <ion-label *ngIf=\"!haveParties()\">\n            No Parties (Optional)\n          </ion-label>\n          <div *ngIf=\"haveParties()\">\n            <ion-list>\n              <ion-list-header>\n                Parties [{{metaInfo.parties.length}}]\n              </ion-list-header>\n              <!-- let entryInfo of subArray.controls; let i=index;  {{party.uuid}}-->\n              <div *ngFor=\"let party of this.metaInfo.parties;\">\n                <ion-item>\n                  <ion-icon [icon]=\"party.type==='person'?'body-outline':'business-outline'\"></ion-icon>\n                  &nbsp;&nbsp;&nbsp;\n                  <ion-label class=\"ion-text-wrap fixed-width-text\">{{party.name}}<br /> </ion-label>\n                  <ion-button [title]=\"'Press to remove '.concat(party.type, ' ', party.name)\" color=\"danger\"\n                    (click)=\"removeParty($event,party)\">\n                    <ion-icon icon='trash-outline'></ion-icon>\n                  </ion-button>\n                  <ion-button [title]=\"'Press to edit '.concat(party.type, ' ', party.name)\"\n                    (click)=\"startPartyEdit($event,party)\">\n                    <ion-icon icon='pencil-outline'></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n        </ion-col>\n        <!-- Column for Roles -->\n        <ion-col>\n          <div *ngIf=\"!haveRoles()\">\n            No Roles (Optional)\n          </div>\n          <div *ngIf=\"haveRoles()\">\n            <ion-list>\n              <ion-list-header>\n                Roles [{{metaInfo.roles.length}}]\n              </ion-list-header>\n              <!-- let entryInfo of subArray.controls; let i=index;  {{party.uuid}}-->\n              <div *ngFor=\"let role of this.metaInfo.roles;\">\n                <ion-item>\n                  <ion-icon icon=\"people-outline\"></ion-icon>\n                  &nbsp;&nbsp;&nbsp;\n                  <ion-label class=\"ion-text-wrap fixed-width-text\">{{role.title}} [{{role.id}}]</ion-label>\n                  <ion-button *ngIf=\"!isPresetRole(role)\"\n                    [title]=\"'Press to remove '.concat(role.title, ' with ID:', role.id)\" color=\"danger\"\n                    (click)=\"removeRole($event,role)\">\n                    <ion-icon icon='trash-outline'></ion-icon>\n                  </ion-button>\n                  <ion-button [title]=\"'Press to edit Role '.concat(role.title, ' with ID:', role.id)\"\n                    (click)=\"startRoleEdit($event,role)\">\n                    <ion-icon icon='pencil-outline'></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n        </ion-col>\n\n      </ion-row>\n      <!-- The place for the EDITING controls -->\n      <ion-row class=\"tab-cell-row\">\n        <ion-col class=\"tab-cell-row\">\n\n          <!-- EDITING PARTY={Person | Organization} -->\n          <div *ngIf=\"isEditingParty()\" class=\"tab-cell-row-framed\">\n            <oscal-act-party-info #entityTab [isModal]=\"false\" [createNew]=\"false\" [hideTitle]=\"false\"\n              [partyInfo]=\"currentEditedParty\" [entryName]=\"currentEditedParty.name\" actionName=\"Adding\"\n              [theParent]=\"this\" (saveTab)=\"saveEditedParty($event)\" (closeTab)=\"cancelEditTab($event)\">\n            </oscal-act-party-info>\n          </div>\n\n          <!-- EDITING Role={Built-In | Custom} -->\n          <div *ngIf=\"isEditingRole()\" class=\"tab-cell-row-framed\">\n            <oscal-array-roles #roleTab [rolesArray]=\"[currentEditedRole]\" [singleMode]=\"true\"\n              parentEntity=\"Meta-Information\" listTitle=\"Role\" inputName=\"Role\" hideAddButton=\"true\" actionName=\"Edit\"\n              [iconName]=\"'people-outline'\" [hideAddElementButton]=\"true\" [showAddCancelButtons]=\"true\"\n              (saveTab)=\"saveEditedRole($event)\" (closeTab)=\"cancelEditTab($event)\"\n              [isPresetRole]=\"isPresetRole(currentEditedRole)\">\n            </oscal-array-roles>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <!-- This is the beginning of the dynamic controls and data-driven layouts -->\n    <ng-template #appAddressHost appAddEditInfo></ng-template>\n\n    <ion-grid class=\"topless bottomless\">\n      <ion-row class=\"justify-content-between topless bottomless\">\n        <ion-col class=\"topless, bottomless\">\n          <ion-toolbar class=\"topless, bottomless\">\n            <ion-buttons class=\"\" style=\"display: flex;justify-content: space-evenly;\">\n\n              <ion-tab-button [ngClass]=\"{'tab-selected' : isPartyTabActive()}\"\n                (click)=\"showTab4POoP($event,'Person', 'body-outline')\">\n                <ion-icon icon=\"beer-outline\"></ion-icon>\n                <ion-label>Add Party</ion-label>\n                <ion-badge *ngIf=\"activeEntityAddTabName=='Person'\">Adding Entity</ion-badge>\n              </ion-tab-button>\n\n              <ion-tab-button [ngClass]=\"{'tab-selected' : activeEntityAddTabName=='Role'}\"\n                (click)=\"showTab4AddRole($event,'Role', 'people-outline')\">\n                <ion-icon icon=\"people-outline\"></ion-icon>\n                <ion-label>Add Role</ion-label>\n                <ion-badge *ngIf=\"activeEntityAddTabName=='Role'\">Adding Role</ion-badge>\n              </ion-tab-button>\n\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n      <!-- The place for the ADDING UI-controls -->\n      <ion-row class=\"tab-cell-row\">\n        <ion-col class=\"tab-cell-row\">\n          <!-- Hidden the dynamic UI Pop-Up-->\n          <div class=\"tab-cell-row-hidden\">\n            <ng-template #addEditData appAddEditInfo></ng-template>\n          </div>\n          <div *ngIf=\"isPartyTabActive()\" class=\"tab-cell-row-framed\">\n            <oscal-act-party-info #entityTab [isModal]=\"false\" [createNew]=\"true\" [hideTitle]=\"false\"\n              [partyInfo]=\"currentEmptyParty\" [iconName]=\"currentPartyIcon\" [entryName]=\"currentPartyName\"\n              actionName=\"Adding\" [theParent]=\"this\" (saveTab)=\"addPOoP($event)\" (closeTab)=\"cancelAddTab($event)\">\n            </oscal-act-party-info>\n          </div>\n          <div *ngIf=\"'Role' === activeEntityAddTabName\" class=\"tab-cell-row-framed\">\n            <oscal-array-roles #roleTab [rolesArray]=\"[undefined]\" [singleMode]=\"true\" parentEntity=\"Meta-Information\"\n              listTitle=\"Role\" inputName=\"Role\" hideAddButton=\"true\" actionName=\"Add\" [iconName]=\"'people-outline'\"\n              [hideAddElementButton]=\"true\" [showAddCancelButtons]=\"true\" (saveTab)=\"addRole($event)\"\n              (closeTab)=\"cancelAddTab($event)\">\n            </oscal-array-roles>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Responsible parties standalone layout -->\n    <!-- Parties/Roles/Maps that were already entered -->\n    <!-- haveParties() || haveRoles() ||  -->\n    <hr>\n    <ion-grid *ngIf=\" haveResponsible() \">\n      <ion-row>\n        <!-- Column for Responsible Parties -->\n        <ion-col>\n          <div *ngIf=\"!haveResponsible()\">\n            No Responsible Parties (Optional)\n          </div>\n          <div *ngIf=\"haveResponsible()\">\n            <ion-list>\n              <ion-list-header>\n                Responsible Parties [{{metaInfo.responsibleParties.length}}]\n              </ion-list-header>\n              <div *ngFor=\"let party of this.metaInfo.responsibleParties;\">\n                <ion-item>\n                  <ion-icon icon=\"share-social-outline\"></ion-icon>\n                  &nbsp;&nbsp;&nbsp;\n                  <ion-label class=\"ion-text-wrap fixed-width-text\">{{party.roleID}} [{{party.partyUuids.length}}]\n                    <ion-icon icon=\"swap-horizontal-outline\"></ion-icon>\n                    {{this.getSelectedPartiesAsText(party.partyUuids)}}\n                  </ion-label>\n                  <ion-button [title]=\"'Press to remove mapping for Responsible Party: '.concat(party.roleID)\"\n                    color=\"danger\" (click)=\"removeResponsibleParty($event,party)\">\n                    <ion-icon icon='trash-outline'></ion-icon>\n                  </ion-button>\n                  <ion-button [title]=\"'Press to edit Responsible Party with '.concat(' Role ID:', party.roleID)\"\n                    (click)=\"startRespPartyEdit($event,party)\">\n                    <ion-icon icon='pencil-outline'></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- The place for the EDITING controls -->\n      <ion-row class=\"tab-cell-row\">\n        <ion-col class=\"tab-cell-row\">\n          <!-- EDITING ResponsibleParty={Built-In | Custom} -->\n          <div *ngIf=\"isEditingRespParty()\" class=\"tab-cell-row-framed\">\n            <oscal-map-roles #respPartyTab [responsibleParty]=\"this.currentEditedRespParty\"\n              [roles]=\"this.metaInfo.roles\" [actors]=\"this.metaInfo.parties\" [singleMode]=\"true\"\n              parentEntity=\"Meta-Information\" listTitle=\"Responsible Party\" inputName=\"Responsible Party\"\n              hideAddButton=\"true\" actionName=\"Edit\" [iconName]=\"'share-social-outline'\" [hideAddElementButton]=\"true\"\n              [showAddCancelButtons]=\"true\" (saveTab)=\"saveEditedResponsibleParty($event)\"\n              (closeTab)=\"cancelEditTab($event)\">\n            </oscal-map-roles>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <!-- This is the beginning of the dynamic controls and data-driven layouts -->\n    <ion-grid class=\"topless bottomless\">\n      <ion-row class=\"justify-content-between topless bottomless\">\n        <ion-col class=\"topless, bottomless\">\n          <ion-toolbar class=\"topless, bottomless\">\n            <ion-buttons class=\"\" style=\"display: flex;justify-content: space-evenly;\">\n\n              <ion-tab-button [ngClass]=\"{'tab-selected' : isAddMapTabActive() }\"\n                (click)=\"showAddMap($event,'Responsible Party', 'share-social-outline')\" [disabled]=\"!isReadyToMap()\">\n                <ion-icon icon=\"share-social-outline\"></ion-icon>\n                <ion-label>Add Responsible Party</ion-label>\n                <ion-badge *ngIf=\"isAddMapTabActive()\">Adding R.P.</ion-badge>\n              </ion-tab-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n      <!-- The place for the ADDING controls -->\n      <ion-row class=\"tab-cell-row\">\n        <ion-col class=\"tab-cell-row\">\n          <!-- Hidden the dynamic UI Pop-Up-->\n          <div class=\"tab-cell-row-hidden\">\n            <ng-template #addEditData appAddEditInfo></ng-template>\n          </div>\n          <!-- Adding Responsible Party -->\n          <div *ngIf=\"isAddMapTabActive()\" class=\"tab-cell-row-framed\">\n            <oscal-map-roles #roleTab [roles]=\"this.metaInfo.roles\" [actors]=\"this.metaInfo.parties\" [singleMode]=\"true\"\n              parentEntity=\"Meta-Information\" listTitle=\"Responsible Party\" inputName=\"Responsible Party\"\n              hideAddButton=\"true\" actionName=\"Add\" [iconName]=\"'share-social-outline'\" [hideAddElementButton]=\"true\"\n              [showAddCancelButtons]=\"true\" (saveTab)=\"addResponsibleParty($event)\" (closeTab)=\"cancelAddTab($event)\">\n            </oscal-map-roles>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <!-- Existing Entities  haveDocIds() || haveProperties() || haveLinks() || haveLocations()  -->\n    <hr />\n    <ion-grid *ngIf=\" haveDocIds() || haveProperties() \">\n      <ion-row>\n        <!-- Doc-Id Entities List -->\n        <ion-col>\n          <ion-label *ngIf=\"!this.haveDocIds()\">\n            No Doc. IDs (Optional)\n          </ion-label>\n\n          <div *ngIf=\"this.haveDocIds()\">\n            <ion-list>\n              <ion-list-header>\n                Document IDs [{{metaInfo.documentIDS.length}}]\n              </ion-list-header>\n              <!-- let entryInfo of subArray.controls; let i=index;  {{party.uuid}}-->\n              <div *ngFor=\"let doc of this.metaInfo.documentIDS;\">\n                <ion-item>\n                  <ion-icon icon=\"information-circle-outline\"></ion-icon>\n                  &nbsp;&nbsp;&nbsp;\n                  <ion-label class=\"ion-text-wrap fixed-width-text\">{{doc.identifier}}<br /> </ion-label>\n                  <ion-button [title]=\"'Press to remove '.concat(doc.identifier, ' ', doc.scheme)\" color=\"danger\"\n                    (click)=\"removeDocId($event,doc)\">\n                    <ion-icon icon='trash-outline'></ion-icon>\n                  </ion-button>\n                  <ion-button [title]=\"'Press to edit '.concat(doc.identifier, ' ', doc.scheme)\"\n                    (click)=\"startDocIdEdit($event,doc)\">\n                    <ion-icon icon='pencil-outline'></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n        </ion-col>\n\n        <!-- Properties Entities List -->\n        <ion-col>\n          <ion-label *ngIf=\"!this.haveProperties()\">\n            No Properties (Optional)\n          </ion-label>\n          <div *ngIf=\"this.haveProperties()\">\n            <ion-list>\n              <ion-list-header>\n                Properties [{{this.metaInfo.props.length}}]\n              </ion-list-header>\n              <!-- let entryInfo of subArray.controls; let i=index;  {{party.uuid}}-->\n              <div *ngFor=\"let prop of this.metaInfo.props;\">\n                <ion-item>\n                  <ion-icon icon=\"pricetags-outline\"></ion-icon>\n                  &nbsp;&nbsp;&nbsp;\n                  <ion-label class=\"ion-text-wrap fixed-width-text\">{{prop.name}} = {{prop.value}} </ion-label>\n                  <ion-button [title]=\"'Press to remove '.concat(prop.name, '=', prop.value)\" color=\"danger\"\n                    (click)=\"this.removeProperty($event,prop)\">\n                    <ion-icon icon='trash-outline'></ion-icon>\n                  </ion-button>\n                  <ion-button [title]=\"'Press to edit '.concat(prop.name, ' = ', prop.value)\"\n                    (click)=\"startPropertyEdit($event,prop)\">\n                    <ion-icon icon='pencil-outline'></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Doc-ID & Property -->\n\n    <ion-grid>\n      <ion-row class=\"topless bottomless\">\n        <ion-col class=\"topless bottomless\">\n          <ion-toolbar class=\"topless bottomless\">\n            <ion-buttons class=\"topless bottomless\" style=\"display: flex;justify-content: space-evenly;\">\n              <!-- Adding Document ID -->\n              <!-- (click)=\"modalPOoP('Document ID', 'information-circle-outline')\" -->\n              <ion-tab-button [ngClass]=\"{'tab-selected' : activeEntityAddTabName=='DocID'}\"\n                (click)=\"showMetaLink($event, 'DocID', 'information-circle-outline')\">\n                <ion-icon icon=\"information-circle-outline\"></ion-icon>\n                <ion-label>Add Document ID</ion-label>\n                <ion-badge *ngIf=\"activeEntityAddTabName=='DocID'\">Adding Doc. ID</ion-badge>\n              </ion-tab-button>\n              <!-- Adding Property -->\n              <ion-tab-button [ngClass]=\"{'tab-selected' : activeEntityAddTabName=='Property'}\"\n                (click)=\"showMetaLink($event, 'Property', 'information-circle-outline')\">\n                <ion-icon icon=\"pricetags-outline\"></ion-icon>\n                <ion-label>Add Property</ion-label>\n                <ion-badge *ngIf=\"activeEntityAddTabName=='Property'\">Adding Property</ion-badge>\n              </ion-tab-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n      <!-- The controls for editing separate entries (second row) -->\n      <ion-row class=\"tab-cell-row\">\n        <ion-col class=\"tab-cell-row\">\n          <div *ngIf=\"'DocID' === activeEntityAddTabName\" class=\"tab-cell-row-framed\">\n            <oscal-array-document-ids #propertyTab [ID]=\"'docId'\" [idArray]=\"[undefined]\" [singleMode]=\"true\"\n              parentEntity=\"Meta-Information\" listTitle=\"Document ID\" inputName=\"Document ID\" hideAddButton=\"true\"\n              (closeTab)=\"cancelAddTab($event)\" [hideAddElementButton]=\"true\" [showAddCancelButtons]=\"true\"\n              (saveTab)=\"this.addEditDocID($event, false)\">\n            </oscal-array-document-ids>\n          </div>\n          <div *ngIf=\"'Property' === activeEntityAddTabName\" class=\"tab-cell-row-framed\">\n            <oscal-array-properties #propertyTab [ID]=\"'metaProperty'\" [propertiesArray]=\"[undefined]\"\n              listTitle=\"Property\" actionName=\"Add\" iconName=\"pricetags-outline\" parentEntity=\"Meta-Information\"\n              inputName=\"Property\" [singleMode]=\"true\" hideAddButton=\"true\" (closeTab)=\"cancelAddTab($event)\"\n              [hideAddElementButton]=\"true\" [showAddCancelButtons]=\"true\"\n              (saveTab)=\"this.addEditProperty($event, false)\">\n            </oscal-array-properties>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <!-- Existing Entities  haveDocIds() || haveProperties() || haveLinks() || haveLocations()  -->\n    <hr />\n    <ion-grid *ngIf=\" haveLinks() || haveLocations() \">\n      <ion-row>\n        <!-- Links Entities List -->\n        <ion-col>\n          <ion-label *ngIf=\"!this.haveLinks()\">\n            No Links (Optional)\n          </ion-label>\n          <div *ngIf=\"this.haveLinks()\">\n            <ion-list>\n              <ion-list-header>\n                Links [{{this.metaInfo.links.length}}]\n              </ion-list-header>\n              <!-- let entryInfo of subArray.controls; let i=index;  {{party.uuid}}-->\n              <div *ngFor=\"let link of this.metaInfo.links;\">\n                <ion-item>\n                  <ion-icon icon=\"link-outline\"></ion-icon>\n                  &nbsp;&nbsp;&nbsp;\n                  <ion-label class=\"ion-text-wrap fixed-width-text\">{{link.href}}</ion-label>\n                  <ion-button [title]=\"'Press to remove link'.concat(link.href)\" color=\"danger\"\n                    (click)=\"this.removeLink($event,link)\">\n                    <ion-icon icon='trash-outline'></ion-icon>\n                  </ion-button>\n                  <ion-button [title]=\"'Press to edit link '.concat(link.href)\" (click)=\"startLinkEdit($event,link)\">\n                    <ion-icon icon='pencil-outline'></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n        </ion-col>\n\n        <!-- Locations Entities List -->\n        <ion-col>\n          <ion-label *ngIf=\"!this.haveLocations()\">\n            No Locations (Optional)\n          </ion-label>\n          <div *ngIf=\"this.haveLocations()\">\n            <ion-list>\n              <ion-list-header>\n                Locations [{{this.metaInfo.locations.length}}]\n              </ion-list-header>\n              <!-- let entryInfo of subArray.controls; let i=index;  {{party.uuid}}-->\n              <div *ngFor=\"let location_info of this.metaInfo.locations;\">\n                <ion-item>\n                  <ion-icon icon=\"location-outline\"></ion-icon>\n                  &nbsp;&nbsp;&nbsp;\n                  <ion-label class=\"ion-text-wrap fixed-width-text\">{{location_info.uuid}}</ion-label>\n                  <ion-button [title]=\"'Press to remove location: '.concat(location_info.title)\" color=\"danger\"\n                    (click)=\"this.removeLocation($event, location_info)\">\n                    <ion-icon icon='trash-outline'></ion-icon>\n                  </ion-button>\n                  <ion-button [title]=\"'Press to edit location: '.concat(location_info.title)\"\n                    (click)=\"startLocationEdit($event,location_info)\">\n                    <ion-icon icon='pencil-outline'></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-list>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Link & Location -->\n    <ion-grid>\n      <ion-row class=\"topless bottomless\">\n        <ion-col class=\"topless bottomless\">\n          <ion-toolbar class=\"topless bottomless\">\n            <ion-buttons class=\"topless bottomless\" style=\"display: flex;justify-content: space-evenly;\">\n              <!-- Adding Link Element-->\n              <ion-tab-button [ngClass]=\"{'tab-selected' : activeEntityAddTabName=='Link'}\"\n                (click)=\"showMetaLink($event, 'Link', 'link-outline')\">\n                <ion-label>Add Link</ion-label>\n                <ion-icon icon=\"link-outline\"></ion-icon>\n                <ion-badge *ngIf=\"activeEntityAddTabName=='Link'\">Adding Link</ion-badge>\n              </ion-tab-button>\n              <!-- Adding Location-->\n              <!-- (click)=\"modalPOoP('Location', 'location-outline')\" -->\n              <ion-tab-button [ngClass]=\"{'tab-selected' : activeEntityAddTabName=='Location'}\"\n                (click)=\"showMetaLink($event, 'Location', 'location-outline')\">\n                <ion-icon icon=\"location-outline\"></ion-icon>\n                <ion-label>Add Location</ion-label>\n                <ion-badge *ngIf=\"activeEntityAddTabName=='Location'\">Adding Location</ion-badge>\n              </ion-tab-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n      <!-- UI-controls for EDITING separate entry of Link OR Location (second row in this layout) -->\n      <ion-row class=\"tab-cell-row\">\n        <ion-col class=\"tab-cell-row\">\n          <div *ngIf=\"'Link' === activeEntityAddTabName\" class=\"tab-cell-row-framed\">\n            <!--  formArrayName=\"Links\" -->\n            <!-- UI-controls for EDITING separate entry of Link (first column/second row in this layout) -->\n            <oscal-array-links #linkTab [ID]=\"'metaLinks'\" [linksArray]=\"this.metaInfo.links\" listTitle=\"Link\"\n              actionName=\"Add\" iconName=\"link-outline\" parentEntity=\"Meta-Information\" parentName=\"Meta-Information\"\n              inputName=\"Link\" [singleMode]=\"true\" hideAddButton=\"true\" [hideAddElementButton]=\"true\"\n              [showAddCancelButtons]=\"true\" (closeTab)=\"cancelAddTab($event)\"\n              (saveTab)=\"this.addEditLink($event, false)\">\n            </oscal-array-links>\n          </div>\n          <!-- UI-controls for EDITING separate entry of Location (second column/second row in this layout) -->\n          <div *ngIf=\"'Location' === activeEntityAddTabName\" class=\"tab-cell-row-framed\">\n            <oscal-location-info #locationTab [ID]=\"'metaLocation'\" [locationInfo]=\"this.metaInfo.locations\"\n              actionName=\"Add\" iconName=\"location-outline\" parentName=\"Meta-Information\" inputName=\"Location\"\n              [singleMode]=\"true\" hideAddButton=\"true\" [hideAddElementButton]=\"true\" [showAddCancelButtons]=\"true\"\n              (closeTab)=\"cancelAddTab($event)\" (saveTab)=\"this.addEditLocation($event, false)\">\n            </oscal-location-info>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</div>";

/***/ }),

/***/ 13964:
/*!********************************************************************************!*\
  !*** ./src/app/pages/all-components/nav-cat/nav-cat.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-fab vertical=\"top\" horizontal=\"end\">\n  <ion-buttons>\n\n    <ion-fab-button *ngIf=\"pageState && pageState.prev\" fill=\"outline\" (click)=\"prevPage()\"\n      [title]=\"this.getBackTitle()\" color=\"warning\" class=\"float\">\n      <ion-icon name=\"arrow-back-circle\"></ion-icon>\n    </ion-fab-button>\n\n    <!-- [disabled]=\"this.canMoveNext()\" -->\n    <ion-fab-button *ngIf=\"pageState && pageState.next\" fill=\"outline\" (click)=\"nextPage()\"\n      [title]=\"this.getNextTitle()\" background-color=\"var(--ion-color-navigation)\" class=\"float\">\n      <ion-icon name=\"arrow-forward-circle\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-buttons>\n</ion-fab>";

/***/ }),

/***/ 71874:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/all-components/select-families/select-families.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-title>Select Control Family :</ion-title>\n        <ion-select *ngIf=\"listStyle\" [(ngModel)]=\"selectedValue\" placeholder=\"Select Family\" interface=\"action-sheet\"\n          (ionChange)=\"selectionChange($event)\" selectedText=\"{{ selectedValue }}\">\n          <ion-select-option *ngFor=\"let item of selectItems\" value=\"{{ item.key }}\">\n            {{ item.key }}-{{ item.value }}\n          </ion-select-option>\n        </ion-select>\n        <ion-select *ngIf=\"!listStyle\" [(ngModel)]=\"selectedValue\" placeholder=\"Select Family\" interface=\"popover\"\n          (ionChange)=\"selectionChange($event)\" selectedText=\"{{ selectedValue }}\">\n          <ion-select-option *ngFor=\"let item of selectItems\" value=\"{{ item.key }}\">\n            {{ item.key }}-{{ item.value }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label *ngIf=\"familyLabel\" floating>{{ familyLabel }}</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-grid>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_all-components_components_module_ts.js.map