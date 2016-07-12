import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {FroalaEditorCompnoent} from "../froala/froala.component";

declare var require: any;
declare var $: any;

@Component({
  selector: "main",
  templateUrl: "./main.html",
  directives: [FroalaEditorCompnoent]
})

export class MainComponent implements OnInit {

  text: string = '<div>hey whatsup, we are testing froala editor</div>';

  froalaOptions: any = {
    charCounterCount: true
  };

  froalaOptions2: any = {
    charCounterCount: true
  };

  constructor() {

  }

  ngOnInit() {
    
  }
  
  onFroalaModelChanged(event: any) {
    setTimeout(() => {
      this.text = event;
    });
  }

  onFroalaModelChanged2(event: any) {
    setTimeout(() => {
      this.text = event;
    });
  }

  onEditorInitialized(event?: any) {
    console.log(FroalaEditorCompnoent.froalaEditorInstance);
  }
  
  onEditorInitialized2(event?: any) {
    console.log(FroalaEditorCompnoent.froalaEditorInstance);
  }

  testComponent() {
    console.log(FroalaEditorCompnoent.froalaEditorInstance);
  }

}