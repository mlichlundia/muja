import { LinkInterface } from "./linkInterface";
import { ContactInterface } from "./contact.interface";
import { RoleType } from "./role.type";

export interface UserInterface {
  id: number;
  role: RoleType;
  name: string;
  lastName: string;
  socials?: LinkInterface[];
  contacts: ContactInterface[];
  projectIds: number[];
}