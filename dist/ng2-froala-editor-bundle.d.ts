/// <reference path="../typings/globals/core-js/index.d.ts" />
declare module "src/froala/froala.component" {
    import { OnInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
    export class FroalaEditorComponent implements OnInit, OnDestroy {
        private el;
        froalaData: string;
        froalaOptions: any;
        model: EventEmitter<any>;
        editorInitialized: EventEmitter<any>;
        private static froalaEditorInstance;
        isEditorInitialized: Boolean;
        froalaContent: any;
        constructor(el: ElementRef);
        ngOnChanges(changes: any): void;
        ngOnInit(): void;
        ngOnDestroy(): void;
        initListener(): void;
        setDefaultContent(): void;
        setContent(): void;
        getContent(): void;
        static getFroalaInstance(): any;
    }
}
declare module "src/froala/froala-editor.module" {
    export class FroalaEditorModule {
    }
}
declare module "ng2-froala-editor" {
    export { FroalaEditorComponent } from "src/froala/froala.component";
    export { FroalaEditorModule } from "src/froala/froala-editor.module";
}
