import { Component, OnInit } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards;
  constructor() { }



  ngOnInit(): void {


    this.cards = [
      {
        img: '../assets/images/slide04.jpg',
        title: 'Wayanad'
      },
      {
        img: '../assets/images/slide05.jpg',
        title: 'Munnar'
      },
      {
        img: '../assets/images/slide01.jpg',
        title: 'Alapuzha'
      },
      {
        img: '../assets/images/slide02.jpg',
        title: 'Idukki'
      },
      {
        img: '../assets/images/slide03.jpg',
        title: 'Puri'
      },
      {
        img: '../assets/images/slide04.jpg',
        title: 'Nainital'
      },
    ];


  }




}
