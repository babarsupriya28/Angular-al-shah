import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-one',
  template: `
    <p>
      lazy-one works!
    </p>
  `,
  styles: []
})
export class LazyOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
