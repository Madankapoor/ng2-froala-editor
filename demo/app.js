webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var Main_component_1 = __webpack_require__(328);
	platform_browser_dynamic_1.bootstrap(Main_component_1.MainComponent);


/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	var froala_component_1 = __webpack_require__(329);
	var MainComponent = (function () {
	    function MainComponent() {
	        this.text = '<div>hey whatsup, we are testing froala editor</div>';
	        this.froalaOptions = {
	            height: 300
	        };
	        this.froalaOptions2 = {
	            charCounterCount: true
	        };
	    }
	    MainComponent.prototype.ngOnInit = function () {
	    };
	    MainComponent.prototype.onFroalaModelChanged = function (event) {
	        var _this = this;
	        setTimeout(function () {
	            _this.text = event;
	        });
	    };
	    MainComponent.prototype.onFroalaModelChanged2 = function (event) {
	        var _this = this;
	        setTimeout(function () {
	            _this.text = event;
	        });
	    };
	    MainComponent.prototype.onEditorInitialized = function (event) {
	        this.editor1 = froala_component_1.FroalaEditorCompnoent.getFroalaInstance();
	        this.editor1.on('froalaEditor.contentChanged', function (e, editor) {
	            console.log("contentChanged");
	        });
	        console.log(this.editor1);
	    };
	    MainComponent.prototype.onEditorInitialized2 = function (event) {
	        this.editor2 = froala_component_1.FroalaEditorCompnoent.getFroalaInstance();
	        console.log(this.editor2);
	    };
	    MainComponent.prototype.testComponent = function () {
	        this.editor1.froalaEditor('codeView.toggle');
	        this.editor2.froalaEditor('codeView.toggle');
	    };
	    MainComponent = __decorate([
	        core_1.Component({
	            selector: "main",
	            template: __webpack_require__(330),
	            directives: [froala_component_1.FroalaEditorCompnoent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MainComponent);
	    return MainComponent;
	}());
	exports.MainComponent = MainComponent;


/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(5);
	var FroalaEditorCompnoent = (function () {
	    function FroalaEditorCompnoent(el) {
	        this.el = el;
	        this.model = new core_1.EventEmitter();
	        this.editorInitialized = new core_1.EventEmitter();
	        this.isEditorInitialized = false;
	    }
	    FroalaEditorCompnoent.prototype.ngOnInit = function () {
	        FroalaEditorCompnoent.froalaEditorInstance = $(this.el.nativeElement).find("textarea");
	        this.initListener();
	        this.froalaOptions = this.froalaOptions ? this.froalaOptions : {};
	        FroalaEditorCompnoent.froalaEditorInstance.froalaEditor(this.froalaOptions);
	        if (this.isEditorInitialized && this.froalaData) {
	            this.setContent();
	        }
	    };
	    FroalaEditorCompnoent.prototype.ngOnDestroy = function () {
	        FroalaEditorCompnoent.froalaEditorInstance.off("froalaEditor.initialized");
	        FroalaEditorCompnoent.froalaEditorInstance.off("froalaEditor.contentChanged");
	    };
	    FroalaEditorCompnoent.prototype.initListener = function () {
	        var _this = this;
	        FroalaEditorCompnoent.froalaEditorInstance.on('froalaEditor.initialized', function (e, editor) {
	            _this.isEditorInitialized = true;
	            _this.getContent();
	            _this.editorInitialized.emit(null);
	        });
	        FroalaEditorCompnoent.froalaEditorInstance.on('froalaEditor.contentChanged', function (e, editor) {
	            if (_this.isEditorInitialized) {
	                _this.getContent();
	            }
	        });
	    };
	    FroalaEditorCompnoent.prototype.setDefaultContent = function () {
	        var content = "<p></p>";
	        FroalaEditorCompnoent.froalaEditorInstance.froalaEditor('html.set', content);
	        this.model.emit(content);
	    };
	    FroalaEditorCompnoent.prototype.setContent = function () {
	        FroalaEditorCompnoent.froalaEditorInstance.froalaEditor('html.set', this.froalaData);
	    };
	    FroalaEditorCompnoent.prototype.getContent = function () {
	        this.froalaContent = FroalaEditorCompnoent.froalaEditorInstance.froalaEditor('html.get', true);
	        if (!this.froalaContent) {
	            this.setDefaultContent();
	        }
	        else {
	            this.model.emit(this.froalaContent);
	        }
	    };
	    FroalaEditorCompnoent.getFroalaInstance = function () {
	        return FroalaEditorCompnoent.froalaEditorInstance;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
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
	    FroalaEditorCompnoent = __decorate([
	        core_1.Component({
	            selector: 'froala',
	            template: "<textarea></textarea>"
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], FroalaEditorCompnoent);
	    return FroalaEditorCompnoent;
	}());
	exports.FroalaEditorCompnoent = FroalaEditorCompnoent;


/***/ },

/***/ 330:
/***/ function(module, exports) {

	module.exports = "<h1>\n  Hey I am testing Froala Editor\n</h1>\n<froala [froalaOptions]=\"froalaOptions\" [froalaData]=\"text\" (model)=\"onFroalaModelChanged($event)\" (editorInitialized)=\"onEditorInitialized()\"></froala>\n<froala [froalaOptions]=\"froalaOptions2\" [froalaData]=\"text\" (model)=\"onFroalaModelChanged2($event)\" (editorInitialized)=\"onEditorInitialized2()\"></froala>\n\n<button (click)=\"testComponent()\">Component</button>";

/***/ }

});
//# sourceMappingURL=app.js.map