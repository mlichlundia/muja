import { Component } from '@angular/core'
import { ProjectsService } from '../../../shared/services/projects/projects.service'
import { UserService } from '../../../shared/services/user/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    public userService: UserService,
    public projectsService: ProjectsService
  ) { }
}