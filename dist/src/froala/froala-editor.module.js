"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var froala_component_1 = require("./froala.component");
var FroalaEditorModule = (function () {
    function FroalaEditorModule() {
    }
    return FroalaEditorModule;
}());
FroalaEditorModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    forms_1.FormsModule
                ],
                exports: [
                    froala_component_1.FroalaEditorComponent
                ],
                declarations: [
                    froala_component_1.FroalaEditorComponent
                ]
            },] },
];
FroalaEditorModule.ctorParameters = function () { return []; };
exports.FroalaEditorModule = FroalaEditorModule;
//# sourceMappingURL=froala-editor.module.js.map