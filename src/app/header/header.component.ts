import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  bgClass: string = 'background';
  component: string = 'None';
  mobile: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const eventUrl = event.urlAfterRedirects;
        console.log(eventUrl);
        console.log(this.bgClass);
        if (eventUrl.split('/')[1] != 'home') {
          this.bgClass = 'no-home';
          this.component = eventUrl.split('/')[1].toUpperCase();
        } else {
          this.bgClass = 'background';
        }
        console.log(this.bgClass);
      }
    });
  }

  ngOnInit(): void {}

  onMenuClick() {
    this.mobile = this.mobile ? false : true;
  }
}
