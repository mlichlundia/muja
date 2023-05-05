import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { SettingsComponent } from './pages/settings/settings.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { UserRoutingModule } from './user-routing.module';
import { CardComponent } from './pages/dashboard/components/card/card.component';
import { DocumentsComponent } from './pages/dashboard/components/sections/documents/documents.component';
import { ListItemComponent } from './pages/dashboard/components/sections/documents/components/list-item/list-item.component'

@NgModule({
  declarations: [
    SettingsComponent,
    ProjectsComponent,
    DashboardComponent,
    CardComponent,
    DocumentsComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule {
}
