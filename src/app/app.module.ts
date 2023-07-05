import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChisteComponent } from './chiste/chiste.component';
import { SobreRamsesComponent } from './sobre-ramses/sobre-ramses.component';
import { HttpClientModule} from  '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChisteComponent,
    SobreRamsesComponent,
    LayoutComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
