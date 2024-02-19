import {Component} from '@angular/core';
import {HeaderComponent} from "../../header/header.component";
import {NgOptimizedImage} from "@angular/common";
import {NzContentComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user-ui',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    NzContentComponent,
    NzIconDirective,
    NzLayoutComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    NzSubMenuComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './user-ui.component.html',
  styleUrl: './user-ui.component.scss'
})
export class UserUiComponent {
  isCollapsed = false;

  openMap: { [name: string]: boolean } = {
    HR: false,
    PROFILE: false,
    TEAM: false,
    SETTING: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
