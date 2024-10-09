import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentComponent } from './rent/rent.component';

export const featureRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rent',
    component: RentComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
