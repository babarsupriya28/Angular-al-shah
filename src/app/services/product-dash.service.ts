import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDashService {

  constructor(private http:Http) { }
  getProduct(){
    return this.http.get('../../assets/API/mobdata.json').pipe(map(ctch=>ctch.json().apidata))
    
  }
}
