import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FroalaEditorCompnoent } from './froala.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    FroalaEditorCompnoent
  ],
  declarations: [
    FroalaEditorCompnoent
  ]
})
export class FroalaEditorModule { }
