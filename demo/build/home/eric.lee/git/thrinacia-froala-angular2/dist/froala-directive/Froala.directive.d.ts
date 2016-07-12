import { ElementRef, EventEmitter } from '@angular/core';
export declare class FroalaDirective {
    froalaOptions: any;
    model: EventEmitter<{}>;
    element: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
}
