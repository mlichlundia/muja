import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BASE_ROUTE_TITLE, ROUTE_TITLES } from '../../route-titles'
import { AboutComponent } from './pages/about/about.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component'

const routes: Routes = [
  {path: '', component: AboutComponent, title: BASE_ROUTE_TITLE},
  {path: 'login', component: LoginComponent, title: BASE_ROUTE_TITLE + ROUTE_TITLES.login},
  {path: 'signup', component: SignupComponent, title: BASE_ROUTE_TITLE + ROUTE_TITLES.signup}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
