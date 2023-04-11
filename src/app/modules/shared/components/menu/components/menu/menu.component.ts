import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../services/user/user.service";
import { UserInterface } from "../../../../interfaces/user/user.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public contactUser!: UserInterface

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.contactUser = this.userService.contactUser
  }
}