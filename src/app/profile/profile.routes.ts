import {Routes} from "@angular/router";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {MyAttendanceComponent} from "./my-attendance/my-attendance.component";
import {MyLeaveComponent} from "./my-leave/my-leave.component";
import {MyTeamComponent} from "./my-team/my-team.component";

export const profileRoutes: Routes = [
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'my-attendance', component: MyAttendanceComponent},
  {path: 'my-leave', component: MyLeaveComponent},
  {path: 'my-team', component: MyTeamComponent}
];
