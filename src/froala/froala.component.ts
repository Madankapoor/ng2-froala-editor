import {Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'froala',
  template:`<textarea></textarea>`
})

export class FroalaEditorCompnoent implements OnInit, OnDestroy {

  @Input() froalaData: string;
  @Input() froalaOptions: any;
  @Output() model: EventEmitter<any> = new EventEmitter();
  @Output() editorInitialized: EventEmitter<any> = new EventEmitter();
  private static froalaEditorInstance: any;
  isEditorInitialized: Boolean = false;
  froalaContent: any;

  constructor(private el: ElementRef) {
    
  }

  ngOnChanges(changes) {
    if (changes.hasOwnProperty('froalaData') && this.isEditorInitialized) {
      if (changes.froalaData.currentValue != this.froalaContent) {
        this.setContent();
      }
    }
  }

  ngOnInit() { 
    FroalaEditorCompnoent.froalaEditorInstance = $(this.el.nativeElement).find("textarea");

    // Initialize the listeners for froala editors
    this.initListener();

    this.froalaOptions = this.froalaOptions ? this.froalaOptions : {};
    FroalaEditorCompnoent.froalaEditorInstance.froalaEditor(this.froalaOptions);
  }

  /**
   * When component destroys, unset the initialized and contentChanged event 
   */
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
      if (this.froalaData) {
        this.setContent();
      }
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

  /**
   * 
   * Returns a froalaEditorInstance that people can use to utilize the editor
   * @static
   * @returns [any] editor
   */
  static getFroalaInstance() {
    return FroalaEditorCompnoent.froalaEditorInstance;
  }
}