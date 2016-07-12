import { OnInit, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
export declare class FroalaCompnoent implements OnInit, OnDestroy {
    private el;
    froalaData: any;
    froalaOptions: any;
    model: EventEmitter<{}>;
    froalaArea: any;
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
