import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-learn',
  templateUrl: './ng-style-learn.component.html',
  styleUrls: ['./ng-style-learn.component.css']
})
export class NgStyleLearnComponent implements OnInit {

  styleObject={
    'color': 'blue',
  };


  onChange(){
    this.styleObject={
      'color':'green',
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
