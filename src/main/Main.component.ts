import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {FroalaCompnoent} from "../froala/froala.component";

declare var $: any;

@Component({
  selector: "main",
  templateUrl: "./main.html",
  directives: [FroalaCompnoent]
})

export class MainComponent implements OnInit{

  text: string = '<div>hey whatsup, we are testing froala editor</div>';

  froalaOptions: any = {
    charCounterCount: true
  };

  constructor() {
    
  }

  ngOnInit() {
    
  }
  
  onFroalaModelChanged(event: any) {
    console.log(event);
    setTimeout(() => {
      this.text = event;
    });
  }

}