import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselComponent } from './components/heimich/carousel/carousel.component';
import { VideoComponent } from './components/heimich/video/video.component';
import { CprComponent } from './components/cpr/cpr.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CarouselComponent,
    VideoComponent,
    CprComponent
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
