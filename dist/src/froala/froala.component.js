"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let FroalaEditorCompnoent_1;
let FroalaEditorCompnoent = FroalaEditorCompnoent_1 = class FroalaEditorCompnoent {
    constructor(el) {
        this.el = el;
        this.model = new core_1.EventEmitter();
        this.editorInitialized = new core_1.EventEmitter();
        this.isEditorInitialized = false;
    }
    ngOnInit() {
        FroalaEditorCompnoent_1.froalaEditorInstance = $(this.el.nativeElement).find("textarea");
        this.initListener();
        this.froalaOptions = this.froalaOptions ? this.froalaOptions : {};
        FroalaEditorCompnoent_1.froalaEditorInstance.froalaEditor(this.froalaOptions);
        if (this.isEditorInitialized && this.froalaData) {
            this.setContent();
        }
    }
    ngOnDestroy() {
        FroalaEditorCompnoent_1.froalaEditorInstance.off("froalaEditor.initialized");
        FroalaEditorCompnoent_1.froalaEditorInstance.off("froalaEditor.contentChanged");
    }
    initListener() {
        FroalaEditorCompnoent_1.froalaEditorInstance.on('froalaEditor.initialized', (e, editor) => {
            this.isEditorInitialized = true;
            this.getContent();
            this.editorInitialized.emit(null);
        });
        FroalaEditorCompnoent_1.froalaEditorInstance.on('froalaEditor.contentChanged', (e, editor) => {
            if (this.isEditorInitialized) {
                this.getContent();
            }
        });
    }
    setDefaultContent() {
        let content = "<p></p>";
        FroalaEditorCompnoent_1.froalaEditorInstance.froalaEditor('html.set', content);
        this.model.emit(content);
    }
    setContent() {
        FroalaEditorCompnoent_1.froalaEditorInstance.froalaEditor('html.set', this.froalaData);
    }
    getContent() {
        this.froalaContent = FroalaEditorCompnoent_1.froalaEditorInstance.froalaEditor('html.get', true);
        if (!this.froalaContent) {
            this.setDefaultContent();
        }
        else {
            this.model.emit(this.froalaContent);
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], FroalaEditorCompnoent.prototype, "froalaData", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], FroalaEditorCompnoent.prototype, "froalaOptions", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], FroalaEditorCompnoent.prototype, "model", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], FroalaEditorCompnoent.prototype, "editorInitialized", void 0);
FroalaEditorCompnoent = FroalaEditorCompnoent_1 = __decorate([
    core_1.Component({
        selector: 'froala',
        template: `<textarea></textarea>`
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], FroalaEditorCompnoent);
exports.FroalaEditorCompnoent = FroalaEditorCompnoent;
//# sourceMappingURL=froala.component.js.map