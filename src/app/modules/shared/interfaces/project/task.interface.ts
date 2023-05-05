export interface TaskInterface {
  title: string;
  status: boolean;
}

export interface MajorTaskInterface extends TaskInterface {
  subtasks?: TaskInterface[]
}