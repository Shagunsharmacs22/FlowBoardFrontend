import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';
import { HeaderComponent } from '../header/header';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css']
})
export class MainLayoutComponent {
  pageTitle: string = 'Dashboard';

  private titleMap: Record<string, string> = {
    'dashboard': 'Dashboard',
    'analytics': 'Analytics',
    'expenses': 'Expenses',
    'income': 'Income',
    'recurring': 'Recurring Transactions',
    'categories': 'Categories',
    'budgets': 'Budgets',
    'reports': 'Reports & Exports',
    'notifications': 'Notifications',
    'profile': 'Profile',
    'admin': 'Admin Panel',
  };

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      const parts = e.urlAfterRedirects.split('/');
      const last = parts[parts.length - 1].split('?')[0];
      this.pageTitle = this.titleMap[last] || 'Dashboard';
    });
  }
}