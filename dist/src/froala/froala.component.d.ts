import { OnInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
export declare class FroalaEditorCompnoent implements OnInit, OnDestroy {
    private el;
    froalaData: any;
    froalaOptions: any;
    model: EventEmitter<any>;
    editorInitialized: EventEmitter<any>;
    static froalaEditorInstance: any;
    isEditorInitialized: Boolean;
    froalaContent: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initListener(): void;
    setDefaultContent(): void;
    setContent(): void;
    getContent(): void;
}
