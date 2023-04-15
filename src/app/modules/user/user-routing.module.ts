import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BASE_ROUTE_TITLE, ROUTE_TITLES } from '../../route-titles'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { SettingsComponent } from './pages/settings/settings.component'

const routes: Routes = [
  {path: 'settings', component: SettingsComponent, title: BASE_ROUTE_TITLE + ROUTE_TITLES.settings},
  {path: 'projects', component: ProjectsComponent, title: BASE_ROUTE_TITLE + ROUTE_TITLES.projects},
  {path: 'dashboard/:id', component: DashboardComponent, title: BASE_ROUTE_TITLE + ROUTE_TITLES.dashboard}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
