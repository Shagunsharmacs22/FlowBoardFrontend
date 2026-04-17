import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent {
  activeTab: 'login' | 'register' = 'login';

  constructor(private router: Router) {}

  switchTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }

  doLogin() {
    this.router.navigate(['/app/dashboard']);
  }
}
