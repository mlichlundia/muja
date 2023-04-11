import { Component } from '@angular/core';
import { MenuService } from "../../../services/menu/menu.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public menuService: MenuService) { }
}
