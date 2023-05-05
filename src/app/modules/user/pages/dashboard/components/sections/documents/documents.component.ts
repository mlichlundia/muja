import { Component, Input } from '@angular/core'
import { LinkInterface } from '../../../../../../shared/interfaces/user/linkInterface'

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  @Input() documents?: File[]
  @Input() links?: LinkInterface[]
}
