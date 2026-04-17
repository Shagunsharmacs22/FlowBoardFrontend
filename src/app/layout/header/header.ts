import { Component, Input, inject } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Input() pageTitle: string = 'Dashboard';
  modal = inject(ModalService);

  showNotifModal = false;
  openNotif() { this.showNotifModal = true; }
  closeNotif() { this.showNotifModal = false; }
}
