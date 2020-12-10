import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.css']
})
export class T3Component implements OnInit {

   path:string= '../../assets/images/tree.jpg';

  constructor() { }

  ngOnInit(): void {




  }

  first(){
    this.path = '../../assets/images/pic04.jpg';
  }



}
