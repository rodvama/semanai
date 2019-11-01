import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cpr',
  templateUrl: './cpr.component.html',
  styleUrls: ['./cpr.component.css']
})
export class CprComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000000000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
