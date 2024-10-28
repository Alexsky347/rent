import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './ui/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidenavComponent],
  template: ` <div class="flex">
    <app-sidenav [appName]="title" (stateChanged)="setMargin($event)" />
    <main class="p-4 transition-all duration-300" [ngStyle]="{ 'margin-left': margin + 'px' }" >
      <router-outlet />
    </main>
    <div class="flex-1 p-4">
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Gestion de son argent';
  margin = 70;

  setMargin(isOpen: boolean): void {
    this.margin = isOpen ? 250 : 70;
  }
}
