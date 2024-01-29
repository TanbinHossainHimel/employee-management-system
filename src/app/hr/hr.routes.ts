import {Routes} from "@angular/router";
import {EmployeesComponent} from "./employees/employees.component";

export const hrRoutes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'leaves', component: EmployeesComponent}
];
