import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from './pages/settings/settings.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  declarations: [
    SettingsComponent,
    ProjectsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
