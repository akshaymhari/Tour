import { Component, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousal1',
  templateUrl: './carousal1.component.html',
  styleUrls: ['./carousal1.component.css']
})
export class Carousal1Component {

  images = [1, 1001, 1006, 1015, 1016, 1018, 1023, 1025].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

}
