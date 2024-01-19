import {Routes} from "@angular/router";
import {GoogleAuthComponent} from "./google-auth/google-auth.component";
export const authRoute: Routes = [
  {path: 'google', component: GoogleAuthComponent},
]
