import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
  friends :string[]=['jaimin','raj','vishal','mitesh'];
  
  ngOnInit(): void {
  }

}
