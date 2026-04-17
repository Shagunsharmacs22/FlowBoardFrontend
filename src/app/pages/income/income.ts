import { Component, inject } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [],
  templateUrl: './income.html',
  styleUrl: './income.css'
})
export class IncomeComponent {
  modal = inject(ModalService);
}
