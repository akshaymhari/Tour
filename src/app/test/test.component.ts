import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {




  public imagesUrl;
  public cards;
  public cards1;
  public slider;


  constructor() { }

  ngOnInit(): void {
    this.imagesUrl = ['../assets/images/slide01.jpg',
      '../assets/images/slide02.jpg',
      '../assets/images/slide03.jpg',
      '../assets/images/slide04.jpg',
      '../assets/images/slide05.jpg'];

    this.slider = [
      '../assets/images/background.jpg'
    ]

    this.cards = [
      {
        img: '../assets/images/slide04.jpg',
        title: 'Adventure Tourism'
      },
      {
        img: '../assets/images/slide05.jpg',
        title: 'Family Tourism'
      },
      {
        img: '../assets/images/slide01.jpg',
        title: 'Bachelor Tourism'
      },
      {
        img: '../assets/images/slide02.jpg',
        title: 'Couple Tourism'
      },
      {
        img: '../assets/images/slide03.jpg',
        title: 'Farm Tourism'
      },
      {
        img: '../assets/images/pic04.jpg',
        title: 'Treatment Tourism'
      },
    ];

    this.cards1 = [
      {
        img: '../assets/images/slide04.jpg',
        description: 'THROUGH THE BACKWATERS IN FLOATING HOUSES',
      },
      {
        img: '../assets/images/slide05.jpg',
        description: 'FROM THE CITY TO THE WOODS',
      },
      {
        img: '../assets/images/slide01.jpg',
        description: 'LETS TRY SOME HEROISM OF KUMBALANGI NIGHTS',
      },
      {
        img: '../assets/images/slide02.jpg',
        description: 'EXPLORE THE BEAUTY OF ARCHITECTURE AND COLONISED CULTURE',
      },
      {
        img: '../assets/images/slide03.jpg',
        description: 'THROUGH THE PERIYAR WILDLIFE SANCTUARY IN JEEP',
      }

    ];

  }

}
