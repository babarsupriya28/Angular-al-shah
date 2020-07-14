import { ProductDashService } from './../../services/product-dash.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
allproducts;
  constructor(private producdashServices:ProductDashService) {

   }


  ngOnInit() {

    this.producdashServices.getProduct().subscribe(data => this.allproducts=data)
  }

}
