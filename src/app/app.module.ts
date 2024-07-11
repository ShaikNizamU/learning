import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventLernComponent } from './Learnig-topics/event-lern/event-lern.component';
import { TwoWayBindingComponent } from './Learnig-topics/two-way-binding/two-way-binding.component';
import { DataBindingComponent } from './Learnig-topics/data-binding/data-binding.component';
import { PropertyBindingComponent } from './Learnig-topics/property-binding/property-binding.component';
import { EventBindingComponent } from './Learnig-topics/event-binding/event-binding.component';
import { NgIfLearnComponent } from './Learnig-topics/Structural-directive/ng-if-learn/ng-if-learn.component';
import { NgStyleLearnComponent } from './Learnig-topics/Attribute-directive/ng-style-learn/ng-style-learn.component';
import { NgClassLearnComponent } from './Learnig-topics/Attribute-directive/ng-class-learn/ng-class-learn.component';
import { NgForLearnComponent } from './Learnig-topics/Structural-directive/ng-for-learn/ng-for-learn.component';


@NgModule({
  declarations: [
    AppComponent,
    EventLernComponent,
    TwoWayBindingComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    NgIfLearnComponent,
    NgStyleLearnComponent,
    NgClassLearnComponent,
    NgForLearnComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
