import {Directive, ElementRef, Input, Output, EventEmitter} from '@angular/core';

declare var $: any;

@Directive({ 
  selector: '[froala]' 
})

export class FroalaDirective {

  @Input() froalaOptions: any;
  @Output() model = new EventEmitter();

  element: any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
    // this.froalaOptions = this.froalaOptions ? this.froalaOptions : {};

    $(this.element).froalaEditor(this.froalaOptions);
  }

  ngOnInit() {
    console.log(this.froalaOptions);
  }
  
}