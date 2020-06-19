import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  template: `
  <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="../../../assets/img/1.jpeg"></a>
    <a class="carousel-item" href="#two!"><img src="../../../assets/img/2.jpeg"></a>
    <a class="carousel-item" href="#three!"><img src="../../../assets/img/3.jpeg"></a>
    <a class="carousel-item" href="#four!"><img src="../../../assets/img/4.jpeg"></a>
    <a class="carousel-item" href="#five!"><img src="../../../assets/img/5.jpeg"></a>
  </div>
  <img src="{{carDet.thumurl}}">

  `,
  styles: []
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
