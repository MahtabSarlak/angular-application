import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

@Component({
  standalone: true,
  selector: 'baseproject-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.less'],
  imports: [
    DashboardComponent,
    RouterModule
  ]
})
export class AppComponent {
  title = 'application';
}
