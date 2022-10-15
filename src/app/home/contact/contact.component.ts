import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
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
