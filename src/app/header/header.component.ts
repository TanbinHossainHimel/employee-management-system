import {Component, WritableSignal} from '@angular/core';
import {NzHeaderComponent} from "ng-zorro-antd/layout";
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {HeaderTitleService} from "../services/header-title/header-title.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzHeaderComponent,
    NzAvatarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerTitle: WritableSignal<string>;

  constructor(private headerTitleService: HeaderTitleService) {
    this.headerTitle = this.headerTitleService.getHeaderTitle();
  }
}
