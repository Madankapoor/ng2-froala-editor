import {Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'froala',
  template:`<textarea></textarea>`
})

export class FroalaCompnoent implements OnInit, OnDestroy {

  @Input() froalaData: any;
  @Input() froalaOptions: any;
  @Output() model = new EventEmitter();
  froalaArea: any;
  isEditorInitialized: Boolean = false;
  froalaContent: any;

  constructor(private el: ElementRef) {
    
  }

  ngOnInit() { 
    this.froalaArea = $(this.el.nativeElement).find("textarea");
    this.initListener();

    this.froalaOptions = this.froalaOptions ? this.froalaOptions : {};
    this.froalaArea.froalaEditor(this.froalaOptions);  

    if (this.isEditorInitialized && this.froalaData) {
      this.setContent();
    } 
  }

  ngOnDestroy() { 
    this.froalaArea.off("froalaEditor.initialized");
    this.froalaArea.off("froalaEditor.contentChanged");
  }

  initListener() {
    this.froalaArea.on('froalaEditor.initialized', (e, editor) => {
      this.isEditorInitialized = true;
      this.getContent();
    });

    this.froalaArea.on('froalaEditor.contentChanged', (e, editor) => {
      if (this.isEditorInitialized) {
        this.getContent();
      }
    });
  }

  setDefaultContent() {
    let content = "<p></p>";
    this.froalaArea.froalaEditor('html.set', content);
  }

  setContent() {
    this.froalaArea.froalaEditor('html.set', this.froalaData);
  }

  getContent() {
    this.froalaContent = this.froalaArea.froalaEditor('html.get', true);
    if (!this.froalaContent) {
      this.setDefaultContent();
    }
    else {
      this.model.emit(this.froalaContent);
    }
  }
}