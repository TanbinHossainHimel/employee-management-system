import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent
} from 'ng-zorro-antd/layout';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {EncryptDecryptService} from "./services/encrypt-decrypt/encrypt-decrypt.service";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzLayoutComponent, NzSiderComponent, NzMenuDirective, NzMenuItemComponent, NzIconDirective, NzHeaderComponent, NzContentComponent, NzFooterComponent, NgOptimizedImage, HeaderComponent, RouterLink],
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
