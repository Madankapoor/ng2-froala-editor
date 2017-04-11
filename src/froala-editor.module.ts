import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FroalaEditorComponent } from './froala/froala.component';
// import { MainComponent } from './main/Main.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    FroalaEditorComponent
  ],
  declarations: [
    // MainComponent,
    FroalaEditorComponent
  ],
  bootstrap: [
    // MainComponent
  ],
  providers: [],
})

export class FroalaEditorModule { 
  
}
