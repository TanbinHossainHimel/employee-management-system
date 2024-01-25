import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.authRoute)},
  {path: 'dashboard', component: DashboardComponent}
];
