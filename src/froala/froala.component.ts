import {Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'froala',
  template:`<textarea></textarea>`
})

export class FroalaEditorCompnoent implements OnInit, OnDestroy {

  @Input() froalaData: any;
  @Input() froalaOptions: any;
  @Output() model: EventEmitter<any> = new EventEmitter();
  @Output() editorInitialized: EventEmitter<any> = new EventEmitter();
  static froalaEditorInstance: any;
  isEditorInitialized: Boolean = false;
  froalaContent: any;

  constructor(private el: ElementRef) {
    
  }

  ngOnInit() { 
    FroalaEditorCompnoent.froalaEditorInstance = $(this.el.nativeElement).find("textarea");

    // Initialize the listeners for froala editors
    this.initListener();

    this.froalaOptions = this.froalaOptions ? this.froalaOptions : {};
    FroalaEditorCompnoent.froalaEditorInstance.froalaEditor(this.froalaOptions);  

    if (this.isEditorInitialized && this.froalaData) {
      this.setContent();
    } 
  }

  ngOnDestroy() { 
    FroalaEditorCompnoent.froalaEditorInstance.off("froalaEditor.initialized");
    FroalaEditorCompnoent.froalaEditorInstance.off("froalaEditor.contentChanged");
  }

  /**
   * Listen to initialized and content changed event
   */
  initListener() {
    FroalaEditorCompnoent.froalaEditorInstance.on('froalaEditor.initialized', (e, editor) => {
      this.isEditorInitialized = true;
      this.getContent();
      this.editorInitialized.emit(null);
    });

    FroalaEditorCompnoent.froalaEditorInstance.on('froalaEditor.contentChanged', (e, editor) => {
      if (this.isEditorInitialized) {
        this.getContent();
      }
    });
  }

  /**
   * Set <p></p> into the editor when the editor has empty content
   */
  setDefaultContent() {
    let content = "<p></p>";
    FroalaEditorCompnoent.froalaEditorInstance.froalaEditor('html.set', content);
    this.model.emit(content);
  }

  /**
   * Set html content from the @Input() data
   */
  setContent() {
    FroalaEditorCompnoent.froalaEditorInstance.froalaEditor('html.set', this.froalaData);
  }

  /**
   * Get content from the editor and update the @Output() model
   */
  getContent() {
    this.froalaContent = FroalaEditorCompnoent.froalaEditorInstance.froalaEditor('html.get', true);
    if (!this.froalaContent) {
      this.setDefaultContent();
    }
    else {
      this.model.emit(this.froalaContent);
    }
  }
}