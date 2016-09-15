import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from "@angular/core";
import { FroalaEditorModule } from "./froala-editor.module";

enableProdMode();
platformBrowserDynamic().bootstrapModule(FroalaEditorModule);
