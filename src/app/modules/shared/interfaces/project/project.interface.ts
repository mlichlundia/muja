import { LinkInterface } from '../user/linkInterface'
import { MajorTaskInterface } from './task.interface'
import { EventInterface } from './event.interface'

export interface ProjectInterface {
  id: number;
  customerId: number;
  creatorId: number;
  title: string;
  documents?: File[];
  links?: LinkInterface[];
  tasks?: MajorTaskInterface[];
  completed?: {
    documents?: File[];
    links?: LinkInterface []
  };
  events?: EventInterface[]
}