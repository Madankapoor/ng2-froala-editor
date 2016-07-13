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
  editor1: any;
  editor2: any;

  froalaOptions: any = {
    height: 300
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
    this.editor1 = FroalaEditorCompnoent.getFroalaInstance();
    this.editor1.on('froalaEditor.contentChanged', (e, editor) => {
      console.log("contentChanged");
    });
    console.log(this.editor1);
  }
  
  onEditorInitialized2(event?: any) {
    this.editor2 = FroalaEditorCompnoent.getFroalaInstance();
    console.log(this.editor2);
  }

  testComponent() {
    this.editor1.froalaEditor('codeView.toggle');
    this.editor2.froalaEditor('codeView.toggle');
  }

}