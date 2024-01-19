import {Component, OnInit} from '@angular/core';
import {GoogleAuthWrapperComponent} from "./google-auth-wrapper/google-auth-wrapper.component";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-google-auth',
  standalone: true,
  imports: [
    GoogleAuthWrapperComponent
  ],
  templateUrl: './google-auth.component.html',
  styleUrl: './google-auth.component.scss'
})
export class GoogleAuthComponent implements OnInit {
  constructor(private socialAuthService: SocialAuthService) {
  }

  googleLogIn(googleWrapper: any) {
    googleWrapper.click();
  }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((socialUser: SocialUser) => {
      console.log('social user:', socialUser);
    })
  }
}
// {
//   "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4YTYzYmM0NzY3Zjg1NTBhNTMyZGM2MzBjZjdlYjQ5ZmYzOTdlN2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE3MDU2NjQ2NzAsImF1ZCI6Ijg0NjM1OTMwMDUyOS1ldjBrcTNrcnBhOGI3Z3ZzaWlobWJqMjJzOW9tdjhhMi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjM0NzU3OTcwODQzNzgwNzIwNSIsImhkIjoic3RkLmV3dWJkLmVkdSIsImVtYWlsIjoiMjAxOC0xLTYwLTE1MUBzdGQuZXd1YmQuZWR1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6Ijg0NjM1OTMwMDUyOS1ldjBrcTNrcnBhOGI3Z3ZzaWlobWJqMjJzOW9tdjhhMi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJNZC4gVGFuYmluIEhvc3NhaW4gSGltZWwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSVFud1BIbFNFTWR4bDVVR1d2TXl3VVh1VE04Q1prSGxpZExBU0NnODdMN3c9czk2LWMiLCJnaXZlbl9uYW1lIjoiTWQuIiwiZmFtaWx5X25hbWUiOiJUYW5iaW4gSG9zc2FpbiBIaW1lbCIsImlhdCI6MTcwNTY2NDk3MCwiZXhwIjoxNzA1NjY4NTcwLCJqdGkiOiI2YTkzNGMyZjk3ZDM3YjY4MjQ0MjNmODg5N2JhYzllOWZhZjJmMDkyIn0.YGX6H7EXmYOymA0MUdcB-7RgZ2MyAsU8StrH1weZbN_o0kkh3dxtngQXDh9rT8zsYXX5Bj2vASV4Nf3Jeis8krGxFjMVv6QGQNhM6fiJPIqV4Uj_3akimQ9l_obMbrnky-nhkLrC-MCqaGjp57P7f4Gm5J-kc81Er65IM1yTLpHDNdnamTBmzXdRFT_Ns6DlpbIZcc4gPjHCEqgYSK2g-euiyztRb2gS-q-E-ERvHJLzJA9kGDS0TM5Q2Ny5hstsNdnIv19arTbKVFlZ18z5hV6Rn9jKPQGbuXN2FiDOCs6SGsGQYxLbv-PuB9QVWCui68szHNicZ0rMNjwRZ-sk7g",
//   "id": "112347579708437807205",
//   "name": "Md. Tanbin Hossain Himel",
//   "email": "2018-1-60-151@std.ewubd.edu",
//   "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocIQnwPHlSEMdxl5UGWvMywUXuTM8CZkHlidLASCg87L7w=s96-c",
//   "firstName": "Md.",
//   "lastName": "Tanbin Hossain Himel",
//   "provider": "GOOGLE"
// }
