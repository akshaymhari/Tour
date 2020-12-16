import { Component, OnInit } from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards;
  ImageUrl = new Map<string, string>();
  images:string;

  PlaceTitle = new Map<string, string>();
  title:string;

  PlaceDescription = new Map<string, string>();
  description:string;


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
    this.ImageUrl.set('pic', '../../assets/images/alapuzha.jpg');
    this.images = this.ImageUrl.get('pic');

    this.PlaceTitle.set('title','Alappuzha');
    this.title = this.PlaceTitle.get('title');

    this.PlaceDescription.set('description','Alappuzha is a district in Kerala, which is an important tourist destination in India. It is considered to be the oldest planned city in this region, and the lighthouse built on the coast of the town is the first of its kind along the Laccadive sea coast. The  Backwaters of Alappuzha are the most po opular tourist attraction in Kerala');
    this.description = this.PlaceDescription.get('description');

  }


  ChangeToKochi(){
    this.ImageUrl.set('pic', '../../assets/images/kochi.jpg');
    this.images = this.ImageUrl.get('pic');

    this.PlaceTitle.set('title','Kochi');
    this.title = this.PlaceTitle.get('title');

    this.PlaceDescription.set('description','Look for spicy dishes flavoured with tamarind and coconut in Kochi, and don’t be surprised if your dinner is served up on a banana leaf. The region is a major banana-growing area, and traditional Kochi cuisine employs the fruit in many dishes, both sweet and savoury. Coconut water provides a refreshing and sweet contrast to the piquant food');
    this.description = this.PlaceDescription.get('description');

  }


  ChangeToKottayam(){
    this.ImageUrl.set('pic', '../../assets/images/kottayam.jpg');
    this.images = this.ImageUrl.get('pic');

    this.PlaceTitle.set('title','Kottayam');
    this.title = this.PlaceTitle.get('title');

    this.PlaceDescription.set('description','Most of Indias natural rubber originates from the acres of well-kept plantations of Kottayam, also home to the Rubber Board. Kottayam is also called as “Akshara Nagari” which means the “city of letters” considering its contribution to print media and literature');
    this.description = this.PlaceDescription.get('description');

  }

  ChangeToMunnar(){
    this.ImageUrl.set('pic', '../../assets/images/munnar.jpg');
    this.images = this.ImageUrl.get('pic');

    this.PlaceTitle.set('title','Munnar');
    this.title = this.PlaceTitle.get('title');

    this.PlaceDescription.set('description','Munnar is a visual experience and a soul-enriching location that we cannot simply put into words and risk for losing its aesthetic charm. As you trek higher through the cardamom plantation and lush green meadows, you feel lighter when the fresh and cold air fills you in.');
    this.description = this.PlaceDescription.get('description');

  }

  ChangeToWayanad(){
    this.ImageUrl.set('wayanad', '../../assets/images/wayanad.jpg');
    this.images = this.ImageUrl.get('wayanad');

    this.PlaceTitle.set('title','Wayanad');
    this.title = this.PlaceTitle.get('title');

    this.PlaceDescription.set('description','The scenic drive through the trail to reach both Thollayiram (900) Kandi and Aranamala, is every bit as intriguing and adventurous, even on a hot summer day weather inside the forest is cold and refreshing which makes both places a wonderland.');
    this.description = this.PlaceDescription.get('description');

  }

  ChangeToTrivandrum(){
    this.ImageUrl.set('pic', '../../assets/images/trivandrum.jpg');
    this.images = this.ImageUrl.get('pic');

    this.PlaceTitle.set('title','Trivandrum');
    this.title = this.PlaceTitle.get('title');

    this.PlaceDescription.set('description','Though often used as a gateway to nearby beach resorts, Thiruvananthapuram offers plenty of its own to reward travellers who stay. From South Indian cuisine and a sophisticated art scene to architectural treasures and historic landmarks, there’s so much to experience in Kerala’s capital.');
    this.description = this.PlaceDescription.get('description');

  }



}
