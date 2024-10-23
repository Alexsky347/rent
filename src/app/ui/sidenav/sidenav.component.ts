import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  appName = input.required<string>();

  isOpen = signal(false);
  isExpanded = signal(false);
  isMobile = signal(window.innerWidth < 1024);

  navItems: NavItem[] = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'real_estate_agent', label: 'Rent', route: '/rent' },
    {
      icon: 'attach_money',
      label: 'Financial Investment',
      route: '/financial-investment',
    },
    { icon: 'bar_chart', label: 'Monitoring', route: '/monitoring' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
    { icon: 'login', label: 'SigIn', route: '/signIn' },
  ];

  constructor() {
    window.addEventListener('resize', () => {
      const mobile = window.innerWidth < 1024;
      this.isMobile.set(mobile);
      if (!mobile) {
        this.isOpen.set(true);
      }
    });
  }

  toggleSidebar(): void {
    this.isOpen.update((state) => !state);
  }

  toggleExpanded(): void {
    this.isExpanded.update((state) => !state);
  }

  onMouseEnter(): void {
    if (!this.isMobile()) {
      this.isExpanded.set(true);
    }
  }

  onMouseLeave(): void {
    if (!this.isMobile()) {
      this.isExpanded.set(false);
    }
  }
}
