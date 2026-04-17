import { Component, inject } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-recurring',
  standalone: true,
  imports: [],
  templateUrl: './recurring.html',
  styleUrl: './recurring.css'
})
export class RecurringComponent {
  modal = inject(ModalService);
}
