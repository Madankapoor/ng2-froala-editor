import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FroalaEditorCompnoent } from './froala.component';

@NgModule({
  imports: [
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
