import {Component} from '@angular/core';
import {HeaderComponent} from "../../header/header.component";
import {NgOptimizedImage} from "@angular/common";
import {NzContentComponent, NzFooterComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    NzContentComponent,
    NzFooterComponent,
    NzIconDirective,
    NzLayoutComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    NzSubMenuComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {
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
