import { Component, OnInit } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards;
  map = new Map<string, string>();
  places:string;

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

    this.ChangeToAlapuzha();

  }

  ChangeToAlapuzha(){
    this.map.set('alapuzha', '../../assets/images/alapuzha.jpg');
    this.places = this.map.get('alapuzha');
  }


  ChangeToKochi(){
    this.map.set('kochi', '../../assets/images/kochi.jpg');
    this.places = this.map.get('kochi');

  }


  ChangeToKottayam(){
    this.map.set('kottayam', '../../assets/images/kottayam.jpg');
    this.places = this.map.get('kottayam');

  }

  ChangeToMunnar(){
    this.map.set('munnar', '../../assets/images/munnar.jpg');
    this.places = this.map.get('munnar');

  }

  ChangeToWayanad(){
    this.map.set('wayanad', '../../assets/images/wayanad.jpg');
    this.places = this.map.get('wayanad');

  }

  ChangeToTrivandrum(){
    this.map.set('trivandrum', '../../assets/images/trivandrum.jpg');
    this.places = this.map.get('trivandrum');

  }



}
