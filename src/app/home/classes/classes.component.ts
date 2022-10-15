import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
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
