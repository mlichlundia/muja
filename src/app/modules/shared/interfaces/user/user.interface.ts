import { SocialInterface } from "./social.interface";
import { ContactInterface } from "./contact.interface";
import { RoleType } from "./role.type";

export interface UserInterface {
  id: number;
  role: RoleType;
  name: string;
  lastName: string;
  socials?: SocialInterface[];
  contacts: ContactInterface[];
  projectIds: number[];
}