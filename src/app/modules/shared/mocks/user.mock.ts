import { UserInterface } from "../interfaces/user/user.interface";

export const USER_MOCK: UserInterface[] = [
  {
    id: 0,
    role: 'creator',
    name: 'Jhon',
    lastName: 'Smith',
    socials: [
      {name: 'INSTAGRAM', link: ''},
      {name: 'BEHANCE', link: ''},
      {name: 'DRIBBLE', link: ''}
    ],
    contacts: [
      {link: 'mailto:smith@gmail.com', shownContact: 'smith@gmail.com'},
      {name: 'WHATSAPP', link: 'https://wa.me/+000000000', shownContact: '+00 000 000 000'},
      {name: 'TELEGRAM', link: 'https://t.me/smith', shownContact: 'smith'}
    ],
    projectIds: [0]
  },
  {
    id: 1,
    role: 'customer',
    name: 'Walter',
    lastName: 'White',
    contacts: [
      {link: 'mailto:white@gmail.com', shownContact: 'white@gmail.com'},
      {name: 'WHATSAPP', link: 'https://wa.me/+000000000', shownContact: '+00 000 000 000'},
      {name: 'TELEGRAM', link: 'https://t.me/white', shownContact: 'white'}
    ],
    projectIds: [0]
  }
]