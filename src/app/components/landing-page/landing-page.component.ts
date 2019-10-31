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
        //statements; 
        break; 
      }
      case 3: { 
        //statements; 
        break; 
      } 
      case 4: { 
        //statements;
        break; 
      } 
      default: { 
        //statements; 
        break; 
      } 
    } 
  }
}