import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSales: boolean = false;

  title = 'detect-route-change';
  currentRoute: string;

  constructor(private router: Router, private location: Location) {
    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute.includes('/sales')) {
          this.isSales = true;
        } else if (!this.currentRoute.includes('/sales')) {
          this.isSales = false;
        }
      }
    });
  }

  ngOnInit() {}
}
