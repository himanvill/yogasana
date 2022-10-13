import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ClassesComponent } from './home/classes/classes.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { YogaComponent } from './home/yoga/yoga.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'yoga', component: YogaComponent },
  { path: 'pricing', component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
