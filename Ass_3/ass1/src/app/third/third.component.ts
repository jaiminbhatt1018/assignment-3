import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  friends :string[]=['bmw','audi','marcedish','ferrie'];
  constructor() { }
 
  ngOnInit(): void {
  }
  handlechange(id:any) {
    
   console.log(id);
  }
}
