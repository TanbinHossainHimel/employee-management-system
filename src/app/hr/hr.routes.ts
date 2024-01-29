import {Routes} from "@angular/router";
import {EmployeesComponent} from "./employees/employees.component";
import {LeavesComponent} from "./leaves/leaves.component";

export const hrRoutes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'leaves', component: LeavesComponent}
];
