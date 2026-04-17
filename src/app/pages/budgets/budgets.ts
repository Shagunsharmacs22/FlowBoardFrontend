import { Component, inject } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [],
  templateUrl: './budgets.html',
  styleUrl: './budgets.css'
})
export class BudgetsComponent {
  modal = inject(ModalService);
}
