import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselComponent } from './components/heimich/carousel/carousel.component';
import { CprComponent } from './components/cpr/cpr.component';
const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  },
  {
    path:'page1',
    component: CarouselComponent
  },
  {
    path:'page2',
    component: CprComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
