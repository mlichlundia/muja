import { Component } from '@angular/core';
import { SocialInterface } from "../../../../interfaces/user/social.interface";
import { ContactInterface } from "../../../../interfaces/user/contact.interface";
import { USER_MOCK } from "../../../../mocks/user.mock";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public socials: SocialInterface[] = USER_MOCK.socials
  public contacts: ContactInterface[] = USER_MOCK.contacts
}