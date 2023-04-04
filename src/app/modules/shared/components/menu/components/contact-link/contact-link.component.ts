import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-link',
  templateUrl: './contact-link.component.html',
  styleUrls: ['./contact-link.component.scss']
})
export class ContactLinkComponent {
  @Input() link!: string
}