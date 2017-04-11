"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FroalaEditorComponent = (function () {
    function FroalaEditorComponent(el) {
        this.el = el;
        this.model = new core_1.EventEmitter();
        this.editorInitialized = new core_1.EventEmitter();
        this.isEditorInitialized = false;
    }
    FroalaEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('froalaData') && this.isEditorInitialized) {
            if (changes.froalaData.currentValue != this.froalaContent) {
                this.setContent();
            }
        }
    };
    FroalaEditorComponent.prototype.ngOnInit = function () {
        FroalaEditorComponent.froalaEditorInstance = $(this.el.nativeElement).find("textarea");
        this.initListener();
        this.froalaOptions = this.froalaOptions ? this.froalaOptions : {};
        FroalaEditorComponent.froalaEditorInstance.froalaEditor(this.froalaOptions);
    };
    FroalaEditorComponent.prototype.ngOnDestroy = function () {
        FroalaEditorComponent.froalaEditorInstance.off("froalaEditor.initialized");
        FroalaEditorComponent.froalaEditorInstance.off("froalaEditor.contentChanged");
    };
    FroalaEditorComponent.prototype.initListener = function () {
        var _this = this;
        FroalaEditorComponent.froalaEditorInstance.on('froalaEditor.initialized', function (e, editor) {
            _this.isEditorInitialized = true;
            if (_this.froalaData) {
                _this.setContent();
            }
            _this.getContent();
            _this.editorInitialized.emit(null);
        });
        FroalaEditorComponent.froalaEditorInstance.on('froalaEditor.contentChanged', function (e, editor) {
            if (_this.isEditorInitialized) {
                _this.getContent();
            }
        });
    };
    FroalaEditorComponent.prototype.setDefaultContent = function () {
        var content = "<p></p>";
        FroalaEditorComponent.froalaEditorInstance.froalaEditor('html.set', content);
        this.model.emit(content);
    };
    FroalaEditorComponent.prototype.setContent = function () {
        FroalaEditorComponent.froalaEditorInstance.froalaEditor('html.set', this.froalaData);
    };
    FroalaEditorComponent.prototype.getContent = function () {
        this.froalaContent = FroalaEditorComponent.froalaEditorInstance.froalaEditor('html.get', true);
        if (!this.froalaContent) {
            this.setDefaultContent();
        }
        else {
            this.model.emit(this.froalaContent);
        }
    };
    FroalaEditorComponent.getFroalaInstance = function () {
        return FroalaEditorComponent.froalaEditorInstance;
    };
    return FroalaEditorComponent;
}());
FroalaEditorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'froala',
                template: "<textarea></textarea>"
            },] },
];
FroalaEditorComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
FroalaEditorComponent.propDecorators = {
    'froalaData': [{ type: core_1.Input },],
    'froalaOptions': [{ type: core_1.Input },],
    'model': [{ type: core_1.Output },],
    'editorInitialized': [{ type: core_1.Output },],
};
exports.FroalaEditorComponent = FroalaEditorComponent;
//# sourceMappingURL=froala.component.js.map