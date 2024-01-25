import { Component } from '@angular/core';
import {HeaderTitleService} from "../services/header-title/header-title.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private headerTitleService: HeaderTitleService) {
    this.headerTitleService.setHeaderTitle('Dashboard');
  }

}
