import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-lern',
  templateUrl: './event-lern.component.html',
  styleUrls: ['./event-lern.component.css']
})
export class EventLernComponent implements OnInit {

  name: string='';

  constructor() { }

  ngOnInit(): void {
  }


  getName($event:string){
    this.name=(event.target as HTMLInputElement).value
  }
}
