import { SocialInterface } from "./social.interface";
import { ContactInterface } from "./contact.interface";

export interface UserInterface {
  id: number;
  name: string;
  surname: string;
  socials: SocialInterface[],
  contacts: ContactInterface[]
}