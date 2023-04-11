import { MajorTaskInterface } from "./task.interface";
import { EventInterface } from "./event.interface";

export interface ProjectInterface {
  id: number;
  customerId: number;
  creatorId: number;
  title: string;
  documents: Blob[];
  links: string[];
  tasks: MajorTaskInterface[];
  completed: {
    documents: Blob[];
    links: string []
  },
  events: EventInterface[]
}