import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EncryptDecryptService} from "./services/encrypt-decrypt/encrypt-decrypt.service";
import {UserUiComponent} from "./ui/user-ui/user-ui.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserUiComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private encryptDecryptService: EncryptDecryptService) {
    const encryptedValue = this.encryptDecryptService.encryptWithAES256({"userinfo": 'testing encryption'});
    const decryptedValue = this.encryptDecryptService.decryptWithAES256(encryptedValue);

    console.log(encryptedValue, decryptedValue);
  }

}
