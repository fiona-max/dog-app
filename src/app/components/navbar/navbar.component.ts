import { Component } from '@angular/core';
import {appConfig} from "../../../environments/app.config";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dogIcon = appConfig.dogIcon
}
