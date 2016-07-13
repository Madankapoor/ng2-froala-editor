/// <reference path="../typings/globals/core-js/index.d.ts" />
declare module "src/froala/froala.component" {
    import { OnInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
    export class FroalaEditorCompnoent implements OnInit, OnDestroy {
        private el;
        froalaData: string;
        froalaOptions: any;
        model: EventEmitter<any>;
        editorInitialized: EventEmitter<any>;
        private static froalaEditorInstance;
        isEditorInitialized: Boolean;
        froalaContent: any;
        constructor(el: ElementRef);
        ngOnInit(): void;
        ngOnDestroy(): void;
        initListener(): void;
        setDefaultContent(): void;
        setContent(): void;
        getContent(): void;
        static getFroalaInstance(): any;
    }
}
declare module "ng2-froala-editor" {
    export * from "src/froala/froala.component";
}
