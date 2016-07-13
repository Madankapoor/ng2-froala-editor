import { OnInit } from "@angular/core";
export declare class MainComponent implements OnInit {
    text: string;
    editor1: any;
    editor2: any;
    froalaOptions: any;
    froalaOptions2: any;
    constructor();
    ngOnInit(): void;
    onFroalaModelChanged(event: any): void;
    onFroalaModelChanged2(event: any): void;
    onEditorInitialized(event?: any): void;
    onEditorInitialized2(event?: any): void;
    testComponent(): void;
}
