import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TUI_SANITIZER} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./interceptors/jwt-interceptor";
import { GalleryStore } from "./stores/gallery-store";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [		
    AppComponent,
      
   ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,      
      HomeComponent      
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
  {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
  GalleryStore
],
  bootstrap: [AppComponent]
})
export class AppModule { }
