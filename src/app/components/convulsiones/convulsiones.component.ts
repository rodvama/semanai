import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-convulsiones',
  templateUrl: './convulsiones.component.html',
  styleUrls: ['./convulsiones.component.css']
})
export class ConvulsionesComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000000000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }


  ngOnInit() {
  }

}
