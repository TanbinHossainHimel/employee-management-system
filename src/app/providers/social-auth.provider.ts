import {GoogleLoginProvider, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";
import {environment} from "../../environments/environment";
import {Provider} from "@angular/core";

export const socialAuth: Provider = {
  provide: 'SocialAuthServiceConfig',
  useValue: {
    autoLogin: false,
    providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          environment.googleClientId
        )
      }
    ],
    onError: (err) => {
      console.error(err);
    }
  } as SocialAuthServiceConfig,
}
