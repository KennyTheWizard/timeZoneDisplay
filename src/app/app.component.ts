import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theDate: Date;
  tzSelect = { 
    pst : false,
    mst : false,
    cst : false,
    est : false,
  };
  currZone: string = '';
  changeTimeZone(zone:string):void{
    for (let tZone in this.tzSelect){
      this.tzSelect[tZone] = (tZone == zone);
    }
    this.currZone = zone;
    console.log(zone);
    this.theDate = new Date();
  }
  
}
