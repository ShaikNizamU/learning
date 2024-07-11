import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  message:string='';

  onClick(){
    this.message='Shaik Nizam'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
