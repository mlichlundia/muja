import { Injectable } from '@angular/core'
import { ProjectInterface } from '../../interfaces/project/project.interface'
import { PROJECTS_MOCK } from '../../mocks/project.mock'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: ProjectInterface[] = PROJECTS_MOCK
  public currentProject: ProjectInterface = this.projects[0]
}