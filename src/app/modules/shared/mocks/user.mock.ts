import { UserInterface } from "../interfaces/user/user.interface";

export const USER_MOCK: UserInterface = {
  id: 0,
  name: 'Jhon',
  surname: 'Smith',
  socials: [
    {name: 'INSTAGRAM', link: ''},
    {name: 'BEHANCE', link: ''},
    {name: 'DRIBBLE', link: ''}
  ],
  contacts: [
    {link: 'mailto:username@gmail.com', shownContact: 'username@gmail.com'},
    {name: 'WHATSAPP', link: 'https://wa.me/+000000000', shownContact: '+00 000 000 000'},
    {name: 'TELEGRAM', link: 'https://t.me/username', shownContact: 'username'}
  ],
}