import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {EncryptDecryptService} from "./services/encrypt-decrypt/encrypt-decrypt.service";
import {NzButtonComponent} from "ng-zorro-antd/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private encryptDecryptService: EncryptDecryptService) {
    const encryptedValue = this.encryptDecryptService.encryptWithAES256({"userinfo": 'testing encryption'});
    const decryptedValue = this.encryptDecryptService.decryptWithAES256(encryptedValue);

    console.log(encryptedValue, decryptedValue);
  }
}
