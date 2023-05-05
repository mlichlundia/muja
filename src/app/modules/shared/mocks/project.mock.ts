import { ProjectInterface } from '../interfaces/project/project.interface'

export const PROJECTS_MOCK: ProjectInterface[] = [
  {
    id: 0,
    customerId: 1,
    creatorId: 0,
    title: 'Muja',
    documents: [new File(['muja'], 'Muja Documents')],
    links: [{link: 'https://www.deepl.com/translator', name: 'Technical Tasks'}, {
      link: 'https://www.youtube.com/',
      name: 'Brand Identity'
    }],
    tasks: [
      {
        title: 'Prototyping',
        status: true
      },
      {
        title: 'Design',
        status: false,
        subtasks: [
          {
            title: 'Home page',
            status: true
          },
          {
            title: 'Contact page',
            status: false
          },
          {
            title: 'Privacy & Policy',
            status: false
          }
        ]
      }],
    completed: {
      documents: [new File(['muja'], 'Muja Documents')],
      links: [{link: 'google.com', name: 'Technical Tasks'}, {link: 'google.com', name: 'Brand Identity'}]
    },
    events: [
      {
        date: Date.now(),
        status: false,
        title: 'Meeting',
        description: 'Discuss project'
      },
      {
        date: Date.now() + 10000,
        status: true,
        title: 'Fix layouts',
        description: 'Discuss project'
      }
    ]
  },
  {
    id: 1,
    customerId: 0,
    creatorId: 1,
    title: 'Juma',
    documents: [new File(['muja'], 'Muja Documents')],
    tasks: [
      {
        title: 'Design',
        status: false,
        subtasks: [
          {
            title: 'Home page',
            status: true
          },
          {
            title: 'Contact page',
            status: true
          },
          {
            title: 'Privacy & Policy',
            status: false
          }
        ]
      },
      {
        title: 'Prototyping',
        status: false
      }
    ]
  }
]