import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FroalaEditorComponent } from './froala.component';

@NgModule({
  imports: [
    FormsModule
  ],
  exports: [
    FroalaEditorComponent
  ],
  declarations: [
    FroalaEditorComponent
  ]
})
export class FroalaEditorModule { }
