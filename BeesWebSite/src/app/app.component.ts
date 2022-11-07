import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private titleService:Title) {
    this.titleService.setTitle("Pčelinjak Kovač");
   }
  navBarVisible : boolean = false;


  ngOnInit() {
      this.router.events.subscribe((event) => {
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });
  }

  onMenuClick(){
     this.navBarVisible = !this.navBarVisible;
  }

  onChoosingPage(){
    this.navBarVisible = false;
  }
}
