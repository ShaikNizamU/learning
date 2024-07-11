import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-learn',
  templateUrl: './ng-for-learn.component.html',
  styleUrls: ['./ng-for-learn.component.css']
})
export class NgForLearnComponent implements OnInit {

  products:string[]=[
    'apple', 'banana', 'cherry', 'orange', 'dates'
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
