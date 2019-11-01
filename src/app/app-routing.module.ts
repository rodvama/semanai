import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselComponent } from './components/heimich/carousel/carousel.component';
import { CprComponent } from './components/cpr/cpr.component';
import { FracturasComponent } from './components/fracturas/fracturas.component';
import { ConvulsionesComponent } from './components/convulsiones/convulsiones.component';
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
  },
  {
    path:'page3',
    component :ConvulsionesComponent
  },
  {
    path: 'page4',
    component:FracturasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
