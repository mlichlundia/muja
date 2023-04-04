import { Component, Input } from '@angular/core';
import { ICONS } from "../../../constants/icons";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() name!: string

  public icons: { [key:string]: any } = ICONS
}
