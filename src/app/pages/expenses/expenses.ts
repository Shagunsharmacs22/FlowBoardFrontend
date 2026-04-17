import { Component, inject } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css'
})
export class ExpensesComponent {
  modal = inject(ModalService);
}
