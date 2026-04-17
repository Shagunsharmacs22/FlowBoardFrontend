import { Component, inject } from '@angular/core';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class CategoriesComponent {
  modal = inject(ModalService);
}
