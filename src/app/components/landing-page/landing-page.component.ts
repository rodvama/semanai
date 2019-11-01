import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  changePage(where:number) {
    switch(where) { 
      case 1: { 
        this.router.navigate(['/page1']);
        break; 
      } 
      case 2: { 
        this.router.navigate(['/page2']);
        break; 
      }
      case 3: { 
        this.router.navigate(['/page3']); 
        break; 
      } 
      case 4: { 
        this.router.navigate(['/page4']);
        break; 
      } 
      default: { 
        //statements; 
        break; 
      } 
    } 
  }
}