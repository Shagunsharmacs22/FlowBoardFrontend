import { Component, OnInit, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../shared/modal.service';

declare const Chart: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements AfterViewInit {
  modal = inject(ModalService);
  platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initCharts();
    }
  }

  initCharts() {
    const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];

    new Chart(document.getElementById('incomeExpenseChart'), {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          { label: 'Income', data: [7200, 7800, 8100, 7650, 7900, 8450], backgroundColor: '#1D9E75', borderRadius: 4 },
          { label: 'Expenses', data: [4800, 5400, 4900, 5100, 5000, 5230], backgroundColor: '#E24B4A', borderRadius: 4 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: '#f1f1f1' }, ticks: { callback: (v: number) => '$' + v.toLocaleString() } } } }
    });

    new Chart(document.getElementById('pieChart'), {
      type: 'doughnut',
      data: {
        labels: ['Food', 'Shopping', 'Transport', 'Bills', 'Health', 'Entertainment'],
        datasets: [{ data: [32, 20, 14, 18, 10, 6], backgroundColor: ['#1D9E75', '#378ADD', '#D4537E', '#EF9F27', '#7F77DD', '#888780'], borderWidth: 0, hoverOffset: 6 }]
      },
      options: { responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { display: false } } }
    });
  }
}
