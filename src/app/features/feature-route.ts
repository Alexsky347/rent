import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentComponent } from './rent/rent.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FinancialInvestmentComponent } from './financial-investment/financial-investment.component';
import { MonitoringComponent } from './monitoring/monitoring.component';

export const featureRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'rent',
    component: RentComponent,
  },
  {
    path: 'financial-investment',
    component: FinancialInvestmentComponent,
  },
  {
    path: 'monitoring',
    component: MonitoringComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
