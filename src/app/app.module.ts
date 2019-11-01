import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselComponent } from './components/heimich/carousel/carousel.component';
import { CprComponent } from './components/cpr/cpr.component';
import { FracturasComponent } from './components/fracturas/fracturas.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CarouselComponent,
    CprComponent,
    FracturasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
