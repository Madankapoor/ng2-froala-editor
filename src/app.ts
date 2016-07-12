import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from "@angular/core";
import { MainComponent } from './main/Main.component';

if (process.env.ENV === 'production')
 {
   enableProdMode();
 }
bootstrap(MainComponent);
