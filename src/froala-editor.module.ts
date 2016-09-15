import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FroalaEditorCompnoent } from './froala/froala.component';
// import { MainComponent } from './main/Main.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    FroalaEditorCompnoent
  ],
  declarations: [
    // MainComponent,
    FroalaEditorCompnoent
  ],
  bootstrap: [
    // MainComponent
  ],
  providers: [],
})
export class FroalaEditorModule { }
