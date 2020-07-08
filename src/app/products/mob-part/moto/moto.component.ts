import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-moto',
  // templateUrl: './moto.component.html',
  templateUrl: './moto.component.html',
  styles: []
 
})
export class MotoComponent implements OnInit {
  mobParts:any[];
  
  constructor(angularFireDatabase:AngularFireDatabase) { 
     
    angularFireDatabase.list("/apidata").valueChanges().subscribe(mobPart=>{this.mobParts=mobPart; console.log(this.mobParts)});
    
  }

  ngOnInit() {
  }

}
