import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  bgClass: string = 'background';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const eventUrl = event.urlAfterRedirects;
        console.log(eventUrl);
        console.log(this.bgClass);
        if (eventUrl.split('/')[1] != 'home') {
          this.bgClass = 'no-home';
          console.log(this.bgClass);
        } else {
          this.bgClass = 'background';
        }
        console.log(this.bgClass);
      }
    });
  }

  ngOnInit(): void {}
}
