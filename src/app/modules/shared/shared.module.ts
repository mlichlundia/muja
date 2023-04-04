import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SidebarComponent } from './components/menu/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/components/menu/menu.component';
import { SocialLinkComponent } from './components/menu/components/social-link/social-link.component';
import { MenuIconComponent } from './components/menu/components/menu-icon/menu-icon.component';
import { IconComponent } from './components/UI/icon/icon.component';
import { ContactLinkComponent } from './components/menu/components/contact-link/contact-link.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    SocialLinkComponent,
    MenuIconComponent,
    IconComponent,
    ContactLinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    MenuComponent,
    SocialLinkComponent,
    MenuIconComponent,
    IconComponent,
  ]
})
export class SharedModule {
}
