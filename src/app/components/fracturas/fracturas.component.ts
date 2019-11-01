import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-fracturas',
  templateUrl: './fracturas.component.html',
  styleUrls: ['./fracturas.component.css']
})
export class FracturasComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000000000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
