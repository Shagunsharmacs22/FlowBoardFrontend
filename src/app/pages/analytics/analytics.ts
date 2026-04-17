import { Component, AfterViewInit } from '@angular/core';

declare const Chart: any;

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class AnalyticsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
    const savingsMonths = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
    const days = Array.from({ length: 16 }, (_, i) => 'Apr ' + (i + 1));

    new Chart(document.getElementById('savingsTrendChart'), {
      type: 'line',
      data: {
        labels: savingsMonths,
        datasets: [{ label: 'Savings Rate %', data: [32, 29, 34, 36, 31, 38, 35, 40, 33, 37, 36, 38], borderColor: '#1D9E75', backgroundColor: 'rgba(29,158,117,0.08)', tension: 0.4, fill: true, pointRadius: 3, pointBackgroundColor: '#1D9E75' }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { ticks: { callback: (v: number) => v + '%' }, grid: { color: '#f1f1f1' } } } }
    });

    new Chart(document.getElementById('dailyTrendChart'), {
      type: 'line',
      data: {
        labels: days,
        datasets: [{ label: 'Expenses', data: [45, 120, 0, 68, 89, 32, 0, 214, 56, 0, 95, 148, 0, 14, 0, 68], borderColor: '#E24B4A', backgroundColor: 'rgba(226,75,74,0.06)', tension: 0.3, fill: true, pointRadius: 2, pointBackgroundColor: '#E24B4A' }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false }, ticks: { maxTicksLimit: 8 } }, y: { ticks: { callback: (v: number) => '$' + v }, grid: { color: '#f1f1f1' } } } }
    });

    new Chart(document.getElementById('cashflowChart'), {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          { label: 'Inflow', data: [7200, 7800, 8100, 7650, 7900, 8450], backgroundColor: 'rgba(29,158,117,0.7)', borderRadius: 4 },
          { label: 'Outflow', data: [-4800, -5400, -4900, -5100, -5000, -5230], backgroundColor: 'rgba(226,75,74,0.7)', borderRadius: 4 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: '#f1f1f1' }, ticks: { callback: (v: number) => '$' + Math.abs(v).toLocaleString() } } } }
    });
  }
}
