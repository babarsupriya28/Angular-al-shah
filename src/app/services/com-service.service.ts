import { DBMOBPARTS } from './../database/db';
import { MobPartComponent } from './../products/mob-part/mob-part.component';
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComServiceService {

  constructor(private http:Http) { }
  getMobParts(){
   //return DBMOBPARTS;
   return  this.http.get('../../assets/API/mobdata.json').pipe(map(res=>res.json().apidata));

  }
  
}
