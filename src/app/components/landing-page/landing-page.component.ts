import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  changePage(where:number) {
    switch(where) { 
      case 1: { 
        //statements; 
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